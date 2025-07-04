var profile = document.querySelector('.border')
var dropdown = document.querySelector('.dropdown-container')

if(profile){
   profile.addEventListener('click', () => {
      console.log(dropdown.classList)
      dropdown.classList.toggle('active')
   })
}