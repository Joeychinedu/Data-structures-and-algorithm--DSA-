const arr = [3, 4, 7, 9, 10, 2, 5, 1, 8, 6];

// Bubble Sort

function bubbleSort(arr) {
  const length = arr.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap numbers
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// console.log(bubbleSort(arr));

// Selection Sort
function selectionSort(arr) {
  const length = arr.length;

  for (let i = 0; i < length; i++) {
    // set current index as minimum
    let min = i;
    let temp = arr[i];
    for (let j = i + 1; j < length; j++) {
      if (arr[j] < arr[min]) {
        // Update minimum if current is lower than what we had previously
        min = j;
      }
    }
    arr[i] = arr[min];
    arr[min] = temp;
  }

  return arr;
}

console.log(selectionSort(arr));

// Insertion Sort
function insertionSort(arr) {
  const length = arr.length;

  for (let i = 0; i < length; i++) {
    // console.log(i, next);
    if (arr[i] < arr[0]) {
      // move number to the first position
      arr.unshift(arr.splice(i, 1)[0]);
    } else {
      // find where number should go
      for (let j = 1; j < i; j++) {
        if (arr[i] > arr[j - 1] && arr[i] < arr[j]) {
          // move number to the right spot
          arr.splice(j, 0, arr.splice(i, 1)[0]);
        }
      }
    }
  }
  return arr;
}

console.log(insertionSort(arr));

// Merge Sort
function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }
  // Split Array into right and left
  const length = arr.length;
  const middle = Math.floor(length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

console.log(mergeSort(arr));
