function copySorted(arr) {
  const copied = [];
  arr.forEach((element) => {
    copied.push(element);
  });
  return copied.sort();
}

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert(sorted);
alert(arr);
