var seeLoreProjectBtn = document.getElementById('seeMoreProjectBtn');
var profile = document.querySelector('.border')
var dropdown = document.querySelector('.dropdown-container')
var overlay = document.querySelector('.overlay')

seeLoreProjectBtn.addEventListener("click", (event) => {
       
    let listProjetContainer = document.querySelector('.list_project');

    listProjetContainer.classList.toggle("toogled");

    let textIncitation = document.querySelector('p.incitation');

    textIncitation.classList.toggle("toggled");

})

if(overlay){
   document.getElementById('toggleBtn').addEventListener('click', () => {
      overlay.classList.add('active')
      document.querySelector(".overlay ul").classList.add('active')
   })
   document.querySelector('.close').addEventListener('click', () => {
      overlay.classList.remove('active')
      document.querySelector(".overlay ul").classList.remove('active')
   })
}

if(profile){
   profile.addEventListener('click', () => {
      dropdown.classList.toggle('active')
   })
}