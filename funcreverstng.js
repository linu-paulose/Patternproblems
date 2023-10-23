function reverseString(str){
    let revstrng=''
    for(let i=str_len-1;i>=0;i--){
        revstrng += str[i]
        revstrng +=''
    }
    return revstrng
}

const str = 'hello how is your journey';
let str_len=str.length
console.log(str_len);
console.log("Original number: "+str);
const result = reverseString(str);
console.log("Reversed number: "+result);