let n =10;
let string ="";
for(let i=1;i<=n;i++){
    for(let j=0;j<n-i;j++){
        string += "*";
    }
    string += "\n";
}
console.log(string);