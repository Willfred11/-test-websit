const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const captionText = document.getElementById("caption");
const images = document.querySelectorAll(".gallery-img");
const closeBtn = document.getElementById("closeBtn");
const header_roll = document.getElementsByClassName("the_header")

images.forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
    
  });
});



closeBtn.onclick = function () {
  modal.style.display = "none";
};


document.addEventListener('DOMContentLoaded', () => {
  const modal = document.querySelector('.modal');
  const modalImg = document.querySelector('.modal-content img');
  const galleryImages = document.querySelectorAll('.gallery-grid img');

  galleryImages.forEach(img => {
      img.addEventListener('click', () => {
          modal.style.display = 'flex';
          modalImg.src = img.src;
      });
  });

  modal.addEventListener('click', () => {
      modal.style.display = 'none';
  });
});

document.querySelectorAll('.nav_btns a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelectorAll('.nav_btns a').forEach(item => item.classList.remove('active'));
    link.classList.add('active');
  });
});


const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.onscroll = () => {
  scrollToTopBtn.style.display = (document.documentElement.scrollTop > 300) ? "block" : "none";
};

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

const faders = document.querySelectorAll('.fade-in');

const appearOnScroll = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1,
});

faders.forEach(el => appearOnScroll.observe(el));


