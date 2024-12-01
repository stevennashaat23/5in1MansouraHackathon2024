function switchSlide(type) {
    const loginSlide = document.getElementById('login-slide');
    const registerSlide = document.getElementById('register-slide');
    const container = document.querySelector('.slider-container');
    
    if (type === 'login') {
        loginSlide.classList.add('active');
        registerSlide.classList.remove('active');
        container.style.transform = 'translateX(0)';  // يتحرك السلايد إلى اليسار
    } else {
        registerSlide.classList.add('active');
        loginSlide.classList.remove('active');
        container.style.transform = 'translateX(-100%)';  // يتحرك السلايد إلى اليمين
    }
}

// تعيين السلايد الافتراضي عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    switchSlide('login');
});
