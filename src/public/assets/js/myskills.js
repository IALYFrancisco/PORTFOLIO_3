var profile = document.querySelector('.border')
var dropdown = document.querySelector('.dropdown-container')

var overlay = document.querySelector('.overlay')

if(profile){
   profile.addEventListener('click', () => {
      dropdown.classList.toggle('active')
   })
}

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