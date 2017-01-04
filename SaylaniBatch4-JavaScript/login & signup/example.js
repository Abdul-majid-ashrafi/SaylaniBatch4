function signUp() {
    var arr = []
    var obj = {
        email: document.getElementById('email').value,
        pass: document.getElementById('password').value
    }
    if (localStorage.user == undefined) {
        arr.push(obj)
        localStorage.setItem("user", JSON.stringify(arr))
    } else {
        var data = localStorage.getItem('user')
        arr = JSON.parse(data)
        arr.push(obj)
        localStorage.setItem("user", JSON.stringify(arr))
    }
    location.href = "login.html"
}
function login() {
    var obj = {
        email: document.getElementById('checkMail').value,
        pass: document.getElementById('checkPass').value
    }
    var data = JSON.parse(localStorage.getItem("user"))
    for (i = 0; i < data.length; i++) {
        if (obj.email == data[i].email && obj.pass == data[i].pass) {
            alert("Login")
        } else {
            console.log("Good bey")
        }
    }
}


