import { Question } from './types';

export const lessonChuong1Sets: Question[][] = [
  // Bộ 1: Trắc nghiệm Tổng hợp Chương I (Theo SGK trang 42-44)
  [
    {
      id: 1,
      question: "Cho hàm số $y = f(x)$ có đạo hàm trên khoảng $(a; b)$. Phát biểu nào sau đây là đúng?",
      options: [
        "Nếu $f'(x) > 0$ với mọi $x \\in (a; b)$ thì hàm số $y = f(x)$ đồng biến trên $(a; b)$.",
        "Nếu $f'(x) \\ge 0$ với mọi $x \\in (a; b)$ thì hàm số $y = f(x)$ đồng biến trên $(a; b)$.",
        "Hàm số $y = f(x)$ đồng biến trên $(a; b)$ khi và chỉ khi $f'(x) \\ge 0$ với mọi $x \\in (a; b)$.",
        "Hàm số $y = f(x)$ đồng biến trên $(a; b)$ khi và chỉ khi $f'(x) > 0$ với mọi $x \\in (a; b)$."
      ],
      correctAnswerIndex: 0,
      solution: "Định lý: Nếu $f'(x) > 0, \\forall x \\in (a; b)$ thì hàm số đồng biến trên $(a; b)$. Trường hợp $f'(x) \\ge 0$ cần thêm điều kiện $f'(x) = 0$ chỉ tại hữu hạn điểm."
    },
    {
      id: 2,
      question: "Hàm số nào sau đây nghịch biến trên $\\mathbb{R}$?",
      options: [
        "$y = -x^3 + 3x^2 - 9x$",
        "$y = -x^3 + x + 1$",
        "$y = \\frac{x-1}{x-2}$",
        "$y = 2x^2 + 3x + 2$"
      ],
      correctAnswerIndex: 0,
      solution: "Xét $y = -x^3 + 3x^2 - 9x \\Rightarrow y' = -3x^2 + 6x - 9 = -3(x-1)^2 - 6 < 0, \\forall x \\in \\mathbb{R}$. Do đó hàm số nghịch biến trên $\\mathbb{R}$."
    },
    {
      id: 3,
      question: "Hàm số nào dưới đây không có cực trị?",
      options: [
        "$y = \\frac{2x-1}{x+1}$",
        "$y = |x|$",
        "$y = x^4$",
        "$y = -x^3 + x$"
      ],
      correctAnswerIndex: 0,
      solution: "Hàm phân thức $y = \\frac{2x-1}{x+1}$ có đạo hàm $y' = \\frac{3}{(x+1)^2} > 0, \\forall x \\neq -1$ nên không có cực trị."
    },
    {
      id: 4,
      question: "Giá trị cực tiểu của hàm số $y = x^2 \\ln x$ là:",
      options: [
        "$-\\frac{1}{2e}$",
        "$\\frac{1}{e}$",
        "$-\\frac{1}{e}$",
        "$\\frac{1}{2e}$"
      ],
      correctAnswerIndex: 0,
      solution: "TXĐ: $(0; +\\infty)$. $y' = 2x\\ln x + x^2 \\frac{1}{x} = x(2\\ln x + 1) = 0 \\Leftrightarrow \\ln x = -1/2 \\Leftrightarrow x = e^{-1/2} = \\frac{1}{\\sqrt{e}}$. $y_{CT} = \\left(\\frac{1}{\\sqrt{e}}\\right)^2 \\ln(e^{-1/2}) = \\frac{1}{e} \\left(-\\frac{1}{2}\\right) = -\\frac{1}{2e}$."
    },
    {
      id: 5,
      question: "Giá trị lớn nhất của hàm số $y = (x-2)^2 e^x$ trên đoạn $[1; 3]$ là:",
      options: [
        "$e^3$",
        "$0$",
        "$e^4$",
        "$e$"
      ],
      correctAnswerIndex: 0,
      solution: "$y' = 2(x-2)e^x + (x-2)^2 e^x = (x-2)(x)e^x = 0 \\Leftrightarrow x = 2 \\in [1; 3]$. Ta có $y(1) = e, y(2) = 0, y(3) = (1)^2 e^3 = e^3$. Vậy $\\max = e^3$."
    },
    {
      id: 6,
      question: "Cho hàm số $y = f(x)$ thỏa mãn: $\\lim_{x \\to 2^+} f(x) = 1, \\lim_{x \\to 2^-} f(x) = 1, \\lim_{x \\to -\\infty} f(x) = 2$ và $\\lim_{x \\to +\\infty} f(x) = 2$. Khẳng định nào sau đây là đúng?",
      options: [
        "Đường thẳng $y = 2$ là tiệm cận ngang của đồ thị hàm số.",
        "Đường thẳng $x = 2$ là tiệm cận đứng của đồ thị hàm số.",
        "Đường thẳng $y = 1$ là tiệm cận ngang của đồ thị hàm số.",
        "Đường thẳng $x = 2$ là tiệm cận ngang của đồ thị hàm số."
      ],
      correctAnswerIndex: 0,
      solution: "Vì $\\lim_{x \\to \\pm\\infty} f(x) = 2$ nên đường thẳng $y = 2$ là tiệm cận ngang. Giới hạn tại $x \\to 2$ là hữu hạn ($=1$) nên $x = 2$ không là tiệm cận đứng."
    },
    {
      id: 7,
      question: "Tiệm cận xiên của đồ thị hàm số $y = \\frac{x^2 + 2x - 2}{x + 2}$ là:",
      options: [
        "$y = x$",
        "$y = -2$",
        "$y = 1$",
        "$y = x + 2$"
      ],
      correctAnswerIndex: 0,
      solution: "$\\frac{x^2+2x-2}{x+2} = x - \\frac{2}{x+2}$. Vì $\\lim_{x \\to \\pm\\infty} (y - x) = 0$, nên tiệm cận xiên là $y = x$."
    },
    {
      id: 8,
      question: "Cho hàm số $y = f(x)$ có bảng biến thiên: $\\lim_{x \\to -\\infty} = 1, \\lim_{x \\to +\\infty} = -1, \\lim_{x \\to 1^+} = 7, \\lim_{x \\to 1^-} = -1, \\lim_{x \\to 3^+} = +\\infty$. Khẳng định nào sau đây là SAI?",
      options: [
        "Đường thẳng $x = 1$ là tiệm cận đứng của đồ thị hàm số.",
        "Đường thẳng $y = 1$ là tiệm cận ngang của đồ thị hàm số.",
        "Đường thẳng $y = -1$ là tiệm cận ngang của đồ thị hàm số.",
        "Đường thẳng $x = 3$ là tiệm cận đứng của đồ thị hàm số."
      ],
      correctAnswerIndex: 0,
      solution: "Tại $x = 1$, cả hai giới hạn trái và phải đều hữu hạn ($-1$ và $7$), không tiến ra vô cùng nên $x = 1$ KHÔNG phải tiệm cận đứng. Do đó khẳng định $x = 1$ là tiệm cận đứng là sai."
    },
    {
      id: 9,
      question: "Đồ thị hàm số $y = \\frac{2x+1}{x+1}$ có tiệm cận đứng $x = -1$ và tiệm cận ngang $y = 2$. Đồ thị đi qua điểm nào sau đây?",
      options: [
        "$(0; 1)$ và $(-1/2; 0)$",
        "$(1; 2)$",
        "$(0; 2)$",
        "$(1; 0)$"
      ],
      correctAnswerIndex: 0,
      solution: "Cho $x = 0 \\Rightarrow y = 1$ (giao $Oy$ tại $(0; 1)$). Cho $y = 0 \\Rightarrow x = -1/2$ (giao $Ox$ tại $(-1/2; 0)$)."
    },
    {
      id: 10,
      question: "Đồ thị hàm số $y = \\frac{x^2+x+1}{x+1}$ có dạng tiệm cận xiên là $y = x$ và tiệm cận đứng $x = -1$. Cực đại và cực tiểu của hàm số lần lượt là:",
      options: [
        "$y_{CĐ} = -3$ tại $x = -2$ và $y_{CT} = 1$ tại $x = 0$",
        "$y_{CĐ} = 1$ và $y_{CT} = -3$",
        "$y_{CĐ} = 3$ và $y_{CT} = -1$",
        "Không có cực trị"
      ],
      correctAnswerIndex: 0,
      solution: "$y' = 1 - \\frac{1}{(x+1)^2} = 0 \\Leftrightarrow x = 0$ (cho $y=1$) hoặc $x = -2$ (cho $y=-3$). Do $y(-2) = -3$ là cực đại và $y(0) = 1$ là cực tiểu."
    },
    {
      id: 11,
      question: "Tìm giá trị lớn nhất của hàm số $y = \\sqrt{2 - x^2}$.",
      options: [
        "$\\sqrt{2}$",
        "$2$",
        "$0$",
        "$1$"
      ],
      correctAnswerIndex: 0,
      solution: "$2 - x^2 \\le 2 \\Rightarrow y = \\sqrt{2-x^2} \\le \\sqrt{2}$. Đạt tại $x = 0$."
    },
    {
      id: 12,
      question: "Tìm giá trị nhỏ nhất của hàm số $y = \\frac{2x+1}{3x-2}$ trên nửa khoảng $[2; +\\infty)$.",
      options: [
        "Không tồn tại GTNN",
        "$5/4$",
        "$2/3$",
        "$1$"
      ],
      correctAnswerIndex: 0,
      solution: "$y' = \\frac{-7}{(3x-2)^2} < 0$ (hàm giảm). Khi $x \\to +\\infty, y \\to 2/3$. Do không đạt được dấu bằng tại $2/3$ nên trên $[2; +\\infty)$ hàm số không có giá trị nhỏ nhất (chỉ có GTLN là $y(2) = 5/4$)."
    },
    {
      id: 13,
      question: "Số đường tiệm cận của đồ thị hàm số $y = \\frac{3x-2}{x+1}$ là:",
      options: [
        "$2$",
        "$1$",
        "$3$",
        "$0$"
      ],
      correctAnswerIndex: 0,
      solution: "Tiệm cận đứng $x = -1$, tiệm cận ngang $y = 3$. Tổng số đường tiệm cận là 2."
    },
    {
      id: 14,
      question: "Hàm số $y = x^3 - 3x^2 + 3x - 1$ có bao nhiêu điểm cực trị?",
      options: [
        "$0$",
        "$1$",
        "$2$",
        "$3$"
      ],
      correctAnswerIndex: 0,
      solution: "$y = (x-1)^3 \\Rightarrow y' = 3(x-1)^2 \\ge 0, \\forall x$. Đạo hàm không đổi dấu nên hàm số không có cực trị."
    },
    {
      id: 15,
      question: "Hàm số $y = x^4 - 2x^2 - 1$ đồng biến trên các khoảng nào?",
      options: [
        "$(-1; 0)$ và $(1; +\\infty)$",
        "$(-\\infty; -1)$ và $(0; 1)$",
        "$(0; +\\infty)$",
        "$(-\\infty; -1)$ và $(1; +\\infty)$"
      ],
      correctAnswerIndex: 0,
      solution: "$y' = 4x(x^2 - 1) > 0 \\Leftrightarrow x \\in (-1; 0) \\cup (1; +\\infty)$."
    }
  ],
  // Bộ 2: Bài toán thực tiễn & Vận dụng cuối Chương I
  [
    {
      id: 1,
      question: "Một đường dây điện được nối từ nhà máy $A$ đến một hòn đảo ở $C$. Khoảng cách từ $C$ đến bờ biển $B$ là $4\\text{ km}$, khoảng cách $AB = 10\\text{ km}$. Chi phí lắp đặt trên biển là 50 triệu/km, trên đất liền là 30 triệu/km. Vị trí điểm $M$ trên $AB$ để tổng chi phí nhỏ nhất là:",
      options: ["$BM = 3\\text{ km}$", "$BM = 4\\text{ km}$", "$BM = 5\\text{ km}$", "$BM = 2\\text{ km}$"],
      correctAnswerIndex: 0,
      solution: "Đặt $BM = x$ ($0 \\le x \\le 10$). Chi phí $C(x) = 50\\sqrt{x^2+16} + 30(10-x)$. $C'(x) = \\frac{50x}{\\sqrt{x^2+16}} - 30 = 0 \\Leftrightarrow 5x = 3\\sqrt{x^2+16} \\Leftrightarrow 16x^2 = 144 \\Leftrightarrow x = 3\\text{ km}$."
    },
    {
      id: 2,
      question: "Dân số một quốc gia kể từ năm 2023 được ước tính bởi $N(t) = 100e^{0,012t}$ (triệu người, $0 \\le t \\le 50$). Ước tính dân số vào năm 2030 ($t = 7$) xấp xỉ bằng:",
      options: ["$108,76\\text{ triệu người}$", "$105,42\\text{ triệu người}$", "$112,30\\text{ triệu người}$", "$100,84\\text{ triệu người}$"],
      correctAnswerIndex: 0,
      solution: "$N(7) = 100e^{0,012 \\times 7} = 100e^{0,084} \\approx 108,76$ triệu người."
    },
    {
      id: 3,
      question: "Dân số quốc gia đó vào năm 2035 ($t = 12$) xấp xỉ bằng:",
      options: ["$115,49\\text{ triệu người}$", "$110,25\\text{ triệu người}$", "$118,50\\text{ triệu người}$", "$120,00\\text{ triệu người}$"],
      correctAnswerIndex: 0,
      solution: "$N(12) = 100e^{0,012 \\times 12} = 100e^{0,144} \\approx 115,49$ triệu người."
    },
    {
      id: 4,
      question: "Xét thấu kính hội tụ tiêu cự $f$. Khoảng cách vật $p$ và ảnh $q$ thỏa mãn $\\frac{1}{p} + \\frac{1}{q} = \\frac{1}{f}$. Khi vật tiến rất gần tiêu cự từ bên phải ($p \\to f^+$), khoảng cách ảnh $q$ sẽ:",
      options: ["Tiến ra $+\\infty$", "Tiến về $0$", "Tiến về tiêu cự $f$", "Tiến về $2f$"],
      correctAnswerIndex: 0,
      solution: "$q = \\frac{pf}{p-f}$. Khi $p \\to f^+$, mẫu số $p - f \\to 0^+$ nên $q \\to +\\infty$."
    },
    {
      id: 5,
      question: "Tìm các khoảng đơn điệu của hàm số $y = -x^3 + 6x^2 - 9x + 12$.",
      options: [
        "Đồng biến trên $(1; 3)$, nghịch biến trên $(-\\infty; 1)$ và $(3; +\\infty)$",
        "Nghịch biến trên $(1; 3)$, đồng biến trên $(-\\infty; 1)$ và $(3; +\\infty)$",
        "Đồng biến trên $\\mathbb{R}$",
        "Nghịch biến trên $\\mathbb{R}$"
      ],
      correctAnswerIndex: 0,
      solution: "$y' = -3x^2 + 12x - 9 = -3(x-1)(x-3)$. $y' > 0 \\Leftrightarrow 1 < x < 3$ (đồng biến). $y' < 0$ ngoài khoảng (nghịch biến)."
    },
    {
      id: 6,
      question: "Cho hàm số $y = \\frac{x^2-2x}{x-1}$. Điểm cực đại và cực tiểu của hàm số lần lượt là:",
      options: [
        "$x_{CĐ} = 0, x_{CT} = 2$",
        "$x_{CĐ} = 2, x_{CT} = 0$",
        "$x_{CĐ} = 1, x_{CT} = -1$",
        "Hàm số không có cực trị"
      ],
      correctAnswerIndex: 0,
      solution: "$y' = \\frac{(2x-2)(x-1) - (x^2-2x)}{(x-1)^2} = \\frac{x^2-2x+2-2}{(x-1)^2} = \\frac{x(x-2)}{(x-1)^2} = 0 \\Leftrightarrow x = 0, x = 2$. $x = 0$ là điểm cực đại ($y=0$), $x = 2$ là điểm cực tiểu ($y=0$)."
    },
    {
      id: 7,
      question: "Tiệm cận xiên của hàm số $y = \\frac{x^2 - 2x}{x - 1}$ là đường thẳng:",
      options: [
        "$y = x - 1$",
        "$y = x + 1$",
        "$y = x$",
        "$y = 2x - 1$"
      ],
      correctAnswerIndex: 0,
      solution: "$\\frac{x^2-2x}{x-1} = x - 1 - \\frac{1}{x-1} \\Rightarrow$ tiệm cận xiên là $y = x - 1$."
    },
    {
      id: 8,
      question: "Cho hàm số $y = \\frac{x^2+2x+2}{x+1}$. Tâm đối xứng của đồ thị là:",
      options: [
        "$I(-1; 0)$",
        "$I(-1; 1)$",
        "$I(1; 2)$",
        "$I(0; 2)$"
      ],
      correctAnswerIndex: 0,
      solution: "TC đứng $x = -1$. $y = x + 1 + \\frac{1}{x+1} \\Rightarrow$ TC xiên $y = x + 1$. Thay $x = -1 \\Rightarrow y = 0$. Tâm đối xứng là $I(-1; 0)$."
    },
    {
      id: 9,
      question: "Số giao điểm của đồ thị hàm số $y = x^4 - 2x^2 - 1$ với trục hoành là:",
      options: [
        "$2$",
        "$4$",
        "$0$",
        "$3$"
      ],
      correctAnswerIndex: 0,
      solution: "Đặt $t = x^2 \\ge 0$. $t^2 - 2t - 1 = 0 \\Leftrightarrow t = 1 + \\sqrt{2} > 0$ hoặc $t = 1 - \\sqrt{2} < 0$ (loại). $x^2 = 1 + \\sqrt{2} \\Rightarrow x = \\pm \\sqrt{1+\\sqrt{2}}$ (2 nghiệm)."
    },
    {
      id: 10,
      question: "Tìm giá trị lớn nhất $M$ và nhỏ nhất $m$ của hàm số $y = x^3 - 3x^2 + 3x - 1$ trên $[-1; 2]$.",
      options: [
        "$M = 1, m = -8$",
        "$M = 8, m = -1$",
        "$M = 1, m = 0$",
        "$M = 0, m = -8$"
      ],
      correctAnswerIndex: 0,
      solution: "$y = (x-1)^3$ là hàm đồng biến trên $\\mathbb{R}$. $y(-1) = (-2)^3 = -8, y(2) = 1^3 = 1$. Vậy $M = 1, m = -8$."
    },
    {
      id: 11,
      question: "Tiệm cận đứng và tiệm cận ngang của đồ thị hàm số $y = \\frac{2x-1}{3x+1}$ lần lượt là:",
      options: [
        "$x = -1/3$ và $y = 2/3$",
        "$x = 1/3$ và $y = 2/3$",
        "$x = -1/3$ và $y = -1$",
        "$x = 2/3$ và $y = -1/3$"
      ],
      correctAnswerIndex: 0,
      solution: "TC đứng: $3x + 1 = 0 \\Leftrightarrow x = -1/3$. TC ngang: $y = 2/3$."
    },
    {
      id: 12,
      question: "Một công ty dự tính chi phí sản xuất $x$ đơn vị sản phẩm là $C(x) = 100 + 5x + 0,01x^2$. Mức sản lượng để chi phí trung bình $\\bar{C}(x) = \\frac{C(x)}{x}$ nhỏ nhất là:",
      options: [
        "$x = 100$",
        "$x = 50$",
        "$x = 200$",
        "$x = 150$"
      ],
      correctAnswerIndex: 0,
      solution: "$\\bar{C}(x) = \\frac{100}{x} + 5 + 0,01x \\ge 5 + 2\\sqrt{\\frac{100}{x} \\cdot 0,01x} = 5 + 2(1) = 7$. Đạt min khi $\\frac{100}{x} = 0,01x \\Leftrightarrow x^2 = 10000 \\Leftrightarrow x = 100$."
    },
    {
      id: 13,
      question: "Chi phí trung bình nhỏ nhất ở câu 12 bằng:",
      options: [
        "$7$",
        "$5$",
        "$10$",
        "$6$"
      ],
      correctAnswerIndex: 0,
      solution: "$\\bar{C}(100) = \\frac{100}{100} + 5 + 0,01(100) = 1 + 5 + 1 = 7$."
    },
    {
      id: 14,
      question: "Tìm $m$ để hàm số $y = x^3 - 3mx^2 + 3(m^2-1)x$ có hai điểm cực trị thỏa mãn $x_1 x_2 = 3$.",
      options: [
        "$m = \\pm 2$",
        "$m = 2$",
        "$m = \\pm 1$",
        "$m = 4$"
      ],
      correctAnswerIndex: 0,
      solution: "$y' = 3x^2 - 6mx + 3(m^2-1) = 0 \\Leftrightarrow x^2 - 2mx + m^2 - 1 = 0$. $\\Delta' = 1 > 0$ (luôn có 2 nghiệm $m-1, m+1$). $x_1 x_2 = m^2 - 1 = 3 \\Leftrightarrow m^2 = 4 \\Leftrightarrow m = \\pm 2$."
    },
    {
      id: 15,
      question: "Đồ thị hàm số $y = \\frac{x^2+2x-1}{2x-1}$ có tiệm cận xiên là:",
      options: [
        "$y = \\frac{1}{2}x + \\frac{5}{4}$",
        "$y = \\frac{1}{2}x + 1$",
        "$y = x + 1$",
        "$y = \\frac{1}{2}x - \\frac{1}{4}$"
      ],
      correctAnswerIndex: 0,
      solution: "Chia $x^2+2x-1$ cho $2x-1$: thương là $\\frac{1}{2}x + \\frac{5}{4}$, dư $\\frac{1}{4}$. Tiệm cận xiên là $y = \\frac{1}{2}x + \\frac{5}{4}$."
    }
  ],
  // Bộ 3: Tối ưu & Vận dụng thực tế cao cấp
  [
    {
      id: 1,
      question: "Một ngọn hải đăng đặt tại điểm $A$ cách bờ biển $B$ thẳng hàng $5\\text{ km}$. Người gác hải đăng muốn chèo thuyền đến điểm $M$ trên bờ rồi đi xe đạp đến trạm $C$ cách $B$ $12\\text{ km}$. Vận tốc chèo thuyền $4\\text{ km/h}$, vận tốc xe đạp $10\\text{ km/h}$. Vị trí $M$ để thời gian di chuyển ít nhất cách $B$ bao xa?",
      options: ["$\\frac{10}{\\sqrt{21}}\\text{ km} \\approx 2,18\\text{ km}$", "$3\\text{ km}$", "$2\\text{ km}$", "$4\\text{ km}$"],
      correctAnswerIndex: 0,
      solution: "Thời gian $t(x) = \\frac{\\sqrt{x^2+25}}{4} + \\frac{12-x}{10}$. $t'(x) = \\frac{x}{4\\sqrt{x^2+25}} - \\frac{1}{10} = 0 \\Leftrightarrow 10x = 4\\sqrt{x^2+25} \\Leftrightarrow 5x = 2\\sqrt{x^2+25} \\Leftrightarrow 25x^2 = 4x^2 + 100 \\Leftrightarrow 21x^2 = 100 \\Leftrightarrow x = \\frac{10}{\\sqrt{21}}$ km."
    },
    {
      id: 2,
      question: "Một mảnh đất hình chữ nhật có diện tích $600\\text{ m}^2$ được bao quanh bởi lối đi lát gạch rộng $1\\text{ m}$ ở hai cạnh dài và rộng $1,5\\text{ m}$ ở hai cạnh ngắn. Kích thước mảnh đất để tổng diện tích kể cả lối đi là nhỏ nhất là:",
      options: ["$20\\text{ m} \\times 30\\text{ m}$", "$15\\text{ m} \\times 40\\text{ m}$", "$25\\text{ m} \\times 24\\text{ m}$", "$10\\text{ m} \\times 60\\text{ m}$"],
      correctAnswerIndex: 0,
      solution: "Gọi cạnh dài $x$, rộng $y = 600/x$. Tổng diện tích $(x + 3)(y + 2) = (x + 3)(600/x + 2) = 606 + 2x + \\frac{1800}{x}$. Đạt min khi $2x = 1800/x \\Leftrightarrow x = 30\\text{ m} \\Rightarrow y = 20\\text{ m}$."
    },
    {
      id: 3,
      question: "Cho hàm số $y = \\frac{x^2-3x+m}{x-1}$. Tìm $m$ để đồ thị có cực đại và cực tiểu nằm về hai phía của trục hoành $Ox$.",
      options: ["$m < 2$ và $m \\neq 1$", "$m > 2$", "$1 < m < 2$", "$m \\le 2$"],
      correctAnswerIndex: 0,
      solution: "$y' = \\frac{x^2-2x+3-m}{(x-1)^2}$. Có 2 cực trị $\\Leftrightarrow \\Delta' = 1 - (3-m) = m-2 > 0 \\Leftrightarrow m > 2$. Khi $m > 2$, tích 2 giá trị cực trị $y_1 y_2 = 4(3-m) < 0$ nên 2 cực trị luôn nằm về 2 phía của trục hoành."
    },
    {
      id: 4,
      question: "Biết đồ thị hàm số $y = ax^3 + bx^2 + cx + d$ có hai điểm cực trị là $(0; 3)$ và $(2; -1)$. Giá trị của $a + b + c + d$ bằng:",
      options: ["$1$", "$2$", "$0$", "$3$"],
      correctAnswerIndex: 0,
      solution: "$d = 3, c = 0$. $y' = 3ax^2 + 2bx$. $y'(2) = 12a + 4b = 0 \\Rightarrow b = -3a$. $y(2) = 8a + 4b + 3 = 8a - 12a + 3 = -1 \\Rightarrow -4a = -4 \\Rightarrow a = 1, b = -3$. Khi đó $a+b+c+d = 1 - 3 + 0 + 3 = 1$."
    },
    {
      id: 5,
      question: "Một công ty sản xuất bóng đèn có hàm chi phí $C(x) = 5000 + 6x + 0,002x^2$. Nếu bán mỗi bóng đèn với giá $14$ nghìn đồng, thì lợi nhuận tối đa đạt được khi bán bao nhiêu bóng?",
      options: ["$2000\\text{ bóng}$", "$1500\\text{ bóng}$", "$2500\\text{ bóng}$", "$1000\\text{ bóng}$"],
      correctAnswerIndex: 0,
      solution: "Lợi nhuận $P(x) = 14x - (5000 + 6x + 0,002x^2) = -0,002x^2 + 8x - 5000$. $P'(x) = -0,004x + 8 = 0 \\Leftrightarrow x = 8 / 0,004 = 2000$ bóng."
    },
    {
      id: 6,
      question: "Lợi nhuận tối đa của công ty bóng đèn ở câu 5 là:",
      options: ["$3000\\text{ nghìn đồng}$", "$4000\\text{ nghìn đồng}$", "$2500\\text{ nghìn đồng}$", "$5000\\text{ nghìn đồng}$"],
      correctAnswerIndex: 0,
      solution: "$P(2000) = -0,002(4\\,000\\,000) + 8(2000) - 5000 = -8000 + 16000 - 5000 = 3000$ nghìn đồng."
    },
    {
      id: 7,
      question: "Tìm tất cả các tiệm cận của đồ thị hàm số $y = \\frac{2x^2 - 3x + 1}{x^2 - 1}$.",
      options: [
        "TC đứng $x = -1$, TC ngang $y = 2$",
        "TC đứng $x = 1, x = -1$, TC ngang $y = 2$",
        "TC đứng $x = 1$, TC ngang $y = 1$",
        "TC xiên $y = 2x$"
      ],
      correctAnswerIndex: 0,
      solution: "$y = \\frac{(x-1)(2x-1)}{(x-1)(x+1)} = \\frac{2x-1}{x+1}$ (với $x \\neq 1$). Tại $x = 1$ giới hạn bằng $1/2$. TC đứng là $x = -1$. TC ngang là $y = 2$."
    },
    {
      id: 8,
      question: "Khoảng cách giữa hai điểm cực trị của đồ thị hàm số $y = \\frac{x^2+2x+2}{x+1}$ là:",
      options: ["$2\\sqrt{5}$", "$4$", "$\\sqrt{5}$", "$2\\sqrt{2}$"],
      correctAnswerIndex: 0,
      solution: "Hai điểm cực trị là $A(0; 2)$ và $B(-2; -2)$. $AB = \\sqrt{(-2-0)^2 + (-2-2)^2} = \\sqrt{4 + 16} = \\sqrt{20} = 2\\sqrt{5}$."
    },
    {
      id: 9,
      question: "Cho hàm số $y = f(x)$ có bảng xét dấu đạo hàm: $f'(x) > 0$ trên $(-\\infty; -2) \\cup (0; 2)$, $f'(x) < 0$ trên $(-2; 0) \\cup (2; +\\infty)$. Số điểm cực đại của hàm số là:",
      options: ["$2$", "$1$", "$3$", "$0$"],
      correctAnswerIndex: 0,
      solution: "$f'(x)$ đổi dấu từ $+$ sang $-$ tại 2 điểm $x = -2$ và $x = 2$, do đó hàm số có 2 điểm cực đại."
    },
    {
      id: 10,
      question: "Đồ thị hàm số $y = \\frac{x^2 - 4x + 3}{x - 2}$ có tâm đối xứng là:",
      options: ["$I(2; 0)$", "$I(2; 1)$", "$I(1; 2)$", "$I(0; 2)$"],
      correctAnswerIndex: 0,
      solution: "TC đứng $x = 2$. $y = x - 2 - \\frac{1}{x-2} \\Rightarrow$ TC xiên $y = x - 2$. Thay $x = 2 \\Rightarrow y = 0$. Tâm đối xứng $I(2; 0)$."
    },
    {
      id: 11,
      question: "Tìm $m$ để hàm số $y = x^3 - 3x^2 + mx - 2$ đồng biến trên $(2; +\\infty)$.",
      options: ["$m \\ge 3$", "$m \\le 3$", "$m > 0$", "$m \\ge 0$"],
      correctAnswerIndex: 0,
      solution: "$y' = 3x^2 - 6x + m \\ge 0, \\forall x > 2 \\Leftrightarrow m \\ge -3x^2 + 6x, \\forall x > 2$. Xét $g(x) = -3x^2 + 6x$ trên $[2; +\\infty)$, $\\max g(x) = g(2) = 0$. Do đó $m \\ge 0$."
    },
    {
      id: 12,
      question: "Một hình trụ có thể tích $V = 54\\pi\\text{ cm}^3$. Chiều cao $h$ của hình trụ để diện tích toàn phần nhỏ nhất là:",
      options: ["$6\\text{ cm}$", "$3\\text{ cm}$", "$9\\text{ cm}$", "$4\\text{ cm}$"],
      correctAnswerIndex: 0,
      solution: "Ta có $h = 2r$. $V = \\pi r^2 h = 2\\pi r^3 = 54\\pi \\Rightarrow r^3 = 27 \\Rightarrow r = 3\\text{ cm} \\Rightarrow h = 2(3) = 6\\text{ cm}$."
    },
    {
      id: 13,
      question: "Giá trị nhỏ nhất của hàm số $y = 2x + \\frac{18}{x}$ với $x > 0$ bằng:",
      options: ["$12$", "$18$", "$6$", "$9$"],
      correctAnswerIndex: 0,
      solution: "Theo Cauchy: $2x + \\frac{18}{x} \\ge 2\\sqrt{2x \\cdot \\frac{18}{x}} = 2\\sqrt{36} = 12$. Dấu '=' khi $2x = 18/x \\Leftrightarrow x = 3$."
    },
    {
      id: 14,
      question: "Cho hàm số $y = \\frac{ax+b}{cx+d}$ có đồ thị nhận $I(1; 2)$ làm tâm đối xứng và cắt $Oy$ tại $(0; -1)$. Phương trình của hàm số là:",
      options: ["$y = \\frac{2x+1}{x-1}$", "$y = \\frac{2x-1}{x-1}$", "$y = \\frac{x+1}{x-1}$", "$y = \\frac{2x+1}{x+1}$"],
      correctAnswerIndex: 0,
      solution: "Tâm $I(1; 2) \\Rightarrow$ TC đứng $x = 1$, TC ngang $y = 2 \\Rightarrow y = \\frac{2x+b}{x-1}$. Cắt $Oy$ tại $(0; -1) \\Rightarrow -1 = \\frac{b}{-1} \\Rightarrow b = 1$. Vậy $y = \\frac{2x+1}{x-1}$."
    },
    {
      id: 15,
      question: "Số nghiệm của phương trình $x^3 - 3x^2 + 2 = 0$ là:",
      options: ["$3$", "$1$", "$2$", "$0$"],
      correctAnswerIndex: 0,
      solution: "$x^3 - 3x^2 + 2 = (x-1)(x^2 - 2x - 2) = 0 \\Leftrightarrow x = 1, x = 1 \\pm \\sqrt{3}$. Có 3 nghiệm thực phân biệt."
    }
  ]
];
