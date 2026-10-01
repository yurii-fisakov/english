export type SphereId = "personal" | "public" | "education";

export type Topic = {
  id: string;
  sphere: SphereId;
  index: number;
  titleUk: string;
  titleEn: string;
  answerEn: string;
  answerUk: string;
};

export type Sphere = {
  id: SphereId;
  numeral: string;
  titleUk: string;
  titleEn: string;
  description: string;
};

export const spheres: Sphere[] = [
  {
    id: "personal",
    numeral: "I",
    titleUk: "Особистісна сфера",
    titleEn: "Personal sphere",
    description:
      "Daily life, family, character, home, health, friends, and plans.",
  },
  {
    id: "public",
    numeral: "II",
    titleUk: "Публічна сфера",
    titleEn: "Public sphere",
    description:
      "Nature, travel, culture, media, rights, and Ukraine beside the country of the language you study.",
  },
  {
    id: "education",
    numeral: "III",
    titleUk: "Освітня сфера",
    titleEn: "Educational sphere",
    description: "School, upbringing, and student life.",
  },
];

export const topics: Topic[] = [
  {
    id: "personal-1",
    sphere: "personal",
    index: 1,
    titleUk: "Повсякденне життя і його проблеми.",
    titleEn: "Everyday life and its problems.",
    answerEn:
      "My everyday life is school, homework, and helping at home. The main problem is that the day fills up before I find time for myself.",
    answerUk:
      "Моє повсякденне життя складається з навчання, домашніх завдань і допомоги вдома. Найважче знайти час для себе, коли день і так уже заповнений.",
  },
  {
    id: "personal-2",
    sphere: "personal",
    index: 2,
    titleUk: "Сім’я. Родинні стосунки.",
    titleEn: "Family. Family relations.",
    answerEn:
      "I live with my parents and my younger brother, and we try to have dinner together. We do not always agree, but we talk it through and support one another.",
    answerUk:
      "Удома я з батьками та молодшим братом, і ми намагаємося щовечора вечеряти разом. Ми не завжди однієї думки, але говоримо про це й підтримуємо одне одного.",
  },
  {
    id: "personal-3",
    sphere: "personal",
    index: 3,
    titleUk: "Характер людини.",
    titleEn: "A person’s character.",
    answerEn:
      "I am a calm and patient person, though I become stubborn when something really matters to me. Friends say I listen well, and I am learning to speak up for my own view.",
    answerUk:
      "За вдачею я людина спокійна й терпляча, хоча впертість бере гору, коли справа справді важлива. Друзі кажуть, що я вмію слухати, і водночас я вчуся відстоювати власну думку.",
  },
  {
    id: "personal-4",
    sphere: "personal",
    index: 4,
    titleUk: "Помешкання.",
    titleEn: "Housing.",
    answerEn:
      "We live in a flat on the fourth floor, with a small kitchen, two bedrooms, and a balcony. I like my own room best, because it is quiet enough for reading and homework.",
    answerUk:
      "Ми живемо у квартирі на четвертому поверсі: невелика кухня, дві спальні й балкон. Найбільше до душі власна кімната, бо там досить тихо для читання й уроків.",
  },
  {
    id: "personal-5",
    sphere: "personal",
    index: 5,
    titleUk: "Режим дня.",
    titleEn: "Daily routine.",
    answerEn:
      "I get up at seven, have breakfast, and leave for school by eight. After lessons I do homework, take a short walk, and try to be in bed before eleven.",
    answerUk:
      "Ранок починається о сьомій: сніданок, і до восьмої вже треба виходити до школи. Після уроків є домашнє завдання, коротка прогулянка, а лягати варто до одинадцятої.",
  },
  {
    id: "personal-6",
    sphere: "personal",
    index: 6,
    titleUk: "Здоровий спосіб життя.",
    titleEn: "A healthy way of life.",
    answerEn:
      "I try to eat at regular times, drink enough water, and walk every day. Sleep matters just as much, because a late night makes the next day harder.",
    answerUk:
      "Здоровий день для мене складається з вчасної їжі, води і хоча б прогулянки. Сон важить не менше, бо пізній відбій робить наступний день важчим.",
  },
  {
    id: "personal-7",
    sphere: "personal",
    index: 7,
    titleUk: "Дружба, любов.",
    titleEn: "Friendship, love.",
    answerEn:
      "A real friend tells you the truth and stays near you in a hard week, not only on good days. For me, love begins with respect and with the wish to understand the other person.",
    answerUk:
      "Справжній друг говорить чесно і лишається поруч у важкий тиждень, а не лише в радісні дні. Любов для мене починається з поваги і з бажання зрозуміти іншу людину.",
  },
  {
    id: "personal-8",
    sphere: "personal",
    index: 8,
    titleUk: "Стосунки з однолітками, у колективі.",
    titleEn: "Relations with peers, in a group.",
    answerEn:
      "In class we often work in groups, so I have to listen and share the task fairly. Conflicts happen, and it is better to name the problem calmly than to stay silent.",
    answerUk:
      "У класі ми часто працюємо в групах, тож доводиться слухати і ділити роботу порівну. Конфлікти трапляються, і краще спокійно назвати те, що непокоїть, ніж мовчати.",
  },
  {
    id: "personal-9",
    sphere: "personal",
    index: 9,
    titleUk: "Світ захоплень.",
    titleEn: "The world of hobbies.",
    answerEn:
      "My main hobby is photography: streets, trees, and ordinary people. It teaches me to look more carefully at things I would otherwise walk past.",
    answerUk:
      "Головне захоплення: фотографія вулиць, дерев і звичайних людей. Таке хобі вчить дивитися уважніше на те, повз що легко пройти.",
  },
  {
    id: "personal-10",
    sphere: "personal",
    index: 10,
    titleUk: "Дозвілля, відпочинок.",
    titleEn: "Leisure, rest.",
    answerEn:
      "At the weekend I meet friends, read, or go to the park to step away from school. A good rest, for me, is not empty time but something I chose myself.",
    answerUk:
      "На вихідних я зустрічаюся з друзями, читаю або йду в парк, щоб відійти від шкільних справ. Добрий відпочинок для мене полягає не в байдикуванні, а в справі, яку обираю самостійно.",
  },
  {
    id: "personal-11",
    sphere: "personal",
    index: 11,
    titleUk: "Особистісні пріоритети.",
    titleEn: "Personal priorities.",
    answerEn:
      "Right now my priorities are studying, my family, and my health. I also need time for hobbies, because a life made only of duties feels too narrow.",
    answerUk:
      "Зараз на першому місці навчання, родина і здоров’я. Час на захоплення теж потрібен, бо життя з самих обов’язків стає надто вузьким.",
  },
  {
    id: "personal-12",
    sphere: "personal",
    index: 12,
    titleUk: "Плани на майбутнє, вибір професії.",
    titleEn: "Plans for the future, choice of profession.",
    answerEn:
      "I would like to work with languages, either as a teacher or as a translator. The choice can still change, so I am trying different subjects before I decide.",
    answerUk:
      "Хочеться працювати з мовами: учителювати або перекладати. Вибір ще може змінитися, тож поки я пробую різні предмети.",
  },
  {
    id: "public-1",
    sphere: "public",
    index: 1,
    titleUk: "Погода. Природа. Навколишнє середовище.",
    titleEn: "Weather. Nature. The environment.",
    answerEn:
      "Today the weather is mild, though autumn in our city is often rainy and windy. I care about nature, because clean air, trees, and rivers make ordinary life healthier.",
    answerUk:
      "Сьогодні погода м’яка, хоча восени в нашому місті часто дощить і віє вітер. Природа мені не байдужа, бо чисте повітря, дерева й річки роблять повсякденне життя здоровішим.",
  },
  {
    id: "public-2",
    sphere: "public",
    index: 2,
    titleUk: "Життя в країні, мову якої вивчають.",
    titleEn: "Life in the country whose language you are learning.",
    answerEn:
      "In the United Kingdom people usually greet one another politely, queue, and value being on time. Daily life there turns around school or work, public transport, and plans for the weekend.",
    answerUk:
      "У Великій Британії люди зазвичай вітаються ввічливо, стоять у черзі й цінують пунктуальність. Повсякденне життя там тримається на навчанні чи роботі, громадському транспорті й звичці планувати вихідні.",
  },
  {
    id: "public-3",
    sphere: "public",
    index: 3,
    titleUk: "Подорожі, екскурсії.",
    titleEn: "Travel, excursions.",
    answerEn:
      "I like travelling because a new city shows how other people live, eat, and spend their time. Even a short school excursion can teach more than a page in a textbook.",
    answerUk:
      "Мені подобається подорожувати, бо нове місто показує, як інші люди живуть, їдять і проводять час. Навіть коротка шкільна екскурсія може дати більше, ніж сторінка в підручнику.",
  },
  {
    id: "public-4",
    sphere: "public",
    index: 4,
    titleUk:
      "Культура й мистецтво в Україні та в країні, мову якої вивчають.",
    titleEn:
      "Culture and art in Ukraine and in the country whose language you are learning.",
    answerEn:
      "Ukrainian culture is rich in song, embroidery, and literature, while British culture is widely known for theatre, museums, and music. In both countries, art keeps the memory of a nation alive.",
    answerUk:
      "Українська культура багата на пісню, вишивку й літературу, а британська відома театром, музеями та музикою. В обох країнах мистецтво зберігає пам’ять народу.",
  },
  {
    id: "public-5",
    sphere: "public",
    index: 5,
    titleUk: "Спорт в Україні та в країні, мову якої вивчають.",
    titleEn:
      "Sport in Ukraine and in the country whose language you are learning.",
    answerEn:
      "Football is popular in both Ukraine and Britain, and many young people also run, swim, or train in a gym. Sport is not only about winning: it builds discipline and gives you a team.",
    answerUk:
      "Футбол популярний і в Україні, і в Британії, а багато молоді ще бігає, плаває або тренується в залі. Спорт виховує дисципліну й відчуття команди, навіть коли перемоги немає.",
  },
  {
    id: "public-6",
    sphere: "public",
    index: 6,
    titleUk: "Література в Україні та в країні, мову якої вивчають.",
    titleEn:
      "Literature in Ukraine and in the country whose language you are learning.",
    answerEn:
      "At school we read Taras Shevchenko and Lesia Ukrainka, and in English we meet Shakespeare and modern British writers. A good book lets you enter another time and another way of thinking.",
    answerUk:
      "У школі ми читаємо Тараса Шевченка і Лесю Українку, а англійською знайомимося з Шекспіром і сучасними британськими письменниками. Добра книжка дає змогу увійти в інший час і в інший спосіб мислення.",
  },
  {
    id: "public-7",
    sphere: "public",
    index: 7,
    titleUk: "Засоби масової інформації.",
    titleEn: "The mass media.",
    answerEn:
      "I follow the news on my phone, but I check more than one source before I believe a story. Television, newspapers, and social media shape opinions, so it matters who is speaking and why.",
    answerUk:
      "Новини я читаю в телефоні, але намагаюся перевірити кілька джерел, перш ніж повірити історії. Телебачення, газети й соціальні мережі формують думку, тож важливо, хто говорить і навіщо.",
  },
  {
    id: "public-8",
    sphere: "public",
    index: 8,
    titleUk: "Молодь і сучасний світ.",
    titleEn: "Young people and the modern world.",
    answerEn:
      "Young people today grow up with the internet, fast news, and a wide choice of study and work. The hard part is keeping real friendship and your own opinion in all that noise.",
    answerUk:
      "Сучасна молодь зростає з інтернетом, швидкими новинами і великим вибором навчання та роботи. Важко не загубити серед цього шуму справжню дружбу і власну думку.",
  },
  {
    id: "public-9",
    sphere: "public",
    index: 9,
    titleUk: "Людина і довкілля.",
    titleEn: "People and the environment.",
    answerEn:
      "People change the environment every day by how they travel, shop, and throw things away. I try to save electricity, sort rubbish, and remember that clean water does not last forever.",
    answerUk:
      "Людина щодня змінює довкілля тим, як їздить, купує і викидає речі. Я намагаюся економити електроенергію, сортувати сміття і пам’ятати, що запас чистої води не безмежний.",
  },
  {
    id: "public-10",
    sphere: "public",
    index: 10,
    titleUk: "Одяг.",
    titleEn: "Clothes.",
    answerEn:
      "For school I choose simple, comfortable clothes, and something a little smarter for a concert or a family visit. Clothes say something about you, but they should never matter more than the person.",
    answerUk:
      "Для школи я обираю простий зручний одяг, а на концерт чи в гості беру трохи ошатніший. Одяг щось про людину говорить, але ніколи не має важити більше, ніж вона сама.",
  },
  {
    id: "public-11",
    sphere: "public",
    index: 11,
    titleUk: "Покупки.",
    titleEn: "Shopping.",
    answerEn:
      "I usually buy food at the local market, and clothes only when I truly need them. Before I pay, I look at the price and ask whether I will still want the thing next week.",
    answerUk:
      "Продукти я зазвичай купую на місцевому ринку, а одяг лише тоді, коли він справді потрібен. Перед оплатою дивлюся на ціну і питаю себе, чи захочу цю річ і наступного тижня.",
  },
  {
    id: "public-12",
    sphere: "public",
    index: 12,
    titleUk: "Харчування.",
    titleEn: "Food.",
    answerEn:
      "A normal day for me includes breakfast, a hot meal at lunch, and something light in the evening. I like Ukrainian home cooking, and I am learning to eat fewer sweets.",
    answerUk:
      "Звичайний день складається зі сніданку, гарячого обіду і чогось легкого ввечері. Мені смакує українська домашня кухня, і я потроху вчуся їсти менше солодкого.",
  },
  {
    id: "public-13",
    sphere: "public",
    index: 13,
    titleUk: "Науково-технічний прогрес, видатні діячі науки.",
    titleEn: "Scientific and technical progress, outstanding scientists.",
    answerEn:
      "Scientific progress has changed daily life through electricity, medicine, and the internet. One figure I remember is Serhii Koroliov, born in Zhytomyr, whose work helped open the way to spaceflight.",
    answerUk:
      "Науково-технічний прогрес змінив повсякденне життя електрикою, медициною та інтернетом. Серед видатних діячів пам’ятаю Сергія Корольова, уродженця Житомира, чия праця відкрила шлях до польотів у космос.",
  },
  {
    id: "public-14",
    sphere: "public",
    index: 14,
    titleUk: "Україна у світовій спільноті.",
    titleEn: "Ukraine in the world community.",
    answerEn:
      "Ukraine is a European country with its own language, culture, and a clear wish to take part in international life. Its voice matters in questions of security, culture, and the right of a nation to choose its future.",
    answerUk:
      "Україна є європейською державою зі своєю мовою, культурою і виразним бажанням брати участь у міжнародному житті. Її голос важливий у питаннях безпеки, культури і права народу самому обирати майбутнє.",
  },
  {
    id: "public-15",
    sphere: "public",
    index: 15,
    titleUk:
      "Свята, пам’ятні дати, події в Україні та в країні, мову якої вивчають.",
    titleEn:
      "Holidays, memorable dates, and events in Ukraine and in the country whose language you are learning.",
    answerEn:
      "In Ukraine we mark Independence Day and Christmas, and in Britain people celebrate Christmas, Easter, and the official birthday of the King. Holidays are a way to remember history and to spend time with family.",
    answerUk:
      "В Україні відзначають День Незалежності і Різдво, а в Британії Різдво, Великдень і офіційний день народження короля. Свята допомагають пам’ятати історію і бути разом із родиною.",
  },
  {
    id: "public-16",
    sphere: "public",
    index: 16,
    titleUk:
      "Традиції та звичаї в Україні та в країні, мову якої вивчають.",
    titleEn:
      "Traditions and customs in Ukraine and in the country whose language you are learning.",
    answerEn:
      "Ukrainian tradition lives in the vyshyvanka, in carols, and in welcoming a guest with bread. British customs such as tea at five or Bonfire Night look different, but they also bring people together.",
    answerUk:
      "Українська традиція живе у вишиванці, у колядках і в звичаї зустрічати гостя хлібом. Британські звичаї, як-от чай о п’ятій чи ніч Гая Фокса, виглядають інакше, але теж збирають людей разом.",
  },
  {
    id: "public-17",
    sphere: "public",
    index: 17,
    titleUk:
      "Видатні діячі історії та культури України та країни, мову якої вивчають.",
    titleEn:
      "Outstanding figures in the history and culture of Ukraine and of the country whose language you are learning.",
    answerEn:
      "Taras Shevchenko shaped the Ukrainian language and the idea of human dignity, and Lesia Ukrainka showed the strength of a free mind. In Britain, William Shakespeare is still the name most people connect with theatre and the English language.",
    answerUk:
      "Тарас Шевченко сформував українське слово і думку про людську гідність, а Леся Українка показала силу вільного розуму. У Британії Вільям Шекспір досі лишається іменем, з яким пов’язують театр і англійську мову.",
  },
  {
    id: "public-18",
    sphere: "public",
    index: 18,
    titleUk:
      "Визначні об’єкти історичної та культурної спадщини України та країни, мову якої вивчають.",
    titleEn:
      "Notable sites of the historical and cultural heritage of Ukraine and of the country whose language you are learning.",
    answerEn:
      "Saint Sophia Cathedral in Kyiv and the historic centre of Lviv belong to the cultural heritage of Ukraine and are listed by UNESCO. In Britain, Stonehenge and the Tower of London tell a much older story of the island.",
    answerUk:
      "Софійський собор у Києві та історичний центр Львова належать до культурної спадщини України і входять до списку ЮНЕСКО. У Британії Стоунхендж і Лондонський Тауер розповідають значно давнішу історію острова.",
  },
  {
    id: "public-19",
    sphere: "public",
    index: 19,
    titleUk: "Музеї, виставки.",
    titleEn: "Museums, exhibitions.",
    answerEn:
      "A museum lets you stand in front of a real object instead of only reading about it. I like exhibitions that explain the story behind a picture, a tool, or a document.",
    answerUk:
      "Музей дає змогу стати перед справжньою річчю, а не лише прочитати про неї. Мені подобаються виставки, які пояснюють історію за картиною, знаряддям чи документом.",
  },
  {
    id: "public-20",
    sphere: "public",
    index: 20,
    titleUk: "Живопис, музика.",
    titleEn: "Painting, music.",
    answerEn:
      "Painting and music speak without a long explanation: a colour or a melody can change your mood in a minute. I listen to Ukrainian songs and to British bands, depending on the day.",
    answerUk:
      "Живопис і музика говорять без довгих пояснень: колір або мелодія здатні за хвилину змінити настрій. Я слухаю і українські пісні, і британські гурти, залежно від дня.",
  },
  {
    id: "public-21",
    sphere: "public",
    index: 21,
    titleUk: "Кіно, телебачення, театр.",
    titleEn: "Cinema, television, theatre.",
    answerEn:
      "Cinema and television are easy to turn on at home, while theatre asks you to be present and watch the story happen live. I enjoy all three, but a good play stays in my memory longer than a series.",
    answerUk:
      "Кіно й телебачення легко ввімкнути вдома, а театр вимагає присутності, бо історія відбувається просто перед вами. Мені близькі всі три, але добра вистава лишається в пам’яті довше за серіал.",
  },
  {
    id: "public-22",
    sphere: "public",
    index: 22,
    titleUk: "Обов’язки та права людини.",
    titleEn: "Human duties and rights.",
    answerEn:
      "Every person has the right to life, education, and a free opinion, and also the duty to respect those same rights in other people. Freedom works when it does not harm another person’s dignity.",
    answerUk:
      "Кожна людина має право на життя, освіту і вільну думку, а також обов’язок поважати ті самі права в інших. Свобода працює тоді, коли не зачіпає гідності іншої людини.",
  },
  {
    id: "public-23",
    sphere: "public",
    index: 23,
    titleUk: "Міжнародні організації, міжнародний рух.",
    titleEn: "International organisations, the international movement.",
    answerEn:
      "The United Nations and the Red Cross exist so that countries can act together for peace, health, and help after a disaster. Many problems cross borders, so one state cannot solve them alone.",
    answerUk:
      "ООН і Червоний Хрест існують для того, щоб країни діяли разом заради миру, здоров’я і допомоги після лиха. Багато проблем перетинають кордони, тож одна держава не розв’яже їх сама.",
  },
  {
    id: "education-1",
    sphere: "education",
    index: 1,
    titleUk: "Освіта, навчання, виховання.",
    titleEn: "Education, learning, upbringing.",
    answerEn:
      "Education is more than marks: it is how we learn to think, to work with others, and to tell a fact from a guess. Upbringing at home and at school should teach respect, honesty, and responsibility.",
    answerUk:
      "Освіта є чимось більшим за оцінки: це вміння думати, працювати з іншими і відрізняти факт від здогаду. Виховання вдома і в школі має вчити поваги, чесності й відповідальності.",
  },
  {
    id: "education-2",
    sphere: "education",
    index: 2,
    titleUk: "Студентське життя.",
    titleEn: "Student life.",
    answerEn:
      "Student life means lectures, the library, new friends, and the first real chance to organise your own time. It is exciting and tiring at once, because nobody reminds you of every deadline.",
    answerUk:
      "Студентське життя складається з лекцій, бібліотеки, нових друзів і першої справжньої можливості самому розпоряджатися часом. Воно водночас цікаве й виснажливе, бо вже ніхто не нагадує про кожен термін здачі.",
  },
];
