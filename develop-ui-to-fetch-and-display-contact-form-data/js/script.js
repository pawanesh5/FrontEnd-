// put validation code here
//Provide the solution code here
let contacts = [];


// listen to click of addContact button and add maximum of two additional inputs for inputting Contact Nos.

let addcontactNo = document.getElementById('addContactNo');
addcontactNo.addEventListener('click', () => {
    var x = document.getElementById('toggleContact');
    if (x.style.display === "none") {
        x.style.display = "flex";
    } else {
         x.style.display = "none";
    }
})


window.contactDetails = (event) => {
    event.preventDefault();
    //contact object captures all the inputs provided
    let formDetails = document.getElementById('contactDetailsForm');
    let contactDetails = Object.fromEntries(new FormData(formDetails));
    let result = submitContacts(contactDetails);
    console.log(contactDetails);
    return result;
    
}

// handling erros
const submitContacts=(contactDetails)=>{
    let errors = {
        firstNameError:validateUserName(contactDetails.firstname),
        lastNameError:validateLastName(contactDetails.lastname),
        emailError:validateEmail(contactDetails.email),
        homeNoError:validateHomeNo(contactDetails.homeNo),
        workNoError:validateWorkNo(contactDetails.workNo),
        notesError:validateNotes(contactDetails.notes),
        officeNoError:validateOfficeNo(contactDetails.officeNo),
        personalNoError:validatePersonalNo(contactDetails.personalNo),
        birthdateError:validateBirthDate(contactDetails.birthdate)
    }

    //errors object captures all the validation errors
    let errorMessages = Object.values(errors).filter(e => e !== '');

    //if no errors, push the contact to contacts array
    if (errorMessages.length === 0) {
        contacts.push(contactDetails);
        return true;
    }
    else {
        //display validation summary with error messages
        displayValidationSummary(errorMessages);

        //display error messages alongside the input fields
        displayIndividualErrorMessages(errors)

        return false;
    }

}

//function to display validation summary with error messages provided
function displayValidationSummary(errorMessages) {

    let list = '';
    errorMessages.map(e => `<li>${e}</li>`).forEach(item => {
        list += item;
    });
    document.getElementsByTagName('ul')[0].innerHTML = list;
}
//function to display error messages alongside the input fields
function displayIndividualErrorMessages(errorMessages) {

    document.getElementById('firstNameError').innerText = errorMessages.firstNameError;
    document.getElementById('lastNameError').innerText = errorMessages.lastNameError;
    document.getElementById('emailError').innerText = errorMessages.emailError;
    document.getElementById('homeNoError').innerText = errorMessages.homeNoError;
    document.getElementById('workNoError').innerText = errorMessages.workNoError;
    document.getElementById('notesError').innerText = errorMessages.notesError;
    document.getElementById('officeNoError').innerText = errorMessages.officeNoError;
    document.getElementById('personalNoError').innerText = errorMessages.personalNoError;
    document.getElementById('birthdateError').innerText = errorMessages.birthdateError;
    
}

//function to validate firstName
const validateUserName = (userName) => {
    if (userName === '' || userName === undefined || userName === null){
        return "Username cannot be left blank";
    }
    else
        return "";
}


//function to validate lastName
const validateLastName = (lastname) => {
    if (lastname === '' || lastname === undefined || lastname === null){
        return "Lastname cannot be left blank";
    }
    else
        return "";
}

//function to validate email
const validateEmail = (email) => {
    let emailError = '';
    let validRegex = "^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$";

    if (email === '' || email === undefined || email === null)
        emailError += "Email cannot be left blank";

    else if (!email.match(validRegex))
        emailError += 'Invalid Email';

    return emailError;

}

//function to validate home no 099 999 9999
const validateHomeNo = (contactNo) => {
    let contactNoError = '';
    let validRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    if (contactNo === '' || contactNo === undefined || contactNo === null)
        contactNoError += "HomeNo cannot be left blank";

    else if (!contactNo.match(validRegex))
        contactNoError += 'Invalid ContactNo';

    return contactNoError;
}

//function to validate work no
const validateWorkNo = (contactNo) => {
    let contactNoError = '';
    let validRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    if (contactNo === '' || contactNo === undefined || contactNo === null)
        contactNoError += "WorkNo cannot be left blank";

    else if (!contactNo.match(validRegex))
        contactNoError += 'Invalid ContactNo';

    return contactNoError;
}

//function to validate additional office no


const validateOfficeNo = (officeNo) =>{
    var officeNO = document.getElementById('toggleContact');
    let officeNoError = '';
    let validRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    
        if (!officeNo.match(validRegex)){
            officeNoError += 'Invalid ContactNo1';
        }
    
    return officeNoError;
}

//function to validate additional personal no
const validatePersonalNo = (personalNo) =>{
    let personalNoError = '';
    let validRegex =/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    if (!personalNo.match(validRegex))
        personalNoError += 'Invalid ContactNo2';

    return personalNoError;
}


//function to validate notes
const validateNotes = (notes) => {
    let notesError = '';
    if (notes === '' || notes === undefined || notes === null)
        notesError += "Notes cannot be left blank";
    else if (notes.length > 200)
        notesError = 'Notes should contain maximum of 200 characters';
    return notesError;
}

//disable all dates for whom age is less than 18
const validateBirthDate = (birthdate) =>{
    
    
    var birthDate = document.getElementById('birthdate').value;
    var splittedString = birthDate.split("-");
    var date = new Date();
    if(date.getFullYear()-splittedString[0]<18){
        return "Your age is less than 18";
    }else if (birthdate === '' || birthdate === undefined || birthdate === null){
        return "Birthdate cannot be left blank";
    }
    return "";
}

let birthdate = document.getElementById('birthdate');
birthdate!==null ? birthdate.setAttribute('max', new Date('september 20, 2003 12:00:00').toISOString().split('T')[0]):birthdate;