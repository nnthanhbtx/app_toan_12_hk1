import React, { useState } from 'react';
import { DiagramType } from '../data/types';
import Latex from 'react-latex-next';
import { BarChart3, TrendingUp, Table, Layers } from 'lucide-react';

interface MathDiagramProps {
  type?: DiagramType;
  tikz?: string;
  title?: string;
  questionText?: string;
}

// Helper: Parse Cubic Function Coefficients y = ax^3 + bx^2 + cx + d
function parseCubic(text: string): { a: number; b: number; c: number; d: number } | null {
  const clean = text.replace(/\s+/g, '').replace(/f\(x\)=/g, 'y=').replace(/\$/g, '');
  const match = clean.match(/y=([+-]?\d*)x\^3([+-]\d*x\^2)?([+-]\d*x)?([+-]\d+)?/);
  if (!match) return null;

  const parseCoeff = (str: string | undefined, defaultVal: number): number => {
    if (!str) return defaultVal;
    if (str === '+' || str === '') return 1;
    if (str === '-') return -1;
    return parseFloat(str);
  };

  const a = parseCoeff(match[1], 1);
  const bStr = match[2] ? match[2].replace('x^2', '') : undefined;
  const b = parseCoeff(bStr, 0);
  const cStr = match[3] ? match[3].replace('x', '') : undefined;
  const c = parseCoeff(cStr, 0);
  const d = match[4] ? parseFloat(match[4]) : 0;

  return { a, b, c, d };
}

// Helper: Parse Rational 1/1 Function y = (ax+b)/(cx+d)
function parseRational11(text: string): { a: number; b: number; c: number; d: number } | null {
  const clean = text.replace(/\s+/g, '').replace(/f\(x\)=/g, 'y=').replace(/\$/g, '');
  const fracMatch = clean.match(/y=\\frac\{([+-]?\d*x)?([+-]?\d+)?\}\{([+-]?\d*x)?([+-]?\d+)?\}/) ||
                    clean.match(/y=\(([+-]?\d*x)?([+-]?\d+)?\)\/\(([+-]?\d*x)?([+-]?\d+)?\)/);
  if (!fracMatch) return null;

  const parsePart = (xPart?: string, constPart?: string) => {
    let coeff = 0;
    if (xPart) {
      const cStr = xPart.replace('x', '');
      if (cStr === '' || cStr === '+') coeff = 1;
      else if (cStr === '-') coeff = -1;
      else coeff = parseFloat(cStr);
    }
    const constant = constPart ? parseFloat(constPart) : 0;
    return { coeff, constant };
  };

  const num = parsePart(fracMatch[1], fracMatch[2]);
  const den = parsePart(fracMatch[3], fracMatch[4]);

  if (den.coeff === 0 && den.constant === 0) return null;

  return {
    a: num.coeff,
    b: num.constant,
    c: den.coeff,
    d: den.constant
  };
}

// Helper: Parse 3D Point M(x, y, z)
function parsePoint3D(text: string): { name: string; x: number; y: number; z: number } | null {
  const clean = text.replace(/\s+/g, '');
  const match = clean.match(/([A-Z])\((\-?\d+(?:\.\d+)?);(\-?\d+(?:\.\d+)?);(\-?\d+(?:\.\d+)?)\)/) ||
                clean.match(/([A-Z])\((\-?\d+(?:\.\d+)?),(\-?\d+(?:\.\d+)?),(\-?\d+(?:\.\d+)?)\)/);
  if (match) {
    return {
      name: match[1],
      x: parseFloat(match[2]),
      y: parseFloat(match[3]),
      z: parseFloat(match[4])
    };
  }
  return null;
}

