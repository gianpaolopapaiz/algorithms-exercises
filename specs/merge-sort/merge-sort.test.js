/*
  Write a function that performs mergesort
  Name the function mergeSort
  It will take in a array of numbers and return a sorted array numbers

  You'll need to write more than just one function
*/

const merge = (first, second) => {
  let merged = []
  let firstI = 0
  let secondI = 0
  let again = true
  do {
    if (first[firstI] < second[secondI]){
      merged.push(first[firstI])
      firstI += 1
    } else {
      merged.push(second[secondI])
      secondI += 1
    }
    if ((firstI >= first.length) || (secondI >= second.length) ){
      again = false
    }
  } while (again) 

  if (secondI < second.length) {
    for (let i = secondI; i < second.length; i++) {
      merged.push(second[i])
    }
  }
  if (firstI < first.length) {
    for (let i = firstI; i < first.length; i++) {
      merged.push(first[i])
    }
  }
  return merged
}
  

const mergeSort = (nums) => {
  // code goes here
  size = nums.length
  if (size > 1) {
    let middleIndex = Math.ceil(size / 2)
    let firstHalf = nums.splice(0, middleIndex)
    let secondHalf = nums.splice(-middleIndex)
    let first = mergeSort(firstHalf)
    let second = mergeSort(secondHalf)
    let merged = merge(first, second)
    return merged
  } else {
    return nums
  }
};

// unit tests
// do not modify the below code
test("merge sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const ans = mergeSort(nums);
  expect(ans).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});

// test("merge sort", function () {
//   console.log('started test')
//   const numsA = [3,5,7];
//   const numsB = [1,2,8,10]
//   const ans = merge(numsA, numsB);
//   console.log(ans)
//   expect(ans).toEqual([1, 2, 3, 5, 7, 8, 10]);
// });
