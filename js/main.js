// user 下拉選單
$(function () {
  $(".drp-dwn li ul").hide();
  $(".drp-dwn li").hover(
    function () {
      $(">ul:not(:animated)", this).show().slideDown("fast");
    },
    function () {
      $(">ul", this).slideUp("fast").hide();
    }
  );
});

// 付款方式選擇時的變化
let change = () => {
  let radio = document.getElementsByName("pay_way");
  let div = document.querySelectorAll(".test");
  let button = document.querySelector(".pay_button");
  let card_message = document.querySelector(".card_message");
  let pay_message = document.querySelector(".pay_message");
  // 付款方式背景更換
  for (let i = 0; i < radio.length; i++) {
    if (radio[i].checked) {
      div[i].classList.add("way_card_cover");
    } else {
      div[i].classList.remove("way_card_cover");
    }
  }
  let pay_a = document.querySelector(".pay_a");
  if (radio[1].checked) {
    pay_a.removeAttribute("href", "./qrcode.html");
  } else {
    pay_a.setAttribute("href", "./qrcode.html");
  }
  // 付款資訊更換
  for (let a = 0; a < radio.length; a++) {
    if (radio[0].checked) {
      card_message.classList.remove("none");
      pay_message.classList.add("none");
    } else if (radio[1].checked) {
      card_message.classList.add("none");
      pay_message.classList.remove("none");
    } else {
      card_message.classList.add("none");
      pay_message.classList.add("none");
    }
  }
  // 結帳按鈕是否成立
  return radio[0].checked
    ? button.classList.add("pay_button_cover")
    : radio[2].checked
    ? button.classList.add("pay_button_cover")
    : radio[3].checked
    ? button.classList.add("pay_button_cover")
    : radio[4].checked
    ? button.classList.add("pay_button_cover")
    : button.classList.remove("pay_button_cover");
};
let card_name = document.getElementsByName("pay_message_input");
let card_save = document.querySelector(".card_save");
let check_result = false; // 預設false，用來切換送出紐是否可使用
// 裝判斷式的陣列，依照需求依序填入要判斷的條件，symbol是運算子，value是判斷數值
let check_list = [
  { symbol: ">", value: 2 },
  { symbol: "=", value: 4 },
  { symbol: "=", value: 4 },
  { symbol: "=", value: 4 },
  { symbol: "=", value: 4 },
  { symbol: "=", value: 2 },
  { symbol: "=", value: 2 },
  { symbol: "=", value: 3 },
];
let check_input = () => {
  // every一定要所有東西都符合條件才會回傳
  check_result = check_list.every((item, index) => {
    if (item["symbol"] === ">")
      return card_name[index].value.length > item["value"];
    else if (item["symbol"] === "<")
      return card_name[index].value.length < item["value"];
    else return card_name[index].value.length == item["value"];
  });

  // 以最終結果判斷是按鈕是否可用
  if (check_result) {
    card_save.removeAttribute("disabled", "");
    card_save.classList.add("card_save_cover");
  } else {
    card_save.setAttribute("disabled", "");
    card_save.classList.remove("card_save_cover");
  }
};
var input = document.querySelector("input");
window.addEventListener("load", () => {
  input.value = "";
});

// let card_name = document.getElementsByName("pay_message_input");
// let card_save = document.querySelector(".card_save");
// let check_input = () => {
//   if (card_name[0].value.length > 2) {
//     if (card_name[1].value.length == 4) {
//       if (card_name[2].value.length == 4) {
//         if (card_name[3].value.length == 4) {
//           if (card_name[4].value.length == 4) {
//             if (card_name[5].value.length == 2) {
//               if (card_name[6].value.length == 2) {
//                 if (card_name[7].value.length == 3) {
//                   card_save.removeAttribute("disabled", "");
//                   card_save.classList.add("card_save_cover");
//                 } else {
//                   card_save.setAttribute("disabled", "");
//                   card_save.classList.remove("card_save_cover");
//                 }
//               } else {
//                 card_save.setAttribute("disabled", "");
//                 card_save.classList.remove("card_save_cover");
//               }
//             } else {
//               card_save.setAttribute("disabled", "");
//               card_save.classList.remove("card_save_cover");
//             }
//           } else {
//             card_save.setAttribute("disabled", "");
//             card_save.classList.remove("card_save_cover");
//           }
//         } else {
//           card_save.setAttribute("disabled", "");
//           card_save.classList.remove("card_save_cover");
//         }
//       } else {
//         card_save.setAttribute("disabled", "");
//         card_save.classList.remove("card_save_cover");
//       }
//     } else {
//       card_save.setAttribute("disabled", "");
//       card_save.classList.remove("card_save_cover");
//     }
//   } else {
//     card_save.setAttribute("disabled", "");
//     card_save.classList.remove("card_save_cover");
//   }
// };
// var input = document.querySelector("input");
// window.addEventListener("load", () => {
//   input.value = "";
// });
