// Ленивая загрузка изображений для оптимизации производительности
document.addEventListener('DOMContentLoaded', function() {
    // Проверяем поддержку Intersection Observer
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    
                    // Загружаем изображение
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        img.classList.add('loaded');
                        
                        // Удаляем наблюдение за этим изображением
                        imageObserver.unobserve(img);
                    }
                }
            });
        }, {
            // Загружаем изображение за 50px до появления в viewport
            rootMargin: '50px 0px',
            threshold: 0.01
        });

        // Находим все изображения с классом lazy
        const lazyImages = document.querySelectorAll('img.lazy');
        lazyImages.forEach(img => {
            imageObserver.observe(img);
        });
    } else {
        // Fallback для старых браузеров - загружаем все изображения сразу
        const lazyImages = document.querySelectorAll('img.lazy');
        lazyImages.forEach(img => {
            if (img.dataset.src) {
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                img.classList.add('loaded');
            }
        });
    }
});

// CSS для плавного появления изображений
const style = document.createElement('style');
style.textContent = `
    img.lazy {
        opacity: 0;
        transition: opacity 0.3s ease-in-out;
    }
    
    img.loaded {
        opacity: 1;
    }
    
    /* Placeholder для изображений во время загрузки */
    img.lazy::before {
        content: '';
        display: block;
        width: 100%;
        height: 200px;
        background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
        background-size: 200% 100%;
        animation: loading 1.5s infinite;
    }
    
    @keyframes loading {
        0% { background-position: 200% 0; }
        100% { background-position: -200% 0; }
    }
`;
document.head.appendChild(style);