import { Question } from './types';

export const lesson5Sets: Question[][] = [
  // Bộ 1: Cơ bản & Ý nghĩa đạo hàm trong vật lí, sinh học, kinh tế
  [
    {
      id: 1,
      question: "Nếu phương trình chuyển động của một vật là $s = s(t)$ thì vận tốc tức thời $v(t)$ và gia tốc tức thời $a(t)$ tại thời điểm $t$ được xác định bởi:",
      options: ["$v(t) = s'(t)$ và $a(t) = v'(t) = s''(t)$", "$v(t) = s(t) / t$ và $a(t) = v(t) / t$", "$v(t) = s''(t)$ và $a(t) = s'(t)$", "$v(t) = \\int s(t) dt$"],
      correctAnswerIndex: 0,
      solution: "Theo ý nghĩa cơ học của đạo hàm: Vận tốc tức thời là đạo hàm bậc nhất của quãng đường $v(t) = s'(t)$, gia tốc tức thời là đạo hàm bậc nhất của vận tốc $a(t) = v'(t) = s''(t)$."
    },
    {
      id: 2,
      question: "Một vật chuyển động thẳng với phương trình $s(t) = t^3 - 6t^2 + 9t + 2$ ($t \\ge 0$, giây, mét). Vận tốc của vật tại thời điểm $t = 2\\text{ s}$ bằng:",
      options: ["$-3\\text{ m/s}$", "$3\\text{ m/s}$", "$0\\text{ m/s}$", "$5\\text{ m/s}$"],
      correctAnswerIndex: 0,
      solution: "$v(t) = s'(t) = 3t^2 - 12t + 9$. Tại $t = 2$: $v(2) = 3(4) - 12(2) + 9 = 12 - 24 + 9 = -3\\text{ m/s}$."
    },
    {
      id: 3,
      question: "Gia tốc của vật trong câu 2 tại thời điểm $t = 2\\text{ s}$ bằng:",
      options: ["$0\\text{ m/s}^2$", "$6\\text{ m/s}^2$", "$-6\\text{ m/s}^2$", "$12\\text{ m/s}^2$"],
      correctAnswerIndex: 0,
      solution: "$a(t) = v'(t) = 6t - 12$. Tại $t = 2$: $a(2) = 6(2) - 12 = 0\\text{ m/s}^2$."
    },
    {
      id: 4,
      question: "Trong kinh tế học, nếu $C(x)$ là tổng chi phí sản xuất $x$ đơn vị sản phẩm thì chi phí biên $C'(x)$ thể hiện:",
      options: ["Chi phí xấp xỉ để sản xuất thêm một đơn vị sản phẩm thứ $x + 1$", "Tổng chi phí trung bình", "Doanh thu biên", "Lợi nhuận gộp"],
      correctAnswerIndex: 0,
      solution: "Định nghĩa chi phí biên $C'(x)$: là tốc độ thay đổi tức thời của chi phí, xấp xỉ bằng chi phí để sản xuất thêm đơn vị sản phẩm tiếp theo ($x + 1$)."
    },
    {
      id: 5,
      question: "Giả sử hàm chi phí sản xuất $x$ sản phẩm là $C(x) = 500 + 20x + 0,1x^2$ (nghìn đồng). Chi phí biên tại $x = 100$ bằng:",
      options: ["$40\\text{ nghìn đồng}$", "$20\\text{ nghìn đồng}$", "$500\\text{ nghìn đồng}$", "$30\\text{ nghìn đồng}$"],
      correctAnswerIndex: 0,
      solution: "$C'(x) = 20 + 0,2x$. Tại $x = 100$: $C'(100) = 20 + 0,2(100) = 40$ nghìn đồng."
    },
    {
      id: 6,
      question: "Nếu $R(x)$ là doanh thu và $C(x)$ là chi phí sản xuất $x$ sản phẩm thì hàm lợi nhuận $P(x)$ được tính bởi:",
      options: ["$P(x) = R(x) - C(x)$", "$P(x) = R(x) + C(x)$", "$P(x) = R(x) \\cdot C(x)$", "$P(x) = R(x) / C(x)$"],
      correctAnswerIndex: 0,
      solution: "Lợi nhuận = Doanh thu - Chi phí: $P(x) = R(x) - C(x)$."
    },
    {
      id: 7,
      question: "Một vật được phóng thẳng đứng lên trên từ độ cao $2\\text{ m}$ với vận tốc ban đầu $24,5\\text{ m/s}$. Bỏ qua sức cản, độ cao $h(t) = 2 + 24,5t - 4,9t^2$ (m). Sau bao lâu vật đạt độ cao lớn nhất?",
      options: ["$2,5\\text{ giây}$", "$3\\text{ giây}$", "$2\\text{ giây}$", "$5\\text{ giây}$"],
      correctAnswerIndex: 0,
      solution: "Vật đạt độ cao lớn nhất khi vận tốc $v(t) = h'(t) = 24,5 - 9,8t = 0 \\Leftrightarrow t = 24,5 / 9,8 = 2,5$ giây."
    },
    {
      id: 8,
      question: "Độ cao lớn nhất mà vật đạt được trong câu 7 là:",
      options: ["$32,625\\text{ m}$", "$30\\text{ m}$", "$34,5\\text{ m}$", "$28,5\\text{ m}$"],
      correctAnswerIndex: 0,
      solution: "$h(2,5) = 2 + 24,5(2,5) - 4,9(2,5)^2 = 2 + 61,25 - 30,625 = 32,625\\text{ m}$."
    },
    {
      id: 9,
      question: "Một hồ nuôi cá có số lượng cá $P(t)$ tăng trưởng theo thời gian $t$ (tuần) theo hàm $P(t) = \\frac{1000}{1 + 9e^{-0,5t}}$. Tốc độ tăng trưởng cá tức thời được tính bởi:",
      options: ["$P'(t)$", "$P(t) / t$", "$P''(t)$", "$\\lim_{t \\to \\infty} P(t)$"],
      correctAnswerIndex: 0,
      solution: "Tốc độ tăng trưởng tức thời của một đại lượng là đạo hàm bậc nhất của đại lượng đó theo thời gian: $P'(t)$."
    },
    {
      id: 10,
      question: "Khi $t \\to +\\infty$, số lượng cá trong hồ ở câu 9 sẽ đạt đến giới hạn sức chứa tối đa là:",
      options: ["$1000\\text{ con}$", "$900\\text{ con}$", "$100\\text{ con}$", "Vô hạn"],
      correctAnswerIndex: 0,
      solution: "Khi $t \\to +\\infty$, $e^{-0,5t} \\to 0$, do đó $\\lim_{t \\to +\\infty} P(t) = \\frac{1000}{1 + 0} = 1000$ con."
    },
    {
      id: 11,
      question: "Một đơn vị sản xuất bán $x$ sản phẩm với giá bán mỗi sản phẩm $p(x) = 100 - 0,02x$ (nghìn đồng). Hàm tổng doanh thu $R(x)$ là:",
      options: ["$R(x) = 100x - 0,02x^2$", "$R(x) = 100 - 0,02x$", "$R(x) = 100x - 0,02$", "$R(x) = (100 - 0,02x) / x$"],
      correctAnswerIndex: 0,
      solution: "Tổng doanh thu = Số lượng $\\times$ Giá bán: $R(x) = x \\cdot p(x) = x(100 - 0,02x) = 100x - 0,02x^2$."
    },
    {
      id: 12,
      question: "Doanh thu biên của đơn vị sản xuất ở câu 11 là:",
      options: ["$R'(x) = 100 - 0,04x$", "$R'(x) = 100 - 0,02x$", "$R'(x) = -0,04x$", "$R'(x) = 100$"],
      correctAnswerIndex: 0,
      solution: "$R'(x) = (100x - 0,02x^2)' = 100 - 0,04x$."
    },
    {
      id: 13,
      question: "Số lượng sản phẩm $x$ bán ra để tổng doanh thu ở câu 11 đạt cực đại là:",
      options: ["$2500$", "$5000$", "$2000$", "$3000$"],
      correctAnswerIndex: 0,
      solution: "$R'(x) = 100 - 0,04x = 0 \\Leftrightarrow x = 100 / 0,04 = 2500$ sản phẩm."
    },
    {
      id: 14,
      question: "Nồng độ thuốc $C(t)$ (mg/ml) trong máu sau khi tiêm $t$ giờ là $C(t) = \\frac{2t}{t^2 + 1}$. Nồng độ thuốc cao nhất đạt được sau khi tiêm:",
      options: ["$1\\text{ giờ}$", "$2\\text{ giờ}$", "$0,5\\text{ giờ}$", "$1,5\\text{ giờ}$"],
      correctAnswerIndex: 0,
      solution: "$C'(t) = \\frac{2(1-t^2)}{(t^2+1)^2} = 0 \\Leftrightarrow t = 1$ giờ. Nồng độ đạt cực đại tại $t = 1$."
    },
    {
      id: 15,
      question: "Nồng độ thuốc cao nhất trong câu 14 bằng:",
      options: ["$1\\text{ mg/ml}$", "$2\\text{ mg/ml}$", "$0,5\\text{ mg/ml}$", "$1,5\\text{ mg/ml}$"],
      correctAnswerIndex: 0,
      solution: "$C(1) = \\frac{2(1)}{1^2 + 1} = 1\\text{ mg/ml}$."
    }
  ],
  // Bộ 2: Bài toán tối ưu thực tiễn kinh tế & kỹ thuật
  [
    {
      id: 1,
      question: "Một sân vận động có sức chứa 55 000 khán giả. Giá vé ban đầu là 100 nghìn đồng thì trung bình có 27 000 người mua. Nếu cứ giảm 10 nghìn đồng thì có thêm 3000 người mua. Ban tổ chức nên đặt giá vé bao nhiêu để doanh thu cao nhất?",
      options: ["$95\\text{ nghìn đồng}$", "$90\\text{ nghìn đồng}$", "$85\\text{ nghìn đồng}$", "$100\\text{ nghìn đồng}$"],
      correctAnswerIndex: 0,
      solution: "Gọi $p$ là giá vé (nghìn đồng). Số lượng khán giả $x = -300p + 57000$. Doanh thu $R(p) = p(-300p + 57000) = -300p^2 + 57000p$. $R'(p) = -600p + 57000 = 0 \\Leftrightarrow p = 95$ nghìn đồng."
    },
    {
      id: 2,
      question: "Doanh thu bán vé lớn nhất đạt được ở câu 1 là:",
      options: ["$2\\,707\\,500\\text{ nghìn đồng}$", "$2\\,700\\,000\\text{ nghìn đồng}$", "$2\\,850\\,000\\text{ nghìn đồng}$", "$2\\,650\\,000\\text{ nghìn đồng}$"],
      correctAnswerIndex: 0,
      solution: "$R(95) = 95 \\times (-300 \\times 95 + 57000) = 95 \\times 28500 = 2\\,707\\,500$ nghìn đồng (2,7075 tỷ đồng)."
    },
    {
      id: 3,
      question: "Một công ty sản xuất máy xay sinh tố có hàm lợi nhuận hàng tháng $P(x) = -0,3x^3 + 36x^2 + 1800x - 48000$ (nghìn đồng, $x$ là số máy xay). Công ty đạt lợi nhuận lớn nhất khi sản xuất bao nhiêu máy?",
      options: ["$100\\text{ chiếc}$", "$120\\text{ chiếc}$", "$80\\text{ chiếc}$", "$150\\text{ chiếc}$"],
      correctAnswerIndex: 0,
      solution: "$P'(x) = -0,9x^2 + 72x + 1800 = 0 \\Leftrightarrow -0,9(x - 100)(x + 20) = 0 \\Rightarrow x = 100$ chiếc máy xay."
    },
    {
      id: 4,
      question: "Lợi nhuận lớn nhất của công ty máy xay sinh tố trong câu 3 là:",
      options: ["$192\\,000\\text{ nghìn đồng}$ (192 triệu)", "$180\\,000\\text{ nghìn đồng}$", "$200\\,000\\text{ nghìn đồng}$", "$150\\,000\\text{ nghìn đồng}$"],
      correctAnswerIndex: 0,
      solution: "$P(100) = -0,3(100)^3 + 36(100)^2 + 1800(100) - 48000 = -300000 + 360000 + 180000 - 48000 = 192\\,000$ nghìn đồng."
    },
    {
      id: 5,
      question: "Anh An chèo thuyền từ điểm $A$ trên bờ một con sông rộng $3\\text{ km}$ muốn đến điểm $B$ ở bờ bên kia, cách $8\\text{ km}$ về phía hạ lưu. Vận tốc chèo thuyền là $6\\text{ km/h}$, vận tốc chạy bộ là $8\\text{ km/h}$. Anh An nên chèo thuyền đến điểm $D$ cách điểm đối diện $C$ bao xa để đến $B$ nhanh nhất?",
      options: ["$\\frac{9}{\\sqrt{7}}\\text{ km} \\approx 3,4\\text{ km}$", "$3\\text{ km}$", "$4\\text{ km}$", "$2,5\\text{ km}$"],
      correctAnswerIndex: 0,
      solution: "Thời gian $t(x) = \\frac{\\sqrt{x^2+9}}{6} + \\frac{8-x}{8}$. $t'(x) = \\frac{x}{6\\sqrt{x^2+9}} - \\frac{1}{8} = 0 \\Leftrightarrow 8x = 6\\sqrt{x^2+9} \\Leftrightarrow 16x^2 = 9(x^2+9) \\Leftrightarrow 7x^2 = 81 \\Leftrightarrow x = \\frac{9}{\\sqrt{7}} \\approx 3,4\\text{ km}$."
    },
    {
      id: 6,
      question: "Một cửa hàng bán tivi ước tính nếu bán với giá 14 triệu đồng thì bán được 1000 chiếc/tuần. Nếu giảm 500 nghìn đồng thì số tivi bán tăng thêm 100 chiếc. Hàm cầu $p(x)$ (triệu đồng) theo số lượng $x$ là:",
      options: ["$p(x) = 19 - 0,005x$", "$p(x) = 14 - 0,5x$", "$p(x) = 14 - 0,005x$", "$p(x) = 20 - 0,01x$"],
      correctAnswerIndex: 0,
      solution: "Độ dốc $a = \\frac{-0,5}{100} = -0,005$. Phương trình: $p - 14 = -0,005(x - 1000) \\Leftrightarrow p(x) = 19 - 0,005x$."
    },
    {
      id: 7,
      question: "Nếu hàm chi phí hàng tuần của cửa hàng bán tivi ở câu 6 là $C(x) = 12000 - 3x$ (triệu đồng), thì để tối đa hóa lợi nhuận cửa hàng nên bán bao nhiêu tivi mỗi tuần?",
      options: ["$2200\\text{ chiếc}$", "$2000\\text{ chiếc}$", "$1800\\text{ chiếc}$", "$2500\\text{ chiếc}$"],
      correctAnswerIndex: 0,
      solution: "Doanh thu $R(x) = x(19 - 0,005x) = 19x - 0,005x^2$. Lợi nhuận $P(x) = R(x) - C(x) = -0,005x^2 + 22x - 12000$. $P'(x) = -0,01x + 22 = 0 \\Leftrightarrow x = 2200$ chiếc."
    },
    {
      id: 8,
      question: "Giá bán mỗi chiếc tivi tối ưu để đạt lợi nhuận lớn nhất ở câu 7 là:",
      options: ["$8\\text{ triệu đồng}$", "$9\\text{ triệu đồng}$", "$10\\text{ triệu đồng}$", "$7,5\\text{ triệu đồng}$"],
      correctAnswerIndex: 0,
      solution: "$p(2200) = 19 - 0,005(2200) = 19 - 11 = 8$ triệu đồng."
    },
    {
      id: 9,
      question: "Một hạt chuyển động trên trục thẳng đứng có tọa độ $y(t) = t^3 - 12t + 3$ ($t \\ge 0$, mét, giây). Quãng đường hạt đi được trong khoảng thời gian từ $t = 0$ đến $t = 3\\text{ s}$ là:",
      options: ["$23\\text{ m}$", "$15\\text{ m}$", "$20\\text{ m}$", "$18\\text{ m}$"],
      correctAnswerIndex: 0,
      solution: "$v(t) = y'(t) = 3t^2 - 12 = 0 \\Leftrightarrow t = 2\\text{ s}$. $y(0) = 3, y(2) = -13, y(3) = -6$. Hạt đi từ $3$ xuống $-13$ ($16\\text{ m}$) rồi từ $-13$ lên $-6$ ($7\\text{ m}$). Tổng quãng đường $S = 16 + 7 = 23\\text{ m}$."
    },
    {
      id: 10,
      question: "Hạt chuyển động giảm tốc (chuyển động chậm dần) khi:",
      options: ["Vận tốc và gia tốc trái dấu: $v(t) \\cdot a(t) < 0$", "$v(t) < 0$", "$a(t) < 0$", "$v(t) > 0$"],
      correctAnswerIndex: 0,
      solution: "Vật chuyển động chậm dần (giảm tốc) khi tích của vận tốc và gia tốc âm ($v(t) \\cdot a(t) < 0$)."
    },
    {
      id: 11,
      question: "Thời gian hạt trong câu 9 giảm tốc là khoảng thời gian nào?",
      options: ["$0 < t < 2\\text{ s}$", "$t > 2\\text{ s}$", "$1 < t < 3\\text{ s}$", "$0 < t < 1\\text{ s}$"],
      correctAnswerIndex: 0,
      solution: "$v(t) = 3t^2 - 12 < 0$ với $0 < t < 2$, và $a(t) = 6t > 0, \\forall t > 0$. Do đó $v(t) \\cdot a(t) < 0 \\Leftrightarrow 0 < t < 2$."
    },
    {
      id: 12,
      question: "Một khu chung cư có 100 căn hộ cho thuê. Nếu giá thuê là 8 triệu/tháng thì tất cả đều được thuê. Cứ tăng 100 nghìn đồng tiền thuê thì có 1 căn bỏ trống. Giá thuê để doanh thu tối đa là:",
      options: ["$9\\text{ triệu đồng/tháng}$", "$8,5\\text{ triệu đồng/tháng}$", "$9,5\\text{ triệu đồng/tháng}$", "$10\\text{ triệu đồng/tháng}$"],
      correctAnswerIndex: 0,
      solution: "Gọi số lần tăng 100 nghìn ($0,1$ triệu) là $x$. Doanh thu $R(x) = (8 + 0,1x)(100 - x) = -0,1x^2 + 2x + 800$. $R'(x) = -0,2x + 2 = 0 \\Leftrightarrow x = 10$. Giá thuê tối ưu: $8 + 0,1(10) = 9$ triệu/tháng."
    },
    {
      id: 13,
      question: "Doanh thu tối đa của khu chung cư trong câu 12 là:",
      options: ["$810\\text{ triệu đồng/tháng}$", "$800\\text{ triệu đồng/tháng}$", "$850\\text{ triệu đồng/tháng}$", "$820\\text{ triệu đồng/tháng}$"],
      correctAnswerIndex: 0,
      solution: "$R(10) = 9 \\times (100 - 10) = 9 \\times 90 = 810$ triệu đồng/tháng."
    },
    {
      id: 14,
      question: "Một công ty cần sản xuất hộp đựng hình trụ có thể tích $V$. Để diện tích toàn phần của hộp nhỏ nhất thì chiều cao $h$ và bán kính đáy $r$ phải thỏa mãn:",
      options: ["$h = 2r$ (chiều cao bằng đường kính đáy)", "$h = r$", "$h = 4r$", "$h = \\pi r$"],
      correctAnswerIndex: 0,
      solution: "Ta đã chứng minh $S = 2\\pi r^2 + \\frac{2V}{r} \\Rightarrow S' = 4\\pi r - \\frac{2\\pi r^2 h}{r^2} = 0 \\Leftrightarrow 4\\pi r = 2\\pi h \\Leftrightarrow h = 2r$."
    },
    {
      id: 15,
      question: "Một người quan sát thấy số lượng vi khuẩn trong đĩa nuôi cấy sau $t$ giờ là $N(t) = 1000 + 300t^2 - 20t^3$ ($0 \\le t \\le 10$). Tốc độ tăng trưởng vi khuẩn đạt lớn nhất tại thời điểm:",
      options: ["$t = 5\\text{ giờ}$", "$t = 10\\text{ giờ}$", "$t = 3\\text{ giờ}$", "$t = 6\\text{ giờ}$"],
      correctAnswerIndex: 0,
      solution: "Tốc độ tăng $v(t) = N'(t) = 600t - 60t^2$. $v'(t) = 600 - 120t = 0 \\Leftrightarrow t = 5$ giờ."
    }
  ],
  // Bộ 3: Bài toán mô hình hóa nâng cao
  [
    {
      id: 1,
      question: "Giả sử số dân của một thị trấn sau $t$ năm kể từ năm 2000 được mô tả bởi $N(t) = \\frac{25t + 10}{t + 5}$ (nghìn người, $t \\ge 0$). Khẳng định nào sau đây là chính xác?",
      options: ["Dân số luôn tăng và không vượt quá ngưỡng $25\\text{ nghìn người}$", "Dân số luôn giảm theo thời gian", "Dân số đạt cực đại sau 5 năm", "Dân số sẽ tăng vô hạn"],
      correctAnswerIndex: 0,
      solution: "$N'(t) = \\frac{25(5) - 10(1)}{(t+5)^2} = \\frac{115}{(t+5)^2} > 0, \\forall t \\ge 0$ (dân số luôn tăng). $\\lim_{t \\to +\\infty} N(t) = 25$ nghìn người."
    },
    {
      id: 2,
      question: "Dân số của thị trấn đó vào năm 2015 ($t = 15$) là:",
      options: ["$19,25\\text{ nghìn người}$ (19 250 người)", "$20\\text{ nghìn người}$", "$18,5\\text{ nghìn người}$", "$22\\text{ nghìn người}$"],
      correctAnswerIndex: 0,
      solution: "$N(15) = \\frac{25(15) + 10}{15 + 5} = \\frac{385}{20} = 19,25$ nghìn người = 19 250 người."
    },
    {
      id: 3,
      question: "Huyết áp tâm thu của một người sau khi dùng thuốc giảm đau được mô tả bởi $P(t) = \\frac{25t^2 + 125}{t^2 + 1}$ (mmHg, $0 \\le t \\le 10$, giây). Tốc độ thay đổi của huyết áp sau $5\\text{ giây}$ là:",
      options: ["$-2,96\\text{ mmHg/s}$", "$2,96\\text{ mmHg/s}$", "$-1,5\\text{ mmHg/s}$", "$-3,5\\text{ mmHg/s}$"],
      correctAnswerIndex: 0,
      solution: "$P'(t) = \\frac{50t(t^2+1) - 2t(25t^2+125)}{(t^2+1)^2} = \\frac{-200t}{(t^2+1)^2}$. Tại $t = 5$: $P'(5) = \\frac{-1000}{26^2} = \\frac{-1000}{676} \\approx -2,96$ mmHg/giây."
    },
    {
      id: 4,
      question: "Một bể chứa ban đầu có $200\\text{ lít}$ nước. Mỗi phút bơm thêm $40\\text{ lít}$ nước, đồng thời cho vào $20\\text{ g}$ chất khử trùng hòa tan. Nồng độ chất khử trùng $C(t)$ (g/lít) trong bể sau $t$ phút là:",
      options: ["$C(t) = \\frac{20t}{200 + 40t} = \\frac{t}{10 + 2t}$", "$C(t) = \\frac{20}{200 + 40t}$", "$C(t) = \\frac{40t}{200 + 20t}$", "$C(t) = \\frac{20t}{200}$"],
      correctAnswerIndex: 0,
      solution: "Lượng chất khử trùng sau $t$ phút là $20t$ (g). Thể tích nước sau $t$ phút là $200 + 40t$ (lít). Nồng độ $C(t) = \\frac{20t}{200+40t} = \\frac{t}{10+2t}$ (g/l)."
    },
    {
      id: 5,
      question: "Nồng độ chất khử trùng trong câu 4 khi $t \\to +\\infty$ sẽ tiến dần tới giới hạn nào?",
      options: ["$0,5\\text{ g/lít}$", "$1\\text{ g/lít}$", "$0,2\\text{ g/lít}$", "$2\\text{ g/lít}$"],
      correctAnswerIndex: 0,
      solution: "$\\lim_{t \\to +\\infty} C(t) = \\lim_{t \\to +\\infty} \\frac{t}{10+2t} = \\frac{1}{2} = 0,5\\text{ g/lít}$."
    },
    {
      id: 6,
      question: "Hàm chi phí sản xuất $x$ đơn vị sản phẩm là $C(x) = 23000 + 50x - 0,5x^2 + 0,00175x^3$ (trăm nghìn đồng). Chi phí biên tại mức sản lượng $x = 100$ là:",
      options: ["$2,5\\text{ trăm nghìn đồng}$", "$50\\text{ trăm nghìn đồng}$", "$10\\text{ trăm nghìn đồng}$", "$15\\text{ trăm nghìn đồng}$"],
      correctAnswerIndex: 0,
      solution: "$C'(x) = 50 - x + 0,00525x^2$. Tại $x = 100$: $C'(100) = 50 - 100 + 0,00525(10000) = -50 + 52,5 = 2,5$ trăm nghìn đồng."
    },
    {
      id: 7,
      question: "Hai điện trở $8\\,\\Omega$ và biến trở $x\\,(\\Omega, x > 0)$ được mắc song song. Điện trở tương đương của mạch là $R(x) = \\frac{8x}{8+x}$. Khi biến trở $x$ tăng rất lớn ($x \\to +\\infty$), điện trở tương đương không bao giờ vượt quá:",
      options: ["$8\\,\\Omega$", "$4\\,\\Omega$", "$16\\,\\Omega$", "$10\\,\\Omega$"],
      correctAnswerIndex: 0,
      solution: "$\\lim_{x \\to +\\infty} R(x) = \\lim_{x \\to +\\infty} \\frac{8x}{8+x} = 8\\,\\Omega$. Đồ thị hàm $R(x)$ có tiệm cận ngang $y = 8$."
    },
    {
      id: 8,
      question: "Một chiếc cốc chứa $30\\text{ ml}$ dung dịch KOH nồng độ $100\\text{ mg/ml}$. Trộn thêm $x\\text{ (ml)}$ dung dịch KOH nồng độ $8\\text{ mg/ml}$. Nồng độ KOH trong cốc luôn lớn hơn mức nào?",
      options: ["$8\\text{ mg/ml}$", "$100\\text{ mg/ml}$", "$0\\text{ mg/ml}$", "$54\\text{ mg/ml}$"],
      correctAnswerIndex: 0,
      solution: "$C(x) = \\frac{3000 + 8x}{30 + x}$. Hàm số giảm liên tục và $\\lim_{x \\to +\\infty} C(x) = 8\\text{ mg/ml}$, do đó $C(x) > 8\\text{ mg/ml}$ với mọi $x \\ge 0$."
    },
    {
      id: 9,
      question: "Một công ty dự báo tốc độ bán hàng của một sản phẩm mới tuân theo $f(t) = \\frac{5000}{1 + 5e^{-t}}$ ($t \\ge 0$, năm). Tốc độ bán hàng $f'(t)$ lớn nhất khi:",
      options: ["$t = \\ln 5 \\approx 1,61\\text{ năm}$", "$t = 0\\text{ năm}$", "$t = 5\\text{ năm}$", "$t = 2\\text{ năm}$"],
      correctAnswerIndex: 0,
      solution: "Tốc độ bán hàng $f'(t)$ đạt cực đại tại điểm uốn của hàm logistic $f(t)$, tức là khi $5e^{-t} = 1 \\Leftrightarrow e^t = 5 \\Leftrightarrow t = \\ln 5 \\approx 1,61$ năm."
    },
    {
      id: 10,
      question: "Dân số một quốc gia kể từ 2023 được ước tính bởi $N(t) = 100e^{0,012t}$ (triệu người). Tốc độ tăng dân số $N'(t)$ đạt mức $1,6\\text{ triệu người/năm}$ vào năm nào?",
      options: ["Năm 2047 ($t \\approx 24$)", "Năm 2035", "Năm 2050", "Năm 2040"],
      correctAnswerIndex: 0,
      solution: "$N'(t) = 1,2e^{0,012t} = 1,6 \\Leftrightarrow e^{0,012t} = 1,6 / 1,2 = 4/3 \\Rightarrow t = \\frac{\\ln(4/3)}{0,012} \\approx 23,97 \\approx 24$. Năm $2023 + 24 = 2047$."
    },
    {
      id: 11,
      question: "Thấu kính hội tụ có tiêu cự $f$. Khoảng cách từ vật đến thấu kính là $p$ ($p > f$). Khoảng cách từ ảnh đến thấu kính là $q = \\frac{pf}{p - f}$. Khi vật ở rất xa ($p \\to +\\infty$), vị trí của ảnh $q$ tiến về:",
      options: ["Tiêu cự $f$", "$0$", "$+\\infty$", "$2f$"],
      correctAnswerIndex: 0,
      solution: "$\\lim_{p \\to +\\infty} \\frac{pf}{p-f} = f$. Ảnh hội tụ tại tiêu điểm của thấu kính."
    },
    {
      id: 12,
      question: "Hàm cầu của một loại hàng hoá là $p = \\frac{354}{1 + 0,01x}$ ($p$ là giá bán nghìn đồng, $x$ là sản lượng). Khi giá bán $p = 240$ nghìn đồng, số lượng bán ra xấp xỉ bằng:",
      options: ["$47,5\\text{ đơn vị}$", "$50\\text{ đơn vị}$", "$45\\text{ đơn vị}$", "$60\\text{ đơn vị}$"],
      correctAnswerIndex: 0,
      solution: "$240 = \\frac{354}{1+0,01x} \\Leftrightarrow 1 + 0,01x = \\frac{354}{240} = 1,475 \\Leftrightarrow 0,01x = 0,475 \\Leftrightarrow x = 47,5$ đơn vị."
    },
    {
      id: 13,
      question: "Nếu lực $\\vec{F}$ không đổi tác dụng vào một vật làm vật dịch chuyển một vectơ độ dời $\\vec{d}$ thì công sinh ra $A$ lớn nhất khi:",
      options: ["Lực $\\vec{F}$ cùng hướng với vectơ độ dời $\\vec{d}$ (góc $\\alpha = 0^\\circ$)", "Lực vuông góc với hướng chuyển động", "Lực ngược hướng chuyển động", "Góc $\\alpha = 45^\\circ$"],
      correctAnswerIndex: 0,
      solution: "$A = \\vec{F} \\cdot \\vec{d} = |\\vec{F}||\\vec{d}|\\cos \\alpha$. Công đạt giá trị lớn nhất khi $\\cos \\alpha = 1 \\Leftrightarrow \\alpha = 0^\\circ$ (lực cùng hướng chuyển động)."
    },
    {
      id: 14,
      question: "Một cơ sở nuôi cấy nấm men có mô hình $P(t) = \\frac{a}{b + e^{-0,75t}}$. Biết tại $t = 0$ có $20$ tế bào và tốc độ tăng là $12$ tế bào/giờ. Giá trị của $a$ và $b$ là:",
      options: ["$a = 25, b = 1/4$", "$a = 20, b = 1$", "$a = 30, b = 1/2$", "$a = 15, b = 1/4$"],
      correctAnswerIndex: 0,
      solution: "$P(0) = \\frac{a}{b+1} = 20 \\Rightarrow a = 20(b+1)$. $P'(0) = \\frac{0,75a}{(b+1)^2} = \\frac{0,75 \\times 20}{b+1} = 12 \\Rightarrow b + 1 = 1,25 \\Rightarrow b = 0,25 = 1/4 \\Rightarrow a = 25$."
    },
    {
      id: 15,
      question: "Khi $t \\to +\\infty$, số lượng nấm men trong câu 14 tiến tới giá trị bão hòa là:",
      options: ["$100\\text{ tế bào}$", "$80\\text{ tế bào}$", "$120\\text{ tế bào}$", "$25\\text{ tế bào}$"],
      correctAnswerIndex: 0,
      solution: "$\\lim_{t \\to +\\infty} P(t) = \\frac{25}{0,25 + 0} = 100$ tế bào."
    }
  ]
];
