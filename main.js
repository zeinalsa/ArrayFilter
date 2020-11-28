// Write your code here:
const justCoolStuff = (arr1, arr2) => {
  var templateArray = []
  templateArray = arr1.filter(function(word){
    if(arr1.includes(word) && arr2.includes(word)){
      return word
    }
  })
  return templateArray
}






// Feel free to uncomment the code below to test your function

const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];

const myStuff = [ 'rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway']; 

console.log(justCoolStuff(myStuff, coolStuff))
// Should print [ 'fruit-by-the-foot', 'skateboards', 'my room' ]

