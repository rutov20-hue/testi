// Мультиязычность сайта
const translations = {
    ru: {
        // Навигация
        'nav.home': 'Главная',
        'nav.paris': 'Париж',
        'nav.switzerland': 'Швейцария',
        'nav.tokyo': 'Токио',
        'nav.greece': 'Греция',
        'nav.bali': 'Бали',
        'nav.newyork': 'Нью-Йорк',
        'nav.iceland': 'Исландия',
        
        // О нас
        'nav.about': 'О нас',
        'about.add.title': 'Добавить свой отзыв',
        'about.form.name': 'Ваше имя:',
        'about.form.text': 'Ваш отзыв:',
        'about.form.avatar': 'Ссылка на фото (необязательно):',
        'about.form.submit': 'Опубликовать',
        'about.title': 'Наша команда путешественников',
        'about.intro': 'Мы - группа энтузиастов, которые любят открывать новые места и делиться своим опытом с другими.',
        'about.natalia.name': 'Наталия',
        'about.natalia.text': 'Я побывала в Париже, Швейцарии, Токио, Греции, на Бали, в Нью-Йорке и Исландии. Рекомендую обязательно посетить Париж весной, когда город особенно прекрасен, и Исландию осенью ради северного сияния. Особенно советую такие места как Эйфелева башня на закате, рисовые террасы Тегаллаланг на Бали, водопад Скоугафосс в Исландии и закаты в деревушке Ойя на Санторини. Каждое из этих мест оставило неизгладимое впечатление в моем сердце!',
        'about.dmitri.name': 'Дмитрий',
        'about.dmitri.text': 'Я побывал в Италии, Испании, Португалии и Чехии. Рекомендую посетить Рим и Барселону - это города с невероятной архитектурой и историей. А особенно такие места как Колизей в Риме, Саграда Фамилия в Барселоне, Карлов мост в Праге и побережье Алгарве в Португалии. Не забудьте попробовать местную кухню - итальянскую пасту, испанскую паэлью и португальские пастел де ната. Эти страны покорят ваше сердце!',
        'about.ksenia.name': 'Ксения',
        'about.ksenia.text': 'Я побывала в Таиланде, Вьетнаме, Камбодже и Малайзии. Рекомендую обязательно посетить Бангкок и острова Таиланда - это райские места с белоснежными пляжами. А особенно такие места как бухта Халонг во Вьетнаме, храмовый комплекс Ангкор-Ват в Камбодже, острова Пхи-Пхи в Таиланде и башни Петронас в Куала-Лумпуре. Азия - это совершенно другой мир, который нужно увидеть своими глазами. Не бойтесь пробовать уличную еду - она восхитительна!',
        'about.maxim.name': 'Максим',
        'about.maxim.text': 'Я побывал в Турции, Египте, ОАЭ и Грузии. Рекомендую посетить Стамбул - город на стыке Европы и Азии, и Тбилиси с его невероятным гостеприимством. А особенно такие места как Голубая мечеть в Стамбуле, пирамиды Гизы в Египте, Бурдж-Халифа в Дубае и серные бани в Тбилиси. Эти страны удивят вас своей культурой и кухней. Обязательно попробуйте турецкий кебаб, египетский кошари, эмиратские финики и грузинские хинкали!',
        
        // Главная страница
        'hero.title': 'My Travel Diary',
        'hero.intro': 'Добро пожаловать в мой дневник путешествий! Здесь я делюсь своими впечатлениями и фотографиями из разных уголков мира.',
        'map.title': 'Карта моих путешествий',
        'map.hint': 'Нажмите на красный маркер, чтобы перейти к путешествию',
        
        // Карточки
        'card.readmore': 'Читать далее',
        'card.back': '← Вернуться на главную',
        
        // Париж
        'paris.title': 'Прогулка по Парижу',
        'paris.location': 'Париж, Франция',
        'paris.date': 'Июнь 2023',
        'paris.short': 'Незабываемые впечатления от города любви и романтики. Эйфелева башня, Лувр и прогулки по Сене.',
        'paris.p1': 'Париж встретил меня теплым летним утром. Эйфелева башня, величественная и прекрасная, возвышалась над городом, словно приглашая исследовать его улицы.',
        'paris.p2': 'Прогулка по Сене на закате стала одним из самых незабываемых моментов. Лувр с его стеклянной пирамидой поразил своей архитектурой и богатством коллекций.',
        'paris.p3': 'Каждый уголок Парижа дышит историей и романтикой. Уютные кафе, ароматные круассаны и дружелюбные парижане сделали эту поездку по-настоящему особенной.',
        'paris.rec.title': 'Рекомендации для посещения',
        'paris.rec1': '<strong>Эйфелева башня</strong> - обязательно поднимитесь на вершину на закате, виды невероятные!',
        'paris.rec2': '<strong>Лувр</strong> - приходите к открытию, чтобы избежать толп. Не пропустите Мону Лизу и Венеру Милосскую.',
        'paris.rec3': '<strong>Монмартр</strong> - прогуляйтесь по узким улочкам, посетите Сакре-Кёр и площадь художников.',
        'paris.rec4': '<strong>Круиз по Сене</strong> - лучший способ увидеть главные достопримечательности с воды.',
        'paris.rec5': '<strong>Латинский квартал</strong> - атмосферные кафе, книжные магазины и студенческая жизнь.',
        
        // Швейцария
        'switzerland.title': 'Горы Швейцарии',
        'switzerland.location': 'Интерлакен, Швейцария',
        'switzerland.date': 'Август 2023',
        'switzerland.short': 'Захватывающие виды Альп и чистейший горный воздух. Незабываемое путешествие в сердце гор.',
        
        // Токио
        'tokyo.title': 'Огни Токио',
        'tokyo.location': 'Токио, Япония',
        'tokyo.date': 'Март 2024',
        'tokyo.short': 'Удивительное сочетание древних традиций и современных технологий. Сакура, храмы и неоновые огни.',
        
        // Греция
        'greece.title': 'Греческие острова',
        'greece.location': 'Санторини, Греция',
        'greece.date': 'Июль 2023',
        'greece.short': 'Белоснежные домики, синие купола церквей и бескрайнее Эгейское море. Закаты, которые невозможно забыть.',
        
        // Бали
        'bali.title': 'Тропический Бали',
        'bali.location': 'Убуд, Бали',
        'bali.date': 'Январь 2024',
        'bali.short': 'Рисовые террасы, древние храмы и океанские волны. Остров богов подарил незабываемые впечатления.',
        
        // Нью-Йорк
        'newyork.title': 'Нью-Йорк, город мечты',
        'newyork.location': 'Нью-Йорк, США',
        'newyork.date': 'Сентябрь 2023',
        'newyork.short': 'Небоскребы Манхэттена, Статуя Свободы и энергия большого города. Место, где сбываются мечты.',
        
        // Исландия
        'iceland.title': 'Магия Исландии',
        'iceland.location': 'Рейкьявик, Исландия',
        'iceland.date': 'Октябрь 2023',
        'iceland.short': 'Северное сияние, водопады и ледники. Страна льда и огня открыла свои тайны.',
        
        // Футер
        'footer.text': '© 2026 Дьякова Наталия. My Travel Diary'
    },
    en: {
        // Navigation
        'nav.home': 'Home',
        'nav.paris': 'Paris',
        'nav.switzerland': 'Switzerland',
        'nav.tokyo': 'Tokyo',
        'nav.greece': 'Greece',
        'nav.bali': 'Bali',
        'nav.newyork': 'New York',
        'nav.iceland': 'Iceland',
        
        // About
        'nav.about': 'About Us',
        'about.add.title': 'Add Your Review',
        'about.form.name': 'Your Name:',
        'about.form.text': 'Your Review:',
        'about.form.avatar': 'Photo Link (optional):',
        'about.form.submit': 'Publish',
        'about.title': 'Our Team of Travelers',
        'about.intro': 'We are a group of enthusiasts who love discovering new places and sharing our experiences with others.',
        'about.natalia.name': 'Natalia',
        'about.natalia.text': 'I have visited Paris, Switzerland, Tokyo, Greece, Bali, New York and Iceland. I highly recommend visiting Paris in spring when the city is especially beautiful, and Iceland in autumn for the northern lights. I especially recommend places like the Eiffel Tower at sunset, Tegallalang rice terraces in Bali, Skogafoss waterfall in Iceland and sunsets in Oia village in Santorini. Each of these places left an indelible impression on my heart!',
        'about.dmitri.name': 'Dmitry',
        'about.dmitri.text': 'I have visited Italy, Spain, Portugal and Czech Republic. I recommend visiting Rome and Barcelona - these are cities with incredible architecture and history. Especially places like the Colosseum in Rome, Sagrada Familia in Barcelona, Charles Bridge in Prague and the Algarve coast in Portugal. Don\'t forget to try the local cuisine - Italian pasta, Spanish paella and Portuguese pastel de nata. These countries will conquer your heart!',
        'about.ksenia.name': 'Ksenia',
        'about.ksenia.text': 'I have visited Thailand, Vietnam, Cambodia and Malaysia. I highly recommend visiting Bangkok and the islands of Thailand - these are paradise places with white sandy beaches. Especially places like Halong Bay in Vietnam, Angkor Wat temple complex in Cambodia, Phi Phi Islands in Thailand and Petronas Towers in Kuala Lumpur. Asia is a completely different world that you need to see with your own eyes. Don\'t be afraid to try street food - it\'s delicious!',
        'about.maxim.name': 'Maxim',
        'about.maxim.text': 'I have visited Turkey, Egypt, UAE and Georgia. I recommend visiting Istanbul - a city at the crossroads of Europe and Asia, and Tbilisi with its incredible hospitality. Especially places like the Blue Mosque in Istanbul, the Pyramids of Giza in Egypt, Burj Khalifa in Dubai and sulfur baths in Tbilisi. These countries will amaze you with their culture and cuisine. Be sure to try Turkish kebab, Egyptian koshari, Emirati dates and Georgian khinkali!',
        
        // Home page
        'hero.title': 'My Travel Diary',
        'hero.intro': 'Welcome to my travel diary! Here I share my impressions and photos from different corners of the world.',
        'map.title': 'Map of My Travels',
        'map.hint': 'Click on the red marker to go to the travel story',
        
        // Cards
        'card.readmore': 'Read more',
        'card.back': '← Back to home',
        
        // Paris
        'paris.title': 'A Walk Through Paris',
        'paris.location': 'Paris, France',
        'paris.date': 'June 2023',
        'paris.short': 'Unforgettable impressions from the city of love and romance. The Eiffel Tower, the Louvre and walks along the Seine.',
        'paris.p1': 'Paris greeted me on a warm summer morning. The Eiffel Tower, majestic and beautiful, towered over the city, as if inviting me to explore its streets.',
        'paris.p2': 'A walk along the Seine at sunset became one of the most unforgettable moments. The Louvre with its glass pyramid amazed with its architecture and wealth of collections.',
        'paris.p3': 'Every corner of Paris breathes history and romance. Cozy cafes, fragrant croissants and friendly Parisians made this trip truly special.',
        'paris.rec.title': 'Recommendations for Visiting',
        'paris.rec1': '<strong>Eiffel Tower</strong> - be sure to climb to the top at sunset, the views are incredible!',
        'paris.rec2': '<strong>Louvre</strong> - come at opening to avoid crowds. Don\'t miss the Mona Lisa and Venus de Milo.',
        'paris.rec3': '<strong>Montmartre</strong> - walk through narrow streets, visit Sacré-Cœur and the artists\' square.',
        'paris.rec4': '<strong>Seine Cruise</strong> - the best way to see the main attractions from the water.',
        'paris.rec5': '<strong>Latin Quarter</strong> - atmospheric cafes, bookstores and student life.',
        
        // Switzerland
        'switzerland.title': 'Swiss Mountains',
        'switzerland.location': 'Interlaken, Switzerland',
        'switzerland.date': 'August 2023',
        'switzerland.short': 'Breathtaking views of the Alps and the purest mountain air. An unforgettable journey to the heart of the mountains.',
        
        // Tokyo
        'tokyo.title': 'Tokyo Lights',
        'tokyo.location': 'Tokyo, Japan',
        'tokyo.date': 'March 2024',
        'tokyo.short': 'An amazing combination of ancient traditions and modern technology. Cherry blossoms, temples and neon lights.',
        
        // Greece
        'greece.title': 'Greek Islands',
        'greece.location': 'Santorini, Greece',
        'greece.date': 'July 2023',
        'greece.short': 'Snow-white houses, blue church domes and the endless Aegean Sea. Sunsets that are impossible to forget.',
        
        // Bali
        'bali.title': 'Tropical Bali',
        'bali.location': 'Ubud, Bali',
        'bali.date': 'January 2024',
        'bali.short': 'Rice terraces, ancient temples and ocean waves. The island of the gods gave unforgettable impressions.',
        
        // New York
        'newyork.title': 'New York, City of Dreams',
        'newyork.location': 'New York, USA',
        'newyork.date': 'September 2023',
        'newyork.short': 'Manhattan skyscrapers, the Statue of Liberty and the energy of the big city. A place where dreams come true.',
        
        // Iceland
        'iceland.title': 'Magic of Iceland',
        'iceland.location': 'Reykjavik, Iceland',
        'iceland.date': 'October 2023',
        'iceland.short': 'Northern lights, waterfalls and glaciers. The land of ice and fire revealed its secrets.',
        
        // Footer
        'footer.text': '© 2026 Dyakova Natalia. My Travel Diary'
    },
    ro: {
        // Navigation
        'nav.home': 'Acasă',
        'nav.paris': 'Paris',
        'nav.switzerland': 'Elveția',
        'nav.tokyo': 'Tokyo',
        'nav.greece': 'Grecia',
        'nav.bali': 'Bali',
        'nav.newyork': 'New York',
        'nav.iceland': 'Islanda',
        
        // About
        'nav.about': 'Despre Noi',
        'about.add.title': 'Adaugă Recenzia Ta',
        'about.form.name': 'Numele Tău:',
        'about.form.text': 'Recenzia Ta:',
        'about.form.avatar': 'Link Fotografie (opțional):',
        'about.form.submit': 'Publică',
        'about.title': 'Echipa Noastră de Călători',
        'about.intro': 'Suntem un grup de entuziaști care iubesc să descopere locuri noi și să împărtășească experiențele noastre cu alții.',
        'about.natalia.name': 'Natalia',
        'about.natalia.text': 'Am vizitat Parisul, Elveția, Tokyo, Grecia, Bali, New York și Islanda. Recomand cu căldură să vizitați Parisul primăvara când orașul este deosebit de frumos, și Islanda toamna pentru aurora boreală. Recomand în special locuri precum Turnul Eiffel la apus, terasele de orez Tegallalang în Bali, cascada Skogafoss în Islanda și apusurile din satul Oia în Santorini. Fiecare dintre aceste locuri a lăsat o impresie de neuitat în inima mea!',
        'about.dmitri.name': 'Dmitri',
        'about.dmitri.text': 'Am vizitat Italia, Spania, Portugalia și Republica Cehă. Recomand să vizitați Roma și Barcelona - acestea sunt orașe cu arhitectură și istorie incredibile. În special locuri precum Colosseumul din Roma, Sagrada Familia din Barcelona, Podul Carol din Praga și coasta Algarve din Portugalia. Nu uitați să încercați bucătăria locală - paste italiene, paella spaniolă și pastel de nata portugheză. Aceste țări vă vor cuceri inima!',
        'about.ksenia.name': 'Ksenia',
        'about.ksenia.text': 'Am vizitat Thailanda, Vietnamul, Cambodgia și Malaezia. Recomand cu căldură să vizitați Bangkok și insulele Thailandei - acestea sunt locuri paradisiace cu plaje cu nisip alb. În special locuri precum Golful Halong în Vietnam, complexul de temple Angkor Wat în Cambodgia, Insulele Phi Phi în Thailanda și Turnurile Petronas în Kuala Lumpur. Asia este o lume complet diferită pe care trebuie să o vedeți cu propriii ochi. Nu vă fie frică să încercați mâncarea de stradă - este delicioasă!',
        'about.maxim.name': 'Maxim',
        'about.maxim.text': 'Am vizitat Turcia, Egiptul, EAU și Georgia. Recomand să vizitați Istanbulul - un oraș la răspântia Europei și Asiei, și Tbilisi cu ospitalitatea sa incredibilă. În special locuri precum Moscheea Albastră din Istanbul, Piramidele din Giza în Egipt, Burj Khalifa în Dubai și băile cu sulf din Tbilisi. Aceste țări vă vor uimi cu cultura și bucătăria lor. Asigurați-vă că încercați kebab turcesc, koshari egiptean, curmale emirateze și khinkali georgian!',
        
        // Home page
        'hero.title': 'My Travel Diary',
        'hero.intro': 'Bun venit în jurnalul meu de călătorie! Aici împărtășesc impresiile și fotografiile mele din diferite colțuri ale lumii.',
        'map.title': 'Harta Călătoriilor Mele',
        'map.hint': 'Faceți clic pe marcajul roșu pentru a accesa povestea călătoriei',
        
        // Cards
        'card.readmore': 'Citește mai mult',
        'card.back': '← Înapoi la pagina principală',
        
        // Paris
        'paris.title': 'O Plimbare prin Paris',
        'paris.location': 'Paris, Franța',
        'paris.date': 'Iunie 2023',
        'paris.short': 'Impresii de neuitat din orașul iubirii și romantismului. Turnul Eiffel, Luvrul și plimbări pe Sena.',
        'paris.p1': 'Parisul m-a întâmpinat într-o dimineață caldă de vară. Turnul Eiffel, maiestuos și frumos, se înălța deasupra orașului, ca și cum m-ar invita să-i explorez străzile.',
        'paris.p2': 'O plimbare pe Sena la apus a devenit unul dintre cele mai de neuitat momente. Luvrul cu piramida sa de sticlă a impresionat prin arhitectură și bogăția colecțiilor.',
        'paris.p3': 'Fiecare colț al Parisului respiră istorie și romantism. Cafenele confortabile, croissante parfumate și parizieni prietenoși au făcut această călătorie cu adevărat specială.',
        'paris.rec.title': 'Recomandări pentru Vizitare',
        'paris.rec1': '<strong>Turnul Eiffel</strong> - asigurați-vă că urcați în vârf la apus, priveliștile sunt incredibile!',
        'paris.rec2': '<strong>Luvrul</strong> - veniți la deschidere pentru a evita mulțimile. Nu ratați Mona Lisa și Venus de Milo.',
        'paris.rec3': '<strong>Montmartre</strong> - plimbați-vă pe străzile înguste, vizitați Sacré-Cœur și piața artiștilor.',
        'paris.rec4': '<strong>Croazieră pe Sena</strong> - cel mai bun mod de a vedea principalele atracții de pe apă.',
        'paris.rec5': '<strong>Cartierul Latin</strong> - cafenele atmosferice, librării și viață studențească.',
        
        // Switzerland
        'switzerland.title': 'Munții Elveției',
        'switzerland.location': 'Interlaken, Elveția',
        'switzerland.date': 'August 2023',
        'switzerland.short': 'Priveliști uluitoare ale Alpilor și aer de munte curat. O călătorie de neuitat în inima munților.',
        
        // Tokyo
        'tokyo.title': 'Luminile Tokyo',
        'tokyo.location': 'Tokyo, Japonia',
        'tokyo.date': 'Martie 2024',
        'tokyo.short': 'O combinație uimitoare de tradiții antice și tehnologie modernă. Flori de cireș, temple și lumini neon.',
        
        // Greece
        'greece.title': 'Insulele Grecești',
        'greece.location': 'Santorini, Grecia',
        'greece.date': 'Iulie 2023',
        'greece.short': 'Case albe ca zăpada, cupole albastre ale bisericilor și Marea Egee fără sfârșit. Apusuri imposibil de uitat.',
        
        // Bali
        'bali.title': 'Bali Tropical',
        'bali.location': 'Ubud, Bali',
        'bali.date': 'Ianuarie 2024',
        'bali.short': 'Terase de orez, temple antice și valuri oceanice. Insula zeilor a oferit impresii de neuitat.',
        
        // New York
        'newyork.title': 'New York, Orașul Viselor',
        'newyork.location': 'New York, SUA',
        'newyork.date': 'Septembrie 2023',
        'newyork.short': 'Zgârie-norii din Manhattan, Statuia Libertății și energia marelui oraș. Un loc unde visele devin realitate.',
        
        // Iceland
        'iceland.title': 'Magia Islandei',
        'iceland.location': 'Reykjavik, Islanda',
        'iceland.date': 'Octombrie 2023',
        'iceland.short': 'Aurora boreală, cascade și ghețari. Țara gheții și focului și-a dezvăluit secretele.',
        
        // Footer
        'footer.text': '© 2026 Dyakova Natalia. My Travel Diary'
    }
};

