// Интерактивная карта путешествий
document.addEventListener('DOMContentLoaded', function() {
    const markers = document.querySelectorAll('.marker');
    
    // Соответствие маркеров и страниц
    const countryLinks = {
        'paris': 'travel-1.html',
        'switzerland': 'travel-2.html',
        'tokyo': 'travel-3.html',
        'greece': 'travel-4.html',
        'bali': 'travel-5.html',
        'newyork': 'travel-6.html',
        'iceland': 'travel-7.html'
    };
    
    // Названия для подсказок
    const countryNames = {
        'paris': 'Париж, Франция',
        'switzerland': 'Швейцария',
        'tokyo': 'Токио, Япония',
        'greece': 'Санторини, Греция',
        'bali': 'Бали, Индонезия',
        'newyork': 'Нью-Йорк, США',
        'iceland': 'Исландия'
    };
    
    markers.forEach(marker => {
        const country = marker.getAttribute('data-country');
        
        // Добавляем подсказку при наведении
        marker.addEventListener('mouseenter', function(e) {
            const tooltip = document.createElement('div');
            tooltip.className = 'map-tooltip';
            tooltip.textContent = countryNames[country];
            tooltip.style.position = 'absolute';
            tooltip.style.left = e.pageX + 'px';
            tooltip.style.top = (e.pageY - 40) + 'px';
            document.body.appendChild(tooltip);
            
            marker.tooltipElement = tooltip;
        });
        
        marker.addEventListener('mouseleave', function() {
            if (marker.tooltipElement) {
                marker.tooltipElement.remove();
                marker.tooltipElement = null;
            }
        });
        
        // Переход на страницу при клике
        marker.addEventListener('click', function() {
            if (countryLinks[country]) {
                window.location.href = countryLinks[country];
            }
        });
    });
});
