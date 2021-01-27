const createTeam = teamData => {
 
    const manager = teamData.manager.map(function(job) {
        let managerData = `
        <div class="column is-full">
            <div class="card">
                <div class="card-content">
                <p class="title">${job.name}</p>
                <p class="subtitle">
                    <span class="material-icons">local_cafe</span>
                    Manager
                </p>
                <p>ID: ${job.id}</p>
                <p>Email: <a href="mailto:${job.email}">${job.email}</a></p>
                <p>Office Number: ${job.officeNumber}</p>
                </div>
            </div>
        </div>
        `
        return managerData
    });

    const engineer = teamData.engineer.map(function(job) {
        let engineerData = `
        <div class="column">
            <div class="card">
                <div class="card-content">
                <p class="title">${job.name}</p>
                <p class="subtitle">
                    <span class="material-icons">engineering</span>
                    Engineer
                </p>
                <p>ID: ${job.id}</p>
                <p>Email: <a href="mailto:${job.email}">${job.email}</a></p>
                <p>GitHub: <a href="https://github.com/${job.github}" target="_blank">${job.github}</a></p>
                </div>
            </div>
        </div>
        `
        return engineerData
    })

    const intern = teamData.intern.map(function(job) {
        let internData = `
        <div class="column">
            <div class="card">
                <div class="card-content">
                <p class="title">${job.name}</p>
                <p class="subtitle">
                    <span class="material-icons">school</span>
                    Intern
                </p>
                <p>ID: ${job.id}</p>
                <p>Email: <a href="mailto:${job.email}">${job.email}</a></p>
                <p>School: ${job.school}</p>
                </div>
            </div>  
        </div>
        `
        return internData
    })
    return [manager,engineer,intern]
}


// Export Function to Create Page
module.exports = templateData => {
    return `
        <!DOCTYPE html>

        <html lang="en">
        
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.2/css/bulma.min.css" integrity="sha512-byErQdWdTqREz6DLAA9pCnLbdoGGhXfU6gm1c8bkf7F51JVmUBlayGe2A31VpXWQP+eiJ3ilTAZHCR3vmMyybA==" crossorigin="anonymous" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        
            <title>My Team</title>
        
        </head>
        
        
        <body>
        
            <header>
                <section class="hero is-danger">
                    <div class="hero-body">
                    <div class="container">
                        <h1 class="title has-text-centered">
                        My Team
                        </h1>
                    </div>
                    </div>
                </section>
            </header>
        
            <main class="columns is-multiline">
            ${createTeam(templateData)}
            </main>
        
        </body>
        
        </html>       
        `
}





