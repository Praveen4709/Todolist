const inputbox=document.getElementById("input-box");
const listcontainer=document.getElementById("list-container");
function additem(){
    if(inputbox.value==''){
        alert("you must write something");
    }
    else{
      let li=document.createElement("LI");
      li.innerHTML=inputbox.value;
      listcontainer.appendChild(li);
      let span=document.createElement("SPAN");
      span.innerHTML="\u00d7";
      li.appendChild(span);
    }
    inputbox.value="";
    saveData();
}
listcontainer.addEventListener("click",function(e){
   if(e.target.tagName ==="LI"){
      e.target.classList.toggle("checked");
   }
   else if(e.target.tagName==="SPAN"){
      e.target.parentElement.remove();
   }
   saveData();
});
function saveData(){
    localStorage.setItem("data",listcontainer.innerHTML);
}
function showData(){
   listcontainer.innerHTML=localStorage.getItem("data");
}
showData();
