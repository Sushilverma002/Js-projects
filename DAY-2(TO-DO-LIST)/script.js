const inputbox = document.getElementById("input-box") ;
const listcontainer = document.getElementById("list-container");

function addTask(){
    if(inputbox.value === ''){
        alert("You must have to write something!");
    }
    else{
        let li = document.createElement("li");//we created html element with li and storing in li
        li.innerHTML = inputbox.value;
        listcontainer.appendChild(li);//display the li in list container
        //createelement is use to create html tags in js
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);// to add into li
    }
    inputbox.value = "";
    saveData();
}

//js for delete task
listcontainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
},false);

// if we refresh then data must remain there
function saveData(){
    localStorage.setItem("data",listcontainer.innerHTML);
}

//to show data we use the getitem. 
function showTask(){
    listcontainer.innerHTML = localStorage.getItem("data");
}
showTask();

