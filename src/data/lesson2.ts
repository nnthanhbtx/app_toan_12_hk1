import { Question } from './types';

export const lesson2Sets: Question[][] = [
  // Bộ 1: Cơ bản & Lý thuyết GTLN - GTNN
  [
    {
      id: 1,
      question: "Số $M$ được gọi là giá trị lớn nhất của hàm số $y = f(x)$ trên tập $D$ nếu:",
      options: ["$f(x) \\le M$ với mọi $x \\in D$ và tồn tại $x_0 \\in D$ sao cho $f(x_0) = M$", "$f(x) < M$ với mọi $x \\in D$", "$f(x) \\ge M$ với mọi $x \\in D$", "Tồn tại $x_0 \\in D$ sao cho $f(x_0) = M$"],
      correctAnswerIndex: 0,
      solution: "Định nghĩa GTLN: $f(x) \\le M, \\forall x \\in D$ và $\\exists x_0 \\in D: f(x_0) = M$. Kí hiệu $M = \\max_D f(x)$."
    },
    {
      id: 2,
      question: "Giá trị lớn nhất của hàm số $y = -x^2 + 4x + 1$ trên đoạn $[0; 3]$ bằng:",
      options: ["$5$", "$4$", "$1$", "$2$"],
      correctAnswerIndex: 0,
      solution: "$y' = -2x + 4 = 0 \\Leftrightarrow x = 2 \\in [0; 3]$. $y(0) = 1, y(2) = 5, y(3) = 4$. Vậy $\\max = 5$."
    },
    {
      id: 3,
      question: "Giá trị nhỏ nhất của hàm số $y = x^3 - 3x + 2$ trên đoạn $[0; 2]$ bằng:",
      options: ["$0$", "$2$", "$4$", "$-2$"],
      correctAnswerIndex: 0,
      solution: "$y' = 3x^2 - 3 = 0 \\Leftrightarrow x = 1 \\in [0; 2]$. $y(0) = 2, y(1) = 0, y(2) = 4$. Vậy $\\min = 0$ tại $x = 1$."
    },
    {
      id: 4,
      question: "Hàm số $y = \\frac{2x+1}{x-1}$ trên đoạn $[2; 4]$ đạt giá trị lớn nhất tại:",
      options: ["$x = 2$", "$x = 4$", "$x = 3$", "Không tồn tại GTLN"],
      correctAnswerIndex: 0,
      solution: "$y' = \\frac{-3}{(x-1)^2} < 0$ (nghịch biến trên $[2; 4]$). Do đó $\\max = y(2) = \\frac{5}{1} = 5$ tại $x = 2$."
    },
    {
      id: 5,
      question: "Giá trị nhỏ nhất của hàm số $y = x + \\frac{4}{x}$ trên khoảng $(0; +\\infty)$ bằng:",
      options: ["$4$", "$2$", "$5$", "$8$"],
      correctAnswerIndex: 0,
      solution: "Theo bất đẳng thức Cauchy: $x + \\frac{4}{x} \\ge 2\\sqrt{x \\cdot \\frac{4}{x}} = 4$. Dấu '=' xảy ra khi $x = 2$."
    },
    {
      id: 6,
      question: "Cho hàm số $y = f(x)$ liên tục trên đoạn $[a; b]$. Để tìm GTLN, GTNN của $f(x)$ trên $[a; b]$ ta tính giá trị tại:",
      options: ["Hai đầu mút $a, b$ và các điểm $x_i \\in (a; b)$ mà tại đó $f'(x_i) = 0$ hoặc $f'(x)$ không xác định", "Chỉ tại hai đầu mút $a$ và $b$", "Chỉ tại các điểm mà $f'(x) = 0$", "Tại tất cả các điểm nguyên thuộc $[a; b]$"],
      correctAnswerIndex: 0,
      solution: "Quy tắc tìm GTLN, GTNN trên đoạn $[a; b]$: So sánh các giá trị $f(a), f(b)$ và $f(x_i)$ với $x_i \\in (a; b)$ là nghiệm của $f'(x)=0$ hoặc nơi đạo hàm không xác định."
    },
    {
      id: 7,
      question: "Giá trị lớn nhất của hàm số $y = \\sqrt{4 - x^2}$ là:",
      options: ["$2$", "$4$", "$0$", "$\\sqrt{2}$"],
      correctAnswerIndex: 0,
      solution: "$4 - x^2 \\le 4 \\Rightarrow \\sqrt{4 - x^2} \\le 2$. Dấu bằng xảy ra khi $x = 0$."
    },
    {
      id: 8,
      question: "Giá trị nhỏ nhất của hàm số $y = x^4 - 2x^2 + 3$ trên đoạn $[-2; 2]$ bằng:",
      options: ["$2$", "$3$", "$11$", "$0$"],
      correctAnswerIndex: 0,
      solution: "$y' = 4x(x^2 - 1) = 0 \\Leftrightarrow x = 0, \\pm 1$. $y(0) = 3, y(\\pm 1) = 2, y(\\pm 2) = 11$. Vậy $\\min = 2$."
    },
    {
      id: 9,
      question: "Tổng của hai số dương $x, y$ bằng $20$. Tích $x \\cdot y$ đạt giá trị lớn nhất khi:",
      options: ["$x = y = 10$", "$x = 5, y = 15$", "$x = 8, y = 12$", "$x = 1, y = 19$"],
      correctAnswerIndex: 0,
      solution: "$x \\cdot y = x(20 - x) = -x^2 + 20x$. Đạt cực đại tại $x = 10 \\Rightarrow y = 10$. Tích cực đại là $100$."
    },
    {
      id: 10,
      question: "Giá trị lớn nhất của hàm số $y = \\sin x + \\cos x$ bằng:",
      options: ["$\\sqrt{2}$", "$1$", "$2$", "$\\sqrt{3}$"],
      correctAnswerIndex: 0,
      solution: "Ta có $\\sin x + \\cos x = \\sqrt{2}\\sin\\left(x + \\frac{\\pi}{4}\\right) \\le \\sqrt{2}$."
    },
    {
      id: 11,
      question: "Hàm số $y = x^2 - 4x + 5$ trên khoảng $(-\\infty; +\\infty)$ có:",
      options: ["Giá trị nhỏ nhất bằng $1$, không có GTLN", "Giá trị lớn nhất bằng $5$", "Cả GTLN và GTNN", "Không có GTNN"],
      correctAnswerIndex: 0,
      solution: "$y = (x-2)^2 + 1 \\ge 1, \\forall x$. Do đó $\\min = 1$ tại $x = 2$, và khi $x \\to \\pm\\infty, y \\to +\\infty$ nên không có GTLN."
    },
    {
      id: 12,
      question: "Một hình chữ nhật có chu vi bằng $24\\text{ cm}$. Diện tích lớn nhất của hình chữ nhật đó là:",
      options: ["$36\\text{ cm}^2$", "$48\\text{ cm}^2$", "$32\\text{ cm}^2$", "$24\\text{ cm}^2$"],
      correctAnswerIndex: 0,
      solution: "Nửa chu vi $x + y = 12 \\Rightarrow S = x(12-x) \\le 36$. Đạt max khi hình chữ nhật là hình vuông cạnh $6\\text{ cm}$."
    },
    {
      id: 13,
      question: "Giá trị lớn nhất của hàm số $y = \\frac{x}{x^2 + 1}$ trên $\\mathbb{R}$ bằng:",
      options: ["$\\frac{1}{2}$", "$1$", "$2$", "$\\frac{1}{4}$"],
      correctAnswerIndex: 0,
      solution: "Theo Cauchy: $x^2 + 1 \\ge 2x \\Rightarrow \\frac{x}{x^2+1} \\le \\frac{1}{2}$. Đạt max tại $x = 1$."
    },
    {
      id: 14,
      question: "Giá trị nhỏ nhất của hàm số $y = e^x - x$ trên $\\mathbb{R}$ bằng:",
      options: ["$1$", "$0$", "$e$", "$-1$"],
      correctAnswerIndex: 0,
      solution: "$y' = e^x - 1 = 0 \\Leftrightarrow x = 0$. $y(0) = e^0 - 0 = 1$. Vì $y'' = e^x > 0$ nên $\\min = 1$."
    },
    {
      id: 15,
      question: "Cho hàm số $y = f(x)$ có bảng biến thiên trên $[-1; 4]$ với $f(-1) = 2, f(1) = 6, f(4) = -3$. Giá trị lớn nhất của $f(x)$ trên $[-1; 4]$ bằng:",
      options: ["$6$", "$2$", "$-3$", "$4$"],
      correctAnswerIndex: 0,
      solution: "Quan sát bảng biến thiên, giá trị cao nhất là $f(1) = 6$ nên $\\max = 6$."
    }
  ],
  // Bộ 2: Vận dụng & Bài toán hình học, kinh tế
  [
    {
      id: 1,
      question: "Từ một tấm bìa hình vuông cạnh $60\\text{ cm}$, người ta cắt bỏ 4 hình vuông bằng nhau ở 4 góc cạnh $x\\text{ cm}$ rồi gấp thành một chiếc hộp không nắp. Thể tích hộp lớn nhất khi $x$ bằng:",
      options: ["$10\\text{ cm}$", "$15\\text{ cm}$", "$12\\text{ cm}$", "$8\\text{ cm}$"],
      correctAnswerIndex: 0,
      solution: "$V(x) = x(60-2x)^2 = 4x^3 - 240x^2 + 3600x$ với $0 < x < 30$. $V'(x) = 12x^2 - 480x + 3600 = 0 \\Leftrightarrow x = 10$ hoặc $x = 30$ (loại). Vậy $x = 10\\text{ cm}$."
    },
    {
      id: 2,
      question: "Thể tích lớn nhất của chiếc hộp trong câu 1 là:",
      options: ["$16\\,000\\text{ cm}^3$", "$18\\,000\\text{ cm}^3$", "$12\\,000\\text{ cm}^3$", "$20\\,000\\text{ cm}^3$"],
      correctAnswerIndex: 0,
      solution: "$V(10) = 10 \\times (60 - 20)^2 = 10 \\times 1600 = 16\\,000\\text{ cm}^3$."
    },
    {
      id: 3,
      question: "Tìm giá trị lớn nhất $M$ và nhỏ nhất $m$ của hàm số $y = x^4 - 4x^2 + 3$ trên đoạn $[0; 4]$.",
      options: ["$M = 195, m = -1$", "$M = 195, m = 3$", "$M = 3, m = -1$", "$M = 192, m = 0$"],
      correctAnswerIndex: 0,
      solution: "$y' = 4x(x^2 - 2) = 0 \\Leftrightarrow x = 0, x = \\sqrt{2} \\in [0; 4]$. $y(0) = 3, y(\\sqrt{2}) = -1, y(4) = 195$. Vậy $M = 195, m = -1$."
    },
    {
      id: 4,
      question: "Một cơ sở sản xuất thùng hình trụ có thể tích $V = 1000\\text{ cm}^3$. Bán kính đáy $r$ để diện tích toàn phần của thùng nhỏ nhất là:",
      options: ["$r = \\sqrt[3]{\\frac{500}{\\pi}}\\text{ cm}$", "$r = \\sqrt{\\frac{500}{\\pi}}\\text{ cm}$", "$r = 10\\text{ cm}$", "$r = \\sqrt[3]{\\frac{1000}{\\pi}}\\text{ cm}$"],
      correctAnswerIndex: 0,
      solution: "$S = 2\\pi r^2 + \\frac{2V}{r} = 2\\pi r^2 + \\frac{2000}{r}$. $S' = 4\\pi r - \\frac{2000}{r^2} = 0 \\Leftrightarrow r^3 = \\frac{500}{\\pi} \\Leftrightarrow r = \\sqrt[3]{\\frac{500}{\\pi}}$."
    },
    {
      id: 5,
      question: "Cho hàm số $y = (x+1)e^{-x}$ trên đoạn $[-1; 1]$. Giá trị lớn nhất của hàm số bằng:",
      options: ["$1$", "$2/e$", "$0$", "$e$"],
      correctAnswerIndex: 0,
      solution: "$y' = e^{-x} - (x+1)e^{-x} = -xe^{-x} = 0 \\Leftrightarrow x = 0 \\in [-1; 1]$. $y(-1) = 0, y(0) = 1, y(1) = 2/e$. Vậy $\\max = 1$ tại $x = 0$."
    },
    {
      id: 6,
      question: "Giá trị nhỏ nhất của hàm số $y = x - \\sin 2x$ trên đoạn $[0; \\pi]$ bằng:",
      options: ["$0$", "$\\frac{\\pi}{6} - \\frac{\\sqrt{3}}{2}$", "$\\pi$", "$-1$"],
      correctAnswerIndex: 0,
      solution: "$y' = 1 - 2\\cos 2x = 0 \\Leftrightarrow \\cos 2x = \\frac{1}{2} \\Leftrightarrow 2x = \\frac{\\pi}{3} \\Rightarrow x = \\frac{\\pi}{6}$. $y(0)=0, y(\\pi/6) = \\frac{\\pi}{6} - \\frac{\\sqrt{3}}{2} \\approx -0,34, y(\\pi)=\\pi$. Vậy $\\min = \\frac{\\pi}{6} - \\frac{\\sqrt{3}}{2}$."
    },
    {
      id: 7,
      question: "Tìm $m$ để giá trị lớn nhất của hàm số $y = x^3 - 3x + m$ trên đoạn $[0; 2]$ bằng $10$.",
      options: ["$m = 8$", "$m = 10$", "$m = 6$", "$m = 12$"],
      correctAnswerIndex: 0,
      solution: "$y' = 3x^2 - 3 = 0 \\Leftrightarrow x = 1 \\in [0; 2]$. $y(0) = m, y(1) = m - 2, y(2) = m + 2$. $\\max = m + 2 = 10 \\Leftrightarrow m = 8$."
    },
    {
      id: 8,
      question: "Sự lây lan của một loại virus tại một địa phương được mô hình hoá bởi $N(t) = -t^3 + 12t^2$ ($0 \\le t \\le 12$, tuần). Sau bao nhiêu tuần thì số người nhiễm bệnh đạt tối đa?",
      options: ["$8\\text{ tuần}$", "$6\\text{ tuần}$", "$4\\text{ tuần}$", "$10\\text{ tuần}$"],
      correctAnswerIndex: 0,
      solution: "$N'(t) = -3t^2 + 24t = 0 \\Leftrightarrow t = 8$ (vì $0 \\le t \\le 12$). Số người bệnh tối đa sau 8 tuần."
    },
    {
      id: 9,
      question: "Giá trị lớn nhất của hàm số $y = \\sqrt{x-1} + \\sqrt{3-x}$ là:",
      options: ["$2$", "$\\sqrt{2}$", "$4$", "$\\sqrt{3}$"],
      correctAnswerIndex: 0,
      solution: "Theo BĐT Cauchy-Schwarz: $(\\sqrt{x-1} + \\sqrt{3-x})^2 \\le (1+1)(x-1+3-x) = 4 \\Rightarrow y \\le 2$. Dấu '=' khi $x = 2$."
    },
    {
      id: 10,
      question: "Một hộp chữ nhật không nắp có đáy hình vuông và diện tích bề mặt bằng $108\\text{ cm}^2$. Thể tích lớn nhất của hộp là:",
      options: ["$108\\text{ cm}^3$", "$216\\text{ cm}^3$", "$72\\text{ cm}^3$", "$144\\text{ cm}^3$"],
      correctAnswerIndex: 0,
      solution: "Đáy cạnh $x$, chiều cao $h$. $S = x^2 + 4xh = 108 \\Rightarrow h = \\frac{108 - x^2}{4x}$. $V = x^2 h = \\frac{108x - x^3}{4}$. $V' = \\frac{108 - 3x^2}{4} = 0 \\Rightarrow x = 6\\text{ cm}$. $V_{max} = \\frac{108(6) - 216}{4} = 108\\text{ cm}^3$."
    },
    {
      id: 11,
      question: "Giá trị nhỏ nhất của hàm số $y = \\frac{x^2 - 2x + 3}{x - 1}$ trên khoảng $(1; +\\infty)$ bằng:",
      options: ["$2\\sqrt{2}$", "$4$", "$2$", "$3$"],
      correctAnswerIndex: 0,
      solution: "$y = x - 1 + \\frac{2}{x-1} \\ge 2\\sqrt{(x-1)\\frac{2}{x-1}} = 2\\sqrt{2}$. Dấu '=' xảy ra khi $x = 1 + \\sqrt{2}$."
    },
    {
      id: 12,
      question: "Một người nông dân có $240\\text{ m}$ hàng rào muốn rào một mảnh đất hình chữ nhật sát bờ sông thẳng (không cần rào bờ sông). Diện tích lớn nhất rào được là:",
      options: ["$7200\\text{ m}^2$", "$3600\\text{ m}^2$", "$14400\\text{ m}^2$", "$4800\\text{ m}^2$"],
      correctAnswerIndex: 0,
      solution: "Chiều rộng $x$, chiều dài $240 - 2x$. $S(x) = x(240 - 2x) = -2x^2 + 240x$. Đạt cực đại tại $x = 60\\text{ m} \\Rightarrow S = 7200\\text{ m}^2$."
    },
    {
      id: 13,
      question: "Tìm giá trị nhỏ nhất của hàm số $y = x^2 + \\frac{16}{x}$ trên $(0; +\\infty)$.",
      options: ["$12$", "$8$", "$16$", "$6$"],
      correctAnswerIndex: 0,
      solution: "$y = x^2 + \\frac{8}{x} + \\frac{8}{x} \\ge 3\\sqrt[3]{x^2 \\cdot \\frac{8}{x} \\cdot \\frac{8}{x}} = 3\\sqrt[3]{64} = 12$. Dấu '=' khi $x^2 = 8/x \\Leftrightarrow x = 2$."
    },
    {
      id: 14,
      question: "Một khách sạn có 100 phòng. Nếu giá thuê mỗi ngày là 400 nghìn đồng thì thuê hết phòng. Cứ tăng 20 nghìn đồng giá thuê thì có thêm 2 phòng trống. Giá thuê để doanh thu tối đa là:",
      options: ["$700\\text{ nghìn đồng}$", "$600\\text{ nghìn đồng}$", "$500\\text{ nghìn đồng}$", "$800\\text{ nghìn đồng}$"],
      correctAnswerIndex: 0,
      solution: "Gọi số lần tăng 20 nghìn là $x$. Doanh thu $R(x) = (400 + 20x)(100 - 2x) = -40x^2 + 1200x + 40000$. Đạt cực đại tại $x = 15$. Giá thuê tối ưu là $400 + 20(15) = 700$ nghìn đồng."
    },
    {
      id: 15,
      question: "Giá trị lớn nhất của hàm số $y = |x^3 - 3x + 1|$ trên đoạn $[-1; 2]$ bằng:",
      options: ["$3$", "$1$", "$2$", "$4$"],
      correctAnswerIndex: 0,
      solution: "Xét $g(x) = x^3 - 3x + 1$ trên $[-1; 2]$. $g' = 3x^2 - 3 = 0 \\Leftrightarrow x = 1$. $g(-1) = 3, g(1) = -1, g(2) = 3$. Giá trị tuyệt đối lớn nhất là $|3| = 3$."
    }
  ],
  // Bộ 3: Nâng cao & Tối ưu hoá nâng cao
  [
    {
      id: 1,
      question: "Tìm $m$ để giá trị nhỏ nhất của hàm số $y = \\frac{x-m^2+m}{x+1}$ trên đoạn $[0; 1]$ bằng $-2$.",
      options: ["$m = 2$ hoặc $m = -1$", "$m = 1$", "$m = -2$", "$m = 0$"],
      correctAnswerIndex: 0,
      solution: "$y' = \\frac{1 - (-m^2+m)}{(x+1)^2} = \\frac{m^2-m+1}{(x+1)^2} > 0, \\forall m$. Hàm số luôn đồng biến trên $[0; 1]$ nên $\\min = y(0) = -m^2 + m = -2 \\Leftrightarrow m^2 - m - 2 = 0 \\Leftrightarrow m = 2$ hoặc $m = -1$."
    },
    {
      id: 2,
      question: "Cho hai số thực $x, y$ thỏa mãn $x^2 + y^2 = 1$. Giá trị lớn nhất của biểu thức $P = x + 2y$ bằng:",
      options: ["$\\sqrt{5}$", "$3$", "$5$", "$\\sqrt{3}$"],
      correctAnswerIndex: 0,
      solution: "Theo BĐT Cauchy-Schwarz: $(x + 2y)^2 \\le (1^2 + 2^2)(x^2 + y^2) = 5 \\Rightarrow P \\le \\sqrt{5}$."
    },
    {
      id: 3,
      question: "Một bể chứa nước hình hộp chữ nhật có đáy là hình vuông, thể tích $V = 32\\text{ m}^3$. Chi phí xây dựng mặt đáy là $100$ nghìn đồng/$\\text{m}^2$, xung quanh là $50$ nghìn đồng/$\\text{m}^2$. Kích thước cạnh đáy để chi phí thấp nhất là:",
      options: ["$4\\text{ m}$", "$2\\text{ m}$", "$3\\text{ m}$", "$5\\text{ m}$"],
      correctAnswerIndex: 0,
      solution: "$V = x^2 h = 32 \\Rightarrow h = \\frac{32}{x^2}$. Chi phí $C = 100x^2 + 50(4xh) = 100x^2 + \\frac{6400}{x}$. $C' = 200x - \\frac{6400}{x^2} = 0 \\Leftrightarrow x^3 = 32 \\times 2 = 64 \\Leftrightarrow x = 4\\text{ m}$."
    },
    {
      id: 4,
      question: "Giá trị lớn nhất của hàm số $y = x^2 \\sqrt{9 - x^2}$ bằng:",
      options: ["$6\\sqrt{3}$", "$9$", "$12$", "$18$"],
      correctAnswerIndex: 0,
      solution: "$y^2 = x^4(9 - x^2) = 4 \\cdot \\frac{x^2}{2} \\cdot \\frac{x^2}{2} \\cdot (9 - x^2) \\le 4 \\left(\\frac{x^2/2 + x^2/2 + 9 - x^2}{3}\\right)^3 = 4 \\times 3^3 = 108 \\Rightarrow y \\le \\sqrt{108} = 6\\sqrt{3}$."
    },
    {
      id: 5,
      question: "Tìm tất cả các giá trị của $m$ để hàm số $y = |x^2 - 2x + m|$ có giá trị lớn nhất trên đoạn $[0; 3]$ bằng $5$.",
      options: ["$m = 2$ hoặc $m = -4$", "$m = 5$", "$m = -5$", "$m = 3$"],
      correctAnswerIndex: 0,
      solution: "$g(x) = x^2 - 2x + m$ trên $[0; 3]$ có đỉnh $x = 1$. $g(1) = m - 1, g(0) = m, g(3) = m + 3$. $\\max |g(x)| = \\max(|m-1|, |m+3|) = 5 \\Rightarrow m + 3 = 5 \\Rightarrow m = 2$ hoặc $m - 1 = -5 \\Rightarrow m = -4$."
    },
    {
      id: 6,
      question: "Một xưởng sản xuất cần làm những chiếc bình có dạng hình trụ với dung tích $1000\\text{ cm}^3$. Mặt trên và đáy có giá vật liệu $1,2$ nghìn đồng/$\\text{cm}^2$, mặt bên có giá $0,75$ nghìn đồng/$\\text{cm}^2$. Bán kính đáy $r$ tối ưu xấp xỉ bằng:",
      options: ["$5,42\\text{ cm}$", "$4,85\\text{ cm}$", "$6,20\\text{ cm}$", "$3,50\\text{ cm}$"],
      correctAnswerIndex: 0,
      solution: "Chi phí $T = 1,2(2\\pi r^2) + 0,75(2\\pi r h) = 2,4\\pi r^2 + \\frac{1500}{r}$. $T' = 4,8\\pi r - \\frac{1500}{r^2} = 0 \\Leftrightarrow r = \\sqrt[3]{\\frac{1500}{4,8\\pi}} \\approx 5,42\\text{ cm}$."
    },
    {
      id: 7,
      question: "Cho hàm số $y = f(x)$ có đạo hàm $f'(x) = (x-1)(x-2)^2(x-3)$. Trên đoạn $[0; 4]$, hàm số $f(x)$ đạt GTLN tại điểm nào?",
      options: ["$x = 1$ hoặc $x = 4$", "$x = 2$", "$x = 3$", "$x = 0$"],
      correctAnswerIndex: 0,
      solution: "$f'(x) > 0$ trên $(0; 1)$ và $(3; 4)$, $f'(x) < 0$ trên $(1; 3)$. Do đó GTLN chỉ có thể đạt tại các đỉnh biên hoặc cực đại: $x = 1$ hoặc $x = 4$."
    },
    {
      id: 8,
      question: "Giá trị nhỏ nhất của hàm số $y = \\cos 2x - 4\\cos x + 1$ bằng:",
      options: ["$-4$", "$-2$", "$0$", "$-3$"],
      correctAnswerIndex: 0,
      solution: "Đặt $t = \\cos x \\in [-1; 1]$. $y = 2t^2 - 1 - 4t + 1 = 2t^2 - 4t$. Trên $[-1; 1]$, $\\min = y(1) = 2(1) - 4(1) = -2$ tại $\\cos x = 1$."
    },
    {
      id: 9,
      question: "Một công ty muốn chạy một đường dây ống dẫn dầu từ nhà máy $A$ đến đảo $C$. Khoảng cách từ $C$ đến bờ biển $B$ là $4\\text{ km}$, khoảng cách $AB = 10\\text{ km}$. Chi phí đặt ống dưới nước là 50 triệu/km, trên đất liền là 30 triệu/km. Vị trí điểm nối $M$ trên $AB$ cách $B$ bao xa để chi phí nhỏ nhất?",
      options: ["$3\\text{ km}$", "$4\\text{ km}$", "$2,5\\text{ km}$", "$5\\text{ km}$"],
      correctAnswerIndex: 0,
      solution: "Đặt $BM = x$ ($0 \\le x \\le 10$). Chi phí $C(x) = 50\\sqrt{x^2+16} + 30(10-x)$. $C'(x) = \\frac{50x}{\\sqrt{x^2+16}} - 30 = 0 \\Leftrightarrow 5x = 3\\sqrt{x^2+16} \\Leftrightarrow 25x^2 = 9x^2 + 144 \\Leftrightarrow 16x^2 = 144 \\Leftrightarrow x = 3\\text{ km}$."
    },
    {
      id: 10,
      question: "Tổng chi phí lắp đặt ống dẫn dầu nhỏ nhất ở câu 9 bằng:",
      options: ["$460\\text{ triệu đồng}$", "$500\\text{ triệu đồng}$", "$420\\text{ triệu đồng}$", "$480\\text{ triệu đồng}$"],
      correctAnswerIndex: 0,
      solution: "$C(3) = 50\\sqrt{9+16} + 30(10-3) = 50(5) + 30(7) = 250 + 210 = 460$ triệu đồng."
    },
    {
      id: 11,
      question: "Giá trị lớn nhất của biểu thức $P = \\frac{x^2}{x^4 + 16}$ trên $\\mathbb{R}$ bằng:",
      options: ["$\\frac{1}{8}$", "$\\frac{1}{4}$", "$\\frac{1}{16}$", "$1$"],
      correctAnswerIndex: 0,
      solution: "$x^4 + 16 \\ge 2\\sqrt{16x^4} = 8x^2 \\Rightarrow \\frac{x^2}{x^4+16} \\le \\frac{x^2}{8x^2} = \\frac{1}{8}$. Đạt max khi $x^2 = 4 \\Leftrightarrow x = \\pm 2$."
    },
    {
      id: 12,
      question: "Tìm giá trị nhỏ nhất của $f(x) = x^2 + \\frac{2}{x}$ với $x > 0$.",
      options: ["$3$", "$2$", "$4$", "$\\sqrt{3}$"],
      correctAnswerIndex: 0,
      solution: "$f(x) = x^2 + \\frac{1}{x} + \\frac{1}{x} \\ge 3\\sqrt[3]{x^2 \\cdot \\frac{1}{x} \\cdot \\frac{1}{x}} = 3$. Dấu '=' xảy ra khi $x = 1$."
    },
    {
      id: 13,
      question: "Tìm $m$ để hàm số $y = x^3 - 3mx^2 + 6$ có giá trị nhỏ nhất trên đoạn $[0; 3]$ bằng $2$.",
      options: ["$m = 31/27$", "$m = 1$", "$m = 2$", "$m = 0$"],
      correctAnswerIndex: 0,
      solution: "$y' = 3x^2 - 6mx = 0 \\Leftrightarrow x = 0, x = 2m$. Nếu $0 < 2m < 3 \\Leftrightarrow 0 < m < 1,5$: $\\min = y(2m) = -4m^3 + 6 = 2 \\Leftrightarrow m^3 = 1 \\Leftrightarrow m = 1$ (thỏa mãn)."
    },
    {
      id: 14,
      question: "Cho hàm số $y = f(x)$ liên tục trên $\\mathbb{R}$ thỏa mãn $\\max_{[-1; 2]} f(x) = 5$. Giá trị lớn nhất của $g(x) = 2f(x) - 3$ trên $[-1; 2]$ bằng:",
      options: ["$7$", "$10$", "$5$", "$4$"],
      correctAnswerIndex: 0,
      solution: "$\\max g(x) = 2\\max f(x) - 3 = 2(5) - 3 = 7$."
    },
    {
      id: 15,
      question: "Tìm tất cả các giá trị của $a$ để hàm số $y = x + \\frac{a^2}{x}$ có giá trị nhỏ nhất trên $(0; +\\infty)$ bằng $6$.",
      options: ["$a = \\pm 3$", "$a = 3$", "$a = 9$", "$a = \\pm 9$"],
      correctAnswerIndex: 0,
      solution: "Với $x > 0$: $x + \\frac{a^2}{x} \\ge 2\\sqrt{a^2} = 2|a| = 6 \\Leftrightarrow |a| = 3 \\Leftrightarrow a = \\pm 3$."
    }
  ]
];
