// Мониторинг производительности в реальном времени
class PerformanceMonitor {
    constructor() {
        this.metrics = {
            navigation: {},
            resources: [],
            vitals: {},
            errors: []
        };
        
        this.init();
    }
    
    init() {
        // Ждем полной загрузки страницы
        if (document.readyState === 'complete') {
            this.collectMetrics();
        } else {
            window.addEventListener('load', () => this.collectMetrics());
        }
        
        // Мониторинг Core Web Vitals
        this.monitorWebVitals();
        
        // Мониторинг ошибок
        this.monitorErrors();
        
        // Мониторинг памяти (если поддерживается)
        this.monitorMemory();
    }
    
    collectMetrics() {
        // Навигационные метрики
        if (performance.getEntriesByType) {
            const navigation = performance.getEntriesByType('navigation')[0];
            if (navigation) {
                this.metrics.navigation = {
                    dns: navigation.domainLookupEnd - navigation.domainLookupStart,
                    tcp: navigation.connectEnd - navigation.connectStart,
                    request: navigation.responseStart - navigation.requestStart,
                    response: navigation.responseEnd - navigation.responseStart,
                    dom: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
                    load: navigation.loadEventEnd - navigation.loadEventStart,
                    total: navigation.loadEventEnd - navigation.fetchStart
                };
            }
            
            // Ресурсы
            const resources = performance.getEntriesByType('resource');
            this.metrics.resources = resources.map(resource => ({
                name: resource.name,
                type: this.getResourceType(resource.name),
                duration: resource.duration,
                size: resource.transferSize || 0,
                cached: resource.transferSize === 0 && resource.decodedBodySize > 0
            }));
        }
        
        // Отправляем метрики
        this.reportMetrics();
    }
    
    monitorWebVitals() {
        // First Contentful Paint (FCP)
        if ('PerformanceObserver' in window) {
            try {
                const observer = new PerformanceObserver((list) => {
                    for (const entry of list.getEntries()) {
                        if (entry.name === 'first-contentful-paint') {
                            this.metrics.vitals.fcp = entry.startTime;
                        }
                    }
                });
                observer.observe({ entryTypes: ['paint'] });
            } catch (e) {
                console.warn('Paint timing not supported');
            }
            
            // Largest Contentful Paint (LCP)
            try {
                const lcpObserver = new PerformanceObserver((list) => {
                    const entries = list.getEntries();
                    const lastEntry = entries[entries.length - 1];
                    this.metrics.vitals.lcp = lastEntry.startTime;
                });
                lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
            } catch (e) {
                console.warn('LCP not supported');
            }
            
            // First Input Delay (FID) - приблизительная оценка
            let firstInputTime = null;
            const measureFID = (event) => {
                if (firstInputTime === null) {
                    firstInputTime = performance.now();
                    const processingStart = performance.now();
                    setTimeout(() => {
                        this.metrics.vitals.fid = performance.now() - processingStart;
                    }, 0);
                    
                    // Удаляем слушатели после первого взаимодействия
                    ['click', 'keydown', 'touchstart'].forEach(type => {
                        document.removeEventListener(type, measureFID, true);
                    });
                }
            };
            
            ['click', 'keydown', 'touchstart'].forEach(type => {
                document.addEventListener(type, measureFID, true);
            });
        }
        
        // Cumulative Layout Shift (CLS)
        if ('PerformanceObserver' in window) {
            try {
                let clsValue = 0;
                const clsObserver = new PerformanceObserver((list) => {
                    for (const entry of list.getEntries()) {
                        if (!entry.hadRecentInput) {
                            clsValue += entry.value;
                        }
                    }
                    this.metrics.vitals.cls = clsValue;
                });
                clsObserver.observe({ entryTypes: ['layout-shift'] });
            } catch (e) {
                console.warn('Layout shift not supported');
            }
        }
    }
    
