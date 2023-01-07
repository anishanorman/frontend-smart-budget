let backEndUrl = "https://rails-orqd.onrender.com";

export function UsernameValidation(){
  const usernameFeild:HTMLElement = document.getElementById('username')!;
  if (usernameFeild.classList.contains('active')) {
    return true
  }
  else{
    return false
  }
   
};

export default async function UsernameRequirement(username: string,) {
  const usernameField: HTMLElement = document.getElementById('username')!;
  const usernamePrompt: HTMLElement = document.getElementById('username_prompt')!;
  const loadingAnime: HTMLElement = document.getElementById('loading_animation')!;
  const confirmed: HTMLElement = document.getElementById('tick_confirmed')!;
  const denied: HTMLElement = document.getElementById('cross_confirmed')!;
    
    let inactivity: any
    let requestSent = false;

  async function sendRequest() {
    if (!requestSent) {
      requestSent = true;
      let response: any = await fetch(`${backEndUrl}/users/${username}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });

      if (response.ok) {
        response = await response.json();
        console.log(response);
        usernameField.classList.remove('active')
        usernameField.innerText = "Username is in use. Please try again!";
        loadingAnime.style.opacity = '0';
        denied.style.opacity = "1"
      } 
      else {
        response = await response.json();
        console.log(response);
        usernameField.classList.toggle("active")
        usernamePrompt.style.display ="none"
        loadingAnime.style.opacity = '0'
        confirmed.style.opacity ="1"
       
      }
    }
  };

  function usernameCheck() {
    if (username !== "") {
      usernamePrompt.style.display = "block";
      loadingAnime.style.display = "block";
      if (inactivity) {
        clearTimeout(inactivity);
      }
      inactivity = setTimeout(sendRequest, 10000);
    } 
    else {
      usernamePrompt.style.display = "none";
      loadingAnime.style.display = "none";
      usernameField.classList.remove('active');
      if (inactivity) {
        clearTimeout(inactivity);
      }
    }
  };
  usernameField.addEventListener("keydown", function(event) {
    if (event.key === "Backspace" || event.key === "Delete") {
       if(UsernameValidation()===false){
        usernamePrompt.style.display = "block";
        loadingAnime.style.opacity = '1';
        denied.style.opacity = "0" 
      }
      else{
        usernameField.classList.remove('active') 
        usernamePrompt.style.display = "block";
        loadingAnime.style.opacity = '1';
        confirmed.style.opacity = "0"
      }
    }
  });
  usernameField.addEventListener("blur",function(){
    if (UsernameValidation()===true){
      usernamePrompt.style.display = "none";
      loadingAnime.style.display = "none";
    }
    else if(username ==="" ){
      usernamePrompt.style.display = "none";
    }
    else{
      usernamePrompt.style.display = "block";
      loadingAnime.style.display = "none";
      confirmed.style.opacity = "0"
      denied.style.opacity = "0" 
    }
  });

  usernameField.addEventListener('paste',usernameCheck)
  usernameField.addEventListener('keydown', usernameCheck)
  usernameField.addEventListener('keyup', usernameCheck)
}