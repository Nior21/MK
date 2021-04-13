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


function random(maxNum) {
    return Math.ceil(Math.random() * maxNum);
}


function changeHP(character) {
    const $playerLife = document.querySelector ( '.player' + character.player + ' .life' );
    character.hp -= random(20) // случайное число от 1 до 20

    if (character.hp < 0) {
        character.hp = 0;
    }

    $playerLife.style.width = character.hp + '%'
}


function playerLose(name) {
    const $loseTitle = createElement ( 'div', 'loseTitle' );
    $loseTitle.innerText = name + ' lose!';

    return $loseTitle;
}


function playerWins(name) {
    const $winTitle = createElement ( 'div', 'winTitle' );
    $winTitle.innerText = name + ' wins!';

    return  $winTitle;
}


$randomButton.addEventListener ( 'click', function () {
    changeHP ( player1 );
    changeHP ( player2 );

    if (player1.hp === 0 || player2.hp === 0) {
        $randomButton.disabled = true;
    }

    if (player1.hp === 0 && player1.hp < player2.hp)
    {
        $arenas.appendChild(playerWins(player2.name));
    } else if (player2.hp === 0 && player2.hp < player1.hp) {
        $arenas.appendChild(playerWins(player1.name));
    } else if (player1.hp === 0 && player2.hp === 0) {

    }
}
    )


$arenas.appendChild ( createPlayer ( player1 ) );
$arenas.appendChild ( createPlayer ( player2 ) );