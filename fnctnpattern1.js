function patternDown(n){

for(let i=1;i<=n;i++){
    for(let j=0;j<n-i;j++){
        string += "*";
    }
    string += "\n";
}
return string
}


let n =10;
let string ="";
let result = patternDown(n)
console.log(result);