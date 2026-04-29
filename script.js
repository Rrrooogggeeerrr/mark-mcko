const appData = {
  literature: {
    label: "Литература",
    accent: "Термины, «Муму», Пушкин, Гоголь",
    examDate: "18 мая 2026",
    examFormat: "11 заданий, 45 минут, до 17 баллов",
    examCount: 11,
    overview: [
      "Здесь все собрано по прошлогоднему образцу: термины, «Муму», «Зимнее утро» и «Ночь перед Рождеством».",
      "Удобная схема прошлого года: 1-2 термины, 3-6 «Муму», 7-8 Пушкин, 9-11 Гоголь.",
      "Рядом держим и кодификатор: «Кавказский пленник», басни Крылова, сказки, Лермонтова, Некрасова, Астафьева и юмористические рассказы."
    ],
    formatCards: [
      {
        title: "Как устроена работа",
        text: "11 заданий, 45 минут, компьютерный формат. Максимум — 17 баллов."
      },
      {
        title: "Что было в прошлом году",
        text: "Термины, устаревшие слова, тропы по «Муму», пейзажная лирика по Пушкину и герои Гоголя."
      },
      {
        title: "На что давить",
        text: "Ровно два ответа, герои и события, плюс быстрое различение эпитета, сравнения и метафоры."
      }
    ],
    flashcards: [
      { front: "Герой", back: "Действующее лицо литературного произведения." },
      { front: "Проза", back: "Нестихотворные произведения: рассказ, повесть, сказка." },
      { front: "Эпитет", back: "Художественное определение. Пример: «чудесный день»." },
      { front: "Сравнение", back: "Есть слова «как», «словно», «точно». Пример: «как детский барабан»." },
      { front: "Метафора", back: "Скрытое сравнение без слова «как». Пример: «приживалка порхнула»." },
      { front: "Покои", back: "Устаревшее слово: жилые комнаты, часть дома для жилья." },
      { front: "Пейзажная лирика", back: "Лирика о природе. «Зимнее утро» относится сюда." },
      { front: "Герасим", back: "Главный герой «Муму». Любил Муму и ухаживал за Татьяной." },
      { front: "Пузатый Пацюк", back: "Бывший запорожец и знахарь; к нему вареники сами летят в рот." },
      { front: "Вакула", back: "Влюбленный кузнец, который добыл черевички и потом сватал Оксану." }
    ],
    pitfalls: [
      {
        title: "Термины в начале",
        rule: "Первые два задания короткие, но именно их часто теряют из-за спешки.",
        memory: "Герой = действующее лицо. Проза = нестихотворный текст.",
        challenge: "Как называется действующее лицо произведения?",
        answer: "Герой."
      },
      {
        title: "Ровно два ответа",
        rule: "Если просят выбрать два верных утверждения, отмечать нужно именно два, не один и не три.",
        memory: "Перед отправкой быстро считаем галочки: одна, две — стоп.",
        challenge: "Сколько ответов нужно отметить в задании «Выберите два верных утверждения»?",
        answer: "Ровно два."
      },
      {
        title: "Тропы в тексте",
        rule: "Есть «как» — сравнение. Яркое слово-признак — эпитет. Переносное действие без «как» — метафора.",
        memory: "«Как детский барабан» — сравнение. «Великолепных покоях» — эпитет. «Порхнула» — метафора.",
        challenge: "Как называется троп в примере «как детский барабан»?",
        answer: "Сравнение."
      },
      {
        title: "Устаревшие слова",
        rule: "В прошлом образце прямо спрашивали старое слово со значением «часть дома, предназначенная для жилья».",
        memory: "Покои = комнаты. Лакей = слуга. Передняя = передняя часть дома.",
        challenge: "Что значит слово «покои»?",
        answer: "Жилые комнаты, часть дома для жилья."
      },
      {
        title: "Гоголь: герой и характеристика",
        rule: "Нужно держать рядом три опоры: Вакула — кузнец, Чуб — отец Оксаны, Пацюк — бывший запорожец и знахарь.",
        memory: "Оксана просит, Вакула делает, Пацюк помогает странным чудом.",
        challenge: "Кто в повести бывший запорожец и знахарь?",
        answer: "Пузатый Пацюк."
      }
    ],
    booster: [
      "Повтори схему работы: термины -> «Муму» -> Пушкин -> Гоголь.",
      "По «Муму» вслух назови: Герасим, Татьяна, барыня, Муму.",
      "Перед ответом всегда смотри на формат: слово, один вариант или ровно два ответа."
    ],
    cheatSheet: [
      { title: "1-2", text: "герой, проза" },
      { title: "3-6", text: "«Муму»: слово, тропы, герои" },
      { title: "7-8", text: "Пушкин: лирика и эпитет" },
      { title: "9-11", text: "Гоголь: герои и события" },
      { title: "Покои", text: "жилые комнаты" },
      { title: "Два ответа", text: "отмечай ровно два" }
    ],
    questions: [
      {
        id: "lit-hero-term",
        theme: "Термины",
        type: "input",
        inputKind: "text",
        prompt: "Как называется действующее лицо литературного произведения? Впиши одно слово.",
        acceptableAnswers: ["герой", "персонаж"],
        explanation: "Правильный ответ: герой. Допустимо и слово «персонаж».",
        hint: "Так называют участника событий в тексте.",
        placeholder: "Напиши слово"
      },
      {
        id: "lit-prose-term",
        theme: "Термины",
        type: "input",
        inputKind: "text",
        prompt: "Запиши термин, которым обозначаются литературные нестихотворные произведения.",
        acceptableAnswers: ["проза"],
        explanation: "Правильный ответ: проза.",
        hint: "Рассказ и повесть относятся именно сюда.",
        placeholder: "Напиши слово"
      },
      {
        id: "lit-mumu-archaic",
        theme: "Муму",
        type: "single",
        prompt: "В отрывке из «Муму» выбери устаревшее слово со значением «часть дома, предназначенная для жилья».",
        options: ["передняя", "кухня", "покои", "палисадник"],
        answer: 2,
        explanation: "Правильный ответ: «покои». Это жилые комнаты, часть дома для жилья.",
        hint: "Это слово часто встречается в старых текстах о доме или дворце."
      },
      {
        id: "lit-mumu-comparison",
        theme: "Муму",
        type: "single",
        prompt: "Как называется средство выразительности в примере «...выколачивал и вытряхивал бочку, перевёртывая её в руках, как детский барабан»?",
        options: ["эпитет", "сравнение", "метафора", "олицетворение"],
        answer: 1,
        explanation: "В примере есть слово «как», значит это сравнение.",
        hint: "Союз «как» почти всегда подсказывает ответ."
      },
      {
        id: "lit-mumu-metaphor",
        theme: "Муму",
        type: "single",
        prompt: "Как называется средство выразительности в примере «Приживалка тотчас порхнула в переднюю»?",
        options: ["метафора", "сравнение", "эпитет", "аллегория"],
        answer: 0,
        explanation: "Здесь нет слова «как», а действие употреблено переносно, значит это метафора.",
        hint: "Спроси себя: нет ли здесь скрытого сравнения?"
      },
      {
        id: "lit-two-true",
        theme: "Муму",
        type: "multi",
        requiredSelections: 2,
        prompt: "Выбери два верных утверждения о произведении И. С. Тургенева «Муму».",
        options: [
          "Герасим ухаживал за прачкой Татьяной.",
          "Барыня искренне привязалась к Муму.",
          "Герасим относился к Муму с большой любовью.",
          "После истории с Муму Герасим остался в Москве."
        ],
        answer: [0, 2],
        explanation: "Верны утверждения про Татьяну и любовь Герасима к Муму.",
        hint: "Здесь обязательно нужно отметить ровно два ответа."
      },
      {
        id: "lit-landscape",
        theme: "Пушкин",
        type: "single",
        prompt: "К какой тематической группе лирики относится стихотворение А. С. Пушкина «Зимнее утро»?",
        options: ["пейзажная лирика", "гражданская лирика", "любовная лирика", "патриотическая лирика"],
        answer: 0,
        explanation: "«Зимнее утро» относится к пейзажной лирике, потому что в центре стихотворения картина природы.",
        hint: "Подумай, о чем здесь прежде всего идет речь: о природе или об общественной жизни?"
      },
      {
        id: "lit-day-wonderful",
        theme: "Пушкин",
        type: "single",
        prompt: "Какое средство выразительности есть в строке «Мороз и солнце; день чудесный!»?",
        options: ["эпитет", "гипербола", "сравнение", "аллегория"],
        answer: 0,
        explanation: "Слово «чудесный» — образное определение, то есть эпитет.",
        hint: "Ищи яркое слово-признак."
      },
      {
        id: "lit-vakula",
        theme: "Гоголь",
        type: "single",
        prompt: "Кто такой Вакула в повести Н. В. Гоголя «Ночь перед Рождеством»?",
        options: [
          "бывший запорожец и знахарь",
          "отец Оксаны",
          "влюбленный кузнец, чудом попавший в Петербург",
          "злой пакостник, поклявшийся отомстить художнику"
        ],
        answer: 2,
        explanation: "Правильный ответ: Вакула — влюбленный кузнец, который добыл черевички и попал в Петербург.",
        hint: "Это главный герой, который действует ради Оксаны."
      },
      {
        id: "lit-patsyuk",
        theme: "Гоголь",
        type: "single",
        prompt: "Кто такой Пузатый Пацюк?",
        options: [
          "бывший запорожец и знахарь",
          "отец Оксаны",
          "богатый купец",
          "дьяк из соседнего села"
        ],
        answer: 0,
        explanation: "Пузатый Пацюк — бывший запорожец, знахарь; в народе считают, что он «знает всех чертей».",
        hint: "Это тот самый герой, к которому вареники сами летят в рот."
      },
      {
        id: "lit-gogol-statement",
        theme: "Гоголь",
        type: "single",
        prompt: "Выбери верное утверждение о повести «Ночь перед Рождеством».",
        options: [
          "События происходят в период сбора урожая.",
          "Кузнец отправился к царице на тройке.",
          "После возвращения из Петербурга Вакула сватает Оксану.",
          "Царица пригласила Оксану к себе на приём."
        ],
        answer: 2,
        explanation: "Верное утверждение: после возвращения из Петербурга Вакула сватает Оксану.",
        hint: "Вспомни финал повести."
      }
    ]
  },
  geography: {
    label: "География",
    accent: "Карта, топография, масштаб, формулы",
    examDate: "20 мая 2026",
    examFormat: "14 заданий, 45 минут, атлас разрешен",
    examCount: 14,
    overview: [
      "Здесь все собрано по прошлогоднему образцу: карта мира, физико-географические науки, путешественники, топографическая карта, масштаб, формулы и земная кора.",
      "Атлас разрешен, поэтому полезно тренироваться с картой рядом: так легче держать материки, океаны, меридианы и параллели.",
      "Самые частые ошибки: знак на топокарте, выбор масштаба, плюс между западной и восточной долготой и причина землетрясений у Южной Америки."
    ],
    formatCards: [
      {
        title: "Как устроена работа",
        text: "14 заданий, 45 минут. В прошлом образце были карта мира, путешественники, топографический фрагмент, масштаб и задачи по формулам."
      },
      {
        title: "Что было в прошлом году",
        text: "Материки, климат как объект физической географии, Кабот, кругосветки, смешанный лес, 1° = 111,3 км, земная кора и плиты."
      },
      {
        title: "На что давить",
        text: "Легенда карты, меридианы и параллели, расчет по экватору, порядок координат и главный ответ про границу плит."
      }
    ],
    flashcards: [
      { front: "6 материков", back: "Евразия, Африка, Северная Америка, Южная Америка, Австралия, Антарктида." },
      { front: "Физическая география", back: "Изучает природу: климат, рельеф, воды, земную кору." },
      { front: "Магеллан", back: "Первая кругосветная экспедиция." },
      { front: "Крузенштерн и Лисянский", back: "Первое русское кругосветное путешествие." },
      { front: "Джон Кабот", back: "Достиг берегов Северной Америки; рядом полезно помнить Ньюфаундленд." },
      { front: "Смешанный лес", back: "На плане обозначается двумя типами деревьев." },
      { front: "Масштаб 1:1000", back: "В 1 см — 10 м. Это подходит для участка 300 x 150 м на листе 31 x 21 см." },
      { front: "1° по экватору", back: "1° = 111,3 км." },
      { front: "Координаты", back: "Сначала широта, потом долгота." },
      { front: "Граница плит", back: "Главный ответ на вопрос, почему бывают частые землетрясения." }
    ],
    pitfalls: [
      {
        title: "Физическая география",
        rule: "Если в вариантах есть природа и человек, выбираем то, что относится только к природе.",
        memory: "Климат, рельеф, воды — да. Население, страны, транспорт — нет.",
        challenge: "Что относится к физической географии: климат или население?",
        answer: "Климат."
      },
      {
        title: "Знак на топокарте",
        rule: "Сначала смотри на легенду, потом на точку. По одному цвету ответ лучше не угадывать.",
        memory: "Смешанный лес = два вида деревьев на условном знаке.",
        challenge: "На опушке какого леса стояла точка A в образце прошлого года?",
        answer: "Смешанного леса."
      },
      {
        title: "Масштаб и лист",
        rule: "Нужно не просто выбрать ответ, а проверить, поместится ли участок на лист целиком.",
        memory: "1:1000 -> в 1 см 10 м -> 300 м превращаются в 30 см.",
        challenge: "Какой масштаб подходит для участка 300 x 150 м на лист 31 x 21 см?",
        answer: "1:1000."
      },
      {
        title: "Запад плюс восток",
        rule: "Если одна точка в западной долготе, а другая в восточной, градусы складывают.",
        memory: "50° з. д. и 9° в. д. -> 50 + 9, а не 50 - 9.",
        challenge: "Что сделать с 50° з. д. и 9° в. д. при расчете по экватору?",
        answer: "Сложить градусы."
      },
      {
        title: "Землетрясения у Южной Америки",
        rule: "Главная причина — не горы и не жёлоб сам по себе, а граница литосферных плит.",
        memory: "Землетрясение чаще всего спрашивают через плиты.",
        challenge: "Почему у западного побережья Южной Америки часто бывают землетрясения?",
        answer: "Там проходит граница литосферных плит."
      }
    ],
    booster: [
      "Скажи вслух пары: Магеллан — кругосветка, Крузенштерн и Лисянский — русская кругосветка, Кабот — Северная Америка.",
      "Потренируйся по атласу искать параллели, меридианы и экватор.",
      "На формулах сначала выпиши градусы, потом действие, потом единицы."
    ],
    cheatSheet: [
      { title: "Карта мира", text: "материки, океаны, меридианы" },
      { title: "Путешественники", text: "Магеллан, Кабот, Крузенштерн" },
      { title: "Топокарта", text: "легенда, лес, маршрут, север" },
      { title: "Масштаб", text: "меньше знаменатель -> крупнее" },
      { title: "Формула", text: "(градусы) x 111,3 км" },
      { title: "Плиты", text: "землетрясения у границ плит" }
    ],
    questions: [
      {
        id: "geo-continents",
        theme: "Карта мира",
        type: "single",
        prompt: "Сколько материков на Земле?",
        options: ["5", "6", "7", "8"],
        answer: 1,
        explanation: "Материков шесть: Евразия, Африка, Северная Америка, Южная Америка, Австралия и Антарктида.",
        hint: "Вспомни все крупные участки суши."
      },
      {
        id: "geo-physical",
        theme: "Физическая география",
        type: "single",
        prompt: "Что из перечисленного изучают физико-географические науки?",
        options: ["зарубежные страны", "климат Земли", "население Земли", "транспортные маршруты"],
        answer: 1,
        explanation: "Физическая география изучает природные объекты и явления: климат, рельеф, воды, земную кору.",
        hint: "Ищи вариант, который относится именно к природе."
      },
      {
        id: "geo-common",
        theme: "Путешественники",
        type: "single",
        prompt: "Что общего у экспедиций Магеллана и Крузенштерна-Лисянского?",
        options: [
          "Обе были сухопутными",
          "Обе были кругосветными",
          "Обе открывали Америку",
          "Обе шли только по Индийскому океану"
        ],
        answer: 1,
        explanation: "И экспедиция Магеллана, и плавание Крузенштерна-Лисянского были кругосветными.",
        hint: "Они обошли Землю по морю."
      },
      {
        id: "geo-cabot",
        theme: "Путешественники",
        type: "single",
        prompt: "Берегов какого материка достиг Джон Кабот в 1497 году?",
        options: ["Африки", "Северной Америки", "Южной Америки", "Австралии"],
        answer: 1,
        explanation: "Джон Кабот достиг берегов Северной Америки; рядом полезно помнить Ньюфаундленд.",
        hint: "Это открытие связано с Атлантикой и северо-западом."
      },
      {
        id: "geo-topo-forest",
        theme: "Топографическая карта",
        type: "single",
        prompt: "На опушке какого леса стоит точка A на фрагменте топографической карты?",
        options: ["хвойного леса", "смешанного леса", "лиственного леса", "леса там нет"],
        answer: 1,
        explanation: "Правильный ответ: смешанный лес. На плане это показывают знаком с двумя типами деревьев.",
        hint: "Сначала вспоминаем условные знаки, потом отвечаем."
      },
      {
        id: "geo-directions",
        theme: "Топографическая карта",
        type: "single",
        prompt: "Если на карте нет особой стрелки направления, где обычно находится север?",
        options: ["слева", "внизу", "вверху", "определить нельзя"],
        answer: 2,
        explanation: "На обычной карте север расположен вверху, юг внизу, запад слева, восток справа.",
        hint: "Представь обычный атлас."
      },
      {
        id: "geo-scale",
        theme: "Масштаб",
        type: "single",
        prompt: "Какой масштаб подойдет, чтобы участок 300 x 150 м поместился на лист 31 x 21 см как можно крупнее?",
        options: [
          "в 1 сантиметре — 100 метров",
          "в 1 сантиметре — 50 метров",
          "в 1 сантиметре — 10 метров",
          "в 1 сантиметре — 5 метров"
        ],
        answer: 2,
        explanation: "При масштабе в 1 см 10 м длина 300 м превратится в 30 см и поместится на лист 31 см.",
        hint: "Сначала проверь длинную сторону 300 м."
      },
      {
        id: "geo-meridian",
        theme: "Координаты",
        type: "single",
        prompt: "Как найти на карте меридиан 40° в. д.?",
        options: [
          "Идти по горизонтальной линии 40°",
          "Идти по вертикальной линии 40° восточнее нулевого меридиана",
          "Искать круговую линию вокруг полюса",
          "Искать экватор"
        ],
        answer: 1,
        explanation: "Меридианы — вертикальные линии. Восточная долгота находится восточнее нулевого меридиана.",
        hint: "Меридиан = долгота = вертикаль."
      },
      {
        id: "geo-atlantic",
        theme: "Расчеты",
        type: "input",
        inputKind: "number",
        prompt: "Рассчитай протяженность по экватору между 50° з. д. и 9° в. д. Впиши число в километрах.",
        numericTarget: 6566.7,
        numericTolerance: 0.7,
        alsoAcceptRounded: 6567,
        explanation: "Нужно сложить градусы: 50 + 9 = 59. Затем 59 x 111,3 = 6566,7 км, то есть примерно 6567 км.",
        hint: "Западную и восточную долготу здесь нужно сложить.",
        placeholder: "Например: 6567"
      },
      {
        id: "geo-sun-logic",
        theme: "Солнце и высота",
        type: "single",
        prompt: "Какой вывод верен по сравнению наблюдений в Москве и Санкт-Петербурге 17 февраля?",
        options: [
          "Верны оба вывода: и про Солнце, и про более длинный день на севере.",
          "Верно только: чем ближе к экватору, тем выше Солнце поднимается над горизонтом.",
          "Верно только: чем дальше на север, тем 17 февраля день длиннее.",
          "Оба вывода неверны."
        ],
        answer: 1,
        explanation: "Верно только первое: чем ближе к экватору, тем выше Солнце. Дальше на север 17 февраля день короче, а не длиннее.",
        hint: "Сравни Москву и Санкт-Петербург: севернее = ниже Солнце и короче день."
      },
      {
        id: "geo-crust",
        theme: "Строение Земли",
        type: "single",
        prompt: "Какое строение земной коры характерно для точки в Атлантическом океане?",
        options: [
          "осадочный, гранитный и базальтовый слои",
          "осадочный и базальтовый слои, без гранитного",
          "только гранитный слой",
          "только базальтовый слой"
        ],
        answer: 1,
        explanation: "Для океанической коры характерны осадочный и базальтовый слои; гранитного слоя в ней нет.",
        hint: "В океане кора тоньше и без гранитного слоя."
      },
      {
        id: "geo-quakes",
        theme: "Землетрясения",
        type: "single",
        prompt: "Почему у западного побережья Южной Америки часто происходят землетрясения?",
        options: [
          "Там проходит глубоководный океанический жёлоб.",
          "На западе материка расположены высокие горы.",
          "У берегов материка проходит граница литосферных плит.",
          "В Южной Америке много вулканов."
        ],
        answer: 2,
        explanation: "Главная причина — граница литосферных плит у западного побережья Южной Америки.",
        hint: "Нужен ответ про строение Земли, а не про рельеф или климат."
      },
      {
        id: "geo-focus",
        theme: "Землетрясения",
        type: "single",
        prompt: "Где находится очаг землетрясения, а где эпицентр?",
        options: [
          "Очаг на поверхности, эпицентр в глубине.",
          "Очаг в глубине земной коры, эпицентр на поверхности прямо над ним.",
          "Очаг и эпицентр находятся только в океане.",
          "Очаг и эпицентр находятся в атмосфере."
        ],
        answer: 1,
        explanation: "Очаг землетрясения расположен в глубине, а эпицентр — на поверхности над ним.",
        hint: "Сначала толчок внутри, потом точка на поверхности."
      },
      {
        id: "geo-order",
        theme: "Координаты",
        type: "single",
        prompt: "Что в географических координатах пишут первым?",
        options: ["долготу", "широту", "высоту точки", "название океана"],
        answer: 1,
        explanation: "Сначала всегда пишут широту, потом долготу.",
        hint: "Широта идет первой."
      }
    ]
  }
};