    monitorErrors() {
        // JavaScript ошибки
        window.addEventListener('error', (event) => {
            this.metrics.errors.push({
                type: 'javascript',
                message: event.message,
                filename: event.filename,
                lineno: event.lineno,
                colno: event.colno,
                timestamp: Date.now()
            });
        });
        
        // Необработанные Promise rejections
        window.addEventListener('unhandledrejection', (event) => {
            this.metrics.errors.push({
                type: 'promise',
                message: event.reason,
                timestamp: Date.now()
            });
        });
        
        // Ошибки загрузки ресурсов
        window.addEventListener('error', (event) => {
            if (event.target !== window) {
                this.metrics.errors.push({
                    type: 'resource',
                    element: event.target.tagName,
                    source: event.target.src || event.target.href,
                    timestamp: Date.now()
                });
            }
        }, true);
    }
    
    monitorMemory() {
        if ('memory' in performance) {
            setInterval(() => {
                this.metrics.memory = {
                    used: performance.memory.usedJSHeapSize,
                    total: performance.memory.totalJSHeapSize,
                    limit: performance.memory.jsHeapSizeLimit,
                    timestamp: Date.now()
                };
            }, 5000); // Каждые 5 секунд
        }
    }
    
    getResourceType(url) {
        if (url.match(/\.(css)$/)) return 'css';
        if (url.match(/\.(js)$/)) return 'js';
        if (url.match(/\.(png|jpg|jpeg|gif|webp|svg)$/)) return 'image';
        if (url.match(/\.(woff|woff2|ttf|otf)$/)) return 'font';
        return 'other';
    }
    
    reportMetrics() {
        // Сохраняем в localStorage для демонстрации
        const report = {
            url: window.location.href,
            timestamp: Date.now(),
            userAgent: navigator.userAgent,
            viewport: {
                width: window.innerWidth,
                height: window.innerHeight
            },
            connection: this.getConnectionInfo(),
            metrics: this.metrics
        };
        
        const reports = JSON.parse(localStorage.getItem('performanceReports') || '[]');
        reports.push(report);
        
        // Ограничиваем количество отчетов
        if (reports.length > 20) {
            reports.shift();
        }
        
        localStorage.setItem('performanceReports', JSON.stringify(reports));
        
        // Выводим в консоль для разработки
        console.group('Performance Report');
        console.log('Navigation Timing:', this.metrics.navigation);
        console.log('Core Web Vitals:', this.metrics.vitals);
        console.log('Resources:', this.metrics.resources);
        if (this.metrics.errors.length > 0) {
            console.warn('Errors:', this.metrics.errors);
        }
        console.groupEnd();
        
        // Проверяем производительность и выдаем рекомендации
        this.analyzePerformance();
    }
    
    getConnectionInfo() {
        if ('connection' in navigator) {
            return {
                effectiveType: navigator.connection.effectiveType,
                downlink: navigator.connection.downlink,
                rtt: navigator.connection.rtt,
                saveData: navigator.connection.saveData
            };
        }
        return null;
    }
    
    analyzePerformance() {
        const recommendations = [];
        
        // Анализ времени загрузки
        if (this.metrics.navigation.total > 3000) {
            recommendations.push('Время загрузки превышает 3 секунды. Рекомендуется оптимизация.');
        }
        
        // Анализ Core Web Vitals
        if (this.metrics.vitals.lcp > 2500) {
            recommendations.push('LCP превышает 2.5 секунды. Оптимизируйте загрузку основного контента.');
        }
        
        if (this.metrics.vitals.fid > 100) {
            recommendations.push('FID превышает 100ms. Оптимизируйте JavaScript выполнение.');
        }
        
        if (this.metrics.vitals.cls > 0.1) {
            recommendations.push('CLS превышает 0.1. Стабилизируйте макет страницы.');
        }
        
        // Анализ ресурсов
        const largeResources = this.metrics.resources.filter(r => r.size > 100000);
        if (largeResources.length > 0) {
            recommendations.push(`Найдены большие ресурсы (${largeResources.length}). Рассмотрите сжатие.`);
        }
        
        if (recommendations.length > 0) {
            console.group('Performance Recommendations');
            recommendations.forEach(rec => console.warn(rec));
            console.groupEnd();
        }
    }
    
    // Публичный метод для получения отчета
    getReport() {
        return {
            current: this.metrics,
            history: JSON.parse(localStorage.getItem('performanceReports') || '[]')
        };
    }
}

// Инициализация монитора производительности
const performanceMonitor = new PerformanceMonitor();

// Экспорт для использования в консоли
window.performanceMonitor = performanceMonitor;