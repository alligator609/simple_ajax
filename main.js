var pageCounter = 1;

var btn = document.getElementById("btn");
var animalContainer = document.getElementById("animal-info");
btn.addEventListener("click",function(){

    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET','https://learnwebcode.github.io/json-example/pets-data.json');
    ourRequest.onload =function() {
        if (ourRequest.status >= 200 && ourRequest.status < 400) {
            var ourData = JSON.parse(ourRequest.responseText);
            renderHtml(ourData);
          } else {
            console.log("We connected to the server, but it returned an error.");
          }
    };
    ourRequest.send();
    pageCounter++;

    if (pageCounter > 3){
        btn.classList.add("hide-me");
    }
});

Handlebars.registerHelper("calculateAge", function(birthYear) {
    var age = new Date().getFullYear() - birthYear;
  
    if (age > 0) {
      return age + " years old";
    } else {
      return "Less than a year old";
    }
  
  });

function renderHtml(data){

    var rawTempate = document.getElementById("petsTemplate").innerHTML;
    var compiledTemplate = Handlebars.compile(rawTempate);
    var ourGeneratedHTML = compiledTemplate(data);

    animalContainer.innerHTML = ourGeneratedHTML;
    
}




