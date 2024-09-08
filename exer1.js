// function q1(int ,bool ){
//     let erroew = '';
//     for(let i =0 ; i < int ; i++){
//         erroew += '-';
//     }
//     if(bool){
//         erroew += '>';
//     }
//     else{
//         erroew = '<' + erroew
//     }
//     return erroew

// }
// console.log(q1(5,false));
// const funcNumbers = (...numbers) => {
//     const max =  numbers.reduce((previos , curent) => {return previos > curent ? previos : curent});
//     console.log(max);
//     console.log(numbers.length);
//     let sum = 0
//     for(let i = 0 ; i < numbers.length ; i++){
//         sum += numbers[i]
//     }
//     let avg = sum / numbers.length
//     console.log(sum);
//     console.log(avg);
//     if(numbers[3]){
//         console.log(numbers[3]);
        
//     }
//     else{
//         console.log(numbers[numbers.length-1]);
        
//     } 
// }
// funcNumbers (1,2,3,4,5,6)



//
// let piramide = ''
// function funcPiramida (int){
//     for(i = 0 ; i < int; i++){
//         piramide += '*';
//         console.log(piramide);
//         }
// }
// funcPiramida(5)

//4
// let piramide = ''
// function funcPiramida (int){
//     for(i = 0 ; i < int; i++){
//         piramide += '*';
//         }
//     for(i = 0; i < int ; i++){
//         console.log(piramide);
//         piramide = piramide.slice(0,-1)
        
//     }
// }
// funcPiramida(5)

//5

// const duplicate = (num) => {
//     const rows =[]
//     for( let i=1; i< num ; i++){
//         let constnew = []
//         for( let j=1; j< num ; j++){
//             constnew.push(i*j)
//         }
//         rows.push(constnew)
//     }
//     console.table(rows);
    
// }
// duplicate(10)
// let x =[]
// let y = []
// function luachHakefel(int){
//     for(i =1 ; i <= int ; i++){
//          x.push (i)
//         console.log(x);
        
//         for (j =1; j <= int ; j++){
//              y.push(j*i)
            
//             console.log(y);
//             y = []
            
//         }
//         console.log(x[i]);
        
//     }
// }
// luachHakefel(5)

//q6
// function backNum(int){
//    let str = int.toString()
//    let newStr = ''
//     for(let i = str.length-1; i >= 0; i--){
        
//         newStr += str[i]
//     }
    
//     console.log(newStr);
    
// }
// backNum(123)






