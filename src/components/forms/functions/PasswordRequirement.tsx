export function PasswordValidation() {
  const upperCrt:HTMLElement = document.getElementById('upper_criteria')!;
  const numberCrt:HTMLElement = document.getElementById('number_criteria')!;
  const specialCrt:HTMLElement = document.getElementById('special_criteria')!;
  const characterCrt:HTMLElement= document.getElementById('character_criteria')!;

  if (upperCrt.classList.contains('active') && numberCrt.classList.contains('active') && specialCrt.classList.contains('active') && characterCrt.classList.contains('active')) {
    return true
  } else {
    return false
  }
}

export default function PasswordRequirement(password: string) {
  const passwordPrompt:HTMLElement = document.getElementById ('password_prompt')!;
  const passwordField:HTMLElement = document.getElementById('password')!;
  const upperCrt:HTMLElement = document.getElementById('upper_criteria')!;
  const numberCrt:HTMLElement = document.getElementById('number_criteria')!;
  const specialCrt:HTMLElement = document.getElementById('special_criteria')!;
  const characterCrt:HTMLElement= document.getElementById('character_criteria')!;
  const PasswordCrt:HTMLElement= document.getElementById('password_criteria')!;
  
  
  function checkValidation() {
    if (upperCrt.classList.contains('active') && numberCrt.classList.contains('active') && specialCrt.classList.contains('active') && characterCrt.classList.contains('active')) {
      if (PasswordCrt){
        PasswordCrt.style.border = '2px solid #2D695B';
        passwordPrompt.style.display = "none";
      }
    } else {
      PasswordCrt.style.border = ''
      passwordPrompt.style.display = 'block';
    }
  }

  passwordField?.addEventListener("focus", function () {
    if (PasswordValidation () === true ){
      passwordPrompt.style.display = "none";
    }
    else{
      passwordPrompt.style.display = "block"; 
    }
    passwordField?.addEventListener("blur", function () {
      if (passwordPrompt){
        passwordPrompt.style.display = "none";
      }
    });
  });


  function PasswordUpper() {
    if(upperCrt){
      upperCrt.classList.toggle('active', /[A-Z]/.test(password));
    }
    checkValidation()
  }
  function PasswordNumber() {
    if(numberCrt){
      numberCrt.classList.toggle('active', /[0-9]/.test(password));
    }
    checkValidation()
  }
  function PasswordSpc() {
    if(specialCrt){
      specialCrt.classList.toggle('active', /[^A-Za-z0-9]/.test(password));
    }
    checkValidation()
  }
  function PasswordChar() {
    if(characterCrt){
      characterCrt.classList.toggle('active', password.length >= 9);
    }
    checkValidation()
  }
  passwordField?.addEventListener("keyup", PasswordUpper);
  passwordField?.addEventListener("keyup", PasswordNumber);
  passwordField?.addEventListener("keyup", PasswordSpc);
  passwordField?.addEventListener("keyup", PasswordChar);

}

