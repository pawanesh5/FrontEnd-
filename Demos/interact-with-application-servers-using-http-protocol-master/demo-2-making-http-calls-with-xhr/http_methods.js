 let count=0;
 window.onload=()=>{
   count++;
   let div=document.getElementById("count");
   div.innerHTML=count;
   div.style.backgroundColor="yellow";
 };

 function getData() {
   let xhr = new XMLHttpRequest();
   xhr.onreadystatechange = function() {
     if (this.readyState == 4 && this.status == 200) {
       let newSection = document.createElement("div");
       let newNode = document.createTextNode(this.responseText);
       newSection.appendChild(newNode);
       document.getElementById("demo").append(newSection);
     }
   };
   xhr.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
   xhr.send();
 }

 function sendData() {
   let xhr = new XMLHttpRequest();
   let requestBody = {
     "userId": 1,
     "id": 101,
     "title": "Newly Added Title",
     "body": "Newly added body"
   };
   xhr.onreadystatechange = function() {
     if (this.readyState == 4 && this.status == 201) {
       let newSection = document.createElement("div");
       let newNode = document.createTextNode(this.responseText);
       newSection.appendChild(newNode);
       document.getElementById("demo").append(newSection);
     }
   };
   xhr.open("POST", "https://jsonplaceholder.typicode.com/todos", true);
   xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhr.send(JSON.stringify(requestBody));
 }




 
function getData() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "hello.txt", false);//not async or sync
  xhr.send();
  document.write(xhr.response);
}

function sendData() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "hello.txt");//default async
  xhr.onload=()=>{
    if(xhr.status==200)
    {
      document.write(xhr.responseText);
    }
  };
  xhr.send();
  document.write("--------------");

}