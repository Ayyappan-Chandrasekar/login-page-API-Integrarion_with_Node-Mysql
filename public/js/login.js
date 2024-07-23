document.addEventListener('DOMContentLoaded', () => {
  const loginButton = document.querySelector('.Log-in');
  loginButton.addEventListener('click', Login);
});

function Login(event) {
  // Prevent the default action of the button click
  event.preventDefault();

  // Select login input Email and password
  const email = document.querySelector('.input-email').value;
  const password = document.querySelector('.input-password').value;

  // Validation
  if (email === "" && password === "") {
    alert("Please check that email and password are entered.");
    return false;
  }

  if (email === "") {
    alert("Please check that the email is entered.");
    return false;
  }

  if (password === "") {
    alert("Please check that the password is entered.");
    return false;
  }


  const loginData = {
    email: email,
    password: password
  };

  fetch('http://localhost:8000/login', { // Replace with your actual API endpoint
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(loginData)
  })
  .then(response => respose.json())
  .then(data => {
    if (data.success) {
      alert("Login successful!");
      // window.location.href = "index.html";
    } else {
      alert("Login failed: " + data.message);
    }
  })
  .catch(error => {
    console.error("Error during login:", error);
    alert("An error occurred. Please try again.");
  });
}


// function Login(event) {
//   // select Login input Email, password

//   let email = document.querySelector(".input-email").value;
//   let pass = document.querySelector(".input-password").value;
//   // let Log = document.getElementById("Log-in");

//   event.preventDefault();

//   if (email == "" && pass == "") {
//     alert("Please check email and password is not enter");
//     return false;
//   }

//   if (email == "") {
//     alert("Please check email is not enter");
//     return false;
//   }

//   if (pass == "") {
//     alert("Please check password is not enter");
//     return false;
//   }

//   if (email.length >= 5 && pass.length <= 4) {
//     alert("Login successful!");
//     window.location.href = "index.html";
//     return false;
//   } else {
//     alert("Email mini 5 character and Password max 4");
//     return false;
//   }
// }

// New user signup

function Signup(event) {
  event.preventDefault();
  let signup_btn = document.querySelector(".Signup");
  signup_btn.style.display = "block";
  let Login_btn = document.querySelector(".Login");
  Login_btn.style.display = "none";
}

function Signin(event) {
  event.preventDefault();
  let Signup_btn = document.querySelector(".Signup");
  Signup_btn.style.display = "none";
  let Login_btn = document.querySelector(".Login");
  Login_btn.style.display = "block";
}
