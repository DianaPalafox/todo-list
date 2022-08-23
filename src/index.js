import { initialPage, addTaskButton, appendTitle } from "./initial-page";
import {projectButton, addFormButton, sidebarButton, changeTitle, closeSpan, closeButton, addButton, deleteProject} from "./events"


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
deleteProject();