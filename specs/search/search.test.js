// for both exercises, the id of the object you're searching for is given to you
// as integer. return the whole object that you're looking for
//
// it's up to you what to return if the object isn't found (we're not testing that)

const { result } = require("lodash");

function linearSearch(id, array) {
  // code goes here
  let result;
  for (let i = 0; i < array.length; i++) {
    if (array[i].id === id){
      result = array[i];
      i = array.length
    }
  }
  return result;
}

function binarySearch(id, array) {
  // code goes here
  let found = false;
  let result;
  do {
    let index = Math.floor(array.length / 2) - 1;
    let comparison = array[index].id;
    if (comparison === id) {
      found = true
      result = array[index]
    } else if (comparison > id) {
      array = array.slice(0, index);
    } else {
      array = array.slice(index + 1);
    }
  } while (!found)

  return result;
}

// unit tests
// do not modify the below code
test("linear search", function () {
  const lookingFor = { id: 5, name: "Brian" };
  expect(
    linearSearch(5, [
      { id: 1, name: "Sam" },
      { id: 11, name: "Sarah" },
      { id: 21, name: "John" },
      { id: 10, name: "Burke" },
      { id: 13, name: "Simona" },
      { id: 31, name: "Asim" },
      { id: 6, name: "Niki" },
      { id: 19, name: "Aysegul" },
      { id: 25, name: "Kyle" },
      { id: 18, name: "Jem" },
      { id: 2, name: "Marc" },
      { id: 51, name: "Chris" },
      lookingFor,
      { id: 14, name: "Ben" }
    ])
  ).toBe(lookingFor);
});

test("binary search", function () {
  const lookingFor = { id: 4, name: "Gian" };
  expect(
    binarySearch(4, [
      { id: 1, name: "Sam" },
      { id: 3, name: "Sarah" },
      lookingFor,
      { id: 5, name: "John" },
      { id: 6, name: "Burke" },
      { id: 10, name: "Simona" },
      { id: 12, name: "Asim" },
      { id: 13, name: "Niki" },
      { id: 15, name: "Aysegul" },
      { id: 17, name: "Kyle" },
      { id: 18, name: "Jem" },
      { id: 19, name: "Marc" },
      { id: 21, name: "Chris" },
      { id: 24, name: "Ben" }
    ])
  ).toBe(lookingFor);
});
