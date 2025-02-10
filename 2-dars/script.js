// 1-MASALA

//  o’zgaruvchiga son beriladi berilgan sonning musbat yoki
//  manfiyligini aniqlovchi dastur tuzib bering

// let number = -9;
// if (number > 0) {
//     console.log("Son musbat");
// } else if (number < 0) {
//     console.log("Son manfiy");
// } else {
//     console.log("Son nolga teng");
// }

// 2-MASALA

// ikkita o’zgaruvchi yordamida Ikki son oling va ularni kattasini aniqlang

// let num1 = 10;
// let num2 = 20;
// if (num1 > num2) {
//     console.log("Birinchi son katta:", num1);
// } else if (num2 > num1) {
//     console.log("Ikkinchi son katta:", num2);
// } else {
//     console.log("Sonlar teng");
// }

// 3-MASALA

// o’zgaruvchidan son qabul qilinadi qabul qilingan son nol ekanini aniqlang

// let num = 0;
// if (num === 0) {
//     console.log("Son nolga teng");
// } else {
//     console.log("Son nol emas");
// }

// 4-MASALA

// ikkita son berilgan ushbu sonlarni teng yoki
// teng emasligini aniqlang agar teng bo’lsa “sonla
// r teng ” degan xabar qaytaring aks holda “teng emas”

// let a = 15;
// let b = 15;
// if (a === b) {
//     console.log("Sonlar teng");
// } else {
//     console.log("Sonlar teng emas");
// }

// 5-MASALA

// berilgan son 3 ga bo’linsa teng bo’lsa nolga “FIZZ” degan yozuv qaytaring.
//  5 ga bo’linsa teng bo’lsa nolga “Buzz” degan yozuv qaytaring 3 ga va 5 ga bo’linsa
//   teng bo’lsa nolga “FIZZBuzz” degan yozuv qaytaring

// let n = 15;
// if (n % 3 === 0 && n % 5 === 0) {
//     console.log("FIZZBUZZ");
// } else if (n % 3 === 0) {
//     console.log("FIZZ");
// } else if (n % 5 === 0) {
//     console.log("BUZZ");
// } else {
//     console.log("Hech qaysi");
// }

// 6-MASALA

// // foydalanuvchidan yoshini so’rang agar 18 dan katta bo’lsa haydovchilik
// //  “guvohnomasini olasiz” deb qaytaring agar kichik bo’lsa “hali yoshsiz”
// //   deb qaytarsin

// let age = 17;
// if (age >= 18) {
//     console.log("Haydovchilik guvohnomasini olasiz");
// } else {
//     console.log("Hali yoshsiz");
// }

// 7-MASALA

// Foydalanuvchi  hafta  kun  raqamini  butun  sonda  kiritadi.
//   Siz  hafta  kunlarnini  nomini  chiqaradigan  darstur  tuzing.

// let dayNumber = +prompt("Hafta kunini aniqlash uchun 1 dan 7 gacha bo‘lgan raqam kiriting:");

// if (dayNumber === 1) {
//     console.log("Dushanba");
// } else if (dayNumber === 2) {
//     console.log("Seshanba");
// } else if (dayNumber === 3) {
//     console.log("Chorshanba");
// } else if (dayNumber === 4) {
//     console.log("Payshanba");
// } else if (dayNumber === 5) {
//     console.log("Juma");
// } else if (dayNumber === 6) {
//     console.log("Shanba");
// } else if (dayNumber === 7) {
//     console.log("Yakshanba");
// } else {
//     console.log("Noto‘g‘ri raqam kiritildi. Faqat 1 dan 7 gacha son kiriting.");
// }

// 8-MASALA

// Foydalanuvchi tomonidan kiritilgan 3 xonali sonning oxirgi birlar xonasi
//  raqami toq son yoki juftligini aniqlab beruvchi dastur tuzing.

