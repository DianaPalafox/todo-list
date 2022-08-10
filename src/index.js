import initialPage from "./initial-page";
import sidebarButton from "./sidebar-button"; 
import { appendTitle } from "./append-title";
import changeTitle from "./append-title";
import { addTaskButton } from "./initial-page"
import addFormButton from "./form"
import {projectButton} from "./form"


initialPage(); 
appendTitle('Inbox')
sidebarButton(); 
addTaskButton(); 
changeTitle(); 
addFormButton(); 
projectButton(); 

