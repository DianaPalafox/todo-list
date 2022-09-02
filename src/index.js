import { domContent } from "./initial-page";
import { domEvents } from "./events"
import { projects } from "./projects"
import { todos } from "./todos"


document.addEventListener('DOMContentLoaded', () => {
    domContent();
    domEvents(); 
    projects(); 
    todos(); 
})





