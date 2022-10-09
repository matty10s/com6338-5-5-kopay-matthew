// Matthew Kopay COMM6338 
// Assignment 5 Todo App

var form = document.getElementById("add-todo")
var listItems = document.getElementById("todo-list")
var buttons


form.onsubmit = function(e){
    e.preventDefault()
    var textValue = document.querySelector("input").value
    if(textValue == "" || textValue.trim().length === 0){
        form.reset()
        return
    }
    addLi(textValue)
    form.reset()
}


//function add to lists
function addLi(item){
    var li = document.createElement("li")
    var btn = document.createElement("button")
    li.appendChild(btn)
    btn.innerHTML = item;
    listItems.appendChild(li)
    buttons = listItems.querySelectorAll("button")
    console.log(buttons)
}
    
//strikethrough if clicked, remove if strikethrough
listItems.addEventListener("click", function(e){
    if (e.target.style.textDecoration != "line-through"){
        e.target.style.textDecoration = "line-through"
    } else if (e.target.style.textDecoration = "line-through"){
        e.target.parentElement.remove()
    }
})
