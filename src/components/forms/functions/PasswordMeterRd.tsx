
export default function PasswordMeterRd(strength: any) {

  const passwordMeter = document.getElementById("password_meter");
  const passwordField = document.getElementById("password");

  passwordField?.addEventListener("focus", function () {
    if (passwordMeter){
      passwordMeter.style.display = "block";
      
    }
    passwordField?.addEventListener("blur", function () {
      if (passwordMeter){
        passwordMeter.style.display = "none";
      }
    });
  });
  

  let passwordIndicator = document.querySelectorAll("#password_indicator");
    strength = Math.max(strength, 1);
    passwordIndicator.forEach((element: any) => {
    element.style.width = (strength * 23) + "%"
    element.style.display = "flex";
    element.style.alignItems = "center";
    element.style.justifyContent = "center";
    element.style.borderRadius = "10px";
  });
  if (strength < 2) {
    passwordIndicator.forEach((element: any) => {
      element.innerText = "Weak";
      element.style.color = "#FAF9F6";
      element.style.background = "#990000";
      
    });
  } else if (strength < 4) {
    passwordIndicator.forEach((element: any) => {
      element.innerText = "Medium";
      element.style.color = "#FAF9F6";
      element.style.background = "#CC5500";
    });
  } else if (strength === 4) {
    passwordIndicator.forEach((element: any) => {
      element.innerText = "Strong";
      element.style.color = "#FAF9F6";
      element.style.background = "#2d6930";
    });
  }
  
}
