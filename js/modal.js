    // // Отримуємо елементи DOM
    //     const modal = document.getElementById('simpleModal');
    //     const openBtn = document.getElementById('openModalBtn');
    //     const closeBtn = document.getElementById('closeModalBtn');

    //     // Коли користувач натискає кнопку, відкриваємо модалку
    //     openBtn.onclick = function() {
    //         modal.style.display = 'block';
    //     }

    //     // Коли користувач натискає на <span> (x), закриваємо модалку
    //     closeBtn.onclick = function() {
    //         modal.style.display = 'none';
    //     }

    //     // Коли користувач натискає будь-де за межами модалки, закриваємо її
    //     window.onclick = function(event) {
    //         if (event.target == modal) {
    //             modal.style.display = 'none';
    //         }
//     }
     document.addEventListener('DOMContentLoaded', () => {
            const openModalBtn = document.getElementById('openModalBtn');
            const closeModalBtn = document.getElementById('closeModalBtn');
            const modal = document.getElementById('modal');
            const contactForm = document.getElementById('contactForm');
            const successMessage = document.getElementById('successMessage');
            const phoneInput = document.getElementById('phone');

            // Відкриття модального вікна
            openModalBtn.addEventListener('click', () => {
                modal.classList.remove('hidden');
                document.body.style.overflow = 'hidden'; // Заборонити прокрутку сторінки
            });

            // Закриття модального вікна
            closeModalBtn.addEventListener('click', () => {
                modal.classList.add('hidden');
                document.body.style.overflow = 'auto'; // Відновити прокрутку
            });

            // Закриття при кліку поза модальним вікном
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.classList.add('hidden');
                    document.body.style.overflow = 'auto';
                }
            });

            // Обробка відправки форми
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                // Тут можна додати логіку для відправки даних на сервер
                
                // Після успішної відправки (для цього прикладу)
                contactForm.reset(); // Очистити форму
                contactForm.classList.add('hidden');
                successMessage.classList.remove('hidden');

                // Можна також закрити модальне вікно через кілька секунд
                setTimeout(() => {
                    modal.classList.add('hidden');
                    document.body.style.overflow = 'auto';
                    contactForm.classList.remove('hidden');
                    successMessage.classList.add('hidden');
                }, 3000); // Закрити через 3 секунди
            });

            // Форматування номера телефону
            phoneInput.addEventListener('input', (e) => {
                let value = e.target.value.replace(/\D/g, ''); // Видалити всі нецифрові символи
                let formattedValue = '';

                // Форматування для українських номерів (+380 (XX) XXX-XX-XX)
                if (value.length > 0) {
                    formattedValue = '+' + value.substring(0, 3);
                    if (value.length > 3) {
                        formattedValue += ' (' + value.substring(3, 5);
                    }
                    if (value.length > 5) {
                        formattedValue += ') ' + value.substring(5, 8);
                    }
                    if (value.length > 8) {
                        formattedValue += '-' + value.substring(8, 10);
                    }
                    if (value.length > 10) {
                        formattedValue += '-' + value.substring(10, 12);
                    }
                }
                
                e.target.value = formattedValue;
            });
        });