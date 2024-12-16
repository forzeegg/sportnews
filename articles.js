// Sample articles data
const articles = [
        {
            id: 1,
            date: '14 декабря 2024',
            title: '«МЮ» РАЗРУШЕВАЛСЯ ПОСЛЕ ОТСТАВКИ ТЕН ХАГА. «МАН СИТИ» И «ЧЕЛСИ» ВЫЛЕТЕЛИ ИЗ КУБКА ЛИГИ. «БАВАРИИ» ПОМОГ НЕТ-ТРИК МЮСИАЛЫ',
            subtitle: 'Обзор матчей Кубка Лиги и чемпионата Англии',
            author: 'Андрей Кузнецов',
            image: 'assets/images/inter1.png'
        },
        {
            id: 2,
            date: '14 декабря 2024',
            title: '«В ПУСТЫЕ ВОРОТА НАДО ЗАБИВАТЬ «С МЯСОМ И РИСОМ». РОТЕНБЕРГ — ПОСЛЕ ПОРАЖЕНИЯ ОТ «ЛОКОМОТИВА»',
            subtitle: 'В СКА сохраняют оптимизм',
            author: 'Егор Сергеев',
            image: 'assets/images/inter2.png'
        },
        {
            id: 3,
            date: '14 декабря 2024',
            title: 'ФАВОРИТЫ СОШЛИСЬ В КЛИНЧЕ. «ЛОКОМОТИВ» ПРЕТЕРПЕЛ СКАЗ ГЛАВНОЙ МАТЧЕ НЕДЕЛИ',
            subtitle: 'Обзор матча «Локомотив» — «СКА»',
            author: 'Артур Кудряшов',
            image: 'assets/images/inter3.png'
        },
        {
            id: 4,
            date: '14 декабря 2024',
            title: 'ШИПАЧЕВ ОБОШЕЛ МОЗЯКИНА И СТАЛ ЛУЧШИМ БОМБАРДИРОМ В ИСТОРИИ КХЛ! ОН СДЕЛАЛ ЭТО В РОДНОМ ГОРОДЕ',
            subtitle: 'Обзор матча «Динамо» — «Нефтехимик»',
            author: 'Данила Сафронов',
            image: 'assets/images/inter4.png'
        },
        {
            id: 5,
            date: '14 декабря 2024',
            title: '«ШЕСТЬ ЛЕТ ШЛИ К ЭТОМУ». РОССИЙСКИЙ БАСКЕТБОЛИСТ СЫГРАЛ В СТАРТОВОЙ ПЯТЕРКЕ ИСПАНСКОГО ГРАНДА В ЕВРОЛИГЕ',
            subtitle: 'Обзор матча «Барселона» — «Реал»',
            author: 'Тимур Ганеев',
            image: 'assets/images/inter5.png'
        },
        {
            id: 6,
            date: '14 декабря 2024',
            title: 'КАПРИЗОВ — ЛУЧШИЙ БОМБАРДИР НХЛ! А У КОМАНДЫ МАЛКИНА ШЕСТЬ ПОРАЖЕНИЙ ПОДРЯД',
            subtitle: 'Обзор матчей НХЛ',
            author: 'Максим Колесников',
            image: 'assets/images/inter6.png'
        },
        {
            id: 7,
            date: '14 декабря 2024',
            title: 'ЗАХЕДИЛИ, НО НЕ ТЕХ. РАЗЫГРАННЫЕ ФАНАТЫ ВОНИСУСА ПЕРЕПУТАЛИ ГОРОД С ДРУГИМИ ФУТБОЛИСТАМИ И АКТРИСОЙ',
            subtitle: 'Обзор матча «Барселона» — «Реал»',
            author: 'Роман Кочнев',
            image: 'assets/images/inter7.png'
        },
        {
            id: 8,
            date: '14 декабря 2024',
            title: '«СПАРТАК» ПОДАЛ РОССИЮ РЕЗКО ВНИЗ. НЕ ДАВАЛ ИГРЫ ТАКОЙ ИМПУЛЬС. «НЕФТЕХИМИК» — ПОБЕДИЛ СТАКОВИЧ — ПОСЛЕ ГОРЯЧЕГО ДЕРБИ ЦСКА — «СПАРТАК»',
            subtitle: 'Сыктывкар и Нижнекамск: подробно о матчах ЦСКА — «Спартак»',
            author: 'Артем Калинин',
            image: 'assets/images/inter8.png'
        },
        {
            id: 9,
            date: '14 декабря 2024',
            title: '«ЛИВЕРПУЛЬ» ЗАПРЫГНУЛ НА ПЕРВОЕ МЕСТО АПЛ. А «СИТИ» И «АРСЕНАЛ» СЕНСАЦИОННО ПРОИГРАЛИ',
            subtitle: 'Центральный экспресс тренеров Топлиги АПЛ',
            author: 'Артем Калинин',
            image: 'assets/images/inter9.png'
        },
        {
            id: 1,
            date: '14 декабря 2024',
            title: 'ЦСКА СДЕЛАЕТ РОКИРОВКУ? «СПАРТАК» — ОЧЕРЕДНАЯ ЖЕРТВА «ЗЕНИТА». ГЛАВНЫЕ ТРАНСЛЯЦИИ МАТЧА РПЛ',
            subtitle: 'Обзор 18-го тура чемпионата России',
            author: 'Сергей Варламов',
            image: 'assets/images/foot1.png'
        },
        {
            id: 2,
            date: '14 декабря 2024',
            title: '«СКОНОПАС — ПЕРВЫЙ СУХАРЬ» В РОССИИ. «АРСЕНАЛ» ПРЕССИНГОВАЛ, НО САМ ПОМОГ «ПСЖ»',
            subtitle: 'Сезон-2024/25. 18-й тур чемпионата Франции',
            author: 'Александр Логинов',
            image: 'assets/images/foot2.png'
        },
        {
            id: 3,
            date: '14 декабря 2024',
            title: '«ЗЕНИТ» ОБЫГРАЛ МАХАЧКАЛИНСКОЕ «ДИНАМО». ГЛАВНЫЕ ТРАНСЛЯЦИИ МАТЧА РПЛ',
            subtitle: 'Обзор 18-го тура чемпионата России',
            author: 'Сергей Варламов',
            image: 'assets/images/foot3.png'
        },
        {
            id: 4,
            date: '14 декабря 2024',
            title: '«ЛОКОМОТИВ» БЕЗ БАТРАКОВА И БАРИНОВА ДОЖАЛ «РУБИН». «ТУМОФЕЕВ» — ПЕРВЫЙ ГОЛ В СЕЗОНЕ!',
            subtitle: 'Сезон-2024/25. 18-й тур чемпионата России',
            author: 'Сергей Варламов',
            image: 'assets/images/foot4.png'
        },
        {
            id: 5,
            date: '14 декабря 2024',
            title: '«А Я СМОТРЮ, ЧУРКИН ВЕРА В СВОЮ СИЛУ РОДИЛА! ПОЭТОМУ — ПОБЕДА. РАБИНЕР — ПЕРЕД ДЕРБИ',
            subtitle: 'ЦСКА и «Спартак» сыграли в 18-м туре РПЛ 2 гола',
            author: 'Сергей Варламов',
            image: 'assets/images/foot5.png'
        },
        {
            id: 1,
            date: '14 декабря 2024',
            title: 'ЦСКА ВЫИГРАЛ МАТЧ ОТКРЫТИЯ СЕЗОНА. НИКС «ЗАБЫЛ» СЫГРАТЬ НА ВТОРУЮ ПОЛОВИНУ',
            subtitle: 'ЦСКА победил в матче третьего круга Суперлиги-2024/25',
            author: 'Евгений Кузин',
            image: 'assets/images/basket1.png'
        },
        {
            id: 2,
            date: '14 декабря 2024',
            title: '«НА СЕБЯ НЕЛЬЗЯ КЛУБ В ЧЕМПИОНАТЕ ИГРАТЬ». КОГДА РОССИЯ СТАЛ ЛЮБИМЦЕМ МЕСТНЫХ БОЛЕЛЬЩИКОВ',
            subtitle: 'Алексей Швед провел четвертый матч за «Фуэнлабраду»',
            author: 'Алексей Швед',
            image: 'assets/images/basket2.png'
        },
        {
            id: 3,
            date: '14 декабря 2024',
            title: '«СЧИТАЮ, ЧТО В ПРОФЕССИОНАЛЬНОМ СПОРТЕ НЕТ НЕЗАСЛУЖЕННЫХ ДЕНЕГ». СЛОВА БОССА ЦСКА',
            subtitle: 'ЦСКА проиграл матч Суперлиги Единой лиги ВТБ 2024/25',
            author: 'Евгений Кузин',
            image: 'assets/images/basket3.png'
        },
        {
            id: 4,
            date: '14 декабря 2024',
            title: '«ПО СЧАСТЛИВОЙ СЛУЧАЙНОСТИ У ЦСКА САМОЕ ЛУЧШЕЕ РАСПИСАНИЕ В СУПЕРКУБКЕ». ИНТЕРВЬЮ ЖБАНОВА',
            subtitle: 'ЦСКА проиграл матч Суперлиги Единой лиги ВТБ 2024/25',
            author: 'Евгений Кузин',
            image: 'assets/images/basket4.png'
        },
        {
            id: 5,
            date: '14 декабря 2024',
            title: 'О ТРЕБОВАНИЯМ СТРИЖОДА ПО ХУЛИГАНСТВУ МОЖНО СУДИТЬ О ПОРАЖЕНИИ «СПАРТАКА». СЛОВА АДВОКАТА АЛЕКСЕЯ ШВЕДА',
            subtitle: 'Адвокат Швед прокомментировал решение о дисквалификации на баскетбол',
            author: 'Алексей Швед',
            image: 'assets/images/basket5.png'
        },
        {
            id: 1,
            date: '14 декабря 2024',
            title: 'КАЗАНСКИЙ «ЗЕНИТ» ПО-ЧЕМПИОНСКИ НАЧАЛ МАТЧ, НО ПО-ЧЕТВЕРЕННО ЗАБРАЛ ПУТЕВКУ В ПОЛУФИНАЛ',
            subtitle: 'Казанский «Зенит» выдал в полуфинал чемпионата России по волейболу',
            author: 'Сергей Иванов',
            image: 'assets/images/volley1.png'
        },
        {
            id: 2,
            date: '14 декабря 2024',
            title: '«КУЗБАСС» И «ЛОКО» РАЗЫГРАЛИ ПУТЕВКУ В ЧЕТВЕРТФИНАЛ В ЗОЛОТЫХ СЕТАХ',
            subtitle: 'Определились все участники 1/4 финала мужской волейбольной Суперлиги',
            author: 'Алексей Петров',
            image: 'assets/images/volley2.png'
        },
        {
            id: 3,
            date: '14 декабря 2024',
            title: '«КУЗБАСС» — КОРОЛИ ДРАМЫ. КЕМЕРОВЧАНЕ СНОВА ДОИГРАЛИСЬ ДО ТАЙ-БРЕЙКА',
            subtitle: 'Обзор пятого тура мужской Суперлиги',
            author: 'Иван Сидоров',
            image: 'assets/images/volley3.png'
        },
        {
            id: 4,
            date: '14 декабря 2024',
            title: 'ДВЕ ПОБЕДЫ НА КЛАССЕ. РОССИЙСКИЕ ВОЛЕЙБОЛИСТЫ БЕЗ ШАНСОВ ОБЫГРАЛИ СБОРНУЮ БЕЛОРУССИИ',
            subtitle: 'Подробности о матче чемпионата Европы по волейболу',
            author: 'Анна Смирнова',
            image: 'assets/images/volley4.png'
        },
        {
            id: 5,
            date: '14 декабря 2024',
            title: 'РАБОТА С УЛЫБКОЙ. МУЖСКАЯ ВОЛЕЙБОЛЬНАЯ СБОРНАЯ ОТКРЫЛА ДВЕРИ',
            subtitle: 'Национальная команда продолжает сбор в Новогорске',
            author: 'Дмитрий Кузнецов',
            image: 'assets/images/volley5.png'
        }
];

