//---------------- only alphabets regex-----------------
const specialChars = /^[a-zA-Z]+$/;

//---------------onError OBJECT-------------------
const setError = {
    EMPTY_INPUT: '*empty',
    INVALID_INPUT: '*invalid',
    SELECT_INPUT: '*select a service',
    EMPTY_DATE: `*expiry date can't be empty`
}

// ------------- element object access input element by id----------------------
const element = {
    firstName: document.getElementById('idFirstName'),
    lastName: document.getElementById('idLastName'),
    dateOfBirth: document.getElementById('idDOB'),
    service: document.getElementById('idService'),
    expiryDate: document.getElementById('idExpiryDate'),
    bioData: document.getElementById('idBIO')
}



