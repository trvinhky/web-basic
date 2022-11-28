const listBlogs = [
  {
    id: "bg001",
    title: [
      "Chiếc đồng hồ của những CEO quyền lực nhất thế giới",
      "Đối với một số doanh nhân, một chiếc đồng hồ đeo tay không chỉ là thiết bị xem giờ. Thực tế, nó là một thông điệp.",
    ],
    image: "../../assets/images/blogs/blogs1.jpg",
    content: [
      "“Chiếc đồng hồ chính là “mũi nhọn” của con tàu phá băng. Tại một thành phố xa lạ, tôi hoàn toàn có thể phá vỡ mọi rào cản khi gặp gỡ bất kỳ ai bằng cụm từ duy nhất – đồng hồ đẹp”, Hamilton Powell, CEO Crown & Caliber, công ty cung cấp thị trường online cho việc mua bán đồng hồ cao cấp cho biết.",
      "“Một chiếc đồng hồ nói cho người khác biết bạn là tuýp người như thế nào và giá trị của bạn ra sao”.",
      "Dưới đây là danh sách 9 CEO của các công ty quyền lực bậc nhất trên thế giới, cùng chiếc đồng hồ đeo tay thân thuộc của họ:",
    ],
    other: [
      {
        title: "Doug McMillon, Chủ tịch và CEO Walmart",
        image: "",
        content: [
          "Ở độ tuổi 50, Doug McMillon là CEO trẻ nhất trong danh sách 9 vị CEO này. Ông đã là Chủ tịch và CEO Walmart kể từ tháng 2/2014. Trước khi đảm nhận vị trí này, McMillon là Chủ tịch và CEO của Walmart International, “bộ phận có tốc độ phát triển nhanh nhất trong toàn hệ thống Walmart”.",
          "Hiện tại, Walmart là công ty có số lượng nhân viên lớn nhất thế giới với 2,3 triệu người. Năm 2016, doanh thu của Công ty đạt 481,1 tỷ USD.",
          "Doug McMillon đeo chiếc đồng hồ Citizen Skyhawk A-T JY0000-53E với giá 479 USD. Không có gì ngạc nhiên khi sản phẩm này có thể đặt mua trên website của Walmart.",
        ],
      },
      {
        title: "Jeffrey Immelt, CEO General Electric",
        image: "",
        content: [
          "Chiếc đồng hồ Breitling Chronospace M78365 có giá 6.650 USD Jeffrey Immelt là CEO của hãng công nghiệp khổng lồ General Electric trong hơn 16 năm qua. Ông đã được vinh danh là “CEO tốt nhất thế giới” 3 lần bởi Barron.",
          "Bên cạnh đó, kể từ khi có Jeffrey Immelt là “thuyền trưởng”, General Electric được bầu chọn là “Công ty đáng ngưỡng mộ bậc nhất tại Mỹ” trong cuộc khảo sát thực hiện bởi Fortune.",
          "Với giá trị thị trường hơn 250 tỷ USD, General Electric là một trong những doanh nghiệp niêm yết lớn nhất trên thế giới. Năm 2016, doanh thu của hãng đạt 123,7 tỷ USD.",
          "Jeffrey Immelt thường đeo chiếc đồng hồ Breitling Chronospace M78365 có giá 6.650 USD. Một mẫu tương tự của chiếc đồng hồ này có thể được đặt trước tại website của hãng với giá 3.780 USD.",
        ],
      },
      {
        title: "Mark Fields, Chủ tịch và CEO Ford",
        image: "",
        content: [
          "Mark Fields là Chủ tịch và CEO Ford Motor Co kể từ tháng 7/2014. Ông được nhận đính chính là người đã thúc đẩy Công ty bước vào “những cơ hội tăng trưởng” mới như xe tự động, thu thập và phân tích dữ liệu.",
          "Ford là mộ trong những nhà sản xuất ô tô lớn nhất thế giới. Chiếc xe Ford F-150 là phương tiện thông dụng nhất tại Mỹ.",
          "Theo Luxury Bazaar, chiếc đồng hồ của Mark Fields là một phiên bản Jaeger LeCoultre Master Reserve de Marche với giá bán lẻ 9.350 USD. Tuy nhiên hiện tại không còn đặt mua được nữa.",
        ],
      },
      {
        title: "Tim Cook, CEO Apple",
        image: "../../assets/images/blogsDetail/blog1-1.webp",
        content: [
          "Chiếc đồng hồ thông minh Apple Watch được bán với giá 269 USD. Với giá trị thị trường hơn 700 tỷ USD, Apple là công ty có giá trị lớn nhất thế giới. Và người đang cai trị vương quốc này là Tim Cook. Ông đảm nhận vị trí CEO kể từ năm 2011.",
          "Theo CNBC, Tim Cook đã giúp giá cổ phiếu của Apple tăng hơn 175% kể từ khi được bổ nhiệm làm CEO vào tháng 8/2011. Màn biểu diễn này vượt trội hơn hẳn so với các chỉ số S&P 500, Nasdaq và Dow Jones trong cùng giai đoạn.",
          "Người ta hiếm khi thấy Tim Cook xuất hiện mà không có chiếc đồng hồ thông minh Apple Watch trên tay. Sản phẩm này được bán với giá 269 USD.",
        ],
      },
      {
        title: "Akio Toyoda, Chủ tịch Toyota",
        image: "../../assets/images/blogsDetail/blog1-2.webp",
        content: [
          "Chiếc đồng hồ của Akio Toyoda là Patek Philippe Calatrava 5119G có giá 21.500 USD. Akio Toyoda là Chủ tịch Toyota Motor Corp, nhà sản xuất ô tô lớn nhất thế giới, kể từ năm 2009. Trước đó, ông được bổ nhiệm vào vị trí HĐQT từ năm 2000 và lên Phó Chủ tịch năm 2005.",
          "Trong năm tài chính gần nhất, Toyota đã sản xuất 8,7 triệu phương tiện với lợi nhuận ròng 19 tỷ USD, tăng 6% so với năm 2015.",
        ],
      },
      {
        title: "John Watson, CEO Chevron",
        image: "../../assets/images/blogsDetail/blog1-3.webp",
        content: [
          "John Watson là CEO và Chủ tịch HĐQT Chevron Corp kể từ năm 2010. Đây là công ty năng lượng chuyên sản xuất khí đốt tự nhiên và năng lượng địa nhiệt, cũng như các nguồn nhiên liệu tái chế khác. Với giá trị thị trường hơn 200 tỷ USD, đây là một trong những doanh nghiệp niêm yết lớn nhất thế giới.",
          "John Watson thường đeo chiếc đồng hồ Breitling Aerospace E79362 có giá 2.590 USD.",
        ],
      },
      {
        title: "Randall Stephenson, CEO AT&T",
        image: "../../assets/images/blogs/blogs1.jpg",
        content: [
          "AT&T là tập đoàn viễn thông đa quốc gia hiện đang sở hữu các thương hiệu như DirectTV, Cricket Wireless và Roots Sports, với giá trị thị trường hơn 250 tỷ USD.",
          "Randall Stephenson là Chủ tịch, CEO của AT&T kể từ năm 2007. Năm 2016, ông được tạp chí Chief Executive vinh danh là CEO của năm.",
          "Stephenson sở hữu chiếc đồng hồ khá đơn giản – TAG Heuer Kirium CL111A có giá 415 USD.",
        ],
      },
      {
        title: "Michael Corbat, CEO Citigroup",
        image: "../../assets/images/blogsDetail/blog1-4.webp",
        content: [
          "Michael Corbat là CEO của Citigroup, một trong những ngân hàng lớn nhất thế giới, kể từ năm 2012. Ông đã làm việc tại nhà băng này kể từ khi tốt nghiệp Đại học Harvard năm 1983, trải qua nhiều vị trí như CEO khu vực châu Âu, Trung Đông và châu Phi, Giám đốc bộ phận kinh doanh khách hàng doanh nghiệp toàn cầu… trước khi trở thành CEO.",
          "Corbat đeo chiếc đồng hồ Jaeger LeCoultre Master Perpetual Calendar Q149242A có giá 11.500 USD.",
        ],
      },
      {
        title: "Jeff Bezos, CEO Amazon",
        image: "../../assets/images/blogsDetail/blog1-5.webp",
        content: [
          "Jeff Bezos là người sáng lập, Chủ tịch và CEO của Amazon.com, hiện đang là người đàn ông giàu thứ 5 thế giới với khối tài sản ước tính khoảng 71,8 tỷ USD vào tháng 1/2017, theo Forbes. Năm 2013, Bezos đã mua lại The Washington Post với giá 250 triệu USD. Hiện giá trị thị trường của Amazon ở mức trên 400 tỷ USD.",
          "Bezos thường xuyên sử dụng chiếc đồng hồ Ulysse Nardin Dual Time 233-88-7 có giá 7.700 USD.",
        ],
      },
    ],
  },
  {
    id: "bg002",
    title: [
      "12 chiếc đồng hồ dành cho nữ giới đắt giá nhất mọi thời đại",
      "Công nghiệp sản xuất đồng hồ sang trọng có dấu hiệu chững lại trong hai năm gần đây do nhu cầu giảm. Tuy nhiên, có một điểm sáng đó chính là dòng sản phẩm dành cho nữ giới vẫn duy trì được giá trị qua mọi giai đoạn.",
    ],
    image: "../../assets/images/blogs/blogs2.jpg",
    content: [
      "Sự nổi tiếng của những thương hiệu đồng hồ nữ không phải là nhất thời và nó cũng sẽ không xảy ra nếu không có sự xâm nhập của các nhãn hàng thời trang nổi tiếng như Dior hay Chanel. Đồng hồ dành cho nữ giới cũng ngày càng thay đổi và phát triển vững mạnh nhưng nhưng đâu đó vẫn còn lại giá trị, thương hiệu được trân quý.",
      "Những chiếc đồng hồ đeo tay đầu tiên được thiết kế dành riêng cho phụ nữ vào những năm 1800. Thời đó, chiếc đồng hồ còn được gọi là bộ tính giờ khá cồng kềnh và đặt trong túi áo khoác chứ không phải đeo tay như hiện tại. Đến những năm 1900, từ những nhà sản xuất mới trong ngành công nghiệp chế tạo đồng hồ như Christophe Claret, Roger Dubuis đến các chuyên gia lâu năm hơn như Cartier, Piaget và Van Cleef & Arpels đồng loạt khám phá ra cách chế tạo đồng hồ đeo cổ tay đơn giản, tinh tế mà mềm mại dành riêng cho nữ giới, khác biệt với loại đồng hồ đeo tay to bản, mạnh mẽ của nam giới.",
      "Cho đến ngày nay, một số phiên đồng hồ nữ giới vẫn luôn được đánh giá cao về thiết kế tinh tế cũng như chất lượng bền vững, vượt qua giá trị thời gian và không ngừng tung ra những bộ sưu tập mới thu hút sự say mê của phái đẹp.",
    ],
    other: [
      {
        title: "1. Jaeger-LeCoultre Rendez-Vous Sonatina",
        image: "../../assets/images/blogsDetail/blog2-1.webp",
        content: [
          "Bạn cần một lời nhắc nhở kín đáo cho công việc hoặc cuộc hẹn sắp tới? Chiếc đồng hồ Jaeger-LeCoultre Rendez-Vous Sonatina có tính năng chính xác như vậy. Bộ sưu tập Rendez-Vous ban đầu được ra mắt vào năm 2012, với mặt số tròn dành riêng cho nữ giới muốn tìm kiếm sự thay thế cho phiên bản mặt vuông. Năm 2017, hãng lại tiếp tục cho ra mắt sản phẩm Rendez-Vous Sonatina của nhà thiết kế Peter Chong.",
          "Đặc trưng của chiếc đồng hồ này là bộ điều khiển được đánh đấu bởi những ngôi sao vô cùng tinh tế có khả năng di chuyển xung quanh mặt số. Bộ sưu tập có hai phiên bản vàng trắng và vàng hồng nạm kim cương. Phần mặt số bạc được chạm khắc bởi những đường vân Guilloché toả ra từ chính giữa đồng hồ làm tăng chi tiết nữ tính. Vành bezel được nạm kim cương cao cấp làm tăng thêm sự sang trọng, tinh tế và giá trị cho chiếc đồng hồ. Phiên bản vàng hồng có giá niêm yết là 42.500 USD, trong khi phiên bản vàng trắng có mức giá lên tới 59.500 USD.",
        ],
      },
      {
        title: "2. A.Lange & Sohne Little Lang 1",
        image: "../../assets/images/blogsDetail/blog2-2.webp",
        content: [
          "Bộ sưu tập đồng hồ A.Lange & Shone Little Lang là sản phẩm đột phá của hãng với hai màn hình hiển thị mặt số mô phỏng mặt trời và mặt trăng cùng với các đường vân quỹ đạo. Mặt đồng hồ 36.8mm được làm từ vàng rắn hoặc vàng hồng.",
          "So với Lange 1 Moon Phase, phiên bản mới nhất của chiếc đồng hồ cổ điển này nhỏ hơn 1.7mm. Màu sắc ấm áp của vành bezel được đánh bóng tương phản với mặt đồng hồ. Bộ dây da cá sấu cao cấp 7 màu cho phái đẹp thoải mái lựa chọn phù hợp với phong cách. Chiếc đồng hồ này có giá khoảng 40.800 USD.",
        ],
      },
      {
        title: "3. Breguet Tradition Dame",
        image: "../../assets/images/blogsDetail/blog2-3.webp",
        content: [
          "Được coi là một trong những sản phẩm nổi bật tại hội chợ triển lãm Baselworld năm 2016, Breguet Tradition Dame là thứ trang sức xa xỉ thật sự. Phong cách cơ bản trong cỗ máy của Traditon được lấy cảm hứng từ dòng sản phẩm “soucription” của Breguet mang thiết kế cực kì độc đáo.",
          "Chiếc đồng hồ Tradition Dame có bộ vỏ 37mm được làm từ vàng hồng 18k có hình dáng cong đồng xu cùng với vành bezel nạm 68 viêm kim cương tạo nên vẻ tinh tế và sang trọng. Điểm đặc biệt trong thiết kế của Breguet chính là người đeo có thể nhìn thấy cả hai mặt của cỗ máy Caliber 505SR nhờ mặt sau chiếc đồng hồ được làm từ pha lê. Đây là thiết kế đặc trưng của dòng sản phẩm này mà không phải hãng nào cũng có được.",
        ],
      },
      {
        title: "4. Christophe Claret Marguerite",
        image: "../../assets/images/blogsDetail/blog2-4.webp",
        content: [
          "Hãng Christophe Claret nổi tiếng với những mẫu đồng hồ lãng mạn khiến phái yếu phải say mê, đặc biệt đối với mẫu Marguerite. Đồng hồ Marguerite có thiết kế rực rỡ như một bông hoa cúc với nhụy hoa được làm bằng ngọc cẩm thạch và những cánh hoa được tạo bởi 609 viên kim cương. Chưa kể, bộ vỏ 42.5mm làm bằng vàng trắng hoặc vàng hồng được bao phủ bởi hơn 1000 viên kim cương nhỏ khác làm nổi bật thiết kế bông hoa. Đó là lý do vì sao chiếc đồng hồ này có giá trị lên đến 120.000 USD.",
          "Ngoài ra còn có 2 chú bướm được khắc họa chân thực tạo sự sinh động y như một bông cúc đang tỏa hương hấp dẫn người khác. Con bướm màu sẫm tượng trưng cho phái nữ đậu trên cành hoa cúc chính là kim chỉ giờ. Con bướm nhạt màu hơn tượng trưng cho phái nam chỉ báo phút. Đó là thông điệp tình yêu sâu đậm, vững bền đầy ý nghĩ mà thương hiệu muốn dành tặng đến mỗi khách hàng.",
        ],
      },
      {
        title: "5. Hermes Cape Cod 25",
        image: "../../assets/images/blogsDetail/blog2-5.webp",
        content: [
          "Dòng sản phẩm đánh dấu mốc 25 năm lịch sử ra mắt của Hermes trong lĩnh vực sản xuất đồng hồ nữa. Đúng như cái tên của nó, Hermes Cape Cod 25 có 25 phiên bản dây đeo da cá sấu mang màu sắc rực rỡ. Mặt đồng hồ hình vuông 29mm làm từ thép cao cấp chống gỉ được bao phủ bởi 42 viên kim cương 0.75 carat. Kim đồng hồ cũng được khảm bằng ngọc trai mang dáng vẻ thanh lịch nhưng vẫn sang trọng.",
        ],
      },
      {
        title: "6. Hublot One Click Cuddly Cuff",
        image: "../../assets/images/blogsDetail/blog2-6.webp",
        content: [
          "Hublot đã khẳng định được danh tiếng đáp ứng phong cách quý tộc, sang trọng cho phái đẹp sau khi tung ra bộ sưu tập đồng hồ Big Bang, trong đó không thể không kể đến chiếc Hublot One Click Cuddly Cuff. Mặt đồng hồ 39mm được làm bằng vàng hoặc kim cương tùy chọn bao phủ 42 viên kim cương có khả năng chống thấm nước ở độ sâu 100m.",
          "Tuy nhiên, điểm nhấn đặc biệt của chiếc đồng hồ này nằm ở bộ dây đeo da cao cấp kết hợp lông cừu mềm mại, mang màu sắc tự nhiên. Màu sắc dây đeo cũng đa dạng từ xám, pha lê, ngọc bích…",
        ],
      },
      {
        title: "7. Franck Muller Flower",
        image: "../../assets/images/blogsDetail/blog2-7.webp",
        content: [
          "Lấy cảm hứng từ thế giới loài hoa, Franck Muller Flower được thiết kế, trang trí với những bông hoa lan mảnh mai khảm từ ngọc trai mang dáng vẻ vô cùng kiêu kì. Bộ sưu tập Franck Muller Flower cũng có nhiều màu sắc, màu của mặt đồng hồ sẽ đồng nhất với màu của hoa lan và màu dây đeo.",
        ],
      },
      {
        title: "8. Blancpain Ladybird",
        image: "../../assets/images/blogsDetail/blog2-8.webp",
        content: [
          "Blancpain Ladybird ra mắt lần đầu tiên vào năm 1956, nổi tiếng là dòng đồng hồ đeo tay nhỏ nhất thế giới. Thậm chí, phiên bản vàng trắng mới nhất chỉ có đường kính 21.5mm được trang bị bộ máy cực nhỏ. Bộ khung bezel với 38 viên kim cương sáng làm nổi bật sự nữ tính, mềm mại về kiểu dáng.",
        ],
      },
      {
        title: "9. Louis Vuitton Tambour Slim Infini",
        image: "../../assets/images/blogsDetail/blog2-9.webp",
        content: [
          "Bộ sưu tập Tambour Slim Infini được thiết kế tái hiện lại những bông hoa Monogram huyền thoại – biểu tượng của Louis Vuitton. Chính giữa mặt đồng hồ là một viên ngọc trai lớn, sáng lấp lánh tượng trưng cho trụy hoa được bao bọc bởi 12 cánh hoa nạm kim cương. Mặt đồng hồ không biểu thị số mà thay vào đó đầu 12 cánh hoa sẽ đánh dấu mốc 12 giờ đồng hồ.",
          "Tambour Slim Infini cũng có hai phiên bản dựa theo kích thước mặt 35mm với 348 viên kiêm cương tổng cộng 2 carat và phiên bản kích thước 28mm có 224 viên kim cương 0.78 carat. Giá niêm yết của mỗi chiếc đồng hồ khoảng từ 33.000 USD.",
        ],
      },
      {
        title: "10. Tag Heuer Link Lady",
        image: "../../assets/images/blogsDetail/blog2-10.webp",
        content: [
          "Chiếc đồng hồ cổ điển có mặt ngọc trai màu xám xanh mang lại chiều sâu và cảm giác yên bình cho người đeo. Mặt đồng hồ 32mm được làm bằng thép cao cấp. Dây đeo cùng chất liều với thiết kế hình chữ S tạo phong cách vừa cứng rắn lại vừa sang trọng cho những ai cá tính.",
        ],
      },
      {
        title: "11. Girard-Perregaux Laureato",
        image: "../../assets/images/blogsDetail/blog2-11.webp",
        content: [
          "Thương hiệu Girard-Perregaux đã giới thiệu dòng sản phẩm phiên bản dành cho nữ giới có hai kích cỡ 38mm và 34mm với chất liệu thép không gỉ hoặc vàng. Mặt hiển thị ngày được làm bằng bạc và mặt đệm bezel được bao bọc bởi 56 viên kim cương.",
          "Ngoài da, dây đeo của Girard-Perregaux Laureato cũng tùy chọn theo sở thích của khách hàng bằng kim loại, da cá sấu hoặc dây đeo cao su.",
        ],
      },
      {
        title: "12. Roger Dubuis Excalibur Essential 36 Automatic",
        image: "../../assets/images/blogsDetail/blog2-12.webp",
        content: [
          "Roger Dubuis Excalibur Essential 36 Automatic là dòng đồng hồ cao cấp hiếm hoi có bộ vỏ bằng kim cương được sử lý bởi công nghệ phủ DLC titanium. Mặt kính chiếc đồng hồ cũng được bao phủ màu xanh đường kính 36mm.",
          "Đây là dòng sản phẩm sản xuất giới hạn của hãng Roger Dubuis, chỉ có 28 người trên thế giới tự hào được đeo chiếc Excalibur Essential 36 Automatic siêu cao cấp này trên tay.",
        ],
      },
    ],
  },
  {
    id: "bg003",
    title: [
      "10 thương hiệu đồng hồ cao cấp hàng đầu mọi quý ông đều quan tâm, Rolex xếp hạng số 3",
    ],
    image: "../../assets/images/blogs/blogs3.jpg",
    content: [""],
    other: [
      {
        title: "1. Audemars Piguet",
        image: "../../assets/images/blogsDetail/blogs3-1.webp",
        content: [
          "Được thành lập vào năm 1875 bởi Jules-Louis Audemars và Edward-Auguste Piguet, Audemars Piguet sản xuất ra 36.000 chiếc đồng hồ mỗi năm. Đây chính là thương hiệu đồng hồ đầu tiên tạo ra chiếc đồng hồ thể thao bằng thép vào năm 1972 (tên là Royal Oak). Sau đó, đến năm 1993, chính thương hiệu Audemars Piguet cũng là người tiên phong trình làng chiếc đồng hồ đeo tay ngoại cỡ đầu tiên có tên Royal Oak Offshore.",
        ],
      },
      {
        title: "2. Patek Philippe",
        image: "../../assets/images/blogsDetail/blogs3-2.webp",
        content: [
          "Thương hiệu đồng hồ Thụy Sỹ, Patek Philippe & Co được thành lập vào năm 1851. Thương hiệu này nổi tiếng với những chiếc đồng hồ có cơ chế phức tạp và hiện đại nhất ẩn dưới lớp vỏ cổ điển, truyền thống. Nói đến một phong cách hoàng gia quý tộc, chắc chắn phải nói đến Patek Philippe đầu tiên.",
        ],
      },
      {
        title: "3. Rolex",
        image: "../../assets/images/blogs/blogs3.jpg",
        content: [
          "Rolex có lẽ là cái tên được công chúng toàn cầu biết đến nhiều nhất và cũng mong muốn sở hữu nhất, mặc dù không phải là một thương hiệu quá cao cấp (tất nhiên, Rolex cũng vẫn rất đắt). Rolex luôn giữ màu sắc Anh Quốc cổ điển trong các thiết kế của mình, ẩn dấu trong đó là bộ máy mạnh mẽ vượt thời gian. Con số 2.000 chiếc đồng hồ bán ra mỗi ngày đã phần nào chứng tỏ được độ phổ biến của thương hiệu Rolex trên toàn cầu.",
        ],
      },
      {
        title: "4. Cartier",
        image: "../../assets/images/blogsDetail/blogs3-3.webp",
        content: [
          "Cartier là một trong những thương hiệu đồng hồ và đồ trang sức nổi tiếng nhất Thế giới, đặc biệt được giới ‘sao’, người nổi tiếng yêu thích và lăng-xê. Được thành lập vào năm 1847 tại Pháp, Cartier là thương hiệu đầu tiên dám tự phô trương bản thân bằng các chất liệu cao cấp cũng như thiết kế sang trọng. Chỉ cần nhìn những chữ số La Mã trên mặt đồng hồ, bạn nhất định sẽ biết đó là Cartier.",
        ],
      },
      {
        title: "5. Omega",
        image: "../../assets/images/blogsDetail/blogs3-4.webp",
        content: [
          "Omega hân hạnh là đồng hồ tính giờ chính thức đầu tiên được sử dụng cho quân đội Hoàng gia Anh vào năm 1917. Hiện nay, Omega là một trong những thương hiệu được biết đến nhiều nhất trên Thế giới, tất nhiên kéo theo đó là mức tiêu thụ không kém các đồng hồ Rolex, Cartier kể trên.",
        ],
      },
      {
        title: "6. TAG Heuer",
        image: "../../assets/images/blogsDetail/blogs3-5.webp",
        content: [
          "Không chỉ hoạt động trong ngành công nghiệp chế tác đồng hồ cao cấp, TAG Heuer cũng là 'gương mặt' quen thuộc trong lĩnh vực sản xuất kính mắt, điện thoại di động và phụ kiện thời trang. Cái tên TAG Heuer là viết tắt của 'Techniques d'Avant Garde' và Heur đề cập đến người sáng lập, Edouard Heuer. Điểm đặc biệt của những chiếc đồng hồ TAG Heuer chính là phong cách thể thao 'hầm hố' và bộ máy chronographs cực kỳ mạnh mẽ.",
        ],
      },
      {
        title: "7. Hublot",
        image: "../../assets/images/blogsDetail/blogs3-6.webp",
        content: [
          "So với các thương hiệu khác, Hublot có thể là một cái tên “non trẻ” nhưng đã sớm khẳng định được vị thế của mình không hề thua kém so với các tay “lão làng” khác. Trên thực tế, từ khi bắt đầu vào năm 1980, Hublot đã trở thành một trong những tên tuổi có uy tín nhất trong ngành. Rất nhiều BST của Hublot đã giành các giải thưởng danh giá của ngành, là động lực để thương hiệu tiếp tục đưa ra những đột phá mới.",
        ],
      },
      {
        title: "8. Montblanc",
        image: "../../assets/images/blogsDetail/blogs3-7.webp",
        content: [
          "Có thể bạn chỉ biết đến Montblanc với những chiếc bút trên tay các tỷ phú, người lãnh đạo. Nhưng Montblanc cũng là một cái tên đáng tin cậy khi họ tìm đến phụ kiện như đồng hồ đeo tay. Toàn bộ đồng hồ của Montblanc được chế tác thủ công, với phong cách cổ điển lịch lãm như những quý ông thành đạt. Tương lai hãng cũng đang nghiên cứu sản xuất những chiếc đồng hồ thông minh để đáp ứng được nhiều hơn các nhu cầu của khách hàng toàn cầu.",
        ],
      },
      {
        title: "9. Seiko",
        image: "../../assets/images/blogsDetail/blog2-8.webp",
        content: [
          "Cái tên Nhật Bản này đã quá quen thuộc với giới mộ điệu bởi những chiếc đồng hồ cơ khí làm từ thạch anh cao cấp. Được thành lập vào năm 1881 tại Tokyo và sát nhập thành tập đoàn vào năm 1917, đến nay Sieko đã mở rộng lĩnh vực sản xuất sang cả đồ trang sức và thậm chí cả máy in nữa.",
        ],
      },
      {
        title: "10. Breitling",
        image: "../../assets/images/blogsDetail/blogs3-9.webp",
        content: [
          "Chốt lại danh sách lại là một cái tên đến từ Thụy Sỹ, Breitling. Được thành lập vào năm 1884, đồng hồ Breitling nổi tiếng với độ bền và chính xác tuyệt đối, điển hình là những chiếc đồng hồ dùng cho phi công chiến đấu hay thợ lặn chuyên nghiệp.",
        ],
      },
    ],
  },
  {
    id: "bg004",
    title: [
      "6 chiếc đồng hồ ấn tượng tại Oscar 2019: Từ những thương hiệu đình đám với cái giá “cắt cổ”",
      "Bên cạnh những Cartier, IWC và Jaeger-LeCoultre, có nhiều chiếc đồng hồ thuộc các thương hiệu “độc-lạ” khác được chú ý.",
    ],
    image: "../../assets/images/blogs/blogs4.jpg",
    content: [
      "Oscar là giải thưởng danh giá của Viện hàn lâm dành cho những bộ phim tuyệt vời nhất trong năm qua. Và để kỷ niệm cho khoảnh khắc một lần trong đời, chẳng cớ gì lại không diện lên những bộ đồ nổi bật nhất. Điểm nhấn trong trang phục của các diễn viên nam chính là món phụ kiện quen thuộc: đồng hồ.",
      "Dưới đây là những chiếc đồng hồ độc nhất đã hiện diện trên cổ tay những người đàn ông hàng đầu Hollywood trong đêm tiệc Oscar – Lễ trao giải thưởng điện ảnh danh giá nhất thế giới:",
    ],
    other: [
      {
        title: "Michael B.Jordan với một chiếc Piager Polo Tourbillon",
        image: "../../assets/images/blogsDetail/blogs4-1.jpg",
        content: [
          "Đại sứ thương hiệu của Piaget Michael B. Jordan là một trong số ít những người đàn ông luôn rất thoải mái trên thảm đỏ. Đồng hành cùng mình, nam diễn viên đã chọn một chiếc Piaget Polo Tourbillon bằng vàng trắng 18 cara với 113 viên kim cương rực rỡ (khoảng 1.03 carat), 566 viên kim cương trắng (khoảng 4.78 carat) và một viên kim cương tròn lớn (khoảng 0.08 carat). Giá trị của chiếc đồng hồ này được giữ kín.",
        ],
      },
      {
        title: "Henry Gold với chiếc đồng hồ IWC Portugieser Automatic",
        image: "../../assets/images/blogsDetail/blogs4-2.jpg",
        content: [
          "Nam diễn viên mới nổi qua bộ phim Crazy Rich Asians, Henry Gold xuất hiện với bộ tuxedo bằng vải nhung cao cấp của Ralph Lauren Purple Label với chiếc đồng hồ đeo tay màu đen đơn giản từ thương hiệu IWC Portugieser Automatic (12.700 USD). Chiếc đồng hồ này có đèn báo dự trữ năng lượng trong 7 ngày với màn hình hiển thị ngày, hệ thống tự lên dây Pellaton và cỗ máy bằng vàng 18 carat có thể nhìn xuyên thấu qua lớp vỏ sau.",
          "Đáng nói là chiếc đồng hồ này cũng được diện bởi Paul Rudd nhưng với phiên bản màu xanh biển.",
        ],
      },
      {
        title: "Chris Evan với chiếc đồng hồ IWC Portugieser Chronograph",
        image: "../../assets/images/blogsDetail/blogs4-3.jpg",
        content: [
          "Để nổi bật hơn bộ vest nhung màu ngọc lam của mình, Chris Evan đã chọn một chiếc đồng hồ mặt số IWC Portugieser Chronograph với các mặt phụ được xếp theo chiều dọc. Chiếc đồng hồ có vỏ ngoài bằng vàng 5N 18carat và dự trữ năng lượng lên tới 44 giờ.",
          "Evan hẳn rất biết cách phối đồ bởi để có thể nổi bật được trên bộ đồ màu ngọc lam thì chỉ có phụ kiện màu vàng hoặc bạc. Được biết giá của chiếc đồng hồ vào khoảng 16.600 USD.",
        ],
      },
      {
        title: "Jimmy Chin với chiếc đồng hồ Panerai Luminor 1950 GMT",
        image: "../../assets/images/blogsDetail/blogs4-4.jpg",
        content: [
          "Chiếc đồng hồ có vẻ ngoài khá “bình dị” này thực chất lại rất phù hợp với hình tượng và ý nghĩa bộ phim mà Jimmy Chin đạo diễn. Tối qua, Jimmy Chin cùng với vợ và đồng đạo diễn Elizabeth Chai Vasarhelyi, đã mang về giải Oscar cho Free Solo. Đây là bộ phim tài liệu về nhà leo núi tự do Alex Honnold khi anh trở thành người đầu tiên tự do leo lên Bức tường El Capitan cao 3.000ft của Yosemite. Không có dây thừng hoặc thiết bị an toàn, anh đã hoàn thành chiếc công vĩ đại nhất trong lịch sử leo núi.",
          "Jimmy Chin đã ở đó, đồng hành cùng Honnold để chinh phục ngọn núi đó. Và đồng thời, chính Chin cũng là một nhà leo núi tài ba. Đến với Oscar, anh chọn chiếc đồng hồ không thể phù hợp hơn là Panerai Luminor 1950 GMT(8.700 USD), cho phép thấy được 2 múi giờ khác nhau mà còn có thiết bị chống sốc incabloc. Trong trường hợp xấu khi Chin gặp bất trắc trong quá trình quay phim thì chiếc đồng hồ của anh vẫn sẽ tiếp tục hoạt động.",
        ],
      },
      {
        title:
          "Nicholas Hoult và Spike Lee với đồng hồ Jaeger-LeCoulte Reverso",
        image: "../../assets/images/blogsDetail/blogs4-5.jpg",
        content: [
          "Lại một chiếc đồng hồ được diện đến 2 lần bởi hai nam diễn viên Nicholas Hoult và nhà sản xuất đình đám Spike Lee. Không hẹn mà gặp, cả hai cùng chọn chiếc đồng hồ đến từ thương hiệu Jaeger-LerCoulte Reverso, chỉ có màu sắc là khác nhau.",
          "Nếu nhà sản xuất Spike Lee chọn phiên bản bằng thép không gỉ đơn giản Reverso Classic Large Duoface Small Seconds có giá 8.700 USD để cân đối lại với bộ đồ màu tím rực rỡ, đôi Air Jordans mạ vàng thì nam diễn viên của bộ phim “The Favorite” lại chọn chiếc đồng hồ vỏ ngoài vàng hồng có giá đến 20.100 USD. Anh diện một bộ tuxedo đen của Dior với thiết kế độc đáo, có một chiếc khăn choàng quấn từ một vạt áo quanh lưng và thắt lưng rồi buông rủ ở một bên chân.",
        ],
      },
      {
        title: "Ryan Seacrest với chiếc đồng hồ Rolex Daytona Ref. 6263",
        image: "../../assets/images/blogsDetail/blogs4-6.jpg",
        content: [
          "Là một người “chơi” đồng hồ nổi tiếng, không lạ khi Ryan Seacrest có một BST khổng lồ những chiếc đồng hồ đắt đỏ và độc đáo bậc nhất. Đặc biệt nhất trong số đó chính là chiếc đồng hồ Rolex Daytona Ref. 6263 từng được trả giá 225.000 USD trong một phiên đấu giá Phillips.",
          "Chiếc đồng hồ bằng vàng ròng này được sản xuất giới hạn 100 chiếc/năm, cho thấy sự quý giá tột đỉnh của nó. Quả thật, sự xuất hiện của chiếc đồng hồ Rolex này áp đảo cả bộ cánh in hoa cà tím sang trọng của nhà sản xuất. trên thảm đỏ Oscar",
        ],
      },
    ],
  },
  {
    id: "bg005",
    title: [
      "Casio sẽ ra mắt đồng hồ thông minh thương hiệu G-Shock để cạnh tranh với Apple Watch?",
      "Có tin Casio dự định trình làng smartwatch G-Shock trong vòng 2 năm tới.",
    ],
    image: "../../assets/images/blogs/blogs5.jpg",
    content: [
      "Chắc hẳn chúng ta không ai là xa lạ với thương hiệu đồng hồ điện tử G-Shock tới từ Casio nữa. Và trong kỷ nguyên số hóa hiện tại, có vẻ như Casio quyết định sẽ tung ra một chiếc smartwatch dưới thương hiệu G-Shock trong tương lai, tích hợp nhiều tính năng thông minh.",
      "Cụ thể, các nguồn tin từ thị trường Nhật Bản đã cho biết, chiếc smartwatch thương hiệu G-Shock sẽ được Casio trình làng vào năm 2021, đi kèm nhiều tính năng thông minh tương tự với các thiết bị Apple Watch, ngoài ra chiếc đồng hồ này cũng sẽ tích hợp sẵn các cảm biến đo nhịp tim hay GPS giúp thiết bị có khả năng theo dõi sức khỏe của người dùng.",
      "Casio cũng công bố một bản tài liệu cho thấy có khả năng các thiết bị đồng hồ thông minh của G-Shock sẽ có tên riêng là G-Smart, cùng với nhiều tính năng fitness khác.",
      "../../assets/images/blogsDetail/blogs5-1.webp",
      "Smartwatch dưới thương hiệu mẹ G-Shock sẽ có tên là G-Smart?",
      "G-Shock là một trong những thương hiệu đồng hồ điện tử với bề dày lịch sử 35 năm, với hàng loạt những chiếc đồng hồ đình đám cũng như có chất lượng cực kỳ tốt so với giá thành mà người dùng phải bỏ ra. Với kỷ nguyên số hóa hiện nay, cũng sẽ không có gì quá ngạc nhiên nếu G-Shock đang phát triển một mẫu smartwatch cho riêng mình. Vấn đề chỉ còn nằm ở chỗ liệu Casio sẽ có kế hoạch gì để có thể thu hút người dùng, cũng như cạnh tranh với các đối thủ khác, đặc biệt là Apple Watch khi mới bước chân vào thị trường thiết bị đeo thông minh.",
    ],
    other: [],
  },
];
