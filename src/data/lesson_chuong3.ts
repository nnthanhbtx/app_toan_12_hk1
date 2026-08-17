import { Question } from './types';

export const lessonChuong3Sets: Question[][] = [
  // Bộ 1: Trắc nghiệm Tổng hợp Chương III (Theo SGK trang 90-92)
  [
    {
      id: 1,
      question: "Để đo mức độ phân tán của mẫu số liệu ghép nhóm, người ta sử dụng các số đặc trưng nào sau đây?",
      options: [
        "Khoảng biến thiên, khoảng tứ phân vị, phương sai, độ lệch chuẩn",
        "Số trung bình, trung vị, mốt",
        "Tần số, tần số tích lũy",
        "Giá trị đại diện và độ dài nhóm"
      ],
      correctAnswerIndex: 0,
      solution: "Các số đặc trưng đo mức độ phân tán gồm: Khoảng biến thiên $R$, khoảng tứ phân vị $\\Delta_Q$, phương sai $s^2$ và độ lệch chuẩn $s$."
    },
    {
      id: 2,
      question: "Khoảng biến thiên của mẫu số liệu ghép nhóm có các nhóm $[10; 20), [20; 30), [30; 40), [40; 50)$ là:",
      options: ["$40$", "$50$", "$10$", "$30$"],
      correctAnswerIndex: 0,
      solution: "$R = a_{k+1} - a_1 = 50 - 10 = 40$."
    },
    {
      id: 3,
      question: "Độ lệch chuẩn là căn bậc hai của:",
      options: ["Phương sai", "Số trung bình", "Khoảng biến thiên", "Khoảng tứ phân vị"],
      correctAnswerIndex: 0,
      solution: "Định nghĩa: Độ lệch chuẩn $s = \\sqrt{s^2}$ là căn bậc hai số học của phương sai."
    },
    {
      id: 4,
      question: "Giá trị đại diện của nhóm $[150; 160)$ là:",
      options: ["$155$", "$150$", "$160$", "$10$"],
      correctAnswerIndex: 0,
      solution: "$c_i = \\frac{150 + 160}{2} = 155$."
    },
    {
      id: 5,
      question: "Một mẫu số liệu có phương sai $s^2 = 0,25$. Độ lệch chuẩn $s$ bằng:",
      options: ["$0,5$", "$0,0625$", "$0,25$", "$0,05$"],
      correctAnswerIndex: 0,
      solution: "$s = \\sqrt{0,25} = 0,5$."
    },
    {
      id: 6,
      question: "Khoảng tứ phân vị $\\Delta_Q$ bằng hiệu giữa:",
      options: ["Tứ phân vị thứ ba $Q_3$ và tứ phân vị thứ nhất $Q_1$", "Tứ phân vị thứ ba $Q_3$ và trung vị $Q_2$", "Trung vị $Q_2$ và tứ phân vị thứ nhất $Q_1$", "Giá trị lớn nhất và nhỏ nhất"],
      correctAnswerIndex: 0,
      solution: "$\\Delta_Q = Q_3 - Q_1$."
    },
    {
      id: 7,
      question: "Khi so sánh hai nhóm học sinh có cùng điểm trung bình, nhóm có độ lệch chuẩn nhỏ hơn là nhóm:",
      options: ["Có điểm số đồng đều hơn", "Có điểm số cao hơn", "Có điểm số phân tán rộng hơn", "Có nhiều học sinh hơn"],
      correctAnswerIndex: 0,
      solution: "Độ lệch chuẩn nhỏ hơn biểu thị điểm số tập trung sít sao quanh mức trung bình hơn $\\Rightarrow$ học lực đồng đều hơn."
    },
    {
      id: 8,
      question: "Khảo sát tuổi thọ (tháng) của 100 ắc quy: $[20; 25): 10, [25; 30): 55, [30; 35): 30, [35; 40): 5$. Khoảng biến thiên là:",
      options: ["$20\\text{ tháng}$", "$25\\text{ tháng}$", "$15\\text{ tháng}$", "$40\\text{ tháng}$"],
      correctAnswerIndex: 0,
      solution: "$R = 40 - 20 = 20$ tháng."
    },
    {
      id: 9,
      question: "Tuổi thọ trung bình của 100 ắc quy ở câu 8 là:",
      options: ["$29\\text{ tháng}$", "$28,5\\text{ tháng}$", "$30\\text{ tháng}$", "$27,5\\text{ tháng}$"],
      correctAnswerIndex: 0,
      solution: "$\\bar{x} = \\frac{10(22,5) + 55(27,5) + 30(32,5) + 5(37,5)}{100} = \\frac{225 + 1512,5 + 975 + 187,5}{100} = \\frac{2900}{100} = 29$ tháng."
    },
    {
      id: 10,
      question: "Phương sai của tuổi thọ ắc quy ở câu 8 là:",
      options: ["$12,75\\text{ tháng}^2$", "$15,25\\text{ tháng}^2$", "$10,50\\text{ tháng}^2$", "$16,00\\text{ tháng}^2$"],
      correctAnswerIndex: 0,
      solution: "$\\sum n_i c_i^2 = 10(506,25) + 55(756,25) + 30(1056,25) + 5(1406,25) = 5062,5 + 41593,75 + 31687,5 + 7031,25 = 85375$. $s^2 = \\frac{85375}{100} - 29^2 = 853,75 - 841 = 12,75$."
    },
    {
      id: 11,
      question: "Độ lệch chuẩn tuổi thọ ắc quy xấp xỉ bằng:",
      options: ["$3,57\\text{ tháng}$", "$3,25\\text{ tháng}$", "$4,10\\text{ tháng}$", "$2,85\\text{ tháng}$"],
      correctAnswerIndex: 0,
      solution: "$s = \\sqrt{12,75} \\approx 3,57$ tháng."
    },
    {
      id: 12,
      question: "Nhóm chứa tứ phân vị thứ nhất $Q_1$ của mẫu ắc quy ở câu 8 là:",
      options: ["$[25; 30)$", "$[20; 25)$", "$[30; 35)$", "$[35; 40)$"],
      correctAnswerIndex: 0,
      solution: "$n/4 = 25$. Tần số tích lũy: nhóm 1 là 10, nhóm 2 là $10 + 55 = 65 \\ge 25$. Vậy nhóm chứa $Q_1$ là $[25; 30)$."
    },
    {
      id: 13,
      question: "Tứ phân vị thứ nhất $Q_1$ của mẫu ắc quy xấp xỉ bằng:",
      options: ["$26,36\\text{ tháng}$", "$27,00\\text{ tháng}$", "$25,50\\text{ tháng}$", "$26,85\\text{ tháng}$"],
      correctAnswerIndex: 0,
      solution: "$Q_1 = 25 + \\frac{25 - 10}{55} \\times 5 = 25 + \\frac{15}{55} \\times 5 = 25 + \\frac{15}{11} \\approx 26,36$ tháng."
    },
    {
      id: 14,
      question: "Tứ phân vị thứ ba $Q_3$ của mẫu ắc quy xấp xỉ bằng:",
      options: ["$31,67\\text{ tháng}$", "$30,50\\text{ tháng}$", "$32,50\\text{ tháng}$", "$33,00\\text{ tháng}$"],
      correctAnswerIndex: 0,
      solution: "$3n/4 = 75$. Tích lũy nhóm 3 là $65 + 30 = 95 \\ge 75$. $Q_3 = 30 + \\frac{75 - 65}{30} \\times 5 = 30 + \\frac{10}{30} \\times 5 = 30 + 1,67 = 31,67$ tháng."
    },
    {
      id: 15,
      question: "Khoảng tứ phân vị của mẫu ắc quy xấp xỉ bằng:",
      options: ["$5,31\\text{ tháng}$", "$6,00\\text{ tháng}$", "$4,85\\text{ tháng}$", "$7,20\\text{ tháng}$"],
      correctAnswerIndex: 0,
      solution: "$\\Delta_Q = Q_3 - Q_1 = 31,67 - 26,36 = 5,31$ tháng."
    }
  ],
  // Bộ 2: Bài toán tổng hợp SGK & Ứng dụng thực tế
  [
    {
      id: 1,
      question: "Hai xạ thủ cùng bắn 30 viên đạn vào bia. Xạ thủ A có điểm trung bình $\\bar{x}_A = 8,8$ và $s_A = 0,6$. Xạ thủ B có $\\bar{x}_B = 8,8$ và $s_B = 1,1$. Xạ thủ nào có phong độ bắn ổn định hơn?",
      options: ["Xạ thủ A", "Xạ thủ B", "Cả hai ổn định như nhau", "Không thể đánh giá"],
      correctAnswerIndex: 0,
      solution: "Cùng điểm trung bình, nhưng độ lệch chuẩn của xạ thủ A nhỏ hơn ($0,6 < 1,1$) nên xạ thủ A có phong độ bắn ổn định và tập trung hơn."
    },
    {
      id: 2,
      question: "Một công ty ô tô theo dõi mức tiêu hao nhiên liệu (lít/100km) của hai dòng xe X và Y: Dòng xe X có $\\Delta_Q = 0,4\\text{ lít}$, Dòng xe Y có $\\Delta_Q = 0,9\\text{ lít}$. Dòng xe nào có mức tiêu hao nhiên liệu đồng đều và dễ dự đoán hơn?",
      options: ["Dòng xe X", "Dòng xe Y", "Hai dòng xe như nhau", "Dòng xe Y tiết kiệm hơn"],
      correctAnswerIndex: 0,
      solution: "Khoảng tứ phân vị của dòng xe X nhỏ hơn ($0,4 < 0,9$) chứng tỏ 50% xe ở khoảng trung tâm có mức tiêu hao nhiên liệu dao động rất ít, đồng đều và ổn định hơn."
    },
    {
      id: 3,
      question: "Một mẫu số liệu có $Q_1 = 40, Q_3 = 60$. Một giá trị $x = 95$ có phải là giá trị ngoại lai không?",
      options: ["Có, vì $95 > 60 + 1,5(20) = 90$", "Không, vì $95 < 100$", "Không xác định được", "Có, vì $95 > 60$"],
      correctAnswerIndex: 0,
      solution: "$\\Delta_Q = 60 - 40 = 20$. Ngưỡng trên $Q_3 + 1,5\\Delta_Q = 60 + 1,5(20) = 90$. Do $95 > 90$ nên $95$ là giá trị ngoại lai."
    },
    {
      id: 4,
      question: "Trong một trang trại nuôi gà, cân nặng (kg) của 200 con gà xuất chuồng: $[1,5; 1,8): 20, [1,8; 2,1): 80, [2,1; 2,4): 70, [2,4; 2,7): 30$. Cân nặng trung bình $\\bar{x}$ bằng:",
      options: ["$2,115\\text{ kg}$", "$2,050\\text{ kg}$", "$2,200\\text{ kg}$", "$2,100\\text{ kg}$"],
      correctAnswerIndex: 0,
      solution: "Giá trị đại diện: $1,65; 1,95; 2,25; 2,55$. $\\bar{x} = \\frac{20(1,65) + 80(1,95) + 70(2,25) + 30(2,55)}{200} = \\frac{33 + 156 + 157,5 + 76,5}{200} = \\frac{423}{200} = 2,115\\text{ kg}$."
    },
    {
      id: 5,
      question: "Phương sai $s^2$ của cân nặng đàn gà ở câu 4 xấp xỉ bằng:",
      options: ["$0,069\\text{ kg}^2$", "$0,085\\text{ kg}^2$", "$0,050\\text{ kg}^2$", "$0,120\\text{ kg}^2$"],
      correctAnswerIndex: 0,
      solution: "$\\sum n_i c_i^2 = 20(2,7225) + 80(3,8025) + 70(5,0625) + 30(6,5025) = 54,45 + 304,2 + 354,375 + 195,075 = 908,1$. $s^2 = \\frac{908,1}{200} - (2,115)^2 = 4,5405 - 4,4732 = 0,0673\\text{ kg}^2$."
    },
    {
      id: 6,
      question: "Độ lệch chuẩn cân nặng đàn gà xấp xỉ bằng:",
      options: ["$0,26\\text{ kg}$", "$0,35\\text{ kg}$", "$0,18\\text{ kg}$", "$0,40\\text{ kg}$"],
      correctAnswerIndex: 0,
      solution: "$s = \\sqrt{0,0673} \\approx 0,26\\text{ kg}$."
    },
    {
      id: 7,
      question: "Nhóm chứa tứ phân vị thứ nhất $Q_1$ của cân nặng đàn gà là:",
      options: ["$[1,8; 2,1)$", "$[1,5; 1,8)$", "$[2,1; 2,4)$", "$[2,4; 2,7)$"],
      correctAnswerIndex: 0,
      solution: "$n/4 = 200/4 = 50$. Nhóm 1 có 20, nhóm 2 có $20 + 80 = 100 \\ge 50$. Nhóm chứa $Q_1$ là $[1,8; 2,1)$."
    },
    {
      id: 8,
      question: "Tứ phân vị thứ nhất $Q_1$ của đàn gà bằng:",
      options: ["$1,91\\text{ kg}$", "$1,85\\text{ kg}$", "$2,00\\text{ kg}$", "$1,95\\text{ kg}$"],
      correctAnswerIndex: 0,
      solution: "$Q_1 = 1,8 + \\frac{50 - 20}{80} \\times 0,3 = 1,8 + \\frac{30}{80} \\times 0,3 = 1,8 + 0,1125 \\approx 1,91\\text{ kg}$."
    },
    {
      id: 9,
      question: "Tứ phân vị thứ ba $Q_3$ của đàn gà bằng:",
      options: ["$2,31\\text{ kg}$", "$2,25\\text{ kg}$", "$2,40\\text{ kg}$", "$2,35\\text{ kg}$"],
      correctAnswerIndex: 0,
      solution: "$3n/4 = 150$. Tích lũy nhóm 3 là $100 + 70 = 170 \\ge 150$. $Q_3 = 2,1 + \\frac{150 - 100}{70} \\times 0,3 = 2,1 + \\frac{50}{70} \\times 0,3 = 2,1 + 0,214 = 2,31\\text{ kg}$."
    },
    {
      id: 10,
      question: "Khoảng tứ phân vị của cân nặng đàn gà bằng:",
      options: ["$0,40\\text{ kg}$", "$0,35\\text{ kg}$", "$0,50\\text{ kg}$", "$0,25\\text{ kg}$"],
      correctAnswerIndex: 0,
      solution: "$\\Delta_Q = Q_3 - Q_1 = 2,31 - 1,91 = 0,40\\text{ kg}$."
    },
    {
      id: 11,
      question: "Khi khảo sát độ phân tán, nếu mẫu số liệu có chứa một vài giá trị ngoại lai rất lớn thì ta nên ưu tiên sử dụng số đặc trưng nào?",
      options: ["Khoảng tứ phân vị $\\Delta_Q$", "Khoảng biến thiên $R$", "Phương sai $s^2$", "Độ lệch chuẩn $s$"],
      correctAnswerIndex: 0,
      solution: "Khoảng tứ phân vị không bị ảnh hưởng bởi các giá trị ngoại lai ở 2 đầu đuôi nên đại diện chính xác hơn trong trường hợp này."
    },
    {
      id: 12,
      question: "Một bác sĩ theo dõi huyết áp tâm thu của 50 bệnh nhân: Nhóm điều trị bằng thuốc A có $s_A = 4\\text{ mmHg}$, nhóm dùng thuốc B có $s_B = 12\\text{ mmHg}$. Loại thuốc nào giúp kiểm soát huyết áp ổn định hơn?",
      options: ["Thuốc A", "Thuốc B", "Cả hai như nhau", "Không thuốc nào"],
      correctAnswerIndex: 0,
      solution: "Thuốc A có độ lệch chuẩn nhỏ hơn nhiều ($4 < 12$) nên giúp huyết áp của người bệnh duy trì ở mức ổn định và ít dao động hơn."
    },
    {
      id: 13,
      question: "Nếu tất cả các số liệu trong mẫu ghép nhóm được chia cho $2$, thì phương sai mới $s'^2$ sẽ bằng:",
      options: ["$s^2 / 4$", "$s^2 / 2$", "$s^2$", "$2s^2$"],
      correctAnswerIndex: 0,
      solution: "Khi chia cho 2 ($k = 1/2$), phương sai nhân với $k^2 = (1/2)^2 = 1/4 \\Rightarrow s'^2 = s^2 / 4$."
    },
    {
      id: 14,
      question: "Trong bài toán câu 13, độ lệch chuẩn mới $s'$ sẽ bằng:",
      options: ["$s / 2$", "$s / 4$", "$s$", "$2s$"],
      correctAnswerIndex: 0,
      solution: "$s' = \\sqrt{s^2 / 4} = s / 2$."
    },
    {
      id: 15,
      question: "Một nhà máy sữa kiểm tra thể tích hộp sữa $180\\text{ ml}$. Dây chuyền A có $s_A = 0,5\\text{ ml}$, Dây chuyền B có $s_B = 1,5\\text{ ml}$. Dây chuyền nào có độ rủi ro thiếu/thừa sữa thấp hơn?",
      options: ["Dây chuyền A", "Dây chuyền B", "Cả hai như nhau", "Không xác định"],
      correctAnswerIndex: 0,
      solution: "Dây chuyền A có độ lệch chuẩn nhỏ hơn nên mức độ rót sữa đồng đều sát mức chuẩn $180\\text{ ml}$ hơn rất nhiều."
    }
  ],
  // Bộ 3: Phân tích nâng cao & Bảng số liệu đa chiều
  [
    {
      id: 1,
      question: "Hai cổ phiếu X và Y trên thị trường chứng khoán trong 1 năm qua có tỉ suất sinh lời trung bình đều là $15\\%$/năm. Tuy nhiên độ lệch chuẩn của X là $s_X = 5\\%$, của Y là $s_Y = 18\\%$. Nhận định nào sau đây đúng về mặt tài chính?",
      options: ["Cổ phiếu X có mức độ an toàn cao hơn và ít rủi ro biến động hơn cổ phiếu Y", "Cổ phiếu Y an toàn hơn", "Hai cổ phiếu có rủi ro như nhau", "Đầu tư vào Y chắc chắn lãi hơn"],
      correctAnswerIndex: 0,
      solution: "Trong tài chính, độ lệch chuẩn đo lường mức độ rủi ro biến động giá. $s_X < s_Y$ nghĩa là cổ phiếu X có độ biến động thấp hơn, an toàn và ổn định hơn."
    },
    {
      id: 2,
      question: "Một công ty công nghệ khảo sát mức lương (triệu đồng/tháng) của 100 lập trình viên: $[10; 20): 15, [20; 30): 45, [30; 40): 25, [40; 50): 10, [50; 60): 5$. Mức lương trung bình $\\bar{x}$ là:",
      options: ["$29,5\\text{ triệu đồng}$", "$28,0\\text{ triệu đồng}$", "$30,0\\text{ triệu đồng}$", "$32,5\\text{ triệu đồng}$"],
      correctAnswerIndex: 0,
      solution: "$\\bar{x} = \\frac{15(15) + 45(25) + 25(35) + 10(45) + 5(55)}{100} = \\frac{225 + 1125 + 875 + 450 + 275}{100} = \\frac{2950}{100} = 29,5$ triệu đồng."
    },
    {
      id: 3,
      question: "Phương sai của mức lương ở câu 2 là:",
      options: ["$99,75$", "$105,50$", "$95,00$", "$110,25$"],
      correctAnswerIndex: 0,
      solution: "$\\sum n_i c_i^2 = 15(225) + 45(625) + 25(1225) + 10(2025) + 5(3025) = 3375 + 28125 + 30625 + 20250 + 15125 = 97500$. $s^2 = \\frac{97500}{100} - (29,5)^2 = 975 - 870,25 = 104,75$."
    },
    {
      id: 4,
      question: "Độ lệch chuẩn mức lương lập trình viên xấp xỉ bằng:",
      options: ["$10,23\\text{ triệu đồng}$", "$9,50\\text{ triệu đồng}$", "$11,15\\text{ triệu đồng}$", "$8,80\\text{ triệu đồng}$"],
      correctAnswerIndex: 0,
      solution: "$s = \\sqrt{104,75} \\approx 10,23$ triệu đồng."
    },
    {
      id: 5,
      question: "Tứ phân vị thứ nhất $Q_1$ của mức lương lập trình viên bằng:",
      options: ["$22,22\\text{ triệu đồng}$", "$20,50\\text{ triệu đồng}$", "$23,15\\text{ triệu đồng}$", "$21,80\\text{ triệu đồng}$"],
      correctAnswerIndex: 0,
      solution: "$n/4 = 25$. Nhóm 2 $[20; 30)$ chứa $Q_1$. $Q_1 = 20 + \\frac{25 - 15}{45} \\times 10 = 20 + \\frac{100}{45} \\approx 22,22$ triệu đồng."
    },
    {
      id: 6,
      question: "Tứ phân vị thứ ba $Q_3$ của mức lương lập trình viên bằng:",
      options: ["$36,00\\text{ triệu đồng}$", "$35,50\\text{ triệu đồng}$", "$37,20\\text{ triệu đồng}$", "$34,80\\text{ triệu đồng}$"],
      correctAnswerIndex: 0,
      solution: "$3n/4 = 75$. Nhóm 3 $[30; 40)$ có tích lũy $15 + 45 + 25 = 85 \\ge 75$. $Q_3 = 30 + \\frac{75 - 60}{25} \\times 10 = 30 + \\frac{150}{25} = 30 + 6 = 36$ triệu đồng."
    },
    {
      id: 7,
      question: "Khoảng tứ phân vị của mức lương lập trình viên bằng:",
      options: ["$13,78\\text{ triệu đồng}$", "$14,50\\text{ triệu đồng}$", "$12,00\\text{ triệu đồng}$", "$15,20\\text{ triệu đồng}$"],
      correctAnswerIndex: 0,
      solution: "$\\Delta_Q = Q_3 - Q_1 = 36,00 - 22,22 = 13,78$ triệu đồng."
    },
    {
      id: 8,
      question: "Khoảng biến thiên của mức lương lập trình viên là:",
      options: ["$50\\text{ triệu đồng}$", "$60\\text{ triệu đồng}$", "$40\\text{ triệu đồng}$", "$30\\text{ triệu đồng}$"],
      correctAnswerIndex: 0,
      solution: "$R = 60 - 10 = 50$ triệu đồng."
    },
    {
      id: 9,
      question: "Khi vẽ biểu đồ cột (histogram) cho mẫu ghép nhóm, trục hoành biểu diễn các khoảng giá trị và trục tung biểu diễn:",
      options: ["Tần số (hoặc tần số tương đối)", "Giá trị đại diện", "Phương sai", "Độ lệch chuẩn"],
      correctAnswerIndex: 0,
      solution: "Trong biểu đồ histogram của mẫu số liệu ghép nhóm: Trục hoành chia các nhóm giá trị, trục tung biểu thị tần số hoặc tần suất của từng nhóm."
    },
    {
      id: 10,
      question: "Hai mẫu số liệu A và B có $\\bar{x}_A = 100, s_A = 10$ và $\\bar{x}_B = 20, s_B = 4$. Hệ số biến thiên $CV = s / \\bar{x}$ của A và B lần lượt là:",
      options: ["$10\\%$ và $20\\%$ (B phân tán tương đối nhiều hơn A)", "$10\\%$ và $10\\%$", "$20\\%$ và $10\\%$", "$5\\%$ và $20\\%$"],
      correctAnswerIndex: 0,
      solution: "$CV_A = 10/100 = 10\\%$; $CV_B = 4/20 = 20\\%$. Mẫu B có độ biến thiên tương đối lớn hơn mẫu A gấp 2 lần."
    },
    {
      id: 11,
      question: "Cho mẫu số liệu có cỡ mẫu $n = 40$. Giá trị nhỏ nhất có thể có của phương sai $s^2$ là:",
      options: ["$0$", "$1$", "$-1$", "$40$"],
      correctAnswerIndex: 0,
      solution: "Vì phương sai là tổng các đại lượng bình phương nên $s^2 \\ge 0$, đạt giá trị nhỏ nhất bằng $0$ khi tất cả số liệu đều bằng nhau."
    },
    {
      id: 12,
      question: "Một thiết bị y tế đo nồng độ đường huyết của bệnh nhân: Máy 1 có $s_1 = 0,2\\text{ mmol/l}$, Máy 2 có $s_2 = 0,8\\text{ mmol/l}$. Kết quả đo của máy nào đáng tin cậy hơn?",
      options: ["Máy 1", "Máy 2", "Hai máy như nhau", "Không xác định"],
      correctAnswerIndex: 0,
      solution: "Máy 1 có độ lệch chuẩn đo lường nhỏ hơn nên sai số ngẫu nhiên thấp hơn, kết quả lặp lại đáng tin cậy hơn."
    },
    {
      id: 13,
      question: "Tần số tích lũy của nhóm cuối cùng trong bảng phân bố ghép nhóm luôn bằng:",
      options: ["Tổng cỡ mẫu $n$", "$1$", "$100$", "Số nhóm $k$"],
      correctAnswerIndex: 0,
      solution: "Tần số tích lũy của nhóm cuối cùng là tổng tần số của toàn bộ các nhóm, tức là bằng cỡ mẫu $n$."
    },
    {
      id: 14,
      question: "Nếu một học sinh có điểm kiểm tra là $x = 8,5$ trong khi điểm trung bình lớp là $\\bar{x} = 7,0$ và $s = 1,5$, thì điểm số chuẩn hóa $z = \\frac{x - \\bar{x}}{s}$ bằng:",
      options: ["$+1,0$", "$+1,5$", "$+0,5$", "$+2,0$"],
      correctAnswerIndex: 0,
      solution: "$z = \\frac{8,5 - 7,0}{1,5} = \\frac{1,5}{1,5} = +1,0$ (học sinh cao hơn trung bình đúng 1 độ lệch chuẩn)."
    },
    {
      id: 15,
      question: "Khẳng định nào sau đây là ĐÚNG khi nói về các số đặc trưng đo độ phân tán?",
      options: [
        "Độ lệch chuẩn $s$ và khoảng tứ phân vị $\\Delta_Q$ đều có cùng đơn vị đo với mẫu số liệu gốc",
        "Phương sai có cùng đơn vị đo với số liệu gốc",
        "Khoảng biến thiên luôn nhỏ hơn khoảng tứ phân vị",
        "Độ lệch chuẩn có thể nhận giá trị âm"
      ],
      correctAnswerIndex: 0,
      solution: "Độ lệch chuẩn $s$ và khoảng tứ phân vị $\\Delta_Q$ đều có cùng đơn vị đo với số liệu ban đầu. (Phương sai có đơn vị bình phương, $R \\ge \\Delta_Q$, và $s \\ge 0$)."
    }
  ]
];
