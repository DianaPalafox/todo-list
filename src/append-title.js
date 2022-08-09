import './style.css'


function appendTitle(titleVar) {
    const containerTitle = document.querySelector('.container-title')
    const title = document.createElement('div')
    title.classList.add('title')
    title.textContent = titleVar
    
    containerTitle.appendChild(title)

}

export {appendTitle}

function deleteTitle() {
    const title = document.querySelector('.title')
    if(title != null) {
        const containerTitle = document.querySelector('.container-title')
        containerTitle.removeChild(title)
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
    }); 

}