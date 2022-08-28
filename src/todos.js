import './style.css'
import {removeForm} from './events'


let myTodos = []

class Todo {
    constructor(title, description, date, priority) {
        this.title = title
        this.description = description 
        this.date = date 
        this.priority = priority
    }
}

function addTodos() {
    document.addEventListener('click', function(e) {
        if(e.target.id === 'submit') {
            getInfo(); 
            removeForm();  
            deleteTodos(); 
            displayTodos();  
        }
    });          
}

function getInfo() {
    let title = document.querySelector('#title').value
    if (title === '') {
        alert('Title must be filled out');
    }
    let description = document.querySelector('#description').value
    let date = document.querySelector('#date').value 
    let select = document.querySelector('#select')
    let priority = select.options[select.selectedIndex].value;

    let newTodo = new Todo(title, description, date, priority)
    myTodos.push(newTodo)
    console.log(myTodos)
    
}

function displayTodos() {
    const content = document.querySelector('.content')

    myTodos.forEach(function(todo, i) {
        const todosContainer = document.createElement('div')
        todosContainer.setAttribute('data-index', `${i}`)
        todosContainer.classList.add('todos-container')
        
        const container1 = document.createElement('div')
        container1.classList.add('container1')

        const checkboxContainer = document.createElement('div')
        checkboxContainer.classList.add('checkbox-container')

        const checkboxLabel = document.createElement('label')
        checkboxLabel.htmlFor = 'checkbox'

        const checkboxInput =  document.createElement('input')
        checkboxInput.setAttribute('type', 'checkbox')
        checkboxInput.classList.add('checkmark')

        const title = document.createElement('div')
        title.setAttribute('id', 'title-todo')
        title.textContent = `${todo.title}`

        const container2 = document.createElement('div')
        container2.classList.add('container2')

        const date = document.createElement('div')
        date.setAttribute('id', 'date-todo')
        date.textContent = `${todo.date}`

        const iconSvg =  document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        iconSvg.classList.add('iconSvg2')
        iconSvg.setAttribute('id', 'edit')
        const iconPath = document.createElementNS('http://www.w3.org/2000/svg','path');

        iconSvg.setAttribute('viewBox', '0 0 24 24');
        iconSvg.setAttribute('fill', '#0284c7');
        iconPath.setAttribute('d', 'M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z');
        iconSvg.appendChild(iconPath);

        const iconSvg2 =  document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        iconSvg2.classList.add('iconSvg2')
        iconSvg2.setAttribute('id', 'expanse')
        const iconPath2 = document.createElementNS('http://www.w3.org/2000/svg','path');

        iconSvg2.setAttribute('viewBox', '0 0 24 24');
        iconSvg2.setAttribute('fill', '#0284c7');
        iconPath2.setAttribute('d', 'M12,17L7,12H10V8H14V12H17L12,17M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z');
        iconSvg2.appendChild(iconPath2);

        const iconSvg3 =  document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        iconSvg3.classList.add('iconSvg2')
        iconSvg3.setAttribute('id', 'priority-flag')
        const iconPath3 = document.createElementNS('http://www.w3.org/2000/svg','path');

        iconSvg3.setAttribute('viewBox', '0 0 24 24');
        iconPath3.setAttribute('d', 'M6,3A1,1 0 0,1 7,4V4.88C8.06,4.44 9.5,4 11,4C14,4 14,6 16,6C19,6 20,4 20,4V12C20,12 19,14 16,14C13,14 13,12 11,12C8,12 7,14 7,14V21H5V4A1,1 0 0,1 6,3Z');
        iconSvg3.appendChild(iconPath3);

        const iconSvg4 =  document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        iconSvg4.classList.add('iconSvg2')
        iconSvg4.setAttribute('id', 'delete')
        const iconPath4 = document.createElementNS('http://www.w3.org/2000/svg','path');

        iconSvg4.setAttribute('viewBox', '0 0 24 24');
        iconSvg4.setAttribute('fill', '#0284c7');
        iconPath4.setAttribute('d', 'M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z');
        iconSvg4.appendChild(iconPath4);
        
        checkboxContainer.appendChild(checkboxLabel)
        checkboxContainer.appendChild(checkboxInput)

        container1.appendChild(checkboxContainer)
        container1.appendChild(title)
        container2.appendChild(date)
        container2.appendChild(iconSvg)
        container2.appendChild(iconSvg2)
        container2.appendChild(iconSvg3)
        container2.appendChild(iconSvg4)

        todosContainer.appendChild(container1)
        todosContainer.appendChild(container2)

        content.appendChild(todosContainer)

        function removeTodo() {
            iconSvg4.addEventListener('click', function() {
                myTodos.splice(`${i}`, 1);
                content.removeChild(todosContainer)
            })
        }
        removeTodo(); 

        function strikeTitle() {
            checkboxInput.addEventListener('click', function() {
                if(checkboxInput.checked){
                    title.style.setProperty('text-decoration', 'line-through');
                }
                else {
                    title.style.textDecoration = 'none'
                }
            }) 
        }
        strikeTitle()

        function flagPriority() {
            if(`${todo.priority}` === 'Low') {
                iconSvg3.setAttribute('fill', '#16a34a');
            }
            if(`${todo.priority}` === 'Medium') {
                iconSvg3.setAttribute('fill', '#fef08a');
            }
            if(`${todo.priority}` === 'High') {
                iconSvg3.setAttribute('fill', '#e11d48');
            }           
        }
        flagPriority();

        
    }) 
}



function deleteTodos() {
    const content = document.querySelector('.content')
    if(document.body.contains(document.querySelector('.todos-container'))) {
        while(content.firstChild) {
            content.removeChild(content.lastChild)
        }
    }
}

export {addTodos}