const storageKey = "mcko-5-trainer-progress";
const playerProfile = {
  nicknames: ["сынок", "кот"]
};

const levelTitles = [
  "Старт",
  "Разогрев",
  "Точность",
  "Уверенность",
  "Хороший темп",
  "Сильная база",
  "Почти готов",
  "Отличная форма"
];

const achievementCatalog = {
  streak3: { key: "streak3", name: "Серия x3", description: "3 правильных ответа подряд" },
  streak5: { key: "streak5", name: "Серия x5", description: "5 правильных ответа подряд" },
  streak8: { key: "streak8", name: "Серия x8", description: "8 правильных ответа подряд" },
  "literature-ace": { key: "literature-ace", name: "Литература 80+", description: "80% и выше в мини-МЦКО" },
  "geography-ace": { key: "geography-ace", name: "География 80+", description: "80% и выше в мини-МЦКО" },
  "perfect-run": { key: "perfect-run", name: "Без ошибок", description: "100% за тренировку" }
};

const favoriteWorlds = [
  {
    title: "Короткие заходы",
    kicker: "спокойный темп",
    text: "Не нужно садиться надолго: маленькие раунды работают лучше, чем один тяжёлый заход.",
    className: "world-minecraft"
  },
  {
    title: "Точность",
    kicker: "без суеты",
    text: "Сначала замечаем правило, потом уже жмем на ответ.",
    className: "world-standoff"
  },
  {
    title: "Разные режимы",
    kicker: "разные форматы",
    text: "Есть разминка, мини-МЦКО, карточки и ловушки — можно идти по настроению.",
    className: "world-roblox"
  },
  {
    title: "Серия",
    kicker: "ритм",
    text: "Правильные ответы подряд дают звезды, XP и ощущение, что все собирается.",
    className: "world-brawl"
  },
  {
    title: "Финиш",
    kicker: "собраться",
    text: "На длинной работе важно не спешить и не терять внимание на последних вопросах.",
    className: "world-fortnite"
  },
  {
    title: "Матч",
    kicker: "таймер и счет",
    text: "В мини-МЦКО есть таймер и результат, поэтому заранее привыкаешь к реальному темпу.",
    className: "world-football"
  }
];

