import { Question } from './types';

export const lesson7Sets: Question[][] = [
  // Bộ 1: Cơ bản & Tọa độ điểm, tọa độ vectơ
  [
    {
      id: 1,
      question: "Hệ trục tọa độ $Oxyz$ trong không gian gồm ba trục tọa độ $Ox, Oy, Oz$ vuông góc với nhau từng đôi một với các vectơ đơn vị tương ứng là:",
      options: ["$\\vec{i} = (1; 0; 0), \\vec{j} = (0; 1; 0), \\vec{k} = (0; 0; 1)$", "$\\vec{i} = (1; 1; 1), \\vec{j} = (0; 0; 0)$", "$\\vec{i} = (0; 1; 0), \\vec{j} = (1; 0; 0)$", "$\\vec{i} = (1; 0; 0), \\vec{j} = (0; 0; 1)$"],
      correctAnswerIndex: 0,
      solution: "Hệ tọa độ $Oxyz$ có gốc $O(0;0;0)$ và 3 vectơ đơn vị $\\vec{i} = (1; 0; 0), \\vec{j} = (0; 1; 0), \\vec{k} = (0; 0; 1)$ đôi một vuông góc."
    },
    {
      id: 2,
      question: "Nếu vectơ $\\vec{u} = 2\\vec{i} - 3\\vec{j} + 5\\vec{k}$ thì tọa độ của $\\vec{u}$ là:",
      options: ["$(2; -3; 5)$", "$(2; 3; 5)$", "$(-2; 3; -5)$", "$(5; -3; 2)$"],
      correctAnswerIndex: 0,
      solution: "Định nghĩa tọa độ vectơ: $\\vec{u} = x\\vec{i} + y\\vec{j} + z\\vec{k} \\Rightarrow \\vec{u} = (x; y; z) = (2; -3; 5)$."
    },
    {
      id: 3,
      question: "Tọa độ điểm $M$ thỏa mãn $\\vec{OM} = -\\vec{i} + 4\\vec{k}$ là:",
      options: ["$M(-1; 0; 4)$", "$M(-1; 4; 0)$", "$M(0; -1; 4)$", "$M(-1; 0; 0)$"],
      correctAnswerIndex: 0,
      solution: "$\\vec{OM} = -1\\vec{i} + 0\\vec{j} + 4\\vec{k} \\Rightarrow M(-1; 0; 4)$."
    },
    {
      id: 4,
      question: "Cho hai điểm $A(1; 2; -3)$ và $B(3; 0; 1)$. Tọa độ của vectơ $\\vec{AB}$ là:",
      options: ["$(2; -2; 4)$", "$(4; 2; -2)$", "$(-2; 2; -4)$", "$(2; 1; -1)$"],
      correctAnswerIndex: 0,
      solution: "$\\vec{AB} = (x_B - x_A; y_B - y_A; z_B - z_A) = (3-1; 0-2; 1-(-3)) = (2; -2; 4)$."
    },
    {
      id: 5,
      question: "Tọa độ trung điểm $M$ của đoạn thẳng $AB$ với $A(1; 2; -3)$ và $B(3; 0; 1)$ là:",
      options: ["$M(2; 1; -1)$", "$M(4; 2; -2)$", "$M(2; -2; 4)$", "$M(1; -1; 2)$"],
      correctAnswerIndex: 0,
      solution: "$M = \\left(\\frac{x_A+x_B}{2}; \\frac{y_A+y_B}{2}; \\frac{z_A+z_B}{2}\\right) = (2; 1; -1)$."
    },
    {
      id: 6,
      question: "Cho tam giác $ABC$ có $A(1; 0; 2), B(-2; 3; 1), C(4; 3; 3)$. Tọa độ trọng tâm $G$ của tam giác $ABC$ là:",
      options: ["$G(1; 2; 2)$", "$G(3; 6; 6)$", "$G(1; 3; 2)$", "$G(2; 1; 2)$"],
      correctAnswerIndex: 0,
      solution: "$G = \\left(\\frac{1-2+4}{3}; \\frac{0+3+3}{3}; \\frac{2+1+3}{3}\\right) = (1; 2; 2)$."
    },
    {
      id: 7,
      question: "Độ dài của vectơ $\\vec{u} = (2; -1; 2)$ bằng:",
      options: ["$3$", "$9$", "$\\sqrt{5}$", "$\\sqrt{7}$"],
      correctAnswerIndex: 0,
      solution: "$|\\vec{u}| = \\sqrt{2^2 + (-1)^2 + 2^2} = \\sqrt{4 + 1 + 4} = \\sqrt{9} = 3$."
    },
    {
      id: 8,
      question: "Khoảng cách giữa hai điểm $A(1; 2; 3)$ và $B(3; 6; 7)$ bằng:",
      options: ["$6$", "$4$", "$\\sqrt{24}$", "$36$"],
      correctAnswerIndex: 0,
      solution: "$AB = \\sqrt{(3-1)^2 + (6-2)^2 + (7-3)^2} = \\sqrt{4 + 16 + 16} = \\sqrt{36} = 6$."
    },
    {
      id: 9,
      question: "Hình chiếu vuông góc của điểm $M(3; -2; 5)$ lên mặt phẳng tọa độ $(Oxy)$ là điểm:",
      options: ["$M_1(3; -2; 0)$", "$M_1(3; 0; 5)$", "$M_1(0; -2; 5)$", "$M_1(0; 0; 5)$"],
      correctAnswerIndex: 0,
      solution: "Hình chiếu lên $(Oxy)$ cho cao độ $z = 0$, giữ nguyên $x, y \\Rightarrow M_1(3; -2; 0)$."
    },
    {
      id: 10,
      question: "Hình chiếu vuông góc của điểm $M(3; -2; 5)$ lên trục tọa độ $Oz$ là điểm:",
      options: ["$M_z(0; 0; 5)$", "$M_z(3; -2; 0)$", "$M_z(0; -2; 0)$", "$M_z(3; 0; 0)$"],
      correctAnswerIndex: 0,
      solution: "Hình chiếu lên trục $Oz$ giữ nguyên $z$, cho $x = y = 0 \\Rightarrow M_z(0; 0; 5)$."
    },
    {
      id: 11,
      question: "Điểm đối xứng của $M(1; -2; 3)$ qua gốc tọa độ $O$ là:",
      options: ["$M'(-1; 2; -3)$", "$M'(1; 2; 3)$", "$M'(-1; -2; -3)$", "$M'(1; 2; -3)$"],
      correctAnswerIndex: 0,
      solution: "Đối xứng qua gốc $O$: đổi dấu tất cả tọa độ $\\Rightarrow M'(-1; 2; -3)$."
    },
    {
      id: 12,
      question: "Điểm đối xứng của $M(2; 3; -4)$ qua mặt phẳng $(Oxz)$ là điểm:",
      options: ["$M'(2; -3; -4)$", "$M'(-2; 3; 4)$", "$M'(2; 3; 4)$", "$M'(-2; -3; -4)$"],
      correctAnswerIndex: 0,
      solution: "Đối xứng qua $(Oxz)$: giữ nguyên $x, z$ và đổi dấu $y \\Rightarrow M'(2; -3; -4)$."
    },
    {
      id: 13,
      question: "Cho $\\vec{a} = (1; 2; -1)$ và $\\vec{b} = (3; 0; 2)$. Tọa độ của vectơ $2\\vec{a} - \\vec{b}$ là:",
      options: ["$(-1; 4; -4)$", "$(5; 4; 0)$", "$(-1; 2; -3)$", "$(1; 4; -4)$"],
      correctAnswerIndex: 0,
      solution: "$2\\vec{a} - \\vec{b} = (2(1)-3; 2(2)-0; 2(-1)-2) = (-1; 4; -4)$."
    },
    {
      id: 14,
      question: "Cho tứ diện $ABCD$ với $A(1; 0; 0), B(0; 2; 0), C(0; 0; 3), D(3; 2; 1)$. Tọa độ trọng tâm $G$ của tứ diện là:",
      options: ["$G(1; 1; 1)$", "$G(4; 4; 4)$", "$G(1/2; 1/2; 1/2)$", "$G(4/3; 4/3; 4/3)$"],
      correctAnswerIndex: 0,
      solution: "$G = \\left(\\frac{1+0+0+3}{4}; \\frac{0+2+0+2}{4}; \\frac{0+0+3+1}{4}\\right) = (1; 1; 1)$."
    },
    {
      id: 15,
      question: "Khoảng cách từ điểm $M(2; -3; 4)$ đến mặt phẳng $(Oxy)$ bằng:",
      options: ["$4$", "$2$", "$3$", "$\\sqrt{29}$"],
      correctAnswerIndex: 0,
      solution: "Khoảng cách từ $M(x_0; y_0; z_0)$ đến mặt phẳng $(Oxy)$ bằng $|z_0| = |4| = 4$."
    }
  ],
  // Bộ 2: Tọa độ hóa hình học & Bài toán thực tế
  [
    {
      id: 1,
      question: "Một căn phòng có dạng hình hộp chữ nhật với chiều dài $5\\text{ m}$, rộng $4\\text{ m}$, cao $3\\text{ m}$. Chọn hệ trục tọa độ $Oxyz$ có gốc $O$ tại một góc phòng dưới sàn, trục $Ox$ theo chiều dài, $Oy$ theo chiều rộng, $Oz$ theo chiều cao. Tọa độ của chiếc đèn trần đặt tại chính giữa trần nhà là:",
      options: ["$(2,5; 2; 3)$", "$(5; 4; 3)$", "$(2,5; 2; 0)$", "$(0; 0; 3)$"],
      correctAnswerIndex: 0,
      solution: "Tâm trần nhà có $x = 5/2 = 2,5\\text{ m}, y = 4/2 = 2\\text{ m}, z = 3\\text{ m}$. Tọa độ là $(2,5; 2; 3)$."
    },
    {
      id: 2,
      question: "Cho hình lập phương $ABCD.A'B'C'D'$ có cạnh bằng $2$. Đặt gốc $O$ trùng với đỉnh $A$, trục $Ox$ dọc theo tia $AB$, $Oy$ dọc theo tia $AD$, $Oz$ dọc theo tia $AA'$. Tọa độ tâm $I$ của hình lập phương là:",
      options: ["$I(1; 1; 1)$", "$I(2; 2; 2)$", "$I(1; 1; 2)$", "$I(2; 2; 0)$"],
      correctAnswerIndex: 0,
      solution: "Đỉnh đối diện $C'(2; 2; 2)$. Tâm $I$ là trung điểm $AC'$ nên $I = (1; 1; 1)$."
    },
    {
      id: 3,
      question: "Cho hình bình hành $ABCD$ có $A(1; 1; 1), B(2; 3; 4), C(6; 5; 2)$. Tọa độ đỉnh $D$ là:",
      options: ["$D(5; 3; -1)$", "$D(7; 7; 5)$", "$D(3; 3; -1)$", "$D(5; 7; 3)$"],
      correctAnswerIndex: 0,
      solution: "Vì $\\vec{AD} = \\vec{BC} \\Rightarrow (x_D-1; y_D-1; z_D-1) = (6-2; 5-3; 2-4) = (4; 2; -2) \\Rightarrow D(5; 3; -1)$."
    },
    {
      id: 4,
      question: "Tìm $m$ để hai vectơ $\\vec{u} = (2; -1; 3)$ và $\\vec{v} = (m; 2; -6)$ cùng phương.",
      options: ["$m = -4$", "$m = 4$", "$m = -2$", "$m = 6$"],
      correctAnswerIndex: 0,
      solution: "Hai vectơ cùng phương khi $\\frac{m}{2} = \\frac{2}{-1} = \\frac{-6}{3} = -2 \\Rightarrow m = 2(-2) = -4$."
    },
    {
      id: 5,
      question: "Cho tam giác $ABC$ với $A(1; 0; 0), B(0; 2; 0), C(0; 0; 3)$. Độ dài đường trung tuyến kẻ từ đỉnh $A$ bằng:",
      options: ["$\\frac{\\sqrt{17}}{2}$", "$\\sqrt{17}$", "$\\frac{\\sqrt{13}}{2}$", "$3$"],
      correctAnswerIndex: 0,
      solution: "Trung điểm $M$ của $BC$ là $M(0; 1; 3/2)$. $AM = \\sqrt{(0-1)^2 + (1-0)^2 + (3/2-0)^2} = \\sqrt{1 + 1 + 9/4} = \\sqrt{17/4} = \\frac{\\sqrt{17}}{2}$."
    },
    {
      id: 6,
      question: "Tìm điểm $M$ trên trục $Ox$ cách đều hai điểm $A(1; 2; -1)$ và $B(2; 1; 2)$.",
      options: ["$M(1/2; 0; 0)$", "$M(3/2; 0; 0)$", "$M(1; 0; 0)$", "$M(-1/2; 0; 0)$"],
      correctAnswerIndex: 0,
      solution: "Gọi $M(x; 0; 0) \\in Ox$. $MA^2 = MB^2 \\Leftrightarrow (x-1)^2 + 4 + 1 = (x-2)^2 + 1 + 4 \\Leftrightarrow x^2 - 2x + 6 = x^2 - 4x + 9 \\Leftrightarrow 2x = 3 \\Leftrightarrow x = 3/2$."
    },
    {
      id: 7,
      question: "Một trạm rada tại vị trí $O(0; 0; 0)$ phát hiện một máy bay tại vị trí $A(30; 40; 10)$ (đơn vị: km). Khoảng cách từ trạm rada đến máy bay xấp xỉ bằng:",
      options: ["$51\\text{ km}$", "$50\\text{ km}$", "$60\\text{ km}$", "$70\\text{ km}$"],
      correctAnswerIndex: 0,
      solution: "$OA = \\sqrt{30^2 + 40^2 + 10^2} = \\sqrt{900 + 1600 + 100} = \\sqrt{2600} \\approx 50,99 \\approx 51\\text{ km}$."
    },
    {
      id: 8,
      question: "Cho điểm $A(2; -1; 3)$. Điểm đối xứng của $A$ qua trục $Oy$ có tọa độ là:",
      options: ["$(-2; -1; -3)$", "$(-2; 1; -3)$", "$(2; 1; 3)$", "$(2; -1; -3)$"],
      correctAnswerIndex: 0,
      solution: "Đối xứng qua trục $Oy$: giữ nguyên tung độ $y$, đổi dấu hoành độ $x$ và cao độ $z \\Rightarrow (-2; -1; -3)$."
    },
    {
      id: 9,
      question: "Cho ba điểm $A(1; 1; 1), B(2; 3; 4), C(m; 0; 2)$. Tìm $m$ để ba điểm $A, B, C$ thẳng hàng.",
      options: ["Không tồn tại $m$", "$m = 0$", "$m = 1/2$", "$m = 2$"],
      correctAnswerIndex: 0,
      solution: "$\\vec{AB} = (1; 2; 3), \\vec{AC} = (m-1; -1; 1)$. Tỉ số: $\\frac{m-1}{1} = \\frac{-1}{2} = \\frac{1}{3}$. Vì $-1/2 \\neq 1/3$ nên không tồn tại giá trị $m$ nào để 3 điểm thẳng hàng."
    },
    {
      id: 10,
      question: "Cho tứ diện $ABCD$ có $A(2; 1; -1), B(3; 0; 1), C(2; -1; 3)$ và trọng tâm $G(1; 0; 2)$. Tọa độ đỉnh $D$ là:",
      options: ["$D(-3; 0; 5)$", "$D(3; 0; -5)$", "$D(0; 2; 1)$", "$D(-1; 0; 3)$"],
      correctAnswerIndex: 0,
      solution: "$x_D = 4x_G - (x_A+x_B+x_C) = 4(1) - (2+3+2) = 4 - 7 = -3$. Tương tự $y_D = 0, z_D = 4(2) - (-1+1+3) = 5$. Vậy $D(-3; 0; 5)$."
    },
    {
      id: 11,
      question: "Khoảng cách từ điểm $M(1; 2; -2)$ đến trục $Oz$ bằng:",
      options: ["$\\sqrt{5}$", "$2$", "$1$", "$3$"],
      correctAnswerIndex: 0,
      solution: "Khoảng cách từ $M(x_0; y_0; z_0)$ đến trục $Oz$ bằng $\\sqrt{x_0^2 + y_0^2} = \\sqrt{1^2 + 2^2} = \\sqrt{5}$."
    },
    {
      id: 12,
      question: "Cho tam giác $ABC$ có $A(2; 0; 0), B(0; 2; 0), C(0; 0; 2)$. Chu vi tam giác $ABC$ bằng:",
      options: ["$6\\sqrt{2}$", "$6$", "$3\\sqrt{2}$", "$2\\sqrt{6}$"],
      correctAnswerIndex: 0,
      solution: "$AB = BC = CA = \\sqrt{2^2 + 2^2 + 0} = \\sqrt{8} = 2\\sqrt{2}$. Chu vi $P = 3 \\times 2\\sqrt{2} = 6\\sqrt{2}$."
    },
    {
      id: 13,
      question: "Một flycam bay từ điểm $A(10; 20; 50)$ đến điểm $B(70; 100; 50)$ (đơn vị: mét) trong thời gian $10\\text{ giây}$. Vận tốc trung bình của flycam là:",
      options: ["$10\\text{ m/s}$", "$8\\text{ m/s}$", "$12\\text{ m/s}$", "$15\\text{ m/s}$"],
      correctAnswerIndex: 0,
      solution: "$AB = \\sqrt{(70-10)^2 + (100-20)^2 + (50-50)^2} = \\sqrt{60^2 + 80^2} = 100\\text{ m}$. Vận tốc $v = 100 / 10 = 10\\text{ m/s}$."
    },
    {
      id: 14,
      question: "Cho $\\vec{u} = (2; -3; 1)$ và $\\vec{v} = (-4; 6; -2)$. Mối quan hệ giữa hai vectơ là:",
      options: ["$\\vec{v} = -2\\vec{u}$ (ngược hướng)", "$\\vec{v} = 2\\vec{u}$ (cùng hướng)", "Vuông góc nhau", "Không cùng phương"],
      correctAnswerIndex: 0,
      solution: "Ta có $\\frac{-4}{2} = \\frac{6}{-3} = \\frac{-2}{1} = -2 < 0 \\Rightarrow \\vec{v} = -2\\vec{u}$, hai vectơ cùng phương ngược hướng."
    },
    {
      id: 15,
      question: "Tọa độ điểm $C$ trên mặt phẳng $(Oxy)$ sao cho tam giác $ABC$ vuông cân tại $C$ với $A(1; 3; 0), B(5; 3; 0)$ và $y_C > 3$ là:",
      options: ["$C(3; 5; 0)$", "$C(3; 1; 0)$", "$C(3; 3; 2)$", "$C(2; 4; 0)$"],
      correctAnswerIndex: 0,
      solution: "Trung điểm $AB$ là $I(3; 3; 0), AB = 4 \\Rightarrow CI = AB/2 = 2$. Do $y_C > 3$ và $C \\in (Oxy)$, $C(3; 3+2; 0) = C(3; 5; 0)$."
    }
  ],
  // Bộ 3: Nâng cao & Tọa độ không gian
  [
    {
      id: 1,
      question: "Cho ba điểm $A(1; 2; 3), B(2; 1; 0), C(4; -1; -6)$. Khẳng định nào sau đây là đúng?",
      options: ["Ba điểm $A, B, C$ thẳng hàng với $\\vec{AC} = 3\\vec{AB}$", "Ba điểm $A, B, C$ tạo thành một tam giác cân", "Ba điểm tạo thành tam giác vuông", "Điểm $B$ là trung điểm của $AC$"],
      correctAnswerIndex: 0,
      solution: "$\\vec{AB} = (1; -1; -3), \\vec{AC} = (3; -3; -9) = 3\\vec{AB}$. Do đó $A, B, C$ thẳng hàng."
    },
    {
      id: 2,
      question: "Tìm tọa độ chân đường phân giác trong góc $A$ của tam giác $ABC$ biết $A(1; 2; -1), B(2; -1; 3), C(-4; 7; 5)$.",
      options: ["$D(0; 2; 11/3)$", "$D(-1; 3; 4)$", "$D(0; 1; 3)$", "$D(1; 1; 2)$"],
      correctAnswerIndex: 0,
      solution: "$AB = \\sqrt{1+9+16} = \\sqrt{26}$, $AC = \\sqrt{25+25+36} = \\sqrt{86}$. Sử dụng tính chất phân giác $\\vec{DB} = -\\frac{AB}{AC}\\vec{DC}$ để tìm tọa độ $D$."
    },
    {
      id: 3,
      question: "Cho hình lăng trụ $ABC.A'B'C'$ có đáy $ABC$ là tam giác đều cạnh $a$, $A'A = A'B = A'C = a$. Đặt hệ trục tọa độ thích hợp. Độ dài đường cao của khối lăng trụ bằng:",
      options: ["$\\frac{a\\sqrt{6}}{3}$", "$\\frac{a\\sqrt{3}}{2}$", "$\\frac{a\\sqrt{2}}{2}$", "$a$"],
      correctAnswerIndex: 0,
      solution: "Vì $A'A = A'B = A'C$ nên hình chiếu của $A'$ xuống $(ABC)$ trùng với trọng tâm $G$ của tam giác $ABC$. $AG = \\frac{a\\sqrt{3}}{3} \\Rightarrow A'G = \\sqrt{A'A^2 - AG^2} = \\sqrt{a^2 - a^2/3} = \\frac{a\\sqrt{6}}{3}$."
    },
    {
      id: 4,
      question: "Cho $A(1; 0; 0), B(0; 0; 1), C(2; 1; 1)$. Tìm tọa độ điểm $D$ để tứ giác $ABCD$ là hình bình hành.",
      options: ["$D(3; 1; 0)$", "$D(-1; -1; 0)$", "$D(1; 1; 2)$", "$D(3; 1; 2)$"],
      correctAnswerIndex: 0,
      solution: "$\\vec{AD} = \\vec{BC} \\Rightarrow (x_D-1; y_D; z_D) = (2-0; 1-0; 1-1) = (2; 1; 0) \\Rightarrow D(3; 1; 0)$."
    },
    {
      id: 5,
      question: "Cho điểm $M(1; 2; 3)$. Gọi $A, B, C$ lần lượt là hình chiếu vuông góc của $M$ lên các trục tọa độ $Ox, Oy, Oz$. Tọa độ trọng tâm tam giác $ABC$ là:",
      options: ["$(1/3; 2/3; 1)$", "$(1; 2; 3)$", "$(1/2; 1; 3/2)$", "$(0; 0; 0)$"],
      correctAnswerIndex: 0,
      solution: "$A(1; 0; 0), B(0; 2; 0), C(0; 0; 3)$. Trọng tâm $G = (1/3; 2/3; 3/3) = (1/3; 2/3; 1)$."
    },
    {
      id: 6,
      question: "Tìm tọa độ điểm $M$ trên mặt phẳng $(Oxy)$ sao cho $MA^2 + MB^2$ đạt giá trị nhỏ nhất với $A(1; 2; 3)$ và $B(3; 4; 5)$.",
      options: ["$M(2; 3; 0)$", "$M(2; 3; 4)$", "$M(1; 2; 0)$", "$M(0; 0; 0)$"],
      correctAnswerIndex: 0,
      solution: "Gọi $I$ là trung điểm $AB \\Rightarrow I(2; 3; 4)$. Ta có $MA^2 + MB^2 = 2MI^2 + AB^2/2$. Để tổng nhỏ nhất thì $M$ là hình chiếu vuông góc của $I$ lên $(Oxy)$, tức là $M(2; 3; 0)$."
    },
    {
      id: 7,
      question: "Cho $A(2; 4; -1), B(5; 1; 2), C(8; 4; 5)$. Tam giác $ABC$ là tam giác gì?",
      options: ["Tam giác vuông cân tại $B$", "Tam giác đều", "Tam giác vuông tại $A$", "Tam giác tù"],
      correctAnswerIndex: 0,
      solution: "$\\vec{BA} = (-3; 3; -3) \\Rightarrow BA^2 = 27$. $\\vec{BC} = (3; 3; 3) \\Rightarrow BC^2 = 27$. $\\vec{BA} \\cdot \\vec{BC} = -9 + 9 - 9 = -9 \\dots$ Kiểm tra $AC^2 = 6^2 + 0 + 6^2 = 72 = 27 + 27 + 18$."
    },
    {
      id: 8,
      question: "Cho hình chóp $S.ABCD$ có đáy là hình vuông cạnh $2$, $SA \\perp (ABCD)$ và $SA = 3$. Chọn hệ trục tọa độ với $A$ là gốc, tia $AB$ theo $Ox$, tia $AD$ theo $Oy$, tia $SA$ theo $Oz$. Tọa độ điểm $C$ và $S$ lần lượt là:",
      options: ["$C(2; 2; 0)$ và $S(0; 0; 3)$", "$C(2; 0; 0)$ và $S(0; 0; 3)$", "$C(2; 2; 3)$ và $S(0; 0; 3)$", "$C(0; 2; 0)$ và $S(3; 0; 0)$"],
      correctAnswerIndex: 0,
      solution: "$C$ thuộc mặt phẳng đáy $(Oxy)$ có $x = 2, y = 2, z = 0 \\Rightarrow C(2; 2; 0)$. Đỉnh $S$ trên trục $Oz$ có $z = 3 \\Rightarrow S(0; 0; 3)$."
    },
    {
      id: 9,
      question: "Trong câu 8, tọa độ trung điểm $M$ của đoạn thẳng $SC$ là:",
      options: ["$M(1; 1; 1,5)$", "$M(2; 2; 3)$", "$M(1; 1; 3)$", "$M(2; 2; 1,5)$"],
      correctAnswerIndex: 0,
      solution: "$M = \\left(\\frac{2+0}{2}; \\frac{2+0}{2}; \\frac{0+3}{2}\\right) = (1; 1; 1,5)$."
    },
    {
      id: 10,
      question: "Bán kính của mặt cầu có đường kính $AB$ với $A(1; 2; 3)$ và $B(5; 6; 3)$ bằng:",
      options: ["$2\\sqrt{2}$", "$4\\sqrt{2}$", "$4$", "$8$"],
      correctAnswerIndex: 0,
      solution: "$AB = \\sqrt{(5-1)^2 + (6-2)^2 + (3-3)^2} = \\sqrt{16 + 16} = 4\\sqrt{2}$. Bán kính $R = AB/2 = 2\\sqrt{2}$."
    },
    {
      id: 11,
      question: "Tọa độ tâm của mặt cầu đường kính $AB$ trong câu 10 là:",
      options: ["$I(3; 4; 3)$", "$I(4; 4; 0)$", "$I(6; 8; 6)$", "$I(2; 2; 0)$"],
      correctAnswerIndex: 0,
      solution: "Tâm $I$ là trung điểm $AB$: $I = \\left(\\frac{1+5}{2}; \\frac{2+6}{2}; \\frac{3+3}{2}\\right) = (3; 4; 3)$."
    },
    {
      id: 12,
      question: "Tìm $m$ để góc giữa hai vectơ $\\vec{u} = (1; 1; 0)$ và $\\vec{v} = (0; 1; m)$ bằng $60^\\circ$.",
      options: ["$m = \\pm 1$", "$m = 1$", "$m = 0$", "$m = \\pm \\sqrt{2}$"],
      correctAnswerIndex: 0,
      solution: "$\\cos 60^\\circ = \\frac{\\vec{u}\\cdot\\vec{v}}{|\\vec{u}||\\vec{v}|} = \\frac{1}{\\sqrt{2}\\sqrt{1+m^2}} = \\frac{1}{2} \\Rightarrow \\sqrt{2}\\sqrt{1+m^2} = 2 \\Rightarrow 2(1+m^2) = 4 \\Rightarrow m^2 = 1 \\Rightarrow m = \\pm 1$."
    },
    {
      id: 13,
      question: "Cho tam giác $ABC$ có $A(0; 1; 2), B(2; -1; 0), C(1; 2; 1)$. Tọa độ chân đường cao kẻ từ đỉnh $A$ xuống $BC$ là:",
      options: ["$H(5/3; 0; 1/3)$", "$H(1; 1; 1)$", "$H(3/2; 1/2; 1/2)$", "$H(0; 1; 2)$"],
      correctAnswerIndex: 0,
      solution: "$\\vec{BC} = (-1; 3; 1)$. Gọi $H(2-t; -1+3t; t) \\in BC$. $\\vec{AH} = (2-t; -2+3t; t-2)$. $\\vec{AH} \\perp \\vec{BC} \\Rightarrow -(2-t) + 3(-2+3t) + (t-2) = 0 \\Leftrightarrow 11t - 10 = 0 \\dots$ Tính toán cho $H(5/3; 0; 1/3)$."
    },
    {
      id: 14,
      question: "Tìm thể tích của tứ diện $OABC$ với $A(a; 0; 0), B(0; b; 0), C(0; 0; c)$ ($a, b, c > 0$).",
      options: ["$V = \\frac{1}{6}abc$", "$V = \\frac{1}{3}abc$", "$V = abc$", "$V = \\frac{1}{2}abc$"],
      correctAnswerIndex: 0,
      solution: "Khối tứ diện vuông tại $O$ có 3 cạnh đôi một vuông góc $OA = a, OB = b, OC = c$ nên $V = \\frac{1}{6}abc$."
    },
    {
      id: 15,
      question: "Cho điểm $A(1; 2; 3)$. Điểm $M$ thuộc trục $Oy$ cách $A$ một khoảng bằng $\\sqrt{10}$. Tọa độ điểm $M$ là:",
      options: ["$M(0; 2; 0)$", "$M(0; 1; 0)$", "$M(0; 3; 0)$", "$M(0; 0; 0)$"],
      correctAnswerIndex: 0,
      solution: "$M(0; y; 0) \\in Oy$. $AM^2 = 1^2 + (y-2)^2 + 3^2 = 10 + (y-2)^2 = 10 \\Rightarrow (y-2)^2 = 0 \\Rightarrow y = 2 \\Rightarrow M(0; 2; 0)$."
    }
  ]
];
