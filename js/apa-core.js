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
    
    //Load 
    // console.log("Loaded");
    // const artwork_section = document.querySelector(".artwork_section");

    // function obCallback(payload) {
    //     console.log(payload);
    // }

    // const ob = new IntersectionObserver(obCallback);
    
    // ob.observe(artwork_section)

    var abstract_button = document.querySelector('.btn-icaer');

    abstract_button.addEventListener("click", () => {
        alert("Please Check the JS file and add the links");
    })
});





