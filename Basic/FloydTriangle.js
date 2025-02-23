
function printTriangle(rows){
  let count = 1
  for(let i = 1; i <= rows; i++){
    let row = ""
    for(let j = 1; j <= i; j++){
      row += count + " "
      count++
    }
    console.log(row);
  }
}

// console.log(printTriangle(5));
printTriangle(5)
