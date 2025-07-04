var profile = document.querySelector('.border')
var dropdown = document.querySelector('.dropdown-container')

var overlay = document.querySelector('.overlay')

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
      console.log(dropdown.classList)
      dropdown.classList.toggle('active')
   })
}