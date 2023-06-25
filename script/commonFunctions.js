// ---------CREATE NEW INPUT FIELD FUNCTION-------------
const createNewInputField = (formId, title, placeHolder, inputFieldId, errorFieldId, customSize) => {
    const div = document.createElement('div')
    div.className = customSize
    document.getElementById(formId).appendChild(div)

    const label = document.createElement('label')
    label.for = "validationCustom01"
    label.className = "form-label fw-bolder"
    label.innerText = `${title}`
    div.appendChild(label)

    const input = document.createElement('input')
    input.type = "text"
    input.id = `${inputFieldId}`
    input.className = "form-control"
    input.placeholder = `${placeHolder}`
    input.addEventListener('input', () => {
        isNameValid(inputFieldId, errorFieldId)
    })
    div.appendChild(input)

    const divError = document.createElement('div')
    divError.className = "error-class"
    divError.id = `${errorFieldId}`
    div.appendChild(divError)
}

// ---------CREATE NEW DATEPICKER INPUT FIELD FUNCTION-------------
const createNewDatePicker = (formId, title, inputFieldId, errorFieldId, datePickerType) => {
    const divDatePicker = document.createElement('div')
    divDatePicker.className = "col-md-12"
    document.getElementById(formId).appendChild(divDatePicker)

    const label = document.createElement('label')
    label.for = "date"
    label.className = "form-label fw-bolder"
    label.innerText = `${title}`
    divDatePicker.appendChild(label)

    const innerDiv = document.createElement('div')
    innerDiv.className = "input-group date"
    divDatePicker.appendChild(innerDiv)

    const input = document.createElement('input')
    input.type = 'text'
    input.className = `${datePickerType} form-control`
    input.id = `${inputFieldId}`
    input.setAttribute('onKeyPress', 'return false')
    input.placeholder = "DD-MM-YYYY"
    innerDiv.appendChild(input)

    const span = document.createElement('span')
    span.className = "input-group-append"
    innerDiv.appendChild(span)

    const innerSpan = document.createElement('span')
    innerSpan.className = "input-group-text bg-white d-block"
    span.appendChild(innerSpan)

    const calenderIcon = document.createElement('i')
    calenderIcon.className = "fa fa-calendar"
    innerSpan.appendChild(calenderIcon)

    const divError = document.createElement('div')
    divError.className = "error-class"
    divError.id = `${errorFieldId}`
    divDatePicker.appendChild(divError)
}

// ---------CREATE NEW SERVICES DROPDOWN FUNCTION-------------
const createNewServicesDropDown = (formId, inputFieldId, errorFieldId, classs) => {
    const div = document.createElement("div");
    div.className = "col-md-12"
    document.getElementById(formId).appendChild(div);

    const label = document.createElement("label");
    label.for = "drop"
    label.className = "form-label fw-bolder";
    label.innerText = "Services";
    div.appendChild(label);

    const select = document.createElement("select");
    select.id = inputFieldId;
    // select.style.display = "flex"
    select.setAttribute("data-placeholder", "Choose a service...");
    // select.name = inputFieldId
    select.className = `${classs} form-control`
    const services = ["", "Food", "Maintenance", "IT", "Software", "F&B", "Residency"];
    for (const value of services) {
        var option = document.createElement("option");
        option.value = value;
        option.innerText = value.charAt(0).toUpperCase() + value.slice(1);
        select.appendChild(option);
    }
    div.appendChild(select);

    const divError = document.createElement('div')
    divError.className = "error-class"
    divError.id = `${errorFieldId}`
    div.appendChild(divError)
}


// const a = document.getElementById("idService_chosen")
// a.setAttribute('width', '437px')