const defaultProgress = {
  totalAnswered: 0,
  totalCorrect: 0,
  totalStars: 0,
  totalXp: 0,
  achievements: [],
  literature: {
    attempts: 0,
    bestExamPercent: 0,
    bestWarmupPercent: 0,
    bestStreak: 0,
    cardsViewed: 0,
    pitfallsViewed: 0
  },
  geography: {
    attempts: 0,
    bestExamPercent: 0,
    bestWarmupPercent: 0,
    bestStreak: 0,
    cardsViewed: 0,
    pitfallsViewed: 0
  }
};

const state = {
  subject: "literature",
  view: "home",
  session: null,
  selectedOptions: [],
  typedAnswer: "",
  feedback: null,
  hintOpen: false,
  flashcardIndex: 0,
  flashcardFlipped: false,
  pitfallIndex: 0,
  pitfallRevealed: false,
  progress: loadProgress(),
  timerId: null
};

const stage = document.getElementById("stage");
const statsBox = document.getElementById("statsBox");
const reminderBox = document.getElementById("reminderBox");
const cheatSheet = document.getElementById("cheatSheet");
const boosterBoard = document.getElementById("boosterBoard");

document.addEventListener("DOMContentLoaded", () => {
  bindEvents();
  render();
});

function bindEvents() {
  document.body.addEventListener("click", (event) => {
    const subjectButton = event.target.closest("[data-subject]");
    if (subjectButton) {
      switchSubject(subjectButton.dataset.subject);
      return;
    }

    const viewButton = event.target.closest("[data-view]");
    if (viewButton) {
      openView(viewButton.dataset.view);
      return;
    }

    const actionButton = event.target.closest("[data-action]");
    if (actionButton) {
      handleAction(actionButton.dataset.action, actionButton.dataset.mode || "");
      return;
    }

    const optionButton = event.target.closest("[data-option-index]");
    if (optionButton) {
      chooseOption(Number(optionButton.dataset.optionIndex));
    }
  });

  document.body.addEventListener("input", (event) => {
    if (event.target.matches("[data-answer-input]")) {
      state.typedAnswer = event.target.value;
      if (state.feedback?.validationOnly) {
        state.feedback = null;
        renderStage();
      }
    }
  });
}

