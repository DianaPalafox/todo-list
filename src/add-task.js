import './style.css'

export default function addTaskButton() {
    const content = document.querySelector('#content')
    const container = document.querySelector('.container')
    const body = document.querySelector('.body')
    const main = document.querySelector('.main')

    const addTask = document.createElement('button')
    addTask.classList.add('add-task')
    addTask.textContent = '+ Add Task'

    main.appendChild(addTask)
    body.appendChild(main)
    container.appendChild(body)
    content.appendChild(container)
}