function sortInDecreasingOrder(arr) {
  arr.sort((a, b) => b - a);
}

let arr = [5, 2, 1, -10, 8];

sortInDecreasingOrder(arr);

alert(arr);
