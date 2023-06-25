





function particular(id) {

    const getLocalStorage = window.localStorage.getItem('formDataArray')
    const parseData = JSON.parse(getLocalStorage)

    const found = parseData.find((user) => user.USER_ID == id)
    const a = document.getElementById('user')

    a.innerHTML = "mdfjkv"



}


