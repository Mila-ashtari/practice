function containsDuplicates(arr){
    // defining  a an object for the input array
  let arrObj={}
  let result=[]
  arr.forEach(item =>{
    if(arrObj[item] === undefined){
      arrObj[item]=item
     }
     else{
        result.push(item)
     }
  })
  return result
  }
  
  console.log(containsDuplicates([1,3,4,3,0,2,4]))