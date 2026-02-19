// Mock data for Світ Космосу website

export const articles = [
  {
    id: 1,
    title: "Рідкісний парад планет 28 лютого: як побачити шість небесних тіл неозброєним оком",
    excerpt: "Наприкінці лютого мешканці Землі побачать унікальний парад планет: Меркурій, Венера, Юпітер і Сатурн збіжаться на вечірньому небі. Розповідаємо, де, коли і як спостерігати це захоплююче космічне шоу.",
    image: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4",
    date: "17 лютого 2026",
    category: "Астрономія"
  },
  {
    id: 2,
    title: "Під поверхнею Венери виявлено гігантський лавовий тунель шириною кілометр",
    excerpt: "Вчені з Університету Тренто виявили під поверхнею Венери гігантський лавовий тунель шириною близько кілометра. Відкриття зроблено на основі архівних даних зонда NASA «Магеллан».",
    image: "https://images.pexels.com/photos/29214035/pexels-photo-29214035.jpeg",
    date: "16 лютого 2026",
    category: "Дослідження"
  },
  {
    id: 3,
    title: "Антарктида побачить рідкісне «вогняне кільце»: перше сонячне затемнення 2026 року",
    excerpt: "17 лютого 2026 року над Антарктидою пройде рідкісне кільцеподібне сонячне затемнення — «вогняне кільце». Пік настане о 12:11 UTC. Розповідаємо, хто побачить затемнення і як спостерігати безпечно.",
    image: "https://images.pexels.com/photos/1341279/pexels-photo-1341279.jpeg",
    date: "17 лютого 2026",
    category: "Події"
  },
  {
    id: 4,
    title: "Електромагнітна павутина навколо Енцелада: відкриття вчених про маленький супутник Сатурна",
    excerpt: "Вчені виявили гігантську електромагнітну павутину навколо крихітного супутника Сатурна — Енцелада. Вона простягається на 504 000 км. Читайте про сенсаційне відкриття зонда «Кассіні».",
    image: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5",
    date: "14 лютого 2026",
    category: "Дослідження"
  },
  {
    id: 5,
    title: "Втрата атмосфери екзопланет і доля світів у зоні, що піддається впливу зірок",
    excerpt: "Дізнайтеся, чому екзопланети втрачають атмосфери і чи може це вплинути на нас. Простими словами про складні процеси: зоряне випромінювання, магнітні поля й уроки для Землі.",
    image: "https://images.unsplash.com/photo-1462332420958-a05d1e002413",
    date: "12 лютого 2026",
    category: "Наука"
  },
  {
    id: 6,
    title: "Місяць виявився геологічно активним: нові докази й загроза для астронавтів",
    excerpt: "Міжнародна група вчених склала першу глобальну карту малих місячних морів, доказав, що супутник Землі геологічно активний. Нові дані про лунотрясіння змінюють плани по виборах місць для майбутніх місій.",
    image: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86",
    date: "10 лютого 2026",
    category: "Місяць"
  }
];

export const moonPhases = [
  { date: "19 лютого", phase: "Повний місяць", icon: "moon" },
  { date: "27 лютого", phase: "Остання чверть", icon: "moon" },
  { date: "5 березня", phase: "Новий місяць", icon: "moon" },
  { date: "13 березня", phase: "Перша чверть", icon: "moon" }
];

export const zodiacSigns = [
  { name: "Овен", icon: "Aries", link: "/horoscope/aries" },
  { name: "Телець", icon: "Taurus", link: "/horoscope/taurus" },
  { name: "Близнюки", icon: "Gemini", link: "/horoscope/gemini" },
  { name: "Рак", icon: "Cancer", link: "/horoscope/cancer" },
  { name: "Лев", icon: "Leo", link: "/horoscope/leo" },
  { name: "Діва", icon: "Virgo", link: "/horoscope/virgo" },
  { name: "Терези", icon: "Libra", link: "/horoscope/libra" },
  { name: "Скорпіон", icon: "Scorpio", link: "/horoscope/scorpio" },
  { name: "Стрілець", icon: "Sagittarius", link: "/horoscope/sagittarius" },
  { name: "Козеріг", icon: "Capricorn", link: "/horoscope/capricorn" },
  { name: "Водолій", icon: "Aquarius", link: "/horoscope/aquarius" },
  { name: "Риби", icon: "Pisces", link: "/horoscope/pisces" }
];

export const sidebarLinks = [
  {
    title: "Місячний календар",
    items: [
      { text: "Фаза Місяця сьогодні", link: "/lunar/today" },
      { text: "Місячний день сьогодні", link: "/lunar/day" },
      { text: "Місячний календар на 2026 рік", link: "/lunar/2026" },
      { text: "Календар стрижок на 2026", link: "/lunar/haircut" },
      { text: "Календар городника на 2026", link: "/lunar/garden" }
    ]
  },
  {
    title: "Сонник",
    items: [
      { text: "Пошук по соннику", link: "/dreams/search" },
      { text: "Календар снів", link: "/dreams/calendar" },
      { text: "Сни сьогодні", link: "/dreams/today" }
    ]
  },
  {
    title: "Магнітні бурі",
    items: [
      { text: "Магнітні бурі сьогодні", link: "/magnetic/today" },
      { text: "Магнітні бурі завтра", link: "/magnetic/tomorrow" },
      { text: "Прогноз на лютий 2026", link: "/magnetic/february" }
    ]
  },
  {
    title: "Свята",
    items: [
      { text: "Яке сьогодні свято?", link: "/holidays/today" },
      { text: "Свята лютого 2026", link: "/holidays/february" },
      { text: "Свята 2026 року", link: "/holidays/2026" }
    ]
  }
];

export const heroContent = {
  title: "Світ Космосу",
  subtitle: "Космос навколо нас",
  description: "Дізнавайтесь про найновіші відкриття у космосі, місячні календарі, гороскопи та астрономічні події"
};