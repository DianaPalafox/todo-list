import './style.css'

export default function initialPage() {
    const content = document.querySelector('#content')
    const container = document.createElement('div')
    container.classList.add('container')

    const header = document.createElement('div')
    header.classList.add('header')
    
    const appearDisappearSidebar = document.createElement('button')
    appearDisappearSidebar.classList.add('sidebarBtn')
    appearDisappearSidebar.textContent = '≡'

    const logo = document.createElement('div')
    logo.classList.add('logo')
    logo.textContent = "Let's do this!"

    const sidebar = document.createElement('div')
    sidebar.classList.add('sidebar')
    sidebar.style.display = 'block'

    const list = document.createElement('div')
    list.classList.add('list')

    const inbox = document.createElement('div')
    inbox.classList.add('items-list')

    const iconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    iconSvg.classList.add('iconSvg')
    const iconPath = document.createElementNS('http://www.w3.org/2000/svg','path');
    iconSvg.setAttribute('viewBox', '0 0 24 24');
    iconSvg.setAttribute('fill', '#0284c7');
    iconPath.setAttribute('d', 'M19,15H15A3,3 0 0,1 12,18A3,3 0 0,1 9,15H5V5H19M19,3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3Z');
    iconSvg.appendChild(iconPath);

    const inboxBtn = document.createElement('button')
    inboxBtn.textContent = "Inbox"
    inboxBtn.setAttribute('id', 'inbox')

    const today = document.createElement('div')
    today.classList.add('items-list')

    const iconSvg2 = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    iconSvg2.classList.add('iconSvg')
    const iconPath2 = document.createElementNS('http://www.w3.org/2000/svg','path');
    iconSvg2.setAttribute('viewBox', '0 0 24 24');
    iconSvg2.setAttribute('fill', '#0284c7');
    iconPath2.setAttribute('d', 'M19 3H18V1H16V3H8V1H6V3H5C3.9 3 3 3.89 3 5V19C3 20.11 3.9 21 5 21H19C20.11 21 21 20.11 21 19V5C21 3.89 20.11 3 19 3M19 19H5V9H19V19M19 7H5V5H19M7 11H12V16H7');
    iconSvg2.appendChild(iconPath2);

    const todayBtn = document.createElement('button')
    todayBtn.textContent = 'Today'
    todayBtn.setAttribute('id', 'today')

    const week = document.createElement('div')
    week.classList.add('items-list')

    const iconSvg3 = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    iconSvg3.classList.add('iconSvg')
    const iconPath3 = document.createElementNS('http://www.w3.org/2000/svg','path');
    iconSvg3.setAttribute('viewBox', '0 0 24 24');
    iconSvg3.setAttribute('fill', '#0284c7');
    iconPath3.setAttribute('d', 'M5 3H6V1H8V3H16V1H18V3H19C20.11 3 21 3.89 21 5V19C21 20.1 20.11 21 19 21H5C3.9 21 3 20.11 3 19V5C3 3.89 3.9 3 5 3M5 19H19V9H5V19M5 7H19V5H5V7M17 11V13H7V11H17');
    iconSvg3.appendChild(iconPath3);

    const weekBtn = document.createElement('button')
    weekBtn.textContent = 'This week'
    weekBtn.setAttribute('id', 'week')

    const projects = document.createElement('div')
    projects.classList.add('projects')

    const projectsBtn = document.createElement('h2')
    projectsBtn.textContent = 'Projects'

    const addProject = document.createElement('div')
    addProject.classList.add('add-project')

    const iconSvg4 = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    iconSvg4.classList.add('iconSvg')
    const iconPath4 = document.createElementNS('http://www.w3.org/2000/svg','path');
    iconSvg4.setAttribute('viewBox', '0 0 24 24');
    iconSvg4.setAttribute('fill', '#0284c7');
    iconPath4.setAttribute('d', 'M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M13,7H11V11H7V13H11V17H13V13H17V11H13V7Z');
    iconSvg4.appendChild(iconPath4);

    const addProjectButton = document.createElement('button')
    addProjectButton.classList.add('add-project-btn')
    addProjectButton.textContent = 'Create new project'
    addProjectButton.setAttribute('id', 'project')

    const body = document.createElement('div')
    body.classList.add('body')

    inbox.appendChild(iconSvg)
    inbox.appendChild(inboxBtn)
    
    list.appendChild(inbox)
    
    today.appendChild(iconSvg2)
    today.appendChild(todayBtn)
    list.appendChild(today)
    
    week.appendChild(iconSvg3)
    week.appendChild(weekBtn)
    list.appendChild(week)

    projects.appendChild(projectsBtn)

    addProject.appendChild(iconSvg4)
    addProject.appendChild(addProjectButton)
    projects.appendChild(addProject)
    list.appendChild(projects)
    
    sidebar.appendChild(list)
    body.appendChild(sidebar)
    header.appendChild(appearDisappearSidebar)
    header.appendChild(logo)

    container.appendChild(header)
    container.appendChild(body)

    content.appendChild(container)



}