export const MathDiagram: React.FC<MathDiagramProps> = ({ type, tikz, title, questionText = '' }) => {
  const lower = questionText.toLowerCase();
  const [viewMode, setViewMode] = useState<'both' | 'graph' | 'bbt'>('both');

  const cubicData = React.useMemo(() => parseCubic(questionText), [questionText]);
  const rational11Data = React.useMemo(() => parseRational11(questionText), [questionText]);
  const point3DData = React.useMemo(() => parsePoint3D(questionText), [questionText]);

  // Determine which diagram is mathematically appropriate
  const diagramConfig = React.useMemo(() => {
    if (type) return { type, title: title || 'Mô phỏng hình học' };

    // 1. If cubic function found in question:
    if (cubicData) {
      return { 
        type: 'dynamic_cubic', 
        title: `Hàm số bậc ba: y = ${cubicData.a === -1 ? '-' : cubicData.a === 1 ? '' : cubicData.a}x³ ${cubicData.b > 0 ? '+' : ''}${cubicData.b !== 0 ? cubicData.b + 'x²' : ''} ${cubicData.c > 0 ? '+' : ''}${cubicData.c !== 0 ? cubicData.c + 'x' : ''} ${cubicData.d > 0 ? '+' : ''}${cubicData.d !== 0 ? cubicData.d : ''}` 
      };
    }

    // 2. If rational 1/1 function found in question:
    if (rational11Data) {
      return { 
        type: 'dynamic_rational_1_1', 
        title: `Hàm số phân thức bậc nhất trên bậc nhất` 
      };
    }

    // 3. 3D Coordinate Point
    if (point3DData || (lower.includes("hệ tọa độ") && (lower.includes("oxyz") || lower.includes("vectơ i") || lower.includes("tọa độ")))) {
      return { type: 'oxyz_axes', title: 'Hệ trục tọa độ Oxyz trong không gian' };
    }

    // 4. Cube / Parallelepiped Vector rules
    if (lower.includes("hình hộp") || lower.includes("lập phương") || lower.includes("abcd.a'b'c'd'") || lower.includes("aa'") || lower.includes("ac'")) {
      return { type: 'cube_vector', title: 'Quy tắc vectơ trong hình hộp ABCD.A\'B\'C\'D\'' };
    }

    // 5. Tetrahedron / Pyramid
    if (lower.includes("tứ diện") || lower.includes("trọng tâm tứ diện") || lower.includes("ga + gb + gc + gd")) {
      return { type: 'tetrahedron_vector', title: 'Tứ diện ABCD & Trọng tâm G' };
    }
    if (lower.includes("hình chóp") || lower.includes("s.abcd") || lower.includes("s.abc")) {
      return { type: 'pyramid_sabcd', title: 'Hình chóp trong không gian' };
    }

    // 6. Cross Product & Dot Product
    if (lower.includes("tích có hướng") || lower.includes("[\\vec") || lower.includes("vuông góc với cả hai") || lower.includes("vectơ pháp tuyến")) {
      return { type: 'vector_cross', title: 'Vectơ tích có hướng [a, b] vuông góc với a và b' };
    }
    if (lower.includes("góc giữa hai vectơ") || lower.includes("tích vô hướng") || lower.includes("cos(")) {
      return { type: 'vector_dot', title: 'Góc giữa hai vectơ & Tích vô hướng' };
    }

    // 7. Distance from point to plane
    if (lower.includes("khoảng cách từ điểm") || (lower.includes("mặt phẳng (p)") && lower.includes("khoảng cách"))) {
      return { type: 'distance_point_plane', title: 'Khoảng cách từ điểm M đến mặt phẳng (P)' };
    }

    // 8. Rational 2/1 (Oblique Asymptote)
    if (lower.includes("tiệm cận xiên")) {
      return { type: 'rational_2_1', title: 'Đồ thị hàm phân thức bậc 2/1 & Tiệm cận xiên' };
    }

    // 9. Statistics
    if (lower.includes("tứ phân vị") || lower.includes("khoảng tứ phân vị") || lower.includes("q_1") || lower.includes("q_2") || lower.includes("q_3") || lower.includes("biểu đồ hộp")) {
      return { type: 'box_plot', title: 'Biểu đồ hộp (Box Plot) & Khoảng tứ phân vị' };
    }
    if (lower.includes("ghép nhóm") || lower.includes("khoảng biến thiên") || lower.includes("bảng phân bố") || lower.includes("phương sai") || lower.includes("độ lệch chuẩn")) {
      return { type: 'histogram_grouped', title: 'Biểu đồ mẫu số liệu ghép nhóm' };
    }

    return null;
  }, [type, title, cubicData, rational11Data, point3DData, lower, questionText]);

  if (!diagramConfig && !tikz) {
    return null;
  }

  const hasGraphAndBBT = diagramConfig?.type === 'dynamic_cubic' || diagramConfig?.type === 'dynamic_rational_1_1';

  return (
    <div className="my-2.5 sm:my-3.5 w-full max-w-lg mx-auto bg-slate-900/95 border border-blue-500/40 rounded-2xl p-2.5 sm:p-3.5 shadow-[0_4px_25px_rgba(0,0,0,0.6)] overflow-hidden">
      {/* Header with Title & Optional Tab Toggle */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-1.5 border-b border-slate-700/60 pb-2 mb-2">
        <div className="text-[11px] sm:text-xs font-bold text-yellow-400 uppercase tracking-wider text-center sm:text-left flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-yellow-400 animate-ping"></span>
          <Latex>{diagramConfig?.title || 'Hình vẽ mô phỏng'}</Latex>
        </div>

        {/* View Toggle for Functions */}
        {hasGraphAndBBT && (
          <div className="flex items-center bg-slate-800 p-0.5 rounded-lg border border-slate-700 text-[10px] font-bold">
            <button
              onClick={() => setViewMode('both')}
              className={`px-2 py-1 rounded-md transition-all flex items-center gap-1 ${viewMode === 'both' ? 'bg-blue-600 text-white shadow' : 'text-slate-400 hover:text-white'}`}
            >
              <Layers size={11} /> Cả hai
            </button>
            <button
              onClick={() => setViewMode('bbt')}
              className={`px-2 py-1 rounded-md transition-all flex items-center gap-1 ${viewMode === 'bbt' ? 'bg-yellow-500 text-slate-950 font-extrabold shadow' : 'text-slate-400 hover:text-white'}`}
            >
              <Table size={11} /> Bảng biến thiên
            </button>
            <button
              onClick={() => setViewMode('graph')}
              className={`px-2 py-1 rounded-md transition-all flex items-center gap-1 ${viewMode === 'graph' ? 'bg-blue-600 text-white shadow' : 'text-slate-400 hover:text-white'}`}
            >
              <TrendingUp size={11} /> Đồ thị
            </button>
          </div>
        )}
      </div>

      {/* Content Rendering */}
      <div className="flex flex-col justify-center items-center w-full space-y-2.5">
        {diagramConfig?.type === 'dynamic_cubic' && cubicData && (
          <DynamicCubicView
            a={cubicData.a}
            b={cubicData.b}
            c={cubicData.c}
            d={cubicData.d}
            viewMode={viewMode}
          />
        )}
        {diagramConfig?.type === 'dynamic_rational_1_1' && rational11Data && (
          <DynamicRational11View
            a={rational11Data.a}
            b={rational11Data.b}
            c={rational11Data.c}
            d={rational11Data.d}
            viewMode={viewMode}
          />
        )}
        {diagramConfig?.type === 'oxyz_axes' && (
          <OxyzAxesDiagram point={point3DData || undefined} />
        )}
        {diagramConfig?.type === 'cube_vector' && <CubeVectorDiagram />}
        {diagramConfig?.type === 'tetrahedron_vector' && <TetrahedronDiagram />}
        {diagramConfig?.type === 'pyramid_sabcd' && <PyramidDiagram />}
        {diagramConfig?.type === 'vector_cross' && <VectorCrossDiagram />}
        {diagramConfig?.type === 'vector_dot' && <VectorDotDiagram />}
        {diagramConfig?.type === 'distance_point_plane' && <DistancePointPlaneDiagram />}
        {diagramConfig?.type === 'rational_2_1' && <Rational21Diagram />}
        {diagramConfig?.type === 'box_plot' && <BoxPlotDiagram />}
        {diagramConfig?.type === 'histogram_grouped' && <HistogramGroupedDiagram />}
      </div>
    </div>
  );
};

// =========================================================================
// 1. CUBIC FUNCTION VIEW (GRAPH + TEXTBOOK BBT)
// =========================================================================
interface DynamicCubicProps {
  a: number;
  b: number;
  c: number;
  d: number;
  viewMode: 'both' | 'graph' | 'bbt';
}

const DynamicCubicView: React.FC<DynamicCubicProps> = ({ a, b, c, d, viewMode }) => {
  const f = (x: number) => a * x * x * x + b * x * x + c * x + d;

  const deltaPrime = b * b - 3 * a * c;
  let cp1: { x: number; y: number; type: 'cd' | 'ct' } | null = null;
  let cp2: { x: number; y: number; type: 'cd' | 'ct' } | null = null;

  if (deltaPrime > 0 && a !== 0) {
    const xA = (-b - Math.sqrt(deltaPrime)) / (3 * a);
    const xB = (-b + Math.sqrt(deltaPrime)) / (3 * a);
    const minX = Math.min(xA, xB);
    const maxX = Math.max(xA, xB);
    
    // Sort from left to right on the real line
    const yLeft = f(minX);
    const yRight = f(maxX);

    if (a > 0) {
      cp1 = { x: minX, y: yLeft, type: 'cd' }; // Cực đại bên trái
      cp2 = { x: maxX, y: yRight, type: 'ct' }; // Cực tiểu bên phải
    } else {
      cp1 = { x: minX, y: yLeft, type: 'ct' }; // Cực tiểu bên trái
      cp2 = { x: maxX, y: yRight, type: 'cd' }; // Cực đại bên phải
    }
  }

  const showGraph = viewMode === 'both' || viewMode === 'graph';
  const showBBT = viewMode === 'both' || viewMode === 'bbt';

  return (
    <div className="w-full flex flex-col items-center space-y-2.5">
      {/* 1. TEXTBOOK VARIATION TABLE (BẢNG BIẾN THIÊN CHUẨN SGK) */}
      {showBBT && (
        <div className="w-full">
          <CubicTextbookBBT a={a} cp1={cp1} cp2={cp2} />
        </div>
      )}

      {/* 2. MATHEMATICAL EXACT SVG GRAPH */}
      {showGraph && (
        <div className="w-full flex justify-center">
          <CubicExactGraph a={a} b={b} c={c} d={d} cp1={cp1} cp2={cp2} f={f} />
        </div>
      )}
    </div>
  );
};

// --- SVG TEXTBOOK BBT FOR CUBIC ---
const CubicTextbookBBT: React.FC<{ a: number; cp1: any; cp2: any }> = ({ a, cp1, cp2 }) => {
  const x1Str = cp1 ? cp1.x.toFixed(1).replace('.0', '') : '-1';
  const x2Str = cp2 ? cp2.x.toFixed(1).replace('.0', '') : '1';
  const y1Str = cp1 ? cp1.y.toFixed(1).replace('.0', '') : (a > 0 ? '2' : '-2');
  const y2Str = cp2 ? cp2.y.toFixed(1).replace('.0', '') : (a > 0 ? '-2' : '2');

  const width = 360;
  const height = 155;

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full max-w-full h-auto drop-shadow-sm select-none">
      <defs>
        <marker id="bbt-arr-up" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 1 L 10 5 L 0 9 z" fill="#38bdf8" />
        </marker>
        <marker id="bbt-arr-down" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 1 L 10 5 L 0 9 z" fill="#f87171" />
        </marker>
      </defs>

      {/* Background Frame */}
      <rect x="0" y="0" width={width} height={height} rx="10" fill="#090d16" stroke="#2563eb" strokeWidth="1.2" />

      {/* Header Label Column Box */}
      <line x1="55" y1="0" x2="55" y2={height} stroke="#3b82f6" strokeWidth="1.2" />
      <line x1="0" y1="35" x2={width} y2="35" stroke="#3b82f6" strokeWidth="1.2" />
      <line x1="0" y1="70" x2={width} y2="70" stroke="#3b82f6" strokeWidth="1.2" />

      {/* Column Labels */}
      <text x="27" y="23" fill="#facc15" fontSize="13" fontWeight="bold" textAnchor="middle">x</text>
      <text x="27" y="56" fill="#facc15" fontSize="13" fontWeight="bold" textAnchor="middle">y'</text>
      <text x="27" y="118" fill="#facc15" fontSize="13" fontWeight="bold" textAnchor="middle">y</text>

      {/* ROW 1: X VALUES */}
      <text x="80" y="23" fill="#94a3b8" fontSize="12" textAnchor="middle">-∞</text>
      <text x="160" y="23" fill="#ffffff" fontSize="13" fontWeight="bold" textAnchor="middle">{x1Str}</text>
      <text x="250" y="23" fill="#ffffff" fontSize="13" fontWeight="bold" textAnchor="middle">{x2Str}</text>
      <text x="330" y="23" fill="#94a3b8" fontSize="12" textAnchor="middle">+∞</text>

      {/* Vertical separators for roots */}
      <line x1="160" y1="35" x2="160" y2="70" stroke="#1e293b" strokeWidth="1" strokeDasharray="3 3" />
      <line x1="250" y1="35" x2="250" y2="70" stroke="#1e293b" strokeWidth="1" strokeDasharray="3 3" />

      {/* ROW 2: Y' SIGNS */}
      {a > 0 ? (
        <>
          <text x="110" y="56" fill="#4ade80" fontSize="16" fontWeight="bold" textAnchor="middle">+</text>
          <text x="160" y="56" fill="#cbd5e1" fontSize="13" fontWeight="bold" textAnchor="middle">0</text>
          <text x="205" y="56" fill="#f87171" fontSize="16" fontWeight="bold" textAnchor="middle">-</text>
          <text x="250" y="56" fill="#cbd5e1" fontSize="13" fontWeight="bold" textAnchor="middle">0</text>
          <text x="295" y="56" fill="#4ade80" fontSize="16" fontWeight="bold" textAnchor="middle">+</text>
        </>
      ) : (
        <>
          <text x="110" y="56" fill="#f87171" fontSize="16" fontWeight="bold" textAnchor="middle">-</text>
          <text x="160" y="56" fill="#cbd5e1" fontSize="13" fontWeight="bold" textAnchor="middle">0</text>
          <text x="205" y="56" fill="#4ade80" fontSize="16" fontWeight="bold" textAnchor="middle">+</text>
          <text x="250" y="56" fill="#cbd5e1" fontSize="13" fontWeight="bold" textAnchor="middle">0</text>
          <text x="295" y="56" fill="#f87171" fontSize="16" fontWeight="bold" textAnchor="middle">-</text>
        </>
      )}

      {/* ROW 3: Y ARROWS & LIMITS */}
      {a > 0 ? (
        <>
          {/* -inf -> y1 (CĐ) */}
          <text x="75" y="142" fill="#94a3b8" fontSize="11" textAnchor="middle">-∞</text>
          <line x1="88" y1="138" x2="148" y2="92" stroke="#38bdf8" strokeWidth="2.5" markerEnd="url(#bbt-arr-up)" />
          <text x="160" y="90" fill="#facc15" fontSize="12" fontWeight="bold" textAnchor="middle">{y1Str}</text>

          {/* y1 -> y2 (CT) */}
          <line x1="172" y1="92" x2="238" y2="138" stroke="#f87171" strokeWidth="2.5" markerEnd="url(#bbt-arr-down)" />
          <text x="250" y="146" fill="#4ade80" fontSize="12" fontWeight="bold" textAnchor="middle">{y2Str}</text>

          {/* y2 -> +inf */}
          <line x1="262" y1="138" x2="318" y2="92" stroke="#38bdf8" strokeWidth="2.5" markerEnd="url(#bbt-arr-up)" />
          <text x="332" y="90" fill="#94a3b8" fontSize="11" textAnchor="middle">+∞</text>
        </>
      ) : (
        <>
          {/* +inf -> y1 (CT) */}
          <text x="75" y="90" fill="#94a3b8" fontSize="11" textAnchor="middle">+∞</text>
          <line x1="88" y1="92" x2="148" y2="138" stroke="#f87171" strokeWidth="2.5" markerEnd="url(#bbt-arr-down)" />
          <text x="160" y="146" fill="#4ade80" fontSize="12" fontWeight="bold" textAnchor="middle">{y1Str}</text>

          {/* y1 -> y2 (CĐ) */}
          <line x1="172" y1="138" x2="238" y2="92" stroke="#38bdf8" strokeWidth="2.5" markerEnd="url(#bbt-arr-up)" />
          <text x="250" y="90" fill="#facc15" fontSize="12" fontWeight="bold" textAnchor="middle">{y2Str}</text>

          {/* y2 -> -inf */}
          <line x1="262" y1="92" x2="318" y2="138" stroke="#f87171" strokeWidth="2.5" markerEnd="url(#bbt-arr-down)" />
          <text x="332" y="142" fill="#94a3b8" fontSize="11" textAnchor="middle">-∞</text>
        </>
      )}
    </svg>
  );
};

