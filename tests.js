import {postRequest, getRequest, putRequest, deleteRequest } from "/Methods.js"
export {a_id, a_name, a_body, a_date}

// For input fields tags
let a_id = document.getElementById("record_id_field");
let a_name = document.getElementById("article_name_field");
let a_body = document.getElementById("article_body_field");
let a_date = document.getElementById("date_field")

let postButton = document.getElementById("PostBtn");
let getButton = document.getElementById("GetBtn");
let putButton = document.getElementById("PutBtn");
let deleteButton = document.getElementById("DeleteBtn");

postButton.addEventListener("click", postRequest); 
getButton.addEventListener("click", getRequest); 
putButton.addEventListener("click", putRequest); 
deleteButton.addEventListener("click", deleteRequest); 