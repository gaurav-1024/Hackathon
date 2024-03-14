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
    course_txt.innerHTML=`Welcome to <br>Web Devlopment Course`
    course_txt.style.background="url(course_page_background3.png)"
    lecture_list=[1,2,3,4,5]
}
else if(course_name=="dsa"){
    course_txt.innerHTML=`Welcome to <br> Data Structures and Algorithm course`
    // course_txt.style.fontSize="70px"
    course_txt.style.background="url(course_page_background4.png)"
    lecture_list=[1,2,3,4,5,6,7,8]
}
else if(course_name=="c++"){
    course_txt.innerText="Welcome to C++ Tutorial"
    course_txt.style.background="url(course_page_background3.png)"
    lecture_list=[1,2,3,4,5,6,7,8,9,10]
}
else if(course_name=="aiml"){
    course_txt.innerText="Welcome to AI/ML Tutorial"
    course_txt.style.background="url(course_page_background4.png)"
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

// getting mark as complete button
let complete_btn=document.getElementById("complete_btn");


function btn_clicked(num){
    course_txt.style.display="none"
    video_container.style.display="block"
    complete_btn.disabled=false;
    complete_btn.innerText="Mark Complete"
    if(course_name=="web_devlopment"){
        video.src=`webd_videos/${web_course_list[num-1]}`
    }
    else if(course_name=="dsa"){
        video.src=`dsa_videos/${dsa_course_list[num-1]}`
    }
    else if(course_name=="c++"){
        video.src=`c++_videos/${c_course_list[num-1]}`
    }

    // if u have completed lactures previously then to show completed
    if(localStorage.getItem("course_progress")===null){
        complete_btn.disabled=false;
        complete_btn.innerText=" Mark Complete"
    }
    else{
        let progress_detail=JSON.parse(localStorage.getItem("course_progress"))
        progress_detail.forEach((elem1)=>{
            if(elem1[0]==course_name && elem1[1]>=num){
                complete_btn.innerText="Marked";
                complete_btn.disabled=true;
            }
        })
        
    }

}

function tracker(){
    // disableling mark complete button
    complete_btn.innerText="Marked";
    complete_btn.disabled=true
    let total_lecture=lecture_list.length
    // console.log(total_lecture)
    
    // checking if course exist in localStorage
    if(localStorage.getItem("course_progress")===null){
        let course_progress=[[`${course_name}`,1,total_lecture]]
        localStorage.setItem("course_progress",JSON.stringify(course_progress))
    }
    else{
        let progress_detail=JSON.parse(localStorage.getItem("course_progress"))
        let course_position;
        let course_found=0
        progress_detail.forEach((elem,index)=>{
            if(elem[0]==course_name){
                course_found=1;
                course_position=index;
            }
        })
        if(course_found){
            progress_detail[course_position][1]++;
            localStorage.setItem("course_progress",JSON.stringify(progress_detail))
        }
        else{
            progress_detail.push([`${course_name}`,1,total_lecture])
            localStorage.setItem("course_progress",JSON.stringify(progress_detail))
        }
    }
}