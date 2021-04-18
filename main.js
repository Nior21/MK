/**
 * Инициализация стартовых переменных
 */
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
const logs = {
    start: [
        'Часы показывали [time], когда [player1] и [player2] бросили вызов друг другу.',
    ],
    end: [
        'Результат удара [playerWins]: [playerLose] - труп',
        '[playerLose] погиб от удара бойца [playerWins]',
        'Результат боя: [playerLose] - жертва, [playerWins] - убийца',
    ],
    hit: [
        '[playerDefence] пытался сконцентрироваться, но [playerKick] разбежавшись раздробил копчиком левое ухо врага.',
        '[playerDefence] расстроился, как вдруг, неожиданно [playerKick] случайно раздробил грудью грудину противника.',
        '[playerDefence] зажмурился, а в это время [playerKick], прослезившись, раздробил кулаком пах оппонента.',
        '[playerDefence] чесал в пахе, и внезапно неустрашимый [playerKick] отчаянно размозжил грудью левый бицепс оппонента.',
        '[playerDefence] задумался, но внезапно [playerKick] случайно влепил грубый удар копчиком в пояс оппонента.',
        '[playerDefence] ковырялся в зубах, но [playerKick] проснувшись влепил тяжелый удар пальцем в кадык врага.',
        '[playerDefence] вспомнил что-то важное, но внезапно [playerKick] зевнув, размозжил открытой ладонью челюсть противника.',
        '[playerDefence] осмотрелся, и в это время [playerKick] мимоходом раздробил стопой аппендикс соперника.',
        '[playerDefence] кашлянул, но внезапно [playerKick] показав палец, размозжил пальцем грудь соперника.',
        '[playerDefence] пытался что-то сказать, а жестокий [playerKick] проснувшись размозжил копчиком левую ногу противника.',
        '[playerDefence] забылся, как внезапно безумный [playerKick] со скуки, влепил удар коленом в левый бок соперника.',
        '[playerDefence] поперхнулся, а за это [playerKick] мимоходом раздробил коленом висок врага.',
        '[playerDefence] расстроился, а в это время наглый [playerKick] пошатнувшись размозжил копчиком губы оппонента.',
        '[playerDefence] осмотрелся, но внезапно [playerKick] робко размозжил коленом левый глаз противника.',
        '[playerDefence] осмотрелся, а [playerKick] вломил дробящий удар плечом, пробив блок, куда обычно не бьют оппонента.',
        '[playerDefence] ковырялся в зубах, как вдруг, неожиданно [playerKick] отчаянно размозжил плечом мышцы пресса оппонента.',
        '[playerDefence] пришел в себя, и в это время [playerKick] провел разбивающий удар кистью руки, пробив блок, в голень противника.',
        '[playerDefence] пошатнулся, а в это время [playerKick] хихикая влепил грубый удар открытой ладонью по бедрам врага.',
    ],
    defence: [
        '[playerKick] потерял момент и храбрый [playerDefence] отпрыгнул от удара открытой ладонью в ключицу.',
        '[playerKick] не контролировал ситуацию, и потому [playerDefence] поставил блок на удар пяткой в правую грудь.',
        '[playerKick] потерял момент и [playerDefence] поставил блок на удар коленом по селезенке.',
        '[playerKick] поскользнулся и задумчивый [playerDefence] поставил блок на тычок головой в бровь.',
        '[playerKick] старался провести удар, но непобедимый [playerDefence] ушел в сторону от удара копчиком прямо в пятку.',
        '[playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение.',
        '[playerKick] не думал о бое, потому расстроенный [playerDefence] отпрыгнул от удара кулаком куда обычно не бьют.',
        '[playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение.'
    ],
    draw: [
        'Ничья - это тоже победа!',
    ]
};
const $chat = document.querySelector ( '.chat' );

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
        generateLog('end', player2, player1);
    } else if (player2.hp === 0 && player2.hp < player1.hp) {
        playerWins ( player1.name );
        generateLog('end', player1, player2);
    } else if (player1.hp === 0 && player2.hp === 0) {
        playerWins ();
        generateLog('draw')
    }
}

/**
 * Отображение результатов
 * @param name
 */
function playerWins(name) {
    let child;

    if (name) {
        child = {innerText: name + ' Wins'};
    } else {
        child = {innerText: 'Draw'};
    }

    createReloadButton ();
    createElement ( 'div', 'winTitle', $arenas, child );
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
    const player = playerAttack ();

    if (player.defence !== enemy.hit) {
        player1.changeHP ( enemy.value );
        player1.renderHP ();
        generateLog ( 'hit', player2, player1, enemy.value, player1.hp );
    } else {
        generateLog ( 'defence', player2, player1 );
    }
    if (enemy.defence !== player.hit) {

        player2.changeHP ( player.value );
        player2.renderHP ();
        generateLog ( 'hit', player1, player2, player.value, player2.hp );
    } else {
        generateLog ( 'defence', player1, player2 );
    }

    showResult ();
} )

/**
 * Добавляем нули в дату
 * @param i
 * @returns {string}
 */
function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

/**
 * Генерируем время для логов
 * @returns {string}
 */
function getTime() {
    const d = new Date ();
    const h = addZero ( d.getHours () );
    const m = addZero ( d.getMinutes () );
    const s = addZero ( d.getSeconds () );

    return `${ h }:${ m }:${ s }`;
}

/**
 * Возвращаем количество шаблонов в зависимости от типа события
 * @param type
 * @returns {string|number}
 */
function countTemplate(type) {
    switch (type) {
        case 'start':
            return 1;
        case 'end':
            return 3;
        case 'hit':
            return 18;
        case 'defence':
            return 8;
        case 'draw':
            return 1;
    }
}

/**
 * Выбираем случайный шаблон конкретного типа
 * @param type
 * @returns {*}
 */
function choiceTemplate(type) {
    return logs[type][getRandom ( countTemplate ( type ) ) - 1];
}

/**
 * Выводим информацию в чат в формате [time] [text] *([-player.hp] [hp/100])
 * "*" - не обязательные атрибуты
 * @param type
 * @param playerKick - он же playerWins
 * @param playerDefence - он же playerLose
 * @param value
 * @param hp
 */
function generateLog(type, playerKick, playerDefence, value, hp) {
    /**
     * набор заменяемых элементов в зависимости от типа:
     * start: '[time]', '[player1]', '[player2]',
     * end: '[playerLose]', '[playerWins]',
     * hit: '[playerDefence]', '[playerKick]',
     * defence: '[playerKick]',
     * draw: none.
     *
     * @type {string}
     */
    const time = getTime ();
    let text = choiceTemplate ( type )
        .replace ( '[time]', getTime () )
        .replace ( '[player1]', player1.name )
        .replace ( '[player2]', player2.name )
        .replace ( '[playerLose]', playerDefence.name ) // передаем playerDefence вместо playerLose, чтобы избыточно не увеличивать кол-во реквизитов
        .replace ( '[playerWins]', playerKick.name ) // передаем playerKick вместо playerWins, чтобы избыточно не увеличивать кол-во реквизитов
        .replace ( '[playerKick]', playerKick.name )
        .replace ( '[playerDefence]', playerDefence.name );

    if (value) {
        text += ` -${ value }HP [${ hp }/100]`;
    }

    $chat.insertAdjacentHTML ( 'afterbegin', `<p>${ time } - ${ text }</p>` );
}

generateLog('start', player1, player2);