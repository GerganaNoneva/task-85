import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const ul = document.querySelector("ul");

  let url=`https://pokeapi.co/api/v2/pokemon?limit=10`;

  
  function checkStatus(respone) {
    if(respone.status >=200 && respone.status<300) {
      return Promise.resolve(respone);
    } else {
      return Promise.reject(new Error(respone.statusText)
      );
    }
  }

  function toJSON(respone) {
    return respone.json();
  }


  fetch(url)
    .then(checkStatus)
    .then(toJSON)
    .then(data=> { 
        console.log(data.results);
        data.results.forEach(result=>{
          let newLi=document.createElement('li');
          newLi.innerHTML=result.name;
          ul.appendChild(newLi);
        })
    })


});

/*Import the project from https://gitlab.com/boomdotdev/tasks/task-85
Checkout the dev branch
Learn more about the Pokemon API https://pokeapi.co/docs/v2#pokemon
When making requests the endpoint should be https://pokeapi.co/api/v2/pokemon and you should only get the first 10 Pokemon
Implement an App that displays the names of the Pokemon in a browser
When implemented merge the dev branch into master before validating
Requirements
The project should run via npm run start
You should use the fetch API
You will have to create list items for each Pokemon with createElement and by using innerText you have to add the current Pokemon's name as text to a list item
You should only display each Pokemon's name and nothing else*/