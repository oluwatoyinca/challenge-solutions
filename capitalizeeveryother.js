const capitalizeEveryOther = (input) => {
  let result = ''
  for(let i = 0; i<input.length; i++) {
    let letter = ((i === 0) || (i%2 ===0)) ? input[i].toUpperCase() : input[i].toLowerCase()
    result = `${result}${letter}`
  }
  console.log(result)
}

capitalizeEveryOther('alexandra')