// --- SVG EXACT CUBIC GRAPH ---
const CubicExactGraph: React.FC<{ a: number; b: number; c: number; d: number; cp1: any; cp2: any; f: (x: number) => number }> = ({ a, b, c, d, cp1, cp2, f }) => {
  const width = 340;
  const height = 210;
  const margin = { left: 40, right: 30, top: 25, bottom: 30 };
  const plotW = width - margin.left - margin.right;
  const plotH = height - margin.top - margin.bottom;

  const xMin = cp1 && cp2 ? Math.min(cp1.x, cp2.x) - 1.2 : -3;
  const xMax = cp1 && cp2 ? Math.max(cp1.x, cp2.x) + 1.2 : 3;

  let yMin = cp1 && cp2 ? Math.min(cp1.y, cp2.y) - 1.5 : -4;
  let yMax = cp1 && cp2 ? Math.max(cp1.y, cp2.y) + 1.5 : 4;
  if (yMin === yMax) { yMin -= 2; yMax += 2; }

  const mapX = (x: number) => margin.left + ((x - xMin) / (xMax - xMin)) * plotW;
  const mapY = (y: number) => margin.top + plotH - ((y - yMin) / (yMax - yMin)) * plotH;

  const originX = mapX(0);
  const originY = mapY(0);

  const steps = 70;
  const points: string[] = [];
  for (let i = 0; i <= steps; i++) {
    const x = xMin + (i / steps) * (xMax - xMin);
    const y = f(x);
    const clampedY = Math.max(yMin - 4, Math.min(yMax + 4, y));
    points.push(`${i === 0 ? 'M' : 'L'} ${mapX(x).toFixed(1)} ${mapY(clampedY).toFixed(1)}`);
  }

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full max-w-[320px] h-auto drop-shadow-md">
      <defs>
        <marker id="axis-arr-cub" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 1 L 10 5 L 0 9 z" fill="#64748b" />
        </marker>
      </defs>

      <rect x="0" y="0" width={width} height={height} rx="10" fill="#0f172a" stroke="#1e293b" strokeWidth="1" />

      {/* Axes */}
      <line x1={margin.left - 15} y1={Math.max(margin.top + 10, Math.min(height - margin.bottom, originY))} x2={width - margin.right + 15} y2={Math.max(margin.top + 10, Math.min(height - margin.bottom, originY))} stroke="#475569" strokeWidth="1.5" markerEnd="url(#axis-arr-cub)" />
      <line x1={Math.max(margin.left, Math.min(width - margin.right, originX))} y1={height - margin.bottom + 10} x2={Math.max(margin.left, Math.min(width - margin.right, originX))} y2={margin.top - 10} stroke="#475569" strokeWidth="1.5" markerEnd="url(#axis-arr-cub)" />
      <text x={width - margin.right + 18} y={originY + 4} fill="#94a3b8" fontSize="11" fontWeight="bold">x</text>
      <text x={originX + 6} y={margin.top - 10} fill="#94a3b8" fontSize="11" fontWeight="bold">y</text>
      <text x={originX - 10} y={originY + 12} fill="#64748b" fontSize="10">O</text>

      {/* Curve */}
      <path d={points.join(' ')} fill="none" stroke="#38bdf8" strokeWidth="2.8" strokeLinecap="round" />

      {/* Points */}
      {cp1 && (
        <g>
          <line x1={mapX(cp1.x)} y1={mapY(cp1.y)} x2={mapX(cp1.x)} y2={originY} stroke={cp1.type === 'cd' ? '#facc15' : '#4ade80'} strokeWidth="1" strokeDasharray="3 2" />
          <line x1={mapX(cp1.x)} y1={mapY(cp1.y)} x2={originX} y2={mapY(cp1.y)} stroke={cp1.type === 'cd' ? '#facc15' : '#4ade80'} strokeWidth="1" strokeDasharray="3 2" />
          <circle cx={mapX(cp1.x)} cy={mapY(cp1.y)} r="4" fill={cp1.type === 'cd' ? '#facc15' : '#4ade80'} stroke="#fff" strokeWidth="1.2" />
          <text x={mapX(cp1.x)} y={mapY(cp1.y) + (cp1.type === 'cd' ? -7 : 15)} fill={cp1.type === 'cd' ? '#facc15' : '#4ade80'} fontSize="9.5" fontWeight="bold" textAnchor="middle">
            {cp1.type === 'cd' ? `CĐ(${cp1.x.toFixed(0)};${cp1.y.toFixed(0)})` : `CT(${cp1.x.toFixed(0)};${cp1.y.toFixed(0)})`}
          </text>
        </g>
      )}

      {cp2 && (
        <g>
          <line x1={mapX(cp2.x)} y1={mapY(cp2.y)} x2={mapX(cp2.x)} y2={originY} stroke={cp2.type === 'cd' ? '#facc15' : '#4ade80'} strokeWidth="1" strokeDasharray="3 2" />
          <line x1={mapX(cp2.x)} y1={mapY(cp2.y)} x2={originX} y2={mapY(cp2.y)} stroke={cp2.type === 'cd' ? '#facc15' : '#4ade80'} strokeWidth="1" strokeDasharray="3 2" />
          <circle cx={mapX(cp2.x)} cy={mapY(cp2.y)} r="4" fill={cp2.type === 'cd' ? '#facc15' : '#4ade80'} stroke="#fff" strokeWidth="1.2" />
          <text x={mapX(cp2.x)} y={mapY(cp2.y) + (cp2.type === 'cd' ? -7 : 15)} fill={cp2.type === 'cd' ? '#facc15' : '#4ade80'} fontSize="9.5" fontWeight="bold" textAnchor="middle">
            {cp2.type === 'cd' ? `CĐ(${cp2.x.toFixed(0)};${cp2.y.toFixed(0)})` : `CT(${cp2.x.toFixed(0)};${cp2.y.toFixed(0)})`}
          </text>
        </g>
      )}
    </svg>
  );
};

