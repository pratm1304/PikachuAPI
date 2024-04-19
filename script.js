// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error(error));


async function fetchData() {
    const inputName = document.getElementById('inputValue').value.toLowerCase();
    let pokiImg = document.getElementById('pokiImg');

    try {
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${inputName}`)
        if (!response.ok) {
            throw new Error("Could not fetch this Pokemon");
        }
        
        let data = await response.json();
        let imgName = await data.sprites.front_default;
        pokiImg.src = await imgName;
        pokiImg.style.display = "block";
        let name = data.name;
        let type = data.types[0].type.name;
        let weight = data.weight;
        
        let nameTag = document.querySelectorAll('h5')[0];
        let typeName = document.querySelectorAll('h5')[1];
        let weightTag = document.querySelectorAll('h5')[2];
        nameTag.textContent = `Name → ${name}`;
        typeName.textContent = `Type → ${type}`;
        weightTag.textContent = `Weight → ${weight}`;
        nameTag.style.display = "block";
        typeName.style.display = "block"
        weightTag.style.display = "block"
        document.querySelector('.box').style.display = "block";
        console.log(data);
    }
    catch (error) {
        console.error('Fetch error:', error);
       
    }
}
let dark = false;
function changeMode(){
    dark = !dark;
    if(dark){
        document.querySelector('body').style.backgroundImage = "url('Bg.jpeg')";
    document.querySelector('body').style.color = "black";
    document.querySelectorAll('h5')[0].style.color = "black";
    document.querySelectorAll('h5')[1].style.color = "black";
    document.querySelectorAll('h5')[2].style.color = "black";
    document.querySelector('.box').style.backgroundColor = "hsla(55, 62%, 70%, 0.193)";
    document.querySelector('.box').style.border = "1px solid hsl(50, 68%, 64%)";
    }
    else {
        document.querySelector('body').style.backgroundImage = "url('darkBg.jpeg')";
    document.querySelector('body').style.color = "aliceblue";
    document.querySelectorAll('h5')[0].style.color = "aliceblue";
    document.querySelectorAll('h5')[1].style.color = "aliceblue";
    document.querySelectorAll('h5')[2].style.color = "aliceblue";
    document.querySelector('.box').style.backgroundColor = "hsla(0, 0%, 0%, 0.4)";
    document.querySelector('.box').style.border = "1px solid aliceblue";
    }
    
    
}



