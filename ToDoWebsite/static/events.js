/*----- EVENT FOR MAIN MENU SECTIONS -----*/
document.addEventListener('DOMContentLoaded', () => {
const links = document.querySelectorAll('.link-in-page');
const sections = document.querySelectorAll('.section-main-menu');
links.forEach(link=>
    {
        link.addEventListener('click', (event)=>{
            event.preventDefault();
            /*hide all section*/
            sections.forEach(section=>{
                section.classList.remove('active');
            });
        /*activate clicked section*/
        const targetId = link.getAttribute('data-target');
        const targetSection = document.getElementById(targetId);
        targetSection.classList.add('active');
        
        });
    });
    /*show first section as default*/
    sections[0].classList.add('active');
});