// =========================================================================
// 2. RATIONAL 1/1 VIEW (GRAPH + TEXTBOOK BBT)
// =========================================================================
interface DynamicRational11Props {
  a: number;
  b: number;
  c: number;
  d: number;
  viewMode: 'both' | 'graph' | 'bbt';
}

const DynamicRational11View: React.FC<DynamicRational11Props> = ({ a, b, c, d, viewMode }) => {
  const tcd = -d / (c || 1);
  const tcn = a / (c || 1);
  const det = a * d - b * c;

  const showGraph = viewMode === 'both' || viewMode === 'graph';
  const showBBT = viewMode === 'both' || viewMode === 'bbt';

  return (
    <div className="w-full flex flex-col items-center space-y-2.5">
      {showBBT && (
        <div className="w-full">
          <Rational11TextbookBBT tcd={tcd} tcn={tcn} det={det} />
        </div>
      )}

      {showGraph && (
        <div className="w-full flex justify-center">
          <DynamicRational11Plot a={a} b={b} c={c} d={d} />
        </div>
      )}
    </div>
  );
};

// --- SVG TEXTBOOK BBT FOR RATIONAL 1/1 ---
const Rational11TextbookBBT: React.FC<{ tcd: number; tcn: number; det: number }> = ({ tcd, tcn, det }) => {
  const tcdStr = tcd.toFixed(1).replace('.0', '');
  const tcnStr = tcn.toFixed(1).replace('.0', '');
  const isInc = det > 0;

  const width = 360;
  const height = 155;

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full max-w-full h-auto drop-shadow-sm select-none">
      <defs>
        <marker id="bbt-arr-up2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 1 L 10 5 L 0 9 z" fill="#38bdf8" />
        </marker>
        <marker id="bbt-arr-down2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 1 L 10 5 L 0 9 z" fill="#f87171" />
        </marker>
      </defs>

      <rect x="0" y="0" width={width} height={height} rx="10" fill="#090d16" stroke="#2563eb" strokeWidth="1.2" />

      {/* Header Label Column */}
      <line x1="55" y1="0" x2="55" y2={height} stroke="#3b82f6" strokeWidth="1.2" />
      <line x1="0" y1="35" x2={width} y2="35" stroke="#3b82f6" strokeWidth="1.2" />
      <line x1="0" y1="70" x2={width} y2="70" stroke="#3b82f6" strokeWidth="1.2" />

      <text x="27" y="23" fill="#facc15" fontSize="13" fontWeight="bold" textAnchor="middle">x</text>
      <text x="27" y="56" fill="#facc15" fontSize="13" fontWeight="bold" textAnchor="middle">y'</text>
      <text x="27" y="118" fill="#facc15" fontSize="13" fontWeight="bold" textAnchor="middle">y</text>

      {/* ROW 1: X */}
      <text x="90" y="23" fill="#94a3b8" fontSize="12" textAnchor="middle">-∞</text>
      <text x="200" y="23" fill="#f87171" fontSize="13" fontWeight="bold" textAnchor="middle">{tcdStr}</text>
      <text x="320" y="23" fill="#94a3b8" fontSize="12" textAnchor="middle">+∞</text>

      {/* DOUBLE VERTICAL BAR (||) AT DISCONTINUITY POINT X0 */}
      <line x1="197" y1="35" x2="197" y2={height} stroke="#f87171" strokeWidth="1.5" />
      <line x1="203" y1="35" x2="203" y2={height} stroke="#f87171" strokeWidth="1.5" />

      {/* ROW 2: Y' */}
      <text x="125" y="56" fill={isInc ? '#4ade80' : '#f87171'} fontSize="16" fontWeight="bold" textAnchor="middle">
        {isInc ? '+' : '-'}
      </text>
      <text x="265" y="56" fill={isInc ? '#4ade80' : '#f87171'} fontSize="16" fontWeight="bold" textAnchor="middle">
        {isInc ? '+' : '-'}
      </text>

      {/* ROW 3: Y ARROWS */}
      {isInc ? (
        <>
          {/* Branch 1: y_TCN -> +inf */}
          <text x="75" y="142" fill="#facc15" fontSize="12" fontWeight="bold" textAnchor="middle">{tcnStr}</text>
          <line x1="88" y1="138" x2="175" y2="92" stroke="#38bdf8" strokeWidth="2.5" markerEnd="url(#bbt-arr-up2)" />
          <text x="185" y="90" fill="#94a3b8" fontSize="11" textAnchor="middle">+∞</text>

          {/* Branch 2: -inf -> y_TCN */}
          <text x="215" y="142" fill="#94a3b8" fontSize="11" textAnchor="middle">-∞</text>
          <line x1="225" y1="138" x2="310" y2="92" stroke="#38bdf8" strokeWidth="2.5" markerEnd="url(#bbt-arr-up2)" />
          <text x="325" y="90" fill="#facc15" fontSize="12" fontWeight="bold" textAnchor="middle">{tcnStr}</text>
        </>
      ) : (
        <>
          {/* Branch 1: y_TCN -> -inf */}
          <text x="75" y="90" fill="#facc15" fontSize="12" fontWeight="bold" textAnchor="middle">{tcnStr}</text>
          <line x1="88" y1="92" x2="175" y2="138" stroke="#f87171" strokeWidth="2.5" markerEnd="url(#bbt-arr-down2)" />
          <text x="185" y="144" fill="#94a3b8" fontSize="11" textAnchor="middle">-∞</text>

          {/* Branch 2: +inf -> y_TCN */}
          <text x="215" y="90" fill="#94a3b8" fontSize="11" textAnchor="middle">+∞</text>
          <line x1="225" y1="92" x2="310" y2="138" stroke="#f87171" strokeWidth="2.5" markerEnd="url(#bbt-arr-down2)" />
          <text x="325" y="142" fill="#facc15" fontSize="12" fontWeight="bold" textAnchor="middle">{tcnStr}</text>
        </>
      )}
    </svg>
  );
};

