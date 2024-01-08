const todoForm = document.querySelector("#todo")
const inputTxt = document.querySelector("#todo-input")
const ul = document.querySelector("#todo-list") 

let list = []

function save(){
    localStorage.setItem("todolist", JSON.stringify(list))
}

function backspace(event){
    const li = event.target.parentElement
    list = list.filter((listid) => listid.id != li.id)
    li.remove()
    save()
}

function writeElements(element){
    const li = document.createElement("li")
    const button = document.createElement("button")

    button.innerText = "Done"
    button.classList.add("button")

    li.innerText = element.context
    li.id = element.id
    li.classList.add("list")

    li.appendChild(button)
    ul.appendChild(li)

    button.addEventListener("click", backspace)
}

function todolist(input){
    input.preventDefault()

    if(list.length < 10){
        const Obj = {
            context: inputTxt.value,
            id: list.length + 1
        }
        list.push(Obj)
        writeElements(Obj)
    } else {
        alert("You cannot add more than 10 todos")
    }
    inputTxt.value = ""
    save()
}

todoForm.addEventListener("submit", todolist)

const saved = localStorage.getItem("todolist")
if(saved != null){
    const obj = JSON.parse(saved)
    obj.forEach(writeElements)
    list = obj
}