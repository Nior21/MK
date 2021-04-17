const $arenas = document.querySelector ( '.arenas' );
const $randomButton = document.querySelector ( '.button' );
const $formFight = document.querySelector ( '.control' );
const HIT = {
    head: 30,
    body: 25,
    foot: 20,
}
const ATTACK = ['head', 'body', 'foot'];
const player1 = {
    player: 1,
    name: 'SCORPION',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['weapon_1'],
    attack,
    changeHP,
    elHP,
    renderHP,
}
const player2 = {
    player: 2,
    name: 'SUB-ZERO',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['weapon_2'],
    attack,
    changeHP,
    elHP,
    renderHP,
}

/**
 * Создаем элементы html
 * @param tag
 * @param className
 * @param parent
 * @param child
 * @returns {*}
 */
function createElement(tag, className, parent, child) {
    const $tag = document.createElement ( tag );

    if (className) {
        $tag.classList.add ( className );
    }

    if (child) {
        switch (Object.keys ( child )[0]) {
            case 'styleWidth':
                $tag.style.width = child.styleWidth;
                break;
            case 'innerText':
                $tag.innerText = child.innerText;
                break;
            case 'src':
                $tag.src = child.src;
                break;
        }
    }

    if (parent) {
        parent.appendChild ( $tag );
    }

    return $tag;
}

/**
 * Создаем html-код игроков
 * @param character
 * @returns {*}
 */
function createPlayer(character) {

    const $player = createElement ( 'div', 'player' + character.player, $arenas );
    const $progressbar = createElement ( 'div', 'progressbar', $player );
    const $character = createElement ( 'div', 'character', $player );
    createElement ( 'div', 'life', $progressbar, {
        styleWidth: character.hp + `%`,
    } );
    createElement ( 'div', 'name', $progressbar, {
        innerText: character.name,
    } );
    createElement ( 'img', 'img', $character, {
        src: character.img,
    } );

    return $player;
}

/**
 * Отрисовываем кнопку для перезапуска игры
 */
function createReloadButton() {
    const $reloadDiv = createElement ( 'div', 'reloadWrap', $arenas );

    const $reloadWrap = createElement ( 'button', 'button', $reloadDiv, {
        innerText: 'Restart',
    } );

    $reloadWrap.addEventListener ( 'click', function () {
        window.location.reload ()
    } )
}

/**
 * Создаем случайные числа
 * @param maxNum
 * @returns {number}
 */
function getRandom(maxNum) {
    return Math.ceil ( Math.random () * maxNum );
}

/**
 * Метод персонажей возвращающий текст
 * @returns {string}
 */
function attack() {
    return this.name + ' Fight...';
}

createPlayer ( player1 );
createPlayer ( player2 );

/**
 * Пересчитываем кол-во жизней
 * @param deltaHP
 */
function changeHP(deltaHP) {

    this.hp -= deltaHP;

    if (this.hp < 0) {
        this.hp = 0;
    }
}

/**
 * Находим в html полосы HP
 **/
function elHP() {
    return document.querySelector ( '.player' + this.player + ' .life' );
}

/**
 * Перерисовываем шкалу жизни
 */
function renderHP() {
    this.elHP ().style.width = this.hp + '%';
}


/**
 * Определение победителей или ничьей
 * **/
function showResult() {
    if (player1.hp === 0 && player1.hp < player2.hp) {
        playerWins ( player2.name );
    } else if (player2.hp === 0 && player2.hp < player1.hp) {
        playerWins ( player1.name );
    } else if (player1.hp === 0 && player2.hp === 0) {
        playerWins ();
    }
}

/**
 * Отображение результатов
 * **/
function playerWins(name) {
    let child;

    if (name) {
        child = {innerText: name + ' Wins'};
    } else {
        child = {innerText: 'Draw'};
    }

    createReloadButton ();
    createElement ( 'div', 'winTitle', $arenas, child);
    $randomButton.disabled = true;
}

/**
 * Ответные удары противника
 * **/
function enemyAttack() {
    const hit = ATTACK[getRandom ( 3 ) - 1];
    const defence = ATTACK[getRandom ( 3 ) - 1]


    return {
        value: getRandom ( HIT[hit] ),
        hit,
        defence,
    }
}

/**
 * Атакуем противника
 * @returns {{}}
 */
function playerAttack() {
    const attack = {};

    for (let item of $formFight) {
        if (item.checked && item.name === 'hit') {
            attack.value = getRandom ( HIT[item.value] );
            attack.hit = item.value;
        }

        if (item.checked && item.name === 'defence') {
            attack.defence = item.value;
        }
        item.checked = false;
    }

    return attack;
}

/**
 * Добавляем слушатель для кнопки Fight
 */
$formFight.addEventListener ( 'submit', function (e) {
    e.preventDefault ();
    const enemy = enemyAttack ();
    const player = playerAttack();

    if (player.defence !== enemy.hit) {
        player1.changeHP ( enemy.value );
        player1.renderHP ();
    }

    if (enemy.defence !== player.hit) {
        player2.changeHP ( player.value );
        player2.renderHP ();
    }
    showResult()
} )