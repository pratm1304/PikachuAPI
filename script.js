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
        let name = data.name;
        let type = data.types[0].type.name;
        let weight = data.weight;
        let imgName = data.sprites.front_default;
        pokiImg.src = imgName;
        pokiImg.style.display = "block";
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



