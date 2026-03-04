function unique(arr) {
  const uniqueItems = [];

  for (let i = 0; i < arr.length; i++) {
    let isDuplicate = false;

    for (let j = 0; j < uniqueItems.length; j++) {
      if (uniqueItems[j] === arr[i]) {
        isDuplicate = true;
        break;
      }
    }

    if (!isDuplicate) {
      uniqueItems.push(arr[i]);
    }
  }

  return uniqueItems;
}

let strings = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

alert(unique(strings));
