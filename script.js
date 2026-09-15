
const video = document.querySelector('.vd1 video');
const playBtn = document.querySelector('.play-button');

playBtn.addEventListener('click', (e)=>{
  e.preventDefault();
  if(video.paused){
    video.play();
    video.controls = true;
    playBtn.classList.add('playing');
  } else {
    video.pause();
    playBtn.classList.remove('playing');
  }
});

video.addEventListener('click', ()=>{
  if(!video.paused){
    video.pause();
    playBtn.classList.remove('playing');
  }
});

video.addEventListener('ended', ()=>{
  playBtn.classList.remove('playing');
  video.controls = false;
});

  const form = document.querySelector('.newsletter-form');
  const popup = document.getElementById('successPopup');
  const closeBtn = document.getElementById('closePopup');

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const emailInput = this.querySelector('input[type="email"]');
    
    if (emailInput.checkValidity()) {
      // Show popup
      popup.classList.add('active');
      this.reset();

      // Auto hide after 3 seconds
      setTimeout(() => {
        popup.classList.remove('active');
      }, 3000);
    }
  });

  // Close on button or overlay click
  closeBtn.addEventListener('click', () => popup.classList.remove('active'));
  popup.addEventListener('click', (e) => {
    if (e.target === popup) popup.classList.remove('active');
  });
