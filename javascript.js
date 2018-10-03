function playMusic() {
  buttontext = document.getElementById('playbutton')
  if (buttontext.innerHTML=="Playing") {
    buttontext.innerHTML = "Generate Music"
  }
  else {
    buttontext.innerHTML = "Playing"    
  }
}
