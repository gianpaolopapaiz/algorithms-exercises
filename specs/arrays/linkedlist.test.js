/*
  LinkedList
  
  Name your class / constructor (something you can call new on) LinkedList
  
  LinkedList is made by making nodes that have two properties, the value that's being stored and a pointer to
  the next node in the list. The LinkedList then keep track of the head and usually the tail (I would suggest
  keeping track of the tail because it makes pop really easy.) As you may have notice, the unit tests are the
  same as the ArrayList; the interface of the two are exactly the same and should make no difference to the
  consumer of the data structure.
  
  length - integer  - How many elements in the list
  push   - function - accepts a value and adds to the end of the list
  pop    - function - removes the last value in the list and returns it
  get    - function - accepts an index and returns the value at that position
  delete - function - accepts an index, removes value from list, collapses, 
                      and returns removed value
                      
  I would suggest making a second class, a Node class. However that's up to you how you implement it. A Node
  has two properties, value and next.

  As always, you can change describe to xdescribe to prevent the unit tests from running while
  you work
*/

const { find } = require("lodash")

class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }
  push(value) {
    let node = new Node(value)
    if (this.length === 0) {
      this.head = node
    } else {
      let prevNode = this.head
      for (let i = 1; i < this.length; i++){
        prevNode = prevNode.next
      }
      prevNode.next = node
      this.tail = node
    }
    this.length++
  }
  pop() {
    if (this.length > 0) {
      let node = this.head;
      for (let i = 1; i < this.length - 1; i++) {
        node = node.next;
      }
      let removed = node.next
      node.next = null
      this.tails = node
      this.length--
      return removed.value;
    }
  }
  get(index) {
    let node = this.head
    for (let i = 0; i < index; i++){
      node = node.next
    }
    return node.value
  }
  delete(index) {
    let node = null
    let next = null
    let previous = null
    if (index > 0) {
      node = this.head
      for (let i = 0; i < index; i++){
        node = node.next
      }
      previous = this.head
      for (let i = 0; i < index - 1; i++){
        previous = previous.next
      }
      node = previous.next
      next = null;
      if (node === this.tail){
        previous.next = null
      } else {
        next = node.next
        previous.next = next
      }
    } else {
      node = this.head
      next = node.next
      this.head = next
    }
    this.length--
    return node
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// unit tests
// do not modify the below code
describe("LinkedList", function () {
  const range = (length) =>
    Array.apply(null, { length: length }).map(Number.call, Number);
  const abcRange = (length) =>
    range(length).map((num) => String.fromCharCode(97 + num));
  let list;

  beforeEach(() => {
    list = new LinkedList();
  });

  test("constructor", () => {
    expect(list).toEqual(expect.any(LinkedList));
  });

  test("push", () => {
    abcRange(26).map((character) => list.push(character));
    expect(list.length).toEqual(26);
  });

  test("pop", () => {
    abcRange(13).map((character) => list.push(character));
    expect(list.length).toEqual(13);
    range(10).map(() => list.pop());
    expect(list.length).toEqual(3);
    expect(list.pop()).toEqual("c");
  });

  test("get", () => {
    list.push("first");
    expect(list.get(0)).toEqual("first");
    list.push("second");
    expect(list.get(1)).toEqual("second");
    expect(list.get(0)).toEqual("first");
    abcRange(26).map((character) => list.push(character));
    expect(list.get(27)).toEqual("z");
    expect(list.get(0)).toEqual("first");
    expect(list.get(9)).toEqual("h");
    list.pop();
    expect(list.get(list.length - 1)).toEqual("y");
  });

  test("delete", () => {
    abcRange(26).map((character) => list.push(character));
    list.delete(13);
    expect(list.length).toEqual(25);
    expect(list.get(12)).toEqual("m");
    expect(list.get(13)).toEqual("o");
    list.delete(0);
    expect(list.length).toEqual(24);
    expect(list.get(0)).toEqual("b");
  });
});