function handleAction(action, mode) {
  if (action === "start-session") {
    startSession(mode);
    return;
  }

  if (action === "submit-answer") {
    submitAnswer();
    return;
  }

  if (action === "next-question") {
    nextQuestion();
    return;
  }

  if (action === "toggle-hint") {
    state.hintOpen = !state.hintOpen;
    renderStage();
    return;
  }

  if (action === "retry-session") {
    startSession(mode || "warmup");
    return;
  }

  if (action === "go-home") {
    openView("home");
    return;
  }

  if (action === "flip-card") {
    state.flashcardFlipped = !state.flashcardFlipped;
    renderStage();
    return;
  }

  if (action === "card-next") {
    shiftFlashcard(1);
    return;
  }

  if (action === "card-prev") {
    shiftFlashcard(-1);
    return;
  }

  if (action === "pitfall-next") {
    shiftPitfall(1);
    return;
  }

  if (action === "pitfall-prev") {
    shiftPitfall(-1);
    return;
  }

  if (action === "reveal-pitfall") {
    state.pitfallRevealed = !state.pitfallRevealed;
    renderStage();
  }
}

function switchSubject(subject) {
  if (!appData[subject]) {
    return;
  }

  clearTimer();
  state.subject = subject;
  state.view = "home";
  state.session = null;
  state.selectedOptions = [];
  state.typedAnswer = "";
  state.feedback = null;
  state.hintOpen = false;
  state.flashcardIndex = 0;
  state.flashcardFlipped = false;
  state.pitfallIndex = 0;
  state.pitfallRevealed = false;
  render();
}

function openView(view) {
  clearTimer();
  state.view = view;
  state.session = null;
  state.selectedOptions = [];
  state.typedAnswer = "";
  state.feedback = null;
  state.hintOpen = false;
  state.flashcardFlipped = false;
  state.pitfallRevealed = false;

  if (view === "flashcards") {
    incrementProgressCounter("cardsViewed");
  }

  if (view === "pitfalls") {
    incrementProgressCounter("pitfallsViewed");
  }

  render();
}

function startSession(mode) {
  const subjectData = appData[state.subject];
  const pool = shuffleArray(subjectData.questions);
  const count = mode === "exam" ? subjectData.examCount : Math.min(5, subjectData.questions.length);
  const questions = pool.slice(0, count);

  clearTimer();
  state.view = "quiz";
  state.selectedOptions = [];
  state.typedAnswer = "";
  state.feedback = null;
  state.hintOpen = false;
  state.session = {
    mode,
    questions,
    index: 0,
    score: 0,
    answers: [],
    currentStreak: 0,
    bestStreak: 0,
    starsEarned: 0,
    xpEarned: 0,
    badgesEarned: [],
    lastReward: null,
    remainingSeconds: mode === "exam" ? 45 * 60 : null,
    timedOut: false
  };

  if (state.session.remainingSeconds !== null) {
    state.timerId = window.setInterval(() => {
      if (!state.session) {
        return;
      }

      state.session.remainingSeconds -= 1;
      if (state.session.remainingSeconds <= 0) {
        finishSession(true);
        return;
      }

      renderStage();
    }, 1000);
  }

  render();
}

function chooseOption(index) {
  if (!state.session) {
    return;
  }

  if (state.feedback && !state.feedback.validationOnly) {
    return;
  }

  const question = currentQuestion();
  if (!question) {
    return;
  }

  if (question.type === "single") {
    state.selectedOptions = [index];
  }

  if (question.type === "multi") {
    if (state.selectedOptions.includes(index)) {
      state.selectedOptions = state.selectedOptions.filter((value) => value !== index);
    } else {
      state.selectedOptions = [...state.selectedOptions, index];
    }
  }

  if (state.feedback?.validationOnly) {
    state.feedback = null;
  }

  renderStage();
}

function submitAnswer() {
  if (!state.session || state.feedback) {
    return;
  }

  const question = currentQuestion();
  if (!question) {
    return;
  }

  if (question.type === "single" && state.selectedOptions.length !== 1) {
    state.feedback = {
      correct: false,
      title: "Сначала выбери один вариант",
      explanation: "Отметь один ответ и потом сразу проверяй себя.",
      validationOnly: true
    };
    renderStage();
    return;
  }

  if (question.type === "multi" && state.selectedOptions.length !== question.requiredSelections) {
    state.feedback = {
      correct: false,
      title: `Здесь нужно выбрать ровно ${question.requiredSelections} ответа`,
      explanation: "Пересчитай выбранные варианты и попробуй еще раз.",
      validationOnly: true
    };
    renderStage();
    return;
  }

  if (question.type === "input" && !state.typedAnswer.trim()) {
    state.feedback = {
      correct: false,
      title: "Поле пока пустое",
      explanation: "Сначала впиши ответ, потом проверяй.",
      validationOnly: true
    };
    renderStage();
    return;
  }

  const result = evaluateQuestion(question);

  if (result.correct) {
    state.session.score += 1;
    state.session.currentStreak += 1;
    state.session.bestStreak = Math.max(state.session.bestStreak, state.session.currentStreak);
    state.session.lastReward = awardCorrectAnswer(state.session.currentStreak);
  } else {
    state.session.currentStreak = 0;
    state.session.lastReward = null;
  }

  state.session.answers.push({
    id: question.id,
    theme: question.theme,
    prompt: question.prompt,
    correct: result.correct,
    userAnswer: result.userAnswer,
    correctAnswer: result.correctAnswer,
    explanation: question.explanation
  });

  state.feedback = {
    correct: result.correct,
    title: result.correct ? getSuccessTitle(state.session.currentStreak) : getMissTitle(),
    explanation: question.explanation,
    correctAnswer: result.correctAnswer,
    cheer: result.correct
      ? getSuccessCheer(question.theme, state.session.lastReward)
      : getMissCheer(question.theme),
    reward: result.correct ? state.session.lastReward : null,
    validationOnly: false
  };

  renderStage();
}

function nextQuestion() {
  if (!state.session || !state.feedback) {
    return;
  }

  if (state.feedback.validationOnly) {
    state.feedback = null;
    renderStage();
    return;
  }

  const isLast = state.session.index >= state.session.questions.length - 1;
  if (isLast) {
    finishSession(false);
    return;
  }

  state.session.index += 1;
  state.selectedOptions = [];
  state.typedAnswer = "";
  state.feedback = null;
  state.hintOpen = false;
  renderStage();
}

