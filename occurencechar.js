let arr='helloworld '
let ch ='h'
let chh=''
let count =0
arr_len=arr.length
for(let i=0 ;i<arr_len-1; i++){
    if(arr[i]==ch){
        chh = arr[i]
        count +=1

    }

}console.log('occurrence of a character',chh,'times',count)
     
    
