// formId, title, placeHolder, inputFieldId, errorFieldId, customSize
createNewInputField('mainForm', 'First name', "FIRSTNAME", 'idFirstName', 'errorFname', "col-md-6")
createNewInputField('mainForm', "Last name", 'LASTNAME', 'idLastName', "errorLname", "col-md-6")

// formId, title, inputFieldId, errorFieldId, datePickerClass
createNewDatePicker('mainForm', 'Date of birth', 'idDOB', "errorDOB", "dobDatePicker")

// formId , inputFieldId , errorId , class
createNewServicesDropDown('mainForm', 'idService', 'errorService', 'serviceclass', 'col-md-12')

// formId, title, inputFieldId, errorFieldId, datePickerType
createNewDatePicker('mainForm', 'Expiry date', "idExpiryDate", 'errorExpiryDate', 'expiryDatePicker')

// formId , inputFieldId , errorId
createNewTextArea('mainForm', "idBIO", 'errorBio')

//formid, buttonId , buttonValue , buttonClass
createSubmitButton('mainForm', 'idSubmitForm', 'Submit', 'btn btn-primary')


// ----------------submit button will submit record into DataBase (local storage)----------------
const submitButton = document.getElementById('idSubmitForm')
submitButton.addEventListener('click', async (e) => {
    e.preventDefault()
    try {
        await addRecord()
        window.location.reload()
    }
    catch (error) {
        console.log(error.message)
    }
})
