function finishSession(timedOut) {
  if (!state.session) {
    return;
  }

  clearTimer();
  state.session.timedOut = timedOut;
  finalizeSessionAchievements();
  updateProgressAfterSession();
  state.view = "results";
  state.selectedOptions = [];
  state.typedAnswer = "";
  state.feedback = null;
  state.hintOpen = false;
  render();
}

function evaluateQuestion(question) {
  if (question.type === "single") {
    const selected = state.selectedOptions[0];
    return {
      correct: selected === question.answer,
      userAnswer: question.options[selected],
      correctAnswer: question.options[question.answer]
    };
  }

  if (question.type === "multi") {
    const selectedSorted = [...state.selectedOptions].sort((a, b) => a - b);
    const answerSorted = [...question.answer].sort((a, b) => a - b);
    const correct =
      selectedSorted.length === answerSorted.length &&
      selectedSorted.every((value, index) => value === answerSorted[index]);

    return {
      correct,
      userAnswer: selectedSorted.map((index) => question.options[index]).join("; "),
      correctAnswer: answerSorted.map((index) => question.options[index]).join("; ")
    };
  }

  if (question.type === "input" && question.inputKind === "text") {
    const normalized = normalizeText(state.typedAnswer);
    const correct = question.acceptableAnswers.some((answer) => normalizeText(answer) === normalized);
    return {
      correct,
      userAnswer: state.typedAnswer,
      correctAnswer: question.acceptableAnswers[0]
    };
  }

  if (question.type === "input" && question.inputKind === "number") {
    const numeric = parseNumeric(state.typedAnswer);
    const isClose = Number.isFinite(numeric) && Math.abs(numeric - question.numericTarget) <= question.numericTolerance;
    const roundedOkay =
      question.alsoAcceptRounded !== undefined &&
      Number.isFinite(numeric) &&
      Math.abs(numeric - question.alsoAcceptRounded) <= 0.1;

    return {
      correct: isClose || roundedOkay,
      userAnswer: state.typedAnswer,
      correctAnswer: String(question.alsoAcceptRounded || question.numericTarget)
    };
  }

  return {
    correct: false,
    userAnswer: "",
    correctAnswer: ""
  };
}

function updateProgressAfterSession() {
  if (!state.session) {
    return;
  }

  const subjectProgress = state.progress[state.subject];
  const answeredCount = state.session.answers.length;
  const percent = getSessionPercent(state.session);

  state.progress.totalAnswered += answeredCount;
  state.progress.totalCorrect += state.session.score;
  subjectProgress.attempts += 1;
  subjectProgress.bestStreak = Math.max(subjectProgress.bestStreak, state.session.bestStreak);

  if (state.session.mode === "exam") {
    subjectProgress.bestExamPercent = Math.max(subjectProgress.bestExamPercent, percent);
  } else {
    subjectProgress.bestWarmupPercent = Math.max(subjectProgress.bestWarmupPercent, percent);
  }

  saveProgress();
}

function incrementProgressCounter(key) {
  state.progress[state.subject][key] += 1;
  saveProgress();
}

function shiftFlashcard(step) {
  const cards = appData[state.subject].flashcards;
  state.flashcardIndex = wrapIndex(state.flashcardIndex + step, cards.length);
  state.flashcardFlipped = false;
  incrementProgressCounter("cardsViewed");
  renderStage();
}

function shiftPitfall(step) {
  const cards = appData[state.subject].pitfalls;
  state.pitfallIndex = wrapIndex(state.pitfallIndex + step, cards.length);
  state.pitfallRevealed = false;
  incrementProgressCounter("pitfallsViewed");
  renderStage();
}

function render() {
  renderSidebar();
  renderStage();
  renderSupport();
}

function renderSidebar() {
  document.querySelectorAll("[data-subject]").forEach((button) => {
    button.classList.toggle("active", button.dataset.subject === state.subject);
  });

  document.querySelectorAll("[data-view]").forEach((button) => {
    button.classList.toggle("active", button.dataset.view === state.view);
  });

  const subjectData = appData[state.subject];
  const subjectProgress = state.progress[state.subject];
  const accuracy = state.progress.totalAnswered
    ? Math.round((state.progress.totalCorrect / state.progress.totalAnswered) * 100)
    : 0;
  const levelInfo = getLevelInfo(state.progress.totalXp);
  const currentStreak = state.session?.currentStreak || 0;

  statsBox.innerHTML = `
    <div class="stats-card level-card">
      <span>Твой уровень</span>
      <strong>${levelInfo.level}</strong>
      <p>${levelInfo.title}</p>
      ${renderLevelMeter(levelInfo)}
    </div>
    <div class="stats-card">
      <span>Звезды</span>
      <strong>${state.progress.totalStars}</strong>
      <p>${formatStarsLine(state.progress.totalStars)}</p>
    </div>
    <div class="stats-card">
      <span>Точность по всем тренировкам</span>
      <strong>${accuracy}%</strong>
      <p>Спокойно и точно, ${getNickname(1)}.</p>
    </div>
    <div class="stats-card">
      <span>Лучшая серия подряд</span>
      <strong>${Math.max(subjectProgress.bestStreak, currentStreak)}</strong>
      <p>${getNextStreakGoalText(currentStreak)}</p>
    </div>
    <div class="stats-card">
      <span>Награды</span>
      <strong>${state.progress.achievements.length}</strong>
      <p>Лучший мини-МЦКО: ${subjectProgress.bestExamPercent}%</p>
    </div>
    <div class="stats-card">
      <span>Попыток по предмету</span>
      <strong>${subjectProgress.attempts}</strong>
      <p>Лучшая разминка: ${subjectProgress.bestWarmupPercent}%</p>
    </div>
  `;

  reminderBox.innerHTML = `
    <p class="muted">${getNickname(2)}, сейчас фокус на теме <span class="accent">${subjectData.accent}</span>.</p>
    <p class="note-strong">${getSubjectPepTalk(state.subject)}</p>
    <ul class="reminder-list">
      ${subjectData.booster.map((item) => `<li>${item}</li>`).join("")}
    </ul>
  `;
}

function renderSupport() {
  const subjectData = appData[state.subject];
  cheatSheet.innerHTML = `
    <div class="headline-row">
      <h3>Шпаргалка</h3>
      <span class="theme-chip">${subjectData.label}</span>
    </div>
    <div class="shortcut-grid">
      ${subjectData.cheatSheet
        .map(
          (item) => `
            <div class="shortcut-card">
              <strong>${item.title}</strong>
              <p>${item.text}</p>
            </div>
          `
        )
        .join("")}
    </div>
  `;

  boosterBoard.innerHTML = `
    <div class="headline-row">
      <h3>Быстрый повтор</h3>
      <span class="theme-chip">по прошлому году</span>
    </div>
    <div class="booster-grid">
      ${subjectData.formatCards
        .map(
          (item) => `
            <div class="booster-card">
              <strong>${item.title}</strong>
              <p>${item.text}</p>
            </div>
          `
        )
        .join("")}
    </div>
  `;
}

function renderStage() {
  if (state.view === "home") {
    stage.innerHTML = renderHomeView();
    return;
  }

  if (state.view === "quiz") {
    stage.innerHTML = renderQuizView();
    return;
  }

  if (state.view === "results") {
    stage.innerHTML = renderResultsView();
    return;
  }

  if (state.view === "flashcards") {
    stage.innerHTML = renderFlashcardsView();
    return;
  }

  if (state.view === "pitfalls") {
    stage.innerHTML = renderPitfallsView();
  }
}

