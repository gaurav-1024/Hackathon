// targeting welcoome text
let welcome_txt = document.getElementById("welcome_txt");
// targeting question container
let question_container = document.getElementsByClassName("question_container")[0];

// for making course btns
let container = document.getElementsByClassName("course_btn_container")[0];
let course_list = ["Web Devlopment", "DSA", "C++", "AI/ML"]
course_list.forEach((elem) => {
    let btn = document.createElement("button")
    btn.className = "course_btn";
    btn.innerText = ` ${elem}`
    btn.setAttribute("onclick", `course_btn_clicked("${elem}")`)
    container.appendChild(btn)
})

// making list of question for different question in the format  === [question,[4 options],answer]
let webd_question = [
    ["Name the langauge used in web Devlopment", ["html", "css", "javascript", "all the above"], "all the above"],
    ["In which year html was invented", ["2024", "1990", "1993", "2001"], "1993"],
    ["what is html used for", ["structure", "style", "logic", "all the above"], "structure"],
    ["what is css used for", ["structure", "style", "logic", "all the above"], "style"],
    ["what is javascript used for", ["structure", "style", "logic", "all the above"], "logic"],
    ["file type of html", [".html", ".txt", ".js", ".css"], ".html"],
    ["file type of css", [".html", ".txt", ".js", ".css"], ".css"],
    ["file type of javascript", [".html", ".txt", ".js", ".css"], ".js"],
    ["which tag is used to display image", ["image", "i", "img", "none"], "img"],
    ["which heading is largest", ["h6", "h3", "h5", "h1"], "h1"]

]
let dsa_question = [
    ["this is dsa question 1", ["option 1", "option 2", "option 3", "option 4"], "option 3"],
    ["this is dsa question 2", ["option 1", "option 2", "option 3", "option 4"], "option 4"],
    ["this is dsa question 3", ["option 1", "option 2", "option 3", "option 4"], "option 1"],
    ["this is dsa question 4", ["option 1", "option 2", "option 3", "option 4"], "option 3"],
    ["this is dsa question 5", ["option 1", "option 2", "option 3", "option 4"], "option 2"],
    ["this is dsa question 6", ["option 1", "option 2", "option 3", "option 4"], "option 1"],
    ["this is dsa question 7", ["option 1", "option 2", "option 3", "option 4"], "option 4"],
    ["this is dsa question 8", ["option 1", "option 2", "option 3", "option 4"], "option 2"],
    ["this is dsa question 9", ["option 1", "option 2", "option 3", "option 4"], "option 1"],
    ["this is dsa question 10", ["option 1", "option 2", "option 3", "option 4"], "option 2"],

]
let c_question = [
    ["this is c++ question 1", ["option 1", "option 2", "option 3", "option 4"], "option 3"],
    ["this is c++ question 2", ["option 1", "option 2", "option 3", "option 4"], "option 4"],
    ["this is c++ question 3", ["option 1", "option 2", "option 3", "option 4"], "option 1"],
    ["this is c++ question 4", ["option 1", "option 2", "option 3", "option 4"], "option 3"],
    ["this is c++ question 5", ["option 1", "option 2", "option 3", "option 4"], "option 2"],
    ["this is c++ question 6", ["option 1", "option 2", "option 3", "option 4"], "option 1"],
    ["this is c++ question 7", ["option 1", "option 2", "option 3", "option 4"], "option 4"],
    ["this is c++ question 8", ["option 1", "option 2", "option 3", "option 4"], "option 2"],
    ["this is c++ question 9", ["option 1", "option 2", "option 3", "option 4"], "option 1"],
    ["this is c++ question 10", ["option 1", "option 2", "option 3", "option 4"], "option 2"],

]
let aiml_question = [
    ["this is aiml question 1", ["option 1", "option 2", "option 3", "option 4"], "option 3"],
    ["this is aiml question 2", ["option 1", "option 2", "option 3", "option 4"], "option 4"],
    ["this is aiml question 3", ["option 1", "option 2", "option 3", "option 4"], "option 1"],
    ["this is aiml question 4", ["option 1", "option 2", "option 3", "option 4"], "option 3"],
    ["this is aiml question 5", ["option 1", "option 2", "option 3", "option 4"], "option 2"],
    ["this is aiml question 6", ["option 1", "option 2", "option 3", "option 4"], "option 1"],
    ["this is aiml question 7", ["option 1", "option 2", "option 3", "option 4"], "option 4"],
    ["this is aiml question 8", ["option 1", "option 2", "option 3", "option 4"], "option 2"],
    ["this is aiml question 9", ["option 1", "option 2", "option 3", "option 4"], "option 1"],
    ["this is aiml question 10", ["option 1", "option 2", "option 3", "option 4"], "option 2"],

]

let question_count = 0
let score = 0;
let not_attempted=0;
let quiz_course;


// this function make  questions from the question list and display
function display_question() {
    
    
    // geeting course name from session storage ..which course is clicked for quiz
    let quiz_course0 = sessionStorage.getItem('quiz_course')
    if (quiz_course0 == "Web Devlopment") {
        quiz_course = webd_question;
    }
    else if (quiz_course0 == "DSA") {
        quiz_course = dsa_question;
    }
    else if(quiz_course0=="C++"){
        quiz_course=c_question;
    }
    else if(quiz_course0=="AI/ML"){
        quiz_course=aiml_question;
    }


    question_container.innerHTML = `<div class="question">Q.${question_count + 1} ${quiz_course[question_count][0]} </div>
    <div class="options">
        <input type="radio" name="name" class="radio_btn" value="${quiz_course[question_count][1][0]}"> ${quiz_course[question_count][1][0]}<br>
        <input type="radio" name="name" class="radio_btn" value="${quiz_course[question_count][1][1]}"> ${quiz_course[question_count][1][1]}<br>
        <input type="radio" name="name" class="radio_btn" value="${quiz_course[question_count][1][2]}"> ${quiz_course[question_count][1][2]}<br>
        <input type="radio" name="name" class="radio_btn" value="${quiz_course[question_count][1][3]}"> ${quiz_course[question_count][1][3]}<br>
    </div>
    <button onclick="check()" class="next_btn">Next</button>
    </div>`


}

// this function calls display_qestions function and then display_qestion makes and display questions according to course selected
function course_btn_clicked(course_name) {
    score = 0
    not_attempted=0
    question_count = 0
    welcome_txt.style.display = "none";
    sessionStorage.setItem('quiz_course', `${course_name}`)
    display_question()
    question_container.style.display = "block";

}

// this function counts the score obtained not attempted question and also calls display_question for next question
function check() {
    if (document.querySelector('input[name="name"]:checked')) {
        let option_checked = document.querySelector('input[name="name"]:checked');
        if (quiz_course[question_count][2] == option_checked.value) {
            score += 1
        }
    }
    else{
        not_attempted+=1;
    }
    question_count++;
    if (question_count != 10) {
        display_question()

    }
    else {
        showResult()
        
    }
}

function showResult(){
    question_container.style.display = "none";
    welcome_txt.innerHTML=`Total Questions = 10<br>
    Not Attempted = ${not_attempted}<br>
    Wrong Questions = ${10-not_attempted-score}<br>
    Final Score = ${score}`
    welcome_txt.style.display="flex"

}