// let threeNum = 123;
// let lastNum = threeNum % 10;
// if (lastNum % 2 === 0) {
//     console.log("Juft raqam:", lastNum);
// } else {
//     console.log("Toq raqam:", lastNum);
// }

// 9-MASALA

// Butun son berilgan. Agar, berilgan son musbat bo’lsa, 1 ga oshirilsin aks
//  holda 2 ga kamaytiring. Hosil bo’lgan sonni ekranga chiqaruvchi dastur tuzing.

// let num2 = -7;
// if (num2 > 0) {
//     num2++;
// } else {
//     num2 -= 2;
// }
// console.log("Natija:", num2);

// 10-MASALA

// Uchta butun(musbat ham manfiy aralash bo’ladi) sonlar berilgan. Shu sonlarning
//  nechtasi musbat ekanligini aniqlovchi dastur tuzing.

// let x = -2, y = 5, z = 10;
// let musbatNum = 0;
// if (x > 0) musbatNum++;
// if (y > 0) musbatNum++;
// if (z > 0) musbatNum++;
// console.log("Musbat sonlar soni:", musbatNum);

// QOLGANLARI ESA QO'SHIMCHA ALBATTA BULAR HAM TO'G'RI ISHLAYDI

// 11-MASALA

// Foydalanuvchidan haroratni so‘rang. Agar harorat 20 dan past bo‘lsa, "Sovuq ob-havo"
// Agar harorat 20 yoki undan yuqori bo‘lsa, "Issiq ob-havo" deb chiqaring.

// let temperature = +prompt("Haroratni kiriting:");
// if (temperature < 20) {
//     alert("Sovuq ob-havo");
// } else {
//     alert("Issiq ob-havo");
// }

// 12-MASALA

// Foydalanuvchidan son kiritishni so‘rang. Agar son juft bo‘lsa, "Son juft"
// Agar toq bo‘lsa, "Son toq" deb chiqaring.

// let number = +prompt("Son kiriting:");
// if (number % 2 === 0) {
//     alert("Son juft");
// } else {
//     alert("Son toq");
// }

// 13-MASALA

// Foydalanuvchidan uchta son kiritishni so‘rang. Shu sonlarning eng kattasini chiqaring.

// let a = +prompt("Birinchi sonni kiriting:");
// let b = +prompt("Ikkinchi sonni kiriting:");
// let c = +prompt("Uchinchi sonni kiriting:");

// if (a >= b && a >= c) {
//     alert("Eng katta son: " + a);
// } else if (b >= a && b >= c) {
//     alert("Eng katta son: " + b);
// } else {
//     alert("Eng katta son: " + c);
// }

// 14-MASALA

// Foydalanuvchidan tug‘ilgan yilini so‘rang va uning yoshini aniqlab chiqaring.

// let birthYear = +prompt("Tug‘ilgan yilingizni kiriting:");
// let currentYear = new Date().getFullYear(); // Hozirgi yilni avtomatik aniqlash
// let age = currentYear - birthYear;

// if (age > 0) {
//     alert("Sizning yoshingiz: " + age);
// } else {
//     alert("Noto‘g‘ri yil kiritdingiz.");
// }

// 15-MASALA

// Foydalanuvchidan imtihon natijasini kiriting.
// Agar 90 dan yuqori bo‘lsa "A", 80-89 "B", 70-79 "C", 60-69 "D", 60 dan past "F" deb chiqaring.

// let score = +prompt("Imtihon natijangizni kiriting:");

// if (score >= 90) {
//     alert("Sizning bahoingiz: A");
// } else if (score >= 80) {
//     alert("Sizning bahoingiz: B");
// } else if (score >= 70) {
//     alert("Sizning bahoingiz: C");
// } else if (score >= 60) {
//     alert("Sizning bahoingiz: D");
// } else {
//     alert("Sizning bahoingiz: F");
// }

// 16-MASALA

// Foydalanuvchidan kvadratning tomon uzunligini so‘rang.
// Perimetr va yuzni hisoblab chiqaring.

