import { format, isThisWeek } from "date-fns";

const inbox = () => {
    const dueDate = document.querySelectorAll('#date-todo')
    dueDate.forEach(date => {
        date.parentElement.parentElement.style.display = 'flex'
    })
}


const today = () => {
    const dueDate = document.querySelectorAll('#date-todo')
    let format1 = format(new Date(), "yyyy-MM-dd")
    dueDate.forEach(date => {
        date.parentElement.parentElement.style.display = 'flex'
        if(date.textContent != format1) {
            date.parentElement.parentElement.style.display = 'none'
        }
    })
}

const thisWeek = () => {
    const dueDate = document.querySelectorAll('#date-todo')
    dueDate.forEach(date => {
        date.parentElement.parentElement.style.display = 'flex'
        let result = isThisWeek(new Date(date.textContent))
        if(!result) {
            date.parentElement.parentElement.style.display = 'none'
        }

    })
}



export { today, thisWeek, inbox }