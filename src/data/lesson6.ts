import { Question } from './types';

export const lesson6Sets: Question[][] = [
  // Bộ 1: Cơ bản & Lý thuyết Vectơ trong không gian
  [
    {
      id: 1,
      question: "Trong không gian, vectơ là:",
      options: ["Một đoạn thẳng có hướng", "Một đoạn thẳng không có hướng", "Một tia có gốc cố định", "Một đường thẳng vô hạn"],
      correctAnswerIndex: 0,
      solution: "Định nghĩa: Vectơ trong không gian là một đoạn thẳng có hướng."
    },
    {
      id: 2,
      question: "Độ dài của vectơ $\\vec{AB}$ trong không gian là:",
      options: ["Khoảng cách giữa điểm đầu $A$ và điểm cuối $B$", "Độ dài tia $AB$", "Khoảng cách từ gốc $O$ đến $A$", "Một số âm tuỳ ý"],
      correctAnswerIndex: 0,
      solution: "Độ dài của vectơ $\\vec{AB}$ là khoảng cách giữa điểm đầu $A$ và điểm cuối $B$, kí hiệu $|\\vec{AB}| = AB$."
    },
    {
      id: 3,
      question: "Quy tắc ba điểm trong phép cộng vectơ phát biểu rằng với ba điểm $A, B, C$ bất kì ta luôn có:",
      options: ["$\\vec{AB} + \\vec{BC} = \\vec{AC}$", "$\\vec{AB} + \\vec{AC} = \\vec{BC}$", "$\\vec{AB} - \\vec{BC} = \\vec{AC}$", "$\\vec{AB} + \\vec{BC} + \\vec{CA} = 1$"],
      correctAnswerIndex: 0,
      solution: "Quy tắc ba điểm: $\\vec{AB} + \\vec{BC} = \\vec{AC}$."
    },
    {
      id: 4,
      question: "Cho hình bình hành $ABCD$. Tổng $\\vec{AB} + \\vec{AD}$ bằng:",
      options: ["$\\vec{AC}$", "$\\vec{BD}$", "$\\vec{CA}$", "$\\vec{0}$"],
      correctAnswerIndex: 0,
      solution: "Quy tắc hình bình hành: $\\vec{AB} + \\vec{AD} = \\vec{AC}$."
    },
    {
      id: 5,
      question: "Cho hình hộp $ABCD.A'B'C'D'$. Quy tắc hình hộp xác định tổng $\\vec{AB} + \\vec{AD} + \\vec{AA'}$ bằng:",
      options: ["$\\vec{AC'}$", "$\\vec{CA'}$", "$\\vec{BD'}$", "$\\vec{A'C}$"],
      correctAnswerIndex: 0,
      solution: "Quy tắc hình hộp: $\\vec{AB} + \\vec{AD} + \\vec{AA'} = \\vec{AC'}$ (vectơ đường chéo xuất phát từ cùng đỉnh $A$)."
    },
    {
      id: 6,
      question: "Hai vectơ được gọi là cùng phương nếu:",
      options: ["Giá của chúng song song hoặc trùng nhau", "Chúng có cùng độ dài", "Chúng có cùng hướng", "Chúng vuông góc với nhau"],
      correctAnswerIndex: 0,
      solution: "Định nghĩa: Hai vectơ cùng phương khi và chỉ khi giá của chúng song song hoặc trùng nhau."
    },
    {
      id: 7,
      question: "Nếu $M$ là trung điểm của đoạn thẳng $AB$ thì với mọi điểm $O$ bất kì ta có:",
      options: ["$\\vec{OA} + \\vec{OB} = 2\\vec{OM}$", "$\\vec{OA} + \\vec{OB} = \\vec{OM}$", "$\\vec{OA} - \\vec{OB} = 2\\vec{OM}$", "$\\vec{OM} = 2(\\vec{OA} + \\vec{OB})$"],
      correctAnswerIndex: 0,
      solution: "Hệ thức trung điểm: $\\vec{OA} + \\vec{OB} = 2\\vec{OM} \\Leftrightarrow \\vec{OM} = \\frac{1}{2}(\\vec{OA} + \\vec{OB})$."
    },
    {
      id: 8,
      question: "Nếu $G$ là trọng tâm của tam giác $ABC$ thì đẳng thức nào sau đây luôn đúng?",
      options: ["$\\vec{GA} + \\vec{GB} + \\vec{GC} = \\vec{0}$", "$\\vec{GA} + \\vec{GB} + \\vec{GC} = 3\\vec{OG}$", "$\\vec{AB} + \\vec{AC} = \\vec{AG}$", "$\\vec{GA} = \\vec{GB} = \\vec{GC}$"],
      correctAnswerIndex: 0,
      solution: "Định nghĩa trọng tâm tam giác: $\\vec{GA} + \\vec{GB} + \\vec{GC} = \\vec{0}$."
    },
    {
      id: 9,
      question: "Cho tứ diện $ABCD$. Điểm $G$ là trọng tâm của tứ diện khi và chỉ khi:",
      options: ["$\\vec{GA} + \\vec{GB} + \\vec{GC} + \\vec{GD} = \\vec{0}$", "$\\vec{GA} + \\vec{GB} = \\vec{GC} + \\vec{GD}$", "$\\vec{AB} + \\vec{CD} = \\vec{0}$", "$\\vec{GA} + \\vec{GB} + \\vec{GC} = \\vec{GD}$"],
      correctAnswerIndex: 0,
      solution: "Trọng tâm tứ diện $ABCD$ thỏa mãn: $\\vec{GA} + \\vec{GB} + \\vec{GC} + \\vec{GD} = \\vec{0}$."
    },
    {
      id: 10,
      question: "Tích vô hướng của hai vectơ $\\vec{a}$ và $\\vec{b}$ trong không gian được định nghĩa là:",
      options: ["$\\vec{a} \\cdot \\vec{b} = |\\vec{a}| |\\vec{b}| \\cos(\\vec{a}, \\vec{b})$", "$\\vec{a} \\cdot \\vec{b} = |\\vec{a}| |\\vec{b}| \\sin(\\vec{a}, \\vec{b})$", "$\\vec{a} \\cdot \\vec{b} = |\\vec{a}| + |\\vec{b}|$", "$\\vec{a} \\cdot \\vec{b} = |\\vec{a}| |\\vec{b}| \\tan(\\vec{a}, \\vec{b})$"],
      correctAnswerIndex: 0,
      solution: "Định nghĩa tích vô hướng: $\\vec{a} \\cdot \\vec{b} = |\\vec{a}| |\\vec{b}| \\cos(\\vec{a}, \\vec{b})$."
    },
    {
      id: 11,
      question: "Hai vectơ $\\vec{a}$ và $\\vec{b}$ khác $\\vec{0}$ vuông góc với nhau khi và chỉ khi:",
      options: ["$\\vec{a} \\cdot \\vec{b} = 0$", "$\\vec{a} \\cdot \\vec{b} = 1$", "$\\vec{a} + \\vec{b} = \\vec{0}$", "$|\\vec{a}| = |\\vec{b}|$"],
      correctAnswerIndex: 0,
      solution: "$\\vec{a} \\perp \\vec{b} \\Leftrightarrow \\cos 90^\\circ = 0 \\Leftrightarrow \\vec{a} \\cdot \\vec{b} = 0$."
    },
    {
      id: 12,
      question: "Vectơ đối của vectơ $\\vec{AB}$ là:",
      options: ["$\\vec{BA}$", "$\\vec{AB}$", "$-\\vec{BA}$", "$\\vec{0}$"],
      correctAnswerIndex: 0,
      solution: "Vectơ đối của $\\vec{AB}$ là $-\\vec{AB} = \\vec{BA}$."
    },
    {
      id: 13,
      question: "Cho hình lập phương $ABCD.A'B'C'D'$. Góc giữa hai vectơ $\\vec{AB}$ và $\\vec{A'D'}$ bằng:",
      options: ["$90^\\circ$", "$0^\\circ$", "$45^\\circ$", "$180^\\circ$"],
      correctAnswerIndex: 0,
      solution: "Vì $\\vec{A'D'} = \\vec{AD}$, góc giữa $\\vec{AB}$ và $\\vec{A'D'}$ chính là góc giữa $\\vec{AB}$ và $\\vec{AD}$, bằng góc $\\widehat{BAD} = 90^\\circ$."
    },
    {
      id: 14,
      question: "Cho hình lập phương $ABCD.A'B'C'D'$. Góc giữa hai vectơ $\\vec{AB}$ và $\\vec{C'D'}$ bằng:",
      options: ["$180^\\circ$", "$0^\\circ$", "$90^\\circ$", "$45^\\circ$"],
      correctAnswerIndex: 0,
      solution: "Vì $\\vec{C'D'} = \\vec{CD} = -\\vec{AB}$, hai vectơ ngược hướng nên góc giữa chúng bằng $180^\\circ$."
    },
    {
      id: 15,
      question: "Một vật chịu tác dụng của lực $\\vec{F}$ không đổi và di chuyển một đoạn đường $\\vec{d}$. Công sinh ra $A$ được tính bởi:",
      options: ["$A = \\vec{F} \\cdot \\vec{d}$", "$A = |\\vec{F}| + |\\vec{d}|$", "$A = \\vec{F} \\times \\vec{d}$", "$A = |\\vec{F}| / |\\vec{d}|$"],
      correctAnswerIndex: 0,
      solution: "Công của lực trong vật lý: $A = \\vec{F} \\cdot \\vec{d} = |\\vec{F}| |\\vec{d}| \\cos(\\vec{F}, \\vec{d})$."
    }
  ],
  // Bộ 2: Tính toán Hình học không gian & Tích vô hướng
  [
    {
      id: 1,
      question: "Cho hình lập phương $ABCD.A'B'C'D'$ có cạnh bằng $a$. Độ dài của vectơ $\\vec{u} = \\vec{AB} + \\vec{AD} + \\vec{AA'}$ bằng:",
      options: ["$a\\sqrt{3}$", "$a\\sqrt{2}$", "$2a$", "$3a$"],
      correctAnswerIndex: 0,
      solution: "Theo quy tắc hình hộp: $\\vec{AB} + \\vec{AD} + \\vec{AA'} = \\vec{AC'}$. Độ dài đường chéo hình lập phương là $AC' = \\sqrt{a^2+a^2+a^2} = a\\sqrt{3}$."
    },
    {
      id: 2,
      question: "Cho hình lập phương $ABCD.A'B'C'D'$ có cạnh bằng $1$. Tính độ dài vectơ $\\vec{BC} + \\vec{DD'}$.",
      options: ["$\\sqrt{2}$", "$1$", "$2$", "$\\sqrt{3}$"],
      correctAnswerIndex: 0,
      solution: "Vì $\\vec{BC} = \\vec{AD}$ nên $\\vec{BC} + \\vec{DD'} = \\vec{AD} + \\vec{DD'} = \\vec{AD'}$. Độ dài đường chéo mặt bên là $AD' = \\sqrt{1^2+1^2} = \\sqrt{2}$."
    },
    {
      id: 3,
      question: "Cho tứ diện đều $ABCD$ có tất cả các cạnh bằng $a$. Tích vô hướng $\\vec{AB} \\cdot \\vec{AC}$ bằng:",
      options: ["$\\frac{a^2}{2}$", "$\\frac{a^2\\sqrt{3}}{2}$", "$a^2$", "$0$"],
      correctAnswerIndex: 0,
      solution: "Tam giác $ABC$ đều cạnh $a$ nên góc $\\widehat{BAC} = 60^\\circ$. $\\vec{AB} \\cdot \\vec{AC} = a \\cdot a \\cdot \\cos 60^\\circ = \\frac{a^2}{2}$."
    },
    {
      id: 4,
      question: "Cho tứ diện đều $ABCD$ có cạnh bằng $a$. Gọi $M$ là trung điểm cạnh $CD$. Tích vô hướng $\\vec{AB} \\cdot \\vec{AM}$ bằng:",
      options: ["$\\frac{a^2}{2}$", "$\\frac{a^2}{4}$", "$\\frac{a^2}{3}$", "$0$"],
      correctAnswerIndex: 0,
      solution: "$\\vec{AM} = \\frac{1}{2}(\\vec{AC} + \\vec{AD})$. $\\vec{AB} \\cdot \\vec{AM} = \\frac{1}{2}(\\vec{AB} \\cdot \\vec{AC} + \\vec{AB} \\cdot \\vec{AD}) = \\frac{1}{2}\\left(\\frac{a^2}{2} + \\frac{a^2}{2}\\right) = \\frac{a^2}{2}$."
    },
    {
      id: 5,
      question: "Cho tứ diện đều $ABCD$. Góc giữa hai vectơ $\\vec{AB}$ và $\\vec{CD}$ bằng:",
      options: ["$90^\\circ$", "$60^\\circ$", "$45^\\circ$", "$0^\\circ$"],
      correctAnswerIndex: 0,
      solution: "$\\vec{AB} \\cdot \\vec{CD} = \\vec{AB} \\cdot (\\vec{AD} - \\vec{AC}) = \\vec{AB} \\cdot \\vec{AD} - \\vec{AB} \\cdot \\vec{AC} = \\frac{a^2}{2} - \\frac{a^2}{2} = 0 \\Rightarrow \\vec{AB} \\perp \\vec{CD}$ (góc $90^\\circ$)."
    },
    {
      id: 6,
      question: "Cho hình lăng trụ tam giác $ABC.A'B'C'$. Đẳng thức nào sau đây luôn đúng?",
      options: ["$\\vec{AA'} + \\vec{B'C'} + \\vec{C'A} = \\vec{0}$", "$\\vec{AA'} + \\vec{B'B} = \\vec{0}$", "$\\vec{A'B'} = \\vec{C'C}$", "$\\vec{AB} + \\vec{A'C'} = \\vec{BC}$"],
      correctAnswerIndex: 0,
      solution: "$\\vec{AA'} + \\vec{B'C'} + \\vec{C'A} = \\vec{BB'} + \\vec{B'C'} + \\vec{C'A} = \\vec{BC'} + \\vec{C'A} = \\vec{BA} + \\dots = \\vec{0}$ theo quy tắc tam giác khép kín."
    },
    {
      id: 7,
      question: "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành. Đẳng thức vectơ nào sau đây đúng?",
      options: ["$\\vec{SA} + \\vec{SC} = \\vec{SB} + \\vec{SD}$", "$\\vec{SA} + \\vec{SB} = \\vec{SC} + \\vec{SD}$", "$\\vec{SA} + \\vec{SD} = \\vec{SB} + \\vec{SC}$", "$\\vec{SA} - \\vec{SC} = \\vec{SB} - \\vec{SD}$"],
      correctAnswerIndex: 0,
      solution: "Gọi $O$ là tâm hình bình hành $ABCD$. Ta có $\\vec{SA} + \\vec{SC} = 2\\vec{SO}$ và $\\vec{SB} + \\vec{SD} = 2\\vec{SO}$. Do đó $\\vec{SA} + \\vec{SC} = \\vec{SB} + \\vec{SD}$."
    },
    {
      id: 8,
      question: "Cho hình hộp chữ nhật $ABCD.A'B'C'D'$ có $AB = 2, AD = 3, AA' = 4$. Độ dài vectơ $\\vec{BD'}$ bằng:",
      options: ["$\\sqrt{29}$", "$\\sqrt{20}$", "$5$", "$9$"],
      correctAnswerIndex: 0,
      solution: "$BD' = \\sqrt{AB^2 + AD^2 + AA'^2} = \\sqrt{2^2 + 3^2 + 4^2} = \\sqrt{4 + 9 + 16} = \\sqrt{29}$."
    },
    {
      id: 9,
      question: "Trong không gian, cho hai vectơ $\\vec{a}, \\vec{b}$ có $|\\vec{a}| = 1, |\\vec{b}| = 2$ và góc $(\\vec{a}, \\vec{b}) = 60^\\circ$. Độ dài của vectơ $\\vec{a} + \\vec{b}$ bằng:",
      options: ["$\\sqrt{7}$", "$3$", "$\\sqrt{5}$", "$\\sqrt{3}$"],
      correctAnswerIndex: 0,
      solution: "$|\\vec{a}+\\vec{b}|^2 = |\\vec{a}|^2 + 2\\vec{a}\\cdot\\vec{b} + |\\vec{b}|^2 = 1 + 2(1)(2)\\cos 60^\\circ + 4 = 1 + 2 + 4 = 7 \\Rightarrow |\\vec{a}+\\vec{b}| = \\sqrt{7}$."
    },
    {
      id: 10,
      question: "Cho ba lực $\\vec{F}_1, \\vec{F}_2, \\vec{F}_3$ cùng tác dụng vào một chất điểm tại $O$ và vật ở trạng thái cân bằng. Khẳng định nào sau đây đúng?",
      options: ["$\\vec{F}_1 + \\vec{F}_2 + \\vec{F}_3 = \\vec{0}$", "$|\\vec{F}_1| + |\\vec{F}_2| + |\\vec{F}_3| = 0$", "$\\vec{F}_1 = \\vec{F}_2 = \\vec{F}_3$", "$\\vec{F}_1 \\cdot \\vec{F}_2 = \\vec{F}_3$"],
      correctAnswerIndex: 0,
      solution: "Điều kiện cân bằng tĩnh học: Hợp lực của tất cả các lực tác dụng lên chất điểm bằng vectơ không: $\\vec{F}_1 + \\vec{F}_2 + \\vec{F}_3 = \\vec{0}$."
    },
    {
      id: 11,
      question: "Cho hình lăng trụ đứng tam giác đều $ABC.A'B'C'$ có tất cả các cạnh bằng $1$. Tích vô hướng $\\vec{AA'} \\cdot \\vec{BC}$ bằng:",
      options: ["$0$", "$1$", "$1/2$", "$\\sqrt{3}/2$"],
      correctAnswerIndex: 0,
      solution: "Vì lăng trụ đứng nên cạnh bên $AA'$ vuông góc với mặt đáy $(ABC) \\Rightarrow AA' \\perp BC \\Rightarrow \\vec{AA'} \\cdot \\vec{BC} = 0$."
    },
    {
      id: 12,
      question: "Cho hình chóp $S.ABC$ có $SA \\perp (ABC)$. Đáy $ABC$ là tam giác vuông tại $B$. Góc giữa hai vectơ $\\vec{SA}$ và $\\vec{BC}$ bằng:",
      options: ["$90^\\circ$", "$0^\\circ$", "$45^\\circ$", "$180^\\circ$"],
      correctAnswerIndex: 0,
      solution: "Vì $SA \\perp (ABC)$ nên $SA \\perp BC \\Rightarrow$ góc giữa $\\vec{SA}$ và $\\vec{BC}$ bằng $90^\\circ$."
    },
    {
      id: 13,
      question: "Cho đoạn thẳng $AB$ và điểm $I$ thỏa mãn $\\vec{IA} = 3\\vec{IG}$ với $G$ là trọng tâm tam giác $BCD$. Khi đó điểm $I$ chính là:",
      options: ["Trọng tâm của tứ diện $ABCD$", "Trung điểm của $AG$", "Trọng tâm tam giác $ABC$", "Trực tâm tam giác $BCD$"],
      correctAnswerIndex: 0,
      solution: "$\\vec{IA} = 3\\vec{IG} \\Leftrightarrow \\vec{IA} - 3\\vec{IG} = \\vec{0} \\Leftrightarrow \\vec{IA} + \\vec{IB} + \\vec{IC} + \\vec{ID} = \\vec{0}$, chứng tỏ $I$ là trọng tâm tứ diện $ABCD$."
    },
    {
      id: 14,
      question: "Một chiếc bàn hình chữ nhật đặt thăng bằng trên sàn nhà. Trọng lực $\\vec{P}$ tác dụng lên bàn được chia đều cho 4 chân bàn thành các phản lực $\\vec{F}_1, \\vec{F}_2, \\vec{F}_3, \\vec{F}_4$. Khẳng định nào đúng?",
      options: ["$\\vec{P} + \\vec{F}_1 + \\vec{F}_2 + \\vec{F}_3 + \\vec{F}_4 = \\vec{0}$ và các phản lực cùng độ lớn hướng thẳng đứng lên trên", "Các phản lực có độ lớn khác nhau", "Trọng lực hướng lên trên", "Tổng phản lực bằng $2\\vec{P}$"],
      correctAnswerIndex: 0,
      solution: "Các phản lực hướng lên trên, cân bằng với trọng lực hướng xuống dưới: $\\vec{F}_1 + \\vec{F}_2 + \\vec{F}_3 + \\vec{F}_4 = -\\vec{P}$."
    },
    {
      id: 15,
      question: "Cho hai vectơ $\\vec{a}, \\vec{b}$ có cùng độ dài bằng $1$ và góc giữa chúng bằng $45^\\circ$. Tích vô hướng $\\vec{a} \\cdot \\vec{b}$ bằng:",
      options: ["$\\frac{\\sqrt{2}}{2}$", "$\\frac{1}{2}$", "$\\frac{\\sqrt{3}}{2}$", "$1$"],
      correctAnswerIndex: 0,
      solution: "$\\vec{a} \\cdot \\vec{b} = 1 \\cdot 1 \\cdot \\cos 45^\\circ = \\frac{\\sqrt{2}}{2}$."
    }
  ],
  // Bộ 3: Ứng dụng nâng cao & Vectơ trong mô hình không gian
  [
    {
      id: 1,
      question: "Cho tứ diện $ABCD$. Lấy điểm $M$ trên $SA$, $N$ trên $BC$ sao cho $\\vec{SM} = \\frac{1}{3}\\vec{SA}, \\vec{CN} = 2\\vec{BN}$. Biểu diễn vectơ $\\vec{MN}$ theo $\\vec{SA}, \\vec{AB}, \\vec{BC}$ ta được:",
      options: ["$\\vec{MN} = -\\frac{1}{3}\\vec{SA} + \\vec{AB} + \\frac{1}{3}\\vec{BC}$", "$\\vec{MN} = \\frac{1}{3}\\vec{SA} + \\vec{AB} + \\vec{BC}$", "$\\vec{MN} = -\\vec{SA} + \\vec{BC}$", "$\\vec{MN} = \\frac{2}{3}\\vec{SA} + \\frac{1}{3}\\vec{BC}$"],
      correctAnswerIndex: 0,
      solution: "$\\vec{MN} = \\vec{MS} + \\vec{SA} + \\dots = -\\frac{1}{3}\\vec{SA} + \\vec{AB} + \\vec{BN} = -\\frac{1}{3}\\vec{SA} + \\vec{AB} + \\frac{1}{3}\\vec{BC}$."
    },
    {
      id: 2,
      question: "Một chiếc máy bay đang tăng tốc từ $900\\text{ km/h}$ lên $920\\text{ km/h}$ và giữ nguyên hướng bay. Lực cản không khí ban đầu và sau đó lần lượt là $\\vec{F}_1, \\vec{F}_2$. Biết độ lớn lực cản tỉ lệ thuận với bình phương vận tốc. Tỉ số $k$ sao cho $\\vec{F}_2 = k\\vec{F}_1$ xấp xỉ bằng:",
      options: ["$1,045$", "$1,022$", "$1,100$", "$0,980$"],
      correctAnswerIndex: 0,
      solution: "$k = \\left(\\frac{920}{900}\\right)^2 = \\left(\\frac{46}{45}\\right)^2 \\approx 1,0449 \\approx 1,045$."
    },
    {
      id: 3,
      question: "Cho hình chóp $S.ABCD$ có đáy là hình bình hành $ABCD$. Điểm $M$ thuộc đoạn thẳng $SD$ sao cho $SM = 2MD$. Mặt phẳng $(\\alpha)$ qua $AB$ và $M$ cắt $SC$ tại $N$. Tỉ số $\\frac{SN}{SC}$ bằng:",
      options: ["$\\frac{2}{3}$", "$\\frac{1}{2}$", "$\\frac{3}{4}$", "$\\frac{1}{3}$"],
      correctAnswerIndex: 0,
      solution: "Vì $AB \\parallel CD$ nên giao tuyến $MN \\parallel CD \\parallel AB$. Theo định lý Ta-lét trong tam giác $SCD$: $\\frac{SN}{SC} = \\frac{SM}{SD} = \\frac{2}{3}$."
    },
    {
      id: 4,
      question: "Cho hình lập phương $ABCD.A'B'C'D'$. Côsin của góc giữa hai vectơ $\\vec{AC'}$ và $\\vec{BD}$ bằng:",
      options: ["$0$", "$\\frac{1}{\\sqrt{3}}$", "$\\frac{\\sqrt{2}}{3}$", "$\\frac{1}{3}$"],
      correctAnswerIndex: 0,
      solution: "$\\vec{AC'} \\cdot \\vec{BD} = (\\vec{AB} + \\vec{AD} + \\vec{AA'}) \\cdot (\\vec{AD} - \\vec{AB}) = \\vec{AD}^2 - \\vec{AB}^2 = a^2 - a^2 = 0 \\Rightarrow \\cos = 0$ (hai vectơ vuông góc)."
    },
    {
      id: 5,
      question: "Cho tứ diện $ABCD$ có $AB \\perp CD$ và $AC \\perp BD$. Chứng minh được rằng cặp cạnh đối còn lại:",
      options: ["$AD \\perp BC$", "$AD \\parallel BC$", "$AD = BC$", "$AD + BC = AB$"],
      correctAnswerIndex: 0,
      solution: "Ta có $\\vec{AD} \\cdot \\vec{BC} = \\vec{AD} \\cdot (\\vec{AC} - \\vec{AB}) = \\vec{AD}\\cdot\\vec{AC} - \\vec{AD}\\cdot\\vec{AB} = 0$. Do đó $AD \\perp BC$ (tứ diện có 3 cặp cạnh đối vuông góc - tứ diện trực tâm)."
    },
    {
      id: 6,
      question: "Cho tứ diện $ABCD$. Gọi $M, N$ lần lượt là trung điểm của $AB$ và $CD$. Đẳng thức nào sau đây đúng?",
      options: ["$\\vec{MN} = \\frac{1}{2}(\\vec{AD} + \\vec{BC}) = \\frac{1}{2}(\\vec{AC} + \\vec{BD})$", "$\\vec{MN} = \\vec{AD} + \\vec{BC}$", "$\\vec{MN} = \\frac{1}{3}(\\vec{AB} + \\vec{CD})$", "$\\vec{MN} = \\vec{AC} - \\vec{BD}$"],
      correctAnswerIndex: 0,
      solution: "$\\vec{MN} = \\vec{MA} + \\vec{AD} + \\vec{DN}$ và $\\vec{MN} = \\vec{MB} + \\vec{BC} + \\vec{CN}$. Cộng lại: $2\\vec{MN} = \\vec{AD} + \\vec{BC} \\Rightarrow \\vec{MN} = \\frac{1}{2}(\\vec{AD} + \\vec{BC})$."
    },
    {
      id: 7,
      question: "Cho hai vectơ $\\vec{a}, \\vec{b}$ thỏa mãn $|\\vec{a}| = 2, |\\vec{b}| = 3, (\\vec{a}+\\vec{b}) \\cdot (\\vec{a}-\\vec{b}) = -5$. Nhận xét gì về góc giữa $\\vec{a}$ và $\\vec{b}$?",
      options: ["Đẳng thức luôn đúng với mọi góc giữa $\\vec{a}$ và $\\vec{b}$", "Góc bằng $60^\\circ$", "Góc bằng $90^\\circ$", "Góc bằng $120^\\circ$"],
      correctAnswerIndex: 0,
      solution: "$(\\vec{a}+\\vec{b}) \\cdot (\\vec{a}-\\vec{b}) = |\\vec{a}|^2 - |\\vec{b}|^2 = 2^2 - 3^2 = 4 - 9 = -5$. Đẳng thức luôn đúng với mọi góc."
    },
    {
      id: 8,
      question: "Một khối rubik hình tứ diện đều đồng chất có chiều cao $8\\text{ cm}$. Khoảng cách từ trọng tâm của khối rubik đến mỗi mặt của nó bằng:",
      options: ["$2\\text{ cm}$", "$4\\text{ cm}$", "$2,67\\text{ cm}$", "$1\\text{ cm}$"],
      correctAnswerIndex: 0,
      solution: "Trọng tâm tứ diện đều chia đường cao theo tỉ số $1:3$ từ đáy đến đỉnh. Do đó khoảng cách từ trọng tâm đến một mặt bằng $\\frac{1}{4} h = \\frac{1}{4}(8) = 2\\text{ cm}$."
    },
    {
      id: 9,
      question: "Cho hình lập phương $ABCD.A'B'C'D'$ cạnh $a$. Tích vô hướng $\\vec{A'C} \\cdot \\vec{BD}$ bằng:",
      options: ["$0$", "$a^2$", "$a^2\\sqrt{2}$", "$-a^2$"],
      correctAnswerIndex: 0,
      solution: "Vì đường thẳng $BD \\perp (ACC'A')$ nên $BD \\perp A'C \\Rightarrow \\vec{A'C} \\cdot \\vec{BD} = 0$."
    },
    {
      id: 10,
      question: "Cho hình chóp $S.ABC$ có đáy là tam giác đều cạnh $a$, $SA = a$ và vuông góc với đáy. Tích vô hướng $\\vec{SB} \\cdot \\vec{SC}$ bằng:",
      options: ["$\\frac{3a^2}{2}$", "$\\frac{a^2}{2}$", "$a^2$", "$0$"],
      correctAnswerIndex: 0,
      solution: "$\\vec{SB} = \\vec{SA} + \\vec{AB}, \\vec{SC} = \\vec{SA} + \\vec{AC}$. $\\vec{SB} \\cdot \\vec{SC} = SA^2 + \\vec{SA}\\cdot\\vec{AC} + \\vec{AB}\\cdot\\vec{SA} + \\vec{AB}\\cdot\\vec{AC} = a^2 + 0 + 0 + \\frac{a^2}{2} = \\frac{3a^2}{2}$."
    },
    {
      id: 11,
      question: "Cho tứ diện $ABCD$. Điểm $M$ thuộc cạnh $AB$ sao cho $AM = 2MB$. Biểu diễn $\\vec{DM}$ theo $\\vec{DA}$ và $\\vec{DB}$:",
      options: ["$\\vec{DM} = \\frac{1}{3}\\vec{DA} + \\frac{2}{3}\\vec{DB}$", "$\\vec{DM} = \\frac{2}{3}\\vec{DA} + \\frac{1}{3}\\vec{DB}$", "$\\vec{DM} = 2\\vec{DA} + \\vec{DB}$", "$\\vec{DM} = \\vec{DA} + 2\\vec{DB}$"],
      correctAnswerIndex: 0,
      solution: "$\\vec{DM} = \\vec{DA} + \\vec{AM} = \\vec{DA} + \\frac{2}{3}\\vec{AB} = \\vec{DA} + \\frac{2}{3}(\\vec{DB} - \\vec{DA}) = \\frac{1}{3}\\vec{DA} + \\frac{2}{3}\\vec{DB}$."
    },
    {
      id: 12,
      question: "Độ lớn của lực kéo $\\vec{F}$ cần thiết để kéo vật chuyển động thẳng đều biết công sinh ra là $100\\text{ J}$ trên quãng đường $10\\text{ m}$ theo góc kéo $\\alpha = 60^\\circ$ là:",
      options: ["$20\\text{ N}$", "$10\\text{ N}$", "$25\\text{ N}$", "$15\\text{ N}$"],
      correctAnswerIndex: 0,
      solution: "$A = F \\cdot d \\cdot \\cos \\alpha \\Rightarrow 100 = F \\cdot 10 \\cdot \\cos 60^\\circ = 5F \\Rightarrow F = 20\\text{ N}$."
    },
    {
      id: 13,
      question: "Cho hình lăng trụ $ABC.A'B'C'$. Đặt $\\vec{AA'} = \\vec{a}, \\vec{AB} = \\vec{b}, \\vec{AC} = \\vec{c}$. Biểu diễn vectơ $\\vec{B'C}$ theo ba vectơ này:",
      options: ["$\\vec{B'C} = -\\vec{a} - \\vec{b} + \\vec{c}$", "$\\vec{B'C} = \\vec{a} + \\vec{b} + \\vec{c}$", "$\\vec{B'C} = -\\vec{a} + \\vec{b} - \\vec{c}$", "$\\vec{B'C} = \\vec{a} - \\vec{b} + \\vec{c}$"],
      correctAnswerIndex: 0,
      solution: "$\\vec{B'C} = \\vec{B'B} + \\vec{BC} = -\\vec{AA'} + (\\vec{AC} - \\vec{AB}) = -\\vec{a} + \\vec{c} - \\vec{b} = -\\vec{a} - \\vec{b} + \\vec{c}$."
    },
    {
      id: 14,
      question: "Cho ba vectơ $\\vec{a}, \\vec{b}, \\vec{c}$ không đồng phẳng. Điều kiện cần và đủ để vectơ $\\vec{d}$ đồng phẳng với $\\vec{a}, \\vec{b}, \\vec{c}$ là:",
      options: ["Tồn tại duy nhất bộ ba số thực $(m, n, p)$ sao cho $\\vec{d} = m\\vec{a} + n\\vec{b} + p\\vec{c}$", "$\\vec{d} \\cdot \\vec{a} = 0$", "$|\\vec{d}| = |\\vec{a}|+|\\vec{b}|+|\\vec{c}|$", "$\\vec{d}$ cùng hướng với $\\vec{a}$"],
      correctAnswerIndex: 0,
      solution: "Định lý phân tích vectơ trong không gian: Mọi vectơ $\\vec{d}$ đều biểu diễn duy nhất dưới dạng $\\vec{d} = m\\vec{a} + n\\vec{b} + p\\vec{c}$."
    },
    {
      id: 15,
      question: "Cho hình lập phương $ABCD.A'B'C'D'$. Gọi $\\alpha$ là góc giữa $\\vec{AC}$ và $\\vec{A'D}$. Giá trị của $\\cos \\alpha$ bằng:",
      options: ["$1/2$ (góc $60^\\circ$)", "$\\sqrt{2}/2$", "$\\sqrt{3}/2$", "$0$"],
      correctAnswerIndex: 0,
      solution: "Tam giác $ACD'$ có 3 cạnh là 3 đường chéo mặt bên bằng nhau ($AC = CD' = AD'$), do đó là tam giác đều $\\Rightarrow$ góc giữa $\\vec{AC}$ và $\\vec{A'D}$ là $60^\\circ$, $\\cos 60^\\circ = 1/2$."
    }
  ]
];