// let side = +prompt("Kvadratning tomon uzunligini kiriting:");
// let perimeter = 4 * side;
// let area = side * side;

// alert(`Kvadratning perimetri: ${perimeter}, Yuzasi: ${area}`);

// 17-MASALA

// Foydalanuvchidan uchburchakning uch tomoni uzunligini so‘rang.
// Perimetrini va yarim perimetrdan foydalanib yuzini hisoblang.

// let a = +prompt("Uchburchakning birinchi tomonini kiriting:");
// let b = +prompt("Uchburchakning ikkinchi tomonini kiriting:");
// let c = +prompt("Uchburchakning uchinchi tomonini kiriting:");

// let perimeter = a + b + c;
// let s = perimeter / 2; // Yarim perimetr
// let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

// alert(`Uchburchakning perimetri: ${perimeter}, Yuzasi: ${area.toFixed(2)}`);

// 18-MASALA

// Foydalanuvchidan uchburchakning uch tomoni uzunligini so‘rang.
// Perimetrini va yarim perimetrdan foydalanib yuzini hisoblang.

// let a = +prompt("Uchburchakning birinchi tomonini kiriting:");
// let b = +prompt("Uchburchakning ikkinchi tomonini kiriting:");
// let c = +prompt("Uchburchakning uchinchi tomonini kiriting:");

// let perimeter = a + b + c;
// let s = perimeter / 2; // Yarim perimetr
// let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

// alert(`Uchburchakning perimetri: ${perimeter}, Yuzasi: ${area.toFixed(2)}`);

// 19-MASALA

// Kompyuter 1 dan 10 gacha tasodifiy son tanlaydi. Foydalanuvchi uni topishga harakat qiladi.

// let randomNumber = Math.floor(Math.random() * 10) + 1;
// let guess = +prompt("1 dan 10 gacha tasodifiy sonni tahmin qiling:");

// if (guess === randomNumber) {
//     alert("To‘g‘ri topdingiz!");
// } else {
//     alert(`Noto‘g‘ri! To‘g‘ri javob: ${randomNumber}`);
// }

// 20-MASALA

// Foydalanuvchidan kubning tomon uzunligini kiriting va hajmini hisoblang.

// let side = +prompt("Kubning tomon uzunligini kiriting:");
// let volume = side ** 3;

// alert(`Kubning hajmi: ${volume}`);

// 21-MASALA

// Foydalanuvchidan uchta son kiriting va ularning o‘rta arifmetigini hisoblang.

// let x = +prompt("Birinchi sonni kiriting:");
// let y = +prompt("Ikkinchi sonni kiriting:");
// let z = +prompt("Uchinchi sonni kiriting:");

// let average = (x + y + z) / 3;
// alert(`Kiritilgan sonlarning o‘rta arifmetigi: ${average.toFixed(2)}`);

// 22-MASALA

//  Yilni kiritib, u 21-asr yoki 22-asrda ekanligini aniqlang

// let year = +prompt("Yilni kiriting:");
// if (year >= 2021) {
//     alert("Siz 22-asrda tug'ilgansiz");
// } else if (year >= 2001) {
//     alert("Siz 21-asrda tug'ilgansiz");
// } else {
//     alert("Siz 20-asrda tug'ilgansiz");
// }

// 23-MASALA

//  Foydalanuvchi tomonidan kiritilgan yosh bo‘yicha unga maslahat berish

// let age = +prompt("Yoshingizni kiriting:");
// if (age < 10) {
//     alert("Hali juda yosh, o‘qishni davom ettiring!");
// } else if (age >= 10 && age < 18) {
//     alert("O‘quvchini boshlang!");
// } else if (age >= 18 && age < 30) {
//     alert("Ishlashni boshlang, hayotga tayyorlaning!");
// } else {
//     alert("Hayotning barcha bosqichlarini o‘tkazdingiz!");
// }

