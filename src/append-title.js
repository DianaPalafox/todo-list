import './style.css'


function appendTitle(titleVar) {
    const content = document.querySelector('#content')
    const container = document.querySelector('.container')
    const body = document.querySelector('.body')
    const main = document.querySelector('.main')

    const containerTitle = document.createElement('div')
    containerTitle.classList.add('container-title')
    const title = document.createElement('div')
    title.classList.add('title')
    title.textContent = titleVar
    
    containerTitle.appendChild(title)
    main.appendChild(containerTitle)
    body.appendChild(main)
    container.appendChild(body)
    content.appendChild(container)

}

export { appendTitle }

function deleteTitle() {
    const containerTitle = document.querySelector('.container-title')
    if(containerTitle != null) {
        const main = document.querySelector('.main')
        main.removeChild(containerTitle)
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