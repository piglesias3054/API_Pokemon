/* window.onload = function () {


  fetch('assets/data/data.json')
    .then(res => res.json())
    .then(data => {
      let caja = document.getElementById("usuarios");

      data.sort((a, b) => a.first_name.localeCompare(b.first_name));

      let userPrev = "";
      let groupTit = "";

      data.forEach(function (user, index) {

        if(userPrev == "" || user.first_name.charAt(0).localeCompare(userPrev.charAt(0)) == 1){
          groupTit = `<h2>${user.first_name.charAt(0)}</h2>`;
        }else{
          groupTit = "";
        }

        let item = groupTit + `<div class='element'><li><span> User number: ${user.id}</span></li>
                      <li><span>${user.first_name} ${user.last_name}</span></li>
                      <li><span>${user.email}</span></li></div>`;
        caja.innerHTML += item;
      });

      


    });






} */

/*

window.onload = function () {



  fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0')
    .then(res => res.json())
    .then(res => {

      let caja = document.getElementById("pkmn");

      res.results.forEach(function (pokemon, index) {
        let item = `<div class='element'><li><h2>${pokemon.name}</h2></li>
                    <li>${pokemon.url}</li></div>`;
        caja.innerHTML += item;

        pedirpokemon(pokemon.url);

        function pedirpokemon(url) {
          fetch(url)
            .then(res => res.json())
            .then(res => {

              let caja = document.getElementById("abilities");

              let ability = `<li>${res.abilities.ability.name}</li>`;

              caja.innerHTML = ability;


            });
        }

      });


    })



}

*/

window.onload = function () {

  let random1 = Math.floor(Math.random() * 50) + 1;
  let random2 = Math.floor(Math.random() * 100) + 50;
  let random3 = Math.floor(Math.random() * 150) + 100;
  let random4 = Math.floor(Math.random() * 200) + 150;
  let random5 = Math.floor(Math.random() * 300) + 200;
  let random6 = Math.floor(Math.random() * 400) + 300;
  let random7 = Math.floor(Math.random() * 400) + 300;


  function generateRandom(numbers) {
    var numbers = [3, 4, 6, 7];
    let numberSelected = 0;
    for (let i = 0; i < numbers.length; i++) {

      numberSelected++;

    }
    return numberSelected;

  }

  console.log(generateRandom())


  fetch(`https://pokeapi.co/api/v2/pokemon/${random1}`)
    .then(res => res.json())
    .then(res => {

      let caja = document.getElementById("pkmn");
      let name = res.name
      let sprite = res.sprites.front_default



      let item = `<div class='element'><li class='name'>Name:<h4>${name}</h4></li>
                    <li><img src="${sprite}" alt=""></img></li></div>`;

      caja.innerHTML += item;



    });


  fetch(`https://pokeapi.co/api/v2/pokemon/${random2}`)
    .then(res => res.json())
    .then(res => {

      let caja = document.getElementById("pkmn");
      let name = res.name
      let sprite = res.sprites.front_default



      let item = `<div class='element'><li class='name'>Name:<h4>${name}</h4></li>
                    <li><img src="${sprite}" alt=""></img></li></div>`;

      caja.innerHTML += item;



    });

  fetch(`https://pokeapi.co/api/v2/pokemon/${random3}`)
    .then(res => res.json())
    .then(res => {

      let caja = document.getElementById("pkmn");
      let name = res.name
      let sprite = res.sprites.front_default



      let item = `<div class='element'><li class='name'>Name:<h4>${name}</h4></li>
                    <li><img src="${sprite}" alt=""></img></li></div>`;

      caja.innerHTML += item;



    });

  fetch(`https://pokeapi.co/api/v2/pokemon/${random4}`)
    .then(res => res.json())
    .then(res => {

      let caja = document.getElementById("pkmn");
      let name = res.name
      let sprite = res.sprites.front_default



      let item = `<div class='element'><li class='name'>Name:<h4>${name}</h4></li>
                    <li><img src="${sprite}" alt=""></img></li></div>`;

      caja.innerHTML += item;



    });

  fetch(`https://pokeapi.co/api/v2/pokemon/${random5}`)
    .then(res => res.json())
    .then(res => {

      let caja = document.getElementById("pkmn");
      let name = res.name
      let sprite = res.sprites.front_default



      let item = `<div class='element'><li class='name'>Name:<h4>${name}</h4></li>
                    <li><img src="${sprite}" alt=""></img></li></div>`;

      caja.innerHTML += item;



    });



  fetch(`https://pokeapi.co/api/v2/pokemon/${random6}`)
    .then(res => res.json())
    .then(res => {

      let caja = document.getElementById("pkmn");
      let name = res.name
      let sprite = res.sprites.front_default



      let item = `<div class='element'><li class='name'>Name:<h4>${name}</h4></li>
                    <li><img src="${sprite}" alt=""></img></li></div>`;

      caja.innerHTML += item;



    });

    fetch(`https://pokeapi.co/api/v2/pokemon/${random7}`)
    .then(res => res.json())
    .then(res => {

      let caja = document.getElementById("pkmn");
      let name = res.name
      let sprite = res.sprites.front_default



      let item = `<div class='element'><li class='name'>Name:<h4>${name}</h4></li>
                    <li><img src="${sprite}" alt=""></img></li></div>`;

      caja.innerHTML += item;



    });



}