document.addEventListener('DOMContentLoaded', function() {
    // Создаем контейнер для селектора языка
    const langSelector = document.createElement('div');
    langSelector.className = 'lang-selector';
    
    // Создаем кнопку переключения языка
    const langToggle = document.createElement('button');
    langToggle.className = 'lang-toggle';
    langToggle.setAttribute('aria-label', 'Switch language');
    langToggle.innerHTML = '🌐 Язык';
    
    // Создаем выпадающее меню
    const langMenu = document.createElement('div');
    langMenu.className = 'lang-menu';
    
    // Опции языков
    const languages = [
        { code: 'ru', flag: '🇷🇺', name: 'Русский' },
        { code: 'en', flag: '🇬🇧', name: 'English' },
        { code: 'ro', flag: '🇷🇴', name: 'Română' }
    ];
    
    // Создаем опции языков
    languages.forEach(lang => {
        const option = document.createElement('div');
        option.className = 'lang-option';
        option.setAttribute('data-lang', lang.code);
        option.innerHTML = `
            <span class="lang-flag">${lang.flag}</span>
            <span class="lang-name">${lang.name}</span>
        `;
        
        option.addEventListener('click', function() {
            currentLang = lang.code;
            localStorage.setItem('language', currentLang);
            translatePage(currentLang);
            updateSelectedLanguage();
            langMenu.classList.remove('active');
        });
        
        langMenu.appendChild(option);
    });
    
    // Добавляем элементы в DOM
    langSelector.appendChild(langToggle);
    langSelector.appendChild(langMenu);
    document.body.appendChild(langSelector);
    
    // Проверяем сохраненный язык
    let currentLang = localStorage.getItem('language') || 'ru';
    updateSelectedLanguage();
    if (currentLang !== 'ru') {
        translatePage(currentLang);
    }
    
    // Обработчик клика на кнопку
    langToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        langMenu.classList.toggle('active');
    });
    
    // Закрытие меню при клике вне его
    document.addEventListener('click', function(e) {
        if (!langSelector.contains(e.target)) {
            langMenu.classList.remove('active');
        }
    });
    
    // Функция обновления выбранного языка
    function updateSelectedLanguage() {
        document.querySelectorAll('.lang-option').forEach(option => {
            if (option.getAttribute('data-lang') === currentLang) {
                option.classList.add('selected');
            } else {
                option.classList.remove('selected');
            }
        });
    }
});

function translatePage(lang) {
    // Переводим все элементы с data-translate
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                element.innerHTML = translations[lang][key];
            }
        }
    });
    
    // Обновляем lang атрибут
    document.documentElement.lang = lang;
    
    // Отправляем событие смены языка для обновления динамического контента
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang: lang } }));
}
