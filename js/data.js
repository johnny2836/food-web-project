// 資料
// 用戶
var member = [{
    name: 'Anna',
    phoneNum: '0987654321',
    eMail: 'e0987654321@gmail.com',
    password: 'e12345',
    address: '台北市中正區濟南路一段',
    cardholder: '陳曉敏',
    bank: '中國信託商業銀行',
    cardNo: '1234567856789101',
    like: ['一之軒信義店', '小木屋鬆餅', 'LANO食堂', '昀昀甜點', '不萊梅義大利麵', '捌月肆日甜點坊', '露特西亞', '紅gimbap飯捲']
}]

// 店家
var vendor = [{
    last: 4,
    pricePre: '$100-200',
    price: '$50-100',
    vendorName: '一之軒信義店',
    time: '明日 19:00-20:00',
    score: 4.5,
    distance: '1.5',
    pic: 'ijysheng.jpg',
    join: 'Sun Nov 28 2021 12:00:00 GMT+0800'
}, {
    last: 3,
    pricePre: '$190',
    price: '$100',
    vendorName: '牛有廖',
    time: '明日 19:30-20:30',
    score: 4.3,
    distance: '1.0',
    pic: 'beefull.jpg',
    join: 'Sun Nov 28 2021 12:00:00 GMT+0800'
}, {
    last: 4,
    pricePre: '$240',
    price: '$100',
    vendorName: '良作廚房',
    time: '明日 12:30-13:30',
    score: 4.0,
    distance: '0.6',
    pic: 'fresh_bowl.jpeg',
    join: 'Sun Nov 28 2021 12:00:00 GMT+0800'
}, {
    last: 3,
    pricePre: '$310',
    price: '$150',
    vendorName: 'Le Flam 樂芙坊',
    time: '明日 20:00-21:00',
    score: 4.8,
    distance: '2.4',
    pic: 'Le_Flam.jpg',
    join: 'Sun Nov 28 2021 12:00:00 GMT+0800'
}, {
    last: 1,
    pricePre: '$220',
    price: '$110',
    vendorName: '飛翔南洋料理',
    time: '明日 20:00-21:30',
    score: 4.2,
    distance: '1.3',
    pic: 'Toko_indo_feifei.jpg',
    join: 'Sun Nov 28 2021 12:00:00 GMT+0800'
}, {
    last: 4,
    pricePre: '$95',
    price: '$50',
    vendorName: '小木屋鬆餅',
    time: '明日 19:00-20:00',
    score: 4.5,
    distance: '2.5',
    pic: 'shinemood.jpg',
    join: 'Sun Nov 28 2021 12:00:00 GMT+0800'
}, {
    last: 2,
    pricePre: '$175',
    price: '$80',
    vendorName: 'LANO食堂',
    time: '明日 13:00-14:00',
    score: 4.3,
    distance: '1.6',
    pic: 'lano.jpg',
    join: 'Sun Nov 28 2021 12:00:00 GMT+0800'
}, {
    last: 1,
    pricePre: '$360',
    price: '$180',
    vendorName: '順億鮪魚專賣店',
    time: '明日 20:00-21:30',
    score: 4.2,
    distance: '1.8',
    pic: 'soonyi.jpg',
    join: 'Sun Nov 28 2021 12:00:00 GMT+0800'
}, {
    last: 1,
    pricePre: '$240',
    price: '$120',
    vendorName: '低卡健康廚房',
    time: '明日 14:00-15:00',
    score: 4.0,
    distance: '2.8',
    pic: 'green_table.jpeg',
    join: 'Sun Nov 28 2021 12:00:00 GMT+0800'
}, {
    last: 4,
    pricePre: '$105',
    price: '$50',
    vendorName: '溫德德式烘焙餐館',
    time: '明日 19:30-20:30',
    score: 4.1,
    distance: '0.4',
    pic: 'wendel_s_german_bakery_Bistro.jpg',
    join: 'Sun Nov 28 2021 12:00:00 GMT+0800'
}, {
    last: 3,
    pricePre: '$120',
    price: '$60',
    vendorName: '哈肯舖手感烘焙',
    time: '明日 20:00-21:00',
    score: 4.7,
    distance: '2.1',
    pic: 'hoganbakery.jpg',
    join: 'Sun Nov 28 2021 12:00:00 GMT+0800'
}, {
    last: 3,
    pricePre: '$200',
    price: '$100',
    vendorName: '泰嗨 健康餐盒',
    time: '明日 20:00-21:30',
    score: 4.2,
    distance: '0.7',
    pic: 'thai_high.jpeg',
    join: 'Sun Nov 28 2021 12:00:00 GMT+0800'
}, {
    last: 1,
    pricePre: '$110',
    price: '$55',
    vendorName: '昀昀甜點',
    time: '明日 20:00-21:00',
    score: 4.4,
    distance: '1.9',
    pic: 'yun_yun_patisserie.jpg',
    join: 'Sun Nov 28 2021 12:00:00 GMT+0800'
}, {
    last: 5,
    pricePre: '$360',
    price: '$180',
    vendorName: 'FOOD GYM 附近餐飲',
    time: '明日 20:30-22:00',
    score: 4.1,
    distance: '3.6',
    pic: 'food_gym.jpg',
    join: 'Sun Nov 27 2022 12:00:00 GMT+0800'
}, {
    last: 3,
    pricePre: '$200',
    price: '$100',
    vendorName: '不萊梅義大利麵',
    time: '明日 20:30-22:00',
    score: 4.4,
    distance: '0.3',
    pic: 'bremen.jpg',
    join: 'Sun Nov 28 2021 12:00:00 GMT+0800'
}, {
    last: 4,
    pricePre: '$248',
    price: '$120',
    vendorName: 'Body Fit 健康盒',
    time: '明日 13:30-14:30',
    score: 4.0,
    distance: '2.2',
    pic: 'body_fit.jpg',
    join: 'Sun Nov 27 2022 12:00:00 GMT+0800'
}, {
    last: 3,
    pricePre: '$110',
    price: '$50',
    vendorName: '粥師傅廣東粥',
    time: '明日 21:00-22:00',
    score: 4.1,
    distance: '1.6',
    pic: 'Master_Congee_s_Cantonese_Congee.jpg',
    join: 'Sun Nov 27 2022 12:00:00 GMT+0800'
}, {
    last: 3,
    pricePre: '$100-180',
    price: '$50-90',
    vendorName: '揪好廚房',
    time: '明日 20:00-21:00',
    score: 4.6,
    distance: 3.4,
    pic: 'jo_s_bon_kitchen.jpg',
    join: 'Sun Nov 28 2021 12:00:00 GMT+0800'
}, {
    last: 4,
    pricePre: '$125',
    price: '$60',
    vendorName: '捌月肆日甜點坊',
    time: '明日 19:30-21:00',
    score: 4.3,
    distance: '2.8',
    pic: 'august_fourth_pâtisserie.jpg',
    join: 'Sun Nov 27 2022 12:00:00 GMT+0800'
}, {
    last: 4,
    pricePre: '$220-340',
    price: '$110-170',
    vendorName: '無麩質健康餐盒',
    time: '明日 13:30-14:30',
    score: 4.0,
    distance: '1.7',
    pic: 'sunflower.jpeg',
    join: 'Sun Nov 27 2022 12:00:00 GMT+0800'
}, {
    last: 3,
    pricePre: '$99',
    price: '$50',
    vendorName: '丹堤咖啡',
    time: '明日 09:00-10:30',
    score: 4.4,
    distance: '0.2',
    pic: 'dante_coffee.jpg',
    join: 'Sun Nov 28 2021 12:00:00 GMT+0800'
}, {
    last: 1,
    pricePre: '$240',
    price: '$120',
    vendorName: 'Hala Chicken',
    time: '明日 16:00-17:00',
    score: 4.3,
    distance: '2.9',
    pic: 'hala_chicken.jpg',
    join: 'Sun Nov 28 2021 12:00:00 GMT+0800'
}, {
    last: 4,
    pricePre: '$95-398',
    price: '$50-180',
    vendorName: '福利麵包',
    time: '明日 19:30-20:30',
    score: 4.4,
    distance: '1.0',
    pic: 'florida_bakery.jpg',
    join: 'Sun Nov 28 2021 12:00:00 GMT+0800'
}, {
    last: 3,
    pricePre: '$212',
    price: '$100',
    vendorName: '金菊雞肉飯',
    time: '明日 20:00-21:30',
    score: 4.6,
    distance: '2.0',
    pic: 'jinju_hainanse_chicken_rice.jpg',
    join: 'Sun Nov 28 2021 12:00:00 GMT+0800'
}, {
    last: 3,
    pricePre: '$130',
    price: '$70',
    vendorName: '摩德年代',
    time: '明日 19:00-20:00',
    score: 4.7,
    distance: '1.1',
    pic: 'Modism_Café.jpeg',
    join: 'Sun Nov 28 2021 12:00:00 GMT+0800'
}, {
    last: 2,
    pricePre: '$450',
    price: '$220',
    vendorName: '義瑪卡多',
    time: '明日 19:30-20:30',
    score: 4.1,
    distance: '3.7',
    pic: 'IL_MERCATO.jpg',
    join: 'Sun Nov 28 2021 12:00:00 GMT+0800'
}, {
    last: 3,
    pricePre: '$110',
    price: '$50',
    vendorName: '露特西亞',
    time: '明日 19:30-20:30',
    score: 4.5,
    distance: '2.5',
    pic: 'lutetia.jpg',
    join: 'Sun Nov 28 2021 12:00:00 GMT+0800'
}, {
    last: 1,
    pricePre: '$300',
    price: '$150',
    vendorName: '歐奇窯烤披薩',
    time: '明日 20:00-21:00',
    score: 4.3,
    distance: '3.0',
    pic: 'OGGI.jpeg',
    join: 'Sun Nov 28 2021 12:00:00 GMT+0800'
}, {
    last: 4,
    pricePre: '$230',
    price: '$110',
    vendorName: '佐藤精肉店 豚丼專門',
    time: '明日 20:00-21:30',
    score: 4.0,
    distance: '1.4',
    pic: 'Sato_Seinikuten_Shilin.jpg',
    join: 'Sun Nov 27 2022 12:00:00 GMT+0800'
}, {
    last: 3,
    pricePre: '$170',
    price: '$80',
    vendorName: '紅gimbap飯捲',
    time: '明日 20:00-21:00',
    score: 4.2,
    distance: '0.6',
    pic: 'honggimbap.jpg',
    join: 'Sun Nov 28 2021 12:00:00 GMT+0800'
}, {
    last: 3,
    pricePre: '$420',
    price: '$200',
    vendorName: '微巷義大利小餐館',
    time: '明日 20:30-21:30',
    score: 4.3,
    distance: '1.7',
    pic: 'vicolo_trattoria.jpeg',
    join: 'Sun Nov 27 2022 12:00:00 GMT+0800'
}, {
    last: 4,
    pricePre: '$75',
    price: '$40',
    vendorName: '好好食光',
    time: '明日 13:30-14:30',
    score: 4.2,
    distance: '2.1',
    pic: 'goodbagelxtea.jpeg',
    join: 'Sun Nov 27 2022 12:00:00 GMT+0800'
}];

