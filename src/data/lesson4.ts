import { Question } from './types';

export const lesson4Sets: Question[][] = [
  // Bộ 1: Cơ bản & Nhận dạng đồ thị
  [
    {
      id: 1,
      question: "Đồ thị của hàm số bậc ba $y = ax^3 + bx^2 + cx + d$ ($a \\neq 0$) luôn nhận điểm nào làm tâm đối xứng?",
      options: ["Điểm uốn $I\\left(-\\frac{b}{3a}; y\\left(-\\frac{b}{3a}\\right)\\right)$ (nghiệm của $y'' = 0$)", "Gốc tọa độ $O(0; 0)$", "Điểm cực đại", "Điểm cực tiểu"],
      correctAnswerIndex: 0,
      solution: "Đồ thị hàm bậc ba luôn nhận điểm uốn có hoành độ $x_0 = -\\frac{b}{3a}$ (nghiệm của $y'' = 0$) làm tâm đối xứng."
    },
    {
      id: 2,
      question: "Đồ thị của hàm số phân thức bậc nhất $y = \\frac{ax+b}{cx+d}$ ($c \\neq 0, ad-bc \\neq 0$) nhận điểm nào làm tâm đối xứng?",
      options: ["Giao điểm của hai đường tiệm cận $I\\left(-\\frac{d}{c}; \\frac{a}{c}\\right)$", "Gốc tọa độ $O(0;0)$", "Điểm $(0; b/d)$", "Điểm $(-b/a; 0)$"],
      correctAnswerIndex: 0,
      solution: "Đồ thị hàm số phân thức $y = \\frac{ax+b}{cx+d}$ nhận giao điểm của tiệm cận đứng $x = -d/c$ và tiệm cận ngang $y = a/c$ làm tâm đối xứng."
    },
    {
      id: 3,
      question: "Đồ thị của hàm số phân thức $y = \\frac{ax^2+bx+c}{px+q}$ nhận điểm nào làm tâm đối xứng?",
      options: ["Giao điểm của tiệm cận đứng và tiệm cận xiên", "Điểm cực đại", "Điểm cực tiểu", "Gốc tọa độ $O$"],
      correctAnswerIndex: 0,
      solution: "Đồ thị hàm phân thức bậc 2 trên bậc 1 luôn nhận giao điểm của tiệm cận đứng và tiệm cận xiên làm tâm đối xứng."
    },
    {
      id: 4,
      question: "Đồ thị hàm số $y = -x^3 + 3x^2 - 4$ cắt trục tung tại điểm có tọa độ là:",
      options: ["$(0; -4)$", "$(-4; 0)$", "$(0; 0)$", "$(0; 2)$"],
      correctAnswerIndex: 0,
      solution: "Cho $x = 0 \\Rightarrow y = -4$. Điểm giao với trục tung là $(0; -4)$."
    },
    {
      id: 5,
      question: "Đồ thị hàm số $y = \\frac{x+1}{x-2}$ có hai trục đối xứng là:",
      options: ["Hai đường phân giác của các góc tạo bởi hai đường tiệm cận", "Hai trục tọa độ $Ox, Oy$", "Hai đường tiệm cận", "Đường thẳng $y = x$ và $y = -x$"],
      correctAnswerIndex: 0,
      solution: "Đồ thị hàm phân thức nhận hai đường phân giác của các góc tạo bởi hai đường tiệm cận làm hai trục đối xứng."
    },
    {
      id: 6,
      question: "Tọa độ tâm đối xứng của đồ thị hàm số $y = x^3 - 3x^2 + 1$ là:",
      options: ["$I(1; -1)$", "$I(1; 1)$", "$I(0; 1)$", "$I(2; -3)$"],
      correctAnswerIndex: 0,
      solution: "$y' = 3x^2 - 6x, y'' = 6x - 6 = 0 \\Leftrightarrow x = 1$. $y(1) = 1 - 3 + 1 = -1$. Tâm đối xứng là $I(1; -1)$."
    },
    {
      id: 7,
      question: "Số giao điểm của đồ thị hàm số $y = x^3 - 3x$ với trục hoành là:",
      options: ["$3$", "$1$", "$2$", "$0$"],
      correctAnswerIndex: 0,
      solution: "Phương trình hoành độ giao điểm: $x(x^2 - 3) = 0 \\Leftrightarrow x = 0, x = \\pm \\sqrt{3}$. Có 3 giao điểm."
    },
    {
      id: 8,
      question: "Đồ thị hàm số $y = \\frac{2x - 1}{x + 1}$ cắt trục hoành tại điểm có hoành độ là:",
      options: ["$x = 1/2$", "$x = -1$", "$x = 2$", "$x = 0$"],
      correctAnswerIndex: 0,
      solution: "Cho $y = 0 \\Leftrightarrow 2x - 1 = 0 \\Leftrightarrow x = 1/2$."
    },
    {
      id: 9,
      question: "Bảng biến thiên có hai mũi tên đi xuống ở hai nhánh xác định bởi đường ngắt đôi $x = 2$ thể hiện đồ thị của hàm số nào?",
      options: ["$y = \\frac{2x+1}{x-2}$ với $ad-bc < 0$", "Hàm bậc 3", "Hàm bậc 4 trùng phương", "Hàm đa thức bậc nhất"],
      correctAnswerIndex: 0,
      solution: "Đó là bảng biến thiên của hàm phân thức bậc 1/1 nghịch biến trên từng khoảng xác định."
    },
    {
      id: 10,
      question: "Đồ thị hàm số $y = ax^3 + bx^2 + cx + d$ có nhánh cuối cùng (khi $x \\to +\\infty$) đi lên trên chứng tỏ:",
      options: ["Hệ số $a > 0$", "Hệ số $a < 0$", "Hệ số $d > 0$", "Hệ số $c > 0$"],
      correctAnswerIndex: 0,
      solution: "Vì $\\lim_{x \\to +\\infty} (ax^3+bx^2+cx+d) = (\\operatorname{sgn} a)\\infty$, nhánh cuối đi lên nghĩa là $\\lim = +\\infty \\Leftrightarrow a > 0$."
    },
    {
      id: 11,
      question: "Đồ thị hàm số $y = \\frac{x^2 - x - 1}{x - 2}$ có tâm đối xứng là điểm:",
      options: ["$I(2; 3)$", "$I(2; 1)$", "$I(-2; 3)$", "$I(1; 2)$"],
      correctAnswerIndex: 0,
      solution: "Tiệm cận đứng $x = 2$. Tiệm cận xiên: $y = x + 1 + \\frac{1}{x-2} \\Rightarrow y = x + 1$. Thay $x = 2$ vào TC xiên ta được $y = 3$. Tâm đối xứng là $I(2; 3)$."
    },
    {
      id: 12,
      question: "Số tiếp tuyến của đồ thị hàm số $y = x^3 - 3x^2 + 2$ song song với đường thẳng $y = 9x + 1$ là:",
      options: ["$2$", "$1$", "$0$", "$3$"],
      correctAnswerIndex: 0,
      solution: "$y' = 3x^2 - 6x = 9 \\Leftrightarrow 3x^2 - 6x - 9 = 0 \\Leftrightarrow x = -1$ hoặc $x = 3$. Cả hai điểm đều cho tiếp tuyến song song với đường thẳng cho trước, vậy có 2 tiếp tuyến."
    },
    {
      id: 13,
      question: "Đồ thị hàm số $y = x^4 - 2x^2$ có trục đối xứng là:",
      options: ["Trục tung $Oy$ ($x = 0$)", "Trục hoành $Ox$", "Đường thẳng $x = 1$", "Gốc tọa độ $O$"],
      correctAnswerIndex: 0,
      solution: "Vì hàm số $y = f(x) = x^4 - 2x^2$ là hàm số chẵn ($f(-x) = f(x)$) nên đồ thị nhận trục tung $Oy$ làm trục đối xứng."
    },
    {
      id: 14,
      question: "Cho hàm số $y = \\frac{ax+b}{cx+d}$ có đồ thị cắt trục tung tại điểm $(0; -2)$ và cắt trục hoành tại $(1; 0)$. Khi đó tỉ số $b/d$ và $-b/a$ lần lượt là:",
      options: ["$-2$ và $1$", "$2$ và $-1$", "$-2$ và $-1$", "$1$ và $-2$"],
      correctAnswerIndex: 0,
      solution: "Cắt $Oy$ tại $x=0 \\Rightarrow y = b/d = -2$. Cắt $Ox$ tại $y=0 \\Rightarrow x = -b/a = 1$."
    },
    {
      id: 15,
      question: "Hàm số nào sau đây có đồ thị dạng chữ 'W'?",
      options: ["$y = x^4 - 4x^2 + 1$", "$y = -x^4 + 4x^2 + 1$", "$y = x^3 - 3x$", "$y = -x^3 + 3x$"],
      correctAnswerIndex: 0,
      solution: "Hàm trùng phương $y = ax^4+bx^2+c$ có $a > 0$ và $ab < 0$ (3 cực trị với 2 cực tiểu và 1 cực đại) có dạng chữ 'W'."
    }
  ],
  // Bộ 2: Đọc bảng biến thiên, Đồ thị & Tham số
  [
    {
      id: 1,
      question: "Cho hàm số $y = ax^3 + bx^2 + cx + d$ có đồ thị đạt cực đại tại $(-1; 2)$ và cực tiểu tại $(1; -2)$. Dấu của các hệ số $a, d$ là:",
      options: ["$a > 0, d = 0$", "$a < 0, d = 0$", "$a > 0, d > 0$", "$a < 0, d > 0$"],
      correctAnswerIndex: 0,
      solution: "Nhánh cuối đi lên từ cực tiểu $(1;-2) \\Rightarrow a > 0$. Tâm đối xứng là trung điểm hai cực trị: $I(0; 0) \\Rightarrow d = 0$."
    },
    {
      id: 2,
      question: "Biết đồ thị hàm số $y = \\frac{2x+b}{cx+1}$ nhận $x = 1$ làm tiệm cận đứng và đi qua điểm $A(2; 3)$. Khi đó $b + c$ bằng:",
      options: ["$-3$", "$3$", "$1$", "$-1$"],
      correctAnswerIndex: 0,
      solution: "TC đứng $x = -1/c = 1 \\Rightarrow c = -1$. Đi qua $A(2; 3) \\Rightarrow 3 = \\frac{4+b}{-2+1} = \\frac{4+b}{-1} \\Rightarrow 4 + b = -3 \\Rightarrow b = -7$. Vậy $b + c = -7 + (-1) = -8$."
    },
    {
      id: 3,
      question: "Số giao điểm của đồ thị hàm số $y = x^3 - 3x^2 + 2$ và đường thẳng $y = 2$ là:",
      options: ["$2$", "$3$", "$1$", "$0$"],
      correctAnswerIndex: 0,
      solution: "$x^3 - 3x^2 + 2 = 2 \\Leftrightarrow x^2(x - 3) = 0 \\Leftrightarrow x = 0$ (nghiệm kép) hoặc $x = 3$. Vậy có 2 giao điểm."
    },
    {
      id: 4,
      question: "Cho hàm số $y = \\frac{x^2+x+1}{x+1}$. Tọa độ tâm đối xứng của đồ thị là:",
      options: ["$I(-1; -1)$", "$I(-1; 1)$", "$I(1; 1)$", "$I(0; 1)$"],
      correctAnswerIndex: 0,
      solution: "TC đứng $x = -1$. $y = x + \\frac{1}{x+1} \\Rightarrow$ TC xiên $y = x$. Thay $x = -1$ vào TC xiên ta được $y = -1$. Tâm đối xứng là $I(-1; -1)$."
    },
    {
      id: 5,
      question: "Tìm tất cả các giá trị của $m$ để đồ thị hàm số $y = x^3 - 3x + 1$ cắt đường thẳng $y = m$ tại 3 điểm phân biệt.",
      options: ["$-1 < m < 3$", "$m > 3$", "$m < -1$", "$-1 \\le m \\le 3$"],
      correctAnswerIndex: 0,
      solution: "Giá trị cực trị của hàm số: $y_{CĐ} = y(-1) = 3$, $y_{CT} = y(1) = -1$. Cắt tại 3 điểm phân biệt khi $y_{CT} < m < y_{CĐ} \\Leftrightarrow -1 < m < 3$."
    },
    {
      id: 6,
      question: "Phương trình tiếp tuyến của đồ thị hàm số $y = \\frac{x+2}{x-1}$ tại điểm có hoành độ $x_0 = 2$ là:",
      options: ["$y = -3x + 10$", "$y = -3x + 4$", "$y = 3x - 2$", "$y = -x + 6$"],
      correctAnswerIndex: 0,
      solution: "$y(2) = 4$. $y' = \\frac{-3}{(x-1)^2} \\Rightarrow y'(2) = -3$. Phương trình tiếp tuyến: $y - 4 = -3(x - 2) \\Leftrightarrow y = -3x + 10$."
    },
    {
      id: 7,
      question: "Cho hàm số $y = ax^3 + bx^2 + cx + d$ có đồ thị đi qua gốc tọa độ $O$ và có điểm cực trị $(1; -2)$. Khi đó:",
      options: ["$d = 0$", "$d = 1$", "$c = 0$", "$a = 1$"],
      correctAnswerIndex: 0,
      solution: "Đồ thị đi qua gốc tọa độ $O(0; 0) \\Rightarrow d = y(0) = 0$."
    },
    {
      id: 8,
      question: "Đồ thị hàm số $y = \\frac{2x-1}{x+2}$ có tâm đối xứng là $I$. Tọa độ điểm $I$ là:",
      options: ["$I(-2; 2)$", "$I(2; -2)$", "$I(-2; -1/2)$", "$I(1/2; 2)$"],
      correctAnswerIndex: 0,
      solution: "TC đứng $x = -2$, TC ngang $y = 2$. Tâm đối xứng là giao điểm $I(-2; 2)$."
    },
    {
      id: 9,
      question: "Một công ty sản xuất sản phẩm nhận thấy chi phí bình quân cho một đơn vị sản phẩm là $f(x) = 2 + \\frac{45}{x}$ (triệu đồng, $x > 0$). Khi quy mô sản xuất $x$ tăng rất lớn, chi phí bình quân tiến gần tới:",
      options: ["$2\\text{ triệu đồng}$", "$45\\text{ triệu đồng}$", "$0\\text{ triệu đồng}$", "$22,5\\text{ triệu đồng}$"],
      correctAnswerIndex: 0,
      solution: "$\\lim_{x \\to +\\infty} \\left(2 + \\frac{45}{x}\\right) = 2$. Đường tiệm cận ngang $y = 2$ cho biết mức chi phí giới hạn không thể giảm thêm."
    },
    {
      id: 10,
      question: "Cho hàm số $y = f(x)$ có bảng biến thiên: $f' > 0$ trên $(-\\infty; -1) \\cup (1; +\\infty)$, $f' < 0$ trên $(-1; 1)$. $f(-1) = 4, f(1) = 0$. Số nghiệm của phương trình $f(x) = 2$ là:",
      options: ["$3$", "$2$", "$1$", "$0$"],
      correctAnswerIndex: 0,
      solution: "Vì $0 < 2 < 4$ ($y_{CT} < 2 < y_{CĐ}$) nên đường thẳng $y = 2$ cắt đồ thị tại 3 điểm phân biệt $\\Rightarrow$ phương trình có 3 nghiệm."
    },
    {
      id: 11,
      question: "Đồ thị hàm số $y = \\frac{x^2-2x+2}{x-1}$ cắt trục tung tại điểm $M$. Tọa độ điểm $M$ là:",
      options: ["$M(0; -2)$", "$M(0; 2)$", "$M(1; 0)$", "$M(2; 0)$"],
      correctAnswerIndex: 0,
      solution: "Tại $x = 0 \\Rightarrow y = \\frac{0 - 0 + 2}{0 - 1} = -2$. Điểm $M(0; -2)$."
    },
    {
      id: 12,
      question: "Khoảng cách từ tâm đối xứng của đồ thị hàm số $y = \\frac{2x+1}{x-1}$ đến gốc tọa độ $O$ bằng:",
      options: ["$\\sqrt{5}$", "$3$", "$\\sqrt{3}$", "$5$"],
      correctAnswerIndex: 0,
      solution: "Tâm đối xứng $I(1; 2)$. Khoảng cách $OI = \\sqrt{1^2 + 2^2} = \\sqrt{5}$."
    },
    {
      id: 13,
      question: "Tìm $m$ để đồ thị hàm số $y = x^3 - 3mx^2 + 4$ nhận điểm $I(1; 2)$ làm điểm uốn (tâm đối xứng).",
      options: ["$m = 1$", "$m = 2$", "$m = -1$", "$m = 0$"],
      correctAnswerIndex: 0,
      solution: "$y'' = 6x - 6m = 0 \\Leftrightarrow x = m$. Để hoành độ tâm đối xứng là $1$ thì $m = 1$. Khi đó $y(1) = 1 - 3(1) + 4 = 2$ (thỏa mãn)."
    },
    {
      id: 14,
      question: "Số đường tiệm cận của đồ thị hàm số $y = \\frac{x+3}{1-x}$ là:",
      options: ["$2$", "$1$", "$3$", "$0$"],
      correctAnswerIndex: 0,
      solution: "Tiệm cận đứng $x = 1$, tiệm cận ngang $y = -1$. Có 2 đường tiệm cận."
    },
    {
      id: 15,
      question: "Đồ thị hàm số $y = -x^3 + 3x - 2$ tiếp xúc với trục hoành tại:",
      options: ["$x = 1$", "$x = -2$", "$x = 0$", "$x = -1$"],
      correctAnswerIndex: 0,
      solution: "Ta có $y = -(x-1)^2(x+2)$. Nghiệm kép $x = 1$ là điểm tiếp xúc của đồ thị với trục hoành $Ox$."
    }
  ],
  // Bộ 3: Vận dụng cao & Tương giao đồ thị
  [
    {
      id: 1,
      question: "Tìm $m$ để đường thẳng $d: y = -x + m$ cắt đồ thị hàm số $y = \\frac{2x+1}{x-1}$ tại hai điểm phân biệt $A, B$.",
      options: ["Mọi $m \\in \\mathbb{R}$", "$m > 0$", "$-2 < m < 2$", "$m \\neq 1$"],
      correctAnswerIndex: 0,
      solution: "Phương trình hoành độ: $\\frac{2x+1}{x-1} = -x+m \\Leftrightarrow x^2 - mx + m + 1 = 0$ (với $x \\neq 1$). $\\Delta = m^2 - 4(m+1) = m^2 - 4m - 4$. Cần $\\Delta > 0 \\Leftrightarrow m < 2 - 2\\sqrt{2}$ hoặc $m > 2 + 2\\sqrt{2}$."
    },
    {
      id: 2,
      question: "Cho hàm số $y = \\frac{x-1}{x+1}$ có đồ thị $(C)$. Gọi $M$ là điểm thuộc $(C)$ sao cho tổng khoảng cách từ $M$ đến hai trục tọa độ là nhỏ nhất. Tọa độ $M$ ở góc phần tư thứ nhất là:",
      options: ["$(\\sqrt{2}-1; 3-2\\sqrt{2})$", "$(1; 0)$", "$(2; 1/3)$", "$(0; -1)$"],
      correctAnswerIndex: 0,
      solution: "Với $x > 1, y = 1 - \\frac{2}{x+1} > 0$. $d = x + 1 - \\frac{2}{x+1} = (x+1) + \\frac{2}{x+1} - 1 \\ge 2\\sqrt{2} - 1$. Dấu '=' khi $x+1 = \\sqrt{2} \\Leftrightarrow x = \\sqrt{2}-1$."
    },
    {
      id: 3,
      question: "Đồ thị hàm số $y = x^3 - 3x^2 + 2$ cắt đường thẳng $y = m(x-1)$ tại 3 điểm phân biệt khi và chỉ khi:",
      options: ["$m > -3$", "$m < -3$", "$m > 0$", "$m \\ge -3$"],
      correctAnswerIndex: 0,
      solution: "$x^3 - 3x^2 + 2 = (x-1)(x^2-2x-2)$. Phương trình: $(x-1)(x^2-2x-2-m) = 0$. Cần $g(x) = x^2-2x-2-m=0$ có 2 nghiệm phân biệt khác 1 $\\Leftrightarrow \\Delta' = 1 - (-2-m) = m+3 > 0 \\Leftrightarrow m > -3$ và $g(1) = -3-m \\neq 0 \\Leftrightarrow m \\neq -3$."
    },
    {
      id: 4,
      question: "Tìm các điểm $M$ trên đồ thị $(C): y = \\frac{2x+1}{x-1}$ sao cho tiếp tuyến tại $M$ vuông góc với đường thẳng $y = 3x + 2$.",
      options: ["$M(0; -1)$ hoặc $M(2; 5)$", "$M(1; 3)$", "$M(3; 7/2)$", "$M(-1; 1/2)$"],
      correctAnswerIndex: 0,
      solution: "Hệ số góc tiếp tuyến $k = y'(x_0) = \\frac{-3}{(x_0-1)^2}$. Tiếp tuyến vuông góc với $y = 3x+2$ nên $k \\cdot 3 = -1 \\Rightarrow k = -1/3$. Suy ra $\\frac{-3}{(x_0-1)^2} = -\\frac{1}{3} \\Leftrightarrow (x_0-1)^2 = 9 \\Leftrightarrow x_0 = 4$ hoặc $x_0 = -2$."
    },
    {
      id: 5,
      question: "Biết đồ thị hàm số $y = ax^3 + bx^2 + cx + d$ cắt trục hoành tại 3 điểm có hoành độ lần lượt là $-2, 1, 3$ và đi qua điểm $(0; 6)$. Hệ số $a$ bằng:",
      options: ["$-1$", "$1$", "$2$", "$-2$"],
      correctAnswerIndex: 0,
      solution: "$y = a(x+2)(x-1)(x-3)$. Đồ thị qua $(0; 6) \\Rightarrow 6 = a(2)(-1)(-3) = 6a \\Rightarrow a = 1$."
    },
    {
      id: 6,
      question: "Tìm $m$ để đồ thị hàm số $y = \\frac{x^2+mx-1}{x-1}$ có hai điểm cực trị nằm về hai phía của trục tung.",
      options: ["$m < 0$", "$m > 0$", "$-1 < m < 1$", "$m \\in \\mathbb{R}$"],
      correctAnswerIndex: 0,
      solution: "$y' = \\frac{(2x+m)(x-1) - (x^2+mx-1)}{(x-1)^2} = \\frac{x^2 - 2x - m + 1}{(x-1)^2}$. Hai nghiệm cực trị trái dấu khi tích $P = 1 - m < 0 \\Leftrightarrow m > 1$."
    },
    {
      id: 7,
      question: "Cho hàm số $y = f(x)$ có bảng biến thiên với $f(-2) = 5, f(2) = -1$. Số nghiệm của phương trình $|f(x)| = 3$ là:",
      options: ["$4$", "$3$", "$2$", "$6$"],
      correctAnswerIndex: 0,
      solution: "$|f(x)| = 3 \\Leftrightarrow f(x) = 3$ hoặc $f(x) = -3$. Đường $y = 3$ cắt đồ thị tại 3 điểm (vì $-1 < 3 < 5$), đường $y = -3$ cắt tại 1 điểm (nhánh dưới). Tổng cộng có $3 + 1 = 4$ nghiệm."
    },
    {
      id: 8,
      question: "Tâm đối xứng của đồ thị hàm số $y = \\frac{2x^2 - 3x + 5}{x - 1}$ là điểm:",
      options: ["$I(1; 1)$", "$I(1; 2)$", "$I(-1; 1)$", "$I(1; 0)$"],
      correctAnswerIndex: 0,
      solution: "TC đứng $x = 1$. Chia đa thức: $y = 2x - 1 + \\frac{4}{x-1} \\Rightarrow$ TC xiên $y = 2x - 1$. Thay $x = 1 \\Rightarrow y = 2(1) - 1 = 1$. Tâm đối xứng là $I(1; 1)$."
    },
    {
      id: 9,
      question: "Số tiếp tuyến của đồ thị hàm số $y = \\frac{2x-1}{x+1}$ đi qua gốc tọa độ $O(0; 0)$ là:",
      options: ["$2$", "$1$", "$0$", "$3$"],
      correctAnswerIndex: 0,
      solution: "Phương trình tiếp tuyến tại $x_0$: $y = \\frac{3}{(x_0+1)^2}(x - x_0) + \\frac{2x_0-1}{x_0+1}$. Đi qua $O(0;0) \\Rightarrow 0 = \\frac{-3x_0}{(x_0+1)^2} + \\frac{2x_0-1}{x_0+1} \\Leftrightarrow -3x_0 + (2x_0-1)(x_0+1) = 0 \\Leftrightarrow 2x_0^2 - 2x_0 - 1 = 0$. Có 2 nghiệm $x_0 \\Rightarrow 2$ tiếp tuyến."
    },
    {
      id: 10,
      question: "Cho hàm số $y = x^3 - 3x + 2$ có đồ thị $(C)$. Gọi $d$ là tiếp tuyến của $(C)$ tại điểm uốn. Hệ số góc của $d$ bằng:",
      options: ["$-3$", "$0$", "$3$", "$-1$"],
      correctAnswerIndex: 0,
      solution: "Điểm uốn có hoành độ $x_0 = 0$. Hệ số góc tiếp tuyến $k = y'(0) = 3(0)^2 - 3 = -3$."
    },
    {
      id: 11,
      question: "Có bao nhiêu giá trị nguyên của tham số $m$ để đồ thị $y = x^3 - 3x^2 + m$ cắt trục hoành tại 3 điểm phân biệt?",
      options: ["$3$", "$4$", "$2$", "$5$"],
      correctAnswerIndex: 0,
      solution: "$y_{CĐ} = y(0) = m$, $y_{CT} = y(2) = m - 4$. Cắt trục hoành tại 3 điểm khi $y_{CĐ} \\cdot y_{CT} < 0 \\Leftrightarrow m(m-4) < 0 \\Leftrightarrow 0 < m < 4$. Các số nguyên là $m \\in \\{1, 2, 3\\}$ (3 giá trị)."
    },
    {
      id: 12,
      question: "Giao điểm của đồ thị hàm số $y = \\frac{x-3}{x+1}$ với đường thẳng $y = x - 3$ có hoành độ là:",
      options: ["$x = 3$ và $x = 0$", "$x = 3$ và $x = 1$", "$x = -1$ và $x = 3$", "$x = 0$ và $x = -3$"],
      correctAnswerIndex: 0,
      solution: "$\\frac{x-3}{x+1} = x - 3 \\Leftrightarrow (x-3)\\left(\\frac{1}{x+1} - 1\\right) = 0 \\Leftrightarrow x = 3$ hoặc $\\frac{1}{x+1} = 1 \\Leftrightarrow x = 0$."
    },
    {
      id: 13,
      question: "Tìm $m$ để đồ thị hàm số $y = x^4 - 2mx^2 + 1$ cắt trục hoành tại 4 điểm phân biệt lập thành cấp số cộng.",
      options: ["$m = \\sqrt{5}/3$ hoặc $m = 5/3$", "$m = 2$", "$m = 1$", "$m = 3$"],
      correctAnswerIndex: 0,
      solution: "Điều kiện có 4 nghiệm lập thành CSC của hàm trùng phương là $9b^2 = 100ac \\Leftrightarrow 9(-2m)^2 = 100(1)(1) \\Leftrightarrow 36m^2 = 100 \\Leftrightarrow m = 5/3$ (với $m > 0$)."
    },
    {
      id: 14,
      question: "Tìm điểm $M$ trên đồ thị $y = \\frac{x+2}{x-2}$ có khoảng cách đến tiệm cận đứng bằng khoảng cách đến tiệm cận ngang.",
      options: ["$(3; 5)$ hoặc $(1; -3)$", "$(0; -1)$", "$(4; 3)$", "$(2; 2)$"],
      correctAnswerIndex: 0,
      solution: "TC đứng $x = 2$, TC ngang $y = 1$. Khoảng cách bằng nhau $\\Leftrightarrow |x - 2| = |y - 1| = \\left|\\frac{x+2}{x-2} - 1\\right| = \\frac{4}{|x-2|} \\Leftrightarrow (x-2)^2 = 4 \\Leftrightarrow x = 4$ hoặc $x = 0$. $x=4 \\Rightarrow y=3, x=0 \\Rightarrow y=-1$."
    },
    {
      id: 15,
      question: "Đồ thị hàm số $y = \\frac{x^2+2x+2}{x+1}$ có dạng hình học gồm hai nhánh nằm ở:",
      options: ["Góc phần tư thứ I và thứ III so với hệ trục tọa độ tạo bởi 2 tiệm cận", "Góc phần tư thứ II và thứ IV", "Hoàn toàn phía trên trục hoành", "Hoàn toàn bên phải trục tung"],
      correctAnswerIndex: 0,
      solution: "$y = x + 1 + \\frac{1}{x+1}$. Vì tử số phần dư $1 > 0$ nên đồ thị nằm ở góc phần tư I và III của hệ trục tiệm cận."
    }
  ]
];
