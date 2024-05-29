// Select the p element
const pElement = document.getElementById('textElement');
console.log(pElement);

// pElement.classList.add("highlight","italic","bold");

function addClass(){
    pElement.classList.add("highlight","italic","bold");
}
function removeClass(){
    pElement.classList.remove("highlight","italic","bold")
}

function toggleClass(){
    pElement.classList.toggle("italic")
}
function checkContains(){
    alert(
        pElement.classList.contains("highlight") ? "Contains Highlights" : "Doesnot contain highlight"
    )
}
function replaceClass(){
    if(pElement.classList.contains("highlight")){
        pElement.classList.replace("highlight","red-text")
    }
}

function getValue(){
    console.log(pElement.classList.value);
}

function listItem() {
    alert("The first clas is:" + pElement.classList.item(1));
  }