//Cele mai mari 3 numere dintr-un array
//1. Metoda cu 3 for-uri, un for pt fiecare maxim 
//2. Sortare si afisarea ultimelor 3 numere.
//3. Update si shiftare 

//1. Metoda cu 3 for-uri, un for pt fiecare maxim 
function get3BiggestNo(arr) {
  let max1 = Number.MIN_SAFE_INTEGER
  let max2 = Number.MIN_SAFE_INTEGER
  let max3 = Number.MIN_SAFE_INTEGER
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max1) max1 = arr[i];
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < max1 && arr[i] > max2) max2 = arr[i];
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < max2 && arr[i] > max3) max3 = arr[i];
  }
  return [max1, max2, max3]
}
console.log(get3BiggestNo([11, 2, 14, 3, 7, 6]))


//2.  Sortare si afisarea ultimelor 3 numere.
function getBiggest3No(arr) {
  sort(arr)
  for (let i = arr.length - 1; i >= 0; i--) {
    return [arr[i], arr[i - 1], arr[i - 2]]
  }
}
console.log(getBiggest3No([11, 2, 14, 3, 7, 6]))

function sort(arr) {
  arr.sort((a, b) => a - b)
}

//3. Update si shiftare 
function updateLargest(arr) {
  let threeLargest = [Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER]
  for (let num of arr) {
    if (threeLargest[2] === null || num > threeLargest[2]) {
      shiftAndUpdate(threeLargest, num, 2)
    } else if (threeLargest[1] === null || num > threeLargest[1]) {
      shiftAndUpdate(threeLargest, num, 1)
    } else if (threeLargest[0] === null || num > threeLargest[0]) {
      shiftAndUpdate(threeLargest, num, 0)
    }
  }
  return threeLargest
}
console.log(updateLargest([11, 2, 14, 3, 7, 6]))


function shiftAndUpdate(array, num, idx) {
  for (let i = 0; i <= idx; i++) {
    array[i] = array[i + 1];
  }
  array[idx] = num
}


// Patratele elementelor sortate
function getSquareOfSortedElements(arr) {
  let temp;
  let contor = 0;
  for (let i = 0; i < arr.length; i++) {
    arr[contor++] = arr[i] * arr[i]
  }
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp
      }
    }
  }
  return arr
}
console.log(getSquareOfSortedElements([3, 1, 5, 2, 4]))


//Patratele elementelor sortate 
//sol 2 - SWAP + BUBBLE SORT
function getSquareOfSortedElements2(arr) {
  let contor = 0;
  for (let i = 0; i < arr.length; i++) {
    arr[contor++] = arr[i] * arr[i]
  }
  return bubbleSort(arr)
}
console.log(getSquareOfSortedElements2([3, 1, 5, 2, 4]))

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp
}

function bubbleSort(arr) {
  for (i = 0; i < arr.length - 1; i++) {
    for (j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1)
      }
    }
  }
  return arr
}

//Patratele elementelor sortate 
//sol 3 - WHILE
function sortElement(arr) {
  let i = 0
  let contor = 0;
  while (i < arr.length) {
    arr[contor++] = arr[i] * arr[i]
    i++;
  }
  bubbleSort(arr)
  return arr
}
console.log(sortElement([3, 1, 5, 2, 4]))


// Cea mai mica diferenta dintre 2 array-uri
//Sol. 1
function getTheSmallestDiffBetweenArr(arr1, arr2) {
  let pair = []
  let diff = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] - arr2[j] < diff) {
        diff = arr1[i] - arr2[j];
        pair = [arr1[i], arr2[j]]
      }
      if (arr2[j] - arr1[i] < diff) {
        diff = arr2[j] - arr1[i]
        pair = [arr2[j], arr1[i]]
      }
    }
  }
  return pair
}
console.log(getTheSmallestDiffBetweenArr([4, 3], [1, 2]))

//Sol. 2 - bubbleSort + getTheSmallestDiffBetweenArr
function getTheSmallestDiffBetweenArr2(arr1, arr2) {
  arr1 = bubbleSort(arr1)
  arr2 = bubbleSort(arr2)
  return getTheSmallestDiffBetweenArr(arr1, arr2)
}
console.log(getTheSmallestDiffBetweenArr2([4, 3], [1, 2]))


function getTheSmallestDiffBetweenArr3(arr1, arr2) {
  let i, j = 0;
  let minDiff = Number.MAX_SAFE_INTEGER
  let pair = [];
  let diff;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] > arr2[j]) {
      diff = arr1[i] - arr2[j]
      pair = [arr1[i], arr2[j]]
      i++;
    }
    else if (arr2[j] > arr1[i]) {
      diff = arr2[j] - arr1[i]
      pair = [arr2[j], arr1[i]]
      j++;
    }
    if (diff < minDiff) {
      minDiff = diff
    }
  }
  return minDiff
}
console.log(getTheSmallestDiffBetweenArr3([4, 3], [1, 2]))



// Sterge elementele duplicate dintr-un array
//Sol. 1
function removeDuplicates2(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) arr.splice(j, 1)
    }
  }
  return arr
}
console.log(removeDuplicates2([2, 2, 3, 4, 55, 3]))


//Sol. 2 - cu SET
function removeDuplicates(arr) {
  let seen = new Set()
  for (let x of arr) {
    if (!seen.has(x)) {
      seen.add(x)
    }
  }
  return seen
}
console.log(removeDuplicates([2, 2, 3, 4, 55, 3]))


//Subsir de suma 0
//Scrie o functie care sa determina daca exista un subsir cum suma 0 intr-un array.
function isSubsequenceWithSum0(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) return true
    }
  }
  return false
}
console.log(isSubsequenceWithSum0([2, 3, -1, 5, 1]))



//Subsir al unui array (validate subsequence)
// Avand la dispoizitie doua array-uri, verifica daca al doilea este subsir al primului.
function isValidateSubsequence2(arr, seq) {
  let i = 0
  let j = 0
  while (i < arr.length && j < seq.length) {
    if (arr[i] === seq[j]) {
      i++;
    }
    j++;
  }
  return j === seq.length
}
console.log(isValidateSubsequence2([11, 2, 3, 1, 14, 5, 7], [2, 3, 7, 11]))