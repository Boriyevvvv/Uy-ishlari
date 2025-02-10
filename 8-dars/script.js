// const people = [
//     { name: "Abdulaziz", age: 33 },
//     { name: "Erkin", age: 22 },
//     { name: "Temur", age: 34 },
//     { name: "Sardor", age: 20 },
//   ];
  
//   function getAverageAge(arr) {
//     let sum = 0;
//     for (const person of arr) {
//       sum += person.age;
//     }
//     return sum / arr.length;
//   }
  
//   console.log(getAverageAge(people)); // 27.25

  






//   const people1 = [
//     { name: "Abdulaziz", age: 33 },
//     { name: "Erkin", age: 22 },
//     { name: "Temur", age: 34 },
//     { name: "Sardor", age: 20 },
//   ];
  

//   for (const person of people1) {
//     person.isMarried = person.age >= 25;
//   }
  

//   console.log(people1);






//   const human = [
//     { name: "Abdulaziz", age: 33 },
//     { name: "Erkin", age: 22 },
//     { name: "Temur", age: 34 },
//     { name: "Sardor", age: 20 },
//   ];


//   function getNameMaxMinAge(arr) {
//     let max = arr[0], min = arr[0];
//     for (const person of arr) {
//       if (person.age > max.age) max = person;
//       if (person.age < min.age) min = person;
//     }
//     return [max.name, min.name];
//   }
  
//   console.log(getNameMaxMinAge(human));
  
 




// const me = {
//     firstName: "Yahyobek",
//     lastName: "Yunusov",
//     age: 23,
//     languages: ["js", "python", "c++", "nodejs"],
//     friends: ["Jamshid", "Abbos", "Jalol", "Mar'uf"],
//   };
  
//   console.log(`firstName: ${me.firstName}`);
//   console.log(`lastName: ${me.lastName}`);
//   console.log(`age: ${me.age}`);
//   console.log(`languages: ${me.languages.join(",")}`);
//   console.log(`friends: ${me.friends.join("+")}`);
  









// function kvadrat(n) {
//     const natija = {};
//     for (let i = 1; i <= n; i++) {
//       natija[i] = i * i;
//     }
//     return natija;
//   }
  
//   console.log(kvadrat(5)); 
  








// const names = ["Abdulaziz", "Safarmurod", "O’rol", "Jahongir"];

// function ismUzunligi(arr) {
//   const result = {};
//   for (const name of arr) {
//     result[name] = name.length;
//   }
//   return result;
// }

// console.log(ismUzunligi(names));








// const products = { "Apelsin": 10000, "Olma": 12000, "Mandarin": 8000, "Banan": 20000 };

// function umumiyNarx(obj) {
//   return Object.values(obj).reduce((yigindi, price) => yigindi + price, 0);
// }

// console.log(umumiyNarx(products)); 





function defineObject(obj) {
    return Object.keys(obj).every(key => isNaN(Number(key)));
  }
  
  console.log(defineObject({ abc: 1, 123: 2, d: 5 })); // false

  




  function removeFalsyValues(obj) {
    const result = {};
    for (const key in obj) {
      if (obj[key]) {
        result[key] = obj[key];
      }
    }
    return result;
  }
  
  console.log(removeFalsyValues({ a: false, b: 12, c: true, d: 0 }));
  // { b: 12, c: true }

  









  function countNumbers(arr) {
    const result = {};
    for (const num of arr) {
      result[num] = (result[num] || 0) + 1;
    }
    return result;
  }
  
  console.log(countNumbers([7, 8, 4, 5, 7, 5, 4, 8, 5, 4, 7, 9]));
  // { 7: 3, 8: 2, 4: 3, 5: 3, 9: 1 }

  









  function splitNumberClasses(num) {
    const str = num.toString();
    const classes = ["birlar", "minglar", "millionlar", "milliardlar", "trilionlar"];
    const result = {};
  
    let index = 0;
    for (let i = str.length; i > 0; i -= 3) {
      result[classes[index++]] = str.slice(Math.max(0, i - 3), i);
    }
    return result;
  }
  
  console.log(splitNumberClasses(8945472985629));
  // { birlar: "629", minglar: "985", millionlar: "472", milliardlar: "945", trilionlar: "8" }

  











  const books = [
    { title: "Halqa", author: "Akrom Malik", alreadyRead: false },
    { title: "Dunyo ishlari", author: "O'tkir Hoshimov", alreadyRead: true },
    { title: "Vaqtning qadri", author: "Abdulfattoh Abu G'udda", alreadyRead: false },
  ];
  
  function printBooksStatus(books) {
    books.forEach((book, index) => {
      console.log(
        `${index + 1}. ${book.author}ning "${book.title}" kitobi ${
          book.alreadyRead ? "o'qilgan" : "o'qilmagan"
        };`
      );
    });
  }
  
  printBooksStatus(books);
  // 1. Akrom Malikning "Halqa" kitobi o'qilmagan;
  // 2. O'tkir Hoshimovning "Dunyo ishlari" kitobi o'qilgan;
  // 3. Abdulfattoh Abu G'uddaning "Vaqtning qadri" kitobi o'qilmagan;

  




  const products = [
    { name: "Product 1", price: 20000, discount: 10, quantity: 5 },
    { name: "Product 2", price: 10000, discount: 20, quantity: 4 },
    { name: "Product 3", price: 15000, discount: 8, quantity: 10 },
    { name: "Product 4", price: 18000, discount: 5, quantity: 6 },
    { name: "Product 5", price: 5000, discount: 10, quantity: 16 },
  ];
  
  function calculateTotal(products) {
    return products.reduce((total, product) => {
      const discountedPrice = product.price - (product.price * product.discount) / 100;
      return total + discountedPrice * product.quantity;
    }, 0);
  }
  
  console.log(calculateTotal(products)); // 556400

  









  const obj = { it: 20, mushuk: 10, sigir: 200, tovuq: 2 };

