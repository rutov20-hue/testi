// Полные переводы для всех страниц - автозагрузка
document.addEventListener('DOMContentLoaded', function() {
    if (typeof translations === 'undefined') return;
    
    // Добавляем все недостающие переводы для RU, EN, RO
    const allTranslations = {
        ru: {
            // Переводы для страницы "О нас"
            'about.add.title': 'Добавить свой отзыв',
            'about.form.name': 'Ваше имя:',
            'about.form.text': 'Ваш отзыв:',
            'about.form.avatar': 'Ссылка на фото (необязательно):',
            'about.form.submit': 'Опубликовать',
            'about.review1.text': 'Я побывала в Париже, Швейцарии, Токио, Греции, на Бали, в Нью-Йорке и Исландии. Рекомендую обязательно посетить Париж весной, когда город особенно прекрасен, и Исландию осенью ради северного сияния. Особенно советую такие места как Эйфелева башня на закате, рисовые террасы Тегаллаланг на Бали, водопад Скоугафосс в Исландии и закаты в деревушке Ойя на Санторини. Каждое из этих мест оставило неизгладимое впечатление в моем сердце!',
            'about.review2.text': 'Я побывал в Италии, Испании, Португалии и Чехии. Рекомендую посетить Рим и Барселону - это города с невероятной архитектурой и историей. А особенно такие места как Колизей в Риме, Саграда Фамилия в Барселоне, Карлов мост в Праге и побережье Алгарве в Португалии. Не забудьте попробовать местную кухню - итальянскую пасту, испанскую паэлью и португальские пастел де ната. Эти страны покорят ваше сердце!',
            'about.review3.text': 'Я побывала в Таиланде, Вьетнаме, Камбодже и Малайзии. Рекомендую обязательно посетить Бангкок и острова Таиланда - это райские места с белоснежными пляжами. А особенно такие места как бухта Халонг во Вьетнаме, храмовый комплекс Ангкор-Ват в Камбодже, острова Пхи-Пхи в Таиланде и башни Петронас в Куала-Лумпуре. Азия - это совершенно другой мир, который нужно увидеть своими глазами. Не бойтесь пробовать уличную еду - она восхитительна!',
            'about.review4.text': 'Я побывал в Турции, Египте, ОАЭ и Грузии. Рекомендую посетить Стамбул - город на стыке Европы и Азии, и Тбилиси с его невероятным гостеприимством. А особенно такие места как Голубая мечеть в Стамбуле, пирамиды Гизы в Египте, Бурдж-Халифа в Дубае и серные бани в Тбилиси. Эти страны удивят вас своей культурой и кухней. Обязательно попробуйте турецкий кебаб, египетский кошари, эмиратские финики и грузинские хинкали!',
            'switzerland.p1': 'Швейцарские Альпы - это место, где природа показывает всю свою мощь и красоту. Интерлакен, расположенный между двумя озерами, стал отправной точкой моего путешествия.',
            'switzerland.p2': 'Подъем на Юнгфрауйох, "Вершину Европы", оставил незабываемые впечатления. Ледники, горные вершины и чистейший воздух создают ощущение, что ты на краю света.',
            'switzerland.p3': 'Прогулки по альпийским лугам, звон колокольчиков на шеях коров и традиционные швейцарские шале - все это создает атмосферу сказки.',
            'switzerland.rec.title': 'Рекомендации для посещения',
            'switzerland.rec1': '<strong>Юнгфрауйох</strong> - самая высокая железнодорожная станция в Европе, бронируйте билеты заранее!',
            'switzerland.rec2': '<strong>Озера Тун и Бриенц</strong> - прогулка на лодке с видом на горы, невероятно красиво.',
            'switzerland.rec3': '<strong>Лаутербруннен</strong> - долина 72 водопадов, обязательно посетите водопад Штауббах.',
            'switzerland.rec4': '<strong>Гриндельвальд</strong> - живописная деревня для треккинга и катания на лыжах.',
            'switzerland.rec5': '<strong>Швейцарский шоколад</strong> - попробуйте в местных магазинах, это совсем другой уровень!',
            'tokyo.p1': 'Токио встретил меня вихрем неоновых огней и невероятной энергией. Этот город - удивительное сочетание древних традиций и футуристических технологий.',
            'tokyo.p2': 'Прогулка по району Асакуса привела меня к древнему храму Сэнсо-дзи, где время словно остановилось. Аромат благовоний, звон колоколов и спокойствие среди шумного мегаполиса.',
            'tokyo.p3': 'Весеннее цветение сакуры превратило парки в розовое облако. Японцы называют это ханами - традиция любования цветами, которая объединяет всю страну.',
            'tokyo.p4': 'Район Сибуя с его знаменитым перекрестком, где одновременно переходят дорогу тысячи людей, показал мне настоящий ритм современного Токио.',
            'tokyo.rec.title': 'Рекомендации для посещения',
            'tokyo.rec1': '<strong>Храм Сэнсо-дзи</strong> - древнейший храм Токио в районе Асакуса, приходите рано утром.',
            'tokyo.rec2': '<strong>Перекресток Сибуя</strong> - самый загруженный перекресток в мире, лучший вид со Starbucks напротив.',
            'tokyo.rec3': '<strong>Парк Уэно</strong> - идеален для ханами (любования сакурой) весной, множество музеев рядом.',
            'tokyo.rec4': '<strong>Район Харадзюку</strong> - молодежная мода, креативные магазины и кафе.',
            'tokyo.rec5': '<strong>Токийская башня</strong> - смотровая площадка с панорамным видом на город, особенно красива ночью.',
            'tokyo.rec6': '<strong>Рынок Цукидзи</strong> - попробуйте свежайшие суши на завтрак!',
            'greece.p1': 'Санторини встретил меня белоснежными домиками и синими куполами церквей. Этот остров - настоящая жемчужина Эгейского моря.',
            'greece.p2': 'Закаты на Санторини - это отдельное произведение искусства. Солнце медленно опускается в море, окрашивая небо в невероятные оттенки розового и оранжевого.',
            'greece.p3': 'Узкие улочки Ойи, традиционные таверны с греческой кухней и гостеприимство местных жителей сделали эту поездку незабываемой.',
            'greece.p4': 'Древняя история острова ощущается в каждом камне. Раскопки Акротири показали, что здесь когда-то процветала минойская цивилизация.',
            'greece.rec.title': 'Рекомендации для посещения',
            'greece.rec1': '<strong>Деревня Ойя</strong> - лучшие закаты в мире! Приходите за час до заката, чтобы занять хорошее место.',
            'greece.rec2': '<strong>Красный пляж</strong> - уникальный пляж с красными скалами, возьмите водную обувь.',
            'greece.rec3': '<strong>Акротири</strong> - древний город, погребенный под вулканическим пеплом, "греческие Помпеи".',
            'greece.rec4': '<strong>Винодельни</strong> - попробуйте местное вино Assyrtiko с видом на кальдеру.',
            'greece.rec5': '<strong>Фира</strong> - столица острова, прогуляйтесь по краю кальдеры, множество магазинов и ресторанов.',
            'greece.rec6': '<strong>Круиз к вулкану</strong> - посетите действующий вулкан и горячие источники.',
            'bali.p1': 'Бали - это остров богов, где каждый день начинается с ароматных подношений и звуков традиционной музыки. Убуд, культурное сердце острова, встретил меня изумрудными рисовыми террасами и древними храмами.',
            'bali.p2': 'Рисовые террасы Тегаллаланг - это живое произведение искусства. Ярко-зеленые ступени, созданные руками балийских фермеров, спускаются по склонам холмов, создавая невероятный пейзаж.',
            'bali.p3': 'Храм Танах Лот, стоящий на скале посреди океана, особенно прекрасен на закате. Волны разбиваются о камни, а солнце окрашивает небо в огненные цвета.',
            'bali.p4': 'Балийская кухня, йога на рассвете, серфинг на океанских волнах и невероятное гостеприимство местных жителей сделали это путешествие незабываемым.',
            'bali.rec.title': 'Рекомендации для посещения',
            'bali.rec1': '<strong>Рисовые террасы Тегаллаланг</strong> - приходите рано утром, когда меньше туристов и красивый свет.',
            'bali.rec2': '<strong>Храм Танах Лот</strong> - лучшее время для посещения - закат, но будьте готовы к толпам.',
            'bali.rec3': '<strong>Убуд</strong> - культурный центр: посетите Лес обезьян, художественные галереи и рынок.',
            'bali.rec4': '<strong>Водопад Тегенунган</strong> - освежающее купание в джунглях, возьмите купальник!',
            'bali.rec5': '<strong>Пляж Семиньяк</strong> - для серфинга и пляжных клубов с закатами.',
            'bali.rec6': '<strong>Гора Батур</strong> - треккинг на рассвете к вулкану, незабываемые виды!',
            'newyork.p1': 'Нью-Йорк - это город, который никогда не спит. С первых минут он захватывает своей энергией, разнообразием и масштабом. Небоскребы Манхэттена устремляются в небо, создавая невероятный городской пейзаж.',
            'newyork.p2': 'Прогулка по Центральному парку - это оазис спокойствия посреди бетонных джунглей. Осенние краски деревьев, уличные музыканты и белки, выпрашивающие орешки у прохожих.',
            'newyork.p3': 'Статуя Свободы - символ надежды и свободы. Паром к острову Либерти открывает потрясающий вид на Манхэттен с воды.',
            'newyork.p4': 'Бродвейские шоу, музеи мирового уровня, разнообразная кухня со всех уголков планеты - в Нью-Йорке действительно можно найти все, что душе угодно.',
            'newyork.rec.title': 'Рекомендации для посещения',
            'newyork.rec1': '<strong>Центральный парк</strong> - возьмите велосипед напрокат или просто гуляйте, не пропустите Bethesda Terrace.',
            'newyork.rec2': '<strong>Статуя Свободы</strong> - бронируйте билеты заранее, особенно если хотите подняться на корону.',
            'newyork.rec3': '<strong>Бруклинский мост</strong> - прогулка на закате с видом на Манхэттен незабываема!',
            'newyork.rec4': '<strong>Таймс-Сквер</strong> - обязательно посетите вечером, когда загораются все огни.',
            'newyork.rec5': '<strong>Музей Метрополитен</strong> - один из лучших музеев мира, выделите целый день.',
            'newyork.rec6': '<strong>High Line</strong> - парк на высоте, созданный на старой железной дороге.',
            'newyork.rec7': '<strong>Бродвей</strong> - купите билеты на шоу заранее или попробуйте lottery для дешевых билетов.',
            'iceland.p1': 'Исландия - это страна контрастов, где огонь встречается со льдом. Суровая красота этой земли завораживает с первого взгляда. Вулканические пейзажи, ледники, водопады и гейзеры создают ощущение, что ты попал на другую планету.',
            'iceland.p2': 'Северное сияние - это то, ради чего стоит приехать в Исландию осенью. Зеленые и фиолетовые волны танцуют в ночном небе, создавая невероятное световое шоу.',
            'iceland.p3': 'Водопад Скоугафосс поражает своей мощью. Миллионы литров воды обрушиваются с высоты 60 метров, создавая облако брызг и радугу в солнечные дни.',
            'iceland.p4': 'Ледниковая лагуна Йокульсарлон - это место, где айсберги медленно дрейфуют к океану. Голубой лед, черный песок и тюлени, выглядывающие из воды - картина, которую невозможно забыть.',
            'iceland.rec.title': 'Рекомендации для посещения',
            'iceland.rec1': '<strong>Золотое кольцо</strong> - маршрут включает Тингвеллир, Гейсир и водопад Гюдльфосс, можно за день.',
            'iceland.rec2': '<strong>Ледниковая лагуна Йокульсарлон</strong> - возьмите тур на лодке между айсбергами, незабываемо!',
            'iceland.rec3': '<strong>Водопад Скоугафосс</strong> - поднимитесь по лестнице наверх для панорамного вида.',
            'iceland.rec4': '<strong>Голубая лагуна</strong> - геотермальный спа, бронируйте заранее, лучше вечером.',
            'iceland.rec5': '<strong>Рейкьявик</strong> - церковь Хатльгримскиркья, музеи и уютные кафе.',
            'iceland.rec6': '<strong>Северное сияние</strong> - сентябрь-март, уезжайте подальше от города, проверяйте прогноз.',
            'iceland.rec7': '<strong>Черный пляж Рейнисфьяра</strong> - базальтовые колонны и мощные волны, будьте осторожны!'
        },
        en: {
            // Translations for About page
            'about.add.title': 'Add Your Review',
            'about.form.name': 'Your name:',
            'about.form.text': 'Your review:',
            'about.form.avatar': 'Photo link (optional):',
            'about.form.submit': 'Publish',
            'about.review1.text': 'I have been to Paris, Switzerland, Tokyo, Greece, Bali, New York and Iceland. I highly recommend visiting Paris in spring when the city is especially beautiful, and Iceland in autumn for the northern lights. I especially recommend places like the Eiffel Tower at sunset, Tegallalang rice terraces in Bali, Skogafoss waterfall in Iceland and sunsets in the village of Oia in Santorini. Each of these places left an indelible impression on my heart!',
            'about.review2.text': 'I have been to Italy, Spain, Portugal and Czech Republic. I recommend visiting Rome and Barcelona - these are cities with incredible architecture and history. And especially places like the Colosseum in Rome, Sagrada Familia in Barcelona, Charles Bridge in Prague and the Algarve coast in Portugal. Don\'t forget to try the local cuisine - Italian pasta, Spanish paella and Portuguese pastel de nata. These countries will conquer your heart!',
            'about.review3.text': 'I have been to Thailand, Vietnam, Cambodia and Malaysia. I highly recommend visiting Bangkok and the islands of Thailand - these are paradise places with snow-white beaches. And especially places like Halong Bay in Vietnam, Angkor Wat temple complex in Cambodia, Phi Phi Islands in Thailand and Petronas Towers in Kuala Lumpur. Asia is a completely different world that you need to see with your own eyes. Don\'t be afraid to try street food - it\'s delicious!',
            'about.review4.text': 'I have been to Turkey, Egypt, UAE and Georgia. I recommend visiting Istanbul - a city at the crossroads of Europe and Asia, and Tbilisi with its incredible hospitality. And especially places like the Blue Mosque in Istanbul, the pyramids of Giza in Egypt, Burj Khalifa in Dubai and sulfur baths in Tbilisi. These countries will surprise you with their culture and cuisine. Be sure to try Turkish kebab, Egyptian koshary, Emirati dates and Georgian khinkali!',
            'switzerland.p1': 'The Swiss Alps are a place where nature shows all its power and beauty. Interlaken, located between two lakes, became the starting point of my journey.',
            'switzerland.p2': 'The ascent to Jungfraujoch, the "Top of Europe", left unforgettable impressions. Glaciers, mountain peaks and the purest air create a feeling that you are at the edge of the world.',
            'switzerland.p3': 'Walks through alpine meadows, the ringing of bells on cows\' necks and traditional Swiss chalets - all this creates a fairy-tale atmosphere.',
            'switzerland.rec.title': 'Recommendations for Visiting',
            'switzerland.rec1': '<strong>Jungfraujoch</strong> - the highest railway station in Europe, book tickets in advance!',
            'switzerland.rec2': '<strong>Lakes Thun and Brienz</strong> - boat ride with mountain views, incredibly beautiful.',
            'switzerland.rec3': '<strong>Lauterbrunnen</strong> - valley of 72 waterfalls, be sure to visit Staubbach Falls.',
            'switzerland.rec4': '<strong>Grindelwald</strong> - picturesque village for trekking and skiing.',
            'switzerland.rec5': '<strong>Swiss chocolate</strong> - try it in local shops, it\'s a completely different level!',
            'tokyo.p1': 'Tokyo greeted me with a whirlwind of neon lights and incredible energy. This city is an amazing combination of ancient traditions and futuristic technology.',
            'tokyo.p2': 'A walk through the Asakusa district led me to the ancient Senso-ji temple, where time seemed to stand still. The aroma of incense, the ringing of bells and tranquility amidst the bustling metropolis.',
            'tokyo.p3': 'Spring cherry blossom turned the parks into a pink cloud. The Japanese call this hanami - a tradition of admiring flowers that unites the whole country.',
            'tokyo.p4': 'The Shibuya district with its famous crossing, where thousands of people cross the road at the same time, showed me the real rhythm of modern Tokyo.',
            'tokyo.rec.title': 'Recommendations for Visiting',
            'tokyo.rec1': '<strong>Senso-ji Temple</strong> - Tokyo\'s oldest temple in Asakusa district, come early in the morning.',
            'tokyo.rec2': '<strong>Shibuya Crossing</strong> - the busiest intersection in the world, best view from Starbucks across the street.',
            'tokyo.rec3': '<strong>Ueno Park</strong> - ideal for hanami (cherry blossom viewing) in spring, many museums nearby.',
            'tokyo.rec4': '<strong>Harajuku District</strong> - youth fashion, creative shops and cafes.',
            'tokyo.rec5': '<strong>Tokyo Tower</strong> - observation deck with panoramic city views, especially beautiful at night.',
            'tokyo.rec6': '<strong>Tsukiji Market</strong> - try the freshest sushi for breakfast!',
            'greece.p1': 'Santorini greeted me with snow-white houses and blue church domes. This island is a true pearl of the Aegean Sea.',
            'greece.p2': 'Sunsets in Santorini are a separate work of art. The sun slowly sinks into the sea, painting the sky in incredible shades of pink and orange.',
            'greece.p3': 'The narrow streets of Oia, traditional taverns with Greek cuisine and the hospitality of locals made this trip unforgettable.',
            'greece.rec.title': 'Recommendations for Visiting',
            'greece.rec1': '<strong>Sunset in Oia</strong> - arrive an hour before sunset to get a good spot.',
            'greece.rec2': '<strong>Kamari Beach</strong> - black volcanic sand and crystal clear water.',
            'greece.rec3': '<strong>Ancient City of Akrotiri</strong> - archaeological excavations of Minoan civilization.',
            'greece.rec4': '<strong>Wineries</strong> - try local Assyrtiko wine with caldera views.',
            'greece.rec5': '<strong>Fira</strong> - the island capital with many shops and restaurants.',
            'bali.p1': 'Bali is an island where time flows differently. The Tegallalang rice terraces amazed with their beauty and scale.',
            'bali.p2': 'Ancient temples such as Tanah Lot and Uluwatu stand on cliffs above the ocean. Sunsets here are especially magical.',
            'bali.p3': 'Ubud is the cultural heart of Bali. Here I got acquainted with Balinese traditions, attended ceremonies and tried real Indonesian cuisine.',
            'bali.rec.title': 'Recommendations for Visiting',
            'bali.rec1': '<strong>Tegallalang Rice Terraces</strong> - best time to visit is early morning.',
            'bali.rec2': '<strong>Tanah Lot Temple</strong> - come for sunset, incredible views!',
            'bali.rec3': '<strong>Monkey Forest in Ubud</strong> - be careful with your belongings, monkeys are very clever.',
            'bali.rec4': '<strong>Tegenungan Waterfall</strong> - refreshing swim in the jungle.',
            'bali.rec5': '<strong>Seminyak Beach</strong> - great restaurants and surfing.',
            'newyork.p1': 'New York is a city that never sleeps. Manhattan with its skyscrapers is breathtaking at first sight.',
            'newyork.p2': 'A walk through Central Park became an oasis of calm amidst the urban hustle. The Statue of Liberty is a symbol of freedom and hope.',
            'newyork.p3': 'Broadway shows, world-class museums and incredible diversity of cuisines from around the world - New York is truly a city of opportunities.',
            'newyork.rec.title': 'Recommendations for Visiting',
            'newyork.rec1': '<strong>Statue of Liberty</strong> - book tickets in advance, queues are huge.',
            'newyork.rec2': '<strong>Central Park</strong> - rent a bike, the park is huge.',
            'newyork.rec3': '<strong>Times Square</strong> - must visit in the evening when all the lights come on.',
            'newyork.rec4': '<strong>Brooklyn Bridge</strong> - walk with Manhattan views, especially beautiful at sunset.',
            'newyork.rec5': '<strong>Metropolitan Museum</strong> - one of the best museums in the world, allocate a whole day.',
            'iceland.p1': 'Iceland is a land of contrasts. Glaciers neighbor volcanoes, and hot springs - icy waterfalls.',
            'iceland.p2': 'The Northern Lights are what makes it worth coming to Iceland. The dance of green lights in the night sky is impossible to forget.',
            'iceland.p3': 'Blue Lagoon, Gullfoss and Skogafoss waterfalls, black beaches of Vik - each place is unique and beautiful in its own way.',
            'iceland.rec.title': 'Recommendations for Visiting',
            'iceland.rec1': '<strong>Blue Lagoon</strong> - book in advance, very popular place.',
            'iceland.rec2': '<strong>Golden Circle</strong> - route includes Geysir, Gullfoss and Thingvellir National Park.',
            'iceland.rec3': '<strong>Northern Lights Hunt</strong> - best time from September to March, need clear weather.',
            'iceland.rec4': '<strong>Jokulsarlon Glacier Lagoon</strong> - icebergs in the lagoon, incredible sight.',
            'iceland.rec5': '<strong>Reynisfjara Black Beach</strong> - be careful with waves, they are very strong.'
        },
        ro: {
            // Переводы для страницы "О нас"
            'about.add.title': 'Adaugă propria recenzie',
            'about.form.name': 'Numele tău:',
            'about.form.text': 'Recenzia ta:',
            'about.form.avatar': 'Link către fotografie (opțional):',
            'about.form.submit': 'Publică',
            'about.review1.text': 'Am fost în Paris, Elveția, Tokyo, Grecia, Bali, New York și Islanda. Recomand cu căldură să vizitați Parisul primăvara, când orașul este deosebit de frumos, și Islanda toamna pentru aurora boreală. Recomand în special locuri precum Turnul Eiffel la apus, terasele de orez Tegallalang din Bali, cascada Skogafoss din Islanda și apusurile din satul Oia din Santorini. Fiecare dintre aceste locuri a lăsat o impresie de neuitat în inima mea!',
            'about.review2.text': 'Am fost în Italia, Spania, Portugalia și Cehia. Recomand să vizitați Roma și Barcelona - acestea sunt orașe cu arhitectură și istorie incredibile. Și în special locuri precum Colosseumul din Roma, Sagrada Familia din Barcelona, Podul Carol din Praga și coasta Algarve din Portugalia. Nu uitați să încercați bucătăria locală - paste italiene, paella spaniolă și pastel de nata portugheză. Aceste țări vă vor cuceri inima!',
            'about.review3.text': 'Am fost în Thailanda, Vietnam, Cambodgia și Malaezia. Recomand cu căldură să vizitați Bangkok și insulele Thailandei - acestea sunt locuri paradisiace cu plaje albe ca zăpada. Și în special locuri precum Golful Halong din Vietnam, complexul de temple Angkor Wat din Cambodgia, insulele Phi Phi din Thailanda și turnurile Petronas din Kuala Lumpur. Asia este o lume complet diferită pe care trebuie să o vezi cu ochii tăi. Nu vă fie teamă să încercați mâncarea de stradă - este delicioasă!',
            'about.review4.text': 'Am fost în Turcia, Egipt, EAU și Georgia. Recomand să vizitați Istanbul - orașul la intersecția Europei și Asiei, și Tbilisi cu ospitalitatea sa incredibilă. Și în special locuri precum Moscheea Albastră din Istanbul, piramidele din Giza din Egipt, Burj Khalifa din Dubai și băile cu sulf din Tbilisi. Aceste țări vă vor surprinde cu cultura și bucătăria lor. Asigurați-vă că încercați kebab turcesc, koshary egiptean, curmale din Emirate și khinkali georgian!',
            'switzerland.p1': 'Alpii Elvețieni sunt un loc unde natura își arată toată puterea și frumusețea. Interlaken, situat între două lacuri, a devenit punctul de plecare al călătoriei mele.',
            'switzerland.p2': 'Urcarea la Jungfraujoch, "Vârful Europei", a lăsat impresii de neuitat. Ghețarii, vârfurile munților și aerul cel mai curat creează senzația că te afli la marginea lumii.',
            'switzerland.p3': 'Plimbări prin pajiștile alpine, sunetul clopotelor de la gâtul vacilor și chaleturile elvețiene tradiționale - toate acestea creează o atmosferă de basm.',
            'switzerland.rec.title': 'Recomandări pentru Vizitare',
            'switzerland.rec1': '<strong>Jungfraujoch</strong> - cea mai înaltă stație feroviară din Europa, rezervați biletele în avans!',
            'switzerland.rec2': '<strong>Lacurile Thun și Brienz</strong> - plimbare cu barca cu priveliști montane, incredibil de frumos.',
            'switzerland.rec3': '<strong>Lauterbrunnen</strong> - valea celor 72 de cascade, asigurați-vă că vizitați cascada Staubbach.',
            'switzerland.rec4': '<strong>Grindelwald</strong> - sat pitoresc pentru drumeții și schi.',
            'switzerland.rec5': '<strong>Ciocolata elvețiană</strong> - încercați-o în magazinele locale, este cu totul alt nivel!',
            'tokyo.p1': 'Tokyo m-a întâmpinat cu un vârtej de lumini neon și energie incredibilă. Acest oraș este o combinație uimitoare de tradiții antice și tehnologie futuristă.',
            'tokyo.p2': 'O plimbare prin cartierul Asakusa m-a condus la templul antic Senso-ji, unde timpul părea să se fi oprit. Aroma de tămâie, sunetul clopotelor și liniștea în mijlocul metropolei zgomotoase.',
            'tokyo.p3': 'Înflorirea de primăvară a cireșilor a transformat parcurile într-un nor roz. Japonezii numesc aceasta hanami - o tradiție de admirare a florilor care unește întreaga țară.',
            'tokyo.p4': 'Cartierul Shibuya cu celebra sa trecere de pietoni, unde mii de oameni traversează strada simultan, mi-a arătat ritmul real al Tokyo-ului modern.',
            'tokyo.rec.title': 'Recomandări pentru Vizitare',
            'tokyo.rec1': '<strong>Templul Senso-ji</strong> - cel mai vechi templu din Tokyo în cartierul Asakusa, veniți dimineața devreme.',
            'tokyo.rec2': '<strong>Trecerea Shibuya</strong> - cea mai aglomerată intersecție din lume, cea mai bună vedere de la Starbucks de peste drum.',
            'tokyo.rec3': '<strong>Parcul Ueno</strong> - ideal pentru hanami (admirarea florilor de cireș) primăvara, multe muzee în apropiere.',
            'tokyo.rec4': '<strong>Cartierul Harajuku</strong> - modă tinerească, magazine creative și cafenele.',
            'tokyo.rec5': '<strong>Turnul Tokyo</strong> - platformă de observație cu vedere panoramică asupra orașului, deosebit de frumos noaptea.',
            'tokyo.rec6': '<strong>Piața Tsukiji</strong> - încercați cel mai proaspăt sushi la micul dejun!',
            'greece.p1': 'Santorini m-a întâmpinat cu case albe ca zăpada și cupole albastre ale bisericilor. Această insulă este o adevărată perlă a Mării Egee.',
            'greece.p2': 'Apusurile de soare în Santorini sunt o operă de artă separată. Soarele coboară încet în mare, pictând cerul în nuanțe incredibile de roz și portocaliu.',
            'greece.p3': 'Străzile înguste ale Oiei, tavernele tradiționale cu bucătărie grecească și ospitalitatea localnicilor au făcut această călătorie de neuitat.',
            'greece.rec.title': 'Recomandări pentru Vizitare',
            'greece.rec1': '<strong>Apus în Oia</strong> - ajungeți cu o oră înainte de apus pentru a obține un loc bun.',
            'greece.rec2': '<strong>Plaja Kamari</strong> - nisip vulcanic negru și apă cristalină.',
            'greece.rec3': '<strong>Orașul Antic Akrotiri</strong> - săpături arheologice ale civilizației minoice.',
            'greece.rec4': '<strong>Cramele de vin</strong> - încercați vinul local Assyrtiko cu vedere la calderă.',
            'greece.rec5': '<strong>Fira</strong> - capitala insulei cu multe magazine și restaurante.',
            'bali.p1': 'Bali este o insulă unde timpul curge diferit. Terasele de orez Tegallalang au uimit prin frumusețea și amploarea lor.',
            'bali.p2': 'Temple antice precum Tanah Lot și Uluwatu stau pe stânci deasupra oceanului. Apusurile de soare aici sunt deosebit de magice.',
            'bali.p3': 'Ubud este inima culturală a Bali. Aici m-am familiarizat cu tradițiile balineze, am participat la ceremonii și am încercat bucătăria indonesiană autentică.',
            'bali.rec.title': 'Recomandări pentru Vizitare',
            'bali.rec1': '<strong>Terasele de Orez Tegallalang</strong> - cel mai bun moment pentru vizitare este dimineața devreme.',
            'bali.rec2': '<strong>Templul Tanah Lot</strong> - veniți la apus, priveliști incredibile!',
            'bali.rec3': '<strong>Pădurea Maimuțelor în Ubud</strong> - fiți atenți cu lucrurile, maimuțele sunt foarte iscusite.',
            'bali.rec4': '<strong>Cascada Tegenungan</strong> - baie răcoritoare în junglă.',
            'bali.rec5': '<strong>Plaja Seminyak</strong> - restaurante grozave și surfing.',
            'newyork.p1': 'New York este un oraș care nu doarme niciodată. Manhattan cu zgârie-norii săi este uluitor la prima vedere.',
            'newyork.p2': 'O plimbare prin Central Park a devenit o oază de calm în mijlocul agitației urbane. Statuia Libertății este un simbol al libertății și speranței.',
            'newyork.p3': 'Spectacole de pe Broadway, muzee de clasă mondială și diversitate incredibilă de bucătării din întreaga lume - New York este cu adevărat un oraș al oportunităților.',
            'newyork.rec.title': 'Recomandări pentru Vizitare',
            'newyork.rec1': '<strong>Statuia Libertății</strong> - rezervați biletele în avans, cozile sunt uriașe.',
            'newyork.rec2': '<strong>Central Park</strong> - închiriați o bicicletă, parcul este imens.',
            'newyork.rec3': '<strong>Times Square</strong> - trebuie să vizitați seara când se aprind toate luminile.',
            'newyork.rec4': '<strong>Podul Brooklyn</strong> - plimbare cu vedere la Manhattan, deosebit de frumos la apus.',
            'newyork.rec5': '<strong>Muzeul Metropolitan</strong> - unul dintre cele mai bune muzee din lume, alocați o zi întreagă.',
            'iceland.p1': 'Islanda este o țară a contrastelor. Ghețarii se învecinează cu vulcanii, iar izvoarele termale - cu cascade înghețate.',
            'iceland.p2': 'Aurora boreală este ceea ce face să merite să vii în Islanda. Dansul luminilor verzi pe cerul nopții este imposibil de uitat.',
            'iceland.p3': 'Laguna Albastră, cascadele Gullfoss și Skogafoss, plajele negre din Vik - fiecare loc este unic și frumos în felul său.',
            'iceland.rec.title': 'Recomandări pentru Vizitare',
            'iceland.rec1': '<strong>Laguna Albastră</strong> - rezervați în avans, loc foarte popular.',
            'iceland.rec2': '<strong>Cercul de Aur</strong> - ruta include Geysir, Gullfoss și Parcul Național Thingvellir.',
            'iceland.rec3': '<strong>Vânătoarea Aurorei Boreale</strong> - cel mai bun moment din septembrie până în martie, este nevoie de vreme senină.',
            'iceland.rec4': '<strong>Laguna Glaciară Jokulsarlon</strong> - aisberguri în lagună, spectacol incredibil.',
            'iceland.rec5': '<strong>Plaja Neagră Reynisfjara</strong> - fiți atenți cu valurile, sunt foarte puternice.'
        }
    };
    
    // Объединяем переводы
    Object.keys(allTranslations).forEach(lang => {
        if (translations[lang]) {
            Object.assign(translations[lang], allTranslations[lang]);
        }
    });
    
    // Автоматически добавляем атрибуты data-translate
    const currentPage = window.location.pathname;
    let destination = null;
    
    if (currentPage.includes('travel-1')) destination = 'paris';
    else if (currentPage.includes('travel-2')) destination = 'switzerland';
    else if (currentPage.includes('travel-3')) destination = 'tokyo';
    else if (currentPage.includes('travel-4')) destination = 'greece';
    else if (currentPage.includes('travel-5')) destination = 'bali';
    else if (currentPage.includes('travel-6')) destination = 'newyork';
    else if (currentPage.includes('travel-7')) destination = 'iceland';
    
    if (destination) {
        setTimeout(() => {
            autoTranslate(destination);
            const currentLang = localStorage.getItem('language') || 'ru';
            if (currentLang !== 'ru' && typeof translatePage === 'function') {
                translatePage(currentLang);
            }
        }, 100);
    }
});

