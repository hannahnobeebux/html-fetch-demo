//grab access to body element
const body = document.querySelector("body");



//only use async and await with Promise 
async function fetchPokemon() {
    //saving the api response in a const - need to wait to fetch from api before using "response"
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    //convert to json
    const data = await response.json();
    // console.log(data.abilities[1].ability.name)
    const p = document.createElement("p");
    p.innerHTML = data.name;
    body.appendChild(p);
    
}

fetchPokemon()



//Callback example for success/error handling 

// function funcName(successCallback, errorCallback){
//     let num = 1+1;
//     if (num === 2){
//         successCallback("Success")
//     } else  {
//         errorCallback("Failed")
//     }
// }

//funcName takes 2 args, success callback and error callback, both will onsole.log the string 

// funcName (
//     (str) => console.log(str),
//     (str) => console.log(str)
// )

//Promise version of funcName 

// function funcName(){
//     let num = 1+1;
    
    //Using arrow syntax for an anonymous function
    //Replacing successCallback and errorCallback with resolve and reject
    //Automatically returns the callback 
    //Return a debt that we will fulfill 
    //Resolve and Reject are the default words for the two cases but they're DEVELOPER DEFINED 
    
//     return new Promise((resolve, reject) => {
//         if (num ===2){
//             resolve("Success")
//         } else  {
//             reject("Failed")
//         }
//     }) 
// }

//The .then is used if valid, the .catch will return an error 

// funcName()
//     .then((response) => console.log(response))
//     .catch((error) => console.log(error))


