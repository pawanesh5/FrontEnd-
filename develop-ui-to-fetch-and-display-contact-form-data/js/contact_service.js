// put the solution code to persist and fetch data here
// method to persist data

function showPersistedData(err) {
  err.preventDefault();
  let xhr = new XMLHttpRequest();

  let requestBody = {
    firstname: document.getElementById("firstname").value,
    lastname: document.getElementById("lastname").value,
    email: document.getElementById("email").value,
    homeNo: document.getElementById("homeNo").value,
    workNo: document.getElementById("workNo").value,
    officeNo: document.getElementById("officeNo").value,
    personalNo: document.getElementById("personalNo").value,
    birthdate: document.getElementById("birthdate").value,
    company: document.getElementById("company").value,
    jobTitle: document.getElementById("jobTitle").value,
    notes: document.getElementById("notes").value,
  };
  xhr.open("POST", " http://localhost:3000/contact", true); 
  xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8"); 
  xhr.send(JSON.stringify(requestBody)); 
  
};

// method to fetch all contacts

let data = null;
function getData(err) {
  err.preventDefault();
 
  let xhr = new XMLHttpRequest();
  
  xhr.open("GET", "http://localhost:3000/contact", true);
  
  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let value = document.getElementById("table-body");
      data = JSON.parse(this.responseText);
      
      data.forEach((person) => {
        
        value.innerHTML += `<tr>`;
        value.innerHTML +=
          `<td > ${person.firstname}</td>` +
          `<td> ${person.lastname}</td>` +
          `<td> ${person.email}</td>` +
          `<td> ${person.workNo}</td>` +
          `<td><button id="table-btn" onclick="return showContactData(${person.id})">+</button></td>`;
          value.innerHTML += `</tr>`;
      });
    }
  };
  xhr.send();
}


// method to fetch contact by id

function showContactData(id){
  let contactDetails = document.getElementById('exampleModal');
  contactDetails.style.display="block";
  let contactData = document.getElementById('modal-body');
  data.forEach((person) => {
    if(person.id===id){
      contactData.innerHTML+= `<p>Firstname :${person.firstname}</p>`;
      contactData.innerHTML+= `<p>Lastname :${person.lastname}</p>`;
      contactData.innerHTML+= `<p>Email :${person.email}</p>`;
      contactData.innerHTML+= `<p>WorkNo :${person.workNo}</p>`;
      contactData.innerHTML+= `<p>JobTitle :${person.jobTitle}</p>`;
    }
  })
  
}

let btnClose = document.getElementById('btn-close');
btnClose.addEventListener('click', () => {
  var x = document.getElementById('exampleModal');
  if (x.style.display === "block") {
      x.style.display = "none";
  } else {
      x.style.display = "block";
  }
  
  document.getElementById('modal-body').innerHTML = "";
});

let close = document.getElementById('btn-close1');
close.addEventListener('click', () => {
  var temp = document.getElementById('exampleModal');
  if (temp.style.display === "block") {
      temp.style.display = "none";
  } else {
      temp.style.display = "block";
  }
  document.getElementById('modal-body').innerHTML = "";
});