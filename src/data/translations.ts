/**
 * RU → UZ (lotin) dictionary. Keys are the literal Russian strings used
 * across the site, so any component can translate by calling
 * `t("Точный русский текст")` without needing symbolic keys.
 */
export const translations: Record<string, string> = {
  // Header / nav
  "Каталог": "Katalog",
  "Аксессуары": "Aksessuarlar",
  "Рассрочка": "Muddatli to'lov",
  "Поиск": "Qidiruv",
  "Избранное": "Sevimlilar",
  "Корзина": "Savat",
  "Меню": "Menyu",
  "Закрыть меню": "Menyuni yopish",
  "Контакты": "Kontaktlar",

  // Footer
  "Навигация": "Navigatsiya",
  "Информация": "Ma'lumot",
  "улица Амира Темура, Наманган": "Amir Temur ko'chasi, Namangan",
  "Цены и наличие носят демонстрационный характер":
    "Narxlar va mavjudlik namunaviy xususiyatga ega",

  // Hero
  "Техника, которую хочется держать в руках.":
    "Qo'lda ushlab turgingiz keladigan texnika.",
  "iPhone, Samsung и аксессуары. Наличными или в удобную рассрочку.":
    "iPhone, Samsung va aksessuarlar. Naqd yoki qulay muddatli to'lovda.",
  "Смотреть каталог": "Katalogni ko'rish",
  "Смотреть весь каталог": "Butun katalogni ko'rish",

  // Category cards
  "Что вы ищете?": "Nimani izlayapsiz?",
  "Актуальные модели и удобная рассрочка": "Dolzarb modellar va qulay muddatli to'lov",
  "Флагманы линейки Galaxy": "Galaxy seriyasining flagmanlari",
  "Watch, AirPods и iPad": "Watch, AirPods va iPad",
  "Зарядки, чехлы и кабели": "Zaryadlovchilar, chexollar va kabellar",

  // Popular products
  "Витрина": "Vitrina",
  "Популярное сейчас": "Hozir mashhur",
  "Выбор наших покупателей": "Xaridorlarimiz tanlovi",
  "Весь каталог": "Butun katalog",

  // Product card
  "Убрать из избранного": "Sevimlilardan olib tashlash",
  "Добавить в избранное": "Sevimlilarga qo'shish",
  "от": "dan",
  "сум": "so'm",
  "мес": "oy",
  "Новинка": "Yangilik",
  "Популярное": "Ommabop",
  "Хит продаж": "Sotuv hiti",

  // Installment teaser (home)
  "Ваш новый iPhone — не обязательно сразу.": "Yangi iPhone — darhol emas ham mumkin.",
  "40% или 30% первоначальный взнос — без банка, по паспорту.":
    "40% yoki 30% boshlang'ich to'lov — bankisiz, faqat pasport bilan.",
  "Узнать условия": "Shartlarni bilish",
  "40% взнос · до 12 мес": "40% to'lov · 12 oygacha",
  "30% взнос · до 12 мес": "30% to'lov · 12 oygacha",
  "Только паспорт": "Faqat pasport",

  // Trust section
  "Почему мы": "Nega biz",
  "Почему iBrox?": "Nega iBrox?",
  "Оригинальная техника": "Original texnika",
  "Проверенные устройства и аксессуары.": "Tekshirilgan qurilmalar va aksessuarlar.",
  "Удобный способ покупки.": "Xarid qilishning qulay usuli.",
  "Поддержка": "Qo'llab-quvvatlash",
  "Помощь с выбором устройства.": "Qurilmani tanlashda yordam.",
  "Большая аудитория в Instagram.": "Instagramda katta auditoriya.",

  // Instagram section
  "Более 100 000 человек уже с нами": "100 000 dan ortiq odam allaqachon biz bilan",
  "Следите за новинками, акциями и новыми поступлениями в Instagram.":
    "Yangiliklar, aksiyalar va yangi mahsulotlarni Instagramda kuzatib boring.",
  "Перейти в Instagram": "Instagramga o'tish",
  "Открыть в Instagram": "Instagramda ochish",

  // Search overlay
  "Что ищете?": "Nimani izlayapsiz?",
  "Закрыть поиск": "Qidiruvni yopish",
  "Популярные запросы": "Mashhur so'rovlar",
  "Ничего не найдено по запросу": "So'rov bo'yicha hech narsa topilmadi",

  // Cart drawer
  "Закрыть корзину": "Savatni yopish",
  "Корзина пока пуста": "Savat hozircha bo'sh",
  "Продолжить выбор": "Tanlashni davom ettirish",
  "Уменьшить количество": "Miqdorni kamaytirish",
  "Увеличить количество": "Miqdorni oshirish",
  "Удалить товар": "Mahsulotni o'chirish",
  "Промежуточный итог": "Oraliq summa",
  "Оформить заявку": "Buyurtma berish",

  // Catalog: sort & filters
  "Популярные": "Ommabop",
  "Сначала дешевле": "Avval arzoni",
  "Сначала дороже": "Avval qimmati",
  "По рейтингу": "Reyting bo'yicha",
  "До 5 000 000 сум": "5 000 000 so'mgacha",
  "До 10 000 000 сум": "10 000 000 so'mgacha",
  "До 20 000 000 сум": "20 000 000 so'mgacha",
  "Сортировка": "Saralash",
  "Категория": "Toifa",
  "Бренд": "Brend",
  "Цена": "Narx",
  "Память": "Xotira",
  "Цвет": "Rang",
  "Сбросить фильтры": "Filtrlarni tozalash",
  "Фильтры": "Filtrlar",
  "Закрыть фильтры": "Filtrlarni yopish",
  "Показать": "Ko'rsatish",
  "Поиск по каталогу": "Katalog bo'yicha qidiruv",
  "Найдено": "Topildi",
  "По вашему запросу ничего не найдено": "So'rovingiz bo'yicha hech narsa topilmadi",
  "Похожие товары": "O'xshash mahsulotlar",
  "Изображение": "Rasm",

  // Product info
  "отзывов": "sharh",
  "В наличии": "Sotuvda mavjud",
  "Нет в наличии": "Sotuvda yo'q",
  "или от": "yoki",
  "в рассрочку на": "muddatli to'lovda",
  "Добавлено ✓": "Qo'shildi ✓",
  "Оставить заявку": "Ariza qoldirish",
  "Купить в рассрочку": "Muddatli to'lovda sotib olish",
  "Доставка по Намангану и области": "Namangan shahri va viloyati bo'ylab yetkazib berish",
  "уточнить условия": "shartlarni aniqlashtirish",

  // Product detail sections
  "Описание": "Tavsif",
  "Характеристики": "Xususiyatlar",
  "Комплектация": "Jihozlanishi",
  "Доставка": "Yetkazib berish",
  "Гарантия": "Kafolat",
  "Устройство, документы. Точный состав комплекта уточняйте у менеджера.":
    "Qurilma, hujjatlar. Aniq komplekt tarkibini menejerdan so'rang.",
  "Доставка по Намангану и области. Условия и сроки уточняются при заявке.":
    "Namangan shahri va viloyati bo'ylab yetkazib berish. Shartlari va muddati ariza berishda aniqlashtiriladi.",
  "Условия гарантии уточняйте у менеджера при оформлении покупки.":
    "Kafolat shartlarini xarid rasmiylashtirishda menejerdan so'rang.",

  // Product names (only ones that were in Russian)
  "Силиконовый чехол": "Silikon chexol",

  // Product descriptions
  "Флагманский iPhone с титановым корпусом, продвинутой камерой и чипом нового поколения. Демо-описание для витрины товара.":
    "Titan korpusli, ilg'or kamerali va yangi avlod chipli flagman iPhone. Vitrina uchun namunaviy tavsif.",
  "Сбалансированный флагман: производительный чип, современная камера и яркий дисплей. Демо-описание для витрины товара.":
    "Muvozanatli flagman: unumdor chip, zamonaviy kamera va yorqin displey. Vitrina uchun namunaviy tavsif.",
  "Прошлый флагман по более доступной цене, без компромиссов в качестве. Демо-описание для витрины товара.":
    "O'tgan flagman, sifatda kelishmasdan, arzonroq narxda. Vitrina uchun namunaviy tavsif.",
  "Топовый Galaxy с S Pen, продвинутой камерой и большим ярким экраном. Демо-описание для витрины товара.":
    "S Pen, ilg'or kamera va katta yorqin ekranli top Galaxy. Vitrina uchun namunaviy tavsif.",
  "Компактный флагман Galaxy с производительной начинкой на каждый день. Демо-описание для витрины товара.":
    "Har kunlik foydalanish uchun unumdor kompakt Galaxy flagmani. Vitrina uchun namunaviy tavsif.",
  "Активное шумоподавление и адаптивный звук в компактном кейсе. Демо-описание для витрины товара.":
    "Kompakt keysda faol shovqinni bostirish va moslashuvchan tovush. Vitrina uchun namunaviy tavsif.",
  "Умные часы для тренировок, здоровья и уведомлений на запястье. Демо-описание для витрины товара.":
    "Mashg'ulotlar, sog'liq va bildirishnomalar uchun bilakdagi aqlli soat. Vitrina uchun namunaviy tavsif.",
  "Лёгкий и производительный планшет для учёбы, работы и творчества. Демо-описание для витрины товара.":
    "O'qish, ish va ijod uchun yengil va unumdor planshet. Vitrina uchun namunaviy tavsif.",
  "Беспроводная зарядка с магнитным выравниванием. Демо-описание для витрины товара.":
    "Magnitli tekislanish bilan simsiz zaryadlovchi. Vitrina uchun namunaviy tavsif.",
  "Мягкий чехол с микрофиброй внутри, точная посадка под камеру. Демо-описание для витрины товара.":
    "Ichi mikrofibrali yumshoq chexol, kamera uchun aniq o'lcham. Vitrina uchun namunaviy tavsif.",

  // Specification labels
  "Дисплей": "Displey",
  "Чип": "Chip",
  "Камера": "Kamera",
  "Материал корпуса": "Korpus materiali",
  "Аккумулятор": "Batareya",
  "Процессор": "Protsessor",
  "Комплект": "Komplekt",
  "Защита": "Himoya",
  "Шумоподавление": "Shovqinni bostirish",
  "Автономность": "Avtonomlik",
  "Кейс": "Keys",
  "Экран": "Ekran",
  "Датчики": "Datchiklar",
  "Стилус": "Stilus",
  "Мощность": "Quvvat",
  "Разъём": "Port",
  "Материал": "Material",
  "Подкладка": "Ichki qoplama",

  // Specification values
  "48 МП, тройная": "48 MP, uchtalik",
  "48 МП, двойная": "48 MP, ikkitalik",
  "Титан": "Titan",
  "Алюминий": "Alyuminiy",
  "До 29 часов видео": "29 soatgacha video",
  "До 26 часов видео": "26 soatgacha video",
  "Snapdragon для Galaxy": "Galaxy uchun Snapdragon",
  "200 МП, квадро": "200 MP, to'rttalik",
  "S Pen в комплекте": "S Pen komplektda",
  "50 МП, тройная": "50 MP, uchtalik",
  "Активное": "Faol",
  "До 6 часов": "6 soatgacha",
  "Пульс, кислород, ЭКГ": "Puls, kislorod, EKG",
  "До 18 часов": "18 soatgacha",
  "До 15 Вт": "15 Vtgacha",
  "Силикон": "Silikon",
  "Микрофибра": "Mikrofibra",

  // Installment plans / example
  "Меньше переплата": "Kamroq ustama",
  "Меньше взнос сразу": "Kamroq boshlang'ich to'lov",
  "Первоначальный взнос": "Boshlang'ich to'lov",
  "Рассрочка на": "Muddatli to'lov",
  "мес.": "oy",
  "Пример расчёта": "Hisoblash namunasi",
  "Наличными": "Naqd pulda",
  "Ниже — во сколько обойдётся покупка в рассрочку.":
    "Quyida — muddatli to'lovda xarid qancha turadi.",
  "Взнос": "To'lov",
  "Суммы приведены для примера на конкретное устройство и его цену. Взнос и платёж по вашему устройству рассчитает менеджер.":
    "Summalar muayyan qurilma va uning narxi uchun namuna sifatida keltirilgan. Sizning qurilmangiz uchun to'lovni menejer hisoblab beradi.",

  // Installment page
  "40% или 30%": "40% yoki 30%",
  "первоначальный взнос": "boshlang'ich to'lov",
  "До 12 месяцев": "12 oygacha",
  "гибкий срок оплаты": "moslashuvchan to'lov muddati",
  "без банка и справок": "bankisiz va spravkasiz",
  "Техника сегодня. Оплата — удобно.": "Texnika bugun. To'lov — qulay.",
  "40% или 30% первоначальный взнос, срок до 12 месяцев. Оформление по паспорту, без банка.":
    "40% yoki 30% boshlang'ich to'lov, muddat 12 oygacha. Faqat pasport bilan, bankisiz.",
  "Выберите устройство": "Qurilmani tanlang",
  "Определитесь с моделью, цветом и памятью в каталоге.":
    "Katalogda model, rang va xotirani tanlang.",
  "Выберите взнос и срок": "To'lov va muddatni tanlang",
  "40% или 30% первоначальный взнос и подходящий срок рассрочки.":
    "40% yoki 30% boshlang'ich to'lov va mos muddatli to'lov muddati.",
  "Оформите по паспорту": "Pasport bilan rasmiylashtiring",
  "Понадобится только паспорт — без банка и справок о доходах.":
    "Faqat pasport kerak bo'ladi — bank va daromad haqida spravkasiz.",
  "Заберите покупку": "Xaridni olib keting",
  "Оформите покупку и заберите устройство в магазине.":
    "Xaridni rasmiylashtiring va qurilmani do'kondan olib keting.",
  "Условия": "Shartlar",
  "Варианты рассрочки": "Muddatli to'lov variantlari",
  "Выбираете размер первоначального взноса — от него зависят доступные сроки.":
    "Boshlang'ich to'lov miqdorini tanlaysiz — mavjud muddatlar shunga bog'liq.",
  "Расчёт": "Hisob-kitob",
  "Как это выглядит на практике": "Amalda qanday ko'rinadi",
  "Как это работает": "Bu qanday ishlaydi",
  "Процесс покупки": "Xarid jarayoni",
  "Остались вопросы по условиям?": "Shartlar bo'yicha savollaringiz bormi?",
  "Точная сумма взноса и платежа зависит от устройства — наши менеджеры подберут подходящий вариант.":
    "To'lov va boshlang'ich to'lov aniq miqdori qurilmaga bog'liq — menejerlarimiz mos variantni tanlab beradi.",
  "Связаться с нами": "Biz bilan bog'laning",

  // About page
  "О магазине": "Do'kon haqida",
  "Мы занимаемся продажей iPhone, Samsung и аксессуаров — как за наличный расчёт, так и в удобную рассрочку. За время работы в Instagram нас выбрали более 100 000 подписчиков.":
    "Biz iPhone, Samsung va aksessuarlarni sotamiz — naqd pulda ham, qulay muddatli to'lovda ham. Instagramda ishlash davomida bizni 100 000 dan ortiq obunachi tanladi.",

  // Contacts page
  "Свяжитесь с нами": "Biz bilan bog'laning",
  "Оставьте заявку, и наш менеджер поможет с выбором устройства и способа оплаты.":
    "Ariza qoldiring — menejerimiz qurilma va to'lov usulini tanlashda yordam beradi.",

  // Contact form
  "Заявка отправлена": "Ariza yuborildi",
  "Мы свяжемся с вами в ближайшее время.": "Tez orada siz bilan bog'lanamiz.",
  "Имя": "Ism",
  "Ваше имя": "Ismingiz",
  "Телефон": "Telefon",
  "Сообщение": "Xabar",
  "Какое устройство вас интересует?": "Qaysi qurilma sizni qiziqtiradi?",
  "Отправить заявку": "Arizani yuborish",

  // Favorites page
  "В избранном пока ничего нет": "Sevimlilarda hozircha hech narsa yo'q",
  "Перейти в каталог": "Katalogga o'tish",
  "Выбор языка": "Tilni tanlash",
};