// ---------CREATE NEW TEXTAREA INPUT SECTION FUNCTION-------------
const createNewTextArea = (formId, inputFieldId, errorFieldId) => {

    const divBio = document.createElement('div')
    divBio.className = "col-md-12"
    document.getElementById(formId).appendChild(divBio)

    const label1 = document.createElement('label')
    label1.for = "exampleFormControlTextarea1"
    label1.className = "form-label fw-bolder"
    label1.innerText = 'Bio'
    divBio.appendChild(label1)

    const textArea = document.createElement('textarea')
    textArea.className = "form-control"
    textArea.placeholder = "TELL US ABOUT YOURSELF"
    textArea.id = `${inputFieldId}`
    textArea.rows = '2'
    divBio.appendChild(textArea)

    const divError = document.createElement('div')
    divError.className = "error-class"
    divError.id = `${errorFieldId}`
    divBio.appendChild(divError)
}

// -------------CREATE NEW SUBMIT BUTTON FUNCTION --------------
const createSubmitButton = (formId, buttonId, buttonValue, buttonClass) => {
    const divSubmitBtn = document.createElement('div')
    divSubmitBtn.className = "col-md-12"
    document.getElementById(formId).appendChild(divSubmitBtn)

    const input = document.createElement('input')
    input.id = buttonId
    input.value = buttonValue
    input.type = "button"
    // input.setAttribute('data-bs-dismiss', 'modal')
    input.className = `${buttonClass} col-md-2`
    divSubmitBtn.appendChild(input)
}



//  --------------------------------jquery Expiry Date Calender-----------------------
const expiryDatePickerfunction = $(() => {
    $('.expiryDatePicker').datepicker({
        todayHighlight: true,
        autoclose: true,
        format: 'dd/mm/yyyy',
        startDate: '+1d',
        endDate: '+5y',
    }).on('change', () => {
        const onError = document.getElementById('errorExpiryDate')
        const selectedValue = $('.expiryDatePicker').val()
        const result = selectedValue == "" ? (`*expiry date can't be empty`) : ""
        onError.innerHTML = result
    })

})



//////////////////////////////////

$(document).ready(function () {
    $('.serviceclass').chosen({ width: '100%' }).on('change', () => {
        const onError = document.getElementById('errorService')
        const selectedValue = $('.serviceclass').val()
        const result = selectedValue == "" ? (`*service can't be empty`) : ""
        onError.innerHTML = result
    })
});


//--------------------------------jquery Date of Birth Calender-----------------------
const dateOfBirthFunction = $(function () {
    $('.dobDatePicker').datepicker({
        autoclose: true,
        format: 'dd/mm/yyyy',
        endDate: '-18y'
    })
});


// ----------------------------------------- only A-Z Regex -------------------------------------
const containsSpecialChars = (str) => {
    return specialChars.test(str);
};


// -----------------------------------INPUT NAME VALIDATION FUNCTION----------------------------------
const isNameValid = (idName, errorFieldId) => {
    const userInput = document.getElementById(idName)
    const errorField = document.getElementById(errorFieldId)
    errorField.innerHTML = ""
    let status = true
    try {
        if (userInput.value == "") throw new Error(setError.EMPTY_INPUT)
        if (!containsSpecialChars(userInput.value)) throw new Error(setError.INVALID_INPUT)
    }
    catch (error) {
        errorField.innerHTML = error.message
        errorField.style.visibility = "visible"
        status = false
    }
    return status
}

// -----------------------------------SERVCES DROP DOWN VALIDATION FUNCTION----------------------------------
const isServiceValid = (idName, errorFieldId) => {
    const userInput = document.getElementById(idName)
    const errorField = document.getElementById(errorFieldId)
    errorField.innerHTML = ""
    let status = true
    try {
        if (userInput.value == "") throw new Error(setError.SELECT_INPUT)
    }
    catch (error) {
        errorField.innerHTML = error.message
        errorField.style.visibility = "visible"
        status = false
    }
    return status
};



// -----------------------------------DATE PICKER VALIDATION FUNCTION----------------------------------
const isDateValid = (idName, errorFieldId) => {
    const userInput = document.getElementById(idName)
    const errorField = document.getElementById(errorFieldId)
    errorField.innerHTML = ""
    let status = true
    try {
        if (userInput.value == "") throw new Error(setError.EMPTY_DATE)
    }
    catch (error) {
        errorField.innerHTML = error.message
        errorField.style.visibility = "visible"
        status = false
    }
    return status
}



