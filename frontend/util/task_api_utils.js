export const updateTask = task => {
    return $.ajax({
        method: "PATCH",
        url: `/api/tasks/${task.id}`,
        data: task
    })
}

export const createTask = task => {
    return $.ajax({
        method: "POST",
        url: '/api/tasks',
        data: task
    })
}

export const destroyTask = id => {
    return $.ajax({
        method: "DELETE",
        url: `/api/tasks/${id}`
    })
}

export const showTask = id => {
    return $.ajax({
        method: "GET",
        url: `/api/tasks/${id}`
    })
}

export const allTasks = sectionId => {
    return $.ajax({
        method: "GET", 
        url: '/api/tasks', 
        data: sectionId
    })
}