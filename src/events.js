import './style.css'
import {addForm, projectForm, appendTitle} from './initial-page';


function addFormButton() {
    const addTask = document.querySelector('.add-task')
    addTask.addEventListener('click', () => {
        if(document.querySelector('#form') === null) {
            addForm(); 
        }       
    })
}

function projectButton() {
    const project = document.querySelector('#project')
    project.addEventListener('click', () => {
        if(document.querySelector('#form-project') === null) {
            projectForm(); 
        }      
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
    }); 

}

function closeSpan() {
    document.addEventListener('click', function(e) {
        if(e.target.id === 'close') {
            removeForm(); 
        }
    });
}

function removeForm() {
    const main = document.querySelector('.main')
    const form = document.querySelector('#form')
    main.removeChild(form)
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



export {projectButton, addFormButton, sidebarButton, changeTitle, closeSpan, closeButton, removeProjectForm, deleteTitle, removeForm }