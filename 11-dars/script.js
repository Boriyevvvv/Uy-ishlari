// const nums = [0,0,1,1,2,2,3,3,4]
// const unique = []
// const result = nums.map((item) => {
//     if (!unique.includes(item)) {
//         unique.push(item)
//     }else{
//         unique.push('_')
//     }
// })
// console.log(unique);




// function smth(haystack, needle){
//     return haystack.indexOf(needle)
// }

// console.log(smth('know', 'nows'));
// console.log(smth('sadbudsat', 'sad'));











// function sozSoni(text) {
//    text = text.trim()
//     if (text === "") return 0
//     const texts = text.split(" ")
//     // console.log(texts);
//     return texts.filter(soz => soz !== "").length
//   }
  
// //  eng qiynagan masala

//   console.log(sozSoni("               Kim bilan              kim      chunmadim ")); 
//   console.log(sozSoni("               Kim bilan              kim  ")); 
//   console.log(sozSoni("     ")); 
//   console.log(sozSoni(" kim      chunmadim")); 
  





// Array.prototype.mySlice = function(start, end) {
//     start = start == null ? 0 : start < 0 ? this.length + start : +start
//     end = end == null ? this.length : end < 0 ? this.length + end : +end

//     let result = []
//     for (let i = start; i < end; i++) {
//         result.push(this[i])
//     }
//     return result;
// };

// let array = [1,2,3,4,5,6,7,8,9];

// console.log(array.mySlice(null, -1));
// console.log(array.slice(null, -1));  

// teacher, this code don't copy with chatgpt only copy your presentation code and some code was changed.





// function trueFalse(params) {
//     let musbatSon =0;
//     let manfiySon = 0

//     params.forEach(sons => {
//         if (sons > 0) {
//             musbatSon++
//         } else if (sons < 0) {
//             manfiySon++
//         }
//     });
//     return musbatSon>manfiySon
// }
// console.log(trueFalse([1,2,3,4,5,6,6,6,6]));
// console.log(trueFalse([1,2,3,4,5,-6,-6,-6,6]));
// console.log(trueFalse([-1,-2,-3,-4,-5,-6,6,6,6]));






// function birlik(params) {
//     const unique = [...new Set(params)]
//     return unique.map(param => {
//         const sanasin = params.filter(p => p === param).length
//         return sanasin > 1 ? param + 's' : param
//     })
// }  
// console.log(birlik(['dog', 'dog', 'bori']));
// console.log(birlik(['horse', 'cat', 'horse']));
// console.log(birlik(['cat', 'cat', 'wolk']));
// console.log(birlik(['wolk', 'wolk', 'bird']));






// function unique(params) {
//     return params.filter(son => params.indexOf(son) === params.lastIndexOf(son))
// }

// console.log(unique([1,1,2,3,4,5,6,3,2,3,2,5,6,5,7,8]));
// console.log(unique([1,3,2,5,7,8,7,8]));
// console.log(unique([1,8,5,5,6,5,7,8]));




// function yoqolgani(num1, num2) {
//     let array1 =  num1.filter(num => !num2.includes(num)) 
//     let array2 =  num2.filter(num => !num1.includes(num))
//      return [...array1, ...array2]
// }
//   console.log(yoqolgani([1, 2, 3, 4, 5, 6, 7, 8], [1, 3, 4, 5, 46, 6, 7, 8, 9])); 
//   console.log(yoqolgani(["Kim", "shu", "balki", "nimadir"], ["shu", "Kim", "nimadir"])); 
  

//   ...   slice     split    splice

  
 




// let array = 'Yahyo al sasasa asasasas'
// let edit = array.replace('Yahyo', 'ALI')
// console.log(edit);

// let smth = 'salom dunyo'
// let smby = smth.toLocaleUpperCase
// console.log(smby);