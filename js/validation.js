export function validateForm(){
  let isValide = true;

  const name = document.getElementById("name").value;
  console.log("my name is ", name);
  const email = document.getElementById("email").value;
  console.log("my email is ", email);
  const password = document.getElementById("password").value;
  console.log("my password is ", password);

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");
  
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

