const removeDuplicates = (arr) => {
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