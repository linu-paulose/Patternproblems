const arr=[101,2,344,50,171,192,15,30,121,21]
//console.log(arr.length)
let temp=[]
for(let i=0;i<arr.length-1;i++){
  for(let j=0;j<arr.length-1-i;j++){
     if(arr[j]>arr[j+1]){
    const temp =arr[j]
    arr[j]=arr[j+1]
    arr[j+1]=temp

   }
 }
}
for(i=0;i<arr.length;i++){
    console.log(arr[i]+"")
}