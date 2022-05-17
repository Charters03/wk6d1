function ageSort(users) {
  // Your code here
  return users.sort((a, b) => {
    return a.age - b.age;
    // if (a.age > b.age) {
    //   return 1;
    // } else if (a.age < b.age) {
    //   return -1;
    // } else {
    //   return 0;
    // }
  })
}
//TEST
function oddEvenSort(arr) {
  return arr.sort((a, b) => {
    if ((a + b) % 2 === 0) {
      return a - b;
    } else if (a % 2 === 0) {
      return 1;
    } else if (a % 2 !== 0) {
      return -1;
    }
  })
}

function validAnagrams(s, t) {
  // Your code here
  let arr1 = s.split('');
  let arr2 = t.split('');

  if (arr1.sort().join === arr2.sort().join) {
    return true;
  }
  return false;
}

function reverseBaseSort(arr) {
  // Your code here
  return arr.sort((a,b) => {
    if (a.toString().length === b.toString().length) {
     return a - b;
    } else if (a.toString().length < b.toString().length) {
      return 1;
    } else if (a.toString().length > b.toString().length) {
      return -1;
    }
    return 0;
  })
}

function frequencySort(arr) {
  // Your code here
}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];
