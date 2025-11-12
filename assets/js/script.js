document.addEventListener('DOMContentLoaded', function() {
  const burger = document.querySelector('.header__burger');
  const mobileMenu = document.querySelector('.header-mobile');
  const closeBtn = document.querySelector('.header-mobile__close');
  
  if (!burger || !mobileMenu || !closeBtn) return;
  
  burger.addEventListener('click', function() {
    mobileMenu.classList.add('active');
    document.body.style.overflow = 'hidden';
  });
  
  closeBtn.addEventListener('click', function() {
    mobileMenu.classList.remove('active');
    document.body.style.overflow = '';
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.contacts__form');
  
  if (!form) return;
  
  const inputs = form.querySelectorAll('.contacts__input');
  const textarea = form.querySelector('.contacts__textarea');
  const button = form.querySelector('.contacts__button');
  const allFields = [...inputs, textarea];
  
  allFields.forEach(field => {
    field.addEventListener('input', function() {
      if (this.value.trim() !== '') {
        this.classList.add('filled');
        this.classList.remove('error');
      } else {
        this.classList.remove('filled');
      }
    });
    
    field.addEventListener('focus', function() {
      this.classList.remove('error');
    });
  });
  
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    let hasErrors = false;
    
    inputs.forEach(input => {
      if (input.value.trim() === '') {
        input.classList.add('error');
        input.classList.remove('filled');
        hasErrors = true;
      } else {
        input.classList.remove('error');
        input.classList.add('filled');
      }
    });
    
    if (hasErrors) {
      return;
    }
    
    button.classList.add('active');
    const buttonText = button.querySelector('.contacts__inner');
    if (buttonText) {
      buttonText.textContent = 'Sent';
    }
  });
});