function toKeyValueArray(obj) {
  const result = [];
  for (const key in obj) {
    result.push(key, obj[key]);
  }
  return result;
}

console.log(toKeyValueArray(obj));
// ["it", 20, "mushuk", 10, "sigir", 200, "tovuq", 2]











const grades = [
    { name: "Fizika", grade: 4, kredit: 6 },
    { name: "Matematika", grade: 5, kredit: 6 },
    { name: "Tarix", grade: 4, kredit: 4 },
    { name: "Dasturlash", grade: 5, kredit: 8 },
    { name: "Kibrxavfsizlik", grade: 4, kredit: 8 },
  ];
  
  function calculateGPA(grades) {
    let total = 0, totalCredits = 0;
    for (const subject of grades) {
      total += subject.grade * subject.kredit;
      totalCredits += subject.kredit;
    }
    return total / totalCredits;
  }
  
  console.log(calculateGPA(grades)); // 4.4

  









  const rightAnswers = { 1: "B", 2: "A", 3: "C", 4: "D", 5: "B", 6: "C", 7: "A", 8: "D", 9: "A", 10: "B" };
const myAnswers = { 1: "C", 2: "A", 3: "D", 4: "D", 5: "B", 6: "C", 7: "B", 8: "C", 9: "A", 10: "C" };

function checkAnswers(correct, my) {
  let correctCount = 0, incorrectCount = 0;
  for (const key in correct) {
    if (correct[key] === my[key]) correctCount++;
    else incorrectCount++;
  }
  return { correct: correctCount, incorrect: incorrectCount };
}

console.log(checkAnswers(rightAnswers, myAnswers));
// { correct: 5, incorrect: 5 }
















function getMultipleValues(obj, n) {
    const result = {};
    for (const key in obj) {
      result[key] = obj[key] * n;
    }
    return result;
  }
  
  console.log(getMultipleValues({ a: 2, b: 3, c: 4, d: 6 }, 3));
  // { a: 6, b: 9, c: 12, d: 18 }

  



//   ADDED BY ME 


// const arr = [1, -2, 3, -4, 5, -6];
// const result = {
//   positive: arr.filter((n) => n > 0),
//   negative: arr.filter((n) => n < 0),
// };
// console.log(result);












// const nums = [1, 2, 2, 3, 4, 4, 5];
// const unique = nums.filter((n, i, arr) => arr.indexOf(n) === arr.lastIndexOf(n));
// console.log(unique);




















// const str = "hello";
// const count = {};
// for (const char of str) {
//   count[char] = (count[char] || 0) + 1;
// }
// console.log(count);
















// const numbers = [10, 5, 8, 3, 20];
// const result = {
//   max: Math.max(...numbers),
//   min: Math.min(...numbers),
// };
// console.log(result);










// const obj = { b: 10, a: 5, c: 15 };
// const sorted = Object.fromEntries(Object.entries(obj).sort((a, b) => a[1] - b[1]));
// console.log(sorted);
















// const arr = [1, 2, 3, 4];
// const result = arr.map((n, i) => n + (arr[i + 1] || 0)).slice(0, -1);
// console.log(result);














// const strings = ["a", "ab", "abc", "abcd"];
// const result = {};
// strings.forEach((str) => (result[str] = str.length));
// console.log(result);











// const arr = [0, 1, false, 2, "", 3, null, 4];
// const result = arr.filter(Boolean);
// console.log(result);









// const arr = ["apple", "banana", "kiwi"];
// const result = arr.map((str) => str.length);
// console.log(result);





// const nums = [1, 2, 3, 4];
// const doubled = nums.map((n) => n * 2);
// console.log(doubled);
