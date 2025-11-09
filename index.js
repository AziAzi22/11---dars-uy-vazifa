// 1 - masala

// function findmostelement(arr) {
//   let object = {};
//   for (const element of arr) {
//     object[element] ? object[element]++ : (object[element] = 1);
//   }
//   let max = 0;
//   let mostelement = arr[0];
//   for (const key in object) {
//     if (object[key] > max) {
//       max = object[key];
//       mostelement = key;
//     }
//   }
//   return {element: mostelement, count: max};
// }
// console.log(findmostelement([1, 4, 6, 7, 4, 3, 2, 1, 1, 9, 9, 0, 1]));

// 2 - masala

// function cuntjuftelements(arr) {
//     let count = 0
//     for (const element of arr) {
//         if (element % 2 === 0 && element !== 0) {
//             count ++
//         }
//     }
//     return count
// }
// console.log(cuntjuftelements([1, 4, 6, 7, 4, 3, 2, 1, 1, 9, 9, 0, 1]));

// 3 - masala

// function uniquelements(arr) {
//   let unique = {};
//   for (const element of arr) {
//     unique[element] ? unique[element]++ : (unique[element] = 1);
//   }
//   let result = [];
//   for (const key in unique) {
//     if (unique[key] === 1) {
//       result.push(+key);
//     }
//   }
//   return result;
// }
// console.log(uniquelements([1, 2, 2, 3, 4, 4, 5]));

// 4 - masala

// function rewrseworts(str) {
//     str = str.split(" ").reverse().join(" ")
//     return str
// }
// console.log(rewrseworts("man js o'rganyapman"));

// 5 - masala

// function isNUmber(str) {
//   if (isNaN(+str)) {
//     return false;
//   }
//   return true;
// }
// console.log(isNUmber("123n45"));
// console.log(isNUmber("1235"));

// 6 - masala

// function func(arr) {
//   let result = [];
//   for (const element of arr) {
//     let count = 0;
//     for (const xarf of element) {
//         if (xarf === "e") {
//             count++;
//         }
//     }
//     if (count >= 2) {
//       result.push(element);
//     }
//   }
//   return result;
// }
// console.log(func(["elephant", "three", "apple", "banana", "cheese"]));

// 7 - masala

// function sort_func(arr) {
//   let result = [];
//   for (const wort of arr) {
//     let boo = true;
//     for (let i = 0; i < wort.length - 1; i++) {
//       if (wort[i] > wort[i + 1]) {
//         boo = false;
//         break;
//       }
//     }
//     if (boo) {
//       result.push(wort);
//     }
//   }
//   return result;
// }
// console.log(sort_func(["abc", "dog", "xyz", "apple"]));

// function sortFunc(arr) {
//   return arr.filter(word => word === [...word].sort().join(""));
// }
// console.log(sortFunc(["abc", "dog", "xyz", "apple"]));

// 8 - masala

// function func(item) {
//   if (Array.isArray(item)) {
//     let result = item.reduce((a, b) => a + b, "");
//     return result;
//   } else if (!isNaN(item)) {
//     let result = item.toString().split("").map( n => +n)
//     return result;
//   } else {
//     return "error";
//   }
// }
// console.log(func([2, 3, 5]));
// console.log(func(235));

// 9 - masala

// function measureDepth(x) {
//   if (!Array.isArray(x)) return 0;
//   if (x.length === 0) return 1;
//   let count = 0;
//   for (const arr of x) {
//     count = Math.max(count, measureDepth(arr) + 1);
//   }
//   return count;
// }
// console.log(measureDepth([[]]));
// console.log(measureDepth([]));
// console.log(0);
// console.log(measureDepth([1, [[[[[[[[[10]]]]]]]]]]));

// 10 - masala

// function sumdigits(num) {
//    num = num.toString().split("").reduce((a, b) => +a + +b);
//    return num
// }
// console.log(sumdigits(1234));
// console.log(sumdigits(123));
