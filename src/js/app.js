import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const ul = document.querySelector("ul");

  let url=`https://pokeapi.co/api/v2/pokemon`;

  
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
      for(let count=0; count<10; count++) {
        console.log(count)
        let newLi=document.createElement('li'+count);
        newLi.innerHTML=data.results[count].name+'</br>';
        ul.appendChild(newLi);
      }
    })



  /*

  fetch('')
    .then((res) => {console.log(res);res.json()})
    .then((data) => {
        data = data.filter(entry => entry.created > someValue) // Created after X
                   .slice(0, 10);                            // Limit to 1000
        // ...use data...
        console.log(data)
        for(let count=1; count<=10;count++) {
        let newli=document.createElement('li'+count);
        console.log('kur');
        newli.innerHTML="kur";
        ul.appendChild(newli);
        }
    })
    .catch(error => {        // <=== Don't forget to handle errors
        // Handle error...
    });*/
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