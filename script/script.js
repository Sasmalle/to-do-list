const inputtext = document.getElementById("inputtext");
const inputbtn = document.getElementById("inputbtn");
const listitems = document.getElementById("listitems");

function userInput() {
    inputbtn.addEventListener("click", createLi);
    document.addEventListener("keydown", function(event){
        if(event.key === "Enter"){
            createLi();
        }
    });
}

function createLi(){
    var inputuser = inputtext.value;
    if(inputuser.trim() !== "") {
        listitems.innerHTML += `<li class="task"> <input type="checkbox" name="" id=""> <p>${inputuser}</p></li>`;
        inputtext.value = "";
    }
}

userInput();
