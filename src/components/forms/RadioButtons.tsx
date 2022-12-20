export default function RadioButtons() {
  let annualButton = document.getElementById("annually") as HTMLInputElement;
  let monthlyButton = document.getElementById("monthly") as HTMLInputElement;
  let annual = document.getElementById("annual");
  let month = document.getElementById("month");

  annualButton?.addEventListener("click", function () {
    if (annual && month ){
      annualButton.checked = true;
      monthlyButton.checked = false;
      annual.style.display = "block";
      month.style.display = "none"
      
    }
  });
  monthlyButton?.addEventListener("click", function () {
    if (annual && month ){
      monthlyButton.checked = true;
      annualButton.checked = false;
      month.style.display = "block";
      annual.style.display = "none"
    }
  });
}