function renderHomeView() {
  const subjectData = appData[state.subject];
  const levelInfo = getLevelInfo(state.progress.totalXp);
  const latestAchievements = state.progress.achievements.slice(-3);

  return `
    <div class="intro-grid">
      <div class="story-card">
        <div class="headline-row">
          <div>
            <p class="eyebrow">Это для тебя</p>
            <h2>${getHomeHeadline()}</h2>
          </div>
          <div class="badge-row">
            <span class="subject-badge"><strong>по прошлому году</strong></span>
            <span class="subject-badge">Уровень ${levelInfo.level}</span>
            <span class="subject-badge">${state.progress.totalStars} звезд</span>
          </div>
        </div>
        <p class="home-cheer">${getHomeSupportLine()}</p>
        <p>${subjectData.overview[0]}</p>
        <div class="game-strip">
          <div class="game-card">
            <span>Текущий уровень</span>
            <strong>${levelInfo.level}</strong>
            <p>${levelInfo.title}</p>
          </div>
          <div class="game-card">
            <span>Звезды</span>
            <strong>${state.progress.totalStars}</strong>
            <p>${formatStarsLine(state.progress.totalStars)}</p>
          </div>
          <div class="game-card">
            <span>Награды</span>
            <strong>${state.progress.achievements.length}</strong>
            <p>${latestAchievements.length ? latestAchievements.map((item) => item.name).join(", ") : "Первая награда уже рядом."}</p>
          </div>
        </div>
        <div class="arena-note">
          <strong>Режим дня</strong>
          <p>${getArenaModeLine(state.subject)}</p>
        </div>
        <ul>
          ${subjectData.overview.slice(1).map((item) => `<li>${item}</li>`).join("")}
        </ul>
        <div class="trainer-actions">
          <button class="pill-action primary" type="button" data-action="start-session" data-mode="warmup">
            Начать разминку
          </button>
          <button class="pill-action secondary" type="button" data-action="start-session" data-mode="exam">
            Перейти в мини-МЦКО
          </button>
        </div>
      </div>

      <div class="outline-card">
        <div class="headline-row">
          <h3>План тренировки</h3>
          <span class="hero-number">${subjectData.examCount}</span>
        </div>
        <p>${getHomeMissionLine(subjectData.label)}</p>
        <ul>
          <li>Разминка: 5 быстрых вопросов с моментальной проверкой.</li>
          <li>Мини-МЦКО: полный предметный раунд по прошлогодней логике.</li>
          <li>Карточки: термины, герои, даты, формулы и ловкие короткие пары.</li>
          <li>Ловушки: самые частые ошибки из прошлогодних образцов.</li>
        </ul>
        ${latestAchievements.length ? `
          <div class="achievement-block">
            <strong>Последние награды</strong>
            ${renderAchievementPills(latestAchievements)}
          </div>
        ` : ""}
      </div>
    </div>

    ${renderFavoriteWorldsSection()}

    <div class="format-grid">
      ${subjectData.formatCards
        .map(
          (item) => `
            <div class="format-card">
              <strong>${item.title}</strong>
              <p>${item.text}</p>
            </div>
          `
        )
        .join("")}
    </div>

    <div class="mini-grid">
      <div class="mini-card">
        <strong>Как тебе удобнее</strong>
        <p>Лучше идти короткими заходами: 5 вопросов, 5 карточек, 1 ловушка, потом маленькая пауза.</p>
      </div>
      <div class="mini-card">
        <strong>Как себе помочь</strong>
        <p>После ошибки лучше вслух объяснить правило своими словами, а не просто смотреть на готовый ответ.</p>
      </div>
      <div class="mini-card">
        <strong>Когда уже хорошо</strong>
        <p>Если в мини-МЦКО держится 75% и выше, дальше уже выгодно добивать слабые места и скорость.</p>
      </div>
    </div>
  `;
}

function renderFavoriteWorldsSection() {
  return `
    <div class="world-section">
      <div class="headline-row">
        <div>
          <p class="eyebrow">Стиль тренажера</p>
          <h3>Как устроены режимы</h3>
        </div>
        <span class="theme-chip">ритм и темп</span>
      </div>
      <div class="world-grid">
        ${favoriteWorlds
          .map(
            (item) => `
              <article class="world-card ${item.className}">
                <span class="world-kicker">${item.kicker}</span>
                <strong>${item.title}</strong>
                <p>${item.text}</p>
              </article>
            `
          )
          .join("")}
      </div>
    </div>
  `;
}

function renderQuizView() {
  const question = currentQuestion();
  if (!question || !state.session) {
    return `<div class="empty-state"><h3>Сессия не найдена</h3><p>Вернись на главную и запусти тренировку заново.</p></div>`;
  }

  const progressPercent = Math.round(((state.session.index + 1) / state.session.questions.length) * 100);
  const levelInfo = getLevelInfo(state.progress.totalXp);

  return `
    <div class="results-header">
      <div>
        <p class="eyebrow">${state.session.mode === "exam" ? "Мини-МЦКО" : "Разминка"}</p>
        <h2 class="question-title">Вопрос ${state.session.index + 1} из ${state.session.questions.length}</h2>
      </div>
      ${
        state.session.remainingSeconds !== null
          ? `<div class="timer">${formatTime(state.session.remainingSeconds)}</div>`
          : `<span class="theme-chip">Спокойный режим</span>`
      }
    </div>

    <div class="game-strip">
      <div class="game-card">
        <span>Уровень</span>
        <strong>${levelInfo.level}</strong>
        <p>${levelInfo.title}</p>
      </div>
      <div class="game-card">
        <span>Серия</span>
        <strong>${state.session.currentStreak}</strong>
        <p>${getNextStreakGoalText(state.session.currentStreak)}</p>
      </div>
      <div class="game-card">
        <span>Прогресс</span>
        <strong>${progressPercent}%</strong>
        <p>${state.session.score} из ${state.session.questions.length} уже в копилке</p>
      </div>
    </div>

    <div class="progress-shell" aria-hidden="true">
      <div class="progress-fill" style="width:${progressPercent}%"></div>
    </div>

    <div class="question-meta">
      <span class="theme-chip">${appData[state.subject].label}</span>
      <span class="theme-chip">${question.theme}</span>
    </div>

    <p class="pep-line">${getQuestionPepLine(question.theme)}</p>
    <h3 class="question-text">${question.prompt}</h3>

    ${state.hintOpen && question.hint ? `<div class="hint-box"><strong>Подсказка:</strong> ${question.hint}</div>` : ""}
    ${question.type === "input" ? renderInput(question) : renderOptions(question)}

    <div class="trainer-actions">
      ${question.hint ? `
        <button class="pill-action secondary" type="button" data-action="toggle-hint">
          ${state.hintOpen ? "Скрыть подсказку" : "Показать подсказку"}
        </button>
      ` : ""}
      <button class="pill-action primary" type="button" data-action="submit-answer">
        Проверить
      </button>
    </div>

    ${state.feedback ? renderFeedback(question) : ""}
  `;
}

function renderOptions(question) {
  const isMulti = question.type === "multi";
  return `
    <div class="options-grid">
      ${question.options
        .map((option, index) => {
          const selected = state.selectedOptions.includes(index);
          const feedbackClass = feedbackOptionClass(question, index);
          return `
            <button
              class="option-card ${selected ? "selected" : ""} ${feedbackClass}"
              type="button"
              data-option-index="${index}"
            >
              <span class="option-mark">${isMulti ? (selected ? "✓" : "○") : selected ? "●" : "○"}</span>
              <span class="option-label">${option}</span>
            </button>
          `;
        })
        .join("")}
    </div>
  `;
}

function renderInput(question) {
  return `
    <div class="input-shell">
      <input
        class="answer-input"
        type="${question.inputKind === "number" ? "text" : "text"}"
        value="${escapeHtml(state.typedAnswer)}"
        placeholder="${question.placeholder || "Напиши ответ"}"
        data-answer-input
      />
    </div>
  `;
}

function renderFeedback(question) {
  const actionLabel =
    state.session && state.session.index >= state.session.questions.length - 1
      ? "Показать результат"
      : "Следующий вопрос";

  return `
    <div class="feedback-box ${state.feedback.correct ? "correct" : "wrong"}">
      <div class="headline-row">
        <strong class="feedback-title">${state.feedback.title}</strong>
        <span class="result-chip ${state.feedback.correct ? "score-good" : "score-low"}">
          ${state.feedback.correct ? "Верно" : "Пока нет"}
        </span>
      </div>
      <p class="feedback-cheer">${state.feedback.cheer}</p>
      <p>${state.feedback.explanation}</p>
      ${
        !state.feedback.correct && state.feedback.correctAnswer
          ? `<div class="mistake-card"><strong>Правильный ответ:</strong> ${state.feedback.correctAnswer}</div>`
          : ""
      }
      ${state.feedback.reward ? renderRewardBanner(state.feedback.reward) : ""}
      <div class="trainer-actions">
        <button class="pill-action primary" type="button" data-action="next-question">
          ${state.feedback.validationOnly ? "Понял" : actionLabel}
        </button>
      </div>
    </div>
  `;
}

