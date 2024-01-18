// function getData() {
//     //step1: create object of XMLHttpRequest
//     const xHTTP = new XMLHttpRequest();
//     //step2: define a callback funcation
//     xHTTP.onload = function () {
//         console.log(this.response);
//         document.getElementById("Data").innerHTML = this.response;
//     }
//     //step3: create reaquest by using opne method
//     xHTTP.open("GET", "http://localhost:8888/product");
//     xHTTP.send();
// }

function getData(){
    const xmlhttp = new XMLHttpRequest();

    xmlhttp.onload = function () {
        var data = JSON.parse(this.response);
        console.log(data);
        for (let d of data) {
            var tablebody = document.getElementById("t1");
            var tableRow = document.createElement("tr");
            tableRow.innerHTML = `<td>${d.id}</td><td>${d.name}</td><td>${d.price}</td><td>${d.company}</td>`
            tablebody.appendChild(tableRow);
        }

    }
    xmlhttp.open("Get", "http://localhost:8888/product")
    xmlhttp.send();

}


function rmDetails() {
    var id = document.getElementById("proId").value;
    const xHTTP = new XMLHttpRequest();

    xHTTP.onload = function () {
        window.alert("Product Deleted Successfully")
    }
    xHTTP.open("DELETE", `http://localhost:8888/product/${id}`);
    xHTTP.send();
}


function addData() {
    let proObl = {
        name: document.getElementById("Pname").value,
        price: document.getElementById("Pprice").value,
        company: document.getElementById("Pcompany").value,
    }

    const xHTTP = new XMLHttpRequest();
    xHTTP.onload = function () {
        window.alert("added Successfully");
    }
    xHTTP.open("POST", "http://localhost:8888/product")
    xHTTP.setRequestHeader("Content-type", "application/json")
    xHTTP.send(JSON.stringify(proObl));
    document.getElementById("Pname").value="";
    document.getElementById("Pprice").value="";
    document.getElementById("Pcompany").value="";
}

//we make get request 
function getSingleProduct() {
    let id = document.getElementById("pId").value;
    console.log(id);
    const xHTTP = new XMLHttpRequest();
    xHTTP.onload = function () {
        var data = JSON.parse(this.response); //json to js
        window.alert(" Got the data from database Sucessfully");
        console.log(this.response);
        document.getElementById("Div1").innerHTML = `Product name :${data.name} <br> Price:${data.price} <br> Company:${data.company}`

    }
    xHTTP.open("GET", `http://localhost:8888/product/${id}`);
    xHTTP.send();
    document.getElementById("pId").value="";
}

function updateProduct() {
    let id = document.getElementById("pId").value;
    if (window.confirm(`Are You Sure to Update Product with ID : ${id}`)) {
        let productObj = {
            id:id,
            name: document.getElementById("Pname1").value,
            price: document.getElementById("Pprice1").value,
            company: document.getElementById("Pcompany1").value
        }
        let productJson = JSON.stringify(productObj)
        const xHTTP = new XMLHttpRequest();
        xHTTP.onload = function () {
            window.alert("Product Updated Successfully !");
        }
        xHTTP.open("PUT", `http://localhost:8888/product/${id}`)
        xHTTP.setRequestHeader("Content-type", "application/json");
        xHTTP.send(productJson);
        document.getElementById("Pname1").value="";
        document.getElementById("Pprice1").value="";
        document.getElementById("Pcompany1").value="";
    }
}