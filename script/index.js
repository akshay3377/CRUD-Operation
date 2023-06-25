// ---------------------this event will open User form---------------------------------
const openFormGrid = document.getElementById('crudGrid1')
openFormGrid.addEventListener('click', () => {
  window.location.href = "form.html"
})


// ---------------------this event will open Database list---------------------------------
const databaseGrid = document.getElementById('crudGrid2')
databaseGrid.addEventListener('click', () => {
  window.location.href = "displayData.html"

})


//// ----------------------reload delete modal---------------------
$('#exampleModal1').on('hidden.bs.modal', function () {
  location.reload();
})


// -------------delete button will delete a record from Database-----------
const deleteButton = document.getElementById('iddeleteBtn')
deleteButton.addEventListener('click', async (e) => {
  e.preventDefault()
  const toastNotification = document.getElementById('toastMessage')
  try {
    let result = await deleteRecord()
    toastNotification.innerHTML = result
  }
  catch (error) {
    toastNotification.innerHTML = error
  }
  finally {
    const tost = document.getElementById('liveToast')
    tost.classList.remove('hide')
    tost.classList.add('show')
  }
})

