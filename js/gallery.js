// Модальное окно для увеличения фотографий
document.addEventListener('DOMContentLoaded', function() {
    // Создаем модальное окно
    const modal = document.createElement('div');
    modal.className = 'image-modal';
    modal.innerHTML = `
        <span class="modal-close">&times;</span>
        <div class="modal-content">
            <img class="modal-image" src="" alt="">
        </div>
    `;
    document.body.appendChild(modal);

    const modalImage = modal.querySelector('.modal-image');
    const closeBtn = modal.querySelector('.modal-close');

    // Добавляем обработчики на все изображения в галерее
    const galleryImages = document.querySelectorAll('.gallery-image');
    galleryImages.forEach(img => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', function() {
            modal.style.display = 'flex';
            modalImage.src = this.src;
            modalImage.alt = this.alt;
            document.body.style.overflow = 'hidden'; // Блокируем прокрутку
        });
    });

    // Закрытие модального окна
    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', function(e) {
        if (e.target === modal || e.target === closeBtn) {
            closeModal();
        }
    });

    // Закрытие по клавише Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'flex') {
            closeModal();
        }
    });

    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Восстанавливаем прокрутку
    }
});
