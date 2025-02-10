// Foydalanuvchi kiritgan 4 xonali sonning raqamlarining ko‘paytmasini toping.

// let num = prompt("4 xonali son kiriting:");
// let kopaytma = 1;

// for (let i = 0; i < num .length; i++) {
//     kopaytma = kopaytma * parseInt(num[i]);
// }

// console.log("Raqamlar ko'paytmasi:", kopaytma);

// break va continuedan foydalanib, 1 dan 10 gacha bo‘lgan sonlardan
//  faqat toq raqamlarni chiqaring. Lekin 9 ni olmasin

// for (let i = 1; i <= 10; i++) {
//     if (i % 2 === 0) {
//         continue;
//     }
//     if (i === 9) {
//         break;
//     }
//     console.log(i);
// }

// let word = "JavaScript"; berilgan so’zni aylanib chiqib harflarni
// indexi bilan birga chiqaring

// index o'tmadikku adashmasam

// Foydalanuvchi kiritgan son n-dan kichik bo‘lgan barcha
//  toq sonlarni chiqaradigan dastur yozing.

// let n = parseInt(prompt("n sonini kiriting:"));

// for (let i = 1; i < n; i = i + 2) {
//     console.log(i);
// }

// Foydalanuvchi n son kritadi n-gacha bo‘lgan barcha
//  juft sonlarning yig‘indisini toping.

// let n = parseInt(prompt("n sonini kiriting:"));
// let yigindi = 0;

// for (let i = 2; i <= n; i = i + 2) {
//     yigindi = yigindi + i;
// }

// console.log("Siz kiritgan songacha bo'lgan juft sonlar yig'indisi:", yigindi);

// Foydalanuvchi kiritgan raqamni teskari qilib kamayish
//  tartibida aylantiradigan dastur yozing.

// --------------

// Foydalanuvchi n son kritadi n-gacha bo‘lgan barcha
//  toq sonlarning ko‘paytmasini hisoblang.

// let num = parseInt(prompt("n sonini kiriting:"));
// let kopaytma = 1;

// for (let i = 1; i <= num; i = i + 2) {
//     kopaytma = kopaytma * i;
// }

// console.log("Toq sonlar ko'paytmasi:", kopaytma);

// 1 dan 50 gacha bo’lgan barcha juft sonlarni chiqaring

// for (let i = 2; i <= 50; i = i + 2) {
//     console.log(i);
// }

// Satrdagi harflar sonini hisoblang.

// let matn = "Hello World";
// let harflarSoni = matn.length;

// console.log("Harflar soni:", harflarSoni);

// let str = "Hello World";
// Berilgan satrni teskari aylantiring.

// -------------------

// 1 dan 20 gacha bo‘lgan sonlarni chiqaring,
//  lekin 3 ga karrali sonlarni o‘tkazib yuboring.

// for (let i = 1; i <= 20; i++) {
//     if (i % 3 === 0) {
//         continue;
//     }
//     console.log(i);
// }

// Sonning  uzunligini toping (raqamni satrga aylantirib).

// let son = prompt("Son kiriting:");
// let uzunlik = son.length;

// console.log("Son uzunligi:", uzunlik);

// charAt yordamida "a" dan "z" gacha bo‘lgan harflarni chop
//  eting. tartib raqami bilan birga.

// ---------------------

// Ikkita son berilgan. Ularning bo’linmasi musbat yoki
//  manfiy ekanligini aniqlang.

// let num1 = parseInt(prompt("Birinchi sonni kiriting:"));
// let num2 = parseInt(prompt("Ikkinchi sonni kiriting:"));

// if ((num1 / num2) > 0) {
//     console.log("Bo'linma musbat");
// } else {
//     console.log("Bo'linma manfiy");
// }

// Berilgan son 100 dan katta yoki kichik ekanligini aniqlang.

// let son = parseInt(prompt("Sonni kiriting:"));

// if (son > 100) {
//     console.log("Son 100 dan katta");
// } else {
//     console.log("Son 100 dan kichik");
// }