// Функция для перемешивания массива (алгоритм Фишера-Йейтса)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

let currentPage = 1;
const articlesPerPage = 5;
let shuffledArticles = [];

function renderArticles(page) {
    const articleGrid = document.querySelector('.articles-grid');
    articleGrid.innerHTML = '';

    const start = (page - 1) * articlesPerPage;
    const end = start + articlesPerPage;
    const paginatedArticles = shuffledArticles.slice(start, end);

    paginatedArticles.forEach(article => {
        const articleElement = document.createElement('article');
        articleElement.className = 'article-card';
        
        articleElement.innerHTML = `
            <img src="${article.image}" alt="${article.title}">
            <div class="article-info">
                <div class="article-date">${article.date}</div>
                <h3 class="article-title">${article.title}</h3>
                <div class="article-subtitle">${article.subtitle}</div>
                <div class="article-author">${article.author}</div>
            </div>
        `;
        
        articleGrid.appendChild(articleElement);
    });

    updatePagination();
}

function updatePagination() {
    const totalPages = Math.ceil(articles.length / articlesPerPage);
    const paginationContainer = document.querySelector('.pagination');
    paginationContainer.innerHTML = '';

    // Кнопка "Назад"
    const prevButton = document.createElement('button');
    prevButton.textContent = '←';
    prevButton.onclick = () => {
        if (currentPage > 1) {
            currentPage--;
            renderArticles(currentPage);
        }
    };
    paginationContainer.appendChild(prevButton);

    // Номера страниц
    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement('button');
        pageButton.textContent = i;
        pageButton.className = 'number_page';
        if (i === currentPage) {
            pageButton.classList.add('active');
        }
        pageButton.onclick = () => {
            currentPage = i;
            renderArticles(currentPage);
        };
        paginationContainer.appendChild(pageButton);
    }

    // Кнопка "Вперед"
    const nextButton = document.createElement('button');
    nextButton.textContent = '→';
    nextButton.onclick = () => {
        if (currentPage < totalPages) {
            currentPage++;
            renderArticles(currentPage);
        }
    };
    paginationContainer.appendChild(nextButton);
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    if (currentPage === 1 || shuffledArticles.length === 0) {
        shuffledArticles = shuffleArray([...articles]);
    }
    renderArticles(currentPage);
});
