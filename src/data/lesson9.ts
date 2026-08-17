import { Question } from './types';

export const lesson9Sets: Question[][] = [
  // Bộ 1: Cơ bản & Lý thuyết Khoảng biến thiên, Khoảng tứ phân vị
  [
    {
      id: 1,
      question: "Mẫu số liệu ghép nhóm là mẫu số liệu được cho dưới dạng:",
      options: ["Bảng tần số của các nhóm số liệu $[a_i; a_{i+1})$", "Một dãy các số rời rạc không phân nhóm", "Biểu đồ tròn không có số liệu", "Bảng chữ cái"],
      correctAnswerIndex: 0,
      solution: "Mẫu số liệu ghép nhóm là mẫu số liệu được chia thành các nhóm dạng nửa khoảng $[a_i; a_{i+1})$ kèm theo tần số tương ứng."
    },
    {
      id: 2,
      question: "Độ dài của nhóm $[a; b)$ trong mẫu số liệu ghép nhóm bằng:",
      options: ["$L = b - a$", "$L = b + a$", "$L = (a+b)/2$", "$L = b / a$"],
      correctAnswerIndex: 0,
      solution: "Độ dài của nhóm $[a; b)$ bằng hiệu của đầu mút phải và đầu mút trái: $L = b - a$."
    },
    {
      id: 3,
      question: "Giá trị đại diện của nhóm $[a; b)$ được tính bằng:",
      options: ["$\\frac{a + b}{2}$", "$b - a$", "$\\sqrt{ab}$", "$a + b$"],
      correctAnswerIndex: 0,
      solution: "Giá trị đại diện của nhóm $[a; b)$ là trung điểm của nửa khoảng: $x_i = \\frac{a+b}{2}$."
    },
    {
      id: 4,
      question: "Khoảng biến thiên của mẫu số liệu ghép nhóm với nhóm đầu $[a_1; a_2)$ và nhóm cuối $[a_k; a_{k+1})$ là:",
      options: ["$R = a_{k+1} - a_1$", "$R = a_k - a_1$", "$R = a_{k+1} - a_2$", "$R = \\frac{a_{k+1} + a_1}{2}$"],
      correctAnswerIndex: 0,
      solution: "Khoảng biến thiên của mẫu ghép nhóm: $R = a_{k+1} - a_1$ (đầu mút phải nhóm cuối trừ đầu mút trái nhóm đầu)."
    },
    {
      id: 5,
      question: "Khoảng tứ phân vị của mẫu số liệu ghép nhóm, kí hiệu $\\Delta_Q$, được tính bằng:",
      options: ["$\\Delta_Q = Q_3 - Q_1$", "$\\Delta_Q = Q_3 + Q_1$", "$\\Delta_Q = Q_2 - Q_1$", "$\\Delta_Q = \\frac{Q_3 - Q_1}{2}$"],
      correctAnswerIndex: 0,
      solution: "Khoảng tứ phân vị: $\\Delta_Q = Q_3 - Q_1$, phản ánh mức độ phân tán của 50% số liệu ở trung tâm."
    },
    {
      id: 6,
      question: "Ý nghĩa của khoảng biến thiên và khoảng tứ phân vị trong thống kê là:",
      options: ["Dùng để đo mức độ phân tán của mẫu số liệu", "Dùng để đo xu thế trung tâm", "Dùng để tính trung bình cộng", "Dùng để đếm số lượng phần tử"],
      correctAnswerIndex: 0,
      solution: "Khoảng biến thiên và khoảng tứ phân vị là các số đo mức độ phân tán của mẫu số liệu."
    },
    {
      id: 7,
      question: "So với khoảng biến thiên, ưu điểm chính của khoảng tứ phân vị $\\Delta_Q$ là:",
      options: ["Không bị ảnh hưởng bởi các giá trị bất thường (ngoại lai)", "Dễ tính hơn", "Luôn có giá trị lớn hơn", "Không phụ thuộc vào cỡ mẫu"],
      correctAnswerIndex: 0,
      solution: "Khoảng tứ phân vị chỉ đo độ phân tán của 50% số liệu chính giữa nên loại bỏ được ảnh hưởng của các giá trị ngoại lai quá lớn hoặc quá nhỏ."
    },
    {
      id: 8,
      question: "Nhóm chứa tứ phân vị thứ nhất $Q_1$ của mẫu ghép nhóm cỡ $n$ là nhóm đầu tiên có tần số tích lũy:",
      options: ["Lớn hơn hoặc bằng $\\frac{n}{4}$", "Lớn hơn hoặc bằng $\\frac{n}{2}$", "Lớn hơn hoặc bằng $\\frac{3n}{4}$", "Bằng đúng $n$"],
      correctAnswerIndex: 0,
      solution: "Nhóm chứa tứ phân vị thứ nhất $Q_1$ là nhóm $[a_p; a_{p+1})$ đầu tiên thỏa mãn $cf_p \\ge \\frac{n}{4}$."
    },
    {
      id: 9,
      question: "Nhóm chứa tứ phân vị thứ ba $Q_3$ của mẫu ghép nhóm cỡ $n$ là nhóm đầu tiên có tần số tích lũy:",
      options: ["Lớn hơn hoặc bằng $\\frac{3n}{4}$", "Lớn hơn hoặc bằng $\\frac{n}{4}$", "Lớn hơn hoặc bằng $\\frac{n}{2}$", "Nhỏ hơn $\\frac{3n}{4}$"],
      correctAnswerIndex: 0,
      solution: "Nhóm chứa $Q_3$ là nhóm đầu tiên có tần số tích lũy thỏa mãn $cf_r \\ge \\frac{3n}{4}$."
    },
    {
      id: 10,
      question: "Công thức hiệu chỉnh tính tứ phân vị thứ nhất $Q_1$ trong nhóm $[u; v)$ có tần số $n_m$, tần số tích lũy trước đó $C$, độ dài $h$ là:",
      options: ["$Q_1 = u + \\frac{\\frac{n}{4} - C}{n_m} \\cdot h$", "$Q_1 = u + \\frac{\\frac{n}{2} - C}{n_m} \\cdot h$", "$Q_1 = v - \\frac{n_m}{n} \\cdot h$", "$Q_1 = \\frac{u + v}{2}$"],
      correctAnswerIndex: 0,
      solution: "Công thức tính tứ phân vị thứ nhất: $Q_1 = u + \\frac{\\frac{n}{4} - C}{n_m} \\cdot (v - u)$."
    },
    {
      id: 11,
      question: "Một mẫu số liệu ghép nhóm có các nhóm: $[10; 20), [20; 30), [30; 40), [40; 50)$. Khoảng biến thiên $R$ bằng:",
      options: ["$40$", "$50$", "$10$", "$30$"],
      correctAnswerIndex: 0,
      solution: "$R = 50 - 10 = 40$."
    },
    {
      id: 12,
      question: "Giá trị đại diện của nhóm $[60; 80)$ là:",
      options: ["$70$", "$20$", "$60$", "$80$"],
      correctAnswerIndex: 0,
      solution: "$x_i = \\frac{60 + 80}{2} = 70$."
    },
    {
      id: 13,
      question: "Một lớp có 40 học sinh. Để tìm nhóm chứa $Q_1$ và $Q_3$, ta so sánh tần số tích lũy với các mốc:",
      options: ["$10$ và $30$", "$20$ và $40$", "$5$ và $15$", "$10$ và $20$"],
      correctAnswerIndex: 0,
      solution: "Cỡ mẫu $n = 40 \\Rightarrow n/4 = 10$ và $3n/4 = 30$."
    },
    {
      id: 14,
      question: "Khoảng biến thiên $R$ càng lớn thì mẫu số liệu:",
      options: ["Càng có độ phân tán lớn (dao động mạnh)", "Càng đồng đều", "Càng có nhiều phần tử", "Càng chính xác"],
      correctAnswerIndex: 0,
      solution: "Khoảng biến thiên càng lớn chứng tỏ số liệu càng trải rộng và có độ phân tán lớn."
    },
    {
      id: 15,
      question: "Tứ phân vị thứ hai $Q_2$ của mẫu số liệu ghép nhóm chính là:",
      options: ["Trung vị ($M_e$)", "Số trung bình", "Mốt ($M_o$)", "Độ lệch chuẩn"],
      correctAnswerIndex: 0,
      solution: "Tứ phân vị thứ hai $Q_2$ chính là trung vị $M_e$ của mẫu số liệu."
    }
  ],
  // Bộ 2: Tính toán bài tập theo số liệu thực nghiệm
  [
    {
      id: 1,
      question: "Khảo sát thời gian tự học (giờ/tuần) của 40 học sinh được bảng: $[0; 5): 6; [5; 10): 14; [10; 15): 12; [15; 20): 8$. Khoảng biến thiên của mẫu số liệu là:",
      options: ["$20\\text{ giờ}$", "$15\\text{ giờ}$", "$25\\text{ giờ}$", "$14\\text{ giờ}$"],
      correctAnswerIndex: 0,
      solution: "$R = 20 - 0 = 20$ giờ."
    },
    {
      id: 2,
      question: "Trong bài toán ở câu 1, nhóm chứa tứ phân vị thứ nhất $Q_1$ là:",
      options: ["$[5; 10)$", "$[0; 5)$", "$[10; 15)$", "$[15; 20)$"],
      correctAnswerIndex: 0,
      solution: "$n/4 = 40/4 = 10$. Tần số tích lũy: nhóm 1 là 6, nhóm 2 là $6 + 14 = 20 \\ge 10$. Nhóm chứa $Q_1$ là $[5; 10)$."
    },
    {
      id: 3,
      question: "Giá trị của tứ phân vị thứ nhất $Q_1$ ở câu 1 xấp xỉ bằng:",
      options: ["$6,43\\text{ giờ}$", "$5,5\\text{ giờ}$", "$7,14\\text{ giờ}$", "$6,0\\text{ giờ}$"],
      correctAnswerIndex: 0,
      solution: "$Q_1 = 5 + \\frac{10 - 6}{14} \\times (10 - 5) = 5 + \\frac{4}{14} \\times 5 = 5 + 1,43 = 6,43$ giờ."
    },
    {
      id: 4,
      question: "Trong bài toán ở câu 1, nhóm chứa tứ phân vị thứ ba $Q_3$ là:",
      options: ["$[10; 15)$", "$[5; 10)$", "$[15; 20)$", "$[0; 5)$"],
      correctAnswerIndex: 0,
      solution: "$3n/4 = 30$. Tần số tích lũy: nhóm 1 là 6, nhóm 2 là 20, nhóm 3 là $20 + 12 = 32 \\ge 30$. Vậy nhóm chứa $Q_3$ là $[10; 15)$."
    },
    {
      id: 5,
      question: "Giá trị của tứ phân vị thứ ba $Q_3$ ở câu 1 xấp xỉ bằng:",
      options: ["$14,17\\text{ giờ}$", "$13,50\\text{ giờ}$", "$12,80\\text{ giờ}$", "$14,50\\text{ giờ}$"],
      correctAnswerIndex: 0,
      solution: "$Q_3 = 10 + \\frac{30 - 20}{12} \\times (15 - 10) = 10 + \\frac{10}{12} \\times 5 = 10 + 4,17 = 14,17$ giờ."
    },
    {
      id: 6,
      question: "Khoảng tứ phân vị $\\Delta_Q$ của mẫu thời gian tự học ở câu 1 xấp xỉ bằng:",
      options: ["$7,74\\text{ giờ}$", "$8,50\\text{ giờ}$", "$6,25\\text{ giờ}$", "$9,00\\text{ giờ}$"],
      correctAnswerIndex: 0,
      solution: "$\\Delta_Q = Q_3 - Q_1 = 14,17 - 6,43 = 7,74$ giờ."
    },
    {
      id: 7,
      question: "Kết quả đo chiều cao của 50 cây keo lai (m): $[6; 7): 8; [7; 8): 15; [8; 9): 18; [9; 10): 9$. Khoảng biến thiên bằng:",
      options: ["$4\\text{ m}$", "$3\\text{ m}$", "$10\\text{ m}$", "$5\\text{ m}$"],
      correctAnswerIndex: 0,
      solution: "$R = 10 - 6 = 4\\text{ m}$."
    },
    {
      id: 8,
      question: "Nhóm chứa $Q_1$ trong mẫu số liệu chiều cao cây keo ở câu 7 là:",
      options: ["$[7; 8)$", "$[6; 7)$", "$[8; 9)$", "$[9; 10)$"],
      correctAnswerIndex: 0,
      solution: "$n/4 = 50/4 = 12,5$. Nhóm 1 có tích lũy 8, nhóm 2 có tích lũy $8 + 15 = 23 \\ge 12,5$. Vậy nhóm chứa $Q_1$ là $[7; 8)$."
    },
    {
      id: 9,
      question: "Tứ phân vị thứ nhất $Q_1$ của cây keo lai bằng:",
      options: ["$7,3\\text{ m}$", "$7,5\\text{ m}$", "$7,1\\text{ m}$", "$7,8\\text{ m}$"],
      correctAnswerIndex: 0,
      solution: "$Q_1 = 7 + \\frac{12,5 - 8}{15} \\times 1 = 7 + \\frac{4,5}{15} = 7 + 0,3 = 7,3\\text{ m}$."
    },
    {
      id: 10,
      question: "Tứ phân vị thứ ba $Q_3$ của cây keo lai bằng:",
      options: ["$8,81\\text{ m}$", "$8,50\\text{ m}$", "$9,10\\text{ m}$", "$8,65\\text{ m}$"],
      correctAnswerIndex: 0,
      solution: "$3n/4 = 37,5$. Tích lũy nhóm 3 là $23 + 18 = 41 \\ge 37,5$. $Q_3 = 8 + \\frac{37,5 - 23}{18} \\times 1 = 8 + \\frac{14,5}{18} \\approx 8,81\\text{ m}$."
    },
    {
      id: 11,
      question: "Khoảng tứ phân vị của chiều cao cây keo lai là:",
      options: ["$1,51\\text{ m}$", "$2,00\\text{ m}$", "$1,20\\text{ m}$", "$1,85\\text{ m}$"],
      correctAnswerIndex: 0,
      solution: "$\\Delta_Q = Q_3 - Q_1 = 8,81 - 7,30 = 1,51\\text{ m}$."
    },
    {
      id: 12,
      question: "Bảng điểm kiểm tra một môn học của 100 học sinh có $Q_1 = 6,2$ và $Q_3 = 8,6$. Khoảng tứ phân vị bằng:",
      options: ["$2,4\\text{ điểm}$", "$1,2\\text{ điểm}$", "$14,8\\text{ điểm}$", "$7,4\\text{ điểm}$"],
      correctAnswerIndex: 0,
      solution: "$\\Delta_Q = 8,6 - 6,2 = 2,4$ điểm."
    },
    {
      id: 13,
      question: "Khi so sánh độ đồng đều giữa hai mẫu số liệu có cùng đơn vị đo, mẫu có khoảng tứ phân vị nhỏ hơn chứng tỏ:",
      options: ["50% số liệu ở trung tâm tập trung hơn (đồng đều hơn)", "Số trung bình cao hơn", "Có nhiều số liệu hơn", "Có khoảng biến thiên lớn hơn"],
      correctAnswerIndex: 0,
      solution: "Khoảng tứ phân vị càng nhỏ thì 50% số liệu ở trung tâm càng phân bố sít sao, chứng tỏ mức độ đồng đều cao hơn."
    },
    {
      id: 14,
      question: "Thống kê tuổi thọ của 200 bóng đèn cho $\\Delta_Q = 120\\text{ giờ}$. Ý nghĩa của con số này là:",
      options: ["50% bóng đèn ở mức tuổi thọ trung tâm có độ chênh lệch tuổi thọ không quá 120 giờ", "Bóng đèn sáng tối đa 120 giờ", "Tuổi thọ trung bình là 120 giờ", "Có 120 bóng đèn bị hỏng"],
      correctAnswerIndex: 0,
      solution: "Ý nghĩa: 50% số bóng đèn ở khoảng giữa có mức dao động tuổi thọ nằm trong khoảng 120 giờ."
    },
    {
      id: 15,
      question: "Nếu tất cả các số liệu trong mẫu ghép nhóm được nhân với số dương $k$, thì khoảng tứ phân vị mới sẽ:",
      options: ["Gấp $k$ lần khoảng tứ phân vị ban đầu", "Không đổi", "Tăng thêm $k$ đơn vị", "Gấp $k^2$ lần"],
      correctAnswerIndex: 0,
      solution: "Khi các giá trị nhân với $k > 0$, các tứ phân vị $Q_1, Q_3$ cũng tăng $k$ lần, do đó $\\Delta_Q' = k Q_3 - k Q_1 = k \\Delta_Q$."
    }
  ],
  // Bộ 3: So sánh mẫu số liệu & Ứng dụng thực tiễn
  [
    {
      id: 1,
      question: "Hai lớp 12A và 12B có bảng điểm kiểm tra Toán. Lớp 12A có $\\Delta_Q = 1,5$, lớp 12B có $\\Delta_Q = 2,8$. Kết luận nào sau đây đúng?",
      options: ["Điểm kiểm tra của học sinh lớp 12A đồng đều hơn lớp 12B", "Lớp 12B có điểm trung bình cao hơn", "Lớp 12A có nhiều học sinh giỏi hơn", "Lớp 12B học tốt hơn"],
      correctAnswerIndex: 0,
      solution: "$\\Delta_Q$ của 12A nhỏ hơn chứng tỏ 50% học sinh ở khoảng giữa của lớp 12A có điểm số đồng đều hơn lớp 12B."
    },
    {
      id: 2,
      question: "Trong một cuộc đua marathon, thời gian hoàn thành cự ly của nhóm thanh niên có $R_1 = 45\\text{ phút}$, nhóm người cao tuổi có $R_2 = 70\\text{ phút}$. Điều này cho thấy:",
      options: ["Thời gian hoàn thành của nhóm thanh niên ít phân tán hơn nhóm người cao tuổi", "Nhóm người cao tuổi chạy nhanh hơn", "Cả hai nhóm chạy như nhau", "Không thể so sánh"],
      correctAnswerIndex: 0,
      solution: "Khoảng biến thiên $R_1 < R_2$ chứng tỏ mức độ chênh lệch thời gian của nhóm thanh niên hẹp hơn, ít phân tán hơn."
    },
    {
      id: 3,
      question: "Một nhà máy may kiểm tra cân nặng của các bao đường đóng gói: Nhóm 1 có $\\Delta_Q = 0,05\\text{ kg}$, Nhóm 2 có $\\Delta_Q = 0,12\\text{ kg}$. Dây chuyền sản xuất nào ổn định và chính xác hơn?",
      options: ["Nhóm 1", "Nhóm 2", "Cả hai như nhau", "Không đủ dữ liệu"],
      correctAnswerIndex: 0,
      solution: "Nhóm 1 có độ phân tán của 50% sản phẩm trung tâm nhỏ hơn nhiều nên hoạt động ổn định và chính xác hơn."
    },
    {
      id: 4,
      question: "Giá trị ngoại lai (outlier) trong mẫu số liệu thường được phát hiện nếu giá trị $x$ thỏa mãn:",
      options: ["$x < Q_1 - 1,5\\Delta_Q$ hoặc $x > Q_3 + 1,5\\Delta_Q$", "$x < Q_1$ hoặc $x > Q_3$", "$x > 2Q_3$", "$x < \\Delta_Q$"],
      correctAnswerIndex: 0,
      solution: "Tiêu chuẩn Tukey xác định giá trị ngoại lai: nằm ngoài đoạn $[Q_1 - 1,5\\Delta_Q; Q_3 + 1,5\\Delta_Q]$."
    },
    {
      id: 5,
      question: "Biết mẫu số liệu có $Q_1 = 20, Q_3 = 30$. Ngưỡng trên để một giá trị bị coi là ngoại lai là:",
      options: ["$45$", "$40$", "$35$", "$50$"],
      correctAnswerIndex: 0,
      solution: "$\\Delta_Q = 30 - 20 = 10$. Ngưỡng trên: $Q_3 + 1,5\\Delta_Q = 30 + 1,5(10) = 45$."
    },
    {
      id: 6,
      question: "Trong câu 5, ngưỡng dưới để một giá trị bị coi là ngoại lai là:",
      options: ["$5$", "$10$", "$0$", "$15$"],
      correctAnswerIndex: 0,
      solution: "Ngưỡng dưới: $Q_1 - 1,5\\Delta_Q = 20 - 1,5(10) = 20 - 15 = 5$."
    },
    {
      id: 7,
      question: "Nếu thêm vào mẫu số liệu một phần tử rất lớn (ngoại lai), đại lượng nào sau đây thay đổi nhiều nhất?",
      options: ["Khoảng biến thiên $R$", "Khoảng tứ phân vị $\\Delta_Q$", "Trung vị $M_e$", "Tứ phân vị thứ nhất $Q_1$"],
      correctAnswerIndex: 0,
      solution: "Khoảng biến thiên $R = x_{max} - x_{min}$ sẽ lập tức tăng vọt khi có giá trị cực đại mới rất lớn."
    },
    {
      id: 8,
      question: "Khảo sát tiền tip (nghìn đồng) tại một nhà hàng: $[0; 20): 10; [20; 40): 25; [40; 60): 40; [60; 80): 20; [80; 100): 5$. Cỡ mẫu $n$ bằng:",
      options: ["$100$", "$50$", "$80$", "$120$"],
      correctAnswerIndex: 0,
      solution: "$n = 10 + 25 + 40 + 20 + 5 = 100$."
    },
    {
      id: 9,
      question: "Tứ phân vị thứ nhất $Q_1$ của tiền tip ở câu 8 nằm trong nhóm nào?",
      options: ["$[20; 40)$", "$[0; 20)$", "$[40; 60)$", "$[60; 80)$"],
      correctAnswerIndex: 0,
      solution: "$n/4 = 25$. Tần số tích lũy nhóm 1 là 10, nhóm 2 là $10 + 25 = 35 \\ge 25$. Vậy nhóm chứa $Q_1$ là $[20; 40)$."
    },
    {
      id: 10,
      question: "Tứ phân vị thứ nhất $Q_1$ của tiền tip bằng:",
      options: ["$32\\text{ nghìn đồng}$", "$30\\text{ nghìn đồng}$", "$28\\text{ nghìn đồng}$", "$35\\text{ nghìn đồng}$"],
      correctAnswerIndex: 0,
      solution: "$Q_1 = 20 + \\frac{25 - 10}{25} \\times 20 = 20 + \\frac{15}{25} \\times 20 = 20 + 12 = 32$ nghìn đồng."
    },
    {
      id: 11,
      question: "Tứ phân vị thứ ba $Q_3$ của tiền tip ở câu 8 bằng:",
      options: ["$60\\text{ nghìn đồng}$", "$58\\text{ nghìn đồng}$", "$65\\text{ nghìn đồng}$", "$70\\text{ nghìn đồng}$"],
      correctAnswerIndex: 0,
      solution: "$3n/4 = 75$. Tích lũy nhóm 3 là $35 + 40 = 75$. Do đạt đúng mút trên của nhóm $[40; 60)$, $Q_3 = 60$ nghìn đồng."
    },
    {
      id: 12,
      question: "Khoảng tứ phân vị của tiền tip bằng:",
      options: ["$28\\text{ nghìn đồng}$", "$30\\text{ nghìn đồng}$", "$25\\text{ nghìn đồng}$", "$40\\text{ nghìn đồng}$"],
      correctAnswerIndex: 0,
      solution: "$\\Delta_Q = Q_3 - Q_1 = 60 - 32 = 28$ nghìn đồng."
    },
    {
      id: 13,
      question: "Khi biểu diễn bằng biểu đồ hộp (Box plot), độ dài của hình hộp chữ nhật chính bằng:",
      options: ["Khoảng tứ phân vị $\\Delta_Q$", "Khoảng biến thiên $R$", "Độ lệch chuẩn", "Trung bình cộng"],
      correctAnswerIndex: 0,
      solution: "Hình hộp trong biểu đồ Box plot kéo dài từ $Q_1$ đến $Q_3$, do đó độ dài hộp chính là $\\Delta_Q = Q_3 - Q_1$."
    },
    {
      id: 14,
      question: "Mẫu số liệu nào sau đây có khoảng biến thiên $R = 0$?",
      options: ["Tất cả các số liệu trong mẫu đều bằng nhau", "Tất cả các số liệu đều bằng 0", "Không có mẫu nào như vậy", "Mẫu chỉ có 1 phần tử duy nhất"],
      correctAnswerIndex: 0,
      solution: "Khi tất cả giá trị đều bằng nhau, $x_{max} = x_{min} \\Rightarrow R = 0$."
    },
    {
      id: 15,
      question: "Khảo sát tuổi thọ pin điện thoại (giờ): $[20; 25): 15, [25; 30): 35, [30; 35): 30, [35; 40): 20$. Khoảng biến thiên là:",
      options: ["$20\\text{ giờ}$", "$15\\text{ giờ}$", "$25\\text{ giờ}$", "$40\\text{ giờ}$"],
      correctAnswerIndex: 0,
      solution: "$R = 40 - 20 = 20$ giờ."
    }
  ]
];
