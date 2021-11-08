//Provide the solution code here

let contacts = [];
window.submitDetail = (e) => {
    e.preventDefault();
    let formData = document.getElementById('contactform')
    let data = Object.fromEntries(new FormData(formData));
    console.log(data);
    let result = submitContacts(data);
    return result;
}

// listen to click of addContact button and add maximum of two additional inputs for inputting Contact Nos.



    //contact object captures all the inputs provided
    const submitContacts = (event) => {
    //errors object captures all the validation errors
    let errors = 
    {
        firstNameError: validateFirstname(event.firstname),
        lastNameError: validateLastName(event.lastname),
        emailError: validateEmail(event.email),
        homeNoError: vaidateHome(event.homeNo),
        workNoError: validateWork(event.workNo),
        birthdateError: validateBirthdate(event.birthdate),
        companyError: validateCompany(event.company),
        jobTitleError: validateJobTitle(event.jobTitle),
        notesError: validateNotes(event.notes) 
    }

    //display validation summary with error messages
    let errorMessages = Object.values(errors).filter(e => e !== '');

    //if no errors, push the contact to contacts array
    if (errorMessages.length === 0) { 
        contacts.push(event);
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

    //contacts can be logged on to console, or can even be updated on UI



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
    document.getElementById('birthdateError').innerText = errorMessages.birthdateError
    document.getElementById('companyError').innerText = errorMessages.companyError;
    document.getElementById('jobTitleError').innerText = errorMessages.jobTitleError;
    document.getElementById('notesError').innerText = errorMessages.notesError;
}


//function to validate firstName
const validateFirstname = (firstname) => {
    if (firstname === '' || firstname === undefined || firstname === null)
        return "Firstname cannot be left blank";
    else
        return "";
}

//function to validate lastName
const validateLastName = (lastname) => {
    if (lastname === '' || lastname === undefined || lastname === null)
        return "Firstname cannot be left blank";
    else
        return "";
}

//function to validate email

const validateEmail = (email) => {
    let emailError = '';
    let validRegex = "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$";

    if (email === '' || email === undefined || email === null)
        emailError += "Email cannot be left blank";
    else if (!email.match(validRegex))
        emailError += 'Invalid Email';

    return emailError;
}

//function to validate home no
const vaidateHome = (homeNo) => {
    let homeNoError = '';
    //to validate following patterns of contact nos
    //0999999999, 099-999-999, (099)-999-9999, (099)9999999, 099 999 9999, 099 999-9999, (099) 999-9999, 099.999.9999
    let validRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    if (homeNo === '' || homeNo === undefined || homeNo === null)
    homeNoError += "ContactNo cannot be left blank";

    else if (!homeNo.match(validRegex))
    homeNoError += 'Invalid ContactNo';

    return homeNoError;
}

//function to validate work no

const validateWork = (workNo) => {
    let workNoError = '';
    //to validate following patterns of contact nos
    //0999999999, 099-999-999, (099)-999-9999, (099)9999999, 099 999 9999, 099 999-9999, (099) 999-9999, 099.999.9999
    let validRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    if (workNo === '' || workNo === undefined || workNo === null)
    workNoError += "ContactNo cannot be left blank";

    else if (!workNo.match(validRegex))
    workNoError += 'Invalid ContactNo';

    return workNoError;
}

//function to validate birthdate

 const validateBirthdate = (birthdate) => { 
    var optimizedBirthday = birthdate.replace(/-/g, "/");

	//set date based on birthday at 01:00:00 hours GMT+0100 (CET)
	var myBirthday = new Date(optimizedBirthday);

	// set current day on 01:00:00 hours GMT+0100 (CET)
	var currentDate = new Date().toJSON().slice(0,10)+' 01:00:00';

	// calculate age comparing current date and borthday
	var myAge = ~~((Date.now(currentDate) - myBirthday)/(31557600000));

	if(myAge < 18) {
     	    return "age can't be less than 18";
        }
        else
        {
	    return "";
	    }
 }

//function to validate Company
const validateCompany = (company) => {
    if (company === '' || company === undefined || company === null)
        return "company name cannot be left blank";
    else
        return "";
}

//function to validate title

const validateJobTitle = (jobTitle) => {
    if (jobTitle === '' || jobTitle === undefined || jobTitle === null)
        return "job title cannot be left blank";
    else
        return "";
}

//function to validate notes

const validateNotes = (notes) => {
    let notesError='';
    if (notes === '' || notes === undefined || notes === null)
    notesError+="notes cannot be left blank";
    else if (notes.length > 200)
    notesError = 'notes should contain maximum of 200 characters';
    return notesError;
}

//disable all dates for whom age is less than 18

let birthdate = document.getElementById('birthdate');
birthdate!==null ? birthdate.setAttribute('max', new Date('september 20, 2003 12:00:00').toISOString().split('T')[0]):birthdate;
