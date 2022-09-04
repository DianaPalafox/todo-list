import './style.css'
import {removeProjectForm, deleteTitle} from "./events"
import {appendTitle} from "./initial-page"

export const projects = () => {
    let myProjects = []; 

    class Project {
        constructor(name) {
            this.name = name 
        }
    }

    function getName() {
        let name = document.querySelector('#name').value; 
        if(name === '') {
            alert('The project name must be filled out')
        }
        else {
            let newProject = new Project(name)
            myProjects.push(newProject)
        }   
    }

    const addButton = (() => {
        document.addEventListener('click', function(e) {
            if(e.target.id === 'add') {
                getName(); 
                deleteProject();
                addProject()
                removeProjectForm() 
            }
        });    
    })(); 


    const addProject = () => { 
        const projectContainer = document.querySelector('.projects-container')

        myProjects.forEach(function(project, i) { 
            const projectNameDiv = document.createElement('div')
            projectNameDiv.setAttribute('data-index', `${i}`)
            projectNameDiv.setAttribute('id', `project-name-div`)
            projectNameDiv.classList.add('items-list')

            const iconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            iconSvg.classList.add('iconSvg')
            const iconPath = document.createElementNS('http://www.w3.org/2000/svg','path');
            iconSvg.setAttribute('viewBox', '0 0 24 24');
            iconSvg.setAttribute('fill', '#0284c7');
            iconPath.setAttribute('d', 'M7,5H21V7H7V5M7,13V11H21V13H7M4,4.5A1.5,1.5 0 0,1 5.5,6A1.5,1.5 0 0,1 4,7.5A1.5,1.5 0 0,1 2.5,6A1.5,1.5 0 0,1 4,4.5M4,10.5A1.5,1.5 0 0,1 5.5,12A1.5,1.5 0 0,1 4,13.5A1.5,1.5 0 0,1 2.5,12A1.5,1.5 0 0,1 4,10.5M7,19V17H21V19H7M4,16.5A1.5,1.5 0 0,1 5.5,18A1.5,1.5 0 0,1 4,19.5A1.5,1.5 0 0,1 2.5,18A1.5,1.5 0 0,1 4,16.5Z');
            iconSvg.appendChild(iconPath);

            const projectName = document.createElement('button')
            projectName.setAttribute('id', 'project-name-btn')
            projectName.textContent = `${project.name}`

            const deleteProject = document.createElement('span')
            deleteProject.textContent = 'x'
            deleteProject.classList.add('delete')
            deleteProject.setAttribute('id', 'delete')

            projectNameDiv.appendChild(iconSvg)
            projectNameDiv.appendChild(projectName)
            projectNameDiv.appendChild(deleteProject)
            projectContainer.appendChild(projectNameDiv)


            const changeProject = (() => {
                projectNameDiv.addEventListener('click', function() {
                    deleteTitle(); 
                    const name = `${project.name}`; 
                    appendTitle(name);
                }); 
            })(); 

            const deleteBtn = (() => { 
                deleteProject.addEventListener('click', function() {
                        myProjects.splice(`${i}`, 1);
                        projectContainer.removeChild(projectNameDiv)
                    });
            })(); 

    })
};

    function deleteProject() {
        const projectContainer = document.querySelector('.projects-container')
        if(document.body.contains(document.querySelector('#project-name-div'))) {
            while (projectContainer.firstChild) {
                projectContainer.removeChild(projectContainer.lastChild)
            }
        }
    }

}


