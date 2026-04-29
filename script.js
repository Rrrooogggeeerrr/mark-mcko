const appData = {
  literature: {
    label: "Литература",
    accent: "Слова, образы, герои",
    examDate: "18 мая 2026",
    examFormat: "11 заданий, 45 минут",
    examCount: 11,
    overview: [
      "В варианте обычно 2-3 произведения: прозаический фрагмент, стихотворение и еще один текст.",
      "Часто встречаются Тургенев, Пушкин, Гоголь, Толстой и русские народные сказки.",
      "Самые коварные места: тропы, устаревшие слова и задание на два верных утверждения."
    ],
    formatCards: [
      {
        title: "Что важно помнить",
        text: "Нужно узнавать героев, понимать содержание и быстро отличать эпитет, сравнение, метафору и олицетворение."
      },
      {
        title: "Что повторять",
        text: "«Муму», «Зимнее утро», «Ночь перед Рождеством», «Кавказский пленник», народные сказки."
      },
      {
        title: "Как тренироваться",
        text: "Сначала 5 быстрых вопросов, потом ловушки, потом мини-МЦКО на 11 заданий."
      }
    ],
    flashcards: [
      { front: "Эпитет", back: "Художественное определение: яркое слово-признак. Пример: «чудесный день»." },
      { front: "Олицетворение", back: "Неживому предмету приписывают качества живого. Пример: «вьюга злилась»." },
      { front: "Сравнение", back: "Сопоставление с помощью слов «как», «словно», «точно»." },
      { front: "Метафора", back: "Скрытое сравнение без слова «как»." },
      { front: "Проза", back: "Нестихотворный текст: рассказ, повесть, сказка." },
      { front: "Лирика", back: "Стихотворный текст, в котором выражаются чувства и переживания." },
      { front: "Пейзажная лирика", back: "Стихи о природе. «Зимнее утро» относится именно к ней." },
      { front: "Покои", back: "Устаревшее слово: жилые комнаты, часть дома для жилья." },
      { front: "Герасим", back: "Главный герой «Муму», заботился о Татьяне и очень любил Муму." },
      { front: "Вакула", back: "Кузнец из «Ночи перед Рождеством», влюблен в Оксану." }
    ],
    pitfalls: [
      {
        title: "Метафора или олицетворение",
        rule: "Если неживое делает что-то как живое, это обычно олицетворение.",
        memory: "«Вьюга злилась» — злятся живые, значит это олицетворение.",
        challenge: "Как называется троп в выражении «вьюга злилась»?",
        answer: "Олицетворение."
      },
      {
        title: "Ровно два ответа",
        rule: "Если в задании сказано выбрать два верных утверждения, нужно отметить именно два.",
        memory: "Перед отправкой быстро пересчитай галочки: одна, две — стоп.",
        challenge: "Сколько утверждений нужно отметить в задании «Выберите два верных утверждения»?",
        answer: "Ровно два."
      },
      {
        title: "Герой и поступок у Гоголя",
        rule: "Читай ключевые детали: Оксана просит черевички, Вакула их добывает, Солоха принимает кавалеров.",
        memory: "Оксана — просьба, Вакула — действие.",
        challenge: "Кто просит черевички как у царицы?",
        answer: "Оксана."
      },
      {
        title: "Устаревшие слова",
        rule: "Учи короткими парами: покои — комнаты, чело — лоб, уста — губы, лакей — слуга.",
        memory: "Сделай цепочку из четырех слов и повторяй вслух.",
        challenge: "Что значит слово «покои»?",
        answer: "Жилые комнаты, часть дома для жилья."
      },
      {
        title: "Вид лирики",
        rule: "Если стихотворение о природе, чаще всего это пейзажная лирика.",
        memory: "Природа = пейзаж.",
        challenge: "К какому виду лирики относится «Зимнее утро»?",
        answer: "К пейзажной лирике."
      }
    ],
    booster: [
      "Повтори 4 тропа с одним примером на каждый.",
      "Прочитай еще раз героев «Муму» и «Ночи перед Рождеством».",
      "Перед ответом смотри на формулировку: один ответ, два ответа или слово."
    ],
    cheatSheet: [
      { title: "Эпитет", text: "яркое определение" },
      { title: "Сравнение", text: "есть «как», «словно», «точно»" },
      { title: "Метафора", text: "скрытое сравнение без «как»" },
      { title: "Олицетворение", text: "неживое ведет себя как живое" },
      { title: "Пейзажная лирика", text: "стихи о природе" },
      { title: "Покои", text: "жилые комнаты" }
    ],
    questions: [
      {
        id: "lit-hero",
        theme: "Термины",
        type: "single",
        prompt: "Как называется действующее лицо литературного произведения?",
        options: ["Герой", "Ритм", "Размер", "Автор"],
        answer: 0,
        explanation: "Действующее лицо произведения — герой, или персонаж.",
        hint: "Ищи слово, которым называют участника событий."
      },
      {
        id: "lit-prose",
        theme: "Термины",
        type: "single",
        prompt: "Каким термином обозначаются нестихотворные литературные произведения?",
        options: ["Лирика", "Проза", "Баллада", "Рифма"],
        answer: 1,
        explanation: "Проза — это нестихотворный текст.",
        hint: "Рассказ и повесть относятся именно сюда."
      },
      {
        id: "lit-epithet",
        theme: "Тропы",
        type: "single",
        prompt: "Что такое эпитет?",
        options: [
          "Скрытое сравнение без союза «как»",
          "Художественное определение",
          "Преувеличение размера или силы",
          "Рассказ о событиях по порядку"
        ],
        answer: 1,
        explanation: "Эпитет — художественное определение, которое делает описание ярче.",
        hint: "Обычно это образное слово-признак."
      },
      {
        id: "lit-personification",
        theme: "Тропы",
        type: "single",
        prompt: "В каком примере есть олицетворение?",
        options: ["вьюга злилась", "снег как ковер", "чудесный день", "прозрачный лес"],
        answer: 0,
        explanation: "Олицетворение — когда неживое получает свойства живого: вьюга «злится».",
        hint: "Проверь, не совершает ли неживой предмет действие живого."
      },
      {
        id: "lit-comparison",
        theme: "Тропы",
        type: "single",
        prompt: "Что такое сравнение?",
        options: [
          "Сопоставление предметов с помощью слов «как», «словно», «точно»",
          "Повтор одинаковых звуков в строке",
          "Перенос названия по сходству без союза «как»",
          "Описание поступков героя"
        ],
        answer: 0,
        explanation: "В сравнении почти всегда есть слова «как», «словно», «точно».",
        hint: "Ищи союз-помощник."
      },
      {
        id: "lit-landscape",
        theme: "Пушкин",
        type: "single",
        prompt: "К какой тематической группе лирики относится «Зимнее утро» А. С. Пушкина?",
        options: ["Любовная", "Патриотическая", "Пейзажная", "Гражданская"],
        answer: 2,
        explanation: "«Зимнее утро» — это пейзажная лирика, потому что стихотворение о природе.",
        hint: "Что в стихотворении важнее всего: чувства к человеку или картина природы?"
      },
      {
        id: "lit-gerasim",
        theme: "Муму",
        type: "single",
        prompt: "Что произошло с Герасимом после истории с Муму?",
        options: [
          "Он остался у барыни и стал дворником",
          "Он уехал в деревню самовольно",
          "Он отправился в Петербург",
          "Он женился на Татьяне"
        ],
        answer: 1,
        explanation: "После трагедии с Муму Герасим самовольно ушел и уехал в деревню.",
        hint: "Ответ связан с уходом из барского дома."
      },
      {
        id: "lit-tatyana",
        theme: "Муму",
        type: "single",
        prompt: "Чем занималась Татьяна в доме барыни?",
        options: ["Была кухаркой", "Была прачкой", "Была няней", "Была портнихой"],
        answer: 1,
        explanation: "Татьяна в доме барыни была прачкой.",
        hint: "Ее работа связана со стиркой."
      },
      {
        id: "lit-vakula",
        theme: "Гоголь",
        type: "single",
        prompt: "Кто такой Вакула в «Ночи перед Рождеством»?",
        options: [
          "Купец и сосед Солохи",
          "Кузнец, влюбленный в Оксану",
          "Писарь в уездном городе",
          "Запорожец и колдун"
        ],
        answer: 1,
        explanation: "Вакула — кузнец, который любит Оксану и ради нее отправляется за черевичками.",
        hint: "Он мастер и главный действующий герой."
      },
      {
        id: "lit-patsyuk",
        theme: "Гоголь",
        type: "single",
        prompt: "Кто такой Пузатый Пацюк?",
        options: [
          "Бывший запорожец и знахарь",
          "Молодой кузнец",
          "Слуга в доме дьяка",
          "Староста деревни"
        ],
        answer: 0,
        explanation: "Пузатый Пацюк — бывший запорожец, которого считают знахарем.",
        hint: "Это необычный персонаж, к которому сами летят вареники."
      },
      {
        id: "lit-oxana",
        theme: "Гоголь",
        type: "single",
        prompt: "Что попросила Оксана у Вакулы?",
        options: ["Золотое кольцо", "Черевички как у царицы", "Новый сарафан", "Сундук с подарками"],
        answer: 1,
        explanation: "Оксана просит черевички как у царицы.",
        hint: "Это самая известная просьба в произведении."
      },
      {
        id: "lit-archaic",
        theme: "Лексика",
        type: "input",
        inputKind: "text",
        prompt: "Впиши устаревшее слово со значением «жилые комнаты, часть дома для жилья».",
        acceptableAnswers: ["покои"],
        explanation: "Правильный ответ — «покои».",
        hint: "Слово часто встречается в старых текстах о домах и дворцах.",
        placeholder: "Напиши одно слово"
      },
      {
        id: "lit-two-true",
        theme: "Муму",
        type: "multi",
        requiredSelections: 2,
        prompt: "Выбери два верных утверждения о «Муму».",
        options: [
          "Герасим ухаживал за прачкой Татьяной.",
          "Барыня ласково относилась к Муму и хотела оставить собаку.",
          "Герасим относился к Муму с большой любовью.",
          "Гаврила был кузнецом."
        ],
        answer: [0, 2],
        explanation: "Верны утверждения про Татьяну и любовь Герасима к Муму.",
        hint: "Здесь обязательно нужно отметить ровно два ответа."
      },
      {
        id: "lit-day-wonderful",
        theme: "Тропы",
        type: "single",
        prompt: "Определи средство выразительности в строке «Мороз и солнце; день чудесный!».",
        options: ["Эпитет", "Гипербола", "Сравнение", "Аллегория"],
        answer: 0,
        explanation: "Слово «чудесный» — это яркое художественное определение, то есть эпитет.",
        hint: "Ищи образное слово-признак."
      },
      {
        id: "lit-metaphor",
        theme: "Тропы",
        type: "single",
        prompt: "Что такое метафора?",
        options: [
          "Скрытое сравнение без слова «как»",
          "Наделение неживого качествами живого",
          "Точное перечисление предметов",
          "Описание внешности героя"
        ],
        answer: 0,
        explanation: "Метафора — скрытое сравнение без союза «как».",
        hint: "Она похожа на сравнение, но союз исчезает."
      }
    ]
  },
  geography: {
    label: "География",
    accent: "Карта, координаты, путешествия",
    examDate: "20 мая 2026",
    examFormat: "14 заданий, 45 минут",
    examCount: 14,
    overview: [
      "В работе есть карта, координаты, масштаб, путешественники, литосферные плиты и расчеты по формуле.",
      "Для работы разрешен атлас, поэтому полезно тренироваться сразу с картой рядом.",
      "Чаще всего ошибаются в координатах, выборе масштаба и расчете протяженности по экватору."
    ],
    formatCards: [
      {
        title: "Что важно помнить",
        text: "Сначала широта, потом долгота. Западную и восточную долготу при расчете по экватору нужно складывать."
      },
      {
        title: "Что повторять",
        text: "Материки, океаны, путешественники, масштаб, стороны горизонта, очаг и эпицентр."
      },
      {
        title: "Как тренироваться",
        text: "Отдельно добей формулы и ловушки, потом реши мини-МЦКО на 14 заданий."
      }
    ],
    flashcards: [
      { front: "6 материков", back: "Евразия, Африка, Северная Америка, Южная Америка, Австралия, Антарктида." },
      { front: "Колумб", back: "1492 год, открытие Америки." },
      { front: "Васко да Гама", back: "1498 год, морской путь в Индию." },
      { front: "Магеллан", back: "Первая кругосветная экспедиция, 1519-1522." },
      { front: "Крузенштерн и Лисянский", back: "Первое русское кругосветное путешествие." },
      { front: "Формула протяженности", back: "(сумма градусов) x 111,3 км" },
      { front: "Крупный масштаб", back: "Чем меньше знаменатель, тем крупнее масштаб." },
      { front: "Координаты", back: "Сначала широта, потом долгота." },
      { front: "22 июня", back: "Самый длинный день в Северном полушарии." },
      { front: "Очаг и эпицентр", back: "Очаг — в глубине, эпицентр — на поверхности прямо над очагом." }
    ],
    pitfalls: [
      {
        title: "Запад плюс восток",
        rule: "Если один берег в западной долготе, а другой — в восточной, градусы складывают.",
        memory: "Разные полушария по долготе = плюс.",
        challenge: "Берега на 50° з. д. и 9° в. д. Сложить или вычесть градусы?",
        answer: "Сложить."
      },
      {
        title: "Крупнее не значит больше число",
        rule: "Масштаб 1:1000 крупнее, чем 1:100000, потому что знаменатель меньше.",
        memory: "Меньше знаменатель — ближе и крупнее.",
        challenge: "Какой масштаб крупнее: 1:1000 или 1:100000?",
        answer: "1:1000."
      },
      {
        title: "Порядок координат",
        rule: "Сначала называют широту, потом долготу.",
        memory: "Широта шагает первой.",
        challenge: "Что идет первым в записи координат?",
        answer: "Широта."
      },
      {
        title: "Север зимой",
        rule: "Чем дальше на север зимой, тем короче день и ниже Солнце.",
        memory: "Север зимой крадет световой день.",
        challenge: "Верно ли: чем дальше на север, тем зимой день короче?",
        answer: "Да, верно."
      },
      {
        title: "Что изучает физическая география",
        rule: "Она изучает природу: рельеф, климат, воды, земную кору.",
        memory: "Человек и транспорт сюда не входят.",
        challenge: "Население относится к физической географии?",
        answer: "Нет."
      }
    ],
    booster: [
      "Скажи вслух пары: Колумб — Америка, Васко да Гама — Индия, Магеллан — кругосветка.",
      "Потренируйся на атласе искать меридианы и параллели.",
      "На задачах по масштабу всегда проверяй, поместится ли план на лист."
    ],
    cheatSheet: [
      { title: "Формула", text: "(градусы) x 111,3 км" },
      { title: "Разные долготы", text: "з. д. + в. д. = складываем" },
      { title: "Крупный масштаб", text: "меньше знаменатель" },
      { title: "Координаты", text: "сначала широта, потом долгота" },
      { title: "22 июня", text: "самый длинный день" },
      { title: "Очаг / эпицентр", text: "в глубине / на поверхности" }
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
        id: "geo-columbus",
        theme: "Путешественники",
        type: "single",
        prompt: "Что открыл Христофор Колумб?",
        options: ["Австралию", "Морской путь в Индию", "Америку", "Антарктиду"],
        answer: 2,
        explanation: "Колумб открыл Америку в 1492 году.",
        hint: "Это одно из самых известных географических открытий."
      },
      {
        id: "geo-vasco",
        theme: "Путешественники",
        type: "single",
        prompt: "Что сделал Васко да Гама?",
        options: [
          "Открыл морской путь в Индию",
          "Совершил первое русское кругосветное путешествие",
          "Открыл Америку",
          "Исследовал Антарктиду"
        ],
        answer: 0,
        explanation: "Васко да Гама открыл морской путь в Индию.",
        hint: "Связь: да Гама — Индия."
      },
      {
        id: "geo-magellan",
        theme: "Путешественники",
        type: "single",
        prompt: "Что совершила экспедиция Магеллана?",
        options: [
          "Первое плавание по Волге",
          "Первое кругосветное путешествие",
          "Открытие Африки",
          "Поход к Северному полюсу"
        ],
        answer: 1,
        explanation: "Экспедиция Магеллана совершила первое кругосветное путешествие.",
        hint: "Ключевое слово — весь земной шар."
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
        id: "geo-physical",
        theme: "Физическая география",
        type: "single",
        prompt: "Что изучают физико-географические науки?",
        options: [
          "Население, транспорт и хозяйство",
          "Только страны и столицы",
          "Климат, рельеф и воды Земли",
          "Только полезные ископаемые"
        ],
        answer: 2,
        explanation: "Физическая география изучает природные объекты и явления: климат, рельеф, воды и другое.",
        hint: "Подумай, что относится именно к природе."
      },
      {
        id: "geo-directions",
        theme: "Топографическая карта",
        type: "single",
        prompt: "Как определить направление на обычной карте, если нет специальной стрелки?",
        options: [
          "Север слева, юг справа",
          "Север внизу, юг вверху",
          "Север вверху, юг внизу",
          "Направление определить нельзя"
        ],
        answer: 2,
        explanation: "Если особой стрелки нет, на карте север обычно сверху, юг снизу, запад слева, восток справа.",
        hint: "Представь обычный атлас."
      },
      {
        id: "geo-scale",
        theme: "Масштаб",
        type: "single",
        prompt: "Какой масштаб подойдет, чтобы участок 300 x 150 м поместился на лист 31 x 21 см?",
        options: ["1:100", "1:1000", "1:10000", "1:50000"],
        answer: 1,
        explanation: "При масштабе 1:1000 в 1 см будет 10 м: 300 м превратятся в 30 см, и это поместится на лист.",
        hint: "Проверь, сколько сантиметров получится из 300 метров."
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
          "Смотреть на экватор"
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
        id: "geo-longest-day",
        theme: "Движение Земли",
        type: "input",
        inputKind: "text",
        prompt: "Когда в Северном полушарии самый длинный день?",
        acceptableAnswers: ["22 июня"],
        explanation: "Самый длинный день в Северном полушарии — 22 июня.",
        hint: "Это день летнего солнцестояния.",
        placeholder: "Напиши дату"
      },
      {
        id: "geo-north-winter",
        theme: "Солнце и высота",
        type: "single",
        prompt: "Верно ли утверждение: чем дальше на север, тем зимой день короче?",
        options: ["Верно", "Неверно"],
        answer: 0,
        explanation: "Да, чем дальше на север, тем зимой короче световой день.",
        hint: "Вспомни полярную ночь и короткие северные дни."
      },
      {
        id: "geo-quakes",
        theme: "Строение Земли",
        type: "single",
        prompt: "Почему у западного побережья Южной Америки часто бывают землетрясения?",
        options: [
          "Там много рек",
          "Там очень жаркий климат",
          "Там проходит граница литосферных плит",
          "Там часто идут дожди"
        ],
        answer: 2,
        explanation: "Землетрясения часто происходят у границ литосферных плит.",
        hint: "Ответ связан со строением земной коры, а не с погодой."
      },
      {
        id: "geo-focus",
        theme: "Землетрясения",
        type: "single",
        prompt: "Где находится очаг землетрясения, а где эпицентр?",
        options: [
          "Очаг на поверхности, эпицентр в глубине",
          "Очаг в глубине земной коры, эпицентр на поверхности над ним",
          "И очаг, и эпицентр только в океане",
          "Оба находятся только в атмосфере"
        ],
        answer: 1,
        explanation: "Очаг землетрясения находится в глубине, а эпицентр — точка на поверхности прямо над очагом.",
        hint: "Представь источник толчка внутри Земли и точку над ним."
      },
      {
        id: "geo-order",
        theme: "Координаты",
        type: "single",
        prompt: "Что в координатах пишут первым?",
        options: ["Долготу", "Широту", "Высоту горы", "Название материка"],
        answer: 1,
        explanation: "Сначала всегда пишут широту, потом долготу.",
        hint: "Широта идет первой."
      },
      {
        id: "geo-scale-bigger",
        theme: "Масштаб",
        type: "single",
        prompt: "Какой масштаб крупнее?",
        options: ["1:1000", "1:100000", "Они одинаковые", "Это нельзя определить"],
        answer: 0,
        explanation: "Чем меньше знаменатель, тем крупнее масштаб. Поэтому 1:1000 крупнее 1:100000.",
        hint: "Смотри не на величину числа, а на близость изображения."
      }
    ]
  }
};

