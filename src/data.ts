import { Question, Lesson } from './data/types';
import { lesson1Sets } from './data/lesson1';
import { lesson2Sets } from './data/lesson2';
import { lesson3Sets } from './data/lesson3';
import { lesson4Sets } from './data/lesson4';
import { lesson5Sets } from './data/lesson5';
import { lessonChuong1Sets } from './data/lesson_chuong1';
import { lesson6Sets } from './data/lesson6';
import { lesson7Sets } from './data/lesson7';
import { lesson8Sets } from './data/lesson8';
import { lessonChuong2Sets } from './data/lesson_chuong2';
import { lesson9Sets } from './data/lesson9';
import { lesson10Sets } from './data/lesson10';
import { lessonChuong3Sets } from './data/lesson_chuong3';

export type { Question, Lesson };

export const allLessons: Lesson[] = [
  // --- CHƯƠNG I ---
  {
    id: "bai-1",
    chapterNumber: 1,
    chapterTitle: "Chương I: Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    lessonNumber: 1,
    title: "Bài 1: Tính đơn điệu và cực trị của hàm số",
    description: "Đồng biến, nghịch biến, cực đại, cực tiểu, định lý dấu đạo hàm $y' = f'(x)$.",
    questionSets: lesson1Sets
  },
  {
    id: "bai-2",
    chapterNumber: 1,
    chapterTitle: "Chương I: Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    lessonNumber: 2,
    title: "Bài 2: Giá trị lớn nhất và giá trị nhỏ nhất của hàm số",
    description: "GTLN, GTNN trên đoạn, khoảng và các bài toán tối ưu hóa trong hình học, kinh tế.",
    questionSets: lesson2Sets
  },
  {
    id: "bai-3",
    chapterNumber: 1,
    chapterTitle: "Chương I: Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    lessonNumber: 3,
    title: "Bài 3: Đường tiệm cận của đồ thị hàm số",
    description: "Tiệm cận đứng, tiệm cận ngang, tiệm cận xiên của các hàm phân thức hữu tỉ.",
    questionSets: lesson3Sets
  },
  {
    id: "bai-4",
    chapterNumber: 1,
    chapterTitle: "Chương I: Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    lessonNumber: 4,
    title: "Bài 4: Khảo sát sự biến thiên và vẽ đồ thị hàm số",
    description: "Sơ đồ khảo sát hàm bậc ba, phân thức bậc 1/bậc 1, bậc 2/bậc 1 và tâm đối xứng.",
    questionSets: lesson4Sets
  },
  {
    id: "bai-5",
    chapterNumber: 1,
    chapterTitle: "Chương I: Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    lessonNumber: 5,
    title: "Bài 5: Ứng dụng đạo hàm giải quyết vấn đề thực tiễn",
    description: "Tối ưu hóa kinh tế (doanh thu, lợi nhuận, chi phí), vận tốc, gia tốc, động học chất điểm.",
    questionSets: lesson5Sets
  },
  {
    id: "bai-cuoi-chuong-1",
    chapterNumber: 1,
    chapterTitle: "Chương I: Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    lessonNumber: "Cuối chương I",
    title: "Bài tập cuối chương I",
    description: "Tổng hợp toàn diện kiến thức Chương I: đơn điệu, cực trị, GTLN-GTNN, tiệm cận, đồ thị.",
    questionSets: lessonChuong1Sets
  },

  // --- CHƯƠNG II ---
  {
    id: "bai-6",
    chapterNumber: 2,
    chapterTitle: "Chương II: Vectơ và hệ tọa độ trong không gian",
    lessonNumber: 6,
    title: "Bài 6: Vectơ trong không gian",
    description: "Quy tắc 3 điểm, hình bình hành, hình hộp, trọng tâm tứ diện, tích vô hướng trong không gian.",
    questionSets: lesson6Sets
  },
  {
    id: "bai-7",
    chapterNumber: 2,
    chapterTitle: "Chương II: Vectơ và hệ tọa độ trong không gian",
    lessonNumber: 7,
    title: "Bài 7: Hệ tọa độ trong không gian",
    description: "Hệ trục tọa độ $Oxyz$, tọa độ điểm, vectơ, trung điểm, trọng tâm, khoảng cách.",
    questionSets: lesson7Sets
  },
  {
    id: "bai-8",
    chapterNumber: 2,
    chapterTitle: "Chương II: Vectơ và hệ tọa độ trong không gian",
    lessonNumber: 8,
    title: "Bài 8: Biểu thức tọa độ của các phép toán vectơ",
    description: "Cộng trừ vectơ, tích vô hướng, côsin góc, tích có hướng, diện tích, thể tích khối chóp/hộp.",
    questionSets: lesson8Sets
  },
  {
    id: "bai-cuoi-chuong-2",
    chapterNumber: 2,
    chapterTitle: "Chương II: Vectơ và hệ tọa độ trong không gian",
    lessonNumber: "Cuối chương II",
    title: "Bài tập cuối chương II",
    description: "Tổng hợp toàn diện Chương II: mô hình hóa không gian thực tế, vị trí, khoảng cách, diện tích, thể tích.",
    questionSets: lessonChuong2Sets
  },

  // --- CHƯƠNG III ---
  {
    id: "bai-9",
    chapterNumber: 3,
    chapterTitle: "Chương III: Các số đặc trưng đo mức độ phân tán cho mẫu số liệu ghép nhóm",
    lessonNumber: 9,
    title: "Bài 9: Khoảng biến thiên và khoảng tứ phân vị của mẫu số liệu ghép nhóm",
    description: "Bảng phân bố tần số ghép nhóm, giá trị đại diện, khoảng biến thiên $R$, tứ phân vị $Q_1, Q_2, Q_3$, $\\Delta_Q$.",
    questionSets: lesson9Sets
  },
  {
    id: "bai-10",
    chapterNumber: 3,
    chapterTitle: "Chương III: Các số đặc trưng đo mức độ phân tán cho mẫu số liệu ghép nhóm",
    lessonNumber: 10,
    title: "Bài 10: Phương sai và độ lệch chuẩn của mẫu số liệu ghép nhóm",
    description: "Số trung bình $\\bar{x}$, phương sai $s^2$, độ lệch chuẩn $s$, so sánh độ biến động, độ đồng đều.",
    questionSets: lesson10Sets
  },
  {
    id: "bai-cuoi-chuong-3",
    chapterNumber: 3,
    chapterTitle: "Chương III: Các số đặc trưng đo mức độ phân tán cho mẫu số liệu ghép nhóm",
    lessonNumber: "Cuối chương III",
    title: "Bài tập cuối chương III",
    description: "Tổng hợp toàn bộ kiến thức Thống kê Chương III: phân tích độ phân tán, ngoại lai, so sánh mẫu số liệu.",
    questionSets: lessonChuong3Sets
  }
];

export const defaultQuestions: Question[] = lesson1Sets[0];