// =========================================================================
// 3. DYNAMIC RATIONAL 1/1 GRAPH PLOTTER
// =========================================================================
interface DynamicRational11PlotProps {
  a: number;
  b: number;
  c: number;
  d: number;
}

const DynamicRational11Plot: React.FC<DynamicRational11PlotProps> = ({ a, b, c, d }) => {
  const tcd = -d / (c || 1);
  const tcn = a / (c || 1);
  const det = a * d - b * c;

  const width = 340;
  const height = 210;
  const margin = { left: 45, right: 35, top: 25, bottom: 30 };
  const plotW = width - margin.left - margin.right;
  const plotH = height - margin.top - margin.bottom;

  const xMin = tcd - 4;
  const xMax = tcd + 4;
  const yMin = tcn - 4;
  const yMax = tcn + 4;

  const mapX = (x: number) => margin.left + ((x - xMin) / (xMax - xMin)) * plotW;
  const mapY = (y: number) => margin.top + plotH - ((y - yMin) / (yMax - yMin)) * plotH;

  const tcdSvgX = mapX(tcd);
  const tcnSvgY = mapY(tcn);

  // Left branch (x < tcd)
  const leftPts: string[] = [];
  const steps = 35;
  for (let i = 0; i <= steps; i++) {
    const x = xMin + (i / steps) * (tcd - 0.25 - xMin);
    const y = (a * x + b) / (c * x + d);
    const clampedY = Math.max(yMin - 6, Math.min(yMax + 6, y));
    leftPts.push(`${i === 0 ? 'M' : 'L'} ${mapX(x).toFixed(1)} ${mapY(clampedY).toFixed(1)}`);
  }

  // Right branch (x > tcd)
  const rightPts: string[] = [];
  for (let i = 0; i <= steps; i++) {
    const x = tcd + 0.25 + (i / steps) * (xMax - (tcd + 0.25));
    const y = (a * x + b) / (c * x + d);
    const clampedY = Math.max(yMin - 6, Math.min(yMax + 6, y));
    rightPts.push(`${i === 0 ? 'M' : 'L'} ${mapX(x).toFixed(1)} ${mapY(clampedY).toFixed(1)}`);
  }

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full max-w-[320px] h-auto drop-shadow-md">
      <defs>
        <marker id="axis-arr-rat" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 1 L 10 5 L 0 9 z" fill="#64748b" />
        </marker>
      </defs>

      <rect x="0" y="0" width={width} height={height} rx="10" fill="#0f172a" stroke="#1e293b" strokeWidth="1" />

      {/* Axes */}
      <line x1={margin.left - 15} y1={mapY(0)} x2={width - margin.right + 15} y2={mapY(0)} stroke="#475569" strokeWidth="1.5" markerEnd="url(#axis-arr-rat)" />
      <line x1={mapX(0)} y1={height - margin.bottom + 10} x2={mapX(0)} y2={margin.top - 10} stroke="#475569" strokeWidth="1.5" markerEnd="url(#axis-arr-rat)" />
      <text x={width - margin.right + 20} y={mapY(0) + 4} fill="#94a3b8" fontSize="11" fontWeight="bold">x</text>
      <text x={mapX(0) + 6} y={margin.top - 10} fill="#94a3b8" fontSize="11" fontWeight="bold">y</text>

      {/* TCĐ x = tcd */}
      <line x1={tcdSvgX} y1={margin.top - 10} x2={tcdSvgX} y2={height - margin.bottom + 10} stroke="#f87171" strokeWidth="1.8" strokeDasharray="4 3" />
      <text x={tcdSvgX + 4} y={margin.top + 5} fill="#f87171" fontSize="9.5" fontWeight="bold">
        TCĐ: x = {tcd.toFixed(1).replace('.0', '')}
      </text>

      {/* TCN y = tcn */}
      <line x1={margin.left - 15} y1={tcnSvgY} x2={width - margin.right + 15} y2={tcnSvgY} stroke="#facc15" strokeWidth="1.8" strokeDasharray="4 3" />
      <text x={width - margin.right - 55} y={tcnSvgY - 5} fill="#facc15" fontSize="9.5" fontWeight="bold">
        TCN: y = {tcn.toFixed(1).replace('.0', '')}
      </text>

      {/* Intersection Point I */}
      <circle cx={tcdSvgX} cy={tcnSvgY} r="3.5" fill="#38bdf8" stroke="#fff" strokeWidth="1.2" />
      <text x={tcdSvgX + 6} y={tcnSvgY + 12} fill="#38bdf8" fontSize="9" fontWeight="bold">
        I({tcd.toFixed(1).replace('.0', '')}; {tcn.toFixed(1).replace('.0', '')})
      </text>

      {/* Curves */}
      <path d={leftPts.join(' ')} fill="none" stroke="#4ade80" strokeWidth="2.6" strokeLinecap="round" />
      <path d={rightPts.join(' ')} fill="none" stroke="#4ade80" strokeWidth="2.6" strokeLinecap="round" />
    </svg>
  );
};

// =========================================================================
// 4. OXYZ 3D COORDINATE SYSTEM
// =========================================================================
interface OxyzAxesDiagramProps {
  point?: { name: string; x: number; y: number; z: number };
}

const OxyzAxesDiagram: React.FC<OxyzAxesDiagramProps> = ({ point }) => {
  return (
    <svg viewBox="0 0 340 220" className="w-full max-w-[320px] h-auto drop-shadow-md">
      <defs>
        <marker id="axis-arr-3d" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 1 L 10 5 L 0 9 z" fill="#38bdf8" />
        </marker>
        <marker id="u-arr-i" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 1 L 10 5 L 0 9 z" fill="#f87171" />
        </marker>
        <marker id="u-arr-j" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 1 L 10 5 L 0 9 z" fill="#4ade80" />
        </marker>
        <marker id="u-arr-k" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 1 L 10 5 L 0 9 z" fill="#fbbf24" />
        </marker>
      </defs>

      <rect x="0" y="0" width="340" height="220" rx="10" fill="#0f172a" stroke="#1e293b" strokeWidth="1" />

      {/* Origin O=(130, 140) */}
      <line x1="130" y1="140" x2="130" y2="25" stroke="#38bdf8" strokeWidth="2.2" markerEnd="url(#axis-arr-3d)" />
      <line x1="130" y1="140" x2="310" y2="140" stroke="#38bdf8" strokeWidth="2.2" markerEnd="url(#axis-arr-3d)" />
      <line x1="130" y1="140" x2="35" y2="205" stroke="#38bdf8" strokeWidth="2.2" markerEnd="url(#axis-arr-3d)" />

      <text x="135" y="24" fill="#38bdf8" fontSize="13" fontWeight="extrabold">z</text>
      <text x="315" y="144" fill="#38bdf8" fontSize="13" fontWeight="extrabold">y</text>
      <text x="24" y="212" fill="#38bdf8" fontSize="13" fontWeight="extrabold">x</text>
      <text x="114" y="152" fill="#e2e8f0" fontSize="12" fontWeight="bold">O</text>

      {/* Unit Vectors */}
      <line x1="130" y1="140" x2="85" y2="171" stroke="#f87171" strokeWidth="2.8" markerEnd="url(#u-arr-i)" />
      <text x="74" y="185" fill="#f87171" fontSize="11" fontWeight="bold">i</text>

      <line x1="130" y1="140" x2="185" y2="140" stroke="#4ade80" strokeWidth="2.8" markerEnd="url(#u-arr-j)" />
      <text x="185" y="132" fill="#4ade80" fontSize="11" fontWeight="bold">j</text>

      <line x1="130" y1="140" x2="130" y2="85" stroke="#fbbf24" strokeWidth="2.8" markerEnd="url(#u-arr-k)" />
      <text x="138" y="90" fill="#fbbf24" fontSize="11" fontWeight="bold">k</text>

      {/* Point M */}
      <line x1="80" y1="175" x2="185" y2="175" stroke="#94a3b8" strokeWidth="1.2" strokeDasharray="3 3" />
      <line x1="235" y1="140" x2="185" y2="175" stroke="#94a3b8" strokeWidth="1.2" strokeDasharray="3 3" />
      <line x1="185" y1="175" x2="185" y2="70" stroke="#e2e8f0" strokeWidth="1.5" strokeDasharray="4 3" />
      <line x1="130" y1="35" x2="185" y2="70" stroke="#94a3b8" strokeWidth="1.2" strokeDasharray="3 3" />
      <line x1="130" y1="140" x2="185" y2="70" stroke="#f43f5e" strokeWidth="2" />

      <circle cx="185" cy="70" r="4.5" fill="#f43f5e" stroke="#fff" strokeWidth="1.5" />
      <text x="194" y="68" fill="#fda4af" fontSize="11" fontWeight="bold">
        {point ? `${point.name}(${point.x}; ${point.y}; ${point.z})` : 'M(x; y; z)'}
      </text>

      <text x="170" y="214" fill="#38bdf8" fontSize="10" fontWeight="bold" textAnchor="middle">
        OM = x.i + y.j + z.k (i ⊥ j ⊥ k)
      </text>
    </svg>
  );
};

