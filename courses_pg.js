
// list that contain details of course in format [thumbnail_image,course_name,id]
let course_details=[
    ["web_devlopment_thumbnail.png","Web Devlopment","web_d"],
    ["dsa_thumbnail.png"," DSA","dsa"],
    ["c++_thumbnail.png"," C++ full Course","c++"],
    ["aiml_thumbnail.png"," AI ML","aiml"],
    ["python_thumbnail.png","Python","python"],
    ["graphics_design_thumbnail.png","Graphics Design","graphics_design"],["animation_thumbnail.png","Animation","amimation"],
    ["c++_thumbnail.png"," C++ full Course","c++"]
]

// adding course template to courses page
let main_container=document.getElementsByClassName("course_container")[0];
course_details.forEach((course)=>{
    let elem=document.createElement("div");
    elem.className="course_template";
    elem.innerHTML=`<div class="thumbnail"><img src="thumbnail_images/${course[0]}" width="100%" height="100%">
    </div>
    <div class="course_name">Course Name:- ${course[1]}</div>
    <a  href="lactures_page.html" class="explore_btn" id="${course[[2]]}">Explore...</a>`
    main_container.appendChild(elem)
})

// targating all the course using their id's
let web_devlopment=document.getElementById("web_d");
let dsa=document.getElementById("dsa");
let c=document.getElementById("c++");
let aiml=document.getElementById("aiml")
let pythonaiml=document.getElementById("python")
let graphics_design=document.getElementById("graphics_design")
let animation=document.getElementById("animation")


// variable to store which course is clicked
let course_selected="";

// adding event listners to all the courses
web_devlopment.addEventListener("click",()=>{
    sessionStorage.setItem("course_selected",`web_devlopment`)
})
dsa.addEventListener("click",()=>{
    sessionStorage.setItem("course_selected",`dsa`)
})
c.addEventListener("click",()=>{
    sessionStorage.setItem("course_selected",`c++`)
})
aiml.addEventListener("click",()=>{
    sessionStorage.setItem("course_selected",`aiml`)
})
python.addEventListener("click",()=>{
    sessionStorage.setItem("course_selected",`python`)
})
graphics_design.addEventListener("click",()=>{
    sessionStorage.setItem("course_selected",`graphics_design`)
})
animation.addEventListener("click",()=>{
    sessionStorage.setItem("course_selected",`animation`)
})




