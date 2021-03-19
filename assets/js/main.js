// main scripting file

// Show, hide sections of the cv
var about = document.getElementById("about");
var education = document.getElementById("education");
var experience = document.getElementById("experience");
var skills = document.getElementById("skills");

function showEducation() {
    about.style.visibility = "hidden";
    experience.style.visibility = "hidden";
    skills.style.visibility = "hidden";
    education.style.visibility = "visible";
}

function showExperience() {
    about.style.visibility = "hidden";
    experience.style.visibility = "visible";
    skills.style.visibility = "hidden";
    education.style.visibility = "hidden";
}

function showSkills() {
    about.style.visibility = "hidden";
    experience.style.visibility = "hidden";
    skills.style.visibility = "visible";
    education.style.visibility = "hidden";
}

function showAbout() {
    about.style.visibility = "visible";
    experience.style.visibility = "hidden";
    skills.style.visibility = "hidden";
    education.style.visibility = "hidden";
}



// experiments

// speed trap
function speedTrap() {
    var speed = 122;
    return speed;
}

function totalFine(maxSpeed) {
    maxSpeed = 80;
    var fine = (speedTrap() - maxSpeed) * 10;
    return fine;
}


console.log(totalFine());