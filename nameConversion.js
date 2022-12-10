document.addEventListener("input", start);
// let btn = document.getElementById("convert-btn")
function start(){
let form = document.querySelector("#text").value
let btn = document.getElementById("convert-btn")
console.log(btn);
console.log(form);

btn.addEventListener("click",() => {
    document.getElementById("camel-case").innerText = camelCase(form);
    document.getElementById("pascal-case").innerText = pascalCase(form);
    document.getElementById("snake-case").innerText = snakeCase(form);
    document.getElementById("screaming-snake-case").innerText = screamingSnakeCase(form);
    document.getElementById("screaming-kebab-case").innerText = screamingKebabCase(form);
    document.getElementById("kebab-case").innerText = kebabCase(form);

})
}


function camelCase(str) {
    // return str.split(" ").forEach((word) => {
    //     return word.charAt(0).toUpperCase()+word.substring(1).toLowerCase();        
    //   }).join("_");
    let arr = str.split(" ");
    let str1 = "";

    str1 =  arr[0].charAt(0)+arr[0].substring(1).toLowerCase()+"";
    for(let i=1;i<=arr.length-1;i++){
       str1 = str1 + arr[i].charAt(0).toUpperCase()+arr[i].substring(1).toLowerCase() +"";
    }
    return (str1);
  }
  function pascalCase(str) {
    return str.split(" ").map((word) => {
        return word.charAt(0).toUpperCase()+word.substring(1).toLowerCase();        
      }).join("_");
  }
  function snakeCase(str) {
    return str.split(" ").map((character) => {
        if (character == character.toLowerCase()) {
          return "" + character.toUpperCase();
        } else {
          return character;
        }
      }).join("_");
  }
function screamingSnakeCase(str){
    const strArr = str.split(" ");
    const snakeArr = strArr.reduce((acc, val) => {
      return acc.concat(val.toLowerCase());
    }, []);
    return snakeArr.join("_");
  }
  function kebabCase(str) {
    return str
      .replace(/([a-z])([A-Z])/g, "$1-$2")
      .replace(/[\s_]+/g, "-")
      .toLowerCase();
  }
  function screamingKebabCase(str) {
    return str
      .split(" ")
      .map((character) => {
        if (character == character.toLowerCase()) {
          return "" + character.toUpperCase();
        } else {
          return character;
        }
      })
      .join("-");
  }