const firebaseConfig = {
  apiKey: "AIzaSyBopdp7tt7G7iNdPRBf9PKVsFa7aEgAiX0",
  authDomain: "school-88d7c.firebaseapp.com",
  projectId: "school-88d7c",
  storageBucket: "school-88d7c.appspot.com",
  messagingSenderId: "961417385317",
  appId: "1:961417385317:web:a0330ec184f17c0ad17d8c",
  measurementId: "G-1YNV3MVXCH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// initialize variables
const auth = firebase.auth();
const database = firebase.database();

// setting up registering function
function register() {
  // Get all the input fields

  email = document.getElementById("email").value;
  console.log(email);
  password = document.getElementById("password").value;
  // fullName = document.getElementById("fullName").value;
  // course = document.getElementById("course").value;
  // department = document.getElementById("department").value;

  // validating input functions
  if (validate_email(email) == false || validate_password(password)) {
    alert(
      "Your Email and Password is outline. use more than 6 charactors for passsword"
    );
    return;
  }

  if (
    validate_email(email) == false ||
    validate_password(password) ||
    validate_fields(field)
  ) {
    alert("Empity Fields are still available");
    return;
  }

  //now lets go with the auth part using firebase singntacs
  auth
    .createUserWithEmailAndPassword(email, password)
    .then(function () {
      //now lets create our user
      var user = auth.currentUser;

      // add this user to firebase
      var database_ref = database.ref();

      // create user data
      var user_data = {
        email: email,
        full_name: full_name,
        // course: course,
        // department: department,
        last_login: Date.now(),
      };
      database_ref.child("users/" + user.uid).set(user_data);
    })
    .catch(function (error) {
      // firebase will use this if there is any error
      var error_code = error.code;
      var error_message = error.message;
      alert(error_message);
    });
}

function validate_email(email) {
  expression = /^[^@]+@\w+(\.\w+)+\w$/;
  if (expression.text(email) == true) {
    // email is good
    return true;
  } else {
    // email is no good
    return false;
  }
}

function validate_password(password) {
  // it has to be more than 6 letters
  if (password < 6) {
    return false;
  } else {
    return true;
  }
}

function validate_fields(field) {
  // if the fiels are empity false
  if (field == null) {
    return false;
  }
  if (field.length <= 0) {
    return false;
  } else {
    return true;
  }
}
