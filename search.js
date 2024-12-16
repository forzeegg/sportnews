// Функция для создания и отображения поисковой модалки
function createSearchModal() {
    const modal = document.createElement('div');
    modal.className = 'search-modal';
    modal.innerHTML = `
        <div class="search-modal-content">
            <div class="search-header">
                <input type="text" id="searchInput" placeholder="Поиск по статьям...">
                <button class="close-search">×</button>
            </div>
            <div id="searchResults"></div>
        </div>
    `;
    document.body.appendChild(modal);

    // Закрытие модального окна
    const closeBtn = modal.querySelector('.close-search');
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Закрытие по клику вне модального окна
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    return modal;
}

// Функция поиска по статьям
function searchArticles(query) {
    query = query.toLowerCase();
    return articles.filter(article => 
        article.title.toLowerCase().includes(query) ||
        article.subtitle.toLowerCase().includes(query) ||
        article.author.toLowerCase().includes(query)
    );
}

// Функция отображения результатов поиска
function displaySearchResults(results) {
    const searchResults = document.getElementById('searchResults');
    searchResults.innerHTML = '';

    if (results.length === 0) {
        searchResults.innerHTML = '<p class="no-results">Ничего не найдено</p>';
        return;
    }

    results.forEach(article => {
        const articleElement = document.createElement('div');
        articleElement.className = 'search-result-item';
        articleElement.innerHTML = `
            <img src="${article.image}" alt="${article.title}">
            <div class="search-result-content">
                <h3>${article.title}</h3>
                <p>${article.subtitle}</p>
                <span class="search-result-meta">${article.date} • ${article.author}</span>
            </div>
        `;
        // Добавляем клик по результату
        articleElement.addEventListener('click', () => {
            window.location.href = 'articles.html#article-' + article.id;
        });
        searchResults.appendChild(articleElement);
    });
}

// Инициализация поиска при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    let searchModal;
    
    // Обработчик клика по кнопке поиска
    const searchBtn = document.querySelector('.search-btn');
    searchBtn.addEventListener('click', () => {
        if (!searchModal) {
            searchModal = createSearchModal();
        }
        searchModal.style.display = 'block';
        const searchInput = document.getElementById('searchInput');
        searchInput.focus();
        
        // Очищаем предыдущие результаты
        document.getElementById('searchResults').innerHTML = '';
    });

    // Обработчик ввода в поле поиска
    document.addEventListener('input', (e) => {
        if (e.target.id === 'searchInput') {
            const query = e.target.value.trim();
            if (query.length >= 2) {
                const results = searchArticles(query);
                displaySearchResults(results);
            } else {
                document.getElementById('searchResults').innerHTML = '';
            }
        }
    });
});
