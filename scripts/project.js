let project = 'yahtzeeScorerProject'

// import the content from my json project file to populate the page
try {
    response = await fetch('./scripts/project.json');
    let data = await response.json();
    let selectedProject = data.project;

} catch (error) {
    console.error('Error fetching JSON:', error);
}

