const skills = ["Front End", "Back End", "CCNA NETWORK", "CCNP NETWORK"];
let skillIndex = 0;
let charIndex = 0;
let currentSkill = "";
let isDeleting = false;
let delay = 200;

function typeSkills() {
    const target = document.getElementById("skills");

    if (!isDeleting && charIndex <= skills[skillIndex].length) {
        currentSkill = skills[skillIndex].substring(0, charIndex);
        target.textContent = currentSkill;
        charIndex++;
        delay = 200;
    }

    if (isDeleting && charIndex > 0) {
        currentSkill = skills[skillIndex].substring(0, charIndex);
        target.textContent = currentSkill;
        charIndex--;
        delay = 100;
    }

    if (!isDeleting && charIndex === skills[skillIndex].length) {
        delay = 1000;
        isDeleting = true;
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        skillIndex = (skillIndex + 1) % skills.length;
    }

    setTimeout(typeSkills, delay);
}

window.onload = () => {
    typeSkills();
};


