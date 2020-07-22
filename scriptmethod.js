var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var item = document.getElementById("li");

function inputLength(){
    return input.value.length;
}

function listLength(){
    return item.length;
}

function createListElement() {
    var li = document.createElement("li"); //Creates  element li
    li.appendChild(document.createTextNode(input.value)); //Creates text from input field
    ul.appendChild(li); //Adds text to ul
    input.value = ""; //Resets  text field


//Start Strikeout
function strikeout() {
    li.classList.toggle("done");
}

li.addEventListener("click", strikeout);
//End Strikeout


// Add Delete Button
var deleteButton = document.createElement("button");
deleteButton.appendChild(document.createTextNode("X"));
li.appendChild(deleteButton);
deleteButton.addEventListener("click", deleteListItem);

//Add Class Delete
function deleteListItem(){
    li.classList.add("delete")
}
//end add class delete
}

function addListAfterClick(){
    if (inputLength() > 0){
        //ensures empty field is not put into a list
        createListElement();
    }
}

function addListAfterKeypress(event){
    if(inputLength() > 0 && event.which ==13){
        //looks to see if enter/return is hit
		//13 is enter's keycode
		createListElement();
    }
    
}

enterButton.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);



