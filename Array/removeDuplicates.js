// Since the array is already sorted, we can keep two pointers i and j, where i is the slow-runner while j is the fast-runner.
//  As long as nums[i] = nums[j]nums[i]=nums[j], we increment j to skip the duplicate.
// When we encounter nums[j] !== nums[i], the duplicate run has ended so we must copy its value to nums[i + 1]nums[i+1]. 
// i is then incremented and we repeat the same process again until jj reaches the end of array.



    function removeDuplicates(arr){
    if (arr.length === 0) return 0;
    let i = 0;
    for ( let j = 1; j < arr.length; j++) {
        console.log(i, j)
        if (arr[j] !== arr[i]) {
          console.log(i, j)
            i++;
            arr[i] = arr[j];
        }
    }
    console.log(arr)
    return i + 1;
  };
  
  console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));