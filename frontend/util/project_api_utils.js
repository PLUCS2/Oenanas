
const fetchProject = id => {
    return $.ajax({
        method: "GET", 
        url: `/api/projects/${id}`
    })
}

const fetchProjects = () => {
    return $.ajax({
        method: "GET", 
        url: "/api/projects"
    })
}

const destroyProject = id => {
    return $.ajax({
        method: "DELETE", 
        url: `/api/projects/${id}`
    })
}

const editProject = project => {
    return $.ajax({
        method: "PATCH", 
        url: `/api/projects/${project.id}`, 
        data: project
    })
}

const createProject = project => {
    return $.ajax({
        method: "POST", 
        url: "/api/projects", 
        data: project 
    })
}