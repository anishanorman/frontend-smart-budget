export function EmailValidation(){
  const emailField:HTMLElement = document.getElementById('email')!;
  if (emailField.classList.contains('active')) {
    return true
  }
  else{
    return false
  }
   
};
export default function EmailRequirement(email) {
  const emailPrompt:HTMLElement = document.getElementById ('email_prompt')!;
  const emailField:HTMLElement = document.getElementById('email')!;
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$/;

  function emailCheck() {
    if (email === "") {
      emailField.classList.remove('active');
      emailPrompt.style.display = "none";
    }
    else if(emailRegex.test(email)){
      emailField.classList.toggle('active');
      emailPrompt.style.display = "none";

    }else{
      emailField.classList.remove('active');
      emailPrompt.style.display = "block"; 

    }
  }
  emailField.addEventListener('paste',emailCheck )
  emailField.addEventListener("keyup", emailCheck);
  emailField.addEventListener("keydown", emailCheck);
  emailField.addEventListener("blur",emailCheck);
}