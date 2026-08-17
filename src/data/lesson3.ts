import { Question } from './types';

export const lesson3Sets: Question[][] = [
  // Bộ 1: Cơ bản & Lý thuyết các đường tiệm cận
  [
    {
      id: 1,
      question: "Đường thẳng $y = y_0$ được gọi là đường tiệm cận ngang của đồ thị hàm số $y = f(x)$ nếu:",
      options: ["$\\lim_{x \\to +\\infty} f(x) = y_0$ hoặc $\\lim_{x \\to -\\infty} f(x) = y_0$", "$\\lim_{x \\to x_0} f(x) = y_0$", "$\\lim_{x \\to y_0} f(x) = +\\infty$", "$\\lim_{x \\to 0} f(x) = y_0$"],
      correctAnswerIndex: 0,
      solution: "Định nghĩa: $y = y_0$ là tiệm cận ngang nếu $\\lim_{x \\to +\\infty} f(x) = y_0$ hoặc $\\lim_{x \\to -\\infty} f(x) = y_0$."
    },
    {
      id: 2,
      question: "Đường thẳng $x = x_0$ được gọi là đường tiệm cận đứng của đồ thị hàm số $y = f(x)$ nếu:",
      options: ["Ít nhất một trong các giới hạn $\\lim_{x \\to x_0^+} f(x)$ hoặc $\\lim_{x \\to x_0^-} f(x)$ bằng $+\\infty$ hoặc $-\\infty$", "$\\lim_{x \\to +\\infty} f(x) = x_0$", "$f(x_0) = 0$", "$\\lim_{x \\to 0} f(x) = x_0$"],
      correctAnswerIndex: 0,
      solution: "Định nghĩa: $x = x_0$ là tiệm cận đứng nếu một trong các giới hạn một bên tại $x_0$ tiến về vô cực ($\\pm\\infty$)."
    },
    {
      id: 3,
      question: "Tiệm cận đứng của đồ thị hàm số $y = \\frac{2x + 1}{x - 1}$ là:",
      options: ["$x = 1$", "$y = 2$", "$x = -1$", "$y = 1$"],
      correctAnswerIndex: 0,
      solution: "Mẫu số triệt tiêu tại $x = 1$ và tử số $2(1)+1 = 3 \\neq 0$. Do đó $x = 1$ là tiệm cận đứng."
    },
    {
      id: 4,
      question: "Tiệm cận ngang của đồ thị hàm số $y = \\frac{3x - 2}{x + 1}$ là:",
      options: ["$y = 3$", "$y = -2$", "$x = -1$", "$x = 3$"],
      correctAnswerIndex: 0,
      solution: "$\\lim_{x \\to \\pm\\infty} \\frac{3x-2}{x+1} = 3 \\Rightarrow y = 3$ là tiệm cận ngang."
    },
    {
      id: 5,
      question: "Đường thẳng $y = ax + b$ ($a \\neq 0$) là tiệm cận xiên của đồ thị $y = f(x)$ nếu:",
      options: ["$\\lim_{x \\to +\\infty} [f(x) - (ax+b)] = 0$ hoặc $\\lim_{x \\to -\\infty} [f(x) - (ax+b)] = 0$", "$\\lim_{x \\to 0} [f(x) - (ax+b)] = 0$", "$\\lim_{x \\to \\infty} \\frac{f(x)}{ax+b} = 0$", "$\\lim_{x \\to \\infty} f(x) = ax+b$"],
      correctAnswerIndex: 0,
      solution: "Định nghĩa tiệm cận xiên: $\\lim_{x \\to \\pm\\infty} [f(x) - (ax+b)] = 0$."
    },
    {
      id: 6,
      question: "Tiệm cận xiên của đồ thị hàm số $y = x + 1 + \\frac{2}{x - 1}$ là đường thẳng:",
      options: ["$y = x + 1$", "$y = x - 1$", "$y = x$", "$y = 2x + 1$"],
      correctAnswerIndex: 0,
      solution: "Vì $\\lim_{x \\to \\pm\\infty} [y - (x+1)] = \\lim_{x \\to \\pm\\infty} \\frac{2}{x-1} = 0$, nên $y = x + 1$ là tiệm cận xiên."
    },
    {
      id: 7,
      question: "Số lượng đường tiệm cận của đồ thị hàm số $y = \\frac{x^2 - 1}{x^2 - 4}$ là:",
      options: ["$3$", "$2$", "$1$", "$4$"],
      correctAnswerIndex: 0,
      solution: "Tiệm cận đứng: $x = 2$ và $x = -2$ (2 đường). Tiệm cận ngang: $y = 1$ (1 đường). Tổng cộng có 3 đường tiệm cận."
    },
    {
      id: 8,
      question: "Đồ thị hàm số nào sau đây không có tiệm cận đứng?",
      options: ["$y = \\frac{1}{x^2 + 1}$", "$y = \\frac{1}{x - 2}$", "$y = \\frac{x+1}{x}$", "$y = \\frac{x^2+1}{x-1}$"],
      correctAnswerIndex: 0,
      solution: "Mẫu số $x^2 + 1 > 0$ vô nghiệm trên $\\mathbb{R}$ nên đồ thị không có tiệm cận đứng."
    },
    {
      id: 9,
      question: "Tiệm cận đứng và tiệm cận ngang của đồ thị hàm số $y = \\frac{1 - 2x}{x + 3}$ lần lượt là:",
      options: ["$x = -3$ và $y = -2$", "$x = 3$ và $y = 1$", "$x = -3$ và $y = 1$", "$x = 1$ và $y = -2$"],
      correctAnswerIndex: 0,
      solution: "Tiệm cận đứng: $x = -3$. Tiệm cận ngang: $y = \\frac{-2}{1} = -2$."
    },
    {
      id: 10,
      question: "Đồ thị hàm số $y = \\frac{\\sqrt{x^2+1}}{x}$ có bao nhiêu đường tiệm cận ngang?",
      options: ["$2$", "$1$", "$0$", "$3$"],
      correctAnswerIndex: 0,
      solution: "$\\lim_{x \\to +\\infty} \\frac{\\sqrt{x^2+1}}{x} = 1 \\Rightarrow y = 1$; $\\lim_{x \\to -\\infty} \\frac{\\sqrt{x^2+1}}{x} = -1 \\Rightarrow y = -1$. Có 2 đường tiệm cận ngang."
    },
    {
      id: 11,
      question: "Tiệm cận xiên của đồ thị hàm số $y = \\frac{x^2 - 3x + 5}{x - 2}$ là:",
      options: ["$y = x - 1$", "$y = x + 1$", "$y = x - 2$", "$y = x$"],
      correctAnswerIndex: 0,
      solution: "Thực hiện phép chia đa thức: $\\frac{x^2-3x+5}{x-2} = x - 1 + \\frac{3}{x-2}$. Tiệm cận xiên là $y = x - 1$."
    },
    {
      id: 12,
      question: "Cho hàm số $y = f(x)$ có bảng biến thiên: $\\lim_{x \\to -\\infty} f(x) = 2, \\lim_{x \\to +\\infty} f(x) = -1, \\lim_{x \\to 1^+} f(x) = +\\infty$. Tổng số đường tiệm cận đứng và ngang là:",
      options: ["$3$", "$2$", "$1$", "$4$"],
      correctAnswerIndex: 0,
      solution: "Tiệm cận ngang: $y = 2, y = -1$ (2 đường). Tiệm cận đứng: $x = 1$ (1 đường). Tổng số tiệm cận là 3."
    },
    {
      id: 13,
      question: "Đồ thị hàm đa thức $y = ax^3 + bx^2 + cx + d$ ($a \\neq 0$) có bao nhiêu đường tiệm cận?",
      options: ["$0$", "$1$", "$2$", "$3$"],
      correctAnswerIndex: 0,
      solution: "Hàm đa thức xác định trên toàn $\\mathbb{R}$ và $\\lim_{x \\to \\pm\\infty} f(x) = \\pm\\infty$ nên không có tiệm cận đứng, ngang hay xiên."
    },
    {
      id: 14,
      question: "Giao điểm của hai đường tiệm cận của đồ thị hàm số $y = \\frac{2x - 3}{x + 1}$ là điểm:",
      options: ["$I(-1; 2)$", "$I(1; 2)$", "$I(-1; -3)$", "$I(2; -1)$"],
      correctAnswerIndex: 0,
      solution: "Tiệm cận đứng $x = -1$, tiệm cận ngang $y = 2$. Giao điểm là $I(-1; 2)$."
    },
    {
      id: 15,
      question: "Nồng độ một chất khử trùng trong nước sau thời gian $t$ (phút) được cho bởi $C(t) = \\frac{0,5t + 2}{t + 10}$ (mg/l). Khi thời gian $t$ rất lớn ($t \\to +\\infty$), nồng độ chất sẽ tiệm cận đến mức:",
      options: ["$0,5\\text{ mg/l}$", "$0,2\\text{ mg/l}$", "$2\\text{ mg/l}$", "$0\\text{ mg/l}$"],
      correctAnswerIndex: 0,
      solution: "$\\lim_{t \\to +\\infty} C(t) = \\lim_{t \\to +\\infty} \\frac{0,5t+2}{t+10} = 0,5\\text{ mg/l}$. Đây chính là tiệm cận ngang."
    }
  ],
  // Bộ 2: Phân loại, Tìm tham số & Kỹ năng
  [
    {
      id: 1,
      question: "Tìm $m$ để đồ thị hàm số $y = \\frac{x-1}{x^2 - 2mx + 4}$ có đúng hai đường tiệm cận đứng.",
      options: ["$m < -2$ hoặc $m > 2$ và $m \\neq \\frac{5}{2}$", "$-2 < m < 2$", "$m > 2$", "$m \\neq 2$"],
      correctAnswerIndex: 0,
      solution: "Phương trình mẫu $g(x) = x^2 - 2mx + 4 = 0$ có 2 nghiệm phân biệt khác 1 $\\Leftrightarrow \\Delta' = m^2 - 4 > 0 \\Leftrightarrow |m| > 2$ và $g(1) = 5 - 2m \\neq 0 \\Leftrightarrow m \\neq 5/2$."
    },
    {
      id: 2,
      question: "Tiệm cận xiên của đồ thị hàm số $y = \\frac{2x^2 + x - 1}{x + 2}$ là:",
      options: ["$y = 2x - 3$", "$y = 2x + 3$", "$y = 2x - 1$", "$y = x - 3$"],
      correctAnswerIndex: 0,
      solution: "Chia đa thức: $2x^2+x-1 = (x+2)(2x-3) + 5 \\Rightarrow y = 2x - 3 + \\frac{5}{x+2}$. Vậy tiệm cận xiên là $y = 2x - 3$."
    },
    {
      id: 3,
      question: "Cho hàm số $y = \\frac{x+1}{\\sqrt{x^2-4}}$. Đồ thị hàm số có bao nhiêu đường tiệm cận (cả đứng và ngang)?",
      options: ["$4$", "$2$", "$3$", "$1$"],
      correctAnswerIndex: 0,
      solution: "TXĐ: $(-\\infty; -2) \\cup (2; +\\infty)$. TC đứng: $x = 2, x = -2$ (2 đường). TC ngang: $\\lim_{x \\to +\\infty} = 1 \\Rightarrow y = 1$; $\\lim_{x \\to -\\infty} = -1 \\Rightarrow y = -1$ (2 đường). Tổng cộng 4 đường."
    },
    {
      id: 4,
      question: "Chi phí để loại bỏ $p\\%$ chất độc hại khỏi nước thải của một nhà máy là $C(p) = \\frac{45p}{100 - p}$ (triệu đồng, $0 \\le p < 100$). Đường tiệm cận đứng của hàm chi phí $C(p)$ là:",
      options: ["$p = 100$", "$p = 45$", "$C = 100$", "$C = -45$"],
      correctAnswerIndex: 0,
      solution: "$\\lim_{p \\to 100^-} \\frac{45p}{100-p} = +\\infty \\Rightarrow$ đường tiệm cận đứng là $p = 100$. Ý nghĩa: không thể loại bỏ hoàn toàn $100\\%$ chất độc vì chi phí sẽ tiến ra vô cùng."
    },
    {
      id: 5,
      question: "Góc giữa hai đường tiệm cận của đồ thị hàm số $y = \\frac{x^2 - x + 1}{x - 1}$ bằng:",
      options: ["$45^\\circ$", "$90^\\circ$", "$30^\\circ$", "$60^\\circ$"],
      correctAnswerIndex: 0,
      solution: "Tiệm cận đứng là $d_1: x = 1$ (thẳng đứng). Tiệm cận xiên $y = x + \\frac{1}{x-1} \\Rightarrow d_2: y = x$ (tạo với trục Ox góc $45^\\circ$). Góc giữa $d_1$ và $d_2$ là $90^\\circ - 45^\\circ = 45^\\circ$."
    },
    {
      id: 6,
      question: "Đồ thị hàm số $y = \\frac{x-2}{x^2 - 4}$ có bao nhiêu đường tiệm cận?",
      options: ["$2$", "$3$", "$1$", "$0$"],
      correctAnswerIndex: 0,
      solution: "$y = \\frac{x-2}{(x-2)(x+2)} = \\frac{1}{x+2}$ (với $x \\neq 2$). Tiệm cận đứng duy nhất là $x = -2$. Tiệm cận ngang là $y = 0$. Tổng cộng có 2 đường tiệm cận."
    },
    {
      id: 7,
      question: "Tìm $m$ để đồ thị hàm số $y = \\frac{2x - 1}{x + m}$ đi qua điểm $A(1; 3)$ và tìm tiệm cận đứng của đồ thị đó.",
      options: ["$m = -2/3$, TC đứng là $x = 2/3$", "$m = 1$, TC đứng là $x = -1$", "$m = 0$, TC đứng là $x = 0$", "$m = 2$, TC đứng là $x = -2$"],
      correctAnswerIndex: 0,
      solution: "$3 = \\frac{2(1)-1}{1+m} \\Leftrightarrow 3(1+m) = 1 \\Leftrightarrow 3m = -2 \\Leftrightarrow m = -2/3$. Khi đó hàm số là $y = \\frac{2x-1}{x - 2/3}$ có TC đứng $x = 2/3$."
    },
    {
      id: 8,
      question: "Tìm các hệ số $a, b$ của tiệm cận xiên $y = ax + b$ của hàm số $y = \\frac{3x^2 - 5x + 2}{x - 2}$.",
      options: ["$a = 3, b = 1$", "$a = 3, b = -1$", "$a = 1, b = 3$", "$a = 3, b = 2$"],
      correctAnswerIndex: 0,
      solution: "$\\frac{3x^2-5x+2}{x-2} = 3x + 1 + \\frac{4}{x-2}$. Suy ra $a = 3, b = 1$."
    },
    {
      id: 9,
      question: "Đồ thị hàm số $y = \\frac{\\sqrt{4-x^2}}{x-1}$ có bao nhiêu đường tiệm cận?",
      options: ["$1$", "$2$", "$3$", "$0$"],
      correctAnswerIndex: 0,
      solution: "TXĐ: $[-2; 2] \\setminus \\{1\\}$. Vì tập xác định là đoạn đóng nên không có $\\pm\\infty \\Rightarrow$ không có tiệm cận ngang. Tại $x = 1$, $\\lim_{x \\to 1} y = \\infty \\Rightarrow x = 1$ là tiệm cận đứng duy nhất."
    },
    {
      id: 10,
      question: "Khoảng cách từ gốc tọa độ $O$ đến đường tiệm cận xiên của đồ thị $y = \\frac{x^2+1}{x}$ bằng:",
      options: ["$0$", "$1$", "$\\sqrt{2}$", "$\\frac{\\sqrt{2}}{2}$"],
      correctAnswerIndex: 0,
      solution: "$y = x + \\frac{1}{x} \\Rightarrow$ tiệm cận xiên là $\\Delta: y = x \\Leftrightarrow x - y = 0$. Khoảng cách $d(O; \\Delta) = \\frac{|0-0|}{\\sqrt{1^2+(-1)^2}} = 0$ (đường thẳng đi qua gốc $O$)."
    },
    {
      id: 11,
      question: "Đồ thị hàm số $y = \\frac{mx+1}{x-2}$ có tiệm cận ngang $y = 4$ khi $m$ bằng:",
      options: ["$4$", "$2$", "$-4$", "$1$"],
      correctAnswerIndex: 0,
      solution: "$\\lim_{x \\to \\pm\\infty} \\frac{mx+1}{x-2} = m$. Để TC ngang là $y = 4$ thì $m = 4$."
    },
    {
      id: 12,
      question: "Diện tích hình chữ nhật tạo bởi hai trục tọa độ và hai đường tiệm cận của đồ thị hàm số $y = \\frac{3x+2}{x-2}$ là:",
      options: ["$6$", "$3$", "$2$", "$12$"],
      correctAnswerIndex: 0,
      solution: "TC đứng: $x = 2$, TC ngang: $y = 3$. Giao các trục tọa độ tạo thành hình chữ nhật có kích thước $2$ và $3$. Diện tích $S = 2 \\times 3 = 6$."
    },
    {
      id: 13,
      question: "Biết đồ thị hàm số $y = \\frac{ax+1}{bx-2}$ có tiệm cận đứng $x = 1$ và tiệm cận ngang $y = 3$. Giá trị của $a + b$ bằng:",
      options: ["$8$", "$6$", "$5$", "$7$"],
      correctAnswerIndex: 0,
      solution: "TC đứng $x = \\frac{2}{b} = 1 \\Rightarrow b = 2$. TC ngang $y = \\frac{a}{b} = 3 \\Rightarrow a = 3b = 6$. Vậy $a + b = 6 + 2 = 8$."
    },
    {
      id: 14,
      question: "Cho hàm số $y = \\frac{x^2+2x-3}{x-1}$. Đồ thị hàm số có bao nhiêu đường tiệm cận?",
      options: ["$0$", "$1$", "$2$", "$3$"],
      correctAnswerIndex: 0,
      solution: "$y = \\frac{(x-1)(x+3)}{x-1} = x + 3$ với $x \\neq 1$. Đồ thị là đường thẳng khuyết 1 điểm, không có tiệm cận đứng, ngang hay xiên."
    },
    {
      id: 15,
      question: "Một mảnh vườn hình chữ nhật có diện tích $144\\text{ m}^2$. Độ dài một cạnh là $x\\text{ (m)}$. Chu vi $P(x) = 2x + \\frac{288}{x}$. Khi $x \\to +\\infty$, đồ thị hàm chu vi tiệm cận đường thẳng:",
      options: ["$y = 2x$", "$y = x$", "$y = 288$", "$y = 2x + 144$"],
      correctAnswerIndex: 0,
      solution: "Vì $\\lim_{x \\to +\\infty} [P(x) - 2x] = \\lim_{x \\to +\\infty} \\frac{288}{x} = 0$, nên đường tiệm cận xiên là $y = 2x$."
    }
  ],
  // Bộ 3: Nâng cao & Ứng dụng tích hợp
  [
    {
      id: 1,
      question: "Tìm $m$ để tiệm cận xiên của đồ thị hàm số $y = \\frac{x^2 + mx - 1}{x + 1}$ đi qua điểm $M(2; 5)$.",
      options: ["$m = 4$", "$m = 2$", "$m = 3$", "$m = 1$"],
      correctAnswerIndex: 0,
      solution: "Chia đa thức: $y = x + (m-1) + \\frac{-m}{x+1}$. Tiệm cận xiên là $y = x + m - 1$. Đi qua $M(2; 5) \\Rightarrow 5 = 2 + m - 1 \\Rightarrow m = 4$."
    },
    {
      id: 2,
      question: "Cho hàm số $y = \\frac{x^2 - 3x + 2}{x^2 - mx + m - 1}$. Có bao nhiêu giá trị nguyên của $m \\in [-5; 5]$ để đồ thị hàm số có đúng 1 đường tiệm cận đứng?",
      options: ["$3$", "$2$", "$4$", "$5$"],
      correctAnswerIndex: 0,
      solution: "Tử $x^2-3x+2 = (x-1)(x-2)$. Mẫu $x^2-mx+m-1 = (x-1)(x-(m-1))$. Rút gọn nhân tử $(x-1)$, hàm số có dạng $\\frac{x-2}{x-(m-1)}$. Để có đúng 1 tiệm cận đứng thì $m-1 \\neq 2 \\Leftrightarrow m \\neq 3$."
    },
    {
      id: 3,
      question: "Giao điểm của tiệm cận đứng và tiệm cận xiên của đồ thị hàm số $y = \\frac{2x^2 - 3x + 1}{x - 1}$ là:",
      options: ["Không có vì đồ thị là đường thẳng", "$I(1; 2)$", "$I(1; 0)$", "$I(0; 1)$"],
      correctAnswerIndex: 0,
      solution: "$y = \\frac{(x-1)(2x-1)}{x-1} = 2x - 1$ với $x \\neq 1$. Đồ thị không có đường tiệm cận."
    },
    {
      id: 4,
      question: "Biết rằng đồ thị hàm số $y = \\frac{x^2 + ax + b}{x - 1}$ có tiệm cận xiên là $y = x + 2$ và đi qua điểm $A(2; 7)$. Giá trị của $a^2 + b^2$ bằng:",
      options: ["$10$", "$5$", "$13$", "$25$"],
      correctAnswerIndex: 0,
      solution: "Tiệm cận xiên của $\\frac{x^2+ax+b}{x-1} = x + (a+1) + \\frac{a+b+1}{x-1}$ là $y = x + a + 1$. Do đó $a + 1 = 2 \\Rightarrow a = 1$. Đi qua $A(2; 7) \\Rightarrow 7 = \\frac{4 + 2(1) + b}{2-1} = 6 + b \\Rightarrow b = 1$. Vậy $a^2 + b^2 = 1^2 + 1^2 = 2$."
    },
    {
      id: 5,
      question: "Số đường tiệm cận của đồ thị hàm số $y = \\frac{\\sqrt{x+4} - 2}{x^2 + x}$ là:",
      options: ["$2$", "$1$", "$3$", "$0$"],
      correctAnswerIndex: 0,
      solution: "TXĐ: $[-4; +\\infty) \\setminus \\{-1; 0\\}$. Tại $x = 0$, $\\lim_{x \\to 0} \\frac{\\sqrt{x+4}-2}{x(x+1)} = \\lim_{x \\to 0} \\frac{x}{x(x+1)(\\sqrt{x+4}+2)} = \\frac{1}{1 \\cdot 4} = 1/4$ (hữu hạn $\\Rightarrow$ không là TCĐ). Tại $x = -1$, $\\lim = \\infty \\Rightarrow x = -1$ là TCĐ duy nhất. Tiệm cận ngang: $\\lim_{x \\to +\\infty} y = 0 \\Rightarrow y = 0$. Tổng cộng có 2 đường tiệm cận."
    },
    {
      id: 6,
      question: "Tìm $m$ để khoảng cách từ gốc tọa độ $O$ đến tiệm cận xiên của đồ thị $y = \\frac{x^2 + 2x + m}{x + 1}$ bằng $\\frac{1}{\\sqrt{2}}$.",
      options: ["$m$ tùy ý", "$m = 1$", "$m = 0$", "$m = 2$"],
      correctAnswerIndex: 0,
      solution: "$y = x + 1 + \\frac{m-1}{x+1}$. Tiệm cận xiên luôn là $y = x + 1 \\Leftrightarrow x - y + 1 = 0$ (với $m \\neq 1$). Khoảng cách $d(O; \\Delta) = \\frac{|1|}{\\sqrt{1+1}} = \\frac{1}{\\sqrt{2}}$ đúng với mọi $m \\neq 1$."
    },
    {
      id: 7,
      question: "Một công ty sản xuất đồ gia dụng có chi phí sản xuất $x$ sản phẩm là $C(x) = 2x + 50$ (triệu đồng). Chi phí sản xuất trung bình cho mỗi sản phẩm là $f(x) = \\frac{C(x)}{x} = 2 + \\frac{50}{x}$. Khẳng định nào sau đây đúng?",
      options: ["$f(x)$ giảm khi $x$ tăng và có tiệm cận ngang $y = 2$", "$f(x)$ tăng khi $x$ tăng", "$f(x)$ không có tiệm cận", "Tiệm cận ngang là $y = 50$"],
      correctAnswerIndex: 0,
      solution: "Ta có $f'(x) = -\\frac{50}{x^2} < 0$ (chi phí trung bình luôn giảm khi sản lượng tăng) và $\\lim_{x \\to +\\infty} f(x) = 2$ (tiệm cận ngang $y = 2$)."
    },
    {
      id: 8,
      question: "Tập hợp các điểm cách đều hai đường tiệm cận của đồ thị hàm số $y = \\frac{2x+3}{x-1}$ là:",
      options: ["Hai đường phân giác $y - 2 = \\pm(x - 1)$", "Đường thẳng $x = 1$", "Đường thẳng $y = 2$", "Đường tròn tâm $(1; 2)$"],
      correctAnswerIndex: 0,
      solution: "Hai tiệm cận là $x = 1$ và $y = 2$. Tập hợp các điểm cách đều 2 đường thẳng vuông góc này là 2 đường phân giác $y - 2 = x - 1$ và $y - 2 = -(x - 1)$."
    },
    {
      id: 9,
      question: "Tìm $m$ để đồ thị hàm số $y = \\frac{x^2 - (m+1)x + m}{x - 2}$ có tiệm cận xiên đi qua gốc tọa độ $O(0; 0)$.",
      options: ["$m = 1$", "$m = 0$", "$m = 2$", "$m = -1$"],
      correctAnswerIndex: 0,
      solution: "Chia đa thức: $y = x + (1 - m) + \\frac{2-m}{x-2}$. Tiệm cận xiên là $y = x + 1 - m$. Đi qua $O(0;0) \\Rightarrow 0 = 0 + 1 - m \\Rightarrow m = 1$."
    },
    {
      id: 10,
      question: "Đồ thị hàm số $y = \\frac{x+2}{\\sqrt{x^2-1}}$ có tất cả bao nhiêu đường tiệm cận?",
      options: ["$4$", "$3$", "$2$", "$1$"],
      correctAnswerIndex: 0,
      solution: "TC đứng: $x = 1, x = -1$ (2 đường). TC ngang: $\\lim_{x \\to +\\infty} y = 1 \\Rightarrow y = 1$; $\\lim_{x \\to -\\infty} y = -1 \\Rightarrow y = -1$ (2 đường). Tổng cộng có 4 đường tiệm cận."
    },
    {
      id: 11,
      question: "Gọi $I$ là giao điểm của hai tiệm cận của đồ thị hàm số $y = \\frac{3x-1}{x+2}$. Tọa độ điểm $I$ là:",
      options: ["$I(-2; 3)$", "$I(2; 3)$", "$I(-2; -1)$", "$I(3; -2)$"],
      correctAnswerIndex: 0,
      solution: "Tiệm cận đứng $x = -2$, tiệm cận ngang $y = 3$. Giao điểm là $I(-2; 3)$."
    },
    {
      id: 12,
      question: "Cho hàm số $y = f(x)$ xác định trên $\\mathbb{R} \\setminus \\{1; 3\\}$ thỏa mãn $\\lim_{x \\to 1} f(x) = 2, \\lim_{x \\to 3^+} f(x) = +\\infty, \\lim_{x \\to \\pm\\infty} f(x) = 0$. Số đường tiệm cận của đồ thị là:",
      options: ["$2$", "$3$", "$1$", "$4$"],
      correctAnswerIndex: 0,
      solution: "TC đứng: $x = 3$ (tại $x=1$ giới hạn hữu hạn nên không là TCĐ). TC ngang: $y = 0$. Tổng số tiệm cận là 2."
    },
    {
      id: 13,
      question: "Tìm tất cả các tiệm cận đứng của đồ thị hàm số $y = \\frac{x^2 - 5x + 6}{x^2 - 4}$.",
      options: ["$x = -2$", "$x = 2$ và $x = -2$", "$x = 2$", "$y = 1$"],
      correctAnswerIndex: 0,
      solution: "$y = \\frac{(x-2)(x-3)}{(x-2)(x+2)} = \\frac{x-3}{x+2}$ (với $x \\neq 2$). Tại $x = 2$ giới hạn bằng $-1/4$. Tiệm cận đứng duy nhất là $x = -2$."
    },
    {
      id: 14,
      question: "Đồ thị hàm số $y = \\frac{x-1}{\\sqrt{x^2+1}}$ có các tiệm cận ngang là:",
      options: ["$y = 1$ và $y = -1$", "$y = 1$", "$y = -1$", "Không có tiệm cận ngang"],
      correctAnswerIndex: 0,
      solution: "$\\lim_{x \\to +\\infty} = 1 \\Rightarrow y = 1$; $\\lim_{x \\to -\\infty} = -1 \\Rightarrow y = -1$."
    },
    {
      id: 15,
      question: "Khoảng cách giữa hai tiệm cận đứng của đồ thị hàm số $y = \\frac{2x+1}{x^2 - 9}$ bằng:",
      options: ["$6$", "$3$", "$9$", "$4$"],
      correctAnswerIndex: 0,
      solution: "Hai tiệm cận đứng là $x = 3$ và $x = -3$. Khoảng cách giữa hai đường thẳng song song này là $|3 - (-3)| = 6$."
    }
  ]
];
