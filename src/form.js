import './style.css'

function addForm() {
    const main = document.querySelector('.main')
    
    const form = document.createElement('form')
    form.setAttribute('id', 'form')

    const close = document.createElement('span')
    close.setAttribute('id', 'close')
    close.textContent = 'X'

    const formDiv = document.createElement('div')
    formDiv.classList.add('formDiv')
    
    const titleForm = document.createElement('h2')
    titleForm.textContent = 'New Task'
    
    const taskTitleDiv = document.createElement('div')
    taskTitleDiv.classList.add('taskTitle')

    const taskTitleLabel= document.createElement('label')
    taskTitleLabel.htmlFor = 'title'
    taskTitleLabel.textContent = 'TITLE: '

    const taskTitleInput = document.createElement("input")
    taskTitleInput.setAttribute("type", "text");
    taskTitleInput.setAttribute("name", "title");
    taskTitleInput.setAttribute("id", "title");
    


    const descriptionDiv = document.createElement('div')
    descriptionDiv.classList.add('description')

    const descriptionLabel = document.createElement('label')
    descriptionLabel.htmlFor = 'description'
    descriptionLabel.textContent = 'DESCRIPTION: '

    const descriptionInput = document.createElement("input")
    descriptionInput.setAttribute("type", "text");
    descriptionInput.setAttribute("name", "description");
    descriptionInput.setAttribute("id", "description");
    


    const dueDateDiv = document.createElement('div')
    dueDateDiv.classList.add('date')

    const dueDateLabel = document.createElement('label')
    dueDateLabel.htmlFor = 'date'
    dueDateLabel.textContent = 'DUE DATE: '
   
    const dueDateInput = document.createElement("input")
    dueDateInput.setAttribute("type", "date");
    dueDateInput.setAttribute("name", "date");
    dueDateInput.setAttribute("id", "date");
 
    
    const selectPriorityDiv = document.createElement('div')
    selectPriorityDiv.classList.add('priority')
    
    const selectPriorityLabel = document.createElement('label')
    selectPriorityLabel.htmlFor = 'priority'
    selectPriorityLabel.textContent = 'PRIORITY: '

    const selectPriority = document.createElement("select")
    const option1 = document.createElement('option')
    option1.textContent = 'Low'

    const option2 = document.createElement('option')
    option2.textContent = 'Medium'

    const option3 = document.createElement('option')
    option3.textContent = 'High'
    
    selectPriority.appendChild(option1)
    selectPriority.appendChild(option2)
    selectPriority.appendChild(option3)

    selectPriorityDiv.appendChild(selectPriorityLabel)
    selectPriorityDiv.appendChild(selectPriority)

    dueDateDiv.appendChild(dueDateLabel)
    dueDateDiv.appendChild(dueDateInput)

    descriptionDiv.appendChild(descriptionLabel)
    descriptionDiv.appendChild(descriptionInput)

    taskTitleDiv.appendChild(taskTitleLabel)
    taskTitleDiv.appendChild(taskTitleInput)

    formDiv.appendChild(titleForm)
    formDiv.appendChild(taskTitleDiv)
    formDiv.appendChild(descriptionDiv)
    formDiv.appendChild(dueDateDiv)
    formDiv.appendChild(selectPriorityDiv)

    form.appendChild(close)
    form.appendChild(formDiv)
    main.appendChild(form)

}

export default function addFormButton() {
    const addTask = document.querySelector('.add-task')
    addTask.addEventListener('click', function(e) {
        addForm(); 
    })
}