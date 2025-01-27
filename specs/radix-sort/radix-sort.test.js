/*

  Implement a radix sort in a function called radixSort.

  You'll probably need several functions
  
  You can implement it using a binary or decimal based bucketing but I'd recommend the decimal based buckets because
  it ends up being a lot more simple to implement.

*/

function radixSort(array) {
  // code goes here
  let i = 0;
  let currentArray = array
  let repeat = false
  do {
    // Divide array in buckets
    let bucket = {} 
    repeat = false
    currentArray.forEach((num) => {
      let size = num.toString().length
      let index = size - 1 - i
      let pivot = 0;

      if (index >= 0) {
        pivot = Number(num.toString()[index])
        repeat = true;
      }
      
      if (bucket[pivot]) {
        bucket[pivot].push(num)
      } else {
        bucket[pivot] = [num]
      }
    })

    //Build Array back
    let arrayFromBucket = []
    Object.keys(bucket).forEach((key) => {
      arrayFromBucket = arrayFromBucket.concat(bucket[key]);
    })

    currentArray = arrayFromBucket

    i++

   } while (repeat)
  
  return currentArray
}

// const longestNumber = (array) => {
//   let size = 0
//   for (i = 0; i < array.length; i++) {
//     let numberSize = array[i].toString().length
//     if (numberSize > size){
//       size = numberSize
//     } 
//   }
//   return size
// }

// function radixSort(array) {
//   const iterationSize = longestNumber(array);
//   const arraySize = array.length;
//   let buckets = [[], [], [], [], [], [], [], [], [], []]
//   let sortedArray = array
//   for (let i = 0; i < iterationSize; i++) {
//     for (let j = 0; j < arraySize; j++) {
//       const currentNumber = sortedArray[j]
//       const charCount = currentNumber.toString().length
//       const index = charCount - 1 - i
//       let bucketIndex = 0;
//       if (index >= 0){
//         bucketIndex = parseInt(currentNumber.toString()[index])
//       }
//       buckets[bucketIndex].push(currentNumber)
//     }
//     let newArray = []
//     for (let k = 0; k < buckets.length; k++) {
//       newArray = newArray.concat(buckets[k])
//     }
//     sortedArray = newArray
//     buckets = [[], [], [], [], [], [], [], [], [], []]
//   }
//   return sortedArray
// }

// unit tests
// do not modify the below code
describe("radix sort", function () {
  it("should sort correctly", () => {
    const nums = [
      20,
      51,
      3,
      801,
      415,
      62,
      4,
      17,
      19,
      11,
      1,
      100,
      1244,
      104,
      944,
      854,
      123459,
      34,
      3000,
      3001,
      1200,
      633
    ];
    const ans = radixSort(nums);
    expect(ans).toEqual([
      1,
      3,
      4,
      11,
      17,
      19,
      20,
      34,
      51,
      62,
      100,
      104,
      415,
      633,
      801,
      854,
      944,
      1200,
      1244,
      3000,
      3001,
      123459
    ]);
  });
  it("should sort 99 random numbers correctly", () => {
    const fill = 99;
    const nums = new Array(fill)
      .fill()
      .map(() => Math.floor(Math.random() * 500000));
    const ans = radixSort(nums);
    expect(ans).toEqual(nums.sort(function (a, b) {  return a - b;  }));
  });
});
