// togri tortburchak tomoni va yuzi

// function burchak(x,y){
//     const yuzi = x * y;
//     const perimetri = (x + y) * 2
//     console.log(`To'g'ri to'rtburchakning yuzi: ${yuzi} ga va perimetri ${perimetri} ga teng. `);
// } burchak(5,4)

// teng tomonli uchburchak yuzasi va perimetri

// function burchak(x){
//     const yuzi = ( x * x * Math.sqrt(3)) / 4;
// // math.sqrt ildiz osti uchun ai dan soradim formulani
//     const perimetri = x * 3
//     console.log(`Teng tomonli uchburchakning yuzi: ${yuzi} ga va perimetri ${perimetri} ga teng. `);
// } burchak(5)

// 1 dan n gacha bolgan sonlar yigindisi n ham 1 ham kiradi bu kodda

// function yigindi(x) {
//     var yigindi1 = 0;
//     for (let i = 0; i <= x; i++) {
//         yigindi1 += i;
//     }
//     return yigindi1
// } console.log(yigindi(18));

// Func4. isSquare (k) mantiqiy funksiyasini hosil qiling. (k > 0).
//  Agar k biror butun sonning kvadrati bo'lsa - true, aks holda false qiymat qaytarilsin. QY
// buni hali otmaganimiz uchun ai dan soramadim chunarsiz boladi va kochiriladi deb

// n sonning raqamlar yigindisi

// function raqam(x) {
//     let yigindi = 0;
//     while (x > 0) {
//       yigindi += x % 10;
//       x = Math.floor(x / 10);
//     } return yigindi;
//   }  console.log(raqam(555));

//   secundni minut va soat qilamiz 10 ming

// function secund(x) {
//     const minut = Math.floor((x % 3600) / 60);
//     const soat = Math.floor(x / 3600);
//     return { minut, soat };
//   }const x = 5000;
//   const { minut, soat } = secund(x);
//   console.log(`${x} sekundda: ${soat} soat va ${minut} inut bor`);







// soat, minut, sekund

// function vaqt(Soat, minut, sekund) {
//     sekund++;  
//     if (sekund >= 60) {
//       sekund = 0;
//       minut++; 
//     }
//     if (minut >= 60) {
//       minut = 0;
//       Soat++;  
//     }
//     if (Soat >= 24) {
//       Soat = 0; 
//     }
//     return { sekund, Soat, minut };  
//   }
//   const { Soat, minut, sekund } = vaqt(16, 7, 61);
//   console.log(`${Soat}:${minut}:${sekund}`); 
  






// son va daraja

// function son(raqam, daraja) {
//     return Math.pow(raqam, daraja);  
// }
// console.log(son(5, 5)); 





// sonnig orta arifmetiga va geometrigi 

// function son(x, y) {
//     const arifmetigi = (x + y) / 2;
//     const geometrigi = Math.sqrt(x * y);
//     return { arifmetigi, geometrigi };
// }
// const natija = son(15, 15);
// console.log(`${natija.arifmetigi}, ${natija.geometrigi}`); 






// funksiyani musbat yoki manfiyligi

// function raqam(son) {
//     if (son > 0) return 1;
//     if (son < 0) return -1;
//     return 0;  
// }

// console.log(raqam(-95));  








// Func4. A*x^2 + B*x + C = 0 ko'rinishidagi tenglama kvadrat tenglama deyiladi.
//  (A noldan farqli son). Kvadrat tenglamaning ildizlar sonini aniqlovchi
//   numberOfRoots(A, B, C) nomli funksiya hosil qiling. D = B^2 - 4*A*C.
//    Agar D > 0 bo’lsa 2 ta, D = 0 bo’lsa 1 ta, D < 0 bo’lsa 0 ta. QY
// numberOfRoots (1, -6, 9) => 1




// Func5. Doiraning yuzini hisoblovchi areaCircle(R) nomli funksiya hosil qiling.
//  Doiraning yuzi S = π*R^2 orqali hisoblanadi. QY


// qilolmadim



// x va y sonlar orasidagi masofa (x va y) kiradi va shart x < y


// function son(x, y) {
//     if (x > y) return 0;  
//     let yigindi = 0;
//     for (let i = x; i <= y; i++) {
//         yigindi += i;
//     }
//     return yigindi;
// }

// console.log(son(95, 97)); 








// x va y son va matematik amal bering


// function son(x, y, amal) {
//     if (amal === "+") return x + y;  
//     if (amal === "-") return x - y;  
//     if (amal === "*") return x * y;  
//     if (amal === "/") return x / y;  
//     return 0;  
// }

// console.log(son(10, 10, "-"));  




// butun son toq va juftligi


// function son(x) {
//     return x % 2 === 0; 
// }
// console.log(son(5)); 


  



// 3 ta sonning qaysi katta va kichikligi

// function son(x, y, z) {
//     let kichik, katta, ortacha;
//     if (x <= y && x <= z) {
//         kichik = x;
//         if (y <= z) {
//             ortacha = y;
//             katta = z;
//         } else {
//             ortacha = z;
//             katta = y;
//         }
//     } else if (y <= x && y <= z) {
//         kichik = y;
//         if (x <= z) {
//             ortacha = x;
//             katta = z;
//         } else {
//             ortacha = z;
//             katta = x;
//         }
//     } else {
//         kichik = z;
//         if (x <= y) {
//             ortacha = x;
//             katta = y;
//         } else {
//             ortacha = y;
//             katta = x;
//         }
//     }

//     return `${kichik}, ${ortacha}, ${katta}`;  
// }
// console.log(son(6, 5, 4)); 




// son tubmi? agar tub bolsa true va akcincha


// function son(x) {
//     if (x <= 1) return false;
//     for (let i = 2; i <= Math.sqrt(x); i++) {
//         if (x % i === 0) return false; 
//     }
//     return true; 
// }

// console.log(son(97)); 









// raqamlar teskari qilib beradi

// function son(x) {
//     return parseInt(x.toString().split('').reverse().join(''));
// }

// console.log(son(5555444));  










// factorial

// function son(x) {
//     if (x < 0) return 1;  
//     let natija = 1;
//     for (let i = 1; i <= x; i++) {
//         natija *= i;  
//     }
//     return natija;
// }
// console.log(son(5)); 









// n gacha bolgan 3 ga bolinadigan sonlar yigindisi

// function son(x) {
//     let yigindi = 0;
//     for (let i = 1; i <= x; i++) {
//         if (i % 3 === 0) {
//             yigindi += i; 
//         }
//     }
//     return yigindi;
// }

// console.log(son(55)); 






//  n gacha bolgan juft va toq sonlar yigindisi

// function son(x) {
//     let toq = 0;  // Toq sonlar yig'indisi
//     let juft = 0; // Juft sonlar yig'indisi
//     for (let i = 1; i <= x; i++) {
//         if (i % 2 === 0) {
//             juft += i;  // Juft sonlarni qo'shish
//         } else {
//             toq += i;  // Toq sonlarni qo'shish
//         }
//     }
//     return `${juft} va ${toq}`;
// }
// console.log(son(10)); 







// kabisa yili

// function kabisa(yil) {
//     if ((yil % 4 === 0 && yil % 100 !== 0) || (yil % 400 === 0)) {
//         return true;  
//     } else {
//         return false;  
//     }
// }
// console.log(kabisa(2032)); 





// QOLGAN JUDA KOPI ISHLASHGA QIYNALDIM VA AI YOZDIM VA U HALI OTMAGAN NARSALAR BILAN ISHLADI MEN YOZGANLARIM KOP QATOR BOLIB KETDI


