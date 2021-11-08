// copy here the solution code for implementing persistence of contact data

function sendData(data) {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 201) {
        console.log("succefully added");
      }
    };
    xhr.open("POST", "http://localhost:3000/contact", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
   xhr.send(JSON.stringify(data));
  }