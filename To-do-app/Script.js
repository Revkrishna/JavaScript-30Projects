const inputbox= document.getElementById("input-box");
const containerlist=document.getElementById("list-container");

function addtask(){
    if (inputbox.value === ''){
        alert ("Plese add you tasks");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        containerlist.appendChild(li);
        
        let span= document.createElement("span");
        span.innerHTML ="\u00d7";
        li.appendChild(span);
    }
    inputbox.value='';
}

containerlist.addEventListener("click", function(e) {
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("checked");

    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
},false);

  
