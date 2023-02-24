//Script = APA.JS - Starts Here
document.addEventListener('DOMContentLoaded',()=>{
    //Database Fetch
    fetch('./database/main_content.json')
        .then((response) => response.json())
        .then((json) => {
            //Data-Loading
            const about_conference = document.querySelector("#about_conference_content");
            const conference_pic = document.querySelector("#conference_pic");
            about_conference.innerHTML = json[0].content;
            conference_pic.src = json[0].img_src;

            const about_department = document.querySelector("#about_department_content");
            const department_pic = document.querySelector("#department_pic");
            about_department.innerHTML = json[1].content;
            department_pic.src = json[1].img_src;
        });
    var abstract_button = document.querySelector('.btn-icaer');
    abstract_button.addEventListener("click", () => {
        alert("Please Check the JS file and add the links");
    })

    //Intersection observer
    if ('IntersectionObserver' in window) {
        const section_detection = document.querySelectorAll('.section_content');
        const observer = new IntersectionObserver(entries =>{
            let u_list_menu = document.querySelectorAll('#menu_ul li a');
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    u_list_menu.forEach(data=>{
                        let str_hash = data.hash.slice(1);
                        if (str_hash == entry.target.id){
                            data.parentElement.classList.add('select_menu');
                        }
                        else
                            data.parentElement.classList.remove('select_menu');
                    });
                }
            });
        });
        section_detection.forEach(sect=>{
            observer.observe(sect);
        });
        };
});





