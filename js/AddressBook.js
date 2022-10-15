var selectedRow = null
function onFormSubmit(){
var formData=readFormData();
if(selectedRow == null)
insertNewRecord(formData);
else
updateRecord(formData);
resetForm();
}
function readFormData() {
  var FormData = {};
  formData["fullName"] = document.getElementById("fullName").Value;
  formData["address"] = document.getElementById("address").Value;
  formData["state"] = document.getElementById("state").Value;
  formData["city"] = document.getElementById("city").Value;
  formData["zipcode"] = document.getElementById("zipcode").Value;
  formData["phoneNumber"] = document.getElementById("phoneNumber").Value;
return formData;
}
function insertNewRecord(data){
  var table= document.getElementById("AddressBook").getElementsByTagName('tbody')[0];
  var newrow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML =data.fullName;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML =data.address;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML =data.state;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML =data.city;
  cell5 = newRow.insertCell(4);
  cell5.innerHTML =data.zipcode;
  cell6 = newRow.insertCell(5);
  cell6.innerHTML =data.phoneNumber;
  cell7 = newRow.insertCell(6);
  cell7.innerHTML=`<a onClick="onEdit(this)">Edit</a>
                   <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm(){
  document.getElementById("fullName").Value="";
  document.getElementById("address").Value="";
  document.getElementById("state").Value="";
  document.getElementById("city").Value="";
  document.getElementById("zipcode").Value="";
  document.getElementById("phoneNumber").Value="";
  selectedRow=null;
}
function onEdit(td){
  selectedRow = td.parentElement.parentElement;
  document.getElementById("fullName").Value= selectedRow.cells[0].innerHTML;
  document.getElementById("address").Value= selectedRow.cells[1].innerHTML;
  document.getElementById("state").Value= selectedRow.cells[2].innerHTML;
  document.getElementById("city").Value= selectedRow.cells[3].innerHTML;
  document.getElementById("zipcode").Value= selectedRow.cells[4].innerHTML;
  document.getElementById("phoneNumber").Value= selectedRow.cells[5].innerHTML;
  
}
function updateRecord(formData){
  selectedRow.cells[0].innerHTML=formData.fullName;
  selectedRow.cells[1].innerHTML=formData.address;
  selectedRow.cells[2].innerHTML=formData.state;
  selectedRow.cells[3].innerHTML=formData.city;
  selectedRow.cells[4].innerHTML=formData.zipcode;
  selectedRow.cells[5].innerHTML=formData.phoneNumber;
}
function onDelete(td){
  if(confirm('Confirm to delete')){
  row = td.parentElement.parentElement;
  document.getElementById("AddressBook").deleteRow(row.rowIndex);
resetForm();
}
}
function myFunction(){
  window.location.href="C:\Users\sanji\OneDrive\Desktop\Vs_code\AddressBookWorkshop\pages\AddDetails.html";
}