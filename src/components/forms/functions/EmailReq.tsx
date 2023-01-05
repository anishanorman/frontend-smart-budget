export function EmailValid(){
  const emailField:HTMLElement = document.getElementById('email')!;
  if (emailField.classList.contains('active')) {
    return true
  }
  else{
    return false
  }
   
};
export default function EmailReq(email) {
  const emailPrompt:HTMLElement = document.getElementById ('email_prompt')!;
  const emailField:HTMLElement = document.getElementById('email')!;
  const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

  function emailCheck() {
    if(emailRegex.test(email)){
      emailField.classList.toggle('active');
      emailPrompt.style.display = "none";
    }else{
      emailPrompt.style.display = "block"; 
    }
  }
  emailField?.addEventListener("keyup", emailCheck);

  emailField?.addEventListener("focus", function () {
    if (EmailValid () === true ){
      emailPrompt.style.display = "none";
    }
    else{
      emailPrompt.style.display = "block"; 
    }
    emailField?.addEventListener("blur", function () {
      if (emailPrompt){
        emailPrompt.style.display = "none";
      }
    });
  });
}