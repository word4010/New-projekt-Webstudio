
    const modal = document.getElementById('modal');
        const openModalBtn = document.getElementById('openModalBtn');
        const closeModalBtn = document.getElementById('closeModalBtn');

        openModalBtn.addEventListener('click', () => {
            modal.classList.remove('hidden');
        });

        closeModalBtn.addEventListener('click', () => {
            modal.classList.add('closing');
            modal.addEventListener('transitionend', function handler() {
                modal.classList.add('hidden');
                modal.classList.remove('closing');
                modal.removeEventListener('transitionend', handler);
            });
        });

        // Закриття при кліку поза модаллю
        modal.addEventListener('click', (e) => {
            if (e.target.id === 'modal') {
                modal.classList.add('closing');
                modal.addEventListener('transitionend', function handler() {
                    modal.classList.add('hidden');
                    modal.classList.remove('closing');
                    modal.removeEventListener('transitionend', handler);
                });
            }
        });