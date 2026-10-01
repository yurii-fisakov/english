export type SphereId = "personal" | "public" | "education";

export type Topic = {
  id: string;
  sphere: SphereId;
  index: number;
  titleUk: string;
  titleEn: string;
  answerEn: string;
  answerPron: string;
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
      "My everyday life is breakfast for the children, school, and dinner with my husband. The hard part is that the day is full before I have a quiet hour for myself.",
    answerPron:
      "Май эвридэ́й лайф из брэ́кфэст фэ зэ чи́лдрэн, скул, энд ди́нэ уиз май ха́збэнд. Зэ хад пат из зэт зэ дэй из фул бифо́р ай хэв э куа́йэт а́уэ фэ майсе́лф.",
    answerUk:
      "Моє повсякденне життя складається зі сніданку для дітей, школи і вечері з чоловіком. Найважче знайти спокійну годину для себе, коли день і так уже заповнений.",
  },
  {
    id: "personal-2",
    sphere: "personal",
    index: 2,
    titleUk: "Сім’я. Родинні стосунки.",
    titleEn: "Family. Family relations.",
    answerEn:
      "I live with my husband and our two children, and we try to have dinner together. We do not always agree, but we talk it through and look after one another.",
    answerPron:
      "Ай лив уиз май ха́збэнд энд а́уэ ту чи́лдрэн, энд уи трай тэ хэв ди́нэ тэге́зэ. Уи ду нот о́луэйз эгри́, бат уи ток ит сру энд лук а́фтэ уан эна́зэ.",
    answerUk:
      "Удома я з чоловіком і двома дітьми, і ми намагаємося вечеряти разом. Ми не завжди однієї думки, але говоримо про це й дбаємо одне про одного.",
  },
  {
    id: "personal-3",
    sphere: "personal",
    index: 3,
    titleUk: "Характер людини.",
    titleEn: "A person’s character.",
    answerEn:
      "I am a calm and patient person, which helps with two children, though I become stubborn when something really matters to my family. My husband says I listen well, and I am learning to say what I need too.",
    answerPron:
      "Ай эм э кам энд пэ́йшнт пёсн, уич хэлпс уиз ту чи́лдрэн, зоу ай бика́м ста́бэн уэн са́мсин ри́эли мэ́тэз тэ май фэ́мили. Май ха́збэнд сэз ай ли́сн уэл, энд ай эм лёнин тэ сэй уот ай нид ту.",
    answerUk:
      "За вдачею я людина спокійна й терпляча, і це допомагає з двома дітьми, хоча впертість бере гору, коли справа справді важлива для родини. Чоловік каже, що я вмію слухати, і водночас я вчуся говорити про власні потреби.",
  },
  {
    id: "personal-4",
    sphere: "personal",
    index: 4,
    titleUk: "Помешкання.",
    titleEn: "Housing.",
    answerEn:
      "We live in a flat on the fourth floor, with a kitchen, our bedroom, a room for the two children, and a balcony. It is not large, but there is a place for homework, meals, and the evening together.",
    answerPron:
      "Уи лив ин э флэт он зэ фос фло, уиз э ки́чин, а́уэ бэ́друм, э рум фэ зэ ту чи́лдрэн, энд э бэ́лкэни. Ит из нот ладж, бат зэр из э плэйс фэ хо́умуэк, милз, энд зи и́внин тэге́зэ.",
    answerUk:
      "Ми живемо у квартирі на четвертому поверсі: кухня, наша спальня, кімната для двох дітей і балкон. Вона невелика, але є місце і для уроків, і для вечері, і для вечора разом.",
  },
  {
    id: "personal-5",
    sphere: "personal",
    index: 5,
    titleUk: "Режим дня.",
    titleEn: "Daily routine.",
    answerEn:
      "I get up at seven, make breakfast, and get the children ready for school while my husband leaves for work. After school there is homework and dinner, and I sit down only when both children are in bed.",
    answerPron:
      "Ай гет ап эт сэ́вн, мэйк брэ́кфэст, энд гет зэ чи́лдрэн рэ́ди фэ скул уайл май ха́збэнд ливз фэ уёк. А́фтэ скул зэр из хо́умуэк энд ди́нэ, энд ай сит даун о́унли уэн боус чи́лдрэн эр ин бэд.",
    answerUk:
      "Ранок починається о сьомій: сніданок, діти збираються до школи, а чоловік виходить на роботу. Після уроків є домашнє завдання і вечеря, і сісти вдається лише тоді, коли обидві дитини вже сплять.",
  },
  {
    id: "personal-6",
    sphere: "personal",
    index: 6,
    titleUk: "Здоровий спосіб життя.",
    titleEn: "A healthy way of life.",
    answerEn:
      "I try to cook regular meals for the family, drink enough water, and walk with the children every day. Sleep matters just as much, because a late night makes the next morning with them harder.",
    answerPron:
      "Ай трай тэ кук рэ́гьюлэ милз фэ зэ фэ́мили, дринк ина́ф уо́тэ, энд уок уиз зэ чи́лдрэн э́ври дэй. Слип мэ́тэз джаст эз мач, бико́з э лэйт найт мэйкс зэ нэкст мо́нин уиз зэм ха́дэ.",
    answerUk:
      "Здоровий день для мене складається з вчасної їжі для родини, води і хоча б прогулянки з дітьми. Сон важить не менше, бо пізній відбій робить наступний ранок з ними важчим.",
  },
  {
    id: "personal-7",
    sphere: "personal",
    index: 7,
    titleUk: "Дружба, любов.",
    titleEn: "Friendship, love.",
    answerEn:
      "My husband is the person I talk to at the end of a hard day, and a real friend stays near our family, not only on good days. For me, love is respect, patience, and the wish to understand each other while we raise two children.",
    answerPron:
      "Май ха́збэнд из зэ пёсн ай ток ту эт зи энд эв э хад дэй, энд э ри́эл фрэнд стэйз ни́эр а́уэ фэ́мили, нот о́унли он гуд дэйз. Фэ ми, лав из риспе́кт, пэ́йшнс, энд зэ уиш тэ андестэ́нд ич а́зэ уайл уи рэйз ту чи́лдрэн.",
    answerUk:
      "Чоловік є людиною, з якою я говорю наприкінці важкого дня, а справжній друг лишається поруч із нашою родиною, а не лише в радісні дні. Любов для мене складається з поваги, терпіння і бажання розуміти одне одного, поки ми ростимо двох дітей.",
  },
  {
    id: "personal-8",
    sphere: "personal",
    index: 8,
    titleUk: "Стосунки з однолітками, у колективі.",
    titleEn: "Relations with peers, in a group.",
    answerEn:
      "At the school gate and among other parents I have to listen and share the load fairly, just as the children do in class. Disagreements happen, and it is better to name the problem calmly than to stay silent.",
    answerPron:
      "Эт зэ скул гэйт энд эма́нг а́зэ пэ́эрэнтс ай хэв тэ ли́сн энд шэ́э зэ лоуд фэ́эли, джаст эз зэ чи́лдрэн ду ин клас. Дисэгри́мэнтс хэ́пэн, энд ит из бэ́тэ тэ нэйм зэ про́блэм ка́мли зэн тэ стэй са́йлэнт.",
    answerUk:
      "Біля школи і серед інших батьків доводиться слухати і ділити клопіт порівну, так само як діти роблять це в класі. Розбіжності трапляються, і краще спокійно назвати те, що непокоїть, ніж мовчати.",
  },
  {
    id: "personal-9",
    sphere: "personal",
    index: 9,
    titleUk: "Світ захоплень.",
    titleEn: "The world of hobbies.",
    answerEn:
      "My main hobby is reading after the children are asleep, and sometimes I take photos of our walks. It gives me a quiet hour that belongs to me, not only to the family timetable.",
    answerPron:
      "Май мэйн хо́би из ри́дин а́фтэ зэ чи́лдрэн эр эсли́п, энд са́мтаймз ай тэйк фо́утоуз эв а́уэ уокс. Ит гивз ми э куа́йэт а́уэ зэт било́нгз тэ ми, нот о́унли тэ зэ фэ́мили та́ймтэйбл.",
    answerUk:
      "Головне захоплення: читання, коли діти вже сплять, і часом фотографії наших прогулянок. Це дає спокійну годину, яка належить мені, а не лише розкладу родини.",
  },
  {
    id: "personal-10",
    sphere: "personal",
    index: 10,
    titleUk: "Дозвілля, відпочинок.",
    titleEn: "Leisure, rest.",
    answerEn:
      "At the weekend we go to the park with the children, or my husband and I take a short walk after they are in bed. A good rest, for me, is time I chose with my family, not an empty hour taken from them.",
    answerPron:
      "Эт зэ уи́кэнд уи гоу тэ зэ пак уиз зэ чи́лдрэн, ор май ха́збэнд энд ай тэйк э шот уок а́фтэ зэй эр ин бэд. Э гуд рэст, фэ ми, из тайм ай чоуз уиз май фэ́мили, нот эн э́мпти а́уэ тэ́йкэн фром зэм.",
    answerUk:
      "На вихідних ми йдемо в парк з дітьми, або з чоловіком виходимо на коротку прогулянку, коли вони вже сплять. Добрий відпочинок для мене полягає в часі, який я обираю разом із родиною, а не в порожній годині, відібраній у них.",
  },
  {
    id: "personal-11",
    sphere: "personal",
    index: 11,
    titleUk: "Особистісні пріоритети.",
    titleEn: "Personal priorities.",
    answerEn:
      "Right now my priorities are our two children, my husband, and my health. I also need a little time for myself, because a life made only of duties feels too narrow.",
    answerPron:
      "Райт нау май прайо́рэтиз ар а́уэ ту чи́лдрэн, май ха́збэнд, энд май хэлс. Ай о́лсоу нид э ли́тл тайм фэ майсе́лф, бико́з э лайф мэйд о́унли эв дью́тиз филз ту нэ́роу.",
    answerUk:
      "Зараз на першому місці двоє дітей, чоловік і здоров’я. Трохи часу для себе теж потрібно, бо життя з самих обов’язків стає надто вузьким.",
  },
  {
    id: "personal-12",
    sphere: "personal",
    index: 12,
    titleUk: "Плани на майбутнє, вибір професії.",
    titleEn: "Plans for the future, choice of profession.",
    answerEn:
      "My plan is to keep learning English and to find work that fits the children's school day. The choice can still change, so I am taking it step by step while the children are growing.",
    answerPron:
      "Май плэн из тэ кип лёнин и́нглиш энд тэ файнд уёк зэт фитс зэ чи́лдрэнз скул дэй. Зэ чойс кэн стил чэйндж, соу ай эм тэ́йкин ит стэп бай стэп уайл зэ чи́лдрэн э гро́уин.",
    answerUk:
      "План такий: далі вчити англійську і знайти роботу, яка вкладається в шкільний день дітей. Вибір ще може змінитися, тож я рухаюся крок за кроком, поки діти ростуть.",
  },
  {
    id: "public-1",
    sphere: "public",
    index: 1,
    titleUk: "Погода. Природа. Навколишнє середовище.",
    titleEn: "Weather. Nature. The environment.",
    answerEn:
      "Today the weather is mild, though autumn in our city is often rainy and windy. I care about nature, because clean air and a park nearby make walks with the children healthier.",
    answerPron:
      "Тэдэ́й зэ уэ́зэ из майлд, зоу о́тэм ин а́уэ си́ти из о́фн рэ́йни энд уи́нди. Ай кэ́э эба́ут нэ́йчэ, бико́з клин э́э энд э пак ниэба́й мэйк уокс уиз зэ чи́лдрэн хэ́лсиэ.",
    answerUk:
      "Сьогодні погода м’яка, хоча восени в нашому місті часто дощить і віє вітер. Природа мені не байдужа, бо чисте повітря і парк поруч роблять прогулянки з дітьми здоровішими.",
  },
  {
    id: "public-2",
    sphere: "public",
    index: 2,
    titleUk: "Життя в країні, мову якої вивчають.",
    titleEn: "Life in the country whose language you are learning.",
    answerEn:
      "In the United Kingdom people usually greet one another politely, queue, and value being on time. Daily life there, as in our home, turns around school, work, and plans for the weekend with the family.",
    answerPron:
      "Ин зэ юна́йтид ки́нгдэм пи́пл ю́жуэли грит уан эна́зэ пэла́йтли, кью, энд вэ́лью би́ин он тайм. Дэ́йли лайф зэ́э, эз ин а́уэ хоум, тёнз эра́унд скул, уёк, энд плэнз фэ зэ уи́кэнд уиз зэ фэ́мили.",
    answerUk:
      "У Великій Британії люди зазвичай вітаються ввічливо, стоять у черзі й цінують пунктуальність. Повсякденне життя там, як і в нас удома, тримається на школі, роботі й звичці планувати вихідні з родиною.",
  },
  {
    id: "public-3",
    sphere: "public",
    index: 3,
    titleUk: "Подорожі, екскурсії.",
    titleEn: "Travel, excursions.",
    answerEn:
      "I like travelling with my husband and the children, because a new city shows them how other people live, eat, and spend their time. Even a short family outing can teach more than a page in a textbook.",
    answerPron:
      "Ай лайк трэ́влин уиз май ха́збэнд энд зэ чи́лдрэн, бико́з э нью си́ти шоуз зэм хау а́зэ пи́пл лив, ит, энд спэнд зэ́э тайм. И́вн э шот фэ́мили а́утин кэн тич мо зэн э пэйдж ин э тэ́кстбук.",
    answerUk:
      "Мені подобається подорожувати з чоловіком і дітьми, бо нове місто показує їм, як інші люди живуть, їдять і проводять час. Навіть коротка сімейна прогулянка може дати більше, ніж сторінка в підручнику.",
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
      "Ukrainian culture is rich in song, embroidery, and literature, while British culture is widely known for theatre, museums, and music. I want our children to know both, because art keeps the memory of a nation alive.",
    answerPron:
      "Юкрэ́йниэн ка́лчэ из рич ин сон, имбро́йдэри, энд ли́трэчэ, уайл бри́тиш ка́лчэ из уа́йдли ноун фэ си́этэ, мьюзи́эмз, энд мю́зик. Ай уонт а́уэ чи́лдрэн тэ ноу боус, бико́з ат кипс зэ мэ́мэри эв э нэ́йшн эла́йв.",
    answerUk:
      "Українська культура багата на пісню, вишивку й літературу, а британська відома театром, музеями та музикою. Хочу, щоб наші діти знали і те, і те, бо мистецтво зберігає пам’ять народу.",
  },
  {
    id: "public-5",
    sphere: "public",
    index: 5,
    titleUk: "Спорт в Україні та в країні, мову якої вивчають.",
    titleEn:
      "Sport in Ukraine and in the country whose language you are learning.",
    answerEn:
      "Football is popular in both Ukraine and Britain, and our children also run, swim, or play outside after school. Sport is not only about winning: it builds discipline and gives them a team.",
    answerPron:
      "Фу́тбол из по́пьюлэ ин боус юкрэ́йн энд бри́тн, энд а́уэ чи́лдрэн о́лсоу ран, суим, ор плэй аутса́йд а́фтэ скул. Спот из нот о́унли эба́ут уи́нин: ит билдз ди́сиплин энд гивз зэм э тим.",
    answerUk:
      "Футбол популярний і в Україні, і в Британії, а наші діти ще бігають, плавають або граються надворі після школи. Спорт виховує дисципліну й відчуття команди, навіть коли перемоги немає.",
  },
  {
    id: "public-6",
    sphere: "public",
    index: 6,
    titleUk: "Література в Україні та в країні, мову якої вивчають.",
    titleEn:
      "Literature in Ukraine and in the country whose language you are learning.",
    answerEn:
      "At school our children read Taras Shevchenko and Lesia Ukrainka, and in English they meet Shakespeare and modern British writers. At home I read with them, because a good book lets you enter another time and another way of thinking.",
    answerPron:
      "Эт скул а́уэ чи́лдрэн рид Тэ́рэс Шевчэ́нкоу энд Лэ́сиэ Юкрэ́йнкэ, энд ин и́нглиш зэй мит Шэ́йкспиэ энд мо́дн бри́тиш ра́йтэз. Эт хоум ай рид уиз зэм, бико́з э гуд бук лэтс ю э́нтэ эна́зэ тайм энд эна́зэ уэй эв си́нкин.",
    answerUk:
      "У школі наші діти читають Тараса Шевченка і Лесю Українку, а англійською знайомляться з Шекспіром і сучасними британськими письменниками. Удома я читаю разом із ними, бо добра книжка дає змогу увійти в інший час і в інший спосіб мислення.",
  },
  {
    id: "public-7",
    sphere: "public",
    index: 7,
    titleUk: "Засоби масової інформації.",
    titleEn: "The mass media.",
    answerEn:
      "I follow the news on my phone after the children are in bed, but I check more than one source before I believe a story. Television and social media shape their opinions too, so it matters who is speaking and why.",
    answerPron:
      "Ай фо́лоу зэ ньюз он май фоун а́фтэ зэ чи́лдрэн эр ин бэд, бат ай чэк мо зэн уан сос бифо́р ай били́в э сто́ри. Тэ́ливижн энд со́ушл ми́диэ шэйп зэ́э эпи́ньэнз ту, соу ит мэ́тэз ху из спи́кин энд уай.",
    answerUk:
      "Новини я читаю в телефоні, коли діти вже сплять, але намагаюся перевірити кілька джерел, перш ніж повірити історії. Телебачення й соціальні мережі формують і їхню думку, тож важливо, хто говорить і навіщо.",
  },
  {
    id: "public-8",
    sphere: "public",
    index: 8,
    titleUk: "Молодь і сучасний світ.",
    titleEn: "Young people and the modern world.",
    answerEn:
      "Our children are growing up with the internet, fast news, and a wide choice of study and work. The hard part, as their mother, is to keep real friendship and their own opinion in all that noise.",
    answerPron:
      "А́уэ чи́лдрэн э гро́уин ап уиз зи и́нтэнет, фаст ньюз, энд э уайд чойс эв ста́ди энд уёк. Зэ хад пат, эз зэ́э ма́зэ, из тэ кип ри́эл фрэ́ндшип энд зэ́э оун эпи́ньэн ин ол зэт нойз.",
    answerUk:
      "Наші діти зростають з інтернетом, швидкими новинами і великим вибором навчання та роботи. Мені, як матері, важко вберегти серед цього шуму їхню справжню дружбу і власну думку.",
  },
  {
    id: "public-9",
    sphere: "public",
    index: 9,
    titleUk: "Людина і довкілля.",
    titleEn: "People and the environment.",
    answerEn:
      "Our family changes the environment every day by how we travel, shop, and throw things away. I try to save electricity, sort rubbish with the children, and remember that clean water does not last forever.",
    answerPron:
      "А́уэ фэ́мили чэ́йнджиз зи инва́йэрэнмэнт э́ври дэй бай хау уи трэ́вл, шоп, энд сроу синз эуэ́й. Ай трай тэ сэйв илэктри́сити, сот ра́биш уиз зэ чи́лдрэн, энд римэ́мбэ зэт клин уо́тэ даз нот ласт фэрэ́вэ.",
    answerUk:
      "Наша родина щодня змінює довкілля тим, як ми їздимо, купуємо і викидаємо речі. Я намагаюся економити електроенергію, сортувати сміття разом із дітьми і пам’ятати, що запас чистої води не безмежний.",
  },
  {
    id: "public-10",
    sphere: "public",
    index: 10,
    titleUk: "Одяг.",
    titleEn: "Clothes.",
    answerEn:
      "For school the children wear simple, comfortable clothes, and I choose something a little smarter for a family visit. Clothes say something about a person, but they should never matter more than the person.",
    answerPron:
      "Фэ скул зэ чи́лдрэн уэ́э си́мпл, ка́мфтэбл клоуз, энд ай чуз са́мсин э ли́тл сма́тэ фэ э фэ́мили ви́зит. Клоуз сэй са́мсин эба́ут э пёсн, бат зэй шуд нэ́вэ мэ́тэ мо зэн зэ пёсн.",
    answerUk:
      "Для школи діти носять простий зручний одяг, а в гості я беру для себе трохи ошатніший. Одяг щось про людину говорить, але ніколи не має важити більше, ніж вона сама.",
  },
  {
    id: "public-11",
    sphere: "public",
    index: 11,
    titleUk: "Покупки.",
    titleEn: "Shopping.",
    answerEn:
      "I usually buy food for the family at the local market, and clothes for the children only when they truly need them. Before I pay, I look at the price and ask whether we will still use the thing next week.",
    answerPron:
      "Ай ю́жуэли бай фуд фэ зэ фэ́мили эт зэ ло́укл ма́кит, энд клоуз фэ зэ чи́лдрэн о́унли уэн зэй тру́ли нид зэм. Бифо́р ай пэй, ай лук эт зэ прайс энд аск уэ́зэ уи уил стил юз зэ син нэкст уик.",
    answerUk:
      "Продукти для родини я зазвичай купую на місцевому ринку, а одяг дітям лише тоді, коли він справді потрібен. Перед оплатою дивлюся на ціну і питаю себе, чи користуватимемося цією річчю і наступного тижня.",
  },
  {
    id: "public-12",
    sphere: "public",
    index: 12,
    titleUk: "Харчування.",
    titleEn: "Food.",
    answerEn:
      "A normal day in our home includes breakfast, a hot meal after school, and something light in the evening for my husband and the children. I like Ukrainian home cooking, and I am learning to give them fewer sweets.",
    answerPron:
      "Э но́мл дэй ин а́уэ хоум инклу́дз брэ́кфэст, э хот мил а́фтэ скул, энд са́мсин лайт ин зи и́внин фэ май ха́збэнд энд зэ чи́лдрэн. Ай лайк юкрэ́йниэн хоум ку́кин, энд ай эм лёнин тэ гив зэм фью́э суитс.",
    answerUk:
      "Звичайний день у нас складається зі сніданку, гарячого обіду після школи і чогось легкого ввечері для чоловіка й дітей. Мені смакує українська домашня кухня, і я потроху вчуся давати їм менше солодкого.",
  },
  {
    id: "public-13",
    sphere: "public",
    index: 13,
    titleUk: "Науково-технічний прогрес, видатні діячі науки.",
    titleEn: "Scientific and technical progress, outstanding scientists.",
    answerEn:
      "Scientific progress has changed our family life through electricity, medicine, and the internet. One figure I tell the children about is Serhii Koroliov, born in Zhytomyr, whose work helped open the way to spaceflight.",
    answerPron:
      "Сайэнти́фик про́угрэс хэз чэйнджд а́уэ фэ́мили лайф сру илэктри́сити, мэ́дсн, энд зи и́нтэнет. Уан фи́гэ ай тэл зэ чи́лдрэн эба́ут из Сэрхи́ Коро́лиов, бон ин Жито́миэ, хуз уёк хэлпт о́упэн зэ уэй тэ спэ́йсфлайт.",
    answerUk:
      "Науково-технічний прогрес змінив наше родинне життя електрикою, медициною та інтернетом. Дітям я розповідаю про Сергія Корольова, уродженця Житомира, чия праця відкрила шлях до польотів у космос.",
  },
  {
    id: "public-14",
    sphere: "public",
    index: 14,
    titleUk: "Україна у світовій спільноті.",
    titleEn: "Ukraine in the world community.",
    answerEn:
      "Ukraine is a European country with its own language, culture, and a clear wish to take part in international life. I want our children to know that its voice matters in questions of security, culture, and the right of a nation to choose its future.",
    answerPron:
      "Юкрэ́йн из э юэрэпи́эн ка́нтри уиз итс оун лэ́нгвид, ка́лчэ, энд э кли́э уиш тэ тэйк пат ин интэнэ́шнл лайф. Ай уонт а́уэ чи́лдрэн тэ ноу зэт итс войс мэ́тэз ин куэ́счэнз эв сикью́эрити, ка́лчэ, энд зэ райт эв э нэ́йшн тэ чуз итс фью́чэ.",
    answerUk:
      "Україна є європейською державою зі своєю мовою, культурою і виразним бажанням брати участь у міжнародному житті. Хочу, щоб наші діти знали: її голос важливий у питаннях безпеки, культури і права народу самому обирати майбутнє.",
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
      "In our family we mark Independence Day and Christmas, and in Britain people celebrate Christmas, Easter, and the official birthday of the King. Holidays are a way to remember history and to spend the day with my husband and the children.",
    answerPron:
      "Ин а́уэ фэ́мили уи мак Индипэ́ндэнс Дэй энд Кри́смэс, энд ин бри́тн пи́пл сэ́либрэйт Кри́смэс, И́стэ, энд зи эфи́шл бёсдэй эв зэ Кин. Хо́лидэйз эр э уэй тэ римэ́мбэ хи́стри энд тэ спэнд зэ дэй уиз май ха́збэнд энд зэ чи́лдрэн.",
    answerUk:
      "У нашій родині відзначають День Незалежності і Різдво, а в Британії Різдво, Великдень і офіційний день народження короля. Свята допомагають пам’ятати історію і провести день разом із чоловіком і дітьми.",
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
      "In our home Ukrainian tradition lives in the vyshyvanka, in carols, and in welcoming a guest with bread. British customs such as tea at five or Bonfire Night look different, but I tell the children that they also bring people together.",
    answerPron:
      "Ин а́уэ хоум юкрэ́йниэн трэди́шн ливз ин зэ вишива́нкэ, ин кэ́рэлз, энд ин уэ́лкэмин э гэст уиз брэд. Бри́тиш ка́стэмз сач эз ти эт файв ор Бо́нфайэ Найт лук ди́франт, бат ай тэл зэ чи́лдрэн зэт зэй о́лсоу брин пи́пл тэге́зэ.",
    answerUk:
      "У нашому домі українська традиція живе у вишиванці, у колядках і в звичаї зустрічати гостя хлібом. Британські звичаї, як-от чай о п’ятій чи ніч Гая Фокса, виглядають інакше, але я пояснюю дітям, що вони теж збирають людей разом.",
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
      "I tell our children about Taras Shevchenko, who shaped the Ukrainian language and the idea of human dignity, and about Lesia Ukrainka, who showed the strength of a free mind. In Britain, William Shakespeare is still the name most people connect with theatre and the English language.",
    answerPron:
      "Ай тэл а́уэ чи́лдрэн эба́ут Тэ́рэс Шевчэ́нкоу, ху шэйпт зэ юкрэ́йниэн лэ́нгвид энд зи айди́э эв хью́мэн ди́гнити, энд эба́ут Лэ́сиэ Юкрэ́йнкэ, ху шоуд зэ стрэнс эв э фри майнд. Ин бри́тн, Уи́льям Шэ́йкспиэ из стил зэ нэйм моуст пи́пл кэнэ́кт уиз си́этэ энд зи и́нглиш лэ́нгвид.",
    answerUk:
      "Дітям я розповідаю про Тараса Шевченка, який сформував українське слово і думку про людську гідність, і про Лесю Українку, яка показала силу вільного розуму. У Британії Вільям Шекспір досі лишається іменем, з яким пов’язують театр і англійську мову.",
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
      "Saint Sophia Cathedral in Kyiv and the historic centre of Lviv belong to Ukraine's heritage and are listed by UNESCO, and I would like to show them to our children. In Britain, Stonehenge and the Tower of London tell a much older story of the island.",
    answerPron:
      "Сэнт Сэфа́йэ Кэси́дрэл ин Ки́ив энд зэ хисто́рик сэ́нтэ эв Лэви́в било́н тэ Юкрэ́йнз хэ́ритидж энд э ли́стид бай Юне́ско, энд ай ууд лайк тэ шоу зэм ту а́уэ чи́лдрэн. Ин бри́тн, Стоунхэ́ндж энд зэ Та́уэ эв Ла́ндэн тэл э мач о́улдэ сто́ри эв зи а́йлэнд.",
    answerUk:
      "Софійський собор у Києві та історичний центр Львова належать до спадщини України і входять до списку ЮНЕСКО, і мені хотілося б показати їх нашим дітям. У Британії Стоунхендж і Лондонський Тауер розповідають значно давнішу історію острова.",
  },
  {
    id: "public-19",
    sphere: "public",
    index: 19,
    titleUk: "Музеї, виставки.",
    titleEn: "Museums, exhibitions.",
    answerEn:
      "A museum lets the children stand in front of a real object instead of only reading about it. I like exhibitions we can visit together, where someone explains the story behind a picture, a tool, or a document.",
    answerPron:
      "Э мьюзи́эм лэтс зэ чи́лдрэн стэнд ин франт эв э ри́эл о́бджикт инстэ́д эв о́унли ри́дин эба́ут ит. Ай лайк экзиби́шнз уи кэн ви́зит тэге́зэ, уэ́э са́муан иксплэ́йнз зэ сто́ри биха́йнд э пи́кчэ, э тул, ор э до́кьюмэнт.",
    answerUk:
      "Музей дає дітям змогу стати перед справжньою річчю, а не лише прочитати про неї. Мені подобаються виставки, куди можна піти разом і де пояснюють історію за картиною, знаряддям чи документом.",
  },
  {
    id: "public-20",
    sphere: "public",
    index: 20,
    titleUk: "Живопис, музика.",
    titleEn: "Painting, music.",
    answerEn:
      "Painting and music speak without a long explanation, and a song can change the mood in our flat in a minute. I listen to Ukrainian songs with the children and to quieter music in the evening with my husband.",
    answerPron:
      "Пэ́йнтин энд мю́зик спик уиза́ут э лон эксплэнэ́йшн, энд э сон кэн чэйндж зэ муд ин а́уэ флэт ин э ми́нит. Ай ли́сн тэ юкрэ́йниэн сонз уиз зэ чи́лдрэн энд тэ куа́йэтэ мю́зик ин зи и́внин уиз май ха́збэнд.",
    answerUk:
      "Живопис і музика говорять без довгих пояснень, і пісня здатна за хвилину змінити настрій у нашій квартирі. З дітьми я слухаю українські пісні, а ввечері з чоловіком тихішу музику.",
  },
  {
    id: "public-21",
    sphere: "public",
    index: 21,
    titleUk: "Кіно, телебачення, театр.",
    titleEn: "Cinema, television, theatre.",
    answerEn:
      "We watch films and television at home with the children, while theatre is a rare evening out for my husband and me, because the story happens live. I enjoy all three, but a good play stays in my memory longer than a series.",
    answerPron:
      "Уи уоч филмз энд тэ́ливижн эт хоум уиз зэ чи́лдрэн, уайл си́этэ из э рэ́э и́внин аут фэ май ха́збэнд энд ми, бико́з зэ сто́ри хэ́пэнз лайв. Ай инджо́й ол сри, бат э гуд плэй стэйз ин май мэ́мэри ло́нгэ зэн э си́эриз.",
    answerUk:
      "Фільми ми дивимося вдома з дітьми, а театр є рідкісним вечором для мене з чоловіком, бо історія відбувається просто перед нами. Мені близькі всі три, але добра вистава лишається в пам’яті довше за серіал.",
  },
  {
    id: "public-22",
    sphere: "public",
    index: 22,
    titleUk: "Обов’язки та права людини.",
    titleEn: "Human duties and rights.",
    answerEn:
      "Every person has the right to life, education, and a free opinion, and also the duty to respect those same rights in other people. I want our children to learn that freedom works when it does not harm another person's dignity.",
    answerPron:
      "Э́ври пёсн хэз зэ райт тэ лайф, эджукэ́йшн, энд э фри эпи́ньэн, энд о́лсоу зэ дью́ти тэ риспе́кт зоуз сэйм райтс ин а́зэ пи́пл. Ай уонт а́уэ чи́лдрэн тэ лён зэт фри́дэм уёкс уэн ит даз нот хам эна́зэ пёснз ди́гнити.",
    answerUk:
      "Кожна людина має право на життя, освіту і вільну думку, а також обов’язок поважати ті самі права в інших. Хочу, щоб наші діти розуміли: свобода працює тоді, коли не зачіпає гідності іншої людини.",
  },
  {
    id: "public-23",
    sphere: "public",
    index: 23,
    titleUk: "Міжнародні організації, міжнародний рух.",
    titleEn: "International organisations, the international movement.",
    answerEn:
      "The United Nations and the Red Cross exist so that countries can act together for peace, health, and help after a disaster. I explain to the children that many problems cross borders, so one state cannot solve them alone.",
    answerPron:
      "Зэ юна́йтид нэ́йшнз энд зэ Рэд Крос игзи́ст соу зэт ка́нтриз кэн экт тэге́зэ фэ пис, хэлс, энд хэлп а́фтэ э диз а́стэ. Ай иксплэ́йн тэ зэ чи́лдрэн зэт мэ́ни про́блэмз крос бо́дэз, соу уан стэйт кэ́нот солв зэм эло́ун.",
    answerUk:
      "ООН і Червоний Хрест існують для того, щоб країни діяли разом заради миру, здоров’я і допомоги після лиха. Я пояснюю дітям, що багато проблем перетинають кордони, тож одна держава не розв’яже їх сама.",
  },
  {
    id: "education-1",
    sphere: "education",
    index: 1,
    titleUk: "Освіта, навчання, виховання.",
    titleEn: "Education, learning, upbringing.",
    answerEn:
      "For our children, education is more than marks: it is how they learn to think, to work with others, and to tell a fact from a guess. Upbringing at home, with my husband and me, should teach respect, honesty, and responsibility.",
    answerPron:
      "Фэ а́уэ чи́лдрэн, эджукэ́йшн из мо зэн макс: ит из хау зэй лён тэ синк, тэ уёк уиз а́зэз, энд тэ тэл э фэкт фром э гэс. А́пбринин эт хоум, уиз май ха́збэнд энд ми, шуд тич риспе́кт, о́нисти, энд риспонсэби́лити.",
    answerUk:
      "Для наших дітей освіта є чимось більшим за оцінки: це вміння думати, працювати з іншими і відрізняти факт від здогаду. Виховання вдома, разом із чоловіком, має вчити поваги, чесності й відповідальності.",
  },
  {
    id: "education-2",
    sphere: "education",
    index: 2,
    titleUk: "Студентське життя.",
    titleEn: "Student life.",
    answerEn:
      "Student life, as I remember it, means lectures, the library, new friends, and the first real chance to organise your own time. I hope our children will have that later, and for now I help them learn how to meet a deadline without a reminder.",
    answerPron:
      "Стью́дэнт лайф, эз ай римэ́мбэ ит, минз лэ́кчэз, зэ ла́йбрэри, нью фрэндз, энд зэ фёст ри́эл чанс тэ о́гэнайз йо оун тайм. Ай хоуп а́уэ чи́лдрэн уил хэв зэт лэ́йтэ, энд фэ нау ай хэлп зэм лён хау тэ мит э дэ́длайн уиза́ут э рима́йндэ.",
    answerUk:
      "Студентське життя, яким я його пам’ятаю, складається з лекцій, бібліотеки, нових друзів і першої справжньої можливості самому розпоряджатися часом. Сподіваюся, наші діти матимуть це згодом, а поки я вчу їх здавати роботу вчасно без нагадування.",
  },
];
