const citates = [
    { author: "_Kamikotto_", content: "Пфф, искуственный интелект за 2 часа, изи" },
    { author: "_Kamikotto_", content: "Боже, этот бот меня убьёт" },
    { author: "_Kamikotto_", content: "Ну тут типо моя цитата, но я поздже придумаю)" },
    { author: "_Kamikotto_", content: "Да, я ками, и что?" },
    { author: "_Kamikotto_", content: "Не учите фанкина плохому" },
    
    { author: "Waenara", content: "Жизнь подобна программированию – иногда нужно внести изменения, чтобы избежать бесконечного цикла ошибок." },
    { author: "Waenara", content: "Чем больше вы учите искусству общения, тем меньше вероятность получить '404: Дружба не найдена'." },
    { author: "Waenara", content: "Если бы время было валютой, то процессоры были бы самыми богатыми – они всегда находят время для выполнения задач." },
    { author: "Waenara", content: "Любовь к кофе – это как зависимость от кода: начинаешь с небольших порций, а потом понимаешь, что уже не можешь без него работать." },
    { author: "Waenara", content: "Идеи подобны вирусам – только те, которые смогут заразить мозг, выживают в эволюции мышления." },
    
    { author: "Manul", content:"У МЕНЯ АВАСТ СКАЗАЛ ЧТО АПАСН" },
    { author: "Manul", content:"я решил забить свой диск" },
    { author: "Manul", content:"1 доллар венесуэльских боливаров составляет примерно 1 000 000 VES" },
    { author: "Manul", content:"я купил Фанкина!!!!" },
    { author: "Manul", content:"не придумал дальш" }
];
let lastContent;
function animateCitate() {
    const container = document.querySelector(".citates");

    var randomCitate = citates[Math.floor(Math.random() * citates.length)];
    while (randomCitate == lastContent)
    {
        randomCitate = citates[Math.floor(Math.random() * citates.length)];
    }
    lastContent = randomCitate;
    
    const author = document.querySelector(".author-citate");
    const citate = document.querySelector(".citata");

    function removeAnim(className) {
        container.classList.remove(className);
    }

    function addAnim(className) {
        container.classList.add(className);
    }

    function setRandomContent()
    {
        author.textContent = "@" + randomCitate.author
        citate.textContent = "\'\'\'" + randomCitate.content + "\'\'\'"
    }
    setRandomContent();
    addAnim("enter");

    

    setTimeout(() => removeAnim("enter"), 2000);

    setTimeout(() => addAnim("leave"), 8000);

    setTimeout(() => removeAnim("leave"), 10000);

    const interval = 10000;
  
    setTimeout(animateCitate, interval);
    
}

animateCitate();

function botInvite()
{
    window.location.href = "https://discord.com/api/oauth2/authorize?client_id=1149430767466852406&permissions=8&scope=bot";
}


const titleElement = document.getElementById('animatedTitle');
let originalText = titleElement.textContent;
let currentIndex = 0;
let isUppercase = true;

function isUppercaseLetter(char) {
    return char === char.toUpperCase();
}

function animateTitle() {
    if (isUppercaseLetter(originalText[currentIndex])) {
        originalText = originalText.substring(0, currentIndex) + originalText[currentIndex].toLowerCase() + originalText.substring(currentIndex + 1);
    } else {
        originalText = originalText.substring(0, currentIndex) + originalText[currentIndex].toUpperCase() + originalText.substring(currentIndex + 1);
    }

    if (currentIndex >= originalText.length - 1) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }

    document.title = originalText;
    setTimeout(animateTitle, 500);
}

animateTitle(); 