// 產品
var product = [{
    vendorName: '一之軒信義店',
    productName: '麵包福袋',
    describe: '三明治、雜糧麵包等',
    price: 50,
    qty: 3,
    time: '明日 19:00-20:00',
    content: '3-4個美味麵包',
    pic: 'ijysheng-cranberry-cheese-bread.jpeg'
}, {
    vendorName: '一之軒信義店',
    productName: '蛋糕福袋',
    describe: '蛋糕、甜點等',
    price: 100,
    qty: 1,
    time: '明日 19:00-20:00',
    content: '3-4個美味蛋糕',
    pic: 'ijysheng-honey-cake.jpg'
},{
    vendorName: '溫德德式烘焙餐館',
    productName: '麵包福袋',
    describe: '麵包、吐司等',
    price: 50,
    qty: 2,
    time: '明日 19:30-20:30',
    content: '2-3個烘焙麵包',
    pic: 'wendel_s_german_bakery_Bistro-honey-bread.jpg'
},{
    vendorName: '小木屋鬆餅',
    productName: '鬆餅福袋',
    describe: '甜餅或鹹餅',
    price: 50,
    qty: 1,
    time: '明日 19:00-20:00',
    content: '1份美味鬆餅',
    pic: 'shinemood-fried-chicken-waffle.jpg'
},{
    vendorName: '哈肯舖手感烘焙',
    productName: '麵包福袋',
    describe: '麵包、吐司、貝果等',
    price: 60,
    qty: 2,
    time: '明日 19:30-20:30',
    content: '3-4個烘焙麵包',
    pic: 'hoganbakery-japanese-bread.jpg'
},{
    vendorName: '福利麵包',
    productName: '麵包福袋',
    describe: '麵包、漢堡、吐司等',
    price: 60,
    qty: 2,
    time: '明日 19:30-20:30',
    content: '2-3個烘焙麵包',
    pic: 'florida_bakery-garlic-cream-bread.jpg'
}]