const storageKey = "mcko-5-trainer-progress";
const playerProfile = {
  name: "Марк",
  nicknames: ["Марк", "сынок", "кот"]
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
  streak3: {
    key: "streak3",
    name: "Серия x3",
    description: "3 правильных ответа подряд"
  },
  streak5: {
    key: "streak5",
    name: "Серия x5",
    description: "5 правильных ответов подряд"
  },
  streak8: {
    key: "streak8",
    name: "Серия x8",
    description: "8 правильных ответов подряд"
  },
  "literature-ace": {
    key: "literature-ace",
    name: "Литература 80+",
    description: "80% и выше в мини-МЦКО по литературе"
  },
  "geography-ace": {
    key: "geography-ace",
    name: "География 80+",
    description: "80% и выше в мини-МЦКО по географии"
  },
  "perfect-run": {
    key: "perfect-run",
    name: "Без ошибок",
    description: "100% в тренировке"
  }
};

const favoriteWorlds = [
  {
    title: "Minecraft",
    kicker: "любимое",
    text: "Спокойно строим базу знаний по блоку: термин, герой, правило, ответ.",
    className: "world-minecraft"
  },
  {
    title: "Brawl Stars",
    kicker: "короткий раунд",
    text: "Небольшие заходы, быстрые ответы и звезды за хороший темп.",
    className: "world-brawl"
  },
  {
    title: "Standoff 2",
    kicker: "точность",
    text: "Не спешим: сначала прицеливаемся в правило, потом выбираем ответ.",
    className: "world-standoff"
  },
  {
    title: "Roblox",
    kicker: "разные режимы",
    text: "Можно пройти разминку, карточки или ловушки как разные игровые режимы.",
    className: "world-roblox"
  },
  {
    title: "Football Club 2026",
    kicker: "матч",
    text: "Есть таймер, серия и счет, как хороший матч, только по учебе.",
    className: "world-football"
  },
  {
    title: "Fortnite",
    kicker: "собраться и решить",
    text: "На сложных вопросах важно быстро собраться и не потерять внимание.",
    className: "world-fortnite"
  },
  {
    title: "Флорбол",
    kicker: "скорость и реакция",
    text: "Смотрим внимательно, реагируем быстро и держим хороший ритм.",
    className: "world-floorball"
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
      const index = Number(optionButton.dataset.optionIndex);
      chooseOption(index);
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
  }

  if (action === "submit-answer") {
    submitAnswer();
  }

  if (action === "next-question") {
    nextQuestion();
  }

  if (action === "toggle-hint") {
    state.hintOpen = !state.hintOpen;
    renderStage();
  }

  if (action === "retry-session") {
    startSession(mode || "warmup");
  }

  if (action === "go-home") {
    openView("home");
  }

  if (action === "flip-card") {
    state.flashcardFlipped = !state.flashcardFlipped;
    renderStage();
  }

  if (action === "card-next") {
    shiftFlashcard(1);
  }

  if (action === "card-prev") {
    shiftFlashcard(-1);
  }

  if (action === "pitfall-next") {
    shiftPitfall(1);
  }

  if (action === "pitfall-prev") {
    shiftPitfall(-1);
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

  if (state.session.remainingSeconds) {
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
  } else if (question.type === "multi") {
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
      title: "Нужно выбрать один вариант",
      explanation: "Сначала отметь один ответ, а потом проверь себя.",
      validationOnly: true
    };
    renderStage();
    return;
  }

  if (question.type === "multi" && question.requiredSelections && state.selectedOptions.length !== question.requiredSelections) {
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
      explanation: "Напиши ответ, а потом отправляй.",
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
    prompt: question.prompt,
    theme: question.theme,
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
    const isClose = Math.abs(numeric - question.numericTarget) <= question.numericTolerance;
    const roundedOkay = question.alsoAcceptRounded !== undefined && Math.abs(numeric - question.alsoAcceptRounded) <= 0.1;
    const correct = Number.isFinite(numeric) && (isClose || roundedOkay);
    return {
      correct,
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
  const subjectData = appData[state.subject];
  document.querySelectorAll("[data-subject]").forEach((button) => {
    button.classList.toggle("active", button.dataset.subject === state.subject);
  });

  document.querySelectorAll("[data-view]").forEach((button) => {
    button.classList.toggle("active", button.dataset.view === state.view);
  });

  const subjectProgress = state.progress[state.subject];
  const accuracy = state.progress.totalAnswered
    ? Math.round((state.progress.totalCorrect / state.progress.totalAnswered) * 100)
    : 0;
  const levelInfo = getLevelInfo(state.progress.totalXp);
  const currentStreak = state.session?.currentStreak || 0;
  const achievementCount = state.progress.achievements.length;

  statsBox.innerHTML = `
    <div class="stats-card level-card">
      <span>Уровень Марка</span>
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
      <strong>${achievementCount}</strong>
      <p>Лучший большой матч: ${subjectProgress.bestExamPercent}%</p>
    </div>
    <div class="stats-card">
      <span>Попыток по предмету</span>
      <strong>${subjectProgress.attempts}</strong>
      <p>Лучшая разминка: ${subjectProgress.bestWarmupPercent}%</p>
    </div>
  `;

  reminderBox.innerHTML = `
    <p class="muted"><span class="accent">${playerProfile.name}</span>, ${getNickname(2)}, сейчас тренируем <span class="accent">${subjectData.accent}</span>.</p>
    <p class="note-strong">${getSubjectPepTalk(state.subject)}</p>
    <ul class="reminder-list">
      ${subjectData.booster.slice(0, 3).map((item) => `<li>${item}</li>`).join("")}
    </ul>
  `;
}

function renderSupport() {
  const subjectData = appData[state.subject];
  cheatSheet.innerHTML = `
    <div class="headline-row">
      <h3>Шпаргалка для Марка</h3>
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
      <h3>План для Марка</h3>
      <span class="theme-chip">${subjectData.examDate}</span>
    </div>
    <div class="booster-grid">
      ${subjectData.booster
        .map(
          (item, index) => `
            <div class="booster-card">
              <strong>Шаг ${index + 1}</strong>
              <p>${item}</p>
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
            <p class="eyebrow">Подготовка для Марка</p>
            <h2>${getHomeHeadline()}</h2>
          </div>
          <div class="badge-row">
            <span class="subject-badge"><strong>${playerProfile.name}</strong></span>
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
            <p>${latestAchievements.length ? latestAchievements.map((item) => item.name).join(", ") : "Первая награда уже близко."}</p>
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
          <span class="hero-number">${subjectData.questions.length}</span>
        </div>
        <p>${getHomeMissionLine(subjectData.label)}</p>
        <ul>
          <li>Разминка: 5 быстрых вопросов с моментальной проверкой.</li>
          <li>Большой матч: ${subjectData.examCount} вопросов в формате, близком к работе.</li>
          <li>Карточки: термины, даты, герои и формулы.</li>
          <li>Ловушки: короткие задания на самые частые ошибки.</li>
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
        <strong>Как ему удобнее</strong>
        <p>Лучше идти короткими заходами: 5 вопросов, 5 карточек, 1 ловушка, потом маленькая пауза.</p>
      </div>
      <div class="mini-card">
        <strong>Как поддержать</strong>
        <p>После ошибки лучше попросить объяснить правило своими словами, а не просто назвать ответ.</p>
      </div>
      <div class="mini-card">
        <strong>Когда уже хорошо</strong>
        <p>Если в мини-МЦКО уже 75% и выше, можно переходить к повторению слабых мест и скорости.</p>
      </div>
    </div>
  `;
}

function renderFavoriteWorldsSection() {
  return `
    <div class="world-section">
      <div class="headline-row">
        <div>
          <p class="eyebrow">Что ему нравится</p>
          <h3>Любимые миры Марка</h3>
        </div>
        <span class="theme-chip">игры и флорбол</span>
      </div>
      <div class="world-grid">
        ${favoriteWorlds
          .map(
            (item) => `
              <article class="world-card ${item.className}">
                <span class="world-kicker ${item.kicker === "любимое" ? "world-kicker-fav" : ""}">${item.kicker}</span>
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
  const optionMarkup = question.type === "input" ? renderInput(question) : renderOptions(question);
  const feedbackMarkup = state.feedback ? renderFeedback(question) : "";
  const hintMarkup =
    state.hintOpen && question.hint
      ? `<div class="hint-box"><strong>Подсказка:</strong> ${question.hint}</div>`
      : "";

  return `
    <div class="results-header">
      <div>
        <p class="eyebrow">${state.session.mode === "exam" ? "Большой матч" : "Короткий раунд"}</p>
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
        <span>Звезды за проход</span>
        <strong>${state.session.starsEarned}</strong>
        <p>${formatStarsLine(state.session.starsEarned)}</p>
      </div>
      <div class="game-card">
        <span>Серия</span>
        <strong>${state.session.currentStreak}</strong>
        <p>${getNextStreakGoalText(state.session.currentStreak)}</p>
      </div>
      <div class="game-card">
        <span>XP Марка</span>
        <strong>${state.progress.totalXp}</strong>
        <p>До уровня ${levelInfo.level + 1}: ${Math.max(levelInfo.nextXp - state.progress.totalXp, 0)} XP</p>
      </div>
    </div>

    <div class="progress-row">
      <div class="progress-shell" aria-hidden="true">
        <div class="progress-fill" style="width:${progressPercent}%"></div>
      </div>
      <span class="theme-chip">${progressPercent}% маршрута</span>
    </div>

    <div class="results-card">
      <div class="question-meta">
        <span class="theme-chip">${question.theme}</span>
        <span class="theme-chip">${appData[state.subject].label}</span>
      </div>
      <p class="pep-line">${getQuestionPepLine(question.theme)}</p>
      <p class="question-text">${question.prompt}</p>
      ${optionMarkup}
      ${hintMarkup}
      ${feedbackMarkup}
    </div>

    <div class="trainer-actions">
      ${
        state.feedback && !state.feedback.validationOnly
          ? `<button class="quiz-button primary" type="button" data-action="next-question">Дальше</button>`
          : `<button class="quiz-button primary" type="button" data-action="submit-answer">Проверить</button>`
      }
      <button class="quiz-button secondary" type="button" data-action="toggle-hint">
        ${state.hintOpen ? "Спрятать подсказку" : "Показать подсказку"}
      </button>
      <button class="tiny-button" type="button" data-action="go-home">На главную</button>
    </div>
  `;
}

function renderOptions(question) {
  return `
    <div class="options-grid">
      ${question.options
        .map((option, index) => {
          const letter = String.fromCharCode(1040 + index);
          const isSelected = state.selectedOptions.includes(index);
          const correctnessClass = feedbackOptionClass(question, index);
          return `
            <button
              class="option-card ${isSelected ? "selected" : ""} ${correctnessClass}"
              type="button"
              data-option-index="${index}"
            >
              <span class="option-label">
                <span class="option-mark">${letter}</span>
                <span>${option}</span>
              </span>
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
      <label for="answer-input" class="muted">Впиши ответ:</label>
      <input
        id="answer-input"
        class="answer-input"
        type="text"
        placeholder="${question.placeholder || "Напиши ответ"}"
        value="${escapeHtml(state.typedAnswer)}"
        data-answer-input
      />
    </div>
  `;
}

function renderFeedback(question) {
  const className = state.feedback.correct ? "correct" : "wrong";
  const answerLine =
    state.feedback.validationOnly || state.feedback.correct
      ? ""
      : `<strong>Правильный ответ:</strong> ${question.type === "multi" ? question.answer.map((index) => question.options[index]).join("; ") : state.feedback.correctAnswer}`;
  const cheerLine = state.feedback.cheer ? `<p class="feedback-cheer">${state.feedback.cheer}</p>` : "";
  const rewardLine = state.feedback.reward ? renderRewardBanner(state.feedback.reward) : "";

  return `
    <div class="feedback-box ${className}">
      <h3 class="feedback-title">${state.feedback.title}</h3>
      ${cheerLine}
      <p>${state.feedback.explanation}</p>
      ${rewardLine}
      ${answerLine}
    </div>
  `;
}

function renderResultsView() {
  if (!state.session) {
    return `<div class="empty-state"><h3>Результатов пока нет</h3><p>Запусти разминку или мини-МЦКО.</p></div>`;
  }

  const answeredCount = state.session.questions.length;
  const missedCount = answeredCount - state.session.answers.length;
  const percent = answeredCount === 0 ? 0 : Math.round((state.session.score / answeredCount) * 100);
  const scoreClass = percent >= 80 ? "score-good" : percent >= 55 ? "score-mid" : "score-low";
  const mistakes = state.session.answers.filter((item) => !item.correct);
  const levelInfo = getLevelInfo(state.progress.totalXp);
  const title = state.session.timedOut ? "Время вышло" : "Финиш";

  return `
    <div class="results-header">
      <div>
        <p class="eyebrow">${title}</p>
        <h2 class="results-title">${getResultsHeadline(percent)}</h2>
        <p class="home-cheer">${getResultsSupportLine(percent, missedCount)}</p>
      </div>
      <span class="theme-chip">${state.session.mode === "exam" ? "Большой матч" : "Короткий раунд"}</span>
    </div>

    <div class="score-grid">
      <div class="score-card">
        <span>Счет</span>
        <div class="score-number ${scoreClass}">${state.session.score}/${answeredCount}</div>
        <p>${percent}% правильных ответов.</p>
      </div>
      <div class="score-card">
        <span>Звезды за раунд</span>
        <div class="score-number score-good">${state.session.starsEarned}</div>
        <p>${formatStarsLine(state.session.starsEarned)}</p>
      </div>
      <div class="score-card">
        <span>XP за проход</span>
        <div class="score-number">${state.session.xpEarned}</div>
        <p>Текущий уровень: ${levelInfo.level}</p>
      </div>
      <div class="score-card">
        <span>Лучшая серия</span>
        <div class="score-number">${state.session.bestStreak}</div>
        <p>Столько ответов подряд получилось без ошибок.</p>
      </div>
      <div class="score-card">
        <span>Что делать дальше</span>
        <p>${recommendNextStep(percent)} ${missedCount > 0 ? `Неотвеченных заданий: ${missedCount}.` : ""}</p>
      </div>
    </div>

    ${
      state.session.badgesEarned.length
        ? `
          <div class="results-card achievement-block">
            <strong>Новые награды</strong>
            <p>Вот что открылось в этой тренировке.</p>
            ${renderAchievementPills(state.session.badgesEarned)}
          </div>
        `
        : ""
    }

    ${
      mistakes.length
        ? `
          <div class="card-grid">
            ${mistakes
              .map(
                (item) => `
                  <div class="mistake-card">
                    <strong>${item.theme}</strong>
                    <p>${item.prompt}</p>
                    <p><span class="danger">Нужно повторить:</span> ${item.correctAnswer}</p>
                    <p>${item.explanation}</p>
                    <p class="mistake-pep">${getMistakePepLine()}</p>
                  </div>
                `
              )
              .join("")}
          </div>
        `
        : `
          <div class="results-card">
            <strong>Ошибок нет</strong>
            <p>${playerProfile.name}, ${getNickname(1)}, это был очень сильный проход. Можно закрепить успех карточками или сразу перейти к другому предмету.</p>
          </div>
        `
    }

    <div class="trainer-actions">
      <button class="quiz-button primary" type="button" data-action="retry-session" data-mode="${state.session.mode}">
        Пройти еще раз
      </button>
      <button class="quiz-button secondary" type="button" data-view="flashcards">
        Повторить карточки
      </button>
      <button class="tiny-button" type="button" data-view="pitfalls">Открыть ловушки</button>
    </div>
  `;
}

function renderFlashcardsView() {
  const subjectData = appData[state.subject];
  const card = subjectData.flashcards[state.flashcardIndex];
  return `
    <div class="flashcard-top">
      <div>
        <p class="eyebrow">Быстрый повтор</p>
        <h2 class="flashcard-title">${subjectData.label}: быстрое повторение</h2>
        <p class="home-cheer">${playerProfile.name}, ${getNickname()}, сначала попробуй ответить сам, а потом переворачивай карточку.</p>
      </div>
      <span class="theme-chip">${state.flashcardIndex + 1} / ${subjectData.flashcards.length}</span>
    </div>

    <div class="flashcard-shell">
      <div class="flashcard ${state.flashcardFlipped ? "flipped" : ""}">
        <section class="flashcard-face flashcard-front">
          <span class="flashcard-kicker">Лицевая сторона</span>
          <h3>${card.front}</h3>
          <p>Сначала попробуй ответить вслух, а потом переверни карточку.</p>
        </section>
        <section class="flashcard-face flashcard-back">
          <span class="flashcard-kicker">Ответ</span>
          <h3>${card.front}</h3>
          <p>${card.back}</p>
        </section>
      </div>
    </div>

    <div class="flashcard-actions">
      <button class="quiz-button primary" type="button" data-action="flip-card">
        ${state.flashcardFlipped ? "Спрятать ответ" : "Перевернуть карточку"}
      </button>
      <button class="quiz-button secondary" type="button" data-action="card-prev">Назад</button>
      <button class="quiz-button secondary" type="button" data-action="card-next">Дальше</button>
    </div>
  `;
}

function renderPitfallsView() {
  const subjectData = appData[state.subject];
  const pitfall = subjectData.pitfalls[state.pitfallIndex];
  return `
    <div class="pitfall-top">
      <div>
        <p class="eyebrow">Сложные места</p>
        <h2 class="pitfall-title">${pitfall.title}</h2>
        <p class="home-cheer">${getMissCheer(pitfall.title)}</p>
      </div>
      <span class="theme-chip">${state.pitfallIndex + 1} / ${subjectData.pitfalls.length}</span>
    </div>

    <div class="pitfall-card">
      <p><strong>Правило:</strong> ${pitfall.rule}</p>
      <p><strong>Как запомнить:</strong> ${pitfall.memory}</p>
      <p><strong>Проверь себя:</strong> ${pitfall.challenge}</p>
      ${
        state.pitfallRevealed
          ? `<div class="pitfall-answer"><strong>Ответ:</strong> ${pitfall.answer}</div>`
          : ""
      }
    </div>

    <div class="pitfall-actions">
      <button class="quiz-button primary" type="button" data-action="reveal-pitfall">
        ${state.pitfallRevealed ? "Спрятать ответ" : "Показать ответ"}
      </button>
      <button class="quiz-button secondary" type="button" data-action="pitfall-prev">Назад</button>
      <button class="quiz-button secondary" type="button" data-action="pitfall-next">Дальше</button>
    </div>
  `;
}

function currentQuestion() {
  return state.session?.questions[state.session.index] || null;
}

function awardCorrectAnswer(streak) {
  const reward = getRewardForStreak(streak);
  const previousXp = state.progress.totalXp;

  state.session.starsEarned += reward.stars;
  state.session.xpEarned += reward.xp;
  state.progress.totalStars += reward.stars;
  state.progress.totalXp += reward.xp;

  const previousLevel = getLevelInfo(previousXp);
  const currentLevel = getLevelInfo(state.progress.totalXp);
  if (currentLevel.level > previousLevel.level) {
    reward.levelUp = currentLevel;
  }

  reward.achievements = reward.achievements || [];
  state.session.badgesEarned.push(...reward.achievements);
  saveProgress();

  return reward;
}

function getRewardForStreak(streak) {
  const reward = {
    stars: 2,
    xp: 12,
    milestone: "",
    achievements: [],
    levelUp: null
  };

  const streakRewards = {
    3: { stars: 2, xp: 8, label: "Серия x3", key: "streak3" },
    5: { stars: 3, xp: 12, label: "Серия x5", key: "streak5" },
    8: { stars: 5, xp: 18, label: "Серия x8", key: "streak8" }
  };

  const bonus = streakRewards[streak];
  if (bonus) {
    reward.stars += bonus.stars;
    reward.xp += bonus.xp;
    reward.milestone = bonus.label;
    const achievement = unlockAchievement(bonus.key);
    if (achievement) {
      reward.achievements.push(achievement);
    }
  }

  return reward;
}

function finalizeSessionAchievements() {
  if (!state.session) {
    return;
  }

  const percent = getSessionPercent(state.session);
  const earned = [];

  if (state.session.mode === "exam" && percent >= 80) {
    const subjectKey = state.subject === "literature" ? "literature-ace" : "geography-ace";
    const achievement = unlockAchievement(subjectKey);
    if (achievement) {
      earned.push(achievement);
    }
  }

  if (percent === 100 && state.session.questions.length) {
    const perfectAchievement = unlockAchievement("perfect-run");
    if (perfectAchievement) {
      earned.push(perfectAchievement);
    }
  }

  if (earned.length) {
    state.session.badgesEarned.push(...earned);
    saveProgress();
  }
}

function unlockAchievement(key) {
  const achievement = achievementCatalog[key];
  if (!achievement) {
    return null;
  }

  const alreadyUnlocked = state.progress.achievements.some((item) => item.key === key);
  if (alreadyUnlocked) {
    return null;
  }

  state.progress.achievements.push(achievement);
  return achievement;
}

function getNickname(offset = 0) {
  const pool = playerProfile.nicknames;
  const seed =
    state.progress.totalAnswered +
    state.progress.totalCorrect +
    (state.session?.index || 0) +
    state.flashcardIndex +
    state.pitfallIndex +
    offset;

  return pool[seed % pool.length];
}

function getLevelInfo(xp) {
  let level = 1;
  let previousXp = 0;
  let step = 40;
  let nextXp = step;

  while (xp >= nextXp) {
    level += 1;
    previousXp = nextXp;
    step += 18;
    nextXp += step;
  }

  const title = levelTitles[Math.min(level - 1, levelTitles.length - 1)] || `Уровень ${level}`;
  const progressInLevel = xp - previousXp;
  const levelSpan = nextXp - previousXp || 1;
  const progressPercent = Math.max(0, Math.min(100, Math.round((progressInLevel / levelSpan) * 100)));

  return {
    level,
    title,
    previousXp,
    nextXp,
    progressPercent
  };
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
    `${playerProfile.name}, ${getNickname(1)}, хорошо. По теме «${theme}» ты попал точно.`,
    `${getNickname(2)}, молодец. Еще один правильный ответ в копилку.`,
    `${playerProfile.name}, так держать. Уже видно, что ты лучше ориентируешься в материале.`
  ];

  if (reward.levelUp) {
    return `${lines[0]} Открылся новый уровень: ${reward.levelUp.level}, ${reward.levelUp.title}.`;
  }

  return lines[(state.progress.totalCorrect + theme.length) % lines.length];
}

function getMissCheer(theme) {
  const lines = [
    `${getNickname()}, ошибаться здесь нормально. Сейчас спокойно разберем правило.`,
    `${playerProfile.name}, по теме «${theme}» просто нужна еще одна спокойная попытка.`,
    `${getNickname(1)}, не спешим: посмотрим ответ и дальше будет легче.`
  ];

  return lines[(state.progress.totalAnswered + theme.length) % lines.length];
}

function getQuestionPepLine(theme) {
  const lines =
    state.subject === "literature"
      ? [
          "Как в Minecraft: спокойно строим базу из терминов и героев.",
          "Как в Brawl Stars: вопрос короткий, значит ответ тоже можно найти быстро.",
          "Как во флорболе: внимание на слово, потом движение дальше."
        ]
      : [
          "Как в Standoff 2: сначала прицел в правило, потом выбор.",
          "Как в Football Club 2026: смотри на все поле задачи и делай точный ход.",
          "Как в Minecraft: по блоку собираем карту, координаты и формулы."
        ];
  return `${playerProfile.name}, ${getNickname()}, сейчас тема «${theme}». ${lines[(state.session?.index || 0) % lines.length]}`;
}

function getHomeHeadline() {
  return state.subject === "literature"
    ? `${playerProfile.name}, сегодня повторяем тропы, героев и термины`
    : `${playerProfile.name}, сегодня повторяем карту, координаты и формулы`;
}

function getHomeSupportLine() {
  const subjectLine =
    state.subject === "literature"
      ? "Сынок, здесь все как ты любишь: сначала спокойно строим базу, как в Minecraft, а потом добираем темп короткими раундами."
      : "Кот, здесь главное точность и внимание: немного как в Standoff 2, немного как в футбольном матче, только по географии."
  return subjectLine;
}

function getHomeMissionLine(subjectLabel) {
  return `${playerProfile.name}, все уже готово для занятия по предмету «${subjectLabel}»: короткие задания, повторение и спокойный разбор ошибок.`;
}

function getResultsHeadline(percent) {
  if (percent >= 85) {
    return `${playerProfile.name}, очень хороший результат`;
  }

  if (percent >= 60) {
    return `${playerProfile.name}, уже хорошо получается`;
  }

  return `${playerProfile.name}, начало хорошее`;
}

function getResultsSupportLine(percent, missedCount) {
  if (percent >= 85) {
    return `${getNickname()}, молодец. ${missedCount ? `Нужно только не пропускать задания.` : "Можно переходить к следующему этапу."}`;
  }

  if (percent >= 60) {
    return `${getNickname()}, уже неплохо. Еще немного повторения, и будет совсем уверенно.`;
  }

  return `${getNickname()}, все нормально. Тренировка как раз нужна для того, чтобы спокойно увидеть, что еще повторить.`;
}

function getSubjectPepTalk(subject) {
  return subject === "literature"
    ? "Сегодня работаем как в Minecraft и Brawl Stars: сначала база, потом быстрые точные ответы."
    : "Сегодня работаем как в Standoff 2, Football Club и флорболе: точность, обзор и хороший темп.";
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

function getSessionPercent(session) {
  return session.questions.length ? Math.round((session.score / session.questions.length) * 100) : 0;
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
    ? "Сегодня режим Minecraft + Brawl Stars: сначала собираем базу по терминам и героям, потом быстро добираем правильные ответы."
    : "Сегодня режим Standoff 2 + Football Club 2026 + флорбол: видим поле, держим точность и не суетимся на формулах.";
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

function recommendNextStep(percent) {
  if (percent >= 85) {
    return `${getNickname()}, можно закрепить успех карточками и смело идти ко второму предмету.`;
  }

  if (percent >= 60) {
    return `${playerProfile.name}, открой блок «Ловушки», а потом снова реши мини-МЦКО.`;
  }

  return `${getNickname()}, лучше пройти карточки и разобрать ошибки по темам, а потом запустить новую разминку.`;
}

function wrapIndex(index, length) {
  if (!length) {
    return 0;
  }

  return (index + length) % length;
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60)
    .toString()
    .padStart(2, "0");
  const remainder = (seconds % 60).toString().padStart(2, "0");
  return `${minutes}:${remainder}`;
}

function parseNumeric(value) {
  const cleaned = value.replace(/\s+/g, "").replace(",", ".").replace(/[^\d.]/g, "");
  return Number(cleaned);
}

function normalizeText(value) {
  return value
    .trim()
    .toLowerCase()
    .replace(/ё/g, "е")
    .replace(/[.!,;:?"]/g, "");
}

function shuffleArray(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }
  return copy;
}

function clearTimer() {
  if (state.timerId) {
    window.clearInterval(state.timerId);
    state.timerId = null;
  }
}

function cloneProgressTemplate() {
  return JSON.parse(JSON.stringify(defaultProgress));
}

function loadProgress() {
  try {
    const raw = window.localStorage.getItem(storageKey);
    if (!raw) {
      return cloneProgressTemplate();
    }

    const parsed = JSON.parse(raw);
    return {
      ...cloneProgressTemplate(),
      ...parsed,
      literature: {
        ...cloneProgressTemplate().literature,
        ...(parsed.literature || {})
      },
      geography: {
        ...cloneProgressTemplate().geography,
        ...(parsed.geography || {})
      },
      achievements: Array.isArray(parsed.achievements) ? parsed.achievements : []
    };
  } catch (error) {
    return cloneProgressTemplate();
  }
}

function saveProgress() {
  window.localStorage.setItem(storageKey, JSON.stringify(state.progress));
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}
