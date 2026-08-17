import React, { useState, useEffect, useRef, useMemo } from 'react';
import { 
  Play, HelpCircle, Phone, Users, CheckCircle2, XCircle, RotateCcw, 
  Lightbulb, Trophy, Star, Medal, Maximize, Minimize, BookOpen, 
  ChevronRight, Sparkles, Award, ShieldAlert, Clock, Search, Filter, 
  Trash2, Flame, BarChart2, Check, AlertTriangle, ArrowRight, UserCheck
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { allLessons, Lesson, Question } from './data';
import { PlayerHistoryEntry } from './data/types';
import { MathDiagram } from './components/MathDiagram';
import Latex from 'react-latex-next';

// --- PRIZE MONEY SCALE ---
const PRIZE_SCALE = [
  "100.000",
  "200.000",
  "300.000",
  "500.000",
  "1.000.000",
  "2.000.000",
  "3.600.000",
  "6.000.000",
  "10.000.000",
  "14.000.000",
  "22.000.000",
  "30.000.000",
  "40.000.000",
  "60.000.000",
  "85.000.000"
];

// --- Web Audio API Engine for 100% Offline Sound ---
class AudioEngine {
  private ctx: AudioContext | null = null;
  
  init() {
    if (!this.ctx) {
      this.ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playTone(frequency: number, type: OscillatorType, duration: number, volume = 0.1) {
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    
    osc.type = type;
    osc.frequency.setValueAtTime(frequency, this.ctx.currentTime);
    
    gain.gain.setValueAtTime(volume, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);
    
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    
    osc.start();
    osc.stop(this.ctx.currentTime + duration);
  }

  playHover() { this.playTone(600, 'sine', 0.1, 0.05); }
  playSelect() { this.playTone(300, 'square', 1.8, 0.05); }
  playCorrect() {
    this.playTone(440, 'sine', 0.35, 0.1); // A4
    setTimeout(() => this.playTone(554.37, 'sine', 0.35, 0.1), 100); // C#5
    setTimeout(() => this.playTone(659.25, 'sine', 0.7, 0.1), 200); // E5
  }
  playWrong() {
    this.playTone(200, 'sawtooth', 0.4, 0.1);
    setTimeout(() => this.playTone(150, 'sawtooth', 0.7, 0.1), 200);
  }
  playQuit() {
    this.playTone(350, 'sine', 0.3, 0.1);
    setTimeout(() => this.playTone(280, 'sine', 0.5, 0.1), 150);
  }
  playWin() {
    [440, 554.37, 659.25, 880, 1108.73].forEach((f, i) => {
      setTimeout(() => this.playTone(f, 'sine', 0.5, 0.1), i * 140);
    });
  }
}

const audio = new AudioEngine();

export default function App() {
  const [gameState, setGameState] = useState<'intro' | 'playing' | 'gameover' | 'victory' | 'quit'>('intro');
  const [playerName, setPlayerName] = useState('');
  const [playerClass, setPlayerClass] = useState('');
  
  // Lesson & Question Set Selection
  const [selectedLessonId, setSelectedLessonId] = useState<string>(allLessons[0]?.id || 'bai-1');
  const [questionSetIndex, setQuestionSetIndex] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<'play' | 'lessons' | 'leaderboard'>('play');

  const [currentQIndex, setCurrentQIndex] = useState(0);
  
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswerLocked, setIsAnswerLocked] = useState(false);
  const [showResultStatus, setShowResultStatus] = useState<'none' | 'correct' | 'wrong'>('none');
  
  const [lifelines, setLifelines] = useState({ fiftyFifty: true, askAudience: true, callFriend: true });
  const [hiddenOptions, setHiddenOptions] = useState<number[]>([]);
  
  const [activeModal, setActiveModal] = useState<'none' | 'audience' | 'friend' | 'solution' | 'confirm_quit' | 'ladder'>('none');
  const [audienceData, setAudienceData] = useState<number[]>([]);
  const [friendMessage, setFriendMessage] = useState('');
  
  const [timeElapsed, setTimeElapsed] = useState(0);
  const timerRef = useRef<number | null>(null);

  const [isFullscreen, setIsFullscreen] = useState(false);
  
  // History & Leaderboard State (All Players)
  const [playerHistory, setPlayerHistory] = useState<PlayerHistoryEntry[]>([]);
  const [historyFilter, setHistoryFilter] = useState<'all' | 'victory' | 'quit' | 'gameover'>('all');
  const [historySearch, setHistorySearch] = useState('');
  const [historyLessonFilter, setHistoryLessonFilter] = useState<string>('all');
  const [historyViewMode, setHistoryViewMode] = useState<'top' | 'all'>('top');

  const [shuffledOptions, setShuffledOptions] = useState<{text: string, originalIndex: number}[]>([]);
  const [correctAnswerIndex, setCorrectAnswerIndex] = useState(0);

  // Active Lesson Object
  const currentLesson: Lesson = allLessons.find(l => l.id === selectedLessonId) || allLessons[0];
  const currentQuestions: Question[] = currentLesson.questionSets[questionSetIndex] || currentLesson.questionSets[0];
  const currentQ: Question = currentQuestions[currentQIndex] || currentQuestions[0];

  // Load History from localStorage on Mount
  useEffect(() => {
    const saved = localStorage.getItem('ttp-player-history-v3');
    if (saved) {
      try {
        setPlayerHistory(JSON.parse(saved));
      } catch (e) {
        console.error('Error loading history:', e);
      }
    } else {
      // Migrate old leaderboard if exists
      const old = localStorage.getItem('ttp-leaderboard-v2');
      if (old) {
        try {
          const oldList = JSON.parse(old);
          const migrated: PlayerHistoryEntry[] = oldList.map((o: any, idx: number) => ({
            id: `legacy-${idx}-${o.date || Date.now()}`,
            name: o.name || 'Thí sinh',
            className: o.className || '12',
            lessonId: 'bai-1',
            lessonTitle: o.lessonTitle || 'Bài 1: Khảo sát hàm số',
            setIndex: 0,
            score: o.score || 0,
            moneyReward: o.score > 0 ? `${PRIZE_SCALE[Math.min(o.score - 1, 14)]} đ` : '0 đ',
            status: o.score >= 15 ? 'victory' : 'gameover',
            timeElapsed: 120,
            timestamp: o.date || Date.now()
          }));
          setPlayerHistory(migrated);
          localStorage.setItem('ttp-player-history-v3', JSON.stringify(migrated));
        } catch (e) {}
      }
    }
  }, []);

  // Save Player Result to Full History (All Players: Win, Quit, Lose)
  const recordPlayerResult = (status: 'victory' | 'quit' | 'gameover', score: number) => {
    const moneyReward = score > 0 ? `${PRIZE_SCALE[Math.min(score - 1, 14)]} đ` : '0 đ';
    
    const entry: PlayerHistoryEntry = {
      id: `${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      name: playerName.trim() || 'Thí sinh ẩn danh',
      className: playerClass.trim() || '12',
      lessonId: currentLesson.id,
      lessonTitle: currentLesson.title,
      setIndex: questionSetIndex,
      score,
      moneyReward,
      status,
      timeElapsed,
      timestamp: Date.now()
    };

    setPlayerHistory(prev => {
      const updated = [entry, ...prev];
      localStorage.setItem('ttp-player-history-v3', JSON.stringify(updated));
      return updated;
    });
  };

  const handleEndGame = (status: 'victory' | 'quit' | 'gameover') => {
    let finalScore = currentQIndex;
    if (status === 'victory') {
      finalScore = 15;
    } else if (status === 'quit') {
      // If quit, they keep current correct score (currentQIndex)
      finalScore = currentQIndex;
    } else if (status === 'gameover') {
      // If wrong answer: safe points logic
      if (currentQIndex >= 10) finalScore = 10;
      else if (currentQIndex >= 5) finalScore = 5;
      else finalScore = 0;
    }

    recordPlayerResult(status, finalScore);
    setGameState(status);
    setActiveModal('none');
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.log(`Fullscreen error: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  // Timer
  useEffect(() => {
    if (gameState === 'playing') {
      timerRef.current = window.setInterval(() => {
        setTimeElapsed(prev => prev + 1);
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [gameState]);

  const loadQuestion = (setIdx: number, qIdx: number) => {
    const sets = currentLesson.questionSets[setIdx] || currentLesson.questionSets[0];
    const q = sets[qIdx];
    if (!q) return;
    const opts = q.options.map((text, idx) => ({ text, originalIndex: idx }));
    // Shuffle options so A, B, C, D are evenly randomized
    opts.sort(() => Math.random() - 0.5);
    setShuffledOptions(opts);
    setCorrectAnswerIndex(opts.findIndex(o => o.originalIndex === q.correctAnswerIndex));
    setSelectedAnswer(null);
    setIsAnswerLocked(false);
    setShowResultStatus('none');
    setHiddenOptions([]);
    setActiveModal('none');
  };

  const startGame = (e: React.FormEvent) => {
    e.preventDefault();
    if (!playerName.trim() || !playerClass.trim()) return;
    audio.init();
    audio.playWin();
    setGameState('playing');
    setTimeElapsed(0);
    setCurrentQIndex(0);
    loadQuestion(questionSetIndex, 0);
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const formatDate = (timestamp: number) => {
    const d = new Date(timestamp);
    return `${d.getDate().toString().padStart(2, '0')}/${(d.getMonth() + 1).toString().padStart(2, '0')} ${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}`;
  };

  const handleSelectAnswer = (index: number) => {
    if (isAnswerLocked || hiddenOptions.includes(index)) return;
    audio.init();
    audio.playSelect();
    setSelectedAnswer(index);
    setIsAnswerLocked(true);

    setTimeout(() => {
      if (index === correctAnswerIndex) {
        audio.playCorrect();
        setShowResultStatus('correct');
      } else {
        audio.playWrong();
        setShowResultStatus('wrong');
      }
    }, 1800);
  };

  const handleNextAction = () => {
    if (showResultStatus === 'correct') {
      if (currentQIndex === 14) {
        audio.playWin();
        handleEndGame('victory');
      } else {
        const nextIdx = currentQIndex + 1;
        setCurrentQIndex(nextIdx);
        loadQuestion(questionSetIndex, nextIdx);
      }
    } else if (showResultStatus === 'wrong') {
      handleEndGame('gameover');
    }
  };

  const useFiftyFifty = () => {
    if (!lifelines.fiftyFifty || isAnswerLocked) return;
    audio.init();
    audio.playHover();
    setLifelines(prev => ({ ...prev, fiftyFifty: false }));
    
    let wrongOptions = [0, 1, 2, 3].filter(i => i !== correctAnswerIndex);
    wrongOptions.sort(() => Math.random() - 0.5);
    setHiddenOptions([wrongOptions[0], wrongOptions[1]]);
  };

  const useAskAudience = () => {
    if (!lifelines.askAudience || isAnswerLocked) return;
    audio.init();
    audio.playHover();
    setLifelines(prev => ({ ...prev, askAudience: false }));
    
    let data = [0, 0, 0, 0];
    let remaining = 100;
    
    const correctShare = Math.floor(Math.random() * 25) + 45; // 45-70%
    data[correctAnswerIndex] = correctShare;
    remaining -= correctShare;
    
    const otherIndices = [0, 1, 2, 3].filter(i => i !== correctAnswerIndex && !hiddenOptions.includes(i));
    otherIndices.forEach((idx, i) => {
      if (i === otherIndices.length - 1) {
        data[idx] = remaining;
      } else {
        const share = Math.floor(Math.random() * (remaining * 0.65));
        data[idx] = share;
        remaining -= share;
      }
    });
    
    setAudienceData(data);
    setActiveModal('audience');
  };

  const useCallFriend = () => {
    if (!lifelines.callFriend || isAnswerLocked) return;
    audio.init();
    audio.playHover();
    setLifelines(prev => ({ ...prev, callFriend: false }));
    
    const isCorrect = Math.random() < 0.85; // 85% accuracy
    const suggestedIndex = isCorrect 
      ? correctAnswerIndex 
      : [0, 1, 2, 3].filter(i => i !== correctAnswerIndex && !hiddenOptions.includes(i))[0] || 0;
    
    const optionsText = ['A', 'B', 'C', 'D'];
    setFriendMessage(`Chào ${playerName}! Câu này trong chương trình Toán 12 mình đã ôn rất kỹ. Mình chắc chắn đáp án đúng là phương án ${optionsText[suggestedIndex]}. Chúc bạn tiếp tục xuất sắc giành 15/15 câu nhé!`);
    setActiveModal('friend');
  };

  const restartGame = () => {
    setGameState('intro');
    setLifelines({ fiftyFifty: true, askAudience: true, callFriend: true });
    setSelectedAnswer(null);
    setIsAnswerLocked(false);
    setShowResultStatus('none');
    setActiveModal('none');
  };

  const clearAllHistory = () => {
    if (window.confirm("Bạn có chắc chắn muốn xóa toàn bộ lịch sử người chơi đã lưu? Hành động này không thể hoàn tác.")) {
      setPlayerHistory([]);
      localStorage.removeItem('ttp-player-history-v3');
      localStorage.removeItem('ttp-leaderboard-v2');
    }
  };

  // Filtered & Sorted History
  const filteredHistory = useMemo(() => {
    return playerHistory.filter(item => {
      const matchStatus = historyFilter === 'all' || item.status === historyFilter;
      const matchLesson = historyLessonFilter === 'all' || item.lessonId === historyLessonFilter;
      const matchSearch = historySearch.trim() === '' || 
        item.name.toLowerCase().includes(historySearch.toLowerCase()) || 
        item.className.toLowerCase().includes(historySearch.toLowerCase());
      return matchStatus && matchLesson && matchSearch;
    });
  }, [playerHistory, historyFilter, historyLessonFilter, historySearch]);

  const topLeaderboard = useMemo(() => {
    return [...filteredHistory].sort((a, b) => b.score - a.score || a.timeElapsed - b.timeElapsed);
  }, [filteredHistory]);

  const getFeedbackMessage = (status: 'victory' | 'quit' | 'gameover', score: number) => {
    if (status === 'victory' || score === 15) {
      return "Xuất sắc đỉnh cao! Bạn đã xuất sắc chinh phục trọn vẹn 15 câu hỏi và trở thành Triệu Phú Toán Học BTX!";
    }
    if (status === 'quit') {
      return `Quyết định dừng cuộc chơi rất thông minh và bản lĩnh! Bạn bảo toàn thành tích ${score}/15 câu đúng cùng phần thưởng xứng đáng.`;
    }
    if (score >= 10) return "Rất giỏi! Bạn đã vượt qua mốc số 10 quan trọng và nắm rất vững kiến thức trọng tâm Toán 12!";
    if (score >= 5) return "Khá tốt! Bạn đã vượt qua mốc số 5, tiếp tục luyện tập thêm các câu vận dụng để đạt điểm tối đa nhé!";
    return "Hãy ôn tập thêm công thức và kỹ năng giải toán 12 để chinh phục các mốc cao hơn nhé!";
  };

  // --- INTRO / HOME SCREEN ---
  if (gameState === 'intro') {
    return (
      <div className="min-h-screen bg-[#020024] text-white flex flex-col items-center justify-center p-3 sm:p-4 md:p-6 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] relative overflow-x-hidden">
        {/* Glowing aura */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(9,9,121,0.5)_0%,rgba(2,0,36,1)_100%)] z-0"></div>
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] min-w-[320px] min-h-[320px] bg-blue-500/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] min-w-[320px] min-h-[320px] bg-purple-500/20 rounded-full blur-[100px] pointer-events-none"></div>
        
        <header className="relative z-20 w-full max-w-4xl flex justify-between items-center py-2 px-3 mb-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-tr from-yellow-400 to-orange-600 rounded-full flex items-center justify-center border border-white shadow-[0_0_10px_rgba(251,191,36,0.5)]">
              <span className="text-sm md:text-base font-black italic">TP</span>
            </div>
            <span className="font-bold text-sm md:text-base bg-gradient-to-r from-yellow-300 to-white bg-clip-text text-transparent">Triệu Phú Toán BTX</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleFullscreen}
              className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 border border-slate-700 text-blue-300 hover:text-white transition-colors cursor-pointer"
              title="Toàn màn hình"
            >
              {isFullscreen ? <Minimize size={18} /> : <Maximize size={18} />}
            </button>
          </div>
        </header>

        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-slate-800/90 backdrop-blur-xl p-5 sm:p-7 md:p-8 rounded-3xl shadow-2xl z-10 border border-yellow-500/40 w-full max-w-3xl max-h-[92vh] overflow-y-auto custom-scrollbar"
        >
          {/* Header Title */}
          <div className="text-center mb-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-b from-yellow-300 to-yellow-600 rounded-full mx-auto flex items-center justify-center shadow-[0_0_25px_rgba(234,179,8,0.5)] mb-3 border-4 border-slate-800">
              <span className="text-3xl sm:text-4xl font-extrabold text-slate-900">$</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500 drop-shadow uppercase tracking-wider">
              Ai Là Triệu Phú
            </h1>
            <h2 className="text-base sm:text-lg font-bold text-blue-200 uppercase tracking-widest mt-0.5">Toán Học 12</h2>
            <div className="text-xs font-black tracking-tighter text-blue-400 mt-1">
              <span className="text-[10px] text-gray-400 uppercase font-normal mr-1 tracking-widest">Thiết kế bởi</span> GV <span className="text-white">Mr Thanh</span><span className="text-yellow-400">btx</span>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex border-b border-slate-700 mb-5 gap-2">
            <button
              onClick={() => setActiveTab('play')}
              className={`flex-1 py-2.5 px-3 text-xs sm:text-sm font-bold uppercase transition-all flex items-center justify-center gap-1.5 border-b-2 cursor-pointer ${activeTab === 'play' ? 'border-yellow-400 text-yellow-400 bg-yellow-400/10 rounded-t-lg' : 'border-transparent text-slate-400 hover:text-slate-200'}`}
            >
              <Play size={15} /> Bắt đầu
            </button>
            <button
              onClick={() => setActiveTab('lessons')}
              className={`flex-1 py-2.5 px-3 text-xs sm:text-sm font-bold uppercase transition-all flex items-center justify-center gap-1.5 border-b-2 cursor-pointer ${activeTab === 'lessons' ? 'border-yellow-400 text-yellow-400 bg-yellow-400/10 rounded-t-lg' : 'border-transparent text-slate-400 hover:text-slate-200'}`}
            >
              <BookOpen size={15} /> Bài học ({allLessons.length})
            </button>
            <button
              onClick={() => setActiveTab('leaderboard')}
              className={`flex-1 py-2.5 px-3 text-xs sm:text-sm font-bold uppercase transition-all flex items-center justify-center gap-1.5 border-b-2 cursor-pointer ${activeTab === 'leaderboard' ? 'border-yellow-400 text-yellow-400 bg-yellow-400/10 rounded-t-lg' : 'border-transparent text-slate-400 hover:text-slate-200'}`}
            >
              <Trophy size={15} /> Xếp hạng & Lịch sử ({playerHistory.length})
            </button>
          </div>

          {/* TAB 1: PLAY FORM */}
          {activeTab === 'play' && (
            <div>
              {/* Currently Selected Lesson Banner */}
              <div className="bg-slate-700/60 border border-blue-400/30 rounded-2xl p-4 mb-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="overflow-hidden">
                  <div className="text-[10px] sm:text-xs text-yellow-400 font-bold uppercase tracking-wider flex items-center gap-1">
                    <BookOpen size={12} /> Bài học đang chọn:
                  </div>
                  <div className="text-sm sm:text-base font-bold text-white truncate">{currentLesson.title}</div>
                  <div className="text-xs text-blue-300/80">Bộ đề: <span className="text-yellow-300 font-semibold">Bộ {questionSetIndex + 1}</span> (15 câu chuẩn LaTeX & hình mô phỏng)</div>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveTab('lessons')}
                  className="shrink-0 px-3 py-1.5 bg-blue-600/30 hover:bg-blue-600/60 border border-blue-400/50 rounded-lg text-xs font-semibold text-blue-200 transition-colors cursor-pointer"
                >
                  Đổi bài học
                </button>
              </div>

              {/* Player Info Form */}
              <form onSubmit={startGame} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-blue-300 mb-1 text-left">Họ và tên thí sinh</label>
                  <input 
                    type="text" 
                    placeholder="Nhập họ và tên..." 
                    required
                    value={playerName}
                    onChange={e => setPlayerName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-700/50 border border-blue-400/30 text-white placeholder-blue-300/50 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-all text-base"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-blue-300 mb-1 text-left">Lớp học</label>
                  <input 
                    type="text" 
                    placeholder="VD: 12A1, 12 Tin, 12 Chuyên..." 
                    required
                    value={playerClass}
                    onChange={e => setPlayerClass(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-700/50 border border-blue-400/30 text-white placeholder-blue-300/50 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-all text-base"
                  />
                </div>

                {/* Quick Set Selector */}
                <div>
                  <label className="block text-xs font-semibold text-blue-300 mb-1 text-left">Chọn bộ câu hỏi của bài này</label>
                  <div className="grid grid-cols-3 gap-2">
                    {[0, 1, 2].map((idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setQuestionSetIndex(idx)}
                        className={`py-2 px-3 rounded-xl text-xs sm:text-sm font-bold border transition-all cursor-pointer ${questionSetIndex === idx ? 'bg-yellow-500 text-slate-950 border-yellow-400 shadow-[0_0_10px_rgba(234,179,8,0.5)]' : 'bg-slate-700/40 text-slate-300 border-slate-600 hover:border-slate-400'}`}
                      >
                        Bộ đề {idx + 1}
                      </button>
                    ))}
                  </div>
                </div>

                <button 
                  type="submit"
                  className="w-full mt-6 bg-gradient-to-b from-yellow-400 to-yellow-600 hover:from-yellow-300 hover:to-yellow-500 text-slate-900 font-bold py-3.5 px-6 rounded-xl shadow-[0_6px_0_0_#a16207] active:shadow-[0_0px_0_0_#a16207] active:translate-y-[6px] transition-all text-base sm:text-lg flex items-center justify-center gap-2 uppercase tracking-wide cursor-pointer"
                >
                  <Play fill="currentColor" size={20} /> Bắt đầu cuộc chơi
                </button>
              </form>
            </div>
          )}

          {/* TAB 2: LESSON SELECTOR */}
          {activeTab === 'lessons' && (
            <div className="space-y-4">
              <div className="text-left mb-2">
                <h3 className="text-sm sm:text-base font-bold text-yellow-400 flex items-center gap-1.5">
                  <BookOpen size={16} /> Danh sách bài học Toán 12
                </h3>
                <p className="text-xs text-slate-400">Mỗi bài học gồm 3 bộ câu hỏi chuẩn hóa (15 câu/bộ) kèm hình học mô phỏng và công thức LaTeX.</p>
              </div>

              <div className="space-y-3">
                {allLessons.map((lesson) => {
                  const isSelected = selectedLessonId === lesson.id;
                  return (
                    <div 
                      key={lesson.id}
                      className={`p-4 rounded-2xl border transition-all text-left ${isSelected ? 'bg-gradient-to-r from-blue-900/80 to-slate-800 border-yellow-400 shadow-[0_0_15px_rgba(234,179,8,0.25)]' : 'bg-slate-700/40 border-slate-600/60 hover:border-slate-400'}`}
                    >
                      <div className="flex justify-between items-start gap-2">
                        <div>
                          <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-blue-500/20 text-blue-300 border border-blue-500/30 mb-1">
                            {lesson.chapterTitle}
                          </span>
                          <h4 className="text-sm sm:text-base font-bold text-white">{lesson.title}</h4>
                          <p className="text-xs text-slate-300 mt-1"><Latex>{lesson.description}</Latex></p>
                        </div>
                        {isSelected && (
                          <span className="shrink-0 bg-yellow-400 text-slate-950 text-[10px] font-extrabold px-2 py-0.5 rounded-full flex items-center gap-1">
                            <CheckCircle2 size={11} /> Đang chọn
                          </span>
                        )}
                      </div>

                      {/* Set Select Buttons for this Lesson */}
                      <div className="mt-3 pt-3 border-t border-slate-700/80 flex flex-wrap items-center justify-between gap-2">
                        <div className="text-xs text-slate-400 font-medium">Chọn bộ đề:</div>
                        <div className="flex gap-1.5">
                          {lesson.questionSets.map((_, sIdx) => {
                            const isSetSelected = isSelected && questionSetIndex === sIdx;
                            return (
                              <button
                                key={sIdx}
                                onClick={() => {
                                  setSelectedLessonId(lesson.id);
                                  setQuestionSetIndex(sIdx);
                                  setActiveTab('play');
                                }}
                                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${isSetSelected ? 'bg-yellow-400 text-slate-950 font-extrabold shadow-sm' : 'bg-slate-800 hover:bg-slate-700 text-blue-200 border border-slate-600'}`}
                              >
                                Bộ {sIdx + 1}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <button
                onClick={() => setActiveTab('play')}
                className="w-full mt-4 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl text-sm uppercase tracking-wide transition-colors cursor-pointer"
              >
                Tiếp tục với bài học đã chọn
              </button>
            </div>
          )}

          {/* TAB 3: LEADERBOARD & FULL PLAYER HISTORY */}
          {activeTab === 'leaderboard' && (
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-slate-700 pb-3">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-yellow-400 flex items-center gap-2 uppercase">
                    <Trophy size={20} /> Xếp Hạng & Lịch Sử Người Chơi
                  </h3>
                  <p className="text-xs text-slate-400">Lưu lại tất cả thí sinh Thua cuộc, Dừng cuộc chơi và Chiến thắng</p>
                </div>

                <div className="flex items-center gap-2 self-end sm:self-auto">
                  <button
                    onClick={() => setHistoryViewMode(prev => prev === 'top' ? 'all' : 'top')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all border cursor-pointer ${historyViewMode === 'top' ? 'bg-yellow-500 text-slate-950 border-yellow-400' : 'bg-blue-600 text-white border-blue-500'}`}
                  >
                    {historyViewMode === 'top' ? '🏆 Bảng Vàng Top Đầu' : '📜 Toàn bộ lượt chơi'}
                  </button>
                  {playerHistory.length > 0 && (
                    <button
                      onClick={clearAllHistory}
                      className="p-1.5 text-red-400 hover:text-red-300 hover:bg-red-900/30 rounded-lg transition-colors cursor-pointer"
                      title="Xóa toàn bộ lịch sử"
                    >
                      <Trash2 size={16} />
                    </button>
                  )}
                </div>
              </div>

              {/* Filters & Search Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 bg-slate-900/60 p-3 rounded-2xl border border-slate-700">
                {/* Search */}
                <div className="relative">
                  <Search size={14} className="absolute left-3 top-3 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Tìm tên hoặc lớp..."
                    value={historySearch}
                    onChange={e => setHistorySearch(e.target.value)}
                    className="w-full pl-8 pr-3 py-1.5 rounded-xl bg-slate-800 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-yellow-400"
                  />
                </div>

                {/* Status Filter */}
                <div>
                  <select
                    value={historyFilter}
                    onChange={e => setHistoryFilter(e.target.value as any)}
                    className="w-full px-3 py-1.5 rounded-xl bg-slate-800 border border-slate-700 text-xs text-white focus:outline-none focus:border-yellow-400"
                  >
                    <option value="all">Tất cả trạng thái</option>
                    <option value="victory">🏆 Chiến thắng (15/15)</option>
                    <option value="quit">🛑 Dừng cuộc chơi</option>
                    <option value="gameover">❌ Thua cuộc (Sai câu)</option>
                  </select>
                </div>

                {/* Lesson Filter */}
                <div>
                  <select
                    value={historyLessonFilter}
                    onChange={e => setHistoryLessonFilter(e.target.value)}
                    className="w-full px-3 py-1.5 rounded-xl bg-slate-800 border border-slate-700 text-xs text-white focus:outline-none focus:border-yellow-400 truncate"
                  >
                    <option value="all">Tất cả bài học</option>
                    {allLessons.map(l => (
                      <option key={l.id} value={l.id}>{l.title}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Summary Stats Badges */}
              {playerHistory.length > 0 && (
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="bg-slate-700/40 p-2 rounded-xl border border-slate-600/40">
                    <div className="text-[10px] text-slate-400 uppercase">Tổng lượt thi</div>
                    <div className="text-base font-extrabold text-white">{playerHistory.length}</div>
                  </div>
                  <div className="bg-green-950/40 p-2 rounded-xl border border-green-700/40">
                    <div className="text-[10px] text-green-300 uppercase">Nhà Triệu Phú</div>
                    <div className="text-base font-extrabold text-green-400">
                      {playerHistory.filter(h => h.status === 'victory').length}
                    </div>
                  </div>
                  <div className="bg-yellow-950/40 p-2 rounded-xl border border-yellow-700/40">
                    <div className="text-[10px] text-yellow-300 uppercase">Điểm cao nhất</div>
                    <div className="text-base font-extrabold text-yellow-400">
                      {Math.max(...playerHistory.map(h => h.score), 0)} / 15
                    </div>
                  </div>
                </div>
              )}

              {/* Empty State */}
              {filteredHistory.length === 0 ? (
                <div className="py-8 text-center text-slate-400 text-sm bg-slate-900/40 rounded-2xl border border-dashed border-slate-700">
                  {playerHistory.length === 0 
                    ? "Chưa có lượt chơi nào được lưu. Hãy tham gia thi đấu để ghi danh đầu tiên!" 
                    : "Không tìm thấy kết quả phù hợp với bộ lọc."}
                </div>
              ) : (
                <div className="space-y-2 max-h-[48vh] overflow-y-auto custom-scrollbar pr-1">
                  {(historyViewMode === 'top' ? topLeaderboard : filteredHistory).map((entry, idx) => {
                    const isTop1 = idx === 0 && historyViewMode === 'top';
                    const isTop2 = idx === 1 && historyViewMode === 'top';
                    const isTop3 = idx === 2 && historyViewMode === 'top';
                    
                    let cardBorder = "border-slate-700/60 bg-slate-800/60";
                    let rankBadge = <span className="text-slate-400 font-bold text-xs">{idx + 1}</span>;

                    if (isTop1) {
                      cardBorder = "border-yellow-400/60 bg-gradient-to-r from-yellow-500/20 via-slate-800 to-slate-800";
                      rankBadge = <span className="text-yellow-400 font-black text-sm">🥇 #1</span>;
                    } else if (isTop2) {
                      cardBorder = "border-slate-300/60 bg-gradient-to-r from-slate-400/20 via-slate-800 to-slate-800";
                      rankBadge = <span className="text-slate-200 font-black text-sm">🥈 #2</span>;
                    } else if (isTop3) {
                      cardBorder = "border-amber-600/60 bg-gradient-to-r from-amber-600/20 via-slate-800 to-slate-800";
                      rankBadge = <span className="text-amber-400 font-black text-sm">🥉 #3</span>;
                    }

                    return (
                      <div 
                        key={entry.id || idx}
                        className={`p-3 rounded-2xl border transition-all ${cardBorder} flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2`}
                      >
                        <div className="flex items-center gap-3 overflow-hidden flex-1">
                          <div className="w-8 text-center shrink-0">
                            {rankBadge}
                          </div>
                          
                          <div className="overflow-hidden">
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-sm text-white truncate">{entry.name}</span>
                              <span className="text-xs text-blue-300 font-medium">({entry.className})</span>
                              
                              {/* Status Tag */}
                              {entry.status === 'victory' && (
                                <span className="bg-green-500/20 border border-green-500/40 text-green-300 text-[10px] font-extrabold px-1.5 py-0.2 rounded-full flex items-center gap-0.5">
                                  <Trophy size={10} /> Chiến thắng
                                </span>
                              )}
                              {entry.status === 'quit' && (
                                <span className="bg-amber-500/20 border border-amber-500/40 text-amber-300 text-[10px] font-bold px-1.5 py-0.2 rounded-full flex items-center gap-0.5">
                                  🛑 Dừng cuộc chơi
                                </span>
                              )}
                              {entry.status === 'gameover' && (
                                <span className="bg-red-500/20 border border-red-500/40 text-red-300 text-[10px] font-bold px-1.5 py-0.2 rounded-full flex items-center gap-0.5">
                                  ❌ Thua cuộc
                                </span>
                              )}
                            </div>

                            <div className="text-[11px] text-slate-400 flex flex-wrap items-center gap-x-2 gap-y-0.5 mt-0.5">
                              <span className="text-blue-200 truncate max-w-[200px] sm:max-w-none">{entry.lessonTitle} (Bộ {entry.setIndex + 1})</span>
                              <span>•</span>
                              <span>{formatDate(entry.timestamp)}</span>
                              <span>•</span>
                              <span className="flex items-center gap-0.5"><Clock size={10} /> {formatTime(entry.timeElapsed)}</span>
                            </div>
                          </div>
                        </div>

                        {/* Score & Reward Pill */}
                        <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
                          <div className="flex items-center text-yellow-400 text-xs font-black bg-yellow-400/10 border border-yellow-400/30 px-2 py-1 rounded-xl gap-1">
                            <Star size={12} className="fill-yellow-400" />
                            <span>Lv.{entry.score}</span>
                          </div>
                          
                          <div className="text-right">
                            <div className="text-sm font-black text-yellow-400">{entry.score}/15 câu</div>
                            <div className="text-[10px] text-green-300 font-bold">{entry.moneyReward}</div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              <button
                onClick={() => setActiveTab('play')}
                className="w-full mt-4 py-3 bg-yellow-500 hover:bg-yellow-400 text-slate-950 font-bold rounded-xl text-sm uppercase tracking-wide transition-colors cursor-pointer"
              >
                Vào chơi ngay
              </button>
            </div>
          )}
        </motion.div>
      </div>
    );
  }

  // --- GAME OVER / VICTORY / QUIT SCREEN ---
  if (gameState === 'gameover' || gameState === 'victory' || gameState === 'quit') {
    const isVictory = gameState === 'victory';
    const isQuit = gameState === 'quit';
    const isGameOver = gameState === 'gameover';

    let finalScore = currentQIndex;
    if (isVictory) finalScore = 15;
    else if (isQuit) finalScore = currentQIndex;
    else if (isGameOver) {
      if (currentQIndex >= 10) finalScore = 10;
      else if (currentQIndex >= 5) finalScore = 5;
      else finalScore = 0;
    }
    
    const finalMoney = finalScore > 0 ? `${PRIZE_SCALE[Math.min(finalScore - 1, 14)]} đ` : '0 đ';

    return (
      <div className="min-h-screen bg-[#020024] text-white flex items-center justify-center p-3 sm:p-4 md:p-6 relative overflow-hidden">
        {/* Confetti if victory */}
        {isVictory && (
          <div className="absolute inset-0 pointer-events-none z-0 flex flex-wrap justify-center overflow-hidden">
            {[...Array(40)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ y: -50, x: Math.random() * window.innerWidth, rotate: 0 }}
                animate={{ y: window.innerHeight + 50, x: Math.random() * window.innerWidth, rotate: 360 }}
                transition={{ duration: 2 + Math.random() * 3, repeat: Infinity, delay: Math.random() * 2 }}
                className="w-3 h-3 absolute"
                style={{ backgroundColor: ['#ef4444', '#3b82f6', '#eab308', '#22c55e', '#a855f7'][Math.floor(Math.random() * 5)] }}
              />
            ))}
          </div>
        )}
        
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(9,9,121,0.5)_0%,rgba(2,0,36,1)_100%)] z-0"></div>
        
        <motion.div 
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-slate-800/90 backdrop-blur-xl p-6 sm:p-8 md:p-10 rounded-3xl shadow-2xl z-10 border-2 border-yellow-500/40 w-full max-w-xl text-center max-h-[92vh] overflow-y-auto custom-scrollbar"
        >
          <div className="mb-4 flex justify-center">
            {isVictory && (
              <Trophy size={72} className="text-yellow-400 drop-shadow-[0_0_20px_rgba(250,204,21,0.6)] animate-bounce" />
            )}
            {isQuit && (
              <ShieldAlert size={72} className="text-amber-400 drop-shadow-[0_0_15px_rgba(251,191,36,0.5)]" />
            )}
            {isGameOver && (
              <Medal size={72} className="text-blue-400 drop-shadow-[0_0_15px_rgba(96,165,250,0.5)]" />
            )}
          </div>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500 uppercase">
            {isVictory && 'BẠN LÀ NHÀ TRIỆU PHÚ TOÁN BTX!'}
            {isQuit && 'BẢO TOÀN THÀNH TÍCH THÀNH CÔNG!'}
            {isGameOver && 'KẾT THÚC TRÒ CHƠI!'}
          </h1>
          
          <div className="text-sm sm:text-base text-blue-100 mt-2 font-medium">
            Thí sinh: <span className="text-yellow-400 font-bold">{playerName}</span> - Lớp: <span className="text-yellow-400 font-bold">{playerClass}</span>
          </div>
          <div className="text-xs text-slate-400 mt-0.5">
            Bài thi: <span className="text-blue-300 font-semibold">{currentLesson.title}</span> (Bộ {questionSetIndex + 1})
          </div>
          <div className="text-xs font-black tracking-tighter text-blue-400 mt-1 mb-6">
            <span className="text-[10px] text-gray-400 uppercase font-normal mr-1 tracking-widest">Thiết kế bởi</span> GV <span className="text-white">Mr Thanh</span><span className="text-yellow-400">btx</span>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-6">
            <div className="bg-slate-700/50 p-3.5 rounded-2xl border border-blue-500/20">
              <div className="text-xs text-blue-300 mb-0.5">Số câu trả lời đúng</div>
              <div className="text-2xl sm:text-3xl font-extrabold text-yellow-400">{finalScore} / 15</div>
              <div className="flex items-center justify-center gap-1 mt-1 text-xs text-yellow-300 font-bold">
                <Star size={13} className="fill-yellow-400" /> Cấp độ: Lv.{finalScore}
              </div>
            </div>
            <div className="bg-slate-700/50 p-3.5 rounded-2xl border border-blue-500/20">
              <div className="text-xs text-blue-300 mb-0.5">Tiền thưởng nhận được</div>
              <div className="text-xl sm:text-2xl font-extrabold text-green-400">{finalMoney}</div>
              <div className="text-xs text-slate-400 mt-1 flex items-center justify-center gap-1">
                <Clock size={12} /> {formatTime(timeElapsed)}
              </div>
            </div>
          </div>
          
          <div className="bg-blue-950/60 p-3.5 rounded-xl border border-blue-500/30 mb-6">
            <p className="text-sm sm:text-base text-blue-100 font-medium leading-relaxed">
              {getFeedbackMessage(isVictory ? 'victory' : isQuit ? 'quit' : 'gameover', finalScore)}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button 
              onClick={() => {
                const nextSet = (questionSetIndex + 1) % currentLesson.questionSets.length;
                setQuestionSetIndex(nextSet);
                setGameState('playing');
                setTimeElapsed(0);
                setCurrentQIndex(0);
                setLifelines({ fiftyFifty: true, askAudience: true, callFriend: true });
                loadQuestion(nextSet, 0);
              }}
              className="flex-1 bg-gradient-to-b from-yellow-400 to-yellow-600 hover:from-yellow-300 hover:to-yellow-500 text-slate-950 font-bold py-3 px-4 rounded-xl shadow-[0_4px_0_0_#a16207] active:translate-y-[4px] active:shadow-none transition-all text-sm uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
            >
              <RotateCcw size={16} /> Chơi tiếp bộ {(questionSetIndex + 1) % 3 + 1}
            </button>
            <button 
              onClick={restartGame}
              className="flex-1 bg-slate-700 hover:bg-slate-600 text-white font-bold py-3 px-4 rounded-xl border border-slate-600 transition-all text-sm uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
            >
              <BookOpen size={16} /> Về trang chủ & Xếp hạng
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  // --- PLAYING STATE RENDERER ---
  return (
    <div className="min-h-screen bg-[#020024] text-white font-sans overflow-hidden flex flex-col relative select-none">
      {/* Background with stage lights effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(9,9,121,0.5)_0%,rgba(2,0,36,1)_100%)] z-0"></div>
      <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] min-w-[350px] min-h-[350px] bg-blue-500/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] min-w-[350px] min-h-[350px] bg-purple-500/20 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Header Area */}
      <header className="relative z-10 w-full px-3 sm:px-4 md:px-6 py-2.5 flex flex-wrap justify-between items-center bg-black/40 backdrop-blur-md border-b border-blue-500/30 gap-y-2">
        <div className="flex items-center space-x-2 md:space-x-3">
          <div className="hidden sm:flex w-10 h-10 md:w-12 md:h-12 bg-gradient-to-tr from-yellow-400 to-orange-600 rounded-full items-center justify-center border border-white shadow-[0_0_15px_rgba(251,191,36,0.5)] shrink-0">
            <span className="text-base md:text-lg font-black italic">TP</span>
          </div>
          <div className="overflow-hidden">
            <div className="flex items-center gap-2">
              <h1 className="text-xs sm:text-sm md:text-base font-bold bg-gradient-to-r from-yellow-300 to-white bg-clip-text text-transparent truncate">
                {currentLesson.title}
              </h1>
              <span className="bg-yellow-400/20 border border-yellow-400/40 text-yellow-400 text-[10px] font-extrabold px-1.5 py-0.2 rounded shrink-0">
                Bộ {questionSetIndex + 1}
              </span>
            </div>
            <p className="text-[10px] md:text-xs text-blue-300 tracking-wider truncate max-w-[200px] sm:max-w-none">
              Thí sinh: {playerName} ({playerClass})
            </p>
          </div>
        </div>
        
        <div className="flex items-center space-x-2 sm:space-x-4 md:space-x-6 shrink-0">
          <div className="text-center flex flex-col items-center">
            <p className="text-[8px] uppercase text-blue-300 hidden sm:block">Thời gian</p>
            <p className="text-sm sm:text-base md:text-xl font-mono font-bold text-yellow-400">{formatTime(timeElapsed)}</p>
          </div>
          
          {/* Lifelines & Controls */}
          <div className="flex space-x-1.5 sm:space-x-2 md:space-x-3 items-center">
            <button 
              disabled={!lifelines.fiftyFifty || isAnswerLocked}
              onClick={useFiftyFifty}
              title="Trợ giúp 50:50 (loại 2 đáp án sai)"
              className={`w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full border-2 flex items-center justify-center font-bold text-[10px] sm:text-xs transition-all shadow-lg hover:scale-105 ${lifelines.fiftyFifty ? 'border-yellow-400 bg-blue-900/80 text-yellow-400 hover:bg-blue-800 cursor-pointer' : 'border-gray-600 bg-gray-800/80 text-gray-500 opacity-40 relative'}`}
            >
              {!lifelines.fiftyFifty && <div className="absolute w-full h-[2px] bg-red-600 rotate-45"></div>}
              50:50
            </button>
            <button 
              disabled={!lifelines.askAudience || isAnswerLocked}
              onClick={useAskAudience}
              title="Hỏi ý kiến khán giả"
              className={`w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full border-2 flex items-center justify-center transition-all shadow-lg hover:scale-105 ${lifelines.askAudience ? 'border-yellow-400 bg-blue-900/80 text-yellow-400 hover:bg-blue-800 cursor-pointer' : 'border-gray-600 bg-gray-800/80 text-gray-500 opacity-40 relative'}`}
            >
              {!lifelines.askAudience && <div className="absolute w-full h-[2px] bg-red-600 rotate-45"></div>}
              <Users size={16} />
            </button>
            <button 
              disabled={!lifelines.callFriend || isAnswerLocked}
              onClick={useCallFriend}
              title="Gọi điện cho người thân"
              className={`w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full border-2 flex items-center justify-center transition-all shadow-lg hover:scale-105 ${lifelines.callFriend ? 'border-yellow-400 bg-blue-900/80 text-yellow-400 hover:bg-blue-800 cursor-pointer' : 'border-gray-600 bg-gray-800/80 text-gray-500 opacity-40 relative'}`}
            >
              {!lifelines.callFriend && <div className="absolute w-full h-[2px] bg-red-600 rotate-45"></div>}
              <Phone size={16} />
            </button>
            
            <div className="w-[1px] h-6 bg-blue-500/30 mx-1 hidden sm:block"></div>
            
            {/* Mobile Ladder Button */}
            <button
              onClick={() => setActiveModal('ladder')}
              className="lg:hidden w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-yellow-400/60 bg-yellow-500/20 text-yellow-300 hover:bg-yellow-500/40 flex items-center justify-center transition-all shadow-md cursor-pointer"
              title="Xem thang tiền thưởng"
            >
              <Trophy size={15} />
            </button>

            {/* Fullscreen Button */}
            <button
              onClick={toggleFullscreen}
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full border border-blue-400/50 bg-blue-900/40 text-blue-300 hover:bg-blue-800 hover:text-white flex items-center justify-center transition-all shadow-lg cursor-pointer"
              title={isFullscreen ? "Thu nhỏ" : "Phóng to toàn màn hình"}
            >
              {isFullscreen ? <Minimize size={16} /> : <Maximize size={16} />}
            </button>

            {/* DỪNG CUỘC CHƠI (STOP GAME & KEEP SCORE) */}
            <button
              disabled={isAnswerLocked}
              onClick={() => {
                audio.init();
                audio.playQuit();
                setActiveModal('confirm_quit');
              }}
              className="px-2.5 sm:px-3.5 py-1.5 bg-gradient-to-r from-amber-600/30 to-amber-700/30 hover:from-amber-600/60 hover:to-amber-700/60 border border-amber-400/60 rounded-xl text-[10px] sm:text-xs font-extrabold text-amber-300 transition-all shrink-0 flex items-center gap-1 shadow-md hover:scale-105 cursor-pointer disabled:opacity-50"
              title="Dừng cuộc chơi để bảo toàn số điểm và tiền thưởng"
            >
              <ShieldAlert size={14} />
              <span className="hidden xs:inline sm:inline">Dừng chơi</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Game Area */}
      <div className="flex-1 relative z-10 flex flex-col lg:flex-row w-full overflow-hidden">
        
        {/* Left Side: Question, Diagram and Answers */}
        <div className="flex-[3] flex flex-col justify-start md:justify-center items-center px-3 sm:px-6 md:px-10 py-3 md:py-5 space-y-3 md:space-y-5 h-full overflow-y-auto custom-scrollbar">
          
          {/* Progress Bar and Question Number */}
          <div className="w-full max-w-3xl flex justify-between items-center">
            <div className="flex items-center space-x-2 bg-blue-600/20 px-3 py-1 rounded-full border border-blue-400/30">
              <span className="text-yellow-400 text-xs sm:text-sm font-bold uppercase">CÂU {String(currentQIndex + 1).padStart(2, '0')} / 15</span>
            </div>
            
            <div className="text-xs text-blue-300 font-semibold flex items-center gap-1.5">
              <span className="text-[10px] text-gray-400">Mức thưởng:</span>
              <span className="text-yellow-300 font-bold">{PRIZE_SCALE[currentQIndex]} đ</span>
            </div>
          </div>

          {/* Question Box */}
          <motion.div 
            key={`q-${currentQIndex}`}
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="relative w-full max-w-3xl"
          >
            <div className="bg-gradient-to-r from-blue-950 via-blue-900 to-blue-950 border-2 border-blue-400/70 py-3.5 sm:py-5 md:py-6 px-4 sm:px-8 md:px-10 text-center rounded-2xl md:rounded-[28px] shadow-[0_0_35px_rgba(30,58,138,0.5)]">
              <h2 className="text-base sm:text-lg md:text-xl font-medium leading-relaxed drop-shadow overflow-x-auto text-left sm:text-center">
                <Latex>{currentQ.question}</Latex>
              </h2>
              
              {/* High-Precision TikZ / SVG Geometric Simulation Diagram */}
              <MathDiagram 
                tikz={currentQ.tikz}
                type={currentQ.diagramType}
                title={currentQ.diagramTitle}
                questionText={currentQ.question}
              />
            </div>
          </motion.div>

          {/* Answer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-3 md:gap-3.5 w-full max-w-3xl">
            {shuffledOptions.map((optObj, idx) => {
              const optionLabels = ['A', 'B', 'C', 'D'];
              const isHidden = hiddenOptions.includes(idx);
              const isSelected = selectedAnswer === idx;
              const isCorrectAnswer = correctAnswerIndex === idx;
              
              let btnClass = "w-full py-2.5 sm:py-3 md:py-3.5 px-4 sm:px-5 rounded-xl md:rounded-2xl text-left transition-all text-sm sm:text-base flex items-start overflow-hidden break-words border ";
              
              if (isHidden) {
                btnClass += "opacity-0 pointer-events-none";
              } else if (!isAnswerLocked) {
                btnClass += "bg-gradient-to-r from-blue-900/90 to-blue-800/90 border-blue-400/50 hover:bg-yellow-500 hover:border-yellow-300 hover:text-black cursor-pointer group shadow-md";
              } else if (isSelected && showResultStatus === 'none') {
                btnClass += "bg-gradient-to-r from-yellow-500 to-yellow-600 border-white text-black font-semibold shadow-[0_0_20px_rgba(234,179,8,0.5)] animate-pulse";
              } else if (showResultStatus !== 'none') {
                if (isCorrectAnswer) {
                  btnClass += "bg-gradient-to-r from-green-600 to-green-500 border-white text-white font-bold shadow-[0_0_25px_rgba(34,197,94,0.6)] animate-pulse";
                } else if (isSelected && showResultStatus === 'wrong') {
                  btnClass += "bg-gradient-to-r from-red-600 to-red-500 border-white text-white shadow-[0_0_20px_rgba(239,68,68,0.6)] animate-shake";
                } else {
                  btnClass += "bg-blue-950/40 border-blue-900/30 text-white/40";
                }
              }

              return (
                <button
                  key={`opt-${idx}`}
                  disabled={isAnswerLocked || isHidden}
                  onClick={() => handleSelectAnswer(idx)}
                  onMouseEnter={() => !isAnswerLocked && audio.playHover()}
                  className={btnClass}
                >
                  <span className={`font-bold mr-2 md:mr-2.5 shrink-0 ${(!isAnswerLocked || (isSelected && showResultStatus === 'none')) && !isHidden ? 'text-yellow-400 group-hover:text-black' : ''}`}>
                    {optionLabels[idx]}:
                  </span>
                  <span className="font-medium overflow-x-auto"><Latex>{optObj.text}</Latex></span>
                </button>
              );
            })}
          </div>

          {/* Action Row after answering (Solution & Next Question) */}
          {showResultStatus !== 'none' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="w-full max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-3 bg-slate-800/80 p-3 rounded-2xl border border-blue-400/40"
            >
              <button
                onClick={() => setActiveModal('solution')}
                className="w-full sm:w-auto px-4 py-2 bg-blue-600/40 hover:bg-blue-600/70 border border-blue-400 text-blue-200 hover:text-white rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <Lightbulb size={16} /> Xem lời giải & hình minh họa
              </button>

              <button
                onClick={handleNextAction}
                className="w-full sm:w-auto px-6 py-2.5 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white font-extrabold rounded-xl shadow-lg uppercase tracking-wider text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                {showResultStatus === 'correct' ? (currentQIndex === 14 ? 'Hoàn thành cuộc thi' : 'Câu tiếp theo') : 'Kết thúc cuộc chơi'}
                <ChevronRight size={16} />
              </button>
            </motion.div>
          )}

        </div>
          
        {/* Right Side: Score Ladder (Desktop) */}
        <div className="hidden lg:flex flex-1 bg-black/50 border-l border-blue-900/60 p-4 flex-col justify-between overflow-y-auto min-w-[260px] max-w-xs custom-scrollbar">
          <div className="mb-2">
            <div className="text-xs font-bold text-blue-300 uppercase tracking-wider mb-2">Thang tiền thưởng</div>
          </div>
          <div className="space-y-1 flex flex-col-reverse h-full justify-end">
            {[...Array(15)].map((_, i) => {
              const isCurrent = i === currentQIndex;
              const isPassed = i < currentQIndex;
              const isSafeHaven = (i + 1) % 5 === 0;
              
              let itemClass = "flex items-center justify-between px-2.5 py-1 rounded text-xs transition-all ";
              let spanNumClass = "w-5 font-bold ";
              let spanLineClass = "flex-1 border-b mx-1.5 ";
              let spanPrizeClass = "font-bold ";
              
              if (isCurrent) {
                itemClass += "bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-black animate-pulse shadow-[0_0_12px_rgba(249,115,22,0.5)]";
                spanLineClass += "border-white/40";
              } else if (isPassed) {
                itemClass += "text-yellow-400/80";
                spanLineClass += "border-yellow-400/20";
              } else if (isSafeHaven) {
                itemClass += "bg-blue-900/40 text-white font-bold border border-blue-400/30";
                spanLineClass += "border-white/20";
              } else {
                itemClass += "text-slate-400";
                spanNumClass += "text-slate-500";
                spanLineClass += "border-slate-800";
                spanPrizeClass += "italic text-slate-400";
              }

              return (
                <div key={i} className={itemClass}>
                  <span className={spanNumClass}>{i + 1}</span>
                  <span className={spanLineClass}></span>
                  <span className={spanPrizeClass}>{PRIZE_SCALE[i]}</span>
                </div>
              );
            })}
          </div>
          
          <div className="mt-3 pt-2.5 border-t border-slate-700/60 text-center">
            <div className="text-[10px] text-slate-400 uppercase">Thiết kế bởi</div>
            <div className="text-xs font-bold text-white">GV Mr Thanh <span className="text-yellow-400">btx</span></div>
          </div>
        </div>
      </div>

      {/* Footer info bar */}
      <footer className="relative z-10 px-4 py-2 bg-black/60 border-t border-blue-900/40 text-center text-[10px] text-blue-300/70 flex justify-between items-center">
        <span>Toán 12 • Chuẩn LaTeX & Mô Phỏng Không Gian 3D</span>
        <span>GV Mr Thanh btx</span>
      </footer>

      {/* Modals Overlay */}
      <AnimatePresence>
        {activeModal !== 'none' && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 15 }} 
              animate={{ scale: 1, y: 0 }} 
              exit={{ scale: 0.9, y: 15 }}
              className="bg-slate-800 border-2 border-blue-400 rounded-3xl shadow-2xl p-6 w-full max-w-lg relative max-h-[88vh] overflow-y-auto custom-scrollbar"
            >
              {activeModal !== 'confirm_quit' && (
                <button 
                  onClick={() => setActiveModal('none')}
                  className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  <XCircle size={24} />
                </button>
              )}

              {/* MODAL: CONFIRM QUIT GAME */}
              {activeModal === 'confirm_quit' && (
                <div className="text-center">
                  <div className="w-14 h-14 mx-auto bg-amber-500/20 border-2 border-amber-400 rounded-full flex items-center justify-center mb-3">
                    <ShieldAlert size={32} className="text-amber-400" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-yellow-400 mb-2">
                    Xác nhận dừng cuộc chơi?
                  </h3>
                  <p className="text-sm text-slate-200 mb-4 leading-relaxed">
                    Bạn đang ở <span className="font-bold text-yellow-300">Câu {currentQIndex + 1}</span>. Nếu dừng lại lúc này, bạn sẽ bảo toàn được thành tích <span className="font-bold text-green-400">{currentQIndex}/15 câu đúng</span> và nhận phần thưởng <span className="font-bold text-yellow-400">{currentQIndex > 0 ? `${PRIZE_SCALE[currentQIndex - 1]} đ` : '0 đ'}</span>.
                  </p>
                  
                  <div className="flex gap-3">
                    <button
                      onClick={() => handleEndGame('quit')}
                      className="flex-1 py-2.5 px-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold rounded-xl shadow-md uppercase text-xs sm:text-sm transition-all cursor-pointer"
                    >
                      Đồng ý dừng chơi
                    </button>
                    <button
                      onClick={() => setActiveModal('none')}
                      className="flex-1 py-2.5 px-4 bg-slate-700 hover:bg-slate-600 text-white font-bold rounded-xl border border-slate-600 uppercase text-xs sm:text-sm transition-colors cursor-pointer"
                    >
                      Tiếp tục thi đấu
                    </button>
                  </div>
                </div>
              )}

              {/* MODAL: AUDIENCE HELP */}
              {activeModal === 'audience' && (
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-yellow-400 mb-5 flex items-center gap-2">
                    <Users /> Ý kiến khán giả trường quay
                  </h3>
                  <div className="flex h-48 items-end justify-center gap-5 border-b border-slate-600 pb-2">
                    {['A', 'B', 'C', 'D'].map((label, idx) => (
                      <div key={label} className="flex flex-col items-center w-14 group">
                        <div className="text-xs font-bold text-white mb-2">{audienceData[idx]}%</div>
                        <div 
                          className="w-full bg-gradient-to-t from-blue-600 to-blue-400 rounded-t transition-all duration-700 group-hover:from-yellow-600 group-hover:to-yellow-400"
                          style={{ height: `${Math.max(audienceData[idx] * 1.6, 6)}px` }}
                        ></div>
                        <div className="mt-2 font-extrabold text-yellow-400 text-sm">{label}</div>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-blue-200 mt-4 text-center">Khán giả đã bình chọn xong. Bạn hãy cân nhắc để đưa ra quyết định!</p>
                </div>
              )}

              {/* MODAL: CALL FRIEND */}
              {activeModal === 'friend' && (
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-yellow-400 mb-4 flex items-center gap-2">
                    <Phone /> Gọi điện thoại cho người thân
                  </h3>
                  <div className="bg-slate-700/60 p-4 rounded-2xl border border-slate-600 text-blue-100 text-sm leading-relaxed relative">
                    "{friendMessage}"
                  </div>
                </div>
              )}

              {/* MODAL: LADDER (THANG TIỀN THƯỞNG CHO ĐIỆN THOẠI) */}
              {activeModal === 'ladder' && (
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-base sm:text-lg font-bold text-yellow-400 flex items-center gap-2">
                      <Trophy size={20} /> Thang tiền thưởng 15 câu hỏi
                    </h3>
                  </div>
                  <div className="space-y-1 flex flex-col-reverse max-h-[60vh] overflow-y-auto custom-scrollbar pr-1">
                    {[...Array(15)].map((_, i) => {
                      const isCurrent = i === currentQIndex;
                      const isPassed = i < currentQIndex;
                      const isSafeHaven = (i + 1) % 5 === 0;
                      
                      let itemClass = "flex items-center justify-between px-3 py-1.5 rounded-xl text-xs transition-all ";
                      let spanNumClass = "w-6 font-bold ";
                      let spanLineClass = "flex-1 border-b mx-2 ";
                      let spanPrizeClass = "font-bold ";
                      
                      if (isCurrent) {
                        itemClass += "bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-black animate-pulse shadow-[0_0_12px_rgba(249,115,22,0.5)]";
                        spanLineClass += "border-white/40";
                      } else if (isPassed) {
                        itemClass += "text-yellow-400/80 bg-slate-800/40";
                        spanLineClass += "border-yellow-400/20";
                      } else if (isSafeHaven) {
                        itemClass += "bg-blue-900/40 text-white font-bold border border-blue-400/30";
                        spanLineClass += "border-white/20";
                      } else {
                        itemClass += "text-slate-400";
                        spanNumClass += "text-slate-500";
                        spanLineClass += "border-slate-800";
                        spanPrizeClass += "italic text-slate-400";
                      }

                      return (
                        <div key={i} className={itemClass}>
                          <span className={spanNumClass}>Câu {i + 1}</span>
                          <span className={spanLineClass}></span>
                          <span className={spanPrizeClass}>{PRIZE_SCALE[i]} đ</span>
                        </div>
                      );
                    })}
                  </div>
                  <div className="mt-3 pt-2 border-t border-slate-700/60 text-center text-xs text-slate-400">
                    Mốc an toàn quan trọng: <span className="text-yellow-400 font-bold">Câu 5</span>, <span className="text-yellow-400 font-bold">Câu 10</span>, <span className="text-green-400 font-bold">Câu 15</span>
                  </div>
                </div>
              )}

              {/* MODAL: SOLUTION */}
              {activeModal === 'solution' && (
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-yellow-400 mb-3 flex items-center gap-2">
                    <Lightbulb /> Lời giải chi tiết & Mô phỏng hình học
                  </h3>
                  <div className="bg-slate-700/50 p-4 rounded-2xl border border-slate-600 text-blue-100 leading-relaxed text-sm overflow-x-auto">
                    <Latex>{currentQ.solution}</Latex>
                    <MathDiagram 
                      tikz={currentQ.tikz}
                      type={currentQ.diagramType}
                      title="Mô phỏng hình học & Đồ thị"
                      questionText={currentQ.question + " " + currentQ.solution}
                    />
                  </div>
                </div>
              )}

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Animation Styles */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shake {
          10%, 90% { transform: translate3d(-1px, 0, 0); }
          20%, 80% { transform: translate3d(2px, 0, 0); }
          30%, 50%, 70% { transform: translate3d(-4px, 0, 0); }
          40%, 60% { transform: translate3d(4px, 0, 0); }
        }
        .animate-shake {
          animation: shake 0.5s cubic-bezier(.36,.07,.19,.97) both;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
          height: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.2);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(59, 130, 246, 0.5);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(234, 179, 8, 0.7);
        }
      `}} />
    </div>
  );
}