// Jasur haydovchi bo’lib ishlamoqchi ishga oluvchini
//  talabi Jasur ning ko’zi yaxshi ko’rishligi va haydovchilik guvohnomasi.
//  Agar ko’zi yaxshi bo’lsa va guvohnomasi bo’lsa “ishga qabul qilindingiz”
//   deb chiqaring aks holda “kira olmadingiz”

// confirm bilganim uchun foydalandim

// let koz = confirm("Ko'zlar yaxshi ko'radimi?");
// let guvohnoma = confirm("Haydovchilik guvohnomasi bormi?");

// if (koz && guvohnoma) {
//     console.log("Ishga qabul qilindingiz");
// } else {
//     console.log("Ishga kira olmadingiz");
// }

// mashina svetforda turibdi agarda svetafor chirog’i
//  yashil bo’lsa va tratuarda odam bo’lmasa “yuring” degan
//   so’z chiqsin agarda svetafor yashil tratuarda odam bo’lsa
//    “odamni o’tkazib keyin yuring” deb chiqaring agarda qizil
// yongan bo’lsa “to’xtang” degan yozuv chiqsin

// let svetafor = prompt("Svetofor rangi:")
// let odam = confirm("Tratuarda odam bormi?");

// if (svetafor === "yashil") {
//     if (odam) {
//         console.log("Odamni o'tkazib, keyin yuring");
//     } else {
//         console.log("Yuring");
//     }
// } else if (svetafor === "qizil") {
//     console.log("To'xtang");
// } else {
//     console.log("Noto'g'ri rang kiritildi");
// }

// o’quvchi imtihonga kirgan agarda yig’gan bali 60 dan past bo’lsa
//  “yiqildingiz desin” 60 va 70 oralig’ida bo’lsa “super kontrakt”
//   70-80 “kontrakt” 80 dan 100 gacha budjet

// let ball = parseInt(prompt("Yig‘ilgan ballni kiriting:"));

// if (ball < 60) {
//     console.log("Yiqildingiz");
// } else if (ball < 70) {
//     console.log("Super kontrakt");
// } else if (ball < 80) {
//     console.log("Kontrakt");
// } else if (ball <= 100) {
//     console.log("Budjet");
// } else {
//     console.log("Noto'g'ri ball kiritildi");
// }

// 1 dan 10 gacha kompyuter random raqamni o'ylaydi
// dastur sizdan promptda raqam kiritishingizni so'rasin, toki siz kiritgan
//  raqam dastur o'ylagan raqamga to'g'ri tushmasa, qayta qayta promptdan so'rasin
// qachongi raqam tog'ri topilsa, necha marta urinishlar sonini chiqaring

// let randomNum = Math.floor(Math.random() * 10) + 1;
// let urinishlarSoni = 0;
// let promptRaqam;

// do {
//     promptRaqam = parseInt(prompt("1 dan 10 gacha raqamni kiriting:"));
//     urinishlarSoni++;
// } while (promptRaqam !== randomNum);

// console.log(`Tabriklaymiz! Siz ${urinishlarSoni} marta urinishdan keyin topdingiz.`);








// 1. har bitta ichki urinish uchun 10 martadan yana ichki urinish 
// 2. u ichki urinish uchun 2 martadan yana ichki urinish


// for (let tashqi = 1; tashqi <= 3; tashqi++) {
//   console.log(`Tashqi urinish ${tashqi}`);
//   for (let ichki = 1; ichki <= 5; ichki++) {
//     console.log(`    -------- Ichki urinish ${ichki}`);
//     for (let ichki10 = 1; ichki10 <= 10; ichki10++) {
//       console.log(`        ---------- 10 marta ichki urinish ${ichki10}`);
//       for (let ichki2 = 1; ichki2 <= 2; ichki2++) {
//         console.log(`            ----------- 2 marta ichki urinish ${ichki2}`);
//       }
//     }
//   }
// }