// -----------------------------------DATE PICKER VALIDATION FUNCTION----------------------------------
const checkAllValidation = () => {
    let status = true;
    try {
        const errorFound = [(isNameValid('idFirstName', 'errorFname')),
        (isNameValid('idLastName', 'errorLname')),
        (isServiceValid('idService', 'errorService')),
        (isDateValid('idExpiryDate', 'errorExpiryDate'))].some((element) => element == false)

        if (errorFound)
            throw new Error('error on final validation')
    }
    catch (error) {
        console.log(error.message)
        status = false
    }
    return status
}



// --------addRecord function will add a record in database-------------------
const addRecord = () => {
    return new Promise((resolve, reject) => {

        const userInformation = {
            USER_ID: `${+new Date()}`,
            FIRST_NAME: element.firstName.value.charAt(0).toUpperCase() + element.firstName.value.slice(1),
            LAST_NAME: element.lastName.value,
            DOB: element.dateOfBirth.value,
            SERVICE: element.service.value,
            EXPIRY: element.expiryDate.value,
            BIO: element.bioData.value
        }

        const getLocalStorage = window.localStorage.getItem('formDataArray')

        if (getLocalStorage == null) {
            window.localStorage.setItem('formDataArray', JSON.stringify([]))
            reject(`server error`)
        }
        if (checkAllValidation()) {
            let parseData = JSON.parse(getLocalStorage)
            parseData.push(userInformation)
            window.localStorage.setItem('formDataArray', JSON.stringify(parseData))
            resolve(`data added into local stroage`)
        }
    })
}


//--------- getUserById function will get a record , and display its value in input field--------------
const getUserById = () => {
    return new Promise((resolve, reject) => {
        const userInputId = document.getElementById('userIdInput').value

        let getLocalStorage = window.localStorage.getItem('formDataArray')
        let parseData = JSON.parse(getLocalStorage)

        const foundUserById = parseData.find((user) => user.USER_ID == userInputId)

        if (foundUserById == undefined) reject('invalid user id')
        if (foundUserById) {
            element.firstName.value = foundUserById.FIRST_NAME
            element.lastName.value = foundUserById.LAST_NAME
            element.dateOfBirth.value = foundUserById.DOB
            element.service.value = foundUserById.SERVICE
            element.expiryDate.value = foundUserById.EXPIRY
            element.bioData.value = foundUserById.BIO
        }
        resolve(`user found successfully`)
    })
}


// ------------------ function will update a record in database if id get matched--------------------
const updateRecord = () => {
    return new Promise((resolve, reject) => {
        const userInputId = document.getElementById('userIdInput').value

        let getLocalStorage = window.localStorage.getItem('formDataArray')
        let parseData = JSON.parse(getLocalStorage)

        const foundUserById = parseData.find((user) => user.USER_ID == userInputId)
        if (foundUserById == undefined) {
            reject('invalid user id')
        }
        if (foundUserById) {
            foundUserById.FIRST_NAME = element.firstName.value.charAt(0).toUpperCase() + element.firstName.value.slice(1)
            foundUserById.LAST_NAME = element.lastName.value
            foundUserById.DOB = element.dateOfBirth.value
            foundUserById.SERVICE = element.service.value
            foundUserById.EXPIRY = element.expiryDate.value
            foundUserById.BIO = element.bioData.value
        }
        if (checkAllValidation()) {
            window.localStorage.setItem('formDataArray', JSON.stringify(parseData))
            resolve(`Data updated successfully`)
        }
    })
}


// --------------deleteRecord function will delete a record from database if id get matched----------------
const deleteRecord = () => {
    return new Promise((resolve, reject) => {
        const userInput = document.getElementById('idDeleteRecord').value

        const getLocalStorage = window.localStorage.getItem('formDataArray')
        const parseData = JSON.parse(getLocalStorage)

        const findIndex = parseData.findIndex((user) => user.USER_ID == userInput)
        if (findIndex == -1) {
            reject('User not found')
        }
        else {
            parseData.splice(findIndex, 1)
            window.localStorage.setItem('formDataArray', JSON.stringify(parseData))
            resolve(`User successfully deleted`)
        }
    })
}

