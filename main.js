const $arenas = document.querySelector ( '.arenas' );
const $randomButton = document.querySelector ( '.button' );
const $formFight = document.querySelector ( '.control' );
const HIT = {
    head: 30,
    body: 25,
    foot: 20,
}
const ATTACK = ['head', 'body', 'foot'];

function createElement(tag, className) {
    const $tag = document.createElement ( tag );

    if (className) {
        $tag.classList.add ( className );
    }

    return $tag;
}

function createPlayer(character) {

    const $player = createElement ( 'div', 'player' + character.player );
    const $progressbar = createElement ( 'div', 'progressbar' );
    const $character = createElement ( 'div', 'character' );
    const $life = createElement ( 'div', 'life' );
    const $name = createElement ( 'div', 'name' );
    const $img = createElement ( 'img' );

    $player.appendChild ( $progressbar );
    $player.appendChild ( $character );
    $life.style.width = character.hp + `%`;
    $name.innerText = character.name;
    $progressbar.appendChild ( $life );
    $progressbar.appendChild ( $name );
    $img.src = character.img;
    $character.appendChild ( $img );

    return $player;
}

function createReloadButton() {
    const $reloadDiv = createElement ( 'div', 'reloadWrap' );
    $arenas.appendChild ( $reloadDiv );

    const $reloadWrap = createElement ( 'button', 'button' );
    $reloadWrap.innerText = 'Restart';

    $reloadDiv.appendChild ( $reloadWrap );

    $reloadWrap.addEventListener ( 'click', function () {
        window.location.reload ()
    } )
}

function getRandom(maxNum) {
    return Math.ceil ( Math.random () * maxNum );
}

function attack() {
    return this.name + ' Fight...';
}

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

$arenas.appendChild ( createPlayer ( player1 ) );
$arenas.appendChild ( createPlayer ( player2 ) );

function changeHP(deltaHP) {

    this.hp -= deltaHP;

    if (this.hp < 0) {
        this.hp = 0;
    }

    this.renderHP ();
}

function elHP() {
    return document.querySelector ( '.player' + this.player + ' .life' );
}

function renderHP() {
    this.elHP ().style.width = this.hp + '%';
}

function playerWins(name) {
    const $winTitle = createElement ( 'div', 'winTitle' );
    if (name) {
        $winTitle.innerText = name + ' Wins';
    } else {
        $winTitle.innerText = 'Draw';
    }

    $randomButton.disabled = true;
    createReloadButton ();

    return $winTitle;
}

function enemyAttack() {
    const hit = ATTACK[getRandom ( 3 ) - 1];
    const defence = ATTACK[getRandom ( 3 ) - 1]


    return {
        value: getRandom ( HIT[hit] ),
        hit,
        defence,
    }
}

$formFight.addEventListener ( 'submit', function (e) {
    e.preventDefault ();
    const enemy = enemyAttack ();

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

    player1.changeHP ( enemy.value );
    player2.changeHP ( attack.value );

    if (player1.hp === 0 && player1.hp < player2.hp) {
        $arenas.appendChild ( playerWins ( player2.name ) );
    } else if (player2.hp === 0 && player2.hp < player1.hp) {
        $arenas.appendChild ( playerWins ( player1.name ) );
    } else if (player1.hp === 0 && player2.hp === 0) {
        $arenas.appendChild ( playerWins () );
    }
} )