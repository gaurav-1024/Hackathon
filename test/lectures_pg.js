// to know which course has been selected
let course_name=sessionStorage.getItem('course_selected')

// to target video part
let video_container=document.getElementsByClassName("video_container")[0];
let video=document.getElementById("video");
let course_txt=document.getElementsByClassName("course_txt")[0];

// for making lecture btns
let container=document.getElementsByClassName("lecture_btn_container")[0];
let lecture_list=[]

// this is record of how many lactures in each course
if(course_name=="web_devlopment"){
    course_txt.innerText=`Welcome to Web Devlopment Course`
    lecture_list=[1,2,3,4,5]
}
else if(course_name=="dsa"){
    course_txt.innerText=`Welcome to Course For DSA`
    lecture_list=[1,2,3,4,5,6,7,8]
}
else if(course_name=="c++"){
    course_txt.innerText="Welcome to C++ Tutorial"
    lecture_list=[1,2,3,4,5,6,7,8,9,10]
}
else if(course_name=="aiml"){
    course_txt.innerText="Welcome to AI/ML Tutorial"
    lecture_list=[1,2,3]
}
else if(course_name=="python"){
    course_txt.innerText="Lectures Coming Soon"
    lecture_list=[]
}
else if(course_name=="graphics_design"){
    course_txt.innerText="Lectures Coming Soon"
    lecture_list=[]
}
else if(course_name=="animation"){
    course_txt.innerText="Lectures Coming Soon"
    lecture_list=[]
}

lecture_list.forEach((elem)=>{
    let btn=document.createElement("button")
    btn.className="lecture_btn";
    btn.innerText=`Lecture ${elem}`
    btn.setAttribute("onclick",`btn_clicked(${elem})`)
    container.appendChild(btn)
})

// webdevlopment videos list 
web_course_list=["lecture1.mp4","lecture2.mp4","lecture3.mp4","lecture4.mp4","lecture5.mp4"]
dsa_course_list=["lecture1.mp4","lecture2.mp4","lecture3.mp4","lecture4.mp4","lecture5.mp4","lecture6.mp4","lecture7.mp4","lecture8.mp4"]
c_course_list=["lecture1.mp4","lecture2.mp4","lecture3.mp4","lecture4.mp4","lecture5.mp4","lecture6.mp4","lecture7.mp4","lecture8.mp4","lecture9.mp4","lecture10.mp4"]

function btn_clicked(num){
    course_txt.style.display="none"
    video_container.style.display="block"
    if(course_name=="web_devlopment"){
        video.src=`webd_videos/${web_course_list[num-1]}`
    }
    else if(course_name=="dsa"){
        video.src=`dsa_videos/${dsa_course_list[num-1]}`
    }
    else if(course_name=="c++"){
        video.src=`c++_videos/${c_course_list[num-1]}`
    }
}

function tracker(){
    let video_no=0;
    localStorage.setItem(`${course_name}`,)
}