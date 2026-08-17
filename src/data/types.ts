export type DiagramType = 
  | 'cube_vector'
  | 'tetrahedron_vector'
  | 'pyramid_sabcd'
  | 'oxyz_axes'
  | 'vector_cross'
  | 'vector_dot'
  | 'distance_point_plane'
  | 'cubic_graph'
  | 'rational_1_1'
  | 'rational_2_1'
  | 'asymptote_graph'
  | 'variation_table'
  | 'box_plot'
  | 'histogram_grouped';

export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  solution: string;
  tikz?: string;
  diagramType?: DiagramType;
  diagramTitle?: string;
}

export interface Lesson {
  id: string;
  chapterNumber: number;
  chapterTitle: string;
  lessonNumber: number | string;
  title: string;
  description: string;
  questionSets: Question[][];
}

export interface PlayerHistoryEntry {
  id: string;
  name: string;
  className: string;
  lessonId: string;
  lessonTitle: string;
  setIndex: number;
  score: number; // 0..15
  moneyReward: string;
  status: 'victory' | 'quit' | 'gameover';
  timeElapsed: number;
  timestamp: number;
}