// =========================================================================
// 5. CUBE / PARALLELEPIPED VECTOR DIAGRAM
// =========================================================================
const CubeVectorDiagram: React.FC = () => {
  return (
    <svg viewBox="0 0 340 220" className="w-full max-w-[320px] h-auto drop-shadow-md">
      <defs>
        <marker id="arrow-yellow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 1 L 10 5 L 0 9 z" fill="#facc15" />
        </marker>
        <marker id="arrow-cyan" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 1 L 10 5 L 0 9 z" fill="#38bdf8" />
        </marker>
        <marker id="arrow-emerald" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 1 L 10 5 L 0 9 z" fill="#34d399" />
        </marker>
        <marker id="arrow-orange" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#fb923c" />
        </marker>
      </defs>

      <rect x="0" y="0" width="340" height="220" rx="10" fill="#0f172a" stroke="#1e293b" strokeWidth="1" />

      {/* Hidden Edges */}
      <line x1="70" y1="165" x2="120" y2="125" stroke="#64748b" strokeWidth="1.5" strokeDasharray="4 3" />
      <line x1="120" y1="125" x2="250" y2="125" stroke="#64748b" strokeWidth="1.5" strokeDasharray="4 3" />
      <line x1="120" y1="125" x2="120" y2="35" stroke="#64748b" strokeWidth="1.5" strokeDasharray="4 3" />

      {/* Solid Visible Edges */}
      <line x1="70" y1="165" x2="200" y2="165" stroke="#94a3b8" strokeWidth="1.8" />
      <line x1="200" y1="165" x2="250" y2="125" stroke="#94a3b8" strokeWidth="1.8" />

      <line x1="70" y1="75" x2="200" y2="75" stroke="#94a3b8" strokeWidth="1.8" />
      <line x1="200" y1="75" x2="250" y2="35" stroke="#94a3b8" strokeWidth="1.8" />
      <line x1="250" y1="35" x2="120" y2="35" stroke="#94a3b8" strokeWidth="1.8" />
      <line x1="120" y1="35" x2="70" y2="75" stroke="#94a3b8" strokeWidth="1.8" />

      <line x1="70" y1="165" x2="70" y2="75" stroke="#94a3b8" strokeWidth="1.8" />
      <line x1="200" y1="165" x2="200" y2="75" stroke="#94a3b8" strokeWidth="1.8" />
      <line x1="250" y1="125" x2="250" y2="35" stroke="#94a3b8" strokeWidth="1.8" />

      {/* Vectors */}
      <line x1="70" y1="165" x2="195" y2="165" stroke="#facc15" strokeWidth="2.5" markerEnd="url(#arrow-yellow)" />
      <line x1="70" y1="165" x2="117" y2="127" stroke="#38bdf8" strokeWidth="2.5" strokeDasharray="4 2" markerEnd="url(#arrow-cyan)" />
      <line x1="70" y1="165" x2="70" y2="80" stroke="#34d399" strokeWidth="2.5" markerEnd="url(#arrow-emerald)" />
      <line x1="70" y1="165" x2="246" y2="39" stroke="#fb923c" strokeWidth="2.8" strokeDasharray="5 3" markerEnd="url(#arrow-orange)" />

      {[
        { x: 70, y: 165, label: 'A', lx: 52, ly: 177 },
        { x: 200, y: 165, label: 'B', lx: 208, ly: 177 },
        { x: 250, y: 125, label: 'C', lx: 258, ly: 129 },
        { x: 120, y: 125, label: 'D', lx: 124, ly: 119 },
        { x: 70, y: 75, label: "A'", lx: 52, ly: 73 },
        { x: 200, y: 75, label: "B'", lx: 208, ly: 73 },
        { x: 250, y: 35, label: "C'", lx: 258, ly: 33 },
        { x: 120, y: 35, label: "D'", lx: 114, ly: 27 }
      ].map((pt, i) => (
        <g key={i}>
          <circle cx={pt.x} cy={pt.y} r="3" fill="#e2e8f0" />
          <text x={pt.lx} y={pt.ly} fill="#f1f5f9" fontSize="11" fontWeight="bold">
            {pt.label}
          </text>
        </g>
      ))}

      <rect x="35" y="192" width="270" height="22" rx="5" fill="#1e293b" stroke="#334155" />
      <text x="170" y="207" fill="#facc15" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
        vector(AB) + vector(AD) + vector(AA') = vector(AC')
      </text>
    </svg>
  );
};

// =========================================================================
// 6. TETRAHEDRON & CENTROID G DIAGRAM
// =========================================================================
const TetrahedronDiagram: React.FC = () => {
  return (
    <svg viewBox="0 0 320 210" className="w-full max-w-[300px] h-auto drop-shadow-md">
      <rect x="0" y="0" width="320" height="210" rx="10" fill="#0f172a" stroke="#1e293b" strokeWidth="1" />

      <line x1="50" y1="160" x2="270" y2="145" stroke="#64748b" strokeWidth="1.5" strokeDasharray="4 3" />

      <line x1="160" y1="30" x2="50" y2="160" stroke="#94a3b8" strokeWidth="2" />
      <line x1="160" y1="30" x2="175" y2="180" stroke="#94a3b8" strokeWidth="2" />
      <line x1="160" y1="30" x2="270" y2="145" stroke="#94a3b8" strokeWidth="2" />

      <line x1="50" y1="160" x2="175" y2="180" stroke="#94a3b8" strokeWidth="2" />
      <line x1="175" y1="180" x2="270" y2="145" stroke="#94a3b8" strokeWidth="2" />

      <line x1="160" y1="30" x2="164" y2="128" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 2" />
      <line x1="50" y1="160" x2="164" y2="128" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 2" />
      <line x1="175" y1="180" x2="164" y2="128" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 2" />
      <line x1="270" y1="145" x2="164" y2="128" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 2" />

      <circle cx="164" cy="128" r="4.5" fill="#f59e0b" stroke="#fff" strokeWidth="1.5" />
      <text x="175" y="132" fill="#f59e0b" fontSize="12" fontWeight="bold">G</text>

      {[
        { x: 160, y: 30, label: 'A', lx: 156, ly: 20 },
        { x: 50, y: 160, label: 'B', lx: 34, ly: 170 },
        { x: 175, y: 180, label: 'C', lx: 174, ly: 196 },
        { x: 270, y: 145, label: 'D', lx: 278, ly: 150 },
      ].map((pt, i) => (
        <g key={i}>
          <circle cx={pt.x} cy={pt.y} r="3.5" fill="#e2e8f0" />
          <text x={pt.lx} y={pt.ly} fill="#f1f5f9" fontSize="12" fontWeight="bold">
            {pt.label}
          </text>
        </g>
      ))}

      <text x="160" y="202" fill="#38bdf8" fontSize="9.5" fontWeight="bold" textAnchor="middle">
        Trọng tâm G: GA + GB + GC + GD = 0
      </text>
    </svg>
  );
};

