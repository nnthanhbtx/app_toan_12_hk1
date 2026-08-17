import { Question } from './types';

export const lesson8Sets: Question[][] = [
  // Bộ 1: Cơ bản & Phép toán đại số vectơ
  [
    {
      id: 1,
      question: "Cho $\\vec{u} = (x_1; y_1; z_1)$ và $\\vec{v} = (x_2; y_2; z_2)$. Tọa độ của vectơ tổng $\\vec{u} + \\vec{v}$ là:",
      options: ["$(x_1+x_2; y_1+y_2; z_1+z_2)$", "$(x_1-x_2; y_1-y_2; z_1-z_2)$", "$(x_1 x_2; y_1 y_2; z_1 z_2)$", "$(x_1+y_1; x_2+y_2; z_1+z_2)$"],
      correctAnswerIndex: 0,
      solution: "Công thức cộng hai vectơ theo tọa độ: $\\vec{u} + \\vec{v} = (x_1+x_2; y_1+y_2; z_1+z_2)$."
    },
    {
      id: 2,
      question: "Tích của một số thực $k$ với vectơ $\\vec{u} = (x; y; z)$ là vectơ có tọa độ:",
      options: ["$(kx; ky; kz)$", "$(k+x; k+y; k+z)$", "$(x/k; y/k; z/k)$", "$(kx; y; z)$"],
      correctAnswerIndex: 0,
      solution: "Công thức nhân vectơ với số thực: $k\\vec{u} = (kx; ky; kz)$."
    },
    {
      id: 3,
      question: "Tích vô hướng của hai vectơ $\\vec{u} = (x_1; y_1; z_1)$ và $\\vec{v} = (x_2; y_2; z_2)$ được tính theo công thức:",
      options: ["$\\vec{u} \\cdot \\vec{v} = x_1 x_2 + y_1 y_2 + z_1 z_2$", "$\\vec{u} \\cdot \\vec{v} = (x_1 x_2; y_1 y_2; z_1 z_2)$", "$\\vec{u} \\cdot \\vec{v} = x_1+x_2 + y_1+y_2 + z_1+z_2$", "$\\vec{u} \\cdot \\vec{v} = \\sqrt{x_1 x_2 + y_1 y_2 + z_1 z_2}$"],
      correctAnswerIndex: 0,
      solution: "Biểu thức tọa độ của tích vô hướng: $\\vec{u} \\cdot \\vec{v} = x_1 x_2 + y_1 y_2 + z_1 z_2$."
    },
    {
      id: 4,
      question: "Hai vectơ $\\vec{u} = (x_1; y_1; z_1)$ và $\\vec{v} = (x_2; y_2; z_2)$ vuông góc với nhau khi và chỉ khi:",
      options: ["$x_1 x_2 + y_1 y_2 + z_1 z_2 = 0$", "$x_1 x_2 + y_1 y_2 + z_1 z_2 = 1$", "$\\frac{x_1}{x_2} = \\frac{y_1}{y_2} = \\frac{z_1}{z_2}$", "$x_1 + x_2 + y_1 + y_2 + z_1 + z_2 = 0$"],
      correctAnswerIndex: 0,
      solution: "$\\vec{u} \\perp \\vec{v} \\Leftrightarrow \\vec{u} \\cdot \\vec{v} = 0 \\Leftrightarrow x_1 x_2 + y_1 y_2 + z_1 z_2 = 0$."
    },
    {
      id: 5,
      question: "Cho $\\vec{a} = (1; -2; 3)$ và $\\vec{b} = (2; 1; -1)$. Tích vô hướng $\\vec{a} \\cdot \\vec{b}$ bằng:",
      options: ["$-3$", "$3$", "$0$", "$7$"],
      correctAnswerIndex: 0,
      solution: "$\\vec{a} \\cdot \\vec{b} = 1(2) + (-2)(1) + 3(-1) = 2 - 2 - 3 = -3$."
    },
    {
      id: 6,
      question: "Côsin của góc giữa hai vectơ $\\vec{u} = (x_1; y_1; z_1)$ và $\\vec{v} = (x_2; y_2; z_2)$ (khác $\\vec{0}$) được tính bởi:",
      options: ["$\\cos(\\vec{u}, \\vec{v}) = \\frac{x_1 x_2 + y_1 y_2 + z_1 z_2}{\\sqrt{x_1^2+y_1^2+z_1^2} \\sqrt{x_2^2+y_2^2+z_2^2}}$", "$\\cos(\\vec{u}, \\vec{v}) = \\frac{|x_1 x_2 + y_1 y_2 + z_1 z_2|}{\\sqrt{x_1^2+y_1^2+z_1^2}}$", "$\\cos(\\vec{u}, \\vec{v}) = \\frac{\\vec{u} + \\vec{v}}{|\\vec{u}||\\vec{v}|}$", "$\\cos(\\vec{u}, \\vec{v}) = x_1 x_2 + y_1 y_2 + z_1 z_2$"],
      correctAnswerIndex: 0,
      solution: "Công thức tính góc: $\\cos(\\vec{u}, \\vec{v}) = \\frac{\\vec{u} \\cdot \\vec{v}}{|\\vec{u}| |\\vec{v}|} = \\frac{x_1 x_2 + y_1 y_2 + z_1 z_2}{\\sqrt{x_1^2+y_1^2+z_1^2} \\sqrt{x_2^2+y_2^2+z_2^2}}$."
    },
    {
      id: 7,
      question: "Cho $\\vec{u} = (1; 0; 1)$ và $\\vec{v} = (0; 1; 1)$. Góc giữa hai vectơ $\\vec{u}$ và $\\vec{v}$ bằng:",
      options: ["$60^\\circ$", "$45^\\circ$", "$90^\\circ$", "$30^\\circ$"],
      correctAnswerIndex: 0,
      solution: "$\\vec{u} \\cdot \\vec{v} = 0 + 0 + 1 = 1$. $|\\vec{u}| = \\sqrt{2}, |\\vec{v}| = \\sqrt{2}$. $\\cos(\\vec{u}, \\vec{v}) = \\frac{1}{\\sqrt{2}\\sqrt{2}} = \\frac{1}{2} \\Rightarrow$ góc bằng $60^\\circ$."
    },
    {
      id: 8,
      question: "Cho $\\vec{a} = (2; -1; 4)$ và $\\vec{b} = (m; 2; 1)$. Tìm $m$ để $\\vec{a} \\perp \\vec{b}$.",
      options: ["$m = -1$", "$m = 1$", "$m = 2$", "$m = -2$"],
      correctAnswerIndex: 0,
      solution: "$\\vec{a} \\cdot \\vec{b} = 2m + (-1)(2) + 4(1) = 2m + 2 = 0 \\Leftrightarrow 2m = -2 \\Leftrightarrow m = -1$."
    },
    {
      id: 9,
      question: "Cho $A(1; 1; 0), B(2; 3; 1), C(0; 1; 2)$. Tích vô hướng $\\vec{AB} \\cdot \\vec{AC}$ bằng:",
      options: ["$2$", "$-2$", "$0$", "$4$"],
      correctAnswerIndex: 0,
      solution: "$\\vec{AB} = (1; 2; 1), \\vec{AC} = (-1; 0; 2)$. $\\vec{AB} \\cdot \\vec{AC} = 1(-1) + 2(0) + 1(2) = -1 + 0 + 2 = 1$."
    },
    {
      id: 10,
      question: "Cho $\\vec{u} = (1; 2; 3)$. Độ dài của vectơ $3\\vec{u}$ là:",
      options: ["$3\\sqrt{14}$", "$\\sqrt{14}$", "$9\\sqrt{14}$", "$42$"],
      correctAnswerIndex: 0,
      solution: "$|\\vec{u}| = \\sqrt{1^2 + 2^2 + 3^2} = \\sqrt{14} \\Rightarrow |3\\vec{u}| = 3|\\vec{u}| = 3\\sqrt{14}$."
    },
    {
      id: 11,
      question: "Cho $\\vec{u} = (2; -3; 1)$ và $\\vec{v} = (1; 1; -2)$. Tọa độ của vectơ $\\vec{w} = 2\\vec{u} + 3\\vec{v}$ là:",
      options: ["$(7; -3; -4)$", "$(7; -3; 4)$", "$(5; -3; -4)$", "$(1; -4; 3)$"],
      correctAnswerIndex: 0,
      solution: "$2\\vec{u} + 3\\vec{v} = (2(2)+3(1); 2(-3)+3(1); 2(1)+3(-2)) = (4+3; -6+3; 2-6) = (7; -3; -4)$."
    },
    {
      id: 12,
      question: "Góc giữa vectơ $\\vec{u} = (1; 1; 0)$ và trục $Oz$ bằng:",
      options: ["$90^\\circ$", "$0^\\circ$", "$45^\\circ$", "$60^\\circ$"],
      correctAnswerIndex: 0,
      solution: "Vectơ đơn vị của $Oz$ là $\\vec{k} = (0; 0; 1)$. $\\vec{u} \\cdot \\vec{k} = 0 \\Rightarrow \\vec{u} \\perp Oz$ (góc $90^\\circ$)."
    },
    {
      id: 13,
      question: "Cho $A(1; 2; 3)$ và $B(3; 0; 2)$. Vectơ đơn vị cùng hướng với vectơ $\\vec{AB}$ là:",
      options: ["$\\left(\\frac{2}{3}; -\\frac{2}{3}; -\\frac{1}{3}\\right)$", "$(2; -2; -1)$", "$\\left(\\frac{2}{\\sqrt{3}}; -\\frac{2}{\\sqrt{3}}; -\\frac{1}{\\sqrt{3}}\\right)$", "$(1; -1; 0)$"],
      correctAnswerIndex: 0,
      solution: "$\\vec{AB} = (2; -2; -1) \\Rightarrow |\\vec{AB}| = \\sqrt{4+4+1} = 3$. Vectơ đơn vị là $\\frac{\\vec{AB}}{|\\vec{AB}|} = (2/3; -2/3; -1/3)$."
    },
    {
      id: 14,
      question: "Cho ba điểm $A(1; 0; 1), B(2; 1; 0), C(3; 0; 2)$. Tam giác $ABC$ có diện tích bằng:",
      options: ["$\\frac{\\sqrt{6}}{2}$", "$\\sqrt{6}$", "$\\frac{\\sqrt{3}}{2}$", "$3$"],
      correctAnswerIndex: 0,
      solution: "$\\vec{AB} = (1; 1; -1), \\vec{AC} = (2; 0; 1)$. Tích có hướng $[\\vec{AB}, \\vec{AC}] = (1; -3; -2)$. Diện tích $S = \\frac{1}{2}\\sqrt{1^2+(-3)^2+(-2)^2} = \\frac{\\sqrt{14}}{2}$."
    },
    {
      id: 15,
      question: "Nếu ba điểm $A, B, C$ tạo thành tam giác vuông tại $A$ thì:",
      options: ["$\\vec{AB} \\cdot \\vec{AC} = 0$", "$\\vec{BA} \\cdot \\vec{BC} = 0$", "$\\vec{CA} \\cdot \\vec{CB} = 0$", "$AB^2 + BC^2 = AC^2$"],
      correctAnswerIndex: 0,
      solution: "Tam giác vuông tại $A \\Leftrightarrow AB \\perp AC \\Leftrightarrow \\vec{AB} \\cdot \\vec{AC} = 0$."
    }
  ],
  // Bộ 2: Tích có hướng & Ứng dụng hình học không gian
  [
    {
      id: 1,
      question: "Tích có hướng của hai vectơ $\\vec{u} = (x_1; y_1; z_1)$ và $\\vec{v} = (x_2; y_2; z_2)$ là một vectơ kí hiệu là $[\\vec{u}, \\vec{v}]$ có tọa độ là:",
      options: [
        "$(y_1 z_2 - z_1 y_2; z_1 x_2 - x_1 z_2; x_1 y_2 - y_1 x_2)$",
        "$(x_1 x_2; y_1 y_2; z_1 z_2)$",
        "$(y_1 z_2 + z_1 y_2; z_1 x_2 + x_1 z_2; x_1 y_2 + y_1 x_2)$",
        "$x_1 x_2 + y_1 y_2 + z_1 z_2$"
      ],
      correctAnswerIndex: 0,
      solution: "Định nghĩa tích có hướng: $[\\vec{u}, \\vec{v}] = (y_1 z_2 - z_1 y_2; z_1 x_2 - x_1 z_2; x_1 y_2 - y_1 x_2)$."
    },
    {
      id: 2,
      question: "Cho $\\vec{u} = (1; 2; 3)$ và $\\vec{v} = (2; 0; -1)$. Tọa độ tích có hướng $[\\vec{u}, \\vec{v}]$ là:",
      options: ["$(-2; 7; -4)$", "$(2; 7; -4)$", "$(-2; 5; -4)$", "$(2; 0; -3)$"],
      correctAnswerIndex: 0,
      solution: "$[\\vec{u}, \\vec{v}] = (2(-1) - 3(0); 3(2) - 1(-1); 1(0) - 2(2)) = (-2; 6+1; 0-4) = (-2; 7; -4)$."
    },
    {
      id: 3,
      question: "Vectơ tích có hướng $[\\vec{u}, \\vec{v}]$ có tính chất hình học quan trọng là:",
      options: ["Vuông góc với cả hai vectơ $\\vec{u}$ và $\\vec{v}$", "Cùng phương với $\\vec{u}$", "Có độ dài bằng tổng độ dài hai vectơ", "Nằm trong mặt phẳng chứa $\\vec{u}$ và $\\vec{v}$"],
      correctAnswerIndex: 0,
      solution: "Tính chất cơ bản: $[\\vec{u}, \\vec{v}] \\perp \\vec{u}$ và $[\\vec{u}, \\vec{v}] \\perp \\vec{v}$."
    },
    {
      id: 4,
      question: "Diện tích của hình bình hành $ABCD$ dựng trên hai vectơ $\\vec{AB}$ và $\\vec{AD}$ bằng:",
      options: ["$S = |[\\vec{AB}, \\vec{AD}]|$", "$S = \\frac{1}{2}|[\\vec{AB}, \\vec{AD}]|$", "$S = \\vec{AB} \\cdot \\vec{AD}$", "$S = |\\vec{AB}| + |\\vec{AD}|$"],
      correctAnswerIndex: 0,
      solution: "Diện tích hình bình hành: $S = |[\\vec{AB}, \\vec{AD}]|$."
    },
    {
      id: 5,
      question: "Diện tích tam giác $ABC$ có 3 đỉnh $A, B, C$ được tính bởi công thức:",
      options: ["$S = \\frac{1}{2}|[\\vec{AB}, \\vec{AC}]|$", "$S = |[\\vec{AB}, \\vec{AC}]|$", "$S = \\frac{1}{2}(\\vec{AB} \\cdot \\vec{AC})$", "$S = \\frac{1}{6}|[\\vec{AB}, \\vec{AC}]|$"],
      correctAnswerIndex: 0,
      solution: "Diện tích tam giác bằng nửa diện tích hình bình hành: $S_{\\Delta ABC} = \\frac{1}{2}|[\\vec{AB}, \\vec{AC}]|$."
    },
    {
      id: 6,
      question: "Thể tích khối tứ diện $ABCD$ được tính bởi công thức tích hỗn tạp:",
      options: ["$V = \\frac{1}{6}|[\\vec{AB}, \\vec{AC}] \\cdot \\vec{AD}|$", "$V = \\frac{1}{3}|[\\vec{AB}, \\vec{AC}] \\cdot \\vec{AD}|$", "$V = |[\\vec{AB}, \\vec{AC}] \\cdot \\vec{AD}|$", "$V = \\frac{1}{2}|[\\vec{AB}, \\vec{AC}] \\cdot \\vec{AD}|$"],
      correctAnswerIndex: 0,
      solution: "Thể tích tứ diện: $V_{ABCD} = \\frac{1}{6} |[\\vec{AB}, \\vec{AC}] \\cdot \\vec{AD}| = \\frac{1}{6} |(\\vec{AB}, \\vec{AC}, \\vec{AD})|$."
    },
    {
      id: 7,
      question: "Thể tích khối hộp $ABCD.A'B'C'D'$ dựng trên 3 cạnh $\\vec{AB}, \\vec{AD}, \\vec{AA'}$ bằng:",
      options: ["$V = |[\\vec{AB}, \\vec{AD}] \\cdot \\vec{AA'}|$", "$V = \\frac{1}{6}|[\\vec{AB}, \\vec{AD}] \\cdot \\vec{AA'}|$", "$V = \\frac{1}{3}|[\\vec{AB}, \\vec{AD}] \\cdot \\vec{AA'}|$", "$V = |\\vec{AB}| |\\vec{AD}| |\\vec{AA'}|$"],
      correctAnswerIndex: 0,
      solution: "Thể tích hình hộp: $V = |[\\vec{AB}, \\vec{AD}] \\cdot \\vec{AA'}| = |\\text{tích hỗn tạp}|$."
    },
    {
      id: 8,
      question: "Cho ba điểm $A(1; 0; 0), B(0; 2; 0), C(0; 0; 3)$. Diện tích tam giác $ABC$ bằng:",
      options: ["$\\frac{7}{2}$", "$7$", "$\\frac{\\sqrt{14}}{2}$", "$3$"],
      correctAnswerIndex: 0,
      solution: "$\\vec{AB} = (-1; 2; 0), \\vec{AC} = (-1; 0; 3)$. $[\\vec{AB}, \\vec{AC}] = (6; 3; 2)$. $S = \\frac{1}{2}\\sqrt{6^2 + 3^2 + 2^2} = \\frac{1}{2}\\sqrt{36 + 9 + 4} = \\frac{\\sqrt{49}}{2} = \\frac{7}{2}$."
    },
    {
      id: 9,
      question: "Cho tứ diện $ABCD$ có $A(1; 0; 0), B(0; 1; 0), C(0; 0; 1)$ và $D(1; 1; 1)$. Thể tích tứ diện $ABCD$ bằng:",
      options: ["$\\frac{1}{3}$", "$\\frac{1}{6}$", "$1$", "$\\frac{1}{2}$"],
      correctAnswerIndex: 0,
      solution: "$\\vec{AB} = (-1; 1; 0), \\vec{AC} = (-1; 0; 1), \\vec{AD} = (0; 1; 1)$. $[\\vec{AB}, \\vec{AC}] = (1; 1; 1)$. $[\\vec{AB}, \\vec{AC}] \\cdot \\vec{AD} = 0 + 1 + 1 = 2$. Thể tích $V = \\frac{1}{6}(2) = \\frac{1}{3}$."
    },
    {
      id: 10,
      question: "Điều kiện cần và đủ để 4 điểm $A, B, C, D$ đồng phẳng là:",
      options: ["$[\\vec{AB}, \\vec{AC}] \\cdot \\vec{AD} = 0$", "$[\\vec{AB}, \\vec{AC}] = \\vec{AD}$", "$\\vec{AB} + \\vec{AC} = \\vec{AD}$", "$AB + BC + CD = AD$"],
      correctAnswerIndex: 0,
      solution: "Bốn điểm đồng phẳng $\\Leftrightarrow$ thể tích tứ diện tạo bởi chúng bằng $0 \\Leftrightarrow [\\vec{AB}, \\vec{AC}] \\cdot \\vec{AD} = 0$."
    },
    {
      id: 11,
      question: "Một lực $\\vec{F} = (20; 30; -10)$ (N) tác dụng vào điểm làm nó dịch chuyển từ $A(1; 2; 3)$ đến $B(4; 5; 6)$ (đơn vị: m). Công sinh ra bởi lực $\\vec{F}$ là:",
      options: ["$120\\text{ J}$", "$150\\text{ J}$", "$100\\text{ J}$", "$200\\text{ J}$"],
      correctAnswerIndex: 0,
      solution: "$\\vec{d} = \\vec{AB} = (3; 3; 3)$. Công $A = \\vec{F} \\cdot \\vec{d} = 20(3) + 30(3) + (-10)(3) = 60 + 90 - 30 = 120\\text{ J}$."
    },
    {
      id: 12,
      question: "Cho hai vectơ $\\vec{u} = (2; -1; 3)$ và $\\vec{v} = (1; 3; -2)$. Tính côsin của góc giữa hai vectơ.",
      options: ["$-\\frac{7}{14} = -\\frac{1}{2}$", "$\\frac{1}{2}$", "$-\\frac{\\sqrt{3}}{2}$", "$0$"],
      correctAnswerIndex: 0,
      solution: "$\\vec{u} \\cdot \\vec{v} = 2(1) + (-1)(3) + 3(-2) = 2 - 3 - 6 = -7$. $|\\vec{u}| = \\sqrt{4+1+9} = \\sqrt{14}, |\\vec{v}| = \\sqrt{1+9+4} = \\sqrt{14}$. $\\cos = \\frac{-7}{14} = -\\frac{1}{2}$."
    },
    {
      id: 13,
      question: "Góc giữa hai vectơ trong câu 12 bằng:",
      options: ["$120^\\circ$", "$60^\\circ$", "$150^\\circ$", "$135^\\circ$"],
      correctAnswerIndex: 0,
      solution: "Vì $\\cos(\\vec{u}, \\vec{v}) = -1/2$ nên góc giữa hai vectơ là $180^\\circ - 60^\\circ = 120^\\circ$."
    },
    {
      id: 14,
      question: "Cho tam giác $ABC$ có $A(1; 2; -1), B(2; -1; 3), C(-4; 7; 5)$. Độ dài đường cao kẻ từ đỉnh $A$ bằng:",
      options: ["$\\frac{2\\sqrt{6}}{3}$", "$\\sqrt{6}$", "$\\frac{3\\sqrt{2}}{2}$", "$2\\sqrt{3}$"],
      correctAnswerIndex: 0,
      solution: "$h_A = \\frac{2S_{\\Delta ABC}}{BC} = \\frac{|[\\vec{AB}, \\vec{AC}]|}{BC}$. Tính toán tọa độ và độ dài cho kết quả $h_A$."
    },
    {
      id: 15,
      question: "Cho $\\vec{u} = (1; 2; m)$ và $\\vec{v} = (2; 1; -1)$. Tìm $m$ để góc giữa $\\vec{u}$ và $\\vec{v}$ bằng $90^\\circ$.",
      options: ["$m = 4$", "$m = -4$", "$m = 2$", "$m = 0$"],
      correctAnswerIndex: 0,
      solution: "$\\vec{u} \\perp \\vec{v} \\Leftrightarrow \\vec{u} \\cdot \\vec{v} = 1(2) + 2(1) + m(-1) = 4 - m = 0 \\Leftrightarrow m = 4$."
    }
  ],
  // Bộ 3: Vận dụng nâng cao & Mô hình hóa tọa độ
  [
    {
      id: 1,
      question: "Trong không gian, một radar đặt tại $O(0; 0; 0)$ theo dõi 3 máy bay tại các vị trí $A(2; 1; 1), B(1; 3; 2), C(3; 2; 4)$ (km). Diện tích của tam giác không gian tạo bởi 3 máy bay xấp xỉ bằng:",
      options: ["$2,18\\text{ km}^2$", "$4,36\\text{ km}^2$", "$1,50\\text{ km}^2$", "$3,25\\text{ km}^2$"],
      correctAnswerIndex: 0,
      solution: "$\\vec{AB} = (-1; 2; 1), \\vec{AC} = (1; 1; 3)$. $[\\vec{AB}, \\vec{AC}] = (5; 4; -3)$. $S = \\frac{1}{2}\\sqrt{25 + 16 + 9} = \\frac{\\sqrt{50}}{2} = \\frac{5\\sqrt{2}}{2} \\approx 3,535$ km$^2$."
    },
    {
      id: 2,
      question: "Cho 4 điểm $A(1; 1; 1), B(2; 3; 4), C(6; 5; 2), D(m; 1; 2)$. Tìm $m$ để 4 điểm $A, B, C, D$ đồng phẳng.",
      options: ["$m = 1$", "$m = 2$", "$m = 0$", "$m = 3$"],
      correctAnswerIndex: 0,
      solution: "$\\vec{AB} = (1; 2; 3), \\vec{AC} = (5; 4; 1)$. $[\\vec{AB}, \\vec{AC}] = (-10; 14; -6) = 2(-5; 7; -3)$. $\\vec{AD} = (m-1; 0; 1)$. ĐK đồng phẳng: $-5(m-1) + 7(0) - 3(1) = 0 \\Leftrightarrow -5m + 5 - 3 = 0 \\Leftrightarrow 5m = 2 \\Leftrightarrow m = 2/5$."
    },
    {
      id: 3,
      question: "Mômen của lực $\\vec{F} = (10; 20; 30)$ (N) tác dụng tại điểm $M(1; 2; 1)$ đối với gốc quay $O(0; 0; 0)$ được xác định bởi vectơ $\\vec{M}_O = [\\vec{OM}, \\vec{F}]$. Tọa độ của vectơ mômen lực là:",
      options: ["$(40; -20; -10)$", "$(40; 20; 10)$", "$(20; -40; 10)$", "$(10; 20; 30)$"],
      correctAnswerIndex: 0,
      solution: "$\\vec{OM} = (1; 2; 1), \\vec{F} = (10; 20; 30)$. $[\\vec{OM}, \\vec{F}] = (2(30)-1(20); 1(10)-1(30); 1(20)-2(10)) = (40; -20; 0)$."
    },
    {
      id: 4,
      question: "Cho hình chóp $S.ABCD$ có đáy là hình vuông cạnh $a$, $SA \\perp (ABCD)$ và $SA = a$. Côsin của góc giữa hai mặt phẳng $(SBC)$ và $(SCD)$ bằng:",
      options: ["$\\frac{1}{3}$", "$\\frac{1}{2}$", "$\\frac{\\sqrt{3}}{2}$", "$\\frac{2}{3}$"],
      correctAnswerIndex: 0,
      solution: "Tọa độ hóa: $A(0;0;0), B(a;0;0), D(0;a;0), S(0;0;a), C(a;a;0)$. VTPT của $(SBC)$ là $\\vec{n}_1 = (1; 0; 1)$, của $(SCD)$ là $\\vec{n}_2 = (0; 1; 1)$. $\\cos = \\frac{1}{\\sqrt{2}\\sqrt{2}} = \\frac{1}{2}$."
    },
    {
      id: 5,
      question: "Tìm góc tạo bởi vectơ $\\vec{u} = (1; 1; \\sqrt{2})$ với trục $Oz$.",
      options: ["$45^\\circ$", "$60^\\circ$", "$30^\\circ$", "$90^\\circ$"],
      correctAnswerIndex: 0,
      solution: "$|\\vec{u}| = \\sqrt{1 + 1 + 2} = 2$. Trục $Oz$ có $\\vec{k} = (0; 0; 1)$. $\\cos(\\vec{u}, \\vec{k}) = \\frac{\\sqrt{2}}{2(1)} = \\frac{\\sqrt{2}}{2} \\Rightarrow$ góc bằng $45^\\circ$."
    },
    {
      id: 6,
      question: "Khoảng cách từ điểm $D(2; 3; 1)$ đến mặt phẳng $(ABC)$ với $A(1; 0; 0), B(0; 2; 0), C(0; 0; 3)$ bằng:",
      options: ["$\\frac{17}{7}$", "$\\frac{19}{7}$", "$\\frac{11}{7}$", "$2$"],
      correctAnswerIndex: 0,
      solution: "Phương trình $(ABC): \\frac{x}{1} + \\frac{y}{2} + \\frac{z}{3} = 1 \\Leftrightarrow 6x + 3y + 2z - 6 = 0$. $d(D; (ABC)) = \\frac{|6(2) + 3(3) + 2(1) - 6|}{\\sqrt{36+9+4}} = \\frac{|12+9+2-6|}{7} = \\frac{17}{7}$."
    },
    {
      id: 7,
      question: "Cho $\\vec{a} = (1; -1; 2), \\vec{b} = (2; 1; -1), \\vec{c} = (0; 1; 3)$. Tính thể tích khối hộp dựng trên ba vectơ này.",
      options: ["$11$", "$13$", "$9$", "$7$"],
      correctAnswerIndex: 0,
      solution: "$[\\vec{a}, \\vec{b}] = ((-1)(-1)-2(1); 2(2)-1(-1); 1(1)-(-1)(2)) = (-1; 5; 3)$. $V = |[\\vec{a}, \\vec{b}] \\cdot \\vec{c}| = |(-1)(0) + 5(1) + 3(3)| = |0 + 5 + 9| = 14$."
    },
    {
      id: 8,
      question: "Tìm giá trị của $m$ để độ dài vectơ $\\vec{u} = (m; 2; m-1)$ đạt giá trị nhỏ nhất.",
      options: ["$m = 1/2$", "$m = 1$", "$m = 0$", "$m = -1/2$"],
      correctAnswerIndex: 0,
      solution: "$|\\vec{u}|^2 = m^2 + 4 + (m-1)^2 = 2m^2 - 2m + 5 = 2(m - 1/2)^2 + 9/2 \\ge 9/2$. Đạt min khi $m = 1/2$."
    },
    {
      id: 9,
      question: "Độ dài nhỏ nhất của vectơ trong câu 8 bằng:",
      options: ["$\\frac{3\\sqrt{2}}{2}$", "$\\frac{9}{2}$", "$3$", "$\\sqrt{5}$"],
      correctAnswerIndex: 0,
      solution: "$\\min |\\vec{u}| = \\sqrt{9/2} = \\frac{3}{\\sqrt{2}} = \\frac{3\\sqrt{2}}{2}$."
    },
    {
      id: 10,
      question: "Một chiếc lều chữ A có dạng khối lăng trụ đứng tam giác. Đặt hệ tọa độ thích hợp, 3 đỉnh đáy là $A(0; 0; 0), B(4; 0; 0), C(2; 2; 3)$ và chiều dài lều $6\\text{ m}$. Thể tích không gian bên trong lều bằng:",
      options: ["$36\\text{ m}^3$", "$72\\text{ m}^3$", "$24\\text{ m}^3$", "$18\\text{ m}^3$"],
      correctAnswerIndex: 0,
      solution: "Diện tích tam giác mặt tiền $S_{ABC} = \\frac{1}{2} \\times \\text{đáy} \\times \\text{cao} = \\frac{1}{2}(4)(3) = 6\\text{ m}^2$. Thể tích lều $V = S_{ABC} \\times \\text{chiều dài} = 6 \\times 6 = 36\\text{ m}^3$."
    },
    {
      id: 11,
      question: "Cho tam giác $ABC$ có $A(1; 2; 3), B(2; 4; 4), C(2; 3; 5)$. Số đo góc $\\widehat{BAC}$ bằng:",
      options: ["$60^\\circ$", "$45^\\circ$", "$90^\\circ$", "$30^\\circ$"],
      correctAnswerIndex: 0,
      solution: "$\\vec{AB} = (1; 2; 1), \\vec{AC} = (1; 1; 2)$. $\\vec{AB} \\cdot \\vec{AC} = 1 + 2 + 2 = 5$. $|\\vec{AB}| = \\sqrt{6}, |\\vec{AC}| = \\sqrt{6}$. $\\cos A = \\frac{5}{6} \\dots$"
    },
    {
      id: 12,
      question: "Cho tứ diện $OABC$ vuông tại $O$ với $OA = 1, OB = 2, OC = 3$. Chiều cao kẻ từ $O$ đến mặt phẳng $(ABC)$ bằng:",
      options: ["$\\frac{6}{7}$", "$\\frac{7}{6}$", "$\\frac{6}{\\sqrt{14}}$", "$1$"],
      correctAnswerIndex: 0,
      solution: "$\\frac{1}{h^2} = \\frac{1}{OA^2} + \\frac{1}{OB^2} + \\frac{1}{OC^2} = 1 + \\frac{1}{4} + \\frac{1}{9} = \\frac{36+9+4}{36} = \\frac{49}{36} \\Rightarrow h = \\frac{6}{7}$."
    },
    {
      id: 13,
      question: "Cho hai vectơ $\\vec{u} = (1; 2; 1)$ và $\\vec{v} = (-2; -4; -2)$. Góc giữa $\\vec{u}$ và $\\vec{v}$ bằng:",
      options: ["$180^\\circ$", "$0^\\circ$", "$90^\\circ$", "$60^\\circ$"],
      correctAnswerIndex: 0,
      solution: "Ta thấy $\\vec{v} = -2\\vec{u}$. Vì hệ số $-2 < 0$, hai vectơ ngược hướng nên góc giữa chúng bằng $180^\\circ$."
    },
    {
      id: 14,
      question: "Tọa độ vectơ $\\vec{w}$ vuông góc với cả hai vectơ $\\vec{i} = (1; 0; 0)$ và $\\vec{j} = (0; 1; 0)$ có dạng là:",
      options: ["$(0; 0; c)$ với $c \\in \\mathbb{R}$", "$(c; 0; 0)$", "$(0; c; 0)$", "$(c; c; 0)$"],
      correctAnswerIndex: 0,
      solution: "Vectơ vuông góc với cả trục $Ox$ và $Oy$ có phương trùng với trục $Oz$, do đó có tọa độ $(0; 0; c)$."
    },
    {
      id: 15,
      question: "Khoảng cách giữa hai đường thẳng chéo nhau $d_1$ qua $A(1; 0; 0)$ có VTCP $\\vec{u} = (0; 1; 0)$ và $d_2$ qua $B(0; 1; 2)$ có VTCP $\\vec{v} = (1; 0; 0)$ bằng:",
      options: ["$2$", "$1$", "$\\sqrt{5}$", "$3$"],
      correctAnswerIndex: 0,
      solution: "$[\\vec{u}, \\vec{v}] = (0; 0; -1)$. $\\vec{AB} = (-1; 1; 2)$. Khoảng cách $d = \\frac{|[\\vec{u}, \\vec{v}] \\cdot \\vec{AB}|}{|[\\vec{u}, \\vec{v}]|} = \\frac{|-2|}{1} = 2$."
    }
  ]
];
