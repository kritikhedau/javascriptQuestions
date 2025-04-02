// function printTriangle(rows){
//   let count = 1
//   for(let i = 1; i <= rows; i++){
//     let row = ""
//     for(let j = 1; j <= i; j++){
//       row += count + " "
//       count++
//     }
//     console.log(row);
//   }
// }

// // console.log(printTriangle(5));
// printTriangle(5)



// function printTriangle(rows,currentRows=1,number=1){
//   if(currentRows > rows){
//     return;
//   }
//   let row = ""
//   for(let i = 1; i <= currentRows; i++){
//     row += number + " "
//     number++
//   }
//   console.log(row);
//   printTriangle(rows,currentRows + 1,number)
// }

// printTriangle(5)





function printTriangle(rows){
  let count = 1
  for (let i = 1; i <= rows; i++){
      let row = ""
      for(let j = 1 ; j <= i ; j++){
          row += count + ' '
          count++
      }
      console.log(row)
  }
}



printTriangle(5)

