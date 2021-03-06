const quotes = [
	{
		"quote" : "Іноді краще залишитися спати вдома у понеділок, ніж провести весь тиждень у налагодженні написаного у понеділок коду.",
		// "source" : "Christopher Marlowe"
	},
	{
		"quote" : "Вимірювати продуктивність програміста підрахунком рядків коду - це так само, як оцінювати будівництво літака за його вагою.",
		// "source" : "Demosthenes"
	},
	{
		"quote" : "Більшість програм на сьогоднішній день подібні до єгипетських пірамід з мільйона цеглинок одна на одній і без конструктивної цілісності — вони просто побудовані грубою силою і тисячами рабів.",
		// "source" : "Mark Twain"
	},
	{
		"quote" : "Більшість хороших програмістів роблять свою роботу не тому, що очікують оплати або визнання, а тому, що отримують задоволення від програмування.",
		// "source" : "Eleanor Roosevelt"
	},
	{
		"quote" : "Програми мають писатися для людей, які їх читатимуть, а машини, які виконуватимуть ці програми — другорядні.",
		// "source" : "Marcus Tullius Cicero"
	},
	{
		"quote" : "Іноді найкращі програми створюються на папірці. Запрограмувати їх другорядна річ.",
		// "source" : "Pliny the Elder"
	},
	{
		"quote" : "Будь-який дурень зможе написати код, який зрозуміє машина. Хороші програмісти пишуть код, який зможе зрозуміти людина.",
		// "source" : "Rumi"
	},
	{
		"quote" : "Програмування - це розбиття чогось великого і неможливого на щось маленьке і реальне.",
		// "source" : "Desiderius Erasmus"
	},
  {
		"quote" : "Програмування – це складно. Основні правила, на яких все будується, дуже прості, але в міру розробки програма сама починає вводити свої правила та закони. Таким чином, програміст будує лабіринт, в якому сам може і загубитися.",
	},
  {
		"quote" : "Наскільки простіше було б створювати продукт, якби не замовники.",
	},
  {
		"quote" : "Молоді спеціалісти не вміють працювати, а досвідчені фахівці вміють не працювати.",
	},
  {
		"quote" : "Думаю, мистецтво програмувати трохи складніше за інші людські навички. Програмування робить вас краще так само, як вам допомагають розвиватися вивчення іноземної мови, математики або читання книг.",
	},
  {
		"quote" : "Аналогічно як написання картини є мистецтвом для душі, і написання програми є мистецтвом для розуму.",
	},
  {
		"quote" : "Спочатку вивчіть науку програмування та всю теорію. Потім напрацюйте свій стиль написання коду. Потім забудьте все і просто програмуйте.",
	},
  {
		"quote" : "Що нового ми не створювали б, ми повинні дати людям можливість переходити від старих інструментів та ідей до нових.",
	},
  {
		"quote" : "Програмування це не наука, а ремесло.",
	},
  {
		"quote" : "Пам'ятайте, що зазвичай є рішення простіше і швидше того, що першим спадає вам на думку.",
	}
]

function randomQuote() {
  let random = quotes[Math.floor(Math.random() * quotes.length)];
  quotation.innerText = `“${random.quote}”`;
  // source.innerText = random.source;
}

randomQuote();

document.querySelector("button").addEventListener('click', randomQuote)
