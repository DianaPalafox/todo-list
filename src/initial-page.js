

export default function initialPage() {
    const content = document.querySelector('#content')
    const container = document.createElement('div')
    container.classList.add('container')

    const header = document.createElement('div')
    header.classList.add('header')

    const logo = document.createElement('div')
    logo.classList.add('logo')

    const sidebar = document.createElement('div')
    sidebar.classList.add('sidebar')

    const list = document.createElement('div')
    list.classList.add('list')

    const inbox = document.createElement('div')
    inbox.classList.add('items-list')

    const inboxBtn = document.createElement('button')
    inboxBtn.textContent = "Inbox"

    const today = document.createElement('div')
    today.classList.add('items-list')

    const todayBtn = document.createElement('button')
    todayBtn.textContent = 'Today'

    const week = document.createElement('div')
    week.classList.add('items-list')

    const weekBtn = document.createElement('button')
    weekBtn.textContent = 'This week'

    const projects = document.createElement('div')
    projects.classList.add('items-list')

    const projectsBtn = document.createElement('h2')
    projectsBtn.textContent = 'Projects'

    const addProject = document.createElement('button')
    addProject.textContent = 'Create new project'

    const body = document.createElement('div')
    body.classList.add('body')

    inbox.appendChild(inboxBtn)
    list.appendChild(inbox)
    
    today.appendChild(todayBtn)
    list.appendChild(today)
    
    week.appendChild(weekBtn)
    list.appendChild(week)

    projects.appendChild(projectsBtn)
    projects.appendChild(addProject)
    list.appendChild(projects)
    
    sidebar.appendChild(list)

    header.appendChild(logo)

    container.appendChild(sidebar)
    container.appendChild(header)
    container.appendChild(body)

    content.appendChild(container)



}