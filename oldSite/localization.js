var lastSelectedButton = document.getElementById("langEN");
var text = "sorry, but at the moment discord is under development."
function localizeUA() {
    var main = document.getElementById("main_text");
    var invite = document.getElementById("invite");

    main.textContent = "Ласкаво просимо у світ веселощів та розваг! \nЦе багатофункціональний бот для Discord, який покликаний зробити ваш сервер набагато веселішим та цікавішим. \nНаш бот пропонує різноманітні команди для розваг та урізноманітнення вашої спільноти.";
    invite.textContent = "Запросити!";

    var button = document.getElementById("langUA");
    button.classList.add("selected");

    if (lastSelectedButton) {
        lastSelectedButton.classList.remove("selected");
    }
    text = "вибачте але наразі дiскорд у розробці ("
    lastSelectedButton = button;
}

function localizeEN() {
    var main = document.getElementById("main_text");
    var invite = document.getElementById("invite");

    main.textContent = "Welcome to the world of fun and entertainment! \nFunkin is a multifunctional bot for Discord, which is designed to make your server much more fun and interesting. \nOur bot offers a variety of commands for fun and variety in your community.";
    invite.textContent = "Invite!";

    var button = document.getElementById("langEN");
    button.classList.add("selected");
    text = "sorry, but at the moment discord is under development."
    if (lastSelectedButton) {
        lastSelectedButton.classList.remove("selected");
    }

    lastSelectedButton = button;
}

function localizeRU() {
    var main = document.getElementById("main_text");
    var invite = document.getElementById("invite");

    main.textContent = "Добро пожаловать в мир веселья и развлечений! \nFunkin - это многофункциональный бот для Discord, который призван сделать ваш сервер намного веселее и интереснее. \nНаш бот предлагает множество команд для веселья и разнообразия в вашем сообществе.";
    invite.textContent = "Пригласить!";

    var button = document.getElementById("langRU");
    button.classList.add("selected");
    text = "извините но в данный момент дискорд в разработке("
    if (lastSelectedButton) {
        lastSelectedButton.classList.remove("selected");
    }

    lastSelectedButton = button;
}
function discord()
{
    alert(text);
}