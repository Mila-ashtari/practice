// ["s","d","k","p","l","g"]
//   0   1   2   3
//   ^           ^
// ["g","l","p","k","d","s"]
function reverseString(strArr){
    let i=strArr.length -1;
    console.log(i)
    for(let j=0; j< (strArr.length/2); j++){
      let left=strArr[j];
      let right=strArr[i]
      console.log(left,right)
      strArr[i]=left;
      strArr[j]=right;
      i--
    }
    return strArr
  }
  
  console.log(reverseString(["s","d","k","p","l","g","m"]))