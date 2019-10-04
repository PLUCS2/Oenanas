
export const fetchProject = id => {
    return $.ajax({
        method: "GET", 
        url: `/api/projects/${id}`
    })
}

export const fetchProjects = () => {
    return $.ajax({
        method: "GET", 
        url: "/api/projects"
    })
}

export const destroyProject = id => {
    return $.ajax({
        method: "DELETE", 
        url: `/api/projects/${id}`
    })
}

export const editProject = project => {
    return $.ajax({
        method: "PATCH", 
        url: `/api/projects/${project.id}`, 
        data: project
    })
}

export const createProject = project => {
    return $.ajax({
        method: "POST", 
        url: "/api/projects", 
        data: project 
    })
}

