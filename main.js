const $arenas = document.querySelector ( '.arenas' );
const $randomButton = document.querySelector ( '.button' );

const player1 = {
    player: 1,
    name: 'SCORPION',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['weapon_1'],
    attack: function () {
        console.log ( name + ' Fight...' )
    }
}
const player2 = {
    player: 2,
    name: 'SUB-ZERO',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['weapon_2'],
    attack: function () {
        console.log ( name + ' Fight...' )
    }
}


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


function changeHP(character) {
    const $playerLife = document.querySelector ( '.player' + character.player + ' .life' );
    character.hp -= Math.ceil(Math.random() * 20); // случайное число от 1 до 20

    if (character.hp < 0) {
        character.hp = 0;
        if (character.player == 2) {
            playerWin(player1.name);
        } else if (character.player == 1) {
            playerWin(player2.name);
        }
    }

    $playerLife.style.width = character.hp + '%'
    console.log ( `#### player ${character.player} ${character.name} character.hp:`, character.hp );
}


function playerLose(name) {
    const $loseTitle = createElement ( 'div', 'loseTitle' );
    $loseTitle.innerText = name + ' lose!';

    return $loseTitle;
}


function playerWin(name) {
    const $winTitle = createElement ( 'div', 'winTitle' );
    $winTitle.innerText = name + ' wins!';

    $randomButton.disabled = true // отключаем кнопку

    return $arenas.appendChild ( $winTitle )
}


$randomButton.addEventListener ( 'click', function () {
    changeHP ( player1 );
    changeHP ( player2 );
} )


$arenas.appendChild ( createPlayer ( player1 ) );
$arenas.appendChild ( createPlayer ( player2 ) );