// 24-MASALA

//  Kiritilgan ikki sonni qo‘shib, natijani chiqarish

// let num1 = +prompt("Birinchi sonni kiriting:");
// let num2 = +prompt("Ikkinchi sonni kiriting:");
// let sum = num1 + num2;
// if (sum > 0) {
//     alert(`Jami musbat: ${sum}`);
// } else if (sum < 0) {
//     alert(`Jami manfiy: ${sum}`);
// } else {
//     alert("Natija nolga teng");
// }

// 25-MASALA

//  3 sonning birinchi, ikkinchi yoki uchinchi o‘rinda turishini aniqlash

// let num1 = +prompt("Birinchi sonni kiriting:");
// let num2 = +prompt("Ikkinchi sonni kiriting:");
// let num3 = +prompt("Uchinchi sonni kiriting:");

// if (num1 > num2 && num1 > num3) {
//     alert(`Birinchi son eng katta: ${num1}`);
// } else if (num2 > num1 && num2 > num3) {
//     alert(`Ikkinchi son eng katta: ${num2}`);
// } else {
//     alert(`Uchinchi son eng katta: ${num3}`);
// }

// 26-MASALA

//  Ikkita raqamni kiritib, biri ikkinchisidan katta bo‘lsa "Katta", aks holda
//  "Kichik" degan xabarni chiqarish

// let num1 = +prompt("Birinchi sonni kiriting:");
// let num2 = +prompt("Ikkinchi sonni kiriting:");
// if (num1 > num2) {
//     alert("Birinchi son kattaroq");
// } else if (num1 < num2) {
//     alert("Ikkinchi son kattaroq");
// } else {
//     alert("Sonlar teng");
// }

// 27-MASALA

//  Musbat va manfiy sonlar o‘rtasidagi farqni hisoblash

// let num = +prompt("Son kiriting:");
// if (num > 0) {
//   alert(`Musbat son, farq: ${num}`);
// } else if (num < 0) {
//   alert(`Manfiy son, farq: ${Math.abs(num)}`);
// } else {
//   alert("Nol");
// }

// 28-MASALA

//  Kiritilgan yoshga qarab xatolik va haqiqiylikni tekshirish

// let age = +prompt("Yoshingizni kiriting:");
// if (isNaN(age)) {
//     alert("Iltimos, haqiqiy son kiriting");
// } else if (age >= 18) {
//     alert("Yoshingiz yetarli, haydovchilik guvohnomasini olish mumkin");
// } else {
//     alert("Yoshni tekshirib ko'ring");
// }

// 29-MASALA

//  5 ta sonni kiritib, eng katta sonni aniqlash

// let num1 = +prompt("Birinchi sonni kiriting:");
// let num2 = +prompt("Ikkinchi sonni kiriting:");
// let num3 = +prompt("Uchinchi sonni kiriting:");
// let num4 = +prompt("To‘rtinchi sonni kiriting:");
// let num5 = +prompt("Beshinchi sonni kiriting:");

// let max = num1;
// if (num2 > max) max = num2;
// if (num3 > max) max = num3;
// if (num4 > max) max = num4;
// if (num5 > max) max = num5;

// alert(`Eng katta son: ${max}`);

// 30-MASALA

//  Kiritilgan raqamlar o‘rtasida juft yoki toqligini tekshirish

// let num1 = +prompt("Birinchi sonni kiriting:");
// let num2 = +prompt("Ikkinchi sonni kiriting:");

// if (num1 % 2 === 0 && num2 % 2 === 0) {
//     alert("Ikki son ham juft");
// } else if (num1 % 2 !== 0 && num2 % 2 !== 0) {
//     alert("Ikki son ham toq");
// } else {
//     alert("Biri juft, biri toq");
// }

// 31-MASALA

// 2 sonning ko‘paytmasi 100 dan katta yoki kichik ekanligini tekshirish

