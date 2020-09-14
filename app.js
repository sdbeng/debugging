//Loop from 1 through 10 included to create a multiplication table that breaks up a line every 10 numbers.

output = ""

for(let i=1; i<=10; i++){
    for(let j=1; j<=10;j++){
        output += i*j + " "
    }
    output += '\n'
}
console.log(output)

//piramid
// for(let i =1; i<=10; i++){
//     output += i * multiplier
//     console.log(output)
// }