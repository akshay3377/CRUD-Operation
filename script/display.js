// ------------------------fetching data from localStorage---------------------------------
const getLocalStorage = window.localStorage.getItem('formDataArray')
const parsedDataArray = JSON.parse(getLocalStorage)

const mainTable = document.getElementById('tableBody')

//---------------------- creating & adding data into Table row-----------------------------

for (let i = 0; i < parsedDataArray.length; i++) {


  const tr = document.createElement('tr')
  mainTable.appendChild(tr)

  const td0 = document.createElement('td')
  // td0.innerHTML = parsedDataArray[i].USER_ID
  tr.appendChild(td0)

  const dataLink = document.createElement('a')
  dataLink.href = 'particular.html'
  dataLink.id = 'listing'
  dataLink.innerHTML = parsedDataArray[i].USER_ID
  td0.appendChild(dataLink)
  dataLink.addEventListener('click', () => {
    particular(`${parsedDataArray[i].USER_ID}`)
    // window.location.href = 'particular.html'
  })

  const td1 = document.createElement('td')
  td1.innerHTML = parsedDataArray[i].FIRST_NAME
  tr.appendChild(td1)

  const td2 = document.createElement('td')
  td2.innerHTML = parsedDataArray[i].LAST_NAME
  tr.appendChild(td2)

  const td3 = document.createElement('td')
  td3.innerHTML = parsedDataArray[i].DOB
  tr.appendChild(td3)

  const td4 = document.createElement('td')
  td4.innerHTML = parsedDataArray[i].SERVICE
  tr.appendChild(td4)

  const td5 = document.createElement('td')
  td5.innerHTML = parsedDataArray[i].EXPIRY
  tr.appendChild(td5)

  const td6 = document.createElement('td')
  td6.innerHTML = parsedDataArray[i].BIO
  tr.appendChild(td6)

}


// ------------------ convert date will convert date into number ------------------
function convertDate(date) {
  const p = date.split("/");
  return +(p[2] + p[1] + p[0]);
}


// -------------------------------this function will sort Expiry date in ascending order-------------------------
function sortByExpiryDate(str) {
  const tbody = document.querySelector("#tableData tbody");
  const rows = [].slice.call(tbody.querySelectorAll("tr"));

  rows.sort((a, b) => {
    return convertDate(a.cells[str].innerHTML) - convertDate(b.cells[str].innerHTML);
  });

  rows.forEach((element) => {
    tbody.appendChild(element);
  })
}



// -------------------------------this function will sort Date of Birth in ascending order-------------------------
function sortByDateOfBirth(str) {
  const tbody = document.querySelector("#tableData tbody");
  const rows = [].slice.call(tbody.querySelectorAll("tr"));

  const emptyDOB = []
  for (let i = 0; i < rows.length; i++) {
    const allRows = rows[i];
    const tableCell = allRows.cells[str];
    const cellValue = tableCell.innerHTML

    if (cellValue == "") {
      emptyDOB.push(rows[i])
    }
  }

  rows.sort((a, b) => {
    return convertDate(a.cells[str].innerHTML) - convertDate(b.cells[str].innerHTML);
  });

  const dobData = [...rows, ...emptyDOB]
  dobData.forEach((element) => {
    tbody.appendChild(element);
  })
}



// ---------------------------this function will sort Expiry date List in ascending order-----------------------
const sortByExpiryDateButton = document.getElementById('btnSortExpiryDate')
sortByExpiryDateButton.addEventListener("click", () => {
  sortByExpiryDate(5)
});


// ---------------------------this function will Date of birth List in ascending order-----------------------
const sortByDOBButton = document.getElementById('btnSortDateOfBirth')
sortByDOBButton.addEventListener("click", () => {
  sortByDateOfBirth(3)
});