// let num1 = +prompt("Birinchi sonni kiriting:");
// let num2 = +prompt("Ikkinchi sonni kiriting:");
// let product = num1 * num2;
// if (product > 100) {
//     alert("Ko‘paytma 100 dan katta");
// } else if (product < 100) {
//     alert("Ko‘paytma 100 dan kichik");
// } else {
//     alert("Ko‘paytma 100 ga teng");
// }

// 32-MASALA

// Sonning kvadratini hisoblash

// let num = +prompt("Sonni kiriting:");
// let square = num ** 2;
// alert(`Sonning kvadrati: ${square}`);

// 33-MASALA

// Uchta sonni kiritib, eng kichikini topish

// let num1 = +prompt("Birinchi sonni kiriting:");
// let num2 = +prompt("Ikkinchi sonni kiriting:");
// let num3 = +prompt("Uchinchi sonni kiriting:");

// let min = num1;
// if (num2 < min) min = num2;
// if (num3 < min) min = num3;

// alert(`Eng kichik son: ${min}`);

// 34-MASALA

// Sonni kiritib, uning 10 ga bo‘linishini tekshirish

// let num = +prompt("Sonni kiriting:");
// if (num % 10 === 0) {
//     alert("Son 10 ga bo‘linadi");
// } else {
//     alert("Son 10 ga bo‘linmaydi");
// }

// 35-MASALA

// 3 ta sonni kiritib, ularning ortasidagi eng katta farqni aniqlash

// let num1 = +prompt("Birinchi sonni kiriting:");
// let num2 = +prompt("Ikkinchi sonni kiriting:");
// let num3 = +prompt("Uchinchi sonni kiriting:");

// let maxDiff = Math.max(Math.abs(num1 - num2), Math.abs(num2 - num3), Math.abs(num1 - num3));

// alert(`Eng katta farq: ${maxDiff}`);

// 36-MASALA

// Sonni kiritib, uning 5 ga bo‘linishini tekshirish

// let num = +prompt("Sonni kiriting:");
// if (num % 5 === 0) {
//     alert("Son 5 ga bo‘linadi");
// } else {
//     alert("Son 5 ga bo‘linmaydi");
// }

// 37-MASALA

// Yilni kiritib, kabisat yilini aniqlash

// let year = +prompt("Yilni kiriting:");
// if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//     alert("Kabisat yili");
// } else {
//     alert("Oddiy yil");
// }

// 38-MASALA

// Sonning raqamlar yig‘indisini hisoblash

// let num = prompt("Sonni kiriting:");
// let sum = 0;
// for (let i = 0; i < num.length; i++) {
//     sum += parseInt(num[i]);
// }
// alert(`Sonning raqamlar yig‘indisi: ${sum}`);

// 39-MASALA

// Yoshni so‘rab, pensiya yoshida yoki yo‘qligini aniqlash

// let age = +prompt("Yoshingizni kiriting:");
// if (age >= 65) {
//     alert("Siz pensiya yoshidasiz");
// } else {
//     alert("Siz pensiya yoshida emassiz");
// }

// 40-MASALA

// O‘rtacha baho hisoblash

// let grade1 = +prompt("Birinchi bahoni kiriting:");
// let grade2 = +prompt("Ikkinchi bahoni kiriting:");
// let grade3 = +prompt("Uchinchi bahoni kiriting:");
// let average = (grade1 + grade2 + grade3) / 3;
// alert(`O‘rtacha baho: ${average}`);

// 41-MASALA

// Yoshni kiritib, bola, o‘smir yoki katta ekanligini aniqlash

// let age = +prompt("Yoshingizni kiriting:");
// if (age < 18) {
//     alert("Siz o‘smir yoki bola ekansiz");
// } else {
//     alert("Siz katta ekansiz");
// }

// 42-MASALA

// Uchta sonning yig‘indisini hisoblash

