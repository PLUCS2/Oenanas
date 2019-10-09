
export const updateSection = section => {
    return $.ajax({
        method: "PATCH",
        url: `/api/sections/${section.id}`,
        data: section
    })
}

export const createSection = section => {
    return $.ajax({
        method: "POST",
        url: '/api/sections',
        data: section
    })
}

export const destroySection = id => {
    return $.ajax({
        method: "DELETE",
        url: `/api/sections/${id}`
    })
}

export const showSection = id => {
    return $.ajax({
        method: "GET",
        url: `/api/sections/${id}`
    })    
}

export const allSections = projectId => {
    return $.ajax({
        method: "GET", 
        url: '/api/sections', 
        data: projectId
    })
}

export const updateOrder = orderArr => {
    return $.ajax({
        method: "PATCH",
        url: `/api/sections/${orderArr[0]}`,
        data: orderArr
    })
}