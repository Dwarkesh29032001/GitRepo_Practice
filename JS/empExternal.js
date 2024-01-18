
// //step1: create object of XMLHttpRequest
// // const XMLHTTP = new XMLHttpRequest();
// // //step2: define a callback funcation
// // XMLHTTP.onload = function () {
// //     console.log(this.response);
// //     document.getElementById("Data").innerHTML = this.response;
// // }
// // //step3: create reaquest by using opne method
// // XMLHTTP.open("GET", "http://localhost:8888/Employee");
// // XMLHTTP.send();
// function getEmployeeData() {
//     // Step 1: Create an object of XMLHttpRequest
//     const XMLHTTP = new XMLHttpRequest();

//     // Step 2: Define a callback function
//     XMLHTTP.onload = function () {
//         // Parse the JSON response assuming it's JSON
//         const responseData = JSON.parse(this.response);

//         // Step 4: Display data in a table
//         displayData(responseData);
//     };

//     // Step 3: Create a request using the open method
//     XMLHTTP.open("GET", "http://localhost:8888/Employee");
//     XMLHTTP.send();
// }

// unction getData(){
//     const XMLhttp = new XMLHttpRequest();

//     XMLhttp.onload = function () {
//         var data = JSON.parse(this.response);
//         console.log(data);
//         for (let d of data) {
//             var tablebody = document.getElementById("t1");
//             var tableRow = document.createElement("tr");
//             tableRow.innerHTML = `<td>${d.empid}</td><td>${d.empname}</td><td>${d.empsalary}</td><td>${d.empAddress}</td>`
//             tablebody.appendChild(tableRow);
//         }

//     }
//     XMLhttp.open("Get", "http://localhost:8888/Employee")
//     XMLhttp.send();
// }

function getData() {
    const xmlhttp = new XMLHttpRequest();

    xmlhttp.onload = function () {
        var data = JSON.parse(this.response);
        console.log(data);
        for (let d of data) {
            var tablebody = document.getElementById("t1");
            var tableRow = document.createElement("tr");
            tableRow.innerHTML = `<td>${d.id}</td><td>${d.empname}</td><td>${d.empsalary}</td><td>${d.empAddress}</td>`
            tablebody.appendChild(tableRow);
        }

    }
    xmlhttp.open("Get", "http://localhost:8888/Employee")
    xmlhttp.send();

}

function removeEmpDetails() {
    var id = document.getElementById("id").value;
    const XMLHTTP = new XMLHttpRequest();

    XMLHTTP.onload = function () {
        window.alert("Are You Sure to Delete the Employee of that ID ?")
    }
    XMLHTTP.open("DELETE", `http://localhost:8888/Employee/${id}`);
    XMLHTTP.send();
}

// function addEmployeeData() {
//     let proObl = {
//         empname: document.getElementById("empname").value,
//         empsalary: document.getElementById("empsalary").value,
//         empAddress: document.getElementById("empaddress").value,
//     }

//     const XMLHTTP = new XMLHttpRequest();
//     XMLHTTP.onload = function () {
//         window.alert(" Employee added Successfully");
//     }
//     XMLHTTP.open("POST", "http://localhost:8888/Employee")
//     XMLHTTP.setRequestHeader("Content-type", "application/json")
//     XMLHTTP.send(JSON.stringify(proObl));
//     document.getElementById("empname").value="";
//     document.getElementById("empsalary").value="";
//     document.getElementById("empaddress").value="";
// }

function AddData() {
    // var name = document.getElementById("Ename").value;
    // var pwd = document.getElementById("Epass").value;
    // var salary = document.getElementById("Esal").value;

    let empObj = {
        empname: document.getElementById("empname").value,
        empsalary: document.getElementById("empsalary").value,
        empAddress: document.getElementById("empaddress").value
    }
    // console.log(name, pwd, salary);

    let EmpJSONdata = JSON.stringify(empObj);
    const XMLHTTP = new XMLHttpRequest();
    XMLHTTP.onload = function () {
        window.alert("Employee data added successfully");
    }

    XMLHTTP.open("POST", "http://localhost:8888/Employee");
    // need to pass some header here
    XMLHTTP.setRequestHeader("Content-type","application/json")
    //  xmlhttp.send(productObj);

    // server needs data in json format
    XMLHTTP.send(EmpJSONdata);
    document.getElementById("empname").value="";
    document.getElementById("empsalary").value="";
    document.getElementById("empaddress").value="";
}

//we make get request 
function getSingleEmployee() {
    let ID = document.getElementById("empid").value;
    console.log(ID);
    const XMLHTTP = new XMLHttpRequest();
    XMLHTTP.onload = function () {
        var data = JSON.parse(this.response); //json to js
        window.alert(" Got the data from database Sucessfully");
        console.log(data);
        document.getElementById("empname1").value = data.empname;
        document.getElementById("empsalary1").value = data.empsalary ;
        document.getElementById("empaddress1").value = data.empAddress ;
         `Employee name:${data.empname} <br> 
         Employee Salary:${data.empsalary} <br> Employee Address:${data.empAddress}`
    }
    XMLHTTP.open("GET", `http://localhost:8888/Employee/${ID}`);
    XMLHTTP.send();
    document.getElementById("empid").value="";
}

function updateEmployeeDetails() {
    console.log("Update Function Called !");
    let ID = document.getElementById("empid").value;
    console.log(ID);

    if (window.confirm(`Are You Sure to Update Employee with ID : ${ID}`)) {
        let productObj = {
            id: ID,
            empname: document.getElementById("empname1").value,
            empsalary: document.getElementById("empsalary1").value,
            empAddress: document.getElementById("empaddress1").value
        }

        let productJson = JSON.stringify(productObj);
        const XMLHTTP = new XMLHttpRequest();

        XMLHTTP.onload = function () {
            if (XMLHTTP.status === 200) {
                window.alert("Employee Details Updated Successfully !");
            } else {
                window.alert("Failed to update employee details. Please check server logs for more information.");
            }
        }

        XMLHTTP.open("PUT", `http://localhost:8888/Employee/${ID}`);
        XMLHTTP.setRequestHeader("Content-type", "application/json");
        XMLHTTP.send(productJson);

        document.getElementById("empname1").value = "";
        document.getElementById("empsalary1").value = "";
        document.getElementById("empaddress1").value = "";
    }
}


