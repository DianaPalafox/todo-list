import { format, isThisWeek } from "date-fns";


const inbox = () => {
    const dueDate = document.querySelectorAll('#date-todo')
    dueDate.forEach(date => {
        date.parentElement.parentElement.style.display = 'flex'
        date.parentElement.parentElement.style.display = 'grid'
    })
}


const today = () => {
    const dueDate = document.querySelectorAll('#date-todo')
    let format1 = format(new Date(), "yyyy-MM-dd")
    dueDate.forEach(date => {
        date.parentElement.parentElement.style.display = 'flex'
        date.parentElement.parentElement.style.display = 'grid'
        if(date.textContent != format1) {
            date.parentElement.parentElement.style.display = 'none'
        }
    })
}

const thisWeek = () => {
    const dueDate = document.querySelectorAll('#date-todo')
    dueDate.forEach(date => {
        date.parentElement.parentElement.style.display = 'flex'
        date.parentElement.parentElement.style.display = 'grid'
        let result = isThisWeek(new Date(date.textContent))
        if(!result) {
            date.parentElement.parentElement.style.display = 'none'
        }

    })
}



export { today, thisWeek, inbox }