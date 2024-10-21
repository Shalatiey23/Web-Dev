function validateForm(){
  let isValide = true;

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const nameError = document.getElementById("nameError").value;
  const emailError = document.getElementById("emailError").value;
  const passwordError = document.getElementById("passwordError").value;
  
  nameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";

  if (name.trim() ===""){
    nameError.textContent = "name cannot be empty";
    isValide = false;
  }

  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailPattern.test(email)){
    emailError.textContent = "please enter a valid email";
    isValide = false;
  }

  if (password,length < 8){
    passwordError.textContent = "password must be at least 8 characters long";
    isValide = false;
  }
  return isValide;
}

