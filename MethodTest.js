// For input fields tags
let a_id = document.getElementById("record_id_field");
let a_name = document.getElementById("article_name_field");
let a_body = document.getElementById("article_body_field");
let a_date = document.getElementById("date_field")

// Creates new XMLHTTPRequest
function createXHR(){
    try{ return new XMLHttpRequest(); } catch(e){}
    alert("XMLHttpRequest not supported");
    return null;
}
// Helper function to produce an encoded URI from input fields
function formURI(el){
    info = el.name + "=" +encodeURIComponent(el.value) +"&";
    return info;
}

// Post request helper function
function handlePost(xhr){
    if(xhr.readyState ==4 && xhr.status ==200){
        document.getElementById("Response").innerHTML= "POST Response URL: "+ xhr.responseURL +"<br>"+ "POST Response Text:" +"<br></br>"+ xhr.responseText;
        console.log('POST Request Received')
    }
}

// Get request helper function
function handleGet(xhr){
    if(xhr.readyState ==4 && xhr.status ==200){
        document.getElementById("Response").innerHTML = "GET Response URL: "+ xhr.responseURL +"<br>"+ "GET Response Text: "+"<br></br>"+ xhr.responseText;
        console.log("GET Response Received");
    }
}

// Put request helper function
function handlePut(xhr){
    if(xhr.readyState ==4 && xhr.status ==200){
        document.getElementById("Response").innerHTML= "PUT Response URL: "+ xhr.responseURL +"<br>"+ "PUT Response Text: " +"<br></br>"+ xhr.responseText;
        console.log('PUT Request Received')
    }
}

// Delete request helper function
function handleDelete(xhr){
    if(xhr.readyState ==4 && xhr.status ==200){
        document.getElementById("Response").innerHTML= "DELETE Response URL: "+ xhr.responseURL +"<br>"+ "DELETE Response Text: " +"<br></br>"+ xhr.responseText;
        console.log('DELETE Request Received')
    }
}

// Performs post request
function postRequest(){
    document.getElementById("Response").innerHTML= "Waiting for response...";
    document.getElementById("date_field").value= new Date(Date.now());
    info = formURI(a_id) + formURI(a_name) + formURI(a_body) + formURI(a_date);
    //console.log("URI sent: " + info);

    var xhr = createXHR();

    if(xhr){
        xhr.open("POST","https://httpbin.org/post",true );
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onreadystatechange = function(){handlePost(xhr)};
        xhr.timeout=15000;
        xhr.send(info);
        console.log("POST Response sent");
    }
}

// Performs get request
function getRequest(){
    var xhr = createXHR();
    document.getElementById("date_field").value= new Date(Date.now());
    info = formURI(a_id);
    //console.log("URI sent: " + info);

    if(xhr){
        xhr.open("GET","https://httpbin.org/get" + "?" + info,true );
        xhr.onreadystatechange = function(){handleGet(xhr)};
        xhr.timeout=15000;
        xhr.send();
        console.log('GET Request sent')
    }

}

// Performs put request
function putRequest(){
    document.getElementById("Response").innerHTML= "Waiting for response...";
    document.getElementById("date_field").value= new Date(Date.now());
    var xhr = createXHR();

    info = formURI(a_id) + formURI(a_name) + formURI(a_body) + formURI(a_date);

    if(xhr){
        xhr.open("PUT","https://httpbin.org/put",true );
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onreadystatechange = function(){handlePut(xhr)};
        xhr.timeout=15000;
        xhr.send(info);
        console.log("PUT Response sent");
    }

}

// Performs delete request
function deleteRequest(){
    document.getElementById("Response").innerHTML= "Waiting for response...";
    document.getElementById("date_field").value= new Date(Date.now());
    var xhr = createXHR();

    info = formURI(a_id);

    if(xhr){
        xhr.open("DELETE","https://httpbin.org/delete"+"?"+ info,true );
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onreadystatechange = function(){handleDelete(xhr)};
        xhr.timeout=15000;
        xhr.send();
        console.log("DELETE Response sent");
    }

}