// =========================================================================
// 7. PYRAMID S.ABCD DIAGRAM
// =========================================================================
const PyramidDiagram: React.FC = () => {
  return (
    <svg viewBox="0 0 320 210" className="w-full max-w-[300px] h-auto drop-shadow-md">
      <rect x="0" y="0" width="320" height="210" rx="10" fill="#0f172a" stroke="#1e293b" strokeWidth="1" />

      <line x1="60" y1="145" x2="145" y2="115" stroke="#64748b" strokeWidth="1.5" strokeDasharray="4 3" />
      <line x1="145" y1="115" x2="265" y2="145" stroke="#64748b" strokeWidth="1.5" strokeDasharray="4 3" />
      <line x1="145" y1="30" x2="145" y2="115" stroke="#64748b" strokeWidth="1.5" strokeDasharray="4 3" />
      <line x1="60" y1="145" x2="265" y2="145" stroke="#475569" strokeWidth="1" strokeDasharray="3 3" />
      <line x1="180" y1="175" x2="145" y2="115" stroke="#475569" strokeWidth="1" strokeDasharray="3 3" />
      <line x1="145" y1="30" x2="162.5" y2="145" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4 2" />

      <line x1="60" y1="145" x2="180" y2="175" stroke="#94a3b8" strokeWidth="2" />
      <line x1="180" y1="175" x2="265" y2="145" stroke="#94a3b8" strokeWidth="2" />
      <line x1="145" y1="30" x2="60" y2="145" stroke="#38bdf8" strokeWidth="2" />
      <line x1="145" y1="30" x2="180" y2="175" stroke="#38bdf8" strokeWidth="2" />
      <line x1="145" y1="30" x2="265" y2="145" stroke="#38bdf8" strokeWidth="2" />

      <rect x="162.5" y="137" width="7" height="7" fill="none" stroke="#f59e0b" strokeWidth="1" />

      {[
        { x: 145, y: 30, label: 'S', lx: 142, ly: 20 },
        { x: 60, y: 145, label: 'A', lx: 44, ly: 150 },
        { x: 180, y: 175, label: 'B', lx: 180, ly: 192 },
        { x: 265, y: 145, label: 'C', lx: 274, ly: 150 },
        { x: 145, y: 115, label: 'D', lx: 148, ly: 108 },
        { x: 162.5, y: 145, label: 'O', lx: 168, ly: 158 }
      ].map((pt, i) => (
        <g key={i}>
          <circle cx={pt.x} cy={pt.y} r="3" fill="#e2e8f0" />
          <text x={pt.lx} y={pt.ly} fill="#f1f5f9" fontSize="11" fontWeight="bold">
            {pt.label}
          </text>
        </g>
      ))}

      <text x="160" y="202" fill="#fbbf24" fontSize="9.5" fontWeight="bold" textAnchor="middle">
        Khối chóp S.ABCD có đường cao SO ⊥ (ABCD)
      </text>
    </svg>
  );
};

// =========================================================================
// 8. CROSS PRODUCT DIAGRAM
// =========================================================================
const VectorCrossDiagram: React.FC = () => {
  return (
    <svg viewBox="0 0 320 210" className="w-full max-w-[300px] h-auto drop-shadow-md">
      <defs>
        <marker id="arr-cross-u" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 1 L 10 5 L 0 9 z" fill="#38bdf8" />
        </marker>
        <marker id="arr-cross-v" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 1 L 10 5 L 0 9 z" fill="#4ade80" />
        </marker>
        <marker id="arr-cross-n" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 1 L 10 5 L 0 9 z" fill="#facc15" />
        </marker>
      </defs>

      <rect x="0" y="0" width="320" height="210" rx="10" fill="#0f172a" stroke="#1e293b" strokeWidth="1" />

      <polygon points="50,160 230,160 280,110 100,110" fill="#1e293b" stroke="#334155" strokeWidth="1.5" />
      <text x="260" y="128" fill="#64748b" fontSize="11" fontWeight="bold">(P)</text>

      <line x1="130" y1="140" x2="215" y2="148" stroke="#38bdf8" strokeWidth="2.5" markerEnd="url(#arr-cross-u)" />
      <text x="220" y="152" fill="#38bdf8" fontSize="11" fontWeight="bold">vector(a)</text>

      <line x1="130" y1="140" x2="190" y2="122" stroke="#4ade80" strokeWidth="2.5" markerEnd="url(#arr-cross-v)" />
      <text x="196" y="122" fill="#4ade80" fontSize="11" fontWeight="bold">vector(b)</text>

      <line x1="130" y1="140" x2="130" y2="40" stroke="#facc15" strokeWidth="3" markerEnd="url(#arr-cross-n)" />
      <text x="138" y="44" fill="#facc15" fontSize="11" fontWeight="extrabold">vector(n) = [a, b]</text>

      <rect x="130" y="128" width="8" height="8" fill="none" stroke="#facc15" strokeWidth="1.2" />

      <text x="160" y="198" fill="#facc15" fontSize="9.5" fontWeight="bold" textAnchor="middle">
        [a, b] ⊥ a và [a, b] ⊥ b
      </text>
    </svg>
  );
};

// =========================================================================
// 9. VECTOR DOT PRODUCT & ANGLE DIAGRAM
// =========================================================================
const VectorDotDiagram: React.FC = () => {
  return (
    <svg viewBox="0 0 320 190" className="w-full max-w-[300px] h-auto drop-shadow-md">
      <defs>
        <marker id="dot-arr-u" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 1 L 10 5 L 0 9 z" fill="#38bdf8" />
        </marker>
        <marker id="dot-arr-v" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 1 L 10 5 L 0 9 z" fill="#f43f5e" />
        </marker>
      </defs>

      <rect x="0" y="0" width="320" height="190" rx="10" fill="#0f172a" stroke="#1e293b" strokeWidth="1" />

      <line x1="70" y1="130" x2="250" y2="130" stroke="#38bdf8" strokeWidth="2.5" markerEnd="url(#dot-arr-u)" />
      <text x="256" y="134" fill="#38bdf8" fontSize="11" fontWeight="bold">vector(u)</text>

      <line x1="70" y1="130" x2="210" y2="45" stroke="#f43f5e" strokeWidth="2.5" markerEnd="url(#dot-arr-v)" />
      <text x="216" y="44" fill="#f43f5e" fontSize="11" fontWeight="bold">vector(v)</text>

      <path d="M 120 130 A 50 50 0 0 0 107 104" fill="none" stroke="#facc15" strokeWidth="2" />
      <text x="126" y="115" fill="#facc15" fontSize="11" fontWeight="bold">φ</text>

      <circle cx="70" cy="130" r="4" fill="#fff" />
      <text x="56" y="142" fill="#e2e8f0" fontSize="11" fontWeight="bold">O</text>

      <rect x="35" y="156" width="250" height="24" rx="5" fill="#1e293b" stroke="#334155" />
      <text x="160" y="172" fill="#facc15" fontSize="9.5" fontWeight="bold" textAnchor="middle">
        cos(φ) = (u . v) / (|u| . |v|)
      </text>
    </svg>
  );
};

