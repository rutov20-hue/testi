// Аналитика и отслеживание производительности
document.addEventListener('DOMContentLoaded', function() {
    // Отслеживание производительности загрузки страницы
    if ('performance' in window) {
        window.addEventListener('load', function() {
            setTimeout(function() {
                const perfData = performance.getEntriesByType('navigation')[0];
                
                if (perfData) {
                    const loadTime = perfData.loadEventEnd - perfData.loadEventStart;
                    const domContentLoaded = perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart;
                    const totalTime = perfData.loadEventEnd - perfData.fetchStart;
                    
                    console.log('Performance Metrics:');
                    console.log('Load Time:', loadTime + 'ms');
                    console.log('DOM Content Loaded:', domContentLoaded + 'ms');
                    console.log('Total Time:', totalTime + 'ms');
                    
                    // Отправка метрик (здесь можно добавить отправку на сервер аналитики)
                    trackPerformance({
                        loadTime: loadTime,
                        domContentLoaded: domContentLoaded,
                        totalTime: totalTime,
                        page: window.location.pathname
                    });
                }
            }, 0);
        });
    }
    
    // Отслеживание взаимодействий пользователя
    trackUserInteractions();
    
    // Отслеживание ошибок JavaScript
    trackErrors();
});

function trackPerformance(metrics) {
    // Сохранение метрик в localStorage для демонстрации
    const performanceData = JSON.parse(localStorage.getItem('performanceMetrics') || '[]');
    performanceData.push({
        ...metrics,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        viewport: {
            width: window.innerWidth,
            height: window.innerHeight
        }
    });
    
    // Ограничиваем количество записей
    if (performanceData.length > 50) {
        performanceData.shift();
    }
    
    localStorage.setItem('performanceMetrics', JSON.stringify(performanceData));
}

function trackUserInteractions() {
    // Отслеживание кликов по навигации
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            trackEvent('navigation', 'click', this.textContent.trim());
        });
    });
    
    // Отслеживание кликов по карточкам путешествий
    document.querySelectorAll('.card-button').forEach(button => {
        button.addEventListener('click', function() {
            const card = this.closest('.travel-card');
            const title = card ? card.querySelector('.card-title').textContent.trim() : 'Unknown';
            trackEvent('travel_card', 'click', title);
        });
    });
    
    // Отслеживание смены языка
    document.addEventListener('click', function(e) {
        if (e.target.closest('.lang-option')) {
            const lang = e.target.closest('.lang-option').getAttribute('data-lang');
            trackEvent('language', 'change', lang);
        }
    });
    
    // Отслеживание смены темы
    document.addEventListener('click', function(e) {
        if (e.target.closest('.theme-toggle')) {
            const isDark = document.body.classList.contains('dark-theme');
            trackEvent('theme', 'toggle', isDark ? 'light' : 'dark');
        }
    });
}

function trackErrors() {
    window.addEventListener('error', function(e) {
        trackEvent('javascript_error', 'error', {
            message: e.message,
            filename: e.filename,
            lineno: e.lineno,
            colno: e.colno
        });
    });
    
    window.addEventListener('unhandledrejection', function(e) {
        trackEvent('promise_rejection', 'error', {
            reason: e.reason
        });
    });
}

function trackEvent(category, action, label) {
    const eventData = {
        category: category,
        action: action,
        label: label,
        timestamp: new Date().toISOString(),
        page: window.location.pathname,
        userAgent: navigator.userAgent
    };
    
    // Сохранение событий в localStorage для демонстрации
    const events = JSON.parse(localStorage.getItem('analyticsEvents') || '[]');
    events.push(eventData);
    
    // Ограничиваем количество записей
    if (events.length > 100) {
        events.shift();
    }
    
    localStorage.setItem('analyticsEvents', JSON.stringify(events));
    
    console.log('Event tracked:', eventData);
}

// Функция для получения отчета по аналитике (для демонстрации)
function getAnalyticsReport() {
    const performance = JSON.parse(localStorage.getItem('performanceMetrics') || '[]');
    const events = JSON.parse(localStorage.getItem('analyticsEvents') || '[]');
    
    return {
        performance: performance,
        events: events,
        summary: {
            totalEvents: events.length,
            avgLoadTime: performance.length > 0 ? 
                performance.reduce((sum, p) => sum + p.totalTime, 0) / performance.length : 0,
            mostVisitedPages: getMostVisitedPages(events),
            preferredLanguage: getPreferredLanguage(events)
        }
    };
}

function getMostVisitedPages(events) {
    const pageViews = {};
    events.forEach(event => {
        if (event.category === 'navigation') {
            pageViews[event.page] = (pageViews[event.page] || 0) + 1;
        }
    });
    
    return Object.entries(pageViews)
        .sort(([,a], [,b]) => b - a)
        .slice(0, 5);
}

function getPreferredLanguage(events) {
    const langChanges = events.filter(e => e.category === 'language');
    if (langChanges.length === 0) return 'ru';
    
    return langChanges[langChanges.length - 1].label;
}

// Экспорт функций для использования в консоли
window.getAnalyticsReport = getAnalyticsReport;