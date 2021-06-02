// Create a function that takes in an array of numbers or strings and
// returns an array with the items from the original array stored in subarrays.
// Items of the same value should be in the same subarray.

const advancedSort = arr => {
  //Write code here
  let result = [];

  for (let i in arr) {
    let value = arr[i];
    let index = result.reduce((total, item, j) => {
      if (item.includes(value)) {
        return j;
      } else {
        return total;
      }
    }, -1);

    if (index != -1) {
      result[index].push(value);
    } else {
      result.push([value]);
    }
  }

  return result;
};

// Example 1:
// Input: ([2, 1, 2, 1])
// Output: [[2, 2], [1, 1]]

// Example 2:
// Input: ([5, 4, 5, 5, 4, 3])
// Output: [[5, 5, 5], [4, 4], [3]]

// Example 3:
// Input: ["b", "a", "b", "a", "c"]
// Output: [["b", "b"], ["a", "a"], ["c"]]
