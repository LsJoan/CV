let menuAbout = document.getElementById("about-menu"),
    menuSkills = document.getElementById("skills-menu"),
    menuResume = document.getElementById("resume-menu"),
    menuWorks = document.getElementById("works-menu");

let sectionAbout = document.getElementById("about-section"),
    sectionSkills = document.getElementById("skills-section"),
    sectionResume = document.getElementById("resume-section"),
    sectionWork = document.getElementById("work-section");

menuAbout.addEventListener("click", () => {
    menuAbout.className = "menu-item active";
    menuSkills.className = "menu-item";
    menuResume.className = "menu-item";
    menuWorks.className = "menu-item";
});

menuSkills.addEventListener("click", () => {
    menuSkills.className = "menu-item active";
    menuAbout.className = "menu-item";
    menuResume.className = "menu-item";
    menuWorks.className = "menu-item";
});

menuResume.addEventListener("click", () => {
    menuSkills.className = "menu-item";
    menuAbout.className = "menu-item";
    menuResume.className = "menu-item active";
    menuWorks.className = "menu-item";
});

menuWorks.addEventListener("click", () => {
    menuSkills.className = "menu-item";
    menuAbout.className = "menu-item";
    menuResume.className = "menu-item";
    menuWorks.className = "menu-item active";
});

sectionAbout.addEventListener("mousemove", () => {
    menuAbout.className = "menu-item active";
    menuSkills.className = "menu-item";
    menuResume.className = "menu-item";
    menuWorks.className = "menu-item";
});

sectionSkills.addEventListener("mousemove", () => {
    menuAbout.className = "menu-item";
    menuSkills.className = "menu-item active";
    menuResume.className = "menu-item";
    menuWorks.className = "menu-item";
});

sectionResume.addEventListener("mousemove", () => {
    menuAbout.className = "menu-item";
    menuSkills.className = "menu-item";
    menuResume.className = "menu-item active";
    menuWorks.className = "menu-item";
});

sectionWork.addEventListener("mousemove", () => {
    menuAbout.className = "menu-item";
    menuSkills.className = "menu-item";
    menuResume.className = "menu-item";
    menuWorks.className = "menu-item active";
});