// let num1 = +prompt("Birinchi sonni kiriting:");
// let num2 = +prompt("Ikkinchi sonni kiriting:");
// let num3 = +prompt("Uchinchi sonni kiriting:");
// let sum = num1 + num2 + num3;
// alert(`Yig‘indi: ${sum}`);

// 43-MASALA

// Sonning musbat yoki manfiyligini va juft yoki toqligini aniqlash

// let num = +prompt("Sonni kiriting:");
// if (num > 0) {
//     if (num % 2 === 0) {
//         alert("Musbat juft son");
//     } else {
//         alert("Musbat toq son");
//     }
// } else if (num < 0) {
//     if (num % 2 === 0) {
//         alert("Manfiy juft son");
//     } else {
//         alert("Manfiy toq son");
//     }
// } else {
//     alert("Nol");
// }

// 44-MASALA

// Sonni 2 ga bo‘lish va qoldiqni aniqlash

// let num = +prompt("Sonni kiriting:");
// let qoldiq = num % 2;
// alert(`Qoldiq: ${qoldiq}`);

// 45-MASALA

// Foydalanuvchidan 2 ta raqam kiritib, ularning kattasini va kichigini aniqlash

// let num1 = +prompt("Birinchi raqamni kiriting:");
// let num2 = +prompt("Ikkinchi raqamni kiriting:");
// let max = Math.max(num1, num2);
// let min = Math.min(num1, num2);
// alert(`Kattasi: ${max}, Kichigi: ${min}`);

// 46-MASALA

// Yoshingizni kiritib, yosh guruhini aniqlash

// let age = +prompt("Yoshingizni kiriting:");
// if (age < 13) {
//     alert("Siz bolasiz");
// } else if (age >= 13 && age < 18) {
//     alert("Siz o‘smir ekansiz");
// } else if (age >= 18 && age < 60) {
//     alert("Siz yosh ekansiz");
// } else {
//     alert("Siz qari ekansiz");
// }

// 47-MASALA

// Foydalanuvchidan 5 ta sonni kiritib, ularning o‘rtacha qiymatini hisoblash

// let num1 = +prompt("Birinchi sonni kiriting:");
// let num2 = +prompt("Ikkinchi sonni kiriting:");
// let num3 = +prompt("Uchinchi sonni kiriting:");
// let num4 = +prompt("To'rtinchi sonni kiriting:");
// let num5 = +prompt("Beshinchi sonni kiriting:");

// let average = (num1 + num2 + num3 + num4 + num5) / 5;
// alert(`O‘rtacha qiymat: ${average}`);

// 48-MASALA

// Sonni kiritib, uning 7 ga va 5 ga bo‘linishini tekshirish

// let num = +prompt("Sonni kiriting:");
// if (num % 7 === 0 && num % 5 === 0) {
//     alert(`Son ${num} 7 ga va 5ga bo'linadi`);
// } else {
//     alert(`Son ${num} 7 ga 5 ga  bo'linmaydi`);
// }

// 49-MASALA

// Yilni kiritib, u yilda necha kun borligini aniqlash

// let year = +prompt("Yilni kiriting:");
// if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//     alert(`${year} yili Kabisa yili, 366 kun bor`);
// } else {
//     alert(`${year} yili oddiy yil, 365 kun bor`);
// }

// 50-MASALA

// Foydalanuvchidan yilni kiritib, u yilning bahor, yoz, kuz yoki qish fasliga
//  to‘g‘ri kelishini aniqlash

// let month = +prompt("Oy raqamini kiriting (1-12):");

// if (month >= 3 && month <= 5) {
//   alert("Bahor fasli");
// } else if (month >= 6 && month <= 8) {
//   alert("Yoz fasli");
// } else if (month >= 9 && month <= 11) {
//   alert("Kuz fasli");
// } else if (month === 12 || month <= 2) {
//   alert("Qish fasli");
// } else {
//   alert("Noto'g'ri oy raqami kiritdingiz.");
// }