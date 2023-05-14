var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["first"] = document.getElementById("first").value;
    formData["last"] = document.getElementById("last").value;
    formData["portal"] = document.getElementById("portal").value;
    
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.first;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.last;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.portal;
    cell4 = newRow.insertCell(3);
    
    cell4.innerHTML = `<a style='color:#fff;  text-decoration: none;' onClick="onEdit(this)">Edit</a>
                       <a style='color:#fff;  text-decoration: none;' onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("first").value = "";
    document.getElementById("last").value = "";
    document.getElementById("portal").value = "";
    
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("first").value = selectedRow.cells[0].innerHTML;
    document.getElementById("last").value = selectedRow.cells[1].innerHTML;
    document.getElementById("portal").value = selectedRow.cells[2].innerHTML;
   
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.first;
    selectedRow.cells[1].innerHTML = formData.last;
    selectedRow.cells[2].innerHTML = formData.portal;
   
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("first").value == "") {
        isValid = false;
        document.getElementById("nameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("nameValidationError").classList.contains("hide"))
            document.getElementById("nameValidationError").classList.add("hide");
    }
    return isValid;
}