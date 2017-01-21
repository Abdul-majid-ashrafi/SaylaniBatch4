function signUp() {
    var arr = [] // empty array
    var obj = {
        name: document.getElementById('name').value,
        age: document.getElementById('age').value,
        email: document.getElementById('email').value,
        pass: document.getElementById('password').value
    }
    if (localStorage.user == undefined) { // Checking user in localStorage exist or not 
        arr.push(obj) // obj is pushing into array 
        localStorage.setItem("user", JSON.stringify(arr)) // Set user in localStorage with JSON.stringify() 
        location.href = "../login/login.html"         // After signup go to login page
    } else {
        var data = localStorage.getItem('user') // Get user from localStorage
        arr = JSON.parse(data) // Convert localStorage data to JSON.parse
        arr.push(obj) // obj is pushing into array 
        localStorage.setItem("user", JSON.stringify(arr)) // Set user in localStorage with JSON.stringify() 
        location.href = "../login/login.html" // After signup go to login page
    }
}
// -------------------- LOGIN -------------------------------
function login() {
    var obj = {
        email: document.getElementById('checkMail').value,
        pass: document.getElementById('checkPass').value
    }
    var data = JSON.parse(localStorage.getItem("user")) // Get user from localStorage with JSON,parse()
    for (i = 0; i < data.length; i++) {
        if (obj.email == data[i].email && obj.pass == data[i].pass) { // Checking your obj value from each localStorage obj
            localStorage.setItem("currentUser", JSON.stringify(data[i])) // Set currentUser into localStorage with JSON.stringify 
            location.href = "../home/home.html" // If login successfully then go to home
        } else if (i == data.length - 1) {  // Checking length of array for invalid user
            console.log("Good bey")
        }
    }
}
// ----------------- Profile -------------------------
function profile() {
    var currentUser = JSON.parse(localStorage.getItem("currentUser")) // Get currentUser for profile
    document.getElementById("profileName").innerHTML = currentUser.name // Property binds
    document.getElementById("profileEmail").innerHTML = currentUser.email // Property binds
    document.getElementById("profileAge").innerHTML = currentUser.age // Property binds
}
// -------------------------logOut--------------------------
function logOut() {
    localStorage.removeItem("currentUser") // Remoce currentUser in localStorage
    location.href = "../login/login.html" // Go to login 
}