function autoTranslate(destination) {
    const h1 = document.querySelector('.travel-header h1');
    if (h1) h1.setAttribute('data-translate', `${destination}.title`);
    
    const location = document.querySelector('.travel-location');
    if (location) location.setAttribute('data-translate', `${destination}.location`);
    
    const date = document.querySelector('.travel-date');
    if (date) date.setAttribute('data-translate', `${destination}.date`);
    
    const paragraphs = document.querySelectorAll('.travel-content > p');
    paragraphs.forEach((p, index) => {
        p.setAttribute('data-translate', `${destination}.p${index + 1}`);
    });
    
    const recTitle = document.querySelector('.travel-content h2');
    if (recTitle) recTitle.setAttribute('data-translate', `${destination}.rec.title`);
    
    const recommendations = document.querySelectorAll('.recommendations li');
    recommendations.forEach((li, index) => {
        li.setAttribute('data-translate', `${destination}.rec${index + 1}`);
    });
    
    const backButton = document.querySelector('.back-button');
    if (backButton) backButton.setAttribute('data-translate', 'card.back');
    
    const footer = document.querySelector('.site-footer p');
    if (footer) footer.setAttribute('data-translate', 'footer.text');
    
    const navLinks = document.querySelectorAll('.nav-link');
    const navMap = ['nav.home', 'nav.paris', 'nav.switzerland', 'nav.tokyo', 'nav.greece', 'nav.bali', 'nav.newyork', 'nav.iceland'];
    navLinks.forEach((link, index) => {
        if (navMap[index]) link.setAttribute('data-translate', navMap[index]);
    });
}