function renderResultsView() {
  if (!state.session) {
    return `<div class="empty-state"><h3>Результат не найден</h3><p>Вернись на главную и начни заново.</p></div>`;
  }

  const percent = getSessionPercent(state.session);
  const mistakes = state.session.answers.filter((item) => !item.correct);
  const achievements = state.session.badgesEarned;

  return `
    <div class="results-header">
      <div>
        <p class="eyebrow">${state.session.mode === "exam" ? "Мини-МЦКО" : "Разминка завершена"}</p>
        <h2 class="results-title">${getResultsHeadline(percent)}</h2>
      </div>
      <span class="theme-chip">${appData[state.subject].label}</span>
    </div>

    <div class="score-grid">
      <div class="score-card ${getScoreClass(percent)}">
        <span>Результат</span>
        <strong class="score-number">${state.session.score} / ${state.session.questions.length}</strong>
        <p>${percent}%</p>
      </div>
      <div class="score-card">
        <span>Серия</span>
        <strong class="score-number">${state.session.bestStreak}</strong>
        <p>лучшая подряд</p>
      </div>
      <div class="score-card">
        <span>Награды за сессию</span>
        <strong class="score-number">${achievements.length}</strong>
        <p>${state.session.starsEarned} звезд, ${state.session.xpEarned} XP</p>
      </div>
    </div>

    <p class="home-cheer">${getResultsSupportLine(percent, mistakes.length)}</p>

    ${
      achievements.length
        ? `
          <div class="achievement-block">
            <strong>Новые награды</strong>
            ${renderAchievementPills(achievements)}
          </div>
        `
        : ""
    }

    ${
      mistakes.length
        ? `
          <div class="overview-grid">
            ${mistakes
              .map(
                (item) => `
                  <div class="mistake-card">
                    <strong>${item.theme}</strong>
                    <p>${item.prompt}</p>
                    <p><span class="danger">Нужный ответ:</span> ${item.correctAnswer}</p>
                  </div>
                `
              )
              .join("")}
          </div>
          <p class="mistake-pep">${getMistakePepLine()}</p>
        `
        : `
          <div class="fact-card">
            <strong>Без ошибок</strong>
            <p>Очень чистый проход. Можно смело идти в следующий раунд или повторить карточки для закрепления.</p>
          </div>
        `
    }

    <div class="trainer-actions">
      <button class="pill-action primary" type="button" data-action="retry-session" data-mode="${state.session.mode}">
        Пройти еще раз
      </button>
      <button class="pill-action secondary" type="button" data-action="go-home">
        Вернуться на главную
      </button>
    </div>
  `;
}

function renderFlashcardsView() {
  const cards = appData[state.subject].flashcards;
  const card = cards[state.flashcardIndex];

  return `
    <div class="flashcard-shell">
      <div class="headline-row">
        <div>
          <p class="eyebrow">Карточки</p>
          <h2>Быстрый повтор</h2>
        </div>
        <span class="theme-chip">${state.flashcardIndex + 1} / ${cards.length}</span>
      </div>

      <button class="flashcard ${state.flashcardFlipped ? "flipped" : ""}" type="button" data-action="flip-card">
        <div class="flashcard-face flashcard-front">
          <p class="flashcard-kicker">${appData[state.subject].label}</p>
          <strong class="flashcard-title">${card.front}</strong>
          <p>Нажми, чтобы перевернуть</p>
        </div>
        <div class="flashcard-face flashcard-back">
          <p class="flashcard-kicker">Ответ</p>
          <strong class="flashcard-title">${card.front}</strong>
          <p>${card.back}</p>
        </div>
      </button>

      <div class="flashcard-actions">
        <button class="pill-action secondary" type="button" data-action="card-prev">Назад</button>
        <button class="pill-action primary" type="button" data-action="card-next">Дальше</button>
      </div>
    </div>
  `;
}

function renderPitfallsView() {
  const cards = appData[state.subject].pitfalls;
  const card = cards[state.pitfallIndex];

  return `
    <div class="pitfall-card">
      <div class="headline-row">
        <div>
          <p class="eyebrow">Ловушки</p>
          <h2>${card.title}</h2>
        </div>
        <span class="theme-chip">${state.pitfallIndex + 1} / ${cards.length}</span>
      </div>

      <div class="pitfall-top">
        <div class="fact-card">
          <strong>Правило</strong>
          <p>${card.rule}</p>
        </div>
        <div class="fact-card">
          <strong>Как запомнить</strong>
          <p>${card.memory}</p>
        </div>
      </div>

      <div class="fact-card">
        <strong>Проверь себя</strong>
        <p>${card.challenge}</p>
        ${
          state.pitfallRevealed
            ? `<div class="pitfall-answer"><strong>Ответ:</strong> ${card.answer}</div>`
            : ""
        }
      </div>

      <div class="pitfall-actions">
        <button class="pill-action secondary" type="button" data-action="pitfall-prev">Назад</button>
        <button class="pill-action secondary" type="button" data-action="reveal-pitfall">
          ${state.pitfallRevealed ? "Скрыть ответ" : "Показать ответ"}
        </button>
        <button class="pill-action primary" type="button" data-action="pitfall-next">Дальше</button>
      </div>
    </div>
  `;
}

function currentQuestion() {
  if (!state.session) {
    return null;
  }

  return state.session.questions[state.session.index] || null;
}

function finalizeSessionAchievements() {
  if (!state.session) {
    return;
  }

  const percent = getSessionPercent(state.session);

  if (state.session.bestStreak >= 3) {
    maybeAddAchievement("streak3");
  }

  if (state.session.bestStreak >= 5) {
    maybeAddAchievement("streak5");
  }

  if (state.session.bestStreak >= 8) {
    maybeAddAchievement("streak8");
  }

  if (percent === 100) {
    maybeAddAchievement("perfect-run");
  }

  if (state.session.mode === "exam" && percent >= 80) {
    maybeAddAchievement(state.subject === "literature" ? "literature-ace" : "geography-ace");
  }
}

function maybeAddAchievement(key) {
  const item = achievementCatalog[key];
  if (!item) {
    return;
  }

  const alreadyGlobal = state.progress.achievements.some((entry) => entry.key === key);
  const alreadySession = state.session.badgesEarned.some((entry) => entry.key === key);

  if (alreadyGlobal || alreadySession) {
    return;
  }

  state.progress.achievements.push(item);
  state.session.badgesEarned.push(item);
}

function awardCorrectAnswer(streak) {
  const stars = streak >= 5 ? 2 : 1;
  const xp = streak >= 5 ? 16 : 10;
  const reward = {
    stars,
    xp,
    milestone: streak === 3 ? "Серия x3" : streak === 5 ? "Серия x5" : streak === 8 ? "Серия x8" : "",
    achievements: [],
    levelUp: null
  };

  const previousLevel = getLevelInfo(state.progress.totalXp).level;
  state.progress.totalStars += stars;
  state.progress.totalXp += xp;
  state.session.starsEarned += stars;
  state.session.xpEarned += xp;

  if (streak === 3) {
    maybeAddAchievement("streak3");
  }
  if (streak === 5) {
    maybeAddAchievement("streak5");
  }
  if (streak === 8) {
    maybeAddAchievement("streak8");
  }

  reward.achievements = state.session.badgesEarned.filter(
    (item) => !state.progress.achievements.slice(0, -state.session.badgesEarned.length).some((oldItem) => oldItem.key === item.key)
  );

  const nextLevel = getLevelInfo(state.progress.totalXp);
  if (nextLevel.level > previousLevel) {
    reward.levelUp = nextLevel;
  }

  saveProgress();
  return reward;
}

function renderLevelMeter(levelInfo) {
  const xpLeft = Math.max(levelInfo.nextXp - state.progress.totalXp, 0);
  return `
    <div class="level-meter" aria-hidden="true">
      <div class="level-meter-fill" style="width:${levelInfo.progressPercent}%"></div>
    </div>
    <p class="level-caption">До уровня ${levelInfo.level + 1}: ${xpLeft} XP</p>
  `;
}

