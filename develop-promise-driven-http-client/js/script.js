// create object that returns Promise with the response for the request made
let httpClient={

    post:function(data){
        var xhr = new XMLHttpRequest();
        return new Promise(function (resolve, reject) {
        xhr.onreadystatechange = function ()
        {
            if (xhr.readyState == 4) return;
            if (xhr.status == 201) {
           resolve(xhr.status);
            } else 
            {
                reject(xhr.statusText);
            }
        };
            xhr.open('POST','http://localhost:3000/contact',true);
            xhr.setRequestHeader("Content-type", "application/json;charset=UTF-8");
            xhr.send(JSON.stringify(data)); 
        });
    },
    
    get: function () {
         var xhr = new XMLHttpRequest();
        return new Promise(function (resolve, reject) {
        xhr.onreadystatechange = function ()
        {
            if (xhr.readyState == 4) return;
            if (xhr.status == 200) {
            resolve({status:xhr.status});
            } else 
            {
                 reject({statusText: xhr.statusText}); 
            }
          };
         xhr.open('GET','http://localhost:3000/contact',true);
         xhr.send();
       });
    }
}
       
// create object of the Promise driven HTTP client and ensure following code works
let httpclient=Object.create(httpClient);
let contacts = {
    "id":30,
    "firstname":"bipin",
    "lastname":"tiwari"
    // add properties as per the data structure of the data fetched and retrieved
  }
    console.log(contacts);
httpClient
.post(contacts)
.then(response=>{
    alert('record added')
    console.log(response);
})
.catch(err=>{
    console.log(err);
})

httpClient
.get()
.then((response)=>{
    let data = '<ul>'
    let contact = JSON.parse(response);
    contact.forEach(r => {
        data+= `<li>${r.firstName}.${r.lastName}</li>`
    })
    data+='</ul>'
    document.body.innerHTML += data;
    console.log(response);
})
.catch(err=>{
   // document.write(response);
    console.log(err)
})