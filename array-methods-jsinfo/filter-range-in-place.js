function filterRangeInPlace(arr, a, b) {
  for (let i = arr.length - 1; i >= 0; i--)
    if (a <= arr[i] && arr[i] <= b) {
      continue;
    } else {
      arr.splice(i, 1);
    }
}

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4);

alert(arr);
