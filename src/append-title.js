import './style.css'


function appendTitle(titleVar) {
    const content = document.querySelector('#content')
    const container = document.querySelector('.container')
    const body = document.querySelector('.body')

    const containerTitle = document.createElement('div')
    containerTitle.classList.add('container-title')
    const title = document.createElement('div')
    title.classList.add('title')
    title.textContent = titleVar
    
    containerTitle.appendChild(title)
    body.appendChild(containerTitle)
    container.appendChild(body)
    content.appendChild(container)

}

function deleteTitle() {
    const containerTitle = document.querySelector('.container-title')
    if(containerTitle != null) {
        const body = document.querySelector('.body')
        body.removeChild(containerTitle)
    }
}

export default function changeTitle() {
    document.addEventListener('click', function(e) {
        if(e.target.id === 'inbox') {
            deleteTitle(); 
            appendTitle('Inbox');
        }
        if(e.target.id === 'today') {
            deleteTitle(); 
            appendTitle('Today');
        }
        if(e.target.id === 'week') {
            deleteTitle(); 
            appendTitle('This week');
        }
        if(e.target.id === 'project') {
            deleteTitle(); 
            appendTitle('Projects');  
        }
    }); 

}