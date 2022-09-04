import './style.css'
import { projectForm, addForm, appendTitle } from './initial-page';
import { thisWeek, today, inbox } from './dates';

export const domEvents = () => {
    appendTitle('Inbox')

    const addFormButton = (() => {
        const addTask = document.querySelector('.add-task')
        addTask.addEventListener('click', () => {
            if(document.querySelector('#form') === null) {
                console.log('works')
                addForm();  
                deleteSelectProject()   
                addSelectProject()    
            }         
        })
    })();

    const addSelectProject = () => {
        const projectName = document.querySelectorAll('#project-name-btn')
        console.log(projectName)
        projectName.forEach(name => {
            const datePriority = document.querySelector('.date-priority')
            const selectProjectDiv = document.querySelector('.select-project')
            const selectProject = document.querySelector('#select-project')
            
            const optionProject = document.createElement('option')
            optionProject.classList.add('option-project')
            optionProject.textContent = name.textContent
    
            selectProject.appendChild(optionProject)
            selectProjectDiv.appendChild(selectProject)
            datePriority.appendChild(selectProjectDiv)
    
        });          
    };    
    
    function deleteSelectProject() {
        const selectProjectDiv = document.querySelector('#select-project')
        if(document.body.contains(document.querySelector('.option-project'))) {
            while(selectProjectDiv.firstChild) {
                selectProjectDiv.removeChild(selectProjectDiv.lastChild)
            }
        }
    }
    
    const projectButton = (() => {
        const project = document.querySelector('#project')
        project.addEventListener('click', () => {
            if(document.querySelector('#form-project') === null) {
               projectForm(); 
            }
        });
    })();
    
    const sidebarButton = (() => {
        const sidebarBtn = document.querySelector('.sidebarBtn')
        sidebarBtn.addEventListener('click', () => {
            if (document.querySelector('.sidebar').style.display === 'block') {
                document.querySelector('.sidebar').style.display = 'none'
            }
            else if (document.querySelector('.sidebar').style.display === 'none') {
                document.querySelector('.sidebar').style.display = 'block'
            }
        });
    })();
    
    
    const changeTitle = (() => {
        document.addEventListener('click', function(e) {
            if(e.target.id === 'inbox') {
                document.querySelector('.add-task').style.display = 'block'
                deleteTitle(); 
                appendTitle('Inbox');
                inbox(); 
            }
            if(e.target.id === 'today') {
                document.querySelector('.add-task').style.display = 'none'
                deleteTitle(); 
                appendTitle('Today');
                today(); 
            }
            if(e.target.id === 'week') {
                document.querySelector('.add-task').style.display = 'none'
                deleteTitle(); 
                appendTitle('This week');
                thisWeek(); 
            }
        }); 
    
    })();
    
    const closeSpan = (() => {
        document.addEventListener('click', function(e) {
            if(e.target.id === 'close') {
                removeForm()
            }
        });
    })();
    
    const closeButton = (() => {
        document.addEventListener('click', function(e) {
            if(e.target.id === 'cancel') {
                removeProjectForm()
            }
        });
    })();
    
}

const deleteTitle = () => {
    const title = document.querySelector('.title')
    if(title != null) {
        const containerTitle = document.querySelector('.container-title')
        containerTitle.removeChild(title)
    }
}

const removeProjectForm = () => {
    if(document.querySelector('#form-project') !== null) {
        const projectDiv = document.querySelector('.projects')
        const formProject = document.querySelector('#form-project')
        projectDiv.removeChild(formProject) 
    }
};

const removeForm = () => {
    if(document.querySelector('#form') !== null) {
        const main = document.querySelector('.main')
        const form = document.querySelector('#form')
        main.removeChild(form)
    }   
};

export { removeProjectForm, deleteTitle, removeForm }