// =========================================================================
// 10. DISTANCE FROM POINT TO PLANE DIAGRAM
// =========================================================================
const DistancePointPlaneDiagram: React.FC = () => {
  return (
    <svg viewBox="0 0 320 200" className="w-full max-w-[300px] h-auto drop-shadow-md">
      <defs>
        <marker id="arr-dist-n" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 1 L 10 5 L 0 9 z" fill="#facc15" />
        </marker>
      </defs>

      <rect x="0" y="0" width="320" height="200" rx="10" fill="#0f172a" stroke="#1e293b" strokeWidth="1" />

      <polygon points="40,155 220,155 280,105 100,105" fill="#1e293b" stroke="#475569" strokeWidth="1.5" />
      <text x="245" y="120" fill="#94a3b8" fontSize="11" fontWeight="bold">(P)</text>

      <line x1="160" y1="40" x2="160" y2="130" stroke="#f43f5e" strokeWidth="2.5" strokeDasharray="4 2" />
      <rect x="160" y="120" width="10" height="10" fill="none" stroke="#f43f5e" strokeWidth="1.2" />

      <line x1="210" y1="130" x2="210" y2="80" stroke="#facc15" strokeWidth="2.5" markerEnd="url(#arr-dist-n)" />
      <text x="218" y="90" fill="#facc15" fontSize="10.5" fontWeight="bold">n=(A;B;C)</text>

      <circle cx="160" cy="40" r="4.5" fill="#f43f5e" stroke="#fff" strokeWidth="1.5" />
      <text x="170" y="40" fill="#fda4af" fontSize="11" fontWeight="bold">M(x₀; y₀; z₀)</text>

      <circle cx="160" cy="130" r="3.5" fill="#38bdf8" />
      <text x="170" y="138" fill="#38bdf8" fontSize="10.5" fontWeight="bold">H</text>

      <text x="160" y="186" fill="#38bdf8" fontSize="9.5" fontWeight="bold" textAnchor="middle">
        d(M,(P)) = |Ax₀ + By₀ + Cz₀ + D| / √(A² + B² + C²)
      </text>
    </svg>
  );
};

// =========================================================================
// 11. RATIONAL 2/1 DIAGRAM (TIỆM CẬN XIÊN)
// =========================================================================
const Rational21Diagram: React.FC = () => {
  return (
    <svg viewBox="0 0 320 205" className="w-full max-w-[300px] h-auto drop-shadow-md">
      <defs>
        <marker id="g-arr3" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 1 L 10 5 L 0 9 z" fill="#64748b" />
        </marker>
      </defs>

      <rect x="0" y="0" width="320" height="205" rx="10" fill="#0f172a" stroke="#1e293b" strokeWidth="1" />

      <line x1="20" y1="120" x2="300" y2="120" stroke="#475569" strokeWidth="1.5" markerEnd="url(#g-arr3)" />
      <line x1="140" y1="190" x2="140" y2="15" stroke="#475569" strokeWidth="1.5" markerEnd="url(#g-arr3)" />
      <text x="304" y="124" fill="#94a3b8" fontSize="11" fontWeight="bold">x</text>
      <text x="144" y="16" fill="#94a3b8" fontSize="11" fontWeight="bold">y</text>

      <line x1="170" y1="15" x2="170" y2="190" stroke="#f87171" strokeWidth="1.8" strokeDasharray="4 3" />
      <text x="174" y="30" fill="#f87171" fontSize="9" fontWeight="bold">TCĐ</text>

      <line x1="40" y1="175" x2="280" y2="30" stroke="#facc15" strokeWidth="1.8" strokeDasharray="5 3" />
      <text x="210" y="42" fill="#facc15" fontSize="9" fontWeight="bold">TCX: y = ax + b</text>

      <path d="M 50 180 Q 120 110 158 25" fill="none" stroke="#38bdf8" strokeWidth="2.5" />
      <path d="M 182 180 Q 220 90 290 20" fill="none" stroke="#38bdf8" strokeWidth="2.5" />

      <text x="160" y="198" fill="#facc15" fontSize="9.5" fontWeight="bold" textAnchor="middle">
        Hàm phân thức bậc 2/1 có TCĐ và Tiệm cận xiên
      </text>
    </svg>
  );
};

// =========================================================================
// 12. BOX PLOT DIAGRAM (CHƯƠNG III)
// =========================================================================
const BoxPlotDiagram: React.FC = () => {
  return (
    <svg viewBox="0 0 340 170" className="w-full max-w-[320px] h-auto drop-shadow-md">
      <rect x="0" y="0" width="340" height="170" rx="10" fill="#0f172a" stroke="#1e293b" strokeWidth="1" />

      <line x1="30" y1="130" x2="310" y2="130" stroke="#475569" strokeWidth="1.5" />
      
      <line x1="50" y1="75" x2="110" y2="75" stroke="#38bdf8" strokeWidth="2" />
      <line x1="50" y1="60" x2="50" y2="90" stroke="#38bdf8" strokeWidth="2" />
      <text x="50" y="108" fill="#94a3b8" fontSize="10" textAnchor="middle">x_min</text>

      <rect x="110" y="50" width="130" height="50" rx="4" fill="#1e3a8a" stroke="#38bdf8" strokeWidth="2" />
      
      <line x1="165" y1="50" x2="165" y2="100" stroke="#facc15" strokeWidth="3" />
      <text x="165" y="44" fill="#facc15" fontSize="10.5" fontWeight="bold" textAnchor="middle">Q₂ (Trung vị)</text>

      <line x1="240" y1="75" x2="290" y2="75" stroke="#38bdf8" strokeWidth="2" />
      <line x1="290" y1="60" x2="290" y2="90" stroke="#38bdf8" strokeWidth="2" />
      <text x="290" y="108" fill="#94a3b8" fontSize="10" textAnchor="middle">x_max</text>

      <text x="110" y="112" fill="#38bdf8" fontSize="10" fontWeight="bold" textAnchor="middle">Q₁</text>
      <text x="240" y="112" fill="#38bdf8" fontSize="10" fontWeight="bold" textAnchor="middle">Q₃</text>

      <line x1="110" y1="124" x2="240" y2="124" stroke="#f43f5e" strokeWidth="1.5" />
      <text x="175" y="135" fill="#f43f5e" fontSize="9" fontWeight="bold" textAnchor="middle">ΔQ = Q₃ - Q₁</text>

      <text x="170" y="158" fill="#fbbf24" fontSize="9.5" fontWeight="bold" textAnchor="middle">
        Khoảng biến thiên: R = x_max - x_min
      </text>
    </svg>
  );
};

// =========================================================================
// 13. HISTOGRAM GROUPED DIAGRAM (CHƯƠNG III)
// =========================================================================
const HistogramGroupedDiagram: React.FC = () => {
  return (
    <svg viewBox="0 0 340 180" className="w-full max-w-[320px] h-auto drop-shadow-md">
      <defs>
        <linearGradient id="bar-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#1e3a8a" stopOpacity="0.8" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width="340" height="180" rx="10" fill="#0f172a" stroke="#1e293b" strokeWidth="1" />

      <line x1="40" y1="140" x2="310" y2="140" stroke="#475569" strokeWidth="1.5" />
      <line x1="40" y1="140" x2="40" y2="20" stroke="#475569" strokeWidth="1.5" />
      <text x="315" y="144" fill="#94a3b8" fontSize="10">Nhóm</text>
      <text x="44" y="24" fill="#94a3b8" fontSize="10">Tần số (n)</text>

      {[
        { x: 50, w: 45, h: 40, freq: 5, label: '[10;20)' },
        { x: 95, w: 45, h: 80, freq: 12, label: '[20;30)' },
        { x: 140, w: 45, h: 105, freq: 18, label: '[30;40)' },
        { x: 185, w: 45, h: 65, freq: 10, label: '[40;50)' },
        { x: 230, w: 45, h: 30, freq: 4, label: '[50;60)' },
      ].map((bar, i) => (
        <g key={i}>
          <rect
            x={bar.x}
            y={140 - bar.h}
            width={bar.w}
            height={bar.h}
            fill="url(#bar-grad)"
            stroke="#60a5fa"
            strokeWidth="1.2"
          />
          <text x={bar.x + bar.w / 2} y={140 - bar.h - 5} fill="#facc15" fontSize="10" fontWeight="bold" textAnchor="middle">
            {bar.freq}
          </text>
          <text x={bar.x + bar.w / 2} y={155} fill="#cbd5e1" fontSize="9" textAnchor="middle">
            {bar.label}
          </text>
        </g>
      ))}

      <text x="170" y="172" fill="#38bdf8" fontSize="9.5" fontWeight="bold" textAnchor="middle">
        Giá trị đại diện: c_i = (a_i + a_i+1) / 2
      </text>
    </svg>
  );
};
