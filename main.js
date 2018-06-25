function loadJson(file,callback){
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function(){
    if(xhr.readyState===4 && xhr.status=="200"){
      callback(xhr.responseText);
    }
  }
  xhr.send(null);
}
loadJson("data.json",function(text){
  let data=JSON.parse(text);
  console.log(data);
    fun_education(data.education);
    fun_career(data.career);
    fun_achievements(data.achievements);
    fun_skills(data.skills);
});
//child name
var div2=document.getElementById("child2");
//career function education
function fun_career(cr){
  var career=document.createElement("h2");
  career.textContent="Career Objective";
  div2.appendChild(career);
  var hr=document.createElement("hr");
  div2.appendChild(hr);
  var info=document.createElement("p");
  info.classList.add("largeFont");
  div2.appendChild(info);
  info.textContent=cr.info;
}
//achievement function education
function fun_achievements(achieve){
  var achievements=document.createElement("h2");
  achievements.textContent="Achievements";
  div2.appendChild(achievements);
  var hr=document.createElement("hr");
  div2.appendChild(hr);
  var list=document.createElement("ul");
  div2.appendChild(list);
  for(var i=0;i<achieve.length;i++){
    var listItem=document.createElement("li");
    listItem.innerHTML=achieve[i].name;
    list.appendChild(listItem);
  }
}
//skills function Education
function fun_skills(sk){
  var skills=document.createElement("h2");
  skills.textContent="Skills";
  div2.appendChild(skills);
  var hr=document.createElement("hr");
  div2.appendChild(hr);
  var list=document.createElement("ul");
  div2.appendChild(list);
  var tr="";
  var table=document.createElement("table");
  div2.appendChild(table);
  for(var i=0;i<sk.length;i++){
    tr+="<tr><td>"+sk[i].name+"</td><td>"+sk[i].data+"</td></tr>"
  }
  table.innerHTML=tr;
  table.border="1";
}
//Qualification function education
function fun_education(edu){
  var head=document.createElement("h2");
  head.textContent="Education Qualification";
  div2.appendChild(head);
  var hr=document.createElement("hr");
  div2.appendChild(hr);
  var list=document.createElement("ul");
  div2.appendChild(list);
  for(var i=0;i<edu.length;i++){
    var listItem=document.createElement("li");
    listItem.textContent=edu[i].degree;
    list.appendChild(listItem);

    var listItem=document.createElement("li");
    listItem.textContent=edu[i].institute;
    list.appendChild(listItem);

    var listItem=document.createElement("li");
    listItem.textContent=edu[i].data;
    list.appendChild(listItem);
  }

  }
