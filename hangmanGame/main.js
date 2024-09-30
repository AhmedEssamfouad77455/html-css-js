const letters = "abcdefghijklmnopqrstuvwxyz"
const ArrayLetters = [... letters];

console.log(ArrayLetters);
let ContainerLetters =  document.querySelector(".letters");
console.log(ContainerLetters);  
ArrayLetters.forEach((letter)=>{
    
    return ContainerLetters.innerHTML += `
    <span class="letters-box">${letter.toLocaleUpperCase()}</span>
    
    `
})
// Start category 

const words = {
    programming: [ "PHP" , "HTML" , "CSS" , "JS" , "React" , "Bootstrap" , "Tailwaind"  ],
    movies: ['Avatar', 'Inception', 'Parasite', 'The Dark Knight', 'Joker'],
    people: ["ahmed" , "Essam" , "Osama",  "Adel" , "tamer" , "Maged"], 
    country : ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands"],

}
let keyAll = Object.keys(words);
console.log(keyAll);
let randomWordkey = Math.floor( Math.random() * keyAll.length);
console.log(randomWordkey);
// name category
let nameWord = keyAll[randomWordkey];

document.querySelector(".category span").innerHTML = nameWord
console.log(nameWord);

// value category
let valueWord = words[nameWord];
console.log(valueWord )

let randomvalue = Math.floor(Math.random() *  valueWord.length);
console.log(randomvalue );
let valuename = valueWord[randomvalue];

console.log(typeof(valuename))
let arrayvaluename = Array.from(valuename.toLowerCase());
console.log(arrayvaluename)
let guessLetter = document.querySelector(".letters-guess");

console.log(guessLetter);

// let arrayvaluenamesmall = Array.from(valueWord.toLowerCase())

// console.log(arrayvaluenamesmall)
arrayvaluename.forEach((e)=>{
    
    if(e == " "){
        
        return guessLetter.innerHTML += `
        <span class="guess-box">-</span>
        
        `
    }else{
        
        return guessLetter.innerHTML += `
        <span class="guess-box">_</span>
        
        `
        }
    })
    let worng = 0;

    let guessspan = document.querySelectorAll(".letters-guess span");
    console.log(guessLetter)
console.log(guessspan)
document.addEventListener("click" , (e)=>{
    let states = false;
    if(e.target.className == "letters-box"){
        e.target.classList.add("clicked")
        let letter = e.target.innerHTML.toLowerCase();
        arrayvaluename.forEach((letterArray  , idx)=>{
            if(letterArray == letter){
                states = true;
                console.log( `this is ${letterArray} , ${idx} `)
                guessspan.forEach((span , spanindex)=>{
                    if(spanindex == idx){
                        span.innerHTML = letter
                    }
                })
            }

        });
        console.log(states)
        if(states !== true){
            worng++;
            document.querySelector(".hangman-draw").classList.add(`wrong-${worng}`)
            if(worng == 10){
                document.querySelector(".game-over").style.display= "flex"
            }
        }
        

    }
})
function closeClicked(){
    document.querySelector(".game-over").style.display= "none"
    window.location.reload()
}