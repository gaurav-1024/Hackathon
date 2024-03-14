
// getting course list form local storage
let course_list=JSON.parse(localStorage.getItem("course_progress"))

// getting main container
let main_container=document.getElementsByClassName("progress_container")[0];
console.log(course_list)
if(course_list===null){
    main_container.innerHTML="<h1>No Course To Display</h1><h2>Please attend Lectures to display progress</h2>"
}
else{
    course_list.forEach((elem)=>{
        let container=document.createElement("div")
        container.className="container";
        container.innerHTML=`<div class="course_name">${elem[0]}</div>
        <div class="progress_bar">
            <div class="variable_bar" id="${elem[0]}"></div>
        </div>
        <div class="${elem[0]} progress_txt"> </div>`
        main_container.appendChild(container)
    })
}

course_list.forEach((elem1)=>{
    let variable_bar=document.getElementById(`${elem1[0]}`)
    variable_bar.style.width=`${(elem1[1]/elem1[2])*100}%`
    let progress_result=document.getElementsByClassName(`${elem1[0]}`)[0]
    progress_result.innerText=`${elem1[1]} Lectures out of ${elem1[2]} completed`
    

})
