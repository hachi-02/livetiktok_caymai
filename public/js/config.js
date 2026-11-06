// ================= CẤU HÌNH TRÒ CHƠI & DỮ LIỆU QUẺ TẾT / CHỮ ÔNG ĐỒ =================

const TREE_MAX_ENERGY = 200; // Điểm Khí Xuân cần đạt để Nổ Hũ Cây Mai
const FORTUNE_DISPLAY_MS = 6000; // Thời gian cố định (6 giây) hiển thị mỗi Quẻ Comment

const ZODIAC_ANIMALS = [
  'Thân (Khỉ Vàng)', 'Dậu (Gà Vàng)', 'Tuất (Chó Vàng)', 'Hợi (Heo Vàng)',
  'Tý (Chuột Vàng)', 'Sửu (Trâu Vàng)', 'Dần (Hổ Vàng)', 'Mão (Mèo Vàng)',
  'Thìn (Rồng Vàng)', 'Tỵ (Rắn Vàng)', 'Ngọ (Ngựa Vàng)', 'Mùi (Dê Vàng)'
];

const FORTUNE_LIST = [
  {
    rank: 'THƯỢNG THƯỢNG CÁT',
    text: 'Năm mới Quý Nhân phù trợ, bước chân ra cửa gặp Thần Tài, tiền bạc rủng rỉnh cả năm!'
  },
  {
    rank: 'ĐẠI CÁT ĐẠI LỢI',
    text: 'Hoa mai nở rộ trước thềm, công danh bứt phá, tình duyên phơi phới như nắng mùa xuân!'
  },
  {
    rank: 'THƯỢNG CÁT',
    text: 'Vận khí hanh thông, làm một hưởng mười, túi tiền lúc nào cũng căng tròn lộc lá!'
  },
  {
    rank: 'HỒNG PHÚC TỀ THIÊN',
    text: 'Đầu năm hái lộc đầy tay, giữa năm mua vàng, cuối năm tậu xe, vạn sự viên mãn!'
  },
  {
    rank: 'PHÚ QUÝ CÁT TƯỜNG',
    text: 'Sao Thái Dương chiếu mệnh, chuyện buồn năm cũ qua đi, đón vận đỏ rực rỡ suốt 12 tháng!'
  },
  {
    rank: 'ĐÀO HOA RỰC RỠ',
    text: 'Tình duyên nở hoa, người thương tìm tới, tiền tình đều đỏ như son ngày Tết!'
  }
];

const CALLIGRAPHY_LIST = [
  {
    char: 'ĐẠI PHÁT',
    seal: 'PHÁT\nTÀI',
    couplet: '“Lộc biếc mai vàng xuân hạnh phúc — Đời vui sức khỏe Tết an khang”'
  },
  {
    char: 'PHÚ QUÝ',
    seal: 'KIM\nNGỌC',
    couplet: '“Tiền vào như nước sông Đà — Tiền ra nhỏ giọt như cà phê phin”'
  },
  {
    char: 'ĐẠI LỘC',
    seal: 'VẠN\nLỘC',
    couplet: '“Đầu xuân hái lộc bình an — Cả năm phú quý ngập tràn vinh hoa”'
  },
  {
    char: 'TIỀN ĐẦY TÚI',
    seal: 'THẦN\nTÀI',
    couplet: '“Vàng bạc đầy kho tiêu chẳng hết — Tình duyên phơi phới trọn mùa xuân”'
  },
  {
    char: 'VẠN SỰ NHƯ Ý',
    seal: 'ĐẠI\nCÁT',
    couplet: '“Cầu tài đắc tài, cầu lộc đắc lộc — Cầu bình an đắc vạn điều may”'
  },
  {
    char: 'TÌNH DUYÊN ĐỎ',
    seal: 'ĐÀO\nHOA',
    couplet: '“Xuân sang hoa nở ngập đường — Năm nay chắc chắn có người thương cùng về”'
  }
];

// Bộ Chữ Thư Pháp Hoàng Kim Đế Vương ĐỘC QUYỀN chỉ dành cho Top 1 Thần Tài
const IMPERIAL_KING_CALLIGRAPHY_LIST = [
  {
    char: 'CỬU NGŨ CHÍ TÔN',
    seal: 'ĐẾ\nVƯƠNG',
    couplet: '“Trên thông thiên văn dưới tường địa lý — Phú quý vinh hoa đứng đầu thiên hạ”'
  },
  {
    char: 'ĐỆ NHẤT PHÚ GIA',
    seal: 'CHÍ\nTÔN',
    couplet: '“Tiền chất thành núi vàng chất đầy kho — Một tay che trời vạn người ngưỡng mộ”'
  },
  {
    char: 'THẦN TÀI GIÁ LÂM',
    seal: 'LONG\nẤN',
    couplet: '“Rồng bay phượng múa đón bước chân vua — Lộc lá bốn phương tự tìm về túi”'
  },
  {
    char: 'LONG PHƯỢNG HỘ MỆNH',
    seal: 'THIÊN\nTỬ',
    couplet: '“Mệnh lớn như trời phúc dày như biển — Đánh đâu thắng đó vạn sự xưng vương”'
  }
];

// 12 tọa độ treo Bao Lì Xì Avatar trên tán Cây Mai (từ cành cao VIP xuống cành thấp)
const TREE_BRANCH_SLOTS = [
  { x: 50, y: 20 }, // Top VIP 1 (Ngai Rồng Đỉnh Cây)
  { x: 32, y: 26 }, // Top VIP 2
  { x: 68, y: 26 }, // Top VIP 3
  { x: 20, y: 40 },
  { x: 50, y: 38 },
  { x: 80, y: 40 },
  { x: 26, y: 55 },
  { x: 74, y: 55 },
  { x: 40, y: 52 },
  { x: 60, y: 52 },
  { x: 33, y: 68 },
  { x: 67, y: 68 }
];

// Danh sách người chơi mẫu cho chế độ Test / Giả lập
const SAMPLE_USERS = [
  { nickname: 'Minh Anh 99', comment: '1999 xin quẻ tình duyên ạ', avatar: 'https://api.dicebear.com/7.x/adventurer/svg?seed=MinhAnh&backgroundColor=ffdfbf' },
  { nickname: 'Hùng Đại Gia', comment: '1995 xin vía phát tài', avatar: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Hung&backgroundColor=ffd5dc' },
  { nickname: 'Ngọc Huyền 2k2', comment: '2002 năm nay có giàu không shop', avatar: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Huyen&backgroundColor=c0aede' },
  { nickname: 'Tuấn Phát Tài', comment: 'Xin quẻ đầu năm 1998', avatar: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Tuan&backgroundColor=d1d4f9' },
  { nickname: 'Bảo Trâm 🌸', comment: '2000 chúc chủ phòng phát tài', avatar: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Tram&backgroundColor=b6e3f4' },
  { nickname: 'Hoàng Long VIP', comment: '2001 tuổi Tỵ xin lộc', avatar: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Long&backgroundColor=ffdfbf' },
  { nickname: 'Khánh Linh 2k3', comment: '2003 xin quẻ công danh', avatar: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Linh&backgroundColor=ffd5dc' }
];
