import './style.css'
import {addForm, projectForm, appendTitle} from './initial-page';


function addFormButton() {
    const addTask = document.querySelector('.add-task')
    addTask.addEventListener('click', () => {
        if(document.querySelector('#form') === null)
        addForm(); 
    })
}

function projectButton() {
    const project = document.querySelector('#project')
    project.addEventListener('click', () => {
        if(document.querySelector('#form-project') === null)
        projectForm(); 

    });
}

function sidebarButton() {
    const sidebarBtn = document.querySelector('.sidebarBtn')
    sidebarBtn.addEventListener('click', () => {
        if (document.querySelector('.sidebar').style.display === 'block') {
            document.querySelector('.sidebar').style.display = 'none'
        }
        else if (document.querySelector('.sidebar').style.display === 'none') {
            document.querySelector('.sidebar').style.display = 'block'
        }
    });
}

function deleteTitle() {
    const title = document.querySelector('.title')
    if(title != null) {
        const containerTitle = document.querySelector('.container-title')
        containerTitle.removeChild(title)
    }
}

function changeTitle() {
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
       /* if(e.target.dataset.index === '0') {
            const dataIndex = e.target.dataset.index 
            console.log(dataIndex)
            deleteTitle(); 
            const name = document.querySelector('[data-index="0"]');
            const text = name.textContent
            appendTitle(text);
        }
        if(e.target.dataset.index === '1') {
            const dataIndex = e.target.dataset.index 
            console.log(dataIndex)
            deleteTitle(); 
            const name = document.querySelector('[data-index="1"]');
            const text = name.textContent
            appendTitle(text);
        }*/
    }); 

}

function closeSpan() {
    document.addEventListener('click', function(e) {
        if(e.target.id === 'close') {
            const main = document.querySelector('.main')
            const form = document.querySelector('#form')
            main.removeChild(form)
        }
    });
}

function closeButton() {
    document.addEventListener('click', function(e) {
        if(e.target.id === 'cancel') {
            removeProjectForm()
        }
    });
}

function removeProjectForm() {
    const projectDiv = document.querySelector('.projects')
    const formProject = document.querySelector('#form-project')
    projectDiv.removeChild(formProject) 
}

/*function addButton() {
    document.addEventListener('click', function(e) {
        if(e.target.id === 'add') {
            checkForProjectName(); 
        }
    });    
}*/

/*function checkForProjectName() {
    let name = document.querySelector('#name').value; 
    if(name === '') {
        alert('The project name must be filled out')
    }
    else {
        addProject()
        removeProjectForm() 
    }
}

function deleteProject() {
    document.addEventListener('click', function(e) {
        if(e.target.id === 'delete') {
            const projectDiv = document.querySelector('.projects')
            const projectNameDiv = document.querySelector('#project-name-div')
            projectDiv.removeChild(projectNameDiv)
        }

    });
}*/


export {projectButton, addFormButton, sidebarButton, changeTitle, closeSpan, closeButton, removeProjectForm, deleteTitle /*addButton, deleteProject*/}