import { Question } from './types';

export const lessonChuong2Sets: Question[][] = [
  // Bộ 1: Trắc nghiệm Tổng hợp Chương II (Theo SGK trang 74-76)
  [
    {
      id: 1,
      question: "Trong không gian $Oxyz$, cho hai vectơ $\\vec{a} = (1; 2; 3)$ và $\\vec{b} = (2; 0; -1)$. Độ dài của vectơ $\\vec{a} + \\vec{b}$ bằng:",
      options: ["$\\sqrt{17}$", "$\\sqrt{14}$", "$5$", "$\\sqrt{13}$"],
      correctAnswerIndex: 0,
      solution: "$\\vec{a} + \\vec{b} = (1+2; 2+0; 3-1) = (3; 2; 2)$. Độ dài $|\\vec{a}+\\vec{b}| = \\sqrt{3^2 + 2^2 + 2^2} = \\sqrt{9 + 4 + 4} = \\sqrt{17}$."
    },
    {
      id: 2,
      question: "Trong không gian $Oxyz$, cho ba điểm $A(1; 0; 2), B(-1; 1; 3), C(3; 2; 1)$. Tọa độ trọng tâm $G$ của tam giác $ABC$ là:",
      options: ["$G(1; 1; 2)$", "$G(3; 3; 6)$", "$G(1; 1; 6)$", "$G(2; 1; 2)$"],
      correctAnswerIndex: 0,
      solution: "$G = \\left(\\frac{1-1+3}{3}; \\frac{0+1+2}{3}; \\frac{2+3+1}{3}\\right) = (1; 1; 2)$."
    },
    {
      id: 3,
      question: "Cho $\\vec{a} = (1; -1; 2)$ và $\\vec{b} = (2; 1; -1)$. Tích có hướng $[\\vec{a}, \\vec{b}]$ có tọa độ là:",
      options: ["$(-1; 5; 3)$", "$(1; 5; 3)$", "$(-1; -5; 3)$", "$(3; 5; -1)$"],
      correctAnswerIndex: 0,
      solution: "$[\\vec{a}, \\vec{b}] = ((-1)(-1) - 2(1); 2(2) - 1(-1); 1(1) - (-1)(2)) = (1 - 2; 4 + 1; 1 + 2) = (-1; 5; 3)$."
    },
    {
      id: 4,
      question: "Cho tam giác $ABC$ có $A(1; 0; 0), B(0; 0; 1), C(2; 1; 1)$. Độ dài cạnh $AB$ bằng:",
      options: ["$\\sqrt{2}$", "$1$", "$2$", "$\\sqrt{3}$"],
      correctAnswerIndex: 0,
      solution: "$AB = \\sqrt{(0-1)^2 + (0-0)^2 + (1-0)^2} = \\sqrt{1 + 0 + 1} = \\sqrt{2}$."
    },
    {
      id: 5,
      question: "Cho hình hộp chữ nhật $ABCD.A'B'C'D'$ có $AB = 3, AD = 4, AA' = 5$. Khoảng cách giữa hai đỉnh đối diện $A$ và $C'$ là:",
      options: ["$5\\sqrt{2}$", "$12$", "$5$", "$\\sqrt{50}$"],
      correctAnswerIndex: 0,
      solution: "$AC' = \\sqrt{AB^2 + AD^2 + AA'^2} = \\sqrt{3^2 + 4^2 + 5^2} = \\sqrt{9 + 16 + 25} = \\sqrt{50} = 5\\sqrt{2}$."
    },
    {
      id: 6,
      question: "Góc giữa hai vectơ $\\vec{u} = (1; 1; 0)$ và $\\vec{v} = (0; 1; 1)$ bằng:",
      options: ["$60^\\circ$", "$45^\\circ$", "$90^\\circ$", "$120^\\circ$"],
      correctAnswerIndex: 0,
      solution: "$\\vec{u} \\cdot \\vec{v} = 1$. $|\\vec{u}| = \\sqrt{2}, |\\vec{v}| = \\sqrt{2}$. $\\cos = 1/2 \\Rightarrow$ góc bằng $60^\\circ$."
    },
    {
      id: 7,
      question: "Tìm $m$ để vectơ $\\vec{u} = (m; 1; -2)$ vuông góc với vectơ $\\vec{v} = (2; 3; 1)$.",
      options: ["$m = -1/2$", "$m = 1/2$", "$m = 2$", "$m = -2$"],
      correctAnswerIndex: 0,
      solution: "$\\vec{u} \\cdot \\vec{v} = 2m + 3 - 2 = 2m + 1 = 0 \\Leftrightarrow m = -1/2$."
    },
    {
      id: 8,
      question: "Tọa độ trung điểm của đoạn thẳng nối $A(2; -3; 5)$ và $B(4; 1; -1)$ là:",
      options: ["$(3; -1; 2)$", "$(6; -2; 4)$", "$(1; 2; -3)$", "$(3; -2; 2)$"],
      correctAnswerIndex: 0,
      solution: "$M = \\left(\\frac{2+4}{2}; \\frac{-3+1}{2}; \\frac{5-1}{2}\\right) = (3; -1; 2)$."
    },
    {
      id: 9,
      question: "Khoảng cách từ điểm $M(1; -2; 3)$ đến mặt phẳng $(Oxz)$ bằng:",
      options: ["$2$", "$1$", "$3$", "$\\sqrt{14}$"],
      correctAnswerIndex: 0,
      solution: "Khoảng cách từ điểm $M(x_0; y_0; z_0)$ đến mặt phẳng $(Oxz)$ bằng $|y_0| = |-2| = 2$."
    },
    {
      id: 10,
      question: "Trong không gian $Oxyz$, cho hình bình hành $ABCD$ có $A(1; 0; 1), B(2; 1; 2), C(1; 3; 1)$. Tọa độ điểm $D$ là:",
      options: ["$D(0; 2; 0)$", "$D(2; 2; 2)$", "$D(0; 4; 0)$", "$D(2; 4; 2)$"],
      correctAnswerIndex: 0,
      solution: "$x_D = x_A + x_C - x_B = 1 + 1 - 2 = 0$. $y_D = 0 + 3 - 1 = 2$. $z_D = 1 + 1 - 2 = 0$. Vậy $D(0; 2; 0)$."
    },
    {
      id: 11,
      question: "Cho tứ diện $ABCD$ có $A(1; 0; 0), B(0; 2; 0), C(0; 0; 3)$ và $D(2; 2; 2)$. Thể tích tứ diện $ABCD$ bằng:",
      options: ["$\\frac{5}{3}$", "$1$", "$\\frac{1}{3}$", "$\\frac{5}{6}$"],
      correctAnswerIndex: 0,
      solution: "$\\vec{AB} = (-1; 2; 0), \\vec{AC} = (-1; 0; 3), \\vec{AD} = (1; 2; 2)$. $[\\vec{AB}, \\vec{AC}] = (6; 3; 2)$. $V = \\frac{1}{6}|6(1) + 3(2) + 2(2)| = \\frac{1}{6}|6+6+4| = \\frac{16}{6} = \\frac{8}{3}$."
    },
    {
      id: 12,
      question: "Một chiếc máy bay đang bay theo hướng vectơ $\\vec{v} = (300; 400; 100)$ (km/h). Tốc độ (độ lớn vận tốc) của máy bay là:",
      options: ["$100\\sqrt{26}\\text{ km/h} \\approx 510\\text{ km/h}$", "$500\\text{ km/h}$", "$600\\text{ km/h}$", "$800\\text{ km/h}$"],
      correctAnswerIndex: 0,
      solution: "$|\\vec{v}| = \\sqrt{300^2 + 400^2 + 100^2} = \\sqrt{90000 + 160000 + 10000} = \\sqrt{260000} = 100\\sqrt{26} \\approx 510$ km/h."
    },
    {
      id: 13,
      question: "Cho hai vectơ $\\vec{a} = (2; -1; 1)$ và $\\vec{b} = (1; 1; -1)$. Tích vô hướng $\\vec{a} \\cdot \\vec{b}$ bằng:",
      options: ["$0$", "$2$", "$4$", "$-2$"],
      correctAnswerIndex: 0,
      solution: "$\\vec{a} \\cdot \\vec{b} = 2(1) + (-1)(1) + 1(-1) = 2 - 1 - 1 = 0$."
    },
    {
      id: 14,
      question: "Do $\\vec{a} \\cdot \\vec{b} = 0$ ở câu 13, nhận xét gì về vị trí tương đối giữa $\\vec{a}$ và $\\vec{b}$?",
      options: ["Hai vectơ vuông góc với nhau", "Hai vectơ cùng phương", "Hai vectơ ngược hướng", "Hai vectơ bằng nhau"],
      correctAnswerIndex: 0,
      solution: "Tích vô hướng bằng 0 chứng tỏ hai vectơ vuông góc nhau."
    },
    {
      id: 15,
      question: "Tọa độ tâm $I$ của mặt cầu ngoại tiếp tứ diện $OABC$ với $A(2; 0; 0), B(0; 4; 0), C(0; 0; 6)$ là:",
      options: ["$I(1; 2; 3)$", "$I(2; 4; 6)$", "$I(1; 1; 1)$", "$I(2/3; 4/3; 2)$"],
      correctAnswerIndex: 0,
      solution: "Khối tứ diện vuông tại $O$ có tâm mặt cầu ngoại tiếp là trung điểm đường chéo hộp chữ nhật dựng trên $OA, OB, OC$: $I(1; 2; 3)$."
    }
  ],
  // Bộ 2: Vận dụng thực tế & Vật lý - Kỹ thuật
  [
    {
      id: 1,
      question: "Ba lực $\\vec{F}_1 = (10; 0; 0), \\vec{F}_2 = (0; 20; 0), \\vec{F}_3 = (0; 0; 30)$ (đơn vị: N) cùng tác dụng vào một vật tại gốc $O$. Độ lớn hợp lực $\\vec{F} = \\vec{F}_1 + \\vec{F}_2 + \\vec{F}_3$ xấp xỉ bằng:",
      options: ["$37,42\\text{ N}$", "$60\\text{ N}$", "$30\\text{ N}$", "$45\\text{ N}$"],
      correctAnswerIndex: 0,
      solution: "$\\vec{F} = (10; 20; 30) \\Rightarrow |\\vec{F}| = \\sqrt{10^2 + 20^2 + 30^2} = \\sqrt{100 + 400 + 900} = \\sqrt{1400} = 10\\sqrt{14} \\approx 37,42\\text{ N}$."
    },
    {
      id: 2,
      question: "Một đèn chùm nặng $120\\text{ N}$ được treo vào trần nhà bằng 3 sợi dây cáp không giãn có độ dài bằng nhau nối từ cùng một điểm $S$ trên đèn đến 3 móc treo $A, B, C$ trên trần. Tam giác $ABC$ đều. Lực căng trên mỗi sợi dây là như nhau. Nếu góc nghiêng giữa dây cáp và phương thẳng đứng là $30^\\circ$, độ lớn lực căng trên mỗi sợi cáp bằng:",
      options: ["$\\frac{40}{\\cos 30^\\circ} \\approx 46,19\\text{ N}$", "$40\\text{ N}$", "$60\\text{ N}$", "$80\\text{ N}$"],
      correctAnswerIndex: 0,
      solution: "Tổng các thành phần lực thẳng đứng cân bằng trọng lượng: $3 T \\cos 30^\\circ = P = 120 \\Rightarrow T = \\frac{120}{3\\cos 30^\\circ} = \\frac{40}{\\sqrt{3}/2} = \\frac{80}{\\sqrt{3}} \\approx 46,19\\text{ N}$."
    },
    {
      id: 3,
      question: "Cho hình lăng trụ tam giác $ABC.A'B'C'$ có $A(0;0;0), B(2;0;0), C(0;3;0)$ và $A'(1;1;4)$. Thể tích khối lăng trụ bằng:",
      options: ["$12$", "$4$", "$6$", "$24$"],
      correctAnswerIndex: 0,
      solution: "Diện tích đáy $S_{\\Delta ABC} = \\frac{1}{2}(2)(3) = 3$. Chiều cao $h = z_{A'} = 4$. Thể tích $V = S \\times h = 3 \\times 4 = 12$."
    },
    {
      id: 4,
      question: "Một máy bay bay từ $A(100; 200; 5)$ đến $B(400; 600; 10)$ (đơn vị: km) với vận tốc không đổi trong $0,5\\text{ giờ}$. Vận tốc của máy bay xấp xỉ bằng:",
      options: ["$1000\\text{ km/h}$", "$800\\text{ km/h}$", "$500\\text{ km/h}$", "$600\\text{ km/h}$"],
      correctAnswerIndex: 0,
      solution: "$AB = \\sqrt{300^2 + 400^2 + 5^2} = \\sqrt{90000 + 160000 + 25} \\approx 500\\text{ km}$. Vận tốc $v = 500 / 0,5 = 1000$ km/h."
    },
    {
      id: 5,
      question: "Góc dốc (góc tạo bởi hướng bay với mặt phẳng nằm ngang $(Oxy)$) của máy bay trong câu 4 có $\\sin \\alpha$ xấp xỉ bằng:",
      options: ["$\\frac{5}{500} = 0,01$", "$0,1$", "$0,05$", "$0,001$"],
      correctAnswerIndex: 0,
      solution: "$\\sin \\alpha = \\frac{\\Delta z}{AB} = \\frac{10 - 5}{500} = \\frac{5}{500} = 0,01$ (góc dốc khoảng $0,57^\\circ$)."
    },
    {
      id: 6,
      question: "Cho ba điểm $A(2; 1; -1), B(3; 0; 1), C(2; -1; 3)$. Điểm $D$ trên trục $Oy$ sao cho tứ diện $ABCD$ có thể tích bằng $5$ có tung độ là:",
      options: ["$y = 6$ hoặc $y = -9$", "$y = 5$", "$y = -5$", "$y = 3$ hoặc $y = -3$"],
      correctAnswerIndex: 0,
      solution: "Gọi $D(0; y; 0)$. Sử dụng công thức thể tích $V = \\frac{1}{6}|[\\vec{AB}, \\vec{AC}] \\cdot \\vec{AD}| = 5$ giải phương trình chứa giá trị tuyệt đối ra 2 giá trị của $y$."
    },
    {
      id: 7,
      question: "Cho tứ diện đều $ABCD$ có cạnh $a$. Đặt hệ trục tọa độ thích hợp. Tích vô hướng $\\vec{AB} \\cdot \\vec{CD}$ luôn bằng:",
      options: ["$0$", "$a^2/2$", "$-a^2/2$", "$a^2$"],
      correctAnswerIndex: 0,
      solution: "Trong tứ diện đều, các cặp cạnh đối luôn vuông góc với nhau từng đôi một, do đó tích vô hướng bằng 0."
    },
    {
      id: 8,
      question: "Cho hai vectơ $\\vec{u} = (1; 2; 3)$ và $\\vec{v} = (2; m; 6)$. Tìm $m$ để hai vectơ $\\vec{u}$ và $\\vec{v}$ cùng phương.",
      options: ["$m = 4$", "$m = 2$", "$m = 6$", "$m = -4$"],
      correctAnswerIndex: 0,
      solution: "Hai vectơ cùng phương khi $\\frac{2}{1} = \\frac{m}{2} = \\frac{6}{3} = 2 \\Rightarrow m = 4$."
    },
    {
      id: 9,
      question: "Diện tích tam giác $OAB$ với $O(0; 0; 0), A(1; 2; 3), B(3; 2; 1)$ bằng:",
      options: ["$2\\sqrt{6}$", "$\\sqrt{6}$", "$4\\sqrt{6}$", "$6$"],
      correctAnswerIndex: 0,
      solution: "$[\\vec{OA}, \\vec{OB}] = (2(1)-3(2); 3(3)-1(1); 1(2)-2(3)) = (-4; 8; -4)$. $S = \\frac{1}{2}\\sqrt{16+64+16} = \\frac{1}{2}\\sqrt{96} = \\frac{4\\sqrt{6}}{2} = 2\\sqrt{6}$."
    },
    {
      id: 10,
      question: "Cho điểm $A(1; 2; 3)$. Hình chiếu vuông góc của $A$ lên mặt phẳng $(Oyz)$ có tọa độ là:",
      options: ["$(0; 2; 3)$", "$(1; 0; 0)$", "$(1; 2; 0)$", "$(1; 0; 3)$"],
      correctAnswerIndex: 0,
      solution: "Chiếu lên $(Oyz)$ thì hoành độ $x = 0$, giữ nguyên $y, z \\Rightarrow (0; 2; 3)$."
    },
    {
      id: 11,
      question: "Cho $\\vec{u} = (2; -1; 2)$. Vectơ cùng hướng với $\\vec{u}$ và có độ dài bằng $6$ là:",
      options: ["$(4; -2; 4)$", "$(2; -1; 2)$", "$(6; -3; 6)$", "$(-4; 2; -4)$"],
      correctAnswerIndex: 0,
      solution: "$|\\vec{u}| = \\sqrt{4+1+4} = 3$. Để có độ dài 6, ta nhân vectơ với tỉ số $k = 6/3 = 2 \\Rightarrow \\vec{v} = 2\\vec{u} = (4; -2; 4)$."
    },
    {
      id: 12,
      question: "Cho tam giác $ABC$ có $A(1; 1; 1), B(2; 3; 0), C(3; 1; 2)$. Số đo góc $B$ của tam giác bằng:",
      options: ["$90^\\circ$", "$60^\\circ$", "$45^\\circ$", "$120^\\circ$"],
      correctAnswerIndex: 0,
      solution: "$\\vec{BA} = (-1; -2; 1), \\vec{BC} = (1; -2; 2)$. $\\vec{BA} \\cdot \\vec{BC} = -1 + 4 + 2 = 5 \\dots$"
    },
    {
      id: 13,
      question: "Một cánh buồm hình tam giác có 3 đỉnh $A(0; 0; 2), B(4; 0; 2), C(2; 0; 8)$ (mét). Diện tích cánh buồm bằng:",
      options: ["$12\\text{ m}^2$", "$24\\text{ m}^2$", "$6\\text{ m}^2$", "$16\\text{ m}^2$"],
      correctAnswerIndex: 0,
      solution: "Đáy $AB = 4\\text{ m}$, chiều cao $h = 8 - 2 = 6\\text{ m}$. Diện tích $S = \\frac{1}{2}(4)(6) = 12\\text{ m}^2$."
    },
    {
      id: 14,
      question: "Khoảng cách từ gốc tọa độ $O$ đến trọng tâm của tam giác $ABC$ với $A(3; 0; 0), B(0; 6; 0), C(0; 0; 9)$ bằng:",
      options: ["$\\sqrt{14}$", "$14$", "$\\sqrt{126}$", "$3\\sqrt{14}$"],
      correctAnswerIndex: 0,
      solution: "Trọng tâm $G(1; 2; 3)$. $OG = \\sqrt{1^2 + 2^2 + 3^2} = \\sqrt{1 + 4 + 9} = \\sqrt{14}$."
    },
    {
      id: 15,
      question: "Cho hình chóp tam giác đều $S.ABC$ có cạnh đáy bằng $a$, cạnh bên bằng $2a$. Độ dài đường cao của hình chóp bằng:",
      options: ["$\\frac{a\\sqrt{33}}{3}$", "$\\frac{a\\sqrt{11}}{3}$", "$a\\sqrt{3}$", "$\\frac{a\\sqrt{35}}{3}$"],
      correctAnswerIndex: 0,
      solution: "Bán kính đáy $R = \\frac{a\\sqrt{3}}{3}$. Chiều cao $h = \\sqrt{SA^2 - R^2} = \\sqrt{4a^2 - a^2/3} = \\sqrt{\\frac{11a^2}{3}} = \\frac{a\\sqrt{33}}{3}$."
    }
  ],
  // Bộ 3: Nâng cao & Cực trị hình học không gian
  [
    {
      id: 1,
      question: "Cho điểm $A(1; 2; 3)$ và mặt phẳng $(Oxy)$. Điểm $M$ thuộc $(Oxy)$ sao cho $MA + MO$ đạt giá trị nhỏ nhất có tọa độ là:",
      options: ["$(0; 0; 0)$", "$(1/2; 1; 0)$", "$(1; 2; 0)$", "$(0; 1; 0)$"],
      correctAnswerIndex: 0,
      solution: "Lấy $O$ và $A$ cùng phía với $(Oxy)$. Điểm đối xứng của $O$ qua $(Oxy)$ chính là $O$. Do $O \\in (Oxy)$, $MA + MO \\ge OA$. Đạt min khi $M \\equiv O(0; 0; 0)$."
    },
    {
      id: 2,
      question: "Cho hai điểm $A(2; -1; 1)$ và $B(0; 3; -1)$. Điểm $M$ trên trục $Oz$ sao cho $MA^2 + MB^2$ nhỏ nhất là:",
      options: ["$M(0; 0; 0)$", "$M(0; 0; 1)$", "$M(0; 0; -1)$", "$M(0; 0; 2)$"],
      correctAnswerIndex: 0,
      solution: "Trung điểm $I$ của $AB$ là $I(1; 1; 0)$. Hình chiếu của $I$ lên trục $Oz$ là gốc $O(0; 0; 0)$. Do đó điểm $M$ tối ưu là $M(0; 0; 0)$."
    },
    {
      id: 3,
      question: "Cho hình hộp $ABCD.A'B'C'D'$. Đặt $\\vec{AB} = \\vec{a}, \\vec{AD} = \\vec{b}, \\vec{AA'} = \\vec{c}$. Biểu diễn vectơ $\\vec{AC'}$ theo $\\vec{a}, \\vec{b}, \\vec{c}$:",
      options: ["$\\vec{AC'} = \\vec{a} + \\vec{b} + \\vec{c}$", "$\\vec{AC'} = \\vec{a} + \\vec{b} - \\vec{c}$", "$\\vec{AC'} = -\\vec{a} + \\vec{b} + \\vec{c}$", "$\\vec{AC'} = \\vec{a} - \\vec{b} + \\vec{c}$"],
      correctAnswerIndex: 0,
      solution: "Theo quy tắc hình hộp: $\\vec{AC'} = \\vec{AB} + \\vec{AD} + \\vec{AA'} = \\vec{a} + \\vec{b} + \\vec{c}$."
    },
    {
      id: 4,
      question: "Trong không gian $Oxyz$, cho $A(1; 0; 0), B(0; 1; 0), C(0; 0; 1), D(1; 1; 1)$. Khoảng cách giữa hai đường thẳng $AB$ và $CD$ bằng:",
      options: ["$\\frac{1}{\\sqrt{2}}$", "$\\frac{1}{\\sqrt{3}}$", "$1$", "$\\frac{\\sqrt{2}}{2}$"],
      correctAnswerIndex: 0,
      solution: "$\\vec{AB} = (-1; 1; 0), \\vec{CD} = (1; 1; 0)$. $[\\vec{AB}, \\vec{CD}] = (0; 0; -2)$. $\\vec{AC} = (-1; 0; 1)$. Khoảng cách $d = \\frac{|(0;0,-2)\\cdot(-1,0,1)|}{2} = \\frac{2}{2} = 1$."
    },
    {
      id: 5,
      question: "Cho tam giác $ABC$ có diện tích bằng $6$. Phép chiếu vuông góc của tam giác $ABC$ lên mặt phẳng $(P)$ tạo thành tam giác $A'B'C'$ có diện tích bằng $3$. Góc giữa mặt phẳng $(ABC)$ và $(P)$ bằng:",
      options: ["$60^\\circ$", "$30^\\circ$", "$45^\\circ$", "$90^\\circ$"],
      correctAnswerIndex: 0,
      solution: "Công thức diện tích hình chiếu: $S' = S \\cos \\alpha \\Rightarrow \\cos \\alpha = \\frac{S'}{S} = \\frac{3}{6} = \\frac{1}{2} \\Rightarrow \\alpha = 60^\\circ$."
    },
    {
      id: 6,
      question: "Cho 3 vectơ $\\vec{a}, \\vec{b}, \\vec{c}$ đôi một vuông góc có độ dài lần lượt là $2, 3, 6$. Độ dài của vectơ tổng $\\vec{a} + \\vec{b} + \\vec{c}$ bằng:",
      options: ["$7$", "$11$", "$6$", "$\\sqrt{49} = 7$"],
      correctAnswerIndex: 0,
      solution: "$|\\vec{a}+\\vec{b}+\\vec{c}|^2 = |\\vec{a}|^2 + |\\vec{b}|^2 + |\\vec{c}|^2 + 0 = 4 + 9 + 36 = 49 \\Rightarrow |\\vec{a}+\\vec{b}+\\vec{c}| = 7$."
    },
    {
      id: 7,
      question: "Bán kính mặt cầu đi qua 4 điểm $O(0;0;0), A(2;0;0), B(0;4;0), C(0;0;4)$ bằng:",
      options: ["$3$", "$6$", "$\\sqrt{6}$", "$2\\sqrt{2}$"],
      correctAnswerIndex: 0,
      solution: "Tâm mặt cầu $I(1; 2; 2)$. Bán kính $R = OI = \\sqrt{1^2 + 2^2 + 2^2} = \\sqrt{9} = 3$."
    },
    {
      id: 8,
      question: "Tìm $m$ để tam giác $ABC$ vuông tại $B$ biết $A(1; 2; 0), B(2; 1; 1), C(m; 3; 2)$.",
      options: ["$m = 5$", "$m = 3$", "$m = -1$", "$m = 0$"],
      correctAnswerIndex: 0,
      solution: "$\\vec{BA} = (-1; 1; -1), \\vec{BC} = (m-2; 2; 1)$. Vuông tại $B \\Leftrightarrow \\vec{BA} \\cdot \\vec{BC} = 0 \\Leftrightarrow -(m-2) + 2 - 1 = 0 \\Leftrightarrow -m + 2 + 1 = 0 \\Leftrightarrow m = 3$."
    },
    {
      id: 9,
      question: "Cho $\\vec{u} = (1; -2; 2)$. Vectơ $\\vec{v}$ cùng hướng với $\\vec{u}$ và thỏa mãn $\\vec{u} \\cdot \\vec{v} = 18$ là:",
      options: ["$(2; -4; 4)$", "$(1; -2; 2)$", "$(3; -6; 6)$", "$(-2; 4; -4)$"],
      correctAnswerIndex: 0,
      solution: "Đặt $\\vec{v} = k\\vec{u}$ ($k > 0$). $\\vec{u} \\cdot \\vec{v} = k|\\vec{u}|^2 = k(1+4+4) = 9k = 18 \\Rightarrow k = 2$. Vậy $\\vec{v} = (2; -4; 4)$."
    },
    {
      id: 10,
      question: "Một ngọn núi có đỉnh $S(10; 20; 3)$ (đơn vị: km). Mặt đất là mặt phẳng $(Oxy)$. Độ dốc của đường leo núi từ chân núi $A(2; 5; 0)$ lên đỉnh $S$ có góc nghiêng $\\alpha$ thỏa mãn $\\tan \\alpha$ bằng:",
      options: ["$\\frac{3}{17}$", "$\\frac{3}{\\sqrt{17}}$", "$\\frac{17}{3}$", "$0,5$"],
      correctAnswerIndex: 0,
      solution: "Khoảng cách ngang trên mặt đất: $d = \\sqrt{(10-2)^2 + (20-5)^2} = \\sqrt{8^2 + 15^2} = 17\\text{ km}$. Chiều cao $\\Delta z = 3\\text{ km}$. $\\tan \\alpha = \\frac{3}{17}$."
    },
    {
      id: 11,
      question: "Cho $A(1; 2; 1), B(2; 1; 3), C(3; 2; 2)$. Tọa độ trực tâm $H$ của tam giác $ABC$ là:",
      options: ["$(2; 5/3; 2)$", "$(2; 2; 2)$", "$(5/3; 5/3; 5/3)$", "$(1; 1; 1)$"],
      correctAnswerIndex: 0,
      solution: "Sử dụng tính chất $\\vec{AH} \\cdot \\vec{BC} = 0, \\vec{BH} \\cdot \\vec{AC} = 0$ và $H$ thuộc mặt phẳng $(ABC)$ để giải hệ phương trình."
    },
    {
      id: 12,
      question: "Khối lượng của một vật hình tứ diện đồng chất có thể tích $V = 12\\text{ cm}^3$ và khối lượng riêng $D = 7,8\\text{ g/cm}^3$ bằng:",
      options: ["$93,6\\text{ g}$", "$100\\text{ g}$", "$85\\text{ g}$", "$90\\text{ g}$"],
      correctAnswerIndex: 0,
      solution: "$m = D \\times V = 7,8 \\times 12 = 93,6\\text{ g}$."
    },
    {
      id: 13,
      question: "Góc giữa đường thẳng nối $O(0;0;0)$ với $M(1; 1; 1)$ và mặt phẳng $(Oxy)$ bằng:",
      options: ["$\\arcsin(1/\\sqrt{3}) \\approx 35,26^\\circ$", "$45^\\circ$", "$60^\\circ$", "$30^\\circ$"],
      correctAnswerIndex: 0,
      solution: "Hình chiếu của $M$ lên $(Oxy)$ là $M'(1; 1; 0)$. $OM = \\sqrt{3}, MM' = 1$. $\\sin \\alpha = \\frac{MM'}{OM} = \\frac{1}{\\sqrt{3}} \\Rightarrow \\alpha \\approx 35,26^\\circ$."
    },
    {
      id: 14,
      question: "Cho ba điểm $A(1; 0; 0), B(0; 2; 0), C(0; 0; 3)$. Khoảng cách từ gốc $O$ đến mặt phẳng $(ABC)$ bằng:",
      options: ["$\\frac{6}{7}$", "$\\frac{7}{6}$", "$1$", "$\\frac{3}{2}$"],
      correctAnswerIndex: 0,
      solution: "$\\frac{1}{d^2} = \\frac{1}{1^2} + \\frac{1}{2^2} + \\frac{1}{3^2} = 1 + \\frac{1}{4} + \\frac{1}{9} = \\frac{49}{36} \\Rightarrow d = \\frac{6}{7}$."
    },
    {
      id: 15,
      question: "Tích có hướng $[\\vec{i}, \\vec{j}]$ của hai vectơ đơn vị trục $Ox, Oy$ bằng:",
      options: ["$\\vec{k} = (0; 0; 1)$", "$-\\vec{k} = (0; 0; -1)$", "$\\vec{0} = (0; 0; 0)$", "$\\vec{i} = (1; 0; 0)$"],
      correctAnswerIndex: 0,
      solution: "Theo quy tắc tam diện thuận: $[\\vec{i}, \\vec{j}] = \\vec{k} = (0; 0; 1)$."
    }
  ]
];
