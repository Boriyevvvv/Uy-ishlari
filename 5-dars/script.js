

// maxNumber(12, “34”) max numberni toping va type number bo’lsin

// function maxNumber(num1, num2) {
//     return Math.max(Number(num1), Number(num2)); 
// }
// console.log(maxNumber(12, "34"));

// repeatEnd(”JavaScript”, 4) ushbu funksiya ikkinchi argumnetda berilgan raqamchalik
//  stringdan kesib va ikkinchi argumnetda berilgan raqamchalik stringni ko’paytirib qaytarsin

// function repeatEnd(str, num) {
//     let oxirPart = str.slice(-num);
//     return oxirPart.repeat(num);
// }
// console.log(repeatEnd("JavaScript", 4));

// repeatEnd(”JavaScript”, 4) // "ScriptScriptScriptScript"
// Arraydagi har bir elementni  juft sonlarni ajratib olib va uni ikki baravarga oshirib arrayda qaytaring:
// [1,2,1,5,2,1,8] // [4, 4, 16]

// function twoMath(arr) {
//     return arr.filter(n => n % 2 === 0).map(n => n * 2);
// }
// console.log(twoMath([1, 2, 1, 5, 2, 1, 8]));

// Homework

// let nums = [3.02, -3.65, 5, -9] shu sonlarni matematik yaxlitlash va minus son bo’lsa uni
//  musbatga o’girib so’ng array ko’rinishida qatarishi kerak
// normalizeNumbers(numbers) => [3, 4, 5, 9]

// function yaxlitlash(numbers) {
//     return numbers.map(n => Math.abs(Math.round(n)));
// }
// console.log(yaxlitlash([3.02, -3.65, 5, -9]));

// function argumentga bir dona raqam oladi berilgan raqamni kubini qaytaring
//  console.log(kubniQaytar(3)); // 27

// function kub(num) {
//     return Math.pow(num, 3);
// }
// console.log(kub(3));


// funksiya argumentidan raqam qabul qiladi va birdan berilgan
//  raqamgacha aylanib oradagi raqamlarda toqlarini alohida va juflarini
//   alohida qilib yig’indisini qaytaring

// function limit(limit) {
//     let juft = 0, toq = 0;
//     for (let i = 1; i <= limit; i++) {
//         if (i % 2 === 0) juft += i;
//         else toq += i;
//     }
//     return { juft, toq };
// }
// console.log(limit(10));





// function twoArgument(val1, val2) {
//     return val1 === val2 ? (val1 + val2) * 2 : val1 + val2;
// }
// console.log(twoArgument(5, 5));


// function yigindiniHisobla(arr) {
//     return arr.reduce((sum, num) => sum + num, 0);
// }
// console.log(yigindiniHisobla([2, 5, 7, 10]));




// function engKotta(arr) {
//     return Math.max(...arr);
// }
// console.log(engKotta([111, 4, 6, 2, 99, 44, 11]));



// function kichik(arr) {
//     return Math.min(...arr);
// }
// console.log(kichik([111, 4, 6, 2, 99, 44, 11]));



// function arrayKotta(arr1, arr2) {
//     return Math.max(Math.max(...arr1), Math.max(...arr2));
// }
// console.log(arrayKotta([1, 4, 7], [2, 9, 5]));