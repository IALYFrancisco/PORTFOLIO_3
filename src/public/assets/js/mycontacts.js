var profile = document.querySelector('.border')
var dropdown = document.querySelector('.dropdown-container')

if(profile){
   profile.addEventListener('click', () => {
      console.log(dropdown.classList)
      dropdown.classList.toggle('active')
   })
}

document.getElementById('toggleBtn').addEventListener('click', (event) => {
   document.getElementById('navResponsive').classList.toggle('active');
})