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
  // Your code here
}

function validAnagrams(s, t) {
  // Your code here
}

function reverseBaseSort(arr) {
  // Your code here
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
