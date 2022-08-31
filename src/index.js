import { dom_content } from "./initial-page";
import { dom_events } from "./events"
import { projects } from "./projects"
import { todos } from "./todos"


document.addEventListener('DOMContentLoaded', () => {
    dom_content();
    dom_events(); 
    projects(); 
    todos(); 
})




/*import { initialPage, addTaskButton, appendTitle } from "./initial-page";
import {projectButton, addFormButton, sidebarButton, changeTitle, closeSpan, closeButton } from "./events"
import { addButton } from "./projects"
import {addTodos} from "./todos"


initialPage(); 
appendTitle('Inbox')
sidebarButton(); 
addTaskButton(); 
changeTitle(); 
addFormButton(); 
projectButton(); 
closeSpan(); 
closeButton(); 
addButton(); 
addTodos(); */