function renderRewardBanner(reward) {
  const rewardPills = [
    `<span class="reward-pill">+${reward.stars} звезд</span>`,
    `<span class="reward-pill">+${reward.xp} XP</span>`,
    reward.milestone ? `<span class="reward-pill reward-pill-accent">${reward.milestone}</span>` : "",
    reward.levelUp ? `<span class="reward-pill reward-pill-accent">Уровень ${reward.levelUp.level}</span>` : ""
  ]
    .filter(Boolean)
    .join("");

  return `
    <div class="reward-banner">
      ${rewardPills}
      ${reward.achievements.length ? renderAchievementPills(reward.achievements) : ""}
    </div>
  `;
}

function renderAchievementPills(achievements) {
  return `
    <div class="achievement-row">
      ${achievements
        .map(
          (item) => `
            <span class="achievement-pill" title="${item.description}">
              ${item.name}
            </span>
          `
        )
        .join("")}
    </div>
  `;
}

function getSuccessTitle(streak) {
  if (streak >= 8) {
    return `Отлично, ${getNickname()}!`;
  }

  if (streak >= 5) {
    return `Молодец, ${getNickname()}!`;
  }

  if (streak >= 3) {
    return `Хорошо идешь, ${getNickname()}!`;
  }

  return `Верно, ${getNickname()}!`;
}

function getMissTitle() {
  return `Ничего, ${getNickname()}, это тренировка.`;
}

function getSuccessCheer(theme, reward) {
  const lines = [
    `${getNickname(1)}, хорошо. По теме «${theme}» ты попал точно.`,
    `${getNickname(2)}, молодец. Еще один правильный ответ в копилку.`,
    `${getNickname()}, так держать. Уже видно, что ты лучше держишь материал.`
  ];

  if (reward.levelUp) {
    return `${lines[0]} Открылся новый уровень: ${reward.levelUp.level}, ${reward.levelUp.title}.`;
  }

  return lines[(state.progress.totalCorrect + theme.length) % lines.length];
}

function getMissCheer(theme) {
  const lines = [
    `${getNickname()}, ошибаться здесь нормально. Сейчас спокойно разберем правило.`,
    `${getNickname()}, по теме «${theme}» просто нужна еще одна спокойная попытка.`,
    `${getNickname(1)}, не спешим: посмотрим ответ, и дальше уже будет легче.`
  ];

  return lines[(state.progress.totalAnswered + theme.length) % lines.length];
}

function getQuestionPepLine(theme) {
  const lines =
    state.subject === "literature"
      ? [
          "Сначала слово и смысл, потом уже выбор.",
          "Вопрос короткий, значит и ответ можно найти быстро.",
          "Смотрим на формулировку и не суетимся."
        ]
      : [
          "Сначала замечаем правило, потом считаем или выбираем.",
          "По шагам собираем карту, знак, масштаб и формулу.",
          "Не спешим: в географии почти все решается по опоре."
        ];
  return `${getNickname()}, сейчас тема «${theme}». ${lines[(state.session?.index || 0) % lines.length]}`;
}

function getHomeHeadline() {
  return state.subject === "literature"
    ? "Сегодня идем по схеме прошлого года: термины, «Муму», Пушкин, Гоголь"
    : "Сегодня идем по схеме прошлого года: карта, топография, масштаб, формулы";
}

function getHomeSupportLine() {
  return state.subject === "literature"
    ? "Сынок, здесь главное не спешить: сначала слово и текст, потом уже тропы, герои и ответы."
    : "Кот, здесь все по шагам: карта, знак, масштаб, формула, потом ответ."
}

function getHomeMissionLine(subjectLabel) {
  const subjectPhrase = subjectLabel === "Литература" ? "литературе" : "географии";
  return `Здесь собрана подготовишка по прошлогодним образцам по ${subjectPhrase}: коротко, спокойно и без лишнего шума.`;
}

function getResultsHeadline(percent) {
  if (percent >= 85) {
    return "Очень хороший результат";
  }

  if (percent >= 60) {
    return "Уже хорошо получается";
  }

  return "Начало хорошее";
}

function getResultsSupportLine(percent, missedCount) {
  if (percent >= 85) {
    return `${getNickname()}, молодец. ${missedCount ? "Нужно только добить пару точек." : "Можно переходить к следующему этапу."}`;
  }

  if (percent >= 60) {
    return `${getNickname()}, уже неплохо. Еще немного повторения, и будет совсем уверенно.`;
  }

  return `${getNickname()}, все нормально. Тренировка как раз нужна для того, чтобы спокойно увидеть, что еще повторить.`;
}

function getSubjectPepTalk(subject) {
  return subject === "literature"
    ? "Сегодня работаем по прошлогодней схеме: термины, «Муму», Пушкин, Гоголь."
    : "Сегодня работаем по прошлогодней схеме: карта, топография, масштаб, формулы."
}

function getNextStreakGoalText(streak) {
  if (streak < 3) {
    return `До первой награды: ${3 - streak}`;
  }

  if (streak < 5) {
    return `Еще ${5 - streak} до следующей награды`;
  }

  if (streak < 8) {
    return `Еще ${8 - streak} до большой серии`;
  }

  return "Серия идет хорошо, продолжай.";
}

function formatStarsLine(count) {
  if (!count) {
    return "Первая звезда уже рядом.";
  }

  if (count < 5) {
    return "Понемногу набираем.";
  }

  if (count < 20) {
    return "Звезды хорошо набираются.";
  }

  return "Уже хороший запас звезд.";
}

function getMistakePepLine() {
  return `${getNickname()}, сейчас главное спокойно понять правило и попробовать еще раз.`;
}

function getArenaModeLine(subject) {
  return subject === "literature"
    ? "Сначала термины, потом «Муму», потом Пушкин, потом Гоголь."
    : "Сначала карта и путешественники, потом топокарта, затем масштаб, формулы и земная кора.";
}

function getSessionPercent(session) {
  return session.questions.length ? Math.round((session.score / session.questions.length) * 100) : 0;
}

function getScoreClass(percent) {
  if (percent >= 85) {
    return "score-good";
  }
  if (percent >= 60) {
    return "score-mid";
  }
  return "score-low";
}

function feedbackOptionClass(question, optionIndex) {
  if (!state.feedback || state.feedback.validationOnly) {
    return "";
  }

  if (question.type === "single") {
    if (optionIndex === question.answer) {
      return "correct";
    }

    if (state.selectedOptions.includes(optionIndex)) {
      return "wrong";
    }

    return "";
  }

  if (question.type === "multi") {
    if (question.answer.includes(optionIndex)) {
      return "correct";
    }

    if (state.selectedOptions.includes(optionIndex)) {
      return "wrong";
    }
  }

  return "";
}

function normalizeText(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/ё/g, "е")
    .replace(/\s+/g, " ");
}

function parseNumeric(value) {
  return Number(String(value).replace(",", ".").replace(/\s+/g, ""));
}

function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function wrapIndex(index, length) {
  return (index + length) % length;
}

function clearTimer() {
  if (state.timerId) {
    window.clearInterval(state.timerId);
    state.timerId = null;
  }
}

function getLevelInfo(xp) {
  const pointsPerLevel = 40;
  const rawLevel = Math.floor(xp / pointsPerLevel) + 1;
  const level = Math.min(rawLevel, levelTitles.length);
  const baseXp = (level - 1) * pointsPerLevel;
  const nextXp = level * pointsPerLevel;
  const progressPercent = level === levelTitles.length ? 100 : Math.round(((xp - baseXp) / pointsPerLevel) * 100);

  return {
    level,
    title: levelTitles[level - 1] || levelTitles[levelTitles.length - 1],
    progressPercent: Math.max(0, Math.min(progressPercent, 100)),
    nextXp
  };
}

function getNickname(offset = 0) {
  return playerProfile.nicknames[(state.progress.totalAnswered + offset) % playerProfile.nicknames.length];
}

function shuffleArray(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }
  return copy;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function loadProgress() {
  try {
    const raw = window.localStorage.getItem(storageKey);
    if (!raw) {
      return structuredClone(defaultProgress);
    }

    const parsed = JSON.parse(raw);
    return {
      ...structuredClone(defaultProgress),
      ...parsed,
      literature: { ...defaultProgress.literature, ...(parsed.literature || {}) },
      geography: { ...defaultProgress.geography, ...(parsed.geography || {}) },
      achievements: Array.isArray(parsed.achievements) ? parsed.achievements : []
    };
  } catch (error) {
    return structuredClone(defaultProgress);
  }
}

function saveProgress() {
  window.localStorage.setItem(storageKey, JSON.stringify(state.progress));
}
