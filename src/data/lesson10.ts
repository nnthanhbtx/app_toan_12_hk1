import { Question } from './types';

export const lesson10Sets: Question[][] = [
  // Bộ 1: Cơ bản & Lý thuyết Phương sai, Độ lệch chuẩn
  [
    {
      id: 1,
      question: "Số trung bình $\\bar{x}$ của mẫu số liệu ghép nhóm với $k$ nhóm có giá trị đại diện $c_i$ và tần số $n_i$ (cỡ mẫu $n$) được tính bằng:",
      options: ["$\\bar{x} = \\frac{1}{n}\\sum_{i=1}^k n_i c_i$", "$\\bar{x} = \\frac{1}{k}\\sum_{i=1}^k c_i$", "$\\bar{x} = \\sum_{i=1}^k n_i c_i$", "$\\bar{x} = \\frac{\\sum n_i}{\\sum c_i}$"],
      correctAnswerIndex: 0,
      solution: "Công thức số trung bình mẫu ghép nhóm: $\\bar{x} = \\frac{n_1 c_1 + n_2 c_2 + \\dots + n_k c_k}{n} = \\frac{1}{n}\\sum_{i=1}^k n_i c_i$."
    },
    {
      id: 2,
      question: "Phương sai $s^2$ của mẫu số liệu ghép nhóm được tính theo công thức:",
      options: [
        "$s^2 = \\frac{1}{n}\\sum_{i=1}^k n_i (c_i - \\bar{x})^2 = \\frac{1}{n}\\sum_{i=1}^k n_i c_i^2 - \\bar{x}^2$",
        "$s^2 = \\frac{1}{n}\\sum_{i=1}^k (c_i - \\bar{x})^2$",
        "$s^2 = \\sqrt{\\frac{1}{n}\\sum_{i=1}^k n_i (c_i - \\bar{x})^2}$",
        "$s^2 = \\frac{1}{k}\\sum_{i=1}^k n_i c_i^2$"
      ],
      correctAnswerIndex: 0,
      solution: "Định nghĩa phương sai mẫu ghép nhóm: $s^2 = \\frac{1}{n}\\sum_{i=1}^k n_i (c_i - \\bar{x})^2 = \\frac{1}{n}\\sum_{i=1}^k n_i c_i^2 - \\bar{x}^2$."
    },
    {
      id: 3,
      question: "Độ lệch chuẩn $s$ của mẫu số liệu ghép nhóm là:",
      options: ["Căn bậc hai số học của phương sai: $s = \\sqrt{s^2}$", "Bình phương của phương sai: $s = (s^2)^2$", "Nghịch đảo của phương sai: $s = 1/s^2$", "Trị tuyệt đối của số trung bình: $s = |\\bar{x}|$"],
      correctAnswerIndex: 0,
      solution: "Độ lệch chuẩn là căn bậc hai số học của phương sai: $s = \\sqrt{s^2}$."
    },
    {
      id: 4,
      question: "Đơn vị đo của độ lệch chuẩn $s$ so với đơn vị đo của mẫu số liệu ban đầu là:",
      options: ["Cùng đơn vị đo với số liệu ban đầu", "Bằng bình phương đơn vị đo ban đầu", "Không có đơn vị đo", "Bằng căn bậc hai đơn vị đo ban đầu"],
      correctAnswerIndex: 0,
      solution: "Độ lệch chuẩn có cùng đơn vị đo với số liệu gốc (trong khi phương sai có đơn vị bằng bình phương đơn vị gốc)."
    },
    {
      id: 5,
      question: "Phương sai và độ lệch chuẩn dùng để đo:",
      options: ["Mức độ phân tán của các số liệu xung quanh số trung bình", "Độ lớn của giá trị lớn nhất", "Xu thế tập trung ở trung tâm", "Số lượng phần tử trong mẫu"],
      correctAnswerIndex: 0,
      solution: "Phương sai và độ lệch chuẩn là các số đo mức độ phân tán của số liệu so với giá trị trung bình."
    },
    {
      id: 6,
      question: "Độ lệch chuẩn $s$ càng nhỏ thì:",
      options: ["Các số liệu càng tập trung gần số trung bình (mức độ biến động nhỏ, độ đồng đều cao)", "Các số liệu càng rải rác xa nhau", "Số trung bình càng nhỏ", "Mẫu càng ít phần tử"],
      correctAnswerIndex: 0,
      solution: "Độ lệch chuẩn càng nhỏ chứng tỏ số liệu càng tập trung sít sao quanh số trung bình, độ biến động thấp, tính ổn định cao."
    },
    {
      id: 7,
      question: "Nếu tất cả các số liệu trong mẫu ghép nhóm đều bằng một hằng số $c$, thì phương sai $s^2$ bằng:",
      options: ["$0$", "$c$", "$c^2$", "$1$"],
      correctAnswerIndex: 0,
      solution: "Khi tất cả số liệu bằng nhau, $\\bar{x} = c$ và mọi $(c_i - \\bar{x}) = 0 \\Rightarrow s^2 = 0$."
    },
    {
      id: 8,
      question: "Cho mẫu số liệu ghép nhóm có $n = 50, \\sum n_i c_i = 350, \\sum n_i c_i^2 = 2500$. Số trung bình $\\bar{x}$ bằng:",
      options: ["$7$", "$50$", "$5$", "$70$"],
      correctAnswerIndex: 0,
      solution: "$\\bar{x} = \\frac{350}{50} = 7$."
    },
    {
      id: 9,
      question: "Phương sai $s^2$ của mẫu số liệu ở câu 8 là:",
      options: ["$1$", "$2$", "$0$", "$50$"],
      correctAnswerIndex: 0,
      solution: "$s^2 = \\frac{1}{n}\\sum n_i c_i^2 - \\bar{x}^2 = \\frac{2500}{50} - 7^2 = 50 - 49 = 1$."
    },
    {
      id: 10,
      question: "Độ lệch chuẩn $s$ của mẫu số liệu ở câu 8 là:",
      options: ["$1$", "$0$", "$2$", "$0,5$"],
      correctAnswerIndex: 0,
      solution: "$s = \\sqrt{s^2} = \\sqrt{1} = 1$."
    },
    {
      id: 11,
      question: "Nếu nhân tất cả các giá trị trong mẫu số liệu với hằng số $k > 0$, độ lệch chuẩn mới $s'$ sẽ:",
      options: ["$s' = k \\cdot s$", "$s' = s$", "$s' = k^2 \\cdot s$", "$s' = s / k$"],
      correctAnswerIndex: 0,
      solution: "Khi các giá trị nhân với $k$, phương sai nhân với $k^2$, độ lệch chuẩn nhân với $k$ ($s' = k s$)."
    },
    {
      id: 12,
      question: "Nếu cộng tất cả các giá trị trong mẫu số liệu với một số thực $c$, độ lệch chuẩn mới sẽ:",
      options: ["Không thay đổi", "Tăng thêm $c$", "Tăng thêm $c^2$", "Gấp $c$ lần"],
      correctAnswerIndex: 0,
      solution: "Phép tịnh tiến cộng thêm $c$ không làm thay đổi khoảng cách giữa các phần tử nên độ lệch chuẩn giữ nguyên."
    },
    {
      id: 13,
      question: "Bảng ghép nhóm có 3 nhóm: $[0; 4)$ có $n_1 = 5$, $[4; 8)$ có $n_2 = 10$, $[8; 12)$ có $n_3 = 5$. Giá trị đại diện của các nhóm lần lượt là:",
      options: ["$2, 6, 10$", "$0, 4, 8$", "$4, 8, 12$", "$2, 4, 6$"],
      correctAnswerIndex: 0,
      solution: "$c_1 = (0+4)/2 = 2, c_2 = (4+8)/2 = 6, c_3 = (8+12)/2 = 10$."
    },
    {
      id: 14,
      question: "Số trung bình $\\bar{x}$ của mẫu số liệu ở câu 13 là:",
      options: ["$6$", "$5$", "$7$", "$8$"],
      correctAnswerIndex: 0,
      solution: "$\\bar{x} = \\frac{5(2) + 10(6) + 5(10)}{20} = \\frac{10 + 60 + 50}{20} = \\frac{120}{20} = 6$."
    },
    {
      id: 15,
      question: "Phương sai $s^2$ của mẫu số liệu ở câu 13 là:",
      options: ["$8$", "$16$", "$4$", "$10$"],
      correctAnswerIndex: 0,
      solution: "$s^2 = \\frac{5(2-6)^2 + 10(6-6)^2 + 5(10-6)^2}{20} = \\frac{5(16) + 0 + 5(16)}{20} = \\frac{160}{20} = 8$."
    }
  ],
  // Bộ 2: Bài tập tính toán & So sánh hai mẫu số liệu
  [
    {
      id: 1,
      question: "Khảo sát thời gian sử dụng Internet hàng ngày của 50 học sinh: $[0; 2): 10, [2; 4): 25, [4; 6): 15$. Giá trị đại diện tương ứng là $1, 3, 5$. Số trung bình $\\bar{x}$ là:",
      options: ["$3,2\\text{ giờ}$", "$3,0\\text{ giờ}$", "$3,5\\text{ giờ}$", "$2,8\\text{ giờ}$"],
      correctAnswerIndex: 0,
      solution: "$\\bar{x} = \\frac{10(1) + 25(3) + 15(5)}{50} = \\frac{10 + 75 + 75}{50} = \\frac{160}{50} = 3,2$ giờ."
    },
    {
      id: 2,
      question: "Phương sai $s^2$ của thời gian sử dụng Internet ở câu 1 là:",
      options: ["$1,76$", "$2,00$", "$1,50$", "$1,96$"],
      correctAnswerIndex: 0,
      solution: "$\\sum n_i c_i^2 = 10(1) + 25(9) + 15(25) = 10 + 225 + 375 = 610$. $s^2 = \\frac{610}{50} - (3,2)^2 = 12,2 - 10,24 = 1,96$."
    },
    {
      id: 3,
      question: "Độ lệch chuẩn $s$ của thời gian sử dụng Internet ở câu 1 là:",
      options: ["$1,4\\text{ giờ}$", "$1,3\\text{ giờ}$", "$1,5\\text{ giờ}$", "$1,96\\text{ giờ}$"],
      correctAnswerIndex: 0,
      solution: "$s = \\sqrt{1,96} = 1,4$ giờ."
    },
    {
      id: 4,
      question: "Bảng điểm bài kiểm tra của lớp 12A có $\\bar{x}_A = 7,5$ và $s_A = 0,8$. Lớp 12B có $\\bar{x}_B = 7,5$ và $s_B = 1,4$. Kết luận nào sau đây đúng?",
      options: ["Điểm kiểm tra của lớp 12A đồng đều hơn lớp 12B", "Lớp 12B có điểm cao hơn lớp 12A", "Học sinh lớp 12B giỏi hơn", "Hai lớp học đều như nhau"],
      correctAnswerIndex: 0,
      solution: "Cùng điểm trung bình $\\bar{x} = 7,5$, nhưng $s_A < s_B$ ($0,8 < 1,4$) nên điểm kiểm tra của học sinh lớp 12A đồng đều và ít phân tán hơn."
    },
    {
      id: 5,
      question: "Một cung thủ bắn 20 mũi tên: Máy A ghi nhận $s_A = 0,5\\text{ cm}$, Máy B ghi nhận cung thủ thứ hai có $s_B = 1,2\\text{ cm}$. Cung thủ nào bắn có độ ổn định cao hơn?",
      options: ["Cung thủ thứ nhất (Máy A)", "Cung thủ thứ hai (Máy B)", "Cả hai như nhau", "Không so sánh được"],
      correctAnswerIndex: 0,
      solution: "Độ lệch chuẩn điểm rơi của cung thủ A nhỏ hơn ($s_A = 0,5 < 1,2$) chứng tỏ các phát bắn tập trung quanh hồng tâm đều hơn, độ ổn định cao hơn."
    },
    {
      id: 6,
      question: "Trọng lượng 100 trái xoài cát Hòa Lộc: $[200; 250): 15, [250; 300): 45, [300; 350): 30, [350; 400): 10$ (gam). Giá trị đại diện nhóm thứ ba $[300; 350)$ là:",
      options: ["$325\\text{ g}$", "$300\\text{ g}$", "$350\\text{ g}$", "$320\\text{ g}$"],
      correctAnswerIndex: 0,
      solution: "$c_3 = \\frac{300 + 350}{2} = 325\\text{ g}$."
    },
    {
      id: 7,
      question: "Trọng lượng trung bình $\\bar{x}$ của 100 trái xoài ở câu 6 là:",
      options: ["$292,5\\text{ g}$", "$285,0\\text{ g}$", "$300,0\\text{ g}$", "$295,5\\text{ g}$"],
      correctAnswerIndex: 0,
      solution: "$\\bar{x} = \\frac{15(225) + 45(275) + 30(325) + 10(375)}{100} = \\frac{3375 + 12375 + 9750 + 3750}{100} = \\frac{29250}{100} = 292,5\\text{ g}$."
    },
    {
      id: 8,
      question: "Phương sai $s^2$ của trọng lượng xoài ở câu 6 xấp xỉ bằng:",
      options: ["$1768,75$", "$1500,00$", "$2000,25$", "$1850,50$"],
      correctAnswerIndex: 0,
      solution: "$\\sum n_i c_i^2 = 15(50625) + 45(75625) + 30(105625) + 10(140625) = 759375 + 3403125 + 3168750 + 1406250 = 8737500$. $s^2 = 87375 - (292,5)^2 = 87375 - 85556,25 = 1818,75$."
    },
    {
      id: 9,
      question: "Độ lệch chuẩn $s$ trọng lượng trái xoài xấp xỉ bằng:",
      options: ["$42,65\\text{ g}$", "$35,20\\text{ g}$", "$50,15\\text{ g}$", "$25,40\\text{ g}$"],
      correctAnswerIndex: 0,
      solution: "$s = \\sqrt{1818,75} \\approx 42,65\\text{ g}$."
    },
    {
      id: 10,
      question: "Hai giống lúa mới ĐB6 và ĐB9 thử nghiệm trên 10 thửa ruộng cùng điều kiện cho kết quả năng suất: Giống ĐB6 có $\\bar{x}_1 = 65\\text{ tạ/ha}, s_1 = 3,5\\text{ tạ/ha}$; Giống ĐB9 có $\\bar{x}_2 = 65\\text{ tạ/ha}, s_2 = 1,8\\text{ tạ/ha}$. Người nông dân nên chọn giống nào để năng suất ổn định?",
      options: ["Giống ĐB9", "Giống ĐB6", "Giống nào cũng như nhau", "Không chọn giống nào"],
      correctAnswerIndex: 0,
      solution: "ĐB9 có cùng năng suất trung bình nhưng độ lệch chuẩn nhỏ hơn ($s_2 = 1,8 < 3,5$) nên cho năng suất ổn định và ít rủi ro hơn."
    },
    {
      id: 11,
      question: "Hệ số biến thiên $CV = \\frac{s}{\\bar{x}}$ được dùng để:",
      options: ["So sánh độ biến động giữa hai mẫu số liệu có đơn vị đo khác nhau hoặc số trung bình khác nhau", "Tính độ lệch chuẩn", "Tính số trung bình", "Đo thể tích"],
      correctAnswerIndex: 0,
      solution: "Hệ số biến thiên $CV = s / \\bar{x}$ là số đo phân tán tương đối, dùng để so sánh các mẫu có thang đo khác nhau."
    },
    {
      id: 12,
      question: "Một cửa hàng đếm số lượng khách mua hàng trong 30 ngày: $[10; 20): 5, [20; 30): 15, [30; 40): 10$. Số trung bình $\\bar{x}$ là:",
      options: ["$26,67\\text{ khách}$", "$25,00\\text{ khách}$", "$27,50\\text{ khách}$", "$28,00\\text{ khách}$"],
      correctAnswerIndex: 0,
      solution: "$\\bar{x} = \\frac{5(15) + 15(25) + 10(35)}{30} = \\frac{75 + 375 + 350}{30} = \\frac{800}{30} \\approx 26,67$ khách."
    },
    {
      id: 13,
      question: "Phương sai $s^2$ của số lượng khách ở câu 12 xấp xỉ bằng:",
      options: ["$38,89$", "$45,50$", "$32,15$", "$50,00$"],
      correctAnswerIndex: 0,
      solution: "$\\sum n_i c_i^2 = 5(225) + 15(625) + 10(1225) = 1125 + 9375 + 12250 = 22750$. $s^2 = \\frac{22750}{30} - (26,67)^2 = 758,33 - 711,11 = 47,22$."
    },
    {
      id: 14,
      question: "Độ lệch chuẩn của số lượng khách xấp xỉ bằng:",
      options: ["$6,87\\text{ khách}$", "$5,50\\text{ khách}$", "$8,20\\text{ khách}$", "$4,50\\text{ khách}$"],
      correctAnswerIndex: 0,
      solution: "$s = \\sqrt{47,22} \\approx 6,87$ khách."
    },
    {
      id: 15,
      question: "Khảo sát thời gian hoàn thành một sản phẩm (phút) của công nhân: Tổ 1 có $s_1 = 2\\text{ phút}$, Tổ 2 có $s_2 = 4\\text{ phút}$. Tổ nào có tay nghề đồng đều hơn?",
      options: ["Tổ 1", "Tổ 2", "Cả hai bằng nhau", "Chưa thể kết luận"],
      correctAnswerIndex: 0,
      solution: "Tổ 1 có độ lệch chuẩn nhỏ hơn ($s_1 = 2 < 4$) nên thời gian làm ra sản phẩm đồng đều hơn, tay nghề công nhân đồng đều hơn."
    }
  ],
  // Bộ 3: Phân tích thống kê & Vận dụng thực tế nâng cao
  [
    {
      id: 1,
      question: "Hai máy tiện tự động gia công các chi tiết có đường kính chuẩn $20\\text{ mm}$. Thống kê đường kính của 100 chi tiết từ mỗi máy cho kết quả: Máy 1 có $\\bar{x}_1 = 20,01\\text{ mm}, s_1 = 0,02\\text{ mm}$; Máy 2 có $\\bar{x}_2 = 20,01\\text{ mm}, s_2 = 0,08\\text{ mm}$. Máy nào gia công chính xác và đạt chuẩn hơn?",
      options: ["Máy 1", "Máy 2", "Cả hai như nhau", "Không xác định được"],
      correctAnswerIndex: 0,
      solution: "Máy 1 có độ lệch chuẩn $s_1 = 0,02\\text{ mm}$ nhỏ hơn 4 lần so với Máy 2 ($s_2 = 0,08\\text{ mm}$) nên độ sai lệch quanh kích thước chuẩn thấp hơn rất nhiều, máy 1 gia công chính xác hơn."
    },
    {
      id: 2,
      question: "Quy tắc kinh nghiệm 3-sigma (áp dụng cho phân bố chuẩn) cho biết khoảng $[\tbar{x} - 2s; \\bar{x} + 2s]$ chứa xấp xỉ bao nhiêu phần trăm dữ liệu?",
      options: ["$95\\%$", "$68\\%$", "$99,7\\%$", "$50\\%$"],
      correctAnswerIndex: 0,
      solution: "Trong phân bố chuẩn: Khoảng $[\bar{x} - s; \\bar{x} + s]$ chứa $\\approx 68\\%$; $[\bar{x} - 2s; \\bar{x} + 2s]$ chứa $\\approx 95\\%$; $[\bar{x} - 3s; \\bar{x} + 3s]$ chứa $\\approx 99,7\\%$."
    },
    {
      id: 3,
      question: "Một mẫu số liệu chiều cao học sinh có $\\bar{x} = 165\\text{ cm}, s = 5\\text{ cm}$. Theo quy tắc 2-sigma, khoảng $95\\%$ học sinh có chiều cao nằm trong đoạn:",
      options: ["$[155; 175]\\text{ cm}$", "$[160; 170]\\text{ cm}$", "$[150; 180]\\text{ cm}$", "$[165; 175]\\text{ cm}$"],
      correctAnswerIndex: 0,
      solution: "$[\\bar{x} - 2s; \\bar{x} + 2s] = [165 - 2(5); 165 + 2(5)] = [155; 175]\\text{ cm}$."
    },
    {
      id: 4,
      question: "Nếu phương sai của mẫu số liệu là $s^2 = 16\\text{ kg}^2$, thì độ lệch chuẩn của mẫu là:",
      options: ["$4\\text{ kg}$", "$256\\text{ kg}$", "$8\\text{ kg}$", "$16\\text{ kg}$"],
      correctAnswerIndex: 0,
      solution: "$s = \\sqrt{16\\text{ kg}^2} = 4\\text{ kg}$."
    },
    {
      id: 5,
      question: "Một ngân hàng khảo sát thời gian chờ giao dịch của 200 khách hàng (phút): $[0; 5): 40, [5; 10): 80, [10; 15): 60, [15; 20): 20$. Số trung bình thời gian chờ là:",
      options: ["$9\\text{ phút}$", "$8,5\\text{ phút}$", "$10\\text{ phút}$", "$7,5\\text{ phút}$"],
      correctAnswerIndex: 0,
      solution: "Giá trị đại diện: $2,5; 7,5; 12,5; 17,5$. $\\bar{x} = \\frac{40(2,5) + 80(7,5) + 60(12,5) + 20(17,5)}{200} = \\frac{100 + 600 + 750 + 350}{200} = \\frac{1800}{200} = 9$ phút."
    },
    {
      id: 6,
      question: "Phương sai $s^2$ thời gian chờ của khách hàng ở câu 5 là:",
      options: ["$19$", "$25$", "$16$", "$20$"],
      correctAnswerIndex: 0,
      solution: "$\\sum n_i c_i^2 = 40(6,25) + 80(56,25) + 60(156,25) + 20(306,25) = 250 + 4500 + 9375 + 6125 = 20250$. $s^2 = \\frac{20250}{200} - 9^2 = 101,25 - 81 = 20,25$."
    },
    {
      id: 7,
      question: "Độ lệch chuẩn $s$ thời gian chờ ở câu 5 là:",
      options: ["$4,5\\text{ phút}$", "$4\\text{ phút}$", "$5\\text{ phút}$", "$3,5\\text{ phút}$"],
      correctAnswerIndex: 0,
      solution: "$s = \\sqrt{20,25} = 4,5$ phút."
    },
    {
      id: 8,
      question: "Cho mẫu số liệu ghép nhóm có phương sai $s^2 = 9$. Nếu thay mỗi giá trị $x_i$ trong mẫu bằng $y_i = 3x_i - 5$, thì phương sai mới của mẫu $y$ là:",
      options: ["$81$", "$27$", "$9$", "$22$"],
      correctAnswerIndex: 0,
      solution: "$s_y^2 = a^2 s_x^2 = 3^2 \\times 9 = 9 \\times 9 = 81$ (phép tịnh tiến $-5$ không ảnh hưởng phương sai)."
    },
    {
      id: 9,
      question: "Trong câu 8, độ lệch chuẩn mới $s_y$ bằng:",
      options: ["$9$", "$3$", "$27$", "$4$"],
      correctAnswerIndex: 0,
      solution: "$s_y = \\sqrt{81} = 9$ (hoặc $s_y = |3| s_x = 3 \\times 3 = 9$)."
    },
    {
      id: 10,
      question: "Khảo sát tuổi thọ của 100 bóng đèn LED: $[1000; 2000): 10, [2000; 3000): 50, [3000; 4000): 30, [4000; 5000): 10$ (giờ). Tuổi thọ trung bình $\\bar{x}$ bằng:",
      options: ["$2900\\text{ giờ}$", "$3000\\text{ giờ}$", "$2800\\text{ giờ}$", "$3200\\text{ giờ}$"],
      correctAnswerIndex: 0,
      solution: "$\\bar{x} = \\frac{10(1500) + 50(2500) + 30(3500) + 10(4500)}{100} = \\frac{15000 + 125000 + 105000 + 45000}{100} = \\frac{290000}{100} = 2900$ giờ."
    },
    {
      id: 11,
      question: "Phương sai của tuổi thọ bóng đèn LED ở câu 10 là:",
      options: ["$590\\,000\\text{ giờ}^2$", "$600\\,000\\text{ giờ}^2$", "$550\\,000\\text{ giờ}^2$", "$500\\,000\\text{ giờ}^2$"],
      correctAnswerIndex: 0,
      solution: "$\\sum n_i c_i^2 = 10(2,25) + 50(6,25) + 30(12,25) + 10(20,25) = 22,5 + 312,5 + 367,5 + 202,5 = 905$ (triệu). $s^2 = 9\\,050\\,000 - 2900^2 = 9\\,050\\,000 - 8\\,410\\,000 = 640\\,000\\text{ giờ}^2$."
    },
    {
      id: 12,
      question: "Độ lệch chuẩn của tuổi thọ bóng đèn LED ở câu 10 là:",
      options: ["$800\\text{ giờ}$", "$768\\text{ giờ}$", "$850\\text{ giờ}$", "$700\\text{ giờ}$"],
      correctAnswerIndex: 0,
      solution: "$s = \\sqrt{640\\,000} = 800$ giờ."
    },
    {
      id: 13,
      question: "Đại lượng nào sau đây KHÔNG phụ thuộc vào việc cộng thêm cùng một hằng số $c$ vào mọi phần tử trong mẫu?",
      options: ["Độ lệch chuẩn $s$", "Số trung bình $\\bar{x}$", "Trung vị $M_e$", "Mốt $M_o$"],
      correctAnswerIndex: 0,
      solution: "Độ lệch chuẩn $s$ (và phương sai, khoảng biến thiên, khoảng tứ phân vị) không đổi khi cộng thêm hằng số, trong khi các số đo vị trí trung tâm đều tăng thêm $c$."
    },
    {
      id: 14,
      question: "Trong quản lý chất lượng (Six Sigma), mục tiêu chính của việc giảm thiểu độ lệch chuẩn $s$ trong quy trình sản xuất là:",
      options: ["Tăng độ đồng đều và giảm thiểu tối đa tỉ lệ sản phẩm lỗi hỏng", "Tăng chi phí sản xuất", "Tăng số lượng công nhân", "Giảm giá bán hàng"],
      correctAnswerIndex: 0,
      solution: "Độ lệch chuẩn càng nhỏ thì quy trình càng đồng đều và ổn định, giúp triệt tiêu các sản phẩm bị lệch chuẩn ra ngoài dung sai cho phép."
    },
    {
      id: 15,
      question: "Khi kết hợp hai mẫu số liệu độc lập có cùng số trung bình $\\bar{x}$ nhưng độ lệch chuẩn khác nhau $s_1$ và $s_2$ với cỡ mẫu $n_1 = n_2$, phương sai của mẫu ghép chung là:",
      options: ["$s^2 = \\frac{s_1^2 + s_2^2}{2}$", "$s^2 = s_1^2 + s_2^2$", "$s^2 = \\frac{s_1 + s_2}{2}$", "$s^2 = \\sqrt{s_1^2 + s_2^2}$"],
      correctAnswerIndex: 0,
      solution: "Vì hai mẫu có cùng $\\bar{x}$ và cùng cỡ mẫu nên phương sai của mẫu tổng hợp bằng trung bình cộng hai phương sai: $s^2 = \\frac{s_1^2 + s_2^2}{2}$."
    }
  ]
];
