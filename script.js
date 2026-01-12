// Şifreyi buradan değiştirebilirsin
const DOGRU_SIFRE = "12012026m";

const loginBtn = document.getElementById("loginBtn");
const passwordInput = document.getElementById("passwordInput");
const errorText = document.getElementById("errorText");
const loginScreen = document.getElementById("loginScreen");
const mainSite = document.getElementById("mainSite");
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");




loginBtn.addEventListener("click", () => {
  const girilen = passwordInput.value;
  if (girilen === DOGRU_SIFRE) {
    loginScreen.classList.add("hidden");
    mainSite.classList.remove("hidden");
    loadMessages();
  } else {
    errorText.textContent = "Şifre yanlış!";
  }
});


musicBtn.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    musicBtn.textContent = "⏸ Şarkıyı Durdur";
  } else {
    music.pause();
    musicBtn.textContent = "🎵 Şarkıyı Başlat";
  }
});

const canvas = document.getElementById('confetti-canvas');
const ctx = canvas.getContext('2d');

let confetti = [];
const colors = ['#ff0', '#f00', '#0f0', '#00f', '#f0f', '#0ff', '#fff'];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

// Confetti sınıfı
class Confetto {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height - canvas.height;
    this.size = Math.random() * 10 + 5;
    this.color = colors[Math.floor(Math.random() * colors.length)];
    this.speedY = Math.random() * 3 + 2;
    this.speedX = Math.random() * 2 - 1;
    this.rotation = Math.random() * 360;
    this.rotationSpeed = Math.random() * 10 - 5;
  }

  update() {
    this.y += this.speedY;
    this.x += this.speedX;
    this.rotation += this.rotationSpeed;
    if (this.y > canvas.height) {
      this.y = -10;
      this.x = Math.random() * canvas.width;
    }
  }

  draw() {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rotation * Math.PI / 180);
    ctx.fillStyle = this.color;
    ctx.fillRect(-this.size/2, -this.size/2, this.size, this.size);
    ctx.restore();
  }
}

// Başlangıçta 150 konfeti
for (let i = 0; i < 150; i++) {
  confetti.push(new Confetto());
}

// Animasyon
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  confetti.forEach(c => {
    c.update();
    c.draw();
  });
  requestAnimationFrame(animate);
}

animate();
