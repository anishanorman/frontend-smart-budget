
export default function PasswordMeterRd(strength: any) {

  const passwordMeter = document.getElementById("password_meter");
  document.getElementById("password")?.addEventListener("focus", function () {
    if (passwordMeter){
      passwordMeter.style.display = "block";
    }
    document.getElementById("password")?.addEventListener("blur", function () {
      if (passwordMeter){
        passwordMeter.style.display = "none";
      }
    });
  });
  let passwordIndicator = document.querySelectorAll("#password_indicator");
  strength = Math.max(strength, 1);
  passwordIndicator.forEach((element: any) => {
    element.style.width = (strength * 20) + "%"
  });
  if (strength < 2) {
    passwordIndicator.forEach((element: any) => {
      element.innerText = "Weak";
      element.style.color = "#111";
      element.style.background = "#d13636";
    });
  } else if (strength < 4) {
    passwordIndicator.forEach((element: any) => {
      element.innerText = "Medium";
      element.style.color = "#111";
      element.style.background = "#e6da44";
    });
  } else if (strength === 4) {
    passwordIndicator.forEach((element: any) => {
      element.innerText = "Strong";
      element.style.color = "#fff";
      element.style.background = "#20a820";
    });
  }
}
