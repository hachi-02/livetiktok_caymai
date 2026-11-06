# 🌸 TikTok Live Tết — Cây Mai Đại Lộc, Gieo Quẻ Đầu Xuân & Xin Chữ Ông Đồ

Ứng dụng tương tác trực tiếp (Real-time Interactive Livestream App) dành cho **TikTok Live** chủ đề **Tết Nguyên Đán**, kết nối trực tiếp với phòng livestream TikTok qua `@username` (không cần tài khoản TikTok Developer hay API Key).

---

## ✨ Tính năng nổi bật

1. **💬 Comment Gieo Quẻ Đầu Xuân (Tự nhận diện Năm Sinh & 12 Con Giáp)**:
   - Người xem comment năm sinh (VD: `1999`, `2002`...) hoặc lời chúc -> **Ống Xăm Tết** tự động lắc, đọc đúng tuổi Con Giáp và hiện thẻ quẻ trong **6 giây cố định** để người xem kịp đọc.
   - Nhận **+10 Lộc** cá nhân, treo Avatar lên cành **Cây Mai Đại Lộc** và cộng **+2 Khí Xuân** vào thanh năng lượng của cây.

2. **🌹 Tặng Bông Hồng — Mở Chiếu Ông Đồ & Hái Bao Lì Xì (Gacha)**:
   - Mỗi bông hồng (hoặc quà tặng) làm rung Cây Mai, mở ngẫu nhiên Bao Lì Xì từ **`68` đến `888` Lộc / bông** (Combo từ 5 bông trở lên nổ hũ từ **`888` đến `9.999` Lộc**).
   - Bung **Cuốn Thư Pháp Vàng** chính giữa màn hình kèm chữ đại tự (*ĐẠI PHÁT, PHÚ QUÝ, ĐẠI LỘC, TIỀN ĐẦY TÚI, VẠN SỰ NHƯ Ý, TÌNH DUYÊN ĐỎ*), câu đối Tết, đóng dấu ấn đỏ in **Avatar + Tên người tặng** và đọc giọng nói AI Tiếng Việt cảm ơn trực tiếp.

3. **👑 Đặc quyền Độc Quyền của Top 1 — Đệ Nhất Thần Tài**:
   - **Đại Lễ Đăng Cơ (Rồng Vàng Chạy Dọc Viền Bảng)**: Khi có người vượt điểm soán ngôi Top 1, màn hình bung bảng **Kim Bài Cửu Long** với nguyên con Rồng Vàng 36 đốt vảy uốn lượn chạy dọc theo 4 cạnh bảng.
   - **Thần Tài Phán Truyền (Comment được Loa AI đọc nguyên văn)**: Riêng người đang giữ ghế **Top 1** khi gõ bất kỳ câu bình luận nào sẽ được hiện **Chiếu Chỉ Vàng**, thưởng **+50 Lộc** và **Loa AI đọc to nguyên văn câu bình luận đó lên sóng**.
   - **Độc Chiếm Ngọn Cây & Ấn Rồng Đế Vương**: Avatar Top 1 nằm chính giữa đỉnh ngọn Cây Mai (to gấp rưỡi, có Vương Miện & vòng hào quang xoay tròn) và mở khóa bộ chữ thư pháp **Nền Giấy Vàng Ròng Độc Quyền** (*CỬU NGŨ CHÍ TÔN, ĐỆ NHẤT PHÚ GIA, THẦN TÀI GIÁ LÂM, LONG PHƯỢNG HỘ MỆNH*).

4. **💥 Tích Đầy Khí Xuân (`200 / 200`) — Nổ Hũ Cây Mai Đại Lộc**:
   - Khi thanh năng lượng Khí Xuân đạt **`200 / 200`**, Cây Mai lên cấp, bắn pháo hoa & mưa lì xì toàn màn hình.
   - Người chốt hạ mốc `200/200` nhận nóng **+1.000 Lộc**, và toàn bộ người đang có Avatar treo trên Cây Mai nhận **+200 Lộc**.

5. **⏳ Hàng Đợi Thông Minh (Chống đè thông báo & Chống ngắt lời AI)**:
   - Tất cả thông báo trung tâm đều đi qua hàng đợi tuần tự, đợi **hiển thị xong hiệu ứng VÀ giọng đọc AI đọc dứt câu** mới chuyển sang thông báo tiếp theo.

---

## 🚀 Hướng dẫn Cài đặt & Chạy App

### 1. Yêu cầu hệ thống
- Đã cài đặt **Node.js** (khuyến nghị bản `v18+`).

### 2. Cài đặt thư viện
```bash
npm install
```

### 3. Khởi chạy Server
```bash
npm start
```
Sau khi chạy, mở trình duyệt truy cập:
👉 **`http://localhost:3000`**

---

## 📡 Cách kết nối TikTok Live & Quay OBS / TikTok Live Studio

1. **Kết nối phòng Live thật**:
   - Ở khung điều khiển bên phải, nhập `@username` của kênh TikTok đang bật Livestream vào mục **1. Kết nối TikTok Live Thật** rồi bấm **Kết nối**.
2. **Chế độ Test / Giả lập (Khi chưa bật Live)**:
   - Dùng các nút ở mục **2. Giả lập Tương tác** để thử ngay hiệu ứng Comment, Tặng 1 Bông, Combo 10 Bông, Nổ Hũ Cây Mai, Top 1 Gõ Comment và Soán Ngôi Top 1.
3. **Đưa lên OBS / TikTok Live Studio**:
   - Thêm nguồn **Browser Source** (hoặc **Window Capture**) trỏ tới `http://localhost:3000`.
   - Bấm phím **`H`** trên bàn phím (hoặc nút **🖥️ Chế độ Quay OBS / Ẩn Bảng Này**) để ẩn toàn bộ bảng điều khiển bên phải, chỉ giữ lại khung dọc **9:16** chuẩn điện thoại.

---

## 🎨 Thay đổi Hình ảnh (Assets) Tùy chỉnh
Bạn có thể đổi hình ảnh trực tiếp trên giao diện Web (Mục số 3) hoặc chép đè file vào thư mục `public/assets/`:
- `public/assets/tet-bg.png`: Hình nền Tết (tỉ lệ dọc 9:16).
- `public/assets/cay-mai.png`: Hình Cây Mai Đại Lộc.
- `public/assets/ong-xam.png`: Hình Ống Xăm Tết.
