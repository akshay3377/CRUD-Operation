// formId, title, placeHolder, inputFieldId, errorFieldId, customSize
createNewInputField('updateForm', 'First name', "FIRSTNAME", 'idFirstName', 'errorFname', "col-md-12")
createNewInputField('updateForm', "Last name", 'LASTNAME', 'idLastName', "errorLname", "col-md-12")

// formId, title, inputFieldId, errorFieldId, datePickerType
createNewDatePicker('updateForm', 'Date of birth', 'idDOB', "errorDOB", "dobDatePicker")

// formId , inputFieldId , errorId , class
createNewServicesDropDown('updateForm', 'idService', 'errorService', 'serviceclass')

// formId, title, inputFieldId, errorFieldId, datePickerType
createNewDatePicker('updateForm', 'Expiry date', "idExpiryDate", 'errorExpiryDate', 'expiryDatePicker')

// formId , inputFieldId , errorId
createNewTextArea('updateForm', 'idBIO', 'errorBIO')

//formid, buttonId , buttonValue , buttonClass
createSubmitButton("updateForm", 'idUpdateFormButton', 'Update', 'btn btn-success')




//--------- this function will get user from database if id gets matched otherwise / show error / user not found-------
const getUserbyIdUpdate = document.getElementById('userIdInput')
getUserbyIdUpdate.addEventListener('input', async () => {
    const showResponse = document.getElementById('checkUserIdResponse')
    showResponse.innerHTML = ""
    try {
        const result = await getUserById()
        showResponse.style.color = "blue"
        showResponse.innerHTML = result
    }
    catch (error) {
        showResponse.innerHTML = error
    }
})


// -----------------------this function will update user data if id gets matched-----------------------------
const updateButton = document.getElementById('idUpdateFormButton')
updateButton.addEventListener('click', async (e) => {
    e.preventDefault()
    try {
        await updateRecord()
        window.location.reload()
    }
    catch (error) {
        console.log(error)
    }
})



// reload update form after closing // otherwise input fields will append // whenever we open update modal section
$('#exampleModal').on('hidden.bs.modal', function () {
    location.reload();
})
