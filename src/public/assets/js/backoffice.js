var profile = document.querySelector('.border')
var dropdown = document.querySelector('.dropdown-container')

if(profile){
   profile.addEventListener('click', () => {
      dropdown.classList.toggle('active')
   })
}