// 新增 店家 至 全部店家
// for (var i = 0; i <= vendor.length; i++) {
//     let card = `
//     <div class="vendor-card per">
//         <a href="./restaurant.html">
//             <div class="vendor-pic"></div>
//             <span class="last">剩餘${(vendor[i]).last}份</span>
//             <span class="price-pre">${(vendor[i]).pricePre}</span>
//             <span class="price">${(vendor[i]).price}</span>
//             <div class="vendor-info">
//                 <p class="vendor-name">${(vendor[i]).vendorName}</p>
//                 <span class="time">${(vendor[i]).time}</span>
//                 <p>
//                     <span class="score">${(vendor[i]).score}</span>
//                     <img src="./images/iconmonstr-star-filled.svg" alt="">
//                     <span class="distance">${(vendor[i]).distance}公里</span>
//                 </p>
//             </div>
//         </a>
//         <img src="./images/iconmonstr-heart-s.svg" alt="" class="btn-like">
//     </div>
//     `;
//     $('.all-vendor').append(card);
// }

// var list = document.getElementsByClassName('.all-vendor');
// list.item(0) = '';
// list.item(1) = card;
// list.item(2) = '';

$(function () {
    // 下拉式選單
    $(".drp-dwn li ul").hide();
    $(".drp-dwn li").hover(function () {
        $(">ul:not(:animated)", this).show().slideDown("fast");
    }, function () {
        $(">ul", this).slideUp("fast").hide();
    });
    // 登入鈕
    $('#sign').click(function () {
        $('#lightbox,#signIn').css('display', 'block');
    });
    $('#lightbox,.esc,.no').click(function () {
        $('#lightbox,#signIn,#signUp,#commet,#cancel-box').css('display', 'none');
    });
    $('#signIn #sign-txt span').click(function () {
        $('#signIn').css('display', 'none');
        $('#signUp').css('display', 'block');
    });
    $('#signUp #sign-txt span').click(function () {
        $('#signIn').css('display', 'block');
        $('#signUp').css('display', 'none');
    });
    // 最愛鈕
    $('.btn-like').click(function () {
        $(this).toggleClass('filled');
    });
});