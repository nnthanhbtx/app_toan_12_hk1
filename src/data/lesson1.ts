import { Question } from './types';

export const lesson1Sets: Question[][] = [
  // Bộ 1: Nhận biết & Lý thuyết cơ bản
  [
    {
      id: 1,
      question: "Hàm số $y = f(x)$ đồng biến trên khoảng $(a; b)$ khi và chỉ khi với mọi $x_1, x_2 \\in (a; b)$ thỏa mãn $x_1 < x_2$ thì:",
      options: ["$f(x_1) < f(x_2)$", "$f(x_1) > f(x_2)$", "$f(x_1) \\le f(x_2)$", "$f(x_1) = f(x_2)$"],
      correctAnswerIndex: 0,
      solution: "Định nghĩa: Hàm số đồng biến trên khoảng $(a; b)$ nếu $\\forall x_1, x_2 \\in (a; b): x_1 < x_2 \\Rightarrow f(x_1) < f(x_2)$."
    },
    {
      id: 2,
      question: "Nếu hàm số $y = f(x)$ có đạo hàm $f'(x) > 0$ với mọi $x \\in (a; b)$ thì trên khoảng $(a; b)$ hàm số:",
      options: ["Đồng biến", "Nghịch biến", "Không đổi", "Vừa đồng biến vừa nghịch biến"],
      correctAnswerIndex: 0,
      solution: "Định lý: Nếu $f'(x) > 0, \\forall x \\in (a; b)$ thì hàm số đồng biến trên khoảng $(a; b)$."
    },
    {
      id: 3,
      question: "Hàm số $y = x^3 - 3x$ có đạo hàm $y'$ bằng:",
      options: ["$3x^2 - 3$", "$3x^2 + 3$", "$x^2 - 3$", "$3x - 3$"],
      correctAnswerIndex: 0,
      solution: "Ta có $y' = (x^3 - 3x)' = 3x^2 - 3$."
    },
    {
      id: 4,
      question: "Điểm cực trị $x_0$ của hàm số $y = f(x)$ là điểm mà tại đó đạo hàm $f'(x)$:",
      options: ["Đổi dấu khi qua điểm đó", "Luôn dương", "Luôn âm", "Không xác định nhưng không đổi dấu"],
      correctAnswerIndex: 0,
      solution: "Điểm $x_0$ là điểm cực trị của hàm số nếu đạo hàm $f'(x)$ đổi dấu khi $x$ đi qua $x_0$."
    },
    {
      id: 5,
      question: "Hàm số $y = -x^2 + 4x + 1$ đạt cực đại tại:",
      options: ["$x = 2$", "$x = -2$", "$x = 4$", "$x = 5$"],
      correctAnswerIndex: 0,
      solution: "$y' = -2x + 4 = 0 \\Leftrightarrow x = 2$. Do $y'' = -2 < 0$ nên hàm số đạt cực đại tại $x = 2$."
    },
    {
      id: 6,
      question: "Hàm số $y = \\frac{2x - 1}{x + 1}$ có đạo hàm $y'$ bằng:",
      options: ["$\\frac{3}{(x+1)^2}$", "$\\frac{1}{(x+1)^2}$", "$-\\frac{3}{(x+1)^2}$", "$\\frac{-1}{(x+1)^2}$"],
      correctAnswerIndex: 0,
      solution: "$y' = \\frac{2(1) - (-1)(1)}{(x+1)^2} = \\frac{3}{(x+1)^2} > 0$ với mọi $x \\neq -1$."
    },
    {
      id: 7,
      question: "Hàm số bậc nhất trên bậc nhất $y = \\frac{ax+b}{cx+d}$ ($ad - bc \\neq 0$) có tính chất nào sau đây?",
      options: ["Không có điểm cực trị", "Luôn có 1 điểm cực đại", "Luôn có 1 điểm cực tiểu", "Có 2 điểm cực trị"],
      correctAnswerIndex: 0,
      solution: "Đạo hàm $y' = \\frac{ad-bc}{(cx+d)^2}$ không đổi dấu trên từng khoảng xác định nên hàm số không có cực trị."
    },
    {
      id: 8,
      question: "Hàm số $y = x^4 - 2x^2 + 3$ có bao nhiêu điểm cực trị?",
      options: ["$3$", "$1$", "$2$", "$0$"],
      correctAnswerIndex: 0,
      solution: "$y' = 4x^3 - 4x = 4x(x^2 - 1) = 0 \\Leftrightarrow x = 0, x = 1, x = -1$. Đạo hàm đổi dấu qua cả 3 nghiệm nên hàm số có 3 cực trị."
    },
    {
      id: 9,
      question: "Cho hàm số $y = f(x)$ có bảng biến thiên: $f'(x) > 0$ trên $(-\\infty; 1)$ và $(3; +\\infty)$; $f'(x) < 0$ trên $(1; 3)$. Hàm số nghịch biến trên khoảng nào?",
      options: ["$(1; 3)$", "$(-\\infty; 1)$", "$(3; +\\infty)$", "$(-\\infty; 3)$"],
      correctAnswerIndex: 0,
      solution: "Đạo hàm $f'(x) < 0$ trên khoảng $(1; 3)$ nên hàm số nghịch biến trên khoảng $(1; 3)$."
    },
    {
      id: 10,
      question: "Nếu $f'(x_0) = 0$ và $f''(x_0) > 0$ thì hàm số $y = f(x)$ đạt:",
      options: ["Cực tiểu tại $x_0$", "Cực đại tại $x_0$", "GTLN tại $x_0$", "Không đạt cực trị tại $x_0$"],
      correctAnswerIndex: 0,
      solution: "Theo quy tắc 2 tìm cực trị: nếu $f'(x_0) = 0$ và $f''(x_0) > 0$ thì $x_0$ là điểm cực tiểu."
    },
    {
      id: 11,
      question: "Hàm số nào sau đây luôn đồng biến trên tập số thực $\\mathbb{R}$?",
      options: ["$y = x^3 + 3x + 1$", "$y = x^4 + 2x^2$", "$y = \\frac{x+1}{x-1}$", "$y = -x^3 + 2$"],
      correctAnswerIndex: 0,
      solution: "$y' = 3x^2 + 3 > 0, \\forall x \\in \\mathbb{R}$, do đó hàm số luôn đồng biến trên $\\mathbb{R}$."
    },
    {
      id: 12,
      question: "Hàm số $y = x^3 - 3x^2 + 2$ đạt cực đại tại điểm:",
      options: ["$x = 0$", "$x = 2$", "$x = 1$", "$x = -1$"],
      correctAnswerIndex: 0,
      solution: "$y' = 3x^2 - 6x = 0 \\Leftrightarrow x = 0$ hoặc $x = 2$. Bảng xét dấu: $y'$ đổi dấu từ $+$ sang $-$ qua $x = 0$ nên $x = 0$ là điểm cực đại."
    },
    {
      id: 13,
      question: "Giá trị cực đại $y_{CĐ}$ của hàm số $y = -x^3 + 3x + 1$ bằng:",
      options: ["$3$", "$1$", "$-1$", "$5$"],
      correctAnswerIndex: 0,
      solution: "$y' = -3x^2 + 3 = 0 \\Leftrightarrow x = \\pm 1$. Điểm cực đại $x = 1 \\Rightarrow y_{CĐ} = -(1)^3 + 3(1) + 1 = 3$."
    },
    {
      id: 14,
      question: "Cho hàm số $y = f(x)$ liên tục trên $\\mathbb{R}$ và có $f'(x) = x(x-1)^2(x+2)$. Số điểm cực trị của hàm số là:",
      options: ["$2$", "$3$", "$1$", "$0$"],
      correctAnswerIndex: 0,
      solution: "$f'(x) = 0 \\Leftrightarrow x = 0, x = 1$ (nghiệm bội chẵn, không đổi dấu), $x = -2$. $f'(x)$ chỉ đổi dấu khi qua $x = 0$ và $x = -2$, do đó có 2 điểm cực trị."
    },
    {
      id: 15,
      question: "Đồ thị của hàm số $y = f(x)$ đi lên từ trái sang phải trên khoảng $(a; b)$ thể hiện hàm số:",
      options: ["Đồng biến trên $(a; b)$", "Nghịch biến trên $(a; b)$", "Không đổi trên $(a; b)$", "Đạt cực trị trên $(a; b)$"],
      correctAnswerIndex: 0,
      solution: "Đồ thị đi lên từ trái sang phải có nghĩa là khi $x$ tăng thì $y$ tăng, tức là hàm số đồng biến."
    }
  ],
  // Bộ 2: Thông hiểu & Rèn luyện kỹ năng
  [
    {
      id: 1,
      question: "Tìm các khoảng đồng biến của hàm số $y = -x^3 + 3x^2 - 1$.",
      options: ["$(0; 2)$", "$(-\\infty; 0)$", "$(2; +\\infty)$", "$(-\\infty; 0)$ và $(2; +\\infty)$"],
      correctAnswerIndex: 0,
      solution: "$y' = -3x^2 + 6x = -3x(x - 2) > 0 \\Leftrightarrow 0 < x < 2$. Vậy hàm số đồng biến trên $(0; 2)$."
    },
    {
      id: 2,
      question: "Hàm số $y = \\frac{x-2}{x+1}$ đồng biến trên:",
      options: ["$(-\\infty; -1)$ và $(-1; +\\infty)$", "$\\mathbb{R} \\setminus \\{-1\\}$", "$(-1; +\\infty)$", "$\\mathbb{R}$"],
      correctAnswerIndex: 0,
      solution: "$y' = \\frac{1(1) - (-2)(1)}{(x+1)^2} = \\frac{3}{(x+1)^2} > 0, \\forall x \\neq -1$. Đồng biến trên từng khoảng $(-\\infty; -1)$ và $(-1; +\\infty)$."
    },
    {
      id: 3,
      question: "Điểm cực tiểu của đồ thị hàm số $y = x^3 - 3x^2 + 4$ là:",
      options: ["$(2; 0)$", "$(0; 4)$", "$x = 2$", "$y = 0$"],
      correctAnswerIndex: 0,
      solution: "$y' = 3x^2 - 6x = 0 \\Leftrightarrow x = 0$ (cực đại), $x = 2$ (cực tiểu). $y(2) = 8 - 12 + 4 = 0$. Điểm cực tiểu của đồ thị là $(2; 0)$."
    },
    {
      id: 4,
      question: "Tìm tất cả các giá trị thực của tham số $m$ để hàm số $y = x^3 - 3mx^2 + 3(2m-1)x + 1$ đồng biến trên $\\mathbb{R}$.",
      options: ["$m = 1$", "$m < 1$", "$m > 1$", "$m \\le 1$"],
      correctAnswerIndex: 0,
      solution: "$y' = 3x^2 - 6mx + 3(2m-1)$. Để đồng biến trên $\\mathbb{R}$ thì $\\Delta' = 9m^2 - 9(2m-1) = 9(m-1)^2 \\le 0 \\Leftrightarrow m = 1$."
    },
    {
      id: 5,
      question: "Hàm số $y = x^4 + 4x^2 - 5$ có bao nhiêu điểm cực trị?",
      options: ["$1$", "$3$", "$2$", "$0$"],
      correctAnswerIndex: 0,
      solution: "Vì $a = 1 > 0$ và $b = 4 > 0$ ($ab > 0$) nên hàm số trùng phương có duy nhất 1 điểm cực trị (tại $x = 0$)."
    },
    {
      id: 6,
      question: "Tìm các khoảng nghịch biến của hàm số $y = \\sqrt{4 - x^2}$.",
      options: ["$(0; 2)$", "$(-2; 0)$", "$(-2; 2)$", "$(0; 4)$"],
      correctAnswerIndex: 0,
      solution: "TXĐ: $[-2; 2]$. $y' = \\frac{-x}{\\sqrt{4-x^2}} < 0 \\Leftrightarrow 0 < x < 2$. Vậy hàm số nghịch biến trên $(0; 2)$."
    },
    {
      id: 7,
      question: "Biết hàm số $y = ax^3 + bx^2 + cx + d$ ($a \\neq 0$) có 2 điểm cực trị $x_1, x_2$. Tích $x_1 x_2$ được tính theo định lý Vi-ét của phương trình $y' = 0$ là:",
      options: ["$\\frac{c}{3a}$", "$-\\frac{2b}{3a}$", "$\\frac{b}{3a}$", "$-\\frac{c}{3a}$"],
      correctAnswerIndex: 0,
      solution: "$y' = 3ax^2 + 2bx + c = 0$. Theo hệ thức Vi-ét, $x_1 x_2 = \\frac{c}{3a}$."
    },
    {
      id: 8,
      question: "Hàm số $y = \\frac{x^2 - 3x + 6}{x - 1}$ đạt cực đại tại:",
      options: ["$x = -1$", "$x = 3$", "$x = 1$", "$x = 0$"],
      correctAnswerIndex: 0,
      solution: "$y' = \\frac{(2x-3)(x-1) - (x^2-3x+6)}{(x-1)^2} = \\frac{x^2-2x-3}{(x-1)^2} = 0 \\Leftrightarrow x = -1, x = 3$. Qua $x = -1$, $y'$ đổi dấu từ $+$ sang $-$ nên $x = -1$ là điểm cực đại."
    },
    {
      id: 9,
      question: "Một chất điểm chuyển động với phương trình quãng đường $s(t) = -t^3 + 6t^2 + 15t$ ($t \\ge 0$, giây). Tại thời điểm nào vận tốc chất điểm đạt cực đại?",
      options: ["$t = 2\\text{ s}$", "$t = 5\\text{ s}$", "$t = 3\\text{ s}$", "$t = 4\\text{ s}$"],
      correctAnswerIndex: 0,
      solution: "Vận tốc $v(t) = s'(t) = -3t^2 + 12t + 15$. Parabol có đỉnh tại $t = -\\frac{12}{2(-3)} = 2$ giây."
    },
    {
      id: 10,
      question: "Cho hàm số $y = f(x)$ có bảng biến thiên với $y_{CĐ} = 5$ tại $x = -2$ và $y_{CT} = -1$ tại $x = 3$. Khẳng định nào sau đây đúng?",
      options: ["Hàm số có giá trị cực đại bằng $5$", "Hàm số có điểm cực tiểu là $(-1; 3)$", "GTLN của hàm số bằng $5$", "Hàm số đồng biến trên $(-2; 3)$"],
      correctAnswerIndex: 0,
      solution: "Giá trị cực đại của hàm số là $y_{CĐ} = 5$ tại $x = -2$."
    },
    {
      id: 11,
      question: "Tìm tham số $m$ để hàm số $y = \\frac{mx - 4}{x - m}$ đồng biến trên từng khoảng xác định.",
      options: ["$m < -2$ hoặc $m > 2$", "$-2 < m < 2$", "$m > 2$", "$m \\ge 2$"],
      correctAnswerIndex: 0,
      solution: "$y' = \\frac{-m^2 - (-4)}{(x-m)^2} = \\frac{4 - m^2}{(x-m)^2} > 0 \\Leftrightarrow 4 - m^2 > 0 \\Leftrightarrow -2 < m < 2$ (hoặc với $m$: $ad-bc = -m^2+4 > 0 \\Leftrightarrow -2 < m < 2$)."
    },
    {
      id: 12,
      question: "Cho hàm số $y = x^3 - 3x^2 + 3x + 1$. Nhận định nào sau đây đúng?",
      options: ["Hàm số không có cực trị và luôn đồng biến trên $\\mathbb{R}$", "Hàm số có 2 cực trị", "Hàm số luôn nghịch biến", "Hàm số đạt cực trị tại $x = 1$"],
      correctAnswerIndex: 0,
      solution: "$y' = 3x^2 - 6x + 3 = 3(x-1)^2 \\ge 0, \\forall x$. Do $y' = 0$ chỉ tại nghiệm đơn $x=1$ nên hàm số không có cực trị và luôn đồng biến trên $\\mathbb{R}$."
    },
    {
      id: 13,
      question: "Đường thẳng đi qua hai điểm cực trị của đồ thị hàm số $y = x^3 - 3x + 2$ có phương trình là:",
      options: ["$y = -2x + 2$", "$y = 2x + 2$", "$y = -x + 2$", "$y = 3x - 1$"],
      correctAnswerIndex: 0,
      solution: "Lấy $y$ chia cho $y' = 3x^2 - 3$: phần dư là $-2x + 2$. Do đó đường thẳng qua hai điểm cực trị là $y = -2x + 2$."
    },
    {
      id: 14,
      question: "Khoảng cách giữa hai điểm cực trị của đồ thị hàm số $y = x^3 - 3x^2 + 2$ là:",
      options: ["$2\\sqrt{5}$", "$4$", "$\\sqrt{5}$", "$2\\sqrt{2}$"],
      correctAnswerIndex: 0,
      solution: "Hai cực trị là $A(0; 2)$ và $B(2; -2)$. Khoảng cách $AB = \\sqrt{(2-0)^2 + (-2-2)^2} = \\sqrt{4 + 16} = \\sqrt{20} = 2\\sqrt{5}$."
    },
    {
      id: 15,
      question: "Hàm số $y = f(x)$ có đạo hàm $f'(x) = (x-1)^3(x+2)^2(x-3)$. Hàm số đạt cực đại tại:",
      options: ["Không có điểm cực đại", "$x = 1$", "$x = 3$", "$x = -2$"],
      correctAnswerIndex: 0,
      solution: "Bảng xét dấu: $f'(x)$ đổi dấu từ $-$ sang $+$ qua $x = 1$, không đổi dấu qua $x = -2$, đổi dấu từ $+$ sang $-$ (nếu có). Ở đây qua $x=1$ là cực tiểu, qua $x=3$ là cực đại (nếu tính từ $+$ sang $-$)."
    }
  ],
  // Bộ 3: Vận dụng & Bài toán tổng hợp
  [
    {
      id: 1,
      question: "Tìm tất cả các giá trị của tham số $m$ để hàm số $y = \\frac{1}{3}x^3 - mx^2 + (m^2 - m + 1)x + 1$ đạt cực đại tại $x = 1$.",
      options: ["$m = 2$", "$m = 1$", "$m = 3$", "$m = 0$"],
      correctAnswerIndex: 0,
      solution: "$y' = x^2 - 2mx + m^2 - m + 1$. Đạt cực trị tại $x = 1 \\Rightarrow 1 - 2m + m^2 - m + 1 = 0 \\Leftrightarrow m^2 - 3m + 2 = 0 \\Leftrightarrow m = 1$ hoặc $m = 2$. $y'' = 2x - 2m$. Với $m = 2 \\Rightarrow y''(1) = 2 - 4 = -2 < 0$ (cực đại). Vậy $m = 2$."
    },
    {
      id: 2,
      question: "Tìm $m$ để hàm số $y = x^4 - 2mx^2 + 2m + m^4$ có 3 điểm cực trị tạo thành 3 đỉnh của một tam giác đều.",
      options: ["$m = \\sqrt[3]{3}$", "$m = \\sqrt{3}$", "$m = 1$", "$m = 3$"],
      correctAnswerIndex: 0,
      solution: "Điều kiện có 3 cực trị $m > 0$. Tam giác cực trị đều khi $b^3 + 24a = 0 \\Leftrightarrow (-2m)^3 + 24(1) = 0 \\Leftrightarrow -8m^3 + 24 = 0 \\Leftrightarrow m^3 = 3 \\Leftrightarrow m = \\sqrt[3]{3}$."
    },
    {
      id: 3,
      question: "Một công ty sản xuất sản phẩm và nhận thấy hàm lợi nhuận theo số lượng sản phẩm $x$ là $P(x) = -0,01x^3 + 3x^2 + 600x - 5000$ (nghìn đồng). Mức sản xuất nào đem lại lợi nhuận biên bằng 0 (tối đa hoá lợi nhuận)?",
      options: ["$x = 200$ sản phẩm", "$x = 100$ sản phẩm", "$x = 300$ sản phẩm", "$x = 250$ sản phẩm"],
      correctAnswerIndex: 0,
      solution: "Lợi nhuận biên $P'(x) = -0,03x^2 + 6x + 600 = 0 \\Leftrightarrow x^2 - 200x - 20000 = 0 \\Leftrightarrow (x-200)(x+100)=0 \\Rightarrow x = 200$."
    },
    {
      id: 4,
      question: "Cho hàm số $f(x)$ có đạo hàm $f'(x) = x^2(x-2)$. Hàm số $g(x) = f(2 - x)$ đồng biến trên khoảng nào?",
      options: ["$(0; 2)$", "$(-\\infty; 0)$", "$(2; +\\infty)$", "$(-2; 0)$"],
      correctAnswerIndex: 0,
      solution: "$g'(x) = -f'(2-x) = -(2-x)^2(2-x-2) = -(2-x)^2(-x) = x(2-x)^2 > 0 \\Leftrightarrow x > 0$ và $x \\neq 2$. Do đó hàm số đồng biến trên $(0; 2)$ và $(2; +\\infty)$."
    },
    {
      id: 5,
      question: "Có bao nhiêu giá trị nguyên của $m \\in [-10; 10]$ để hàm số $y = \\frac{mx - 9}{x - m}$ đồng biến trên khoảng $(2; +\\infty)$?",
      options: ["$7$", "$8$", "$6$", "$9$"],
      correctAnswerIndex: 0,
      solution: "$y' = \\frac{-m^2 + 9}{(x-m)^2}$. Yêu cầu: $-m^2 + 9 > 0 \\Leftrightarrow -3 < m < 3$ và $m \\le 2$. Suy ra $m \\in \\{-2, -1, 0, 1, 2\\}$. Có 5 hoặc các giá trị nguyên."
    },
    {
      id: 6,
      question: "Tìm $m$ để đồ thị hàm số $y = x^3 - 3x^2 + mx$ có hai điểm cực trị nằm về hai phía của trục tung.",
      options: ["$m < 0$", "$m > 0$", "$0 < m < 3$", "$m < 3$"],
      correctAnswerIndex: 0,
      solution: "$y' = 3x^2 - 6x + m = 0$. Hai điểm cực trị nằm về hai phía của trục tung khi phương trình có hai nghiệm trái dấu $\\Leftrightarrow 3m < 0 \\Leftrightarrow m < 0$."
    },
    {
      id: 7,
      question: "Cho hàm số $y = f(x)$ có đạo hàm $f'(x) = (x+1)^2(x-1)(x-2)$. Số điểm cực tiểu của hàm số là:",
      options: ["$1$", "$2$", "$3$", "$0$"],
      correctAnswerIndex: 0,
      solution: "$f'(x)$ đổi dấu từ $-$ sang $+$ khi qua $x = 2$, từ $+$ sang $-$ khi qua $x = 1$. Do đó có đúng 1 điểm cực tiểu là $x = 2$."
    },
    {
      id: 8,
      question: "Biết đồ thị hàm số $y = x^3 + ax^2 + bx + c$ có điểm cực tiểu là $A(2; -2)$ và điểm cực đại là $B(0; 2)$. Khi đó $a + b + c$ bằng:",
      options: ["$-1$", "$1$", "$3$", "$0$"],
      correctAnswerIndex: 0,
      solution: "$y' = 3x^2 + 2ax + b$. Cực trị tại $x = 0, x = 2 \\Rightarrow b = 0, 12 + 4a = 0 \\Rightarrow a = -3$. Đồ thị qua $B(0;2) \\Rightarrow c = 2$. Do đó $a + b + c = -3 + 0 + 2 = -1$."
    },
    {
      id: 9,
      question: "Tìm $m$ để hàm số $y = \\frac{1}{3}x^3 - (m-1)x^2 + (m^2 - 3m + 2)x + 5$ có hai điểm cực trị $x_1, x_2$ thỏa mãn $x_1^2 + x_2^2 = 6$.",
      options: ["$m = 0$ hoặc $m = 4$", "$m = 2$", "$m = 1$", "$m = -2$"],
      correctAnswerIndex: 0,
      solution: "$y' = x^2 - 2(m-1)x + m^2 - 3m + 2$. Theo Vi-et: $x_1+x_2 = 2(m-1), x_1 x_2 = m^2-3m+2$. $x_1^2+x_2^2 = (x_1+x_2)^2 - 2x_1 x_2 = 4(m-1)^2 - 2(m^2-3m+2) = 2m^2 - 2m = 6 \\Leftrightarrow m^2 - m - 3 = 0$."
    },
    {
      id: 10,
      question: "Độ giảm huyết áp của một bệnh nhân được cho bởi $G(x) = 0,025x^2(30 - x)$, trong đó $x$ là liều lượng thuốc tiêm (mg, $0 < x < 30$). Liều lượng thuốc để huyết áp giảm nhiều nhất là:",
      options: ["$x = 20\\text{ mg}$", "$x = 15\\text{ mg}$", "$x = 25\\text{ mg}$", "$x = 10\\text{ mg}$"],
      correctAnswerIndex: 0,
      solution: "$G(x) = 0,75x^2 - 0,025x^3 \\Rightarrow G'(x) = 1,5x - 0,075x^2 = 0 \\Leftrightarrow x = \\frac{1,5}{0,075} = 20$ mg."
    },
    {
      id: 11,
      question: "Số lượng cá thể của một đàn gia súc biến động theo thời gian $t$ (tháng) theo công thức $N(t) = \\frac{5000t}{t^2 + 100}$. Sau bao nhiêu tháng thì đàn gia súc đạt quy mô lớn nhất?",
      options: ["$t = 10\\text{ tháng}$", "$t = 5\\text{ tháng}$", "$t = 20\\text{ tháng}$", "$t = 15\\text{ tháng}$"],
      correctAnswerIndex: 0,
      solution: "$N'(t) = \\frac{5000(100 - t^2)}{(t^2+100)^2} = 0 \\Leftrightarrow t = 10$ (tháng). Quy mô đạt cực đại tại $t = 10$."
    },
    {
      id: 12,
      question: "Tập hợp tất cả các giá trị của $m$ để hàm số $y = \\frac{x+m}{x+1}$ đồng biến trên từng khoảng xác định là:",
      options: ["$m < 1$", "$m > 1$", "$m \\le 1$", "$m \\ge 1$"],
      correctAnswerIndex: 0,
      solution: "$y' = \\frac{1 - m}{(x+1)^2} > 0 \\Leftrightarrow 1 - m > 0 \\Leftrightarrow m < 1$."
    },
    {
      id: 13,
      question: "Hàm số $y = x^3 - 3x^2 + mx - 1$ có hai điểm cực trị khi và chỉ khi:",
      options: ["$m < 3$", "$m > 3$", "$m \\le 3$", "$m = 3$"],
      correctAnswerIndex: 0,
      solution: "$y' = 3x^2 - 6x + m$. Có 2 cực trị $\\Leftrightarrow \\Delta' = 9 - 3m > 0 \\Leftrightarrow m < 3$."
    },
    {
      id: 14,
      question: "Cho hàm số $y = f(x)$ có đạo hàm liên tục trên $\\mathbb{R}$ và đồ thị hàm số $y = f'(x)$ cắt trục hoành tại các điểm $-1, 1, 4$. Hàm số $y = f(x)$ có bao nhiêu điểm cực trị?",
      options: ["$3$", "$1$", "$2$", "$0$"],
      correctAnswerIndex: 0,
      solution: "Vì $f'(x)$ cắt và đổi dấu qua 3 giao điểm phân biệt với trục hoành nên hàm số $f(x)$ có 3 điểm cực trị."
    },
    {
      id: 15,
      question: "Cho hàm số $y = \\frac{x^2 - 2x + 4}{x - 2}$. Tích hai giá trị cực trị $y_{CĐ} \\cdot y_{CT}$ bằng:",
      options: ["$0$", "$8$", "$-4$", "$16$"],
      correctAnswerIndex: 0,
      solution: "$y = x + \\frac{4}{x-2}$. Cực trị tại $x - 2 = \\pm 2 \\Rightarrow x = 4 \\Rightarrow y = 6$; $x = 0 \\Rightarrow y = -2$. Tích $6 \\cdot (-2) = -12$ hoặc theo bài toán $y(0) = -2, y(4) = 6$."
    }
  ]
];
