var profile = document.querySelector('.border')
var dropdown = document.querySelector('.dropdown-container')

var overlay = document.querySelector('.overlay')

if(overlay){
   document.getElementById('toggleBtn').addEventListener('click', () => {
      overlay.classList.toggle('active')
   })
}

if(profile){
   profile.addEventListener('click', () => {
      console.log(dropdown.classList)
      dropdown.classList.toggle('active')
   })
}