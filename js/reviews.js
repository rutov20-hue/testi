// Управление отзывами
document.addEventListener('DOMContentLoaded', function() {
    const reviewForm = document.getElementById('reviewForm');
    const teamSection = document.querySelector('.team-section');
    
    // Инициализируем начальные отзывы, если их нет
    initializeDefaultReviews();
    
    // Загружаем отзывы из localStorage
    loadReviews();
    
    // Слушаем событие смены языка для обновления отзывов
    window.addEventListener('languageChanged', function() {
        loadReviews();
    });
    
    // Обработчик отправки формы
    reviewForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('reviewName').value.trim();
        const text = document.getElementById('reviewText').value.trim();
        const avatar = document.getElementById('reviewAvatar').value.trim();
        
        if (name && text) {
            addReview(name, text, avatar);
            reviewForm.reset();
            
            // Показываем уведомление
            showNotification('Отзыв успешно добавлен!');
        }
    });
    
    function initializeDefaultReviews() {
        // Проверяем, есть ли уже отзывы
        const existingReviews = localStorage.getItem('travelReviews');
        
        if (!existingReviews) {
            // Добавляем начальные отзывы с ключами переводов
            const defaultReviews = [
                {
                    id: 1,
                    name: 'Наталия',
                    textKey: 'about.review1.text',
                    avatar: 'images/avatar-natalia.jpg',
                    date: new Date().toISOString()
                },
                {
                    id: 2,
                    name: 'Дмитрий',
                    textKey: 'about.review2.text',
                    avatar: 'images/avatar-dmitri.jpg',
                    date: new Date().toISOString()
                },
                {
                    id: 3,
                    name: 'Ксения',
                    textKey: 'about.review3.text',
                    avatar: 'images/avatar-ksy.jpg',
                    date: new Date().toISOString()
                },
                {
                    id: 4,
                    name: 'Максим',
                    textKey: 'about.review4.text',
                    avatar: 'images/avatar-maxim.jpg',
                    date: new Date().toISOString()
                }
            ];
            
            localStorage.setItem('travelReviews', JSON.stringify(defaultReviews));
        }
    }
    
    function addReview(name, text, avatar) {
        // Получаем существующие отзывы
        let reviews = JSON.parse(localStorage.getItem('travelReviews')) || [];
        
        // Добавляем новый отзыв
        const newReview = {
            id: Date.now(),
            name: name,
            text: text,
            avatar: avatar || 'images/anonim.png',
            date: new Date().toISOString()
        };
        
        reviews.push(newReview);
        
        // Сохраняем в localStorage
        localStorage.setItem('travelReviews', JSON.stringify(reviews));
        
        // Перезагружаем отзывы
        loadReviews();
    }
    
    function loadReviews() {
        const reviews = JSON.parse(localStorage.getItem('travelReviews')) || [];
        
        // Очищаем секцию
        teamSection.innerHTML = '';
        
        // Добавляем каждый отзыв
        reviews.forEach(review => {
            const reviewElement = createReviewElement(review);
            teamSection.appendChild(reviewElement);
        });
    }
    
    function createReviewElement(review) {
        const div = document.createElement('div');
        div.className = 'team-member';
        div.style.opacity = '1';
        div.style.transform = 'translateY(0)';
        
        // Получаем текст отзыва - либо из ключа перевода, либо напрямую
        let reviewText = review.text;
        if (review.textKey && typeof translations !== 'undefined') {
            const currentLang = localStorage.getItem('language') || 'ru';
            reviewText = translations[currentLang][review.textKey] || review.text || reviewText;
        }
        
        div.innerHTML = `
            <div class="member-avatar">
                <img src="${review.avatar}" alt="${review.name}" onerror="this.src='images/anonim.png'">
            </div>
            <div class="member-content">
                <h2 class="member-name">${review.name}</h2>
                <p class="member-description" ${review.textKey ? `data-translate="${review.textKey}"` : ''}>${reviewText}</p>
                <button class="delete-btn" onclick="deleteReview(${review.id})">Удалить</button>
            </div>
        `;
        return div;
    }
    
    // Делаем функцию удаления глобальной
    window.deleteReview = function(id) {
        if (confirm('Вы уверены, что хотите удалить этот отзыв?')) {
            let reviews = JSON.parse(localStorage.getItem('travelReviews')) || [];
            reviews = reviews.filter(review => review.id !== id);
            localStorage.setItem('travelReviews', JSON.stringify(reviews));
            loadReviews();
            showNotification('Отзыв удален');
        }
    };
    
    function showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.classList.add('show');
        }, 100);
        
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 3000);
    }
});
