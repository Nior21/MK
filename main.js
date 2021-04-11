const $arenas = document.querySelector('.arenas');

const player1 = {
    player: 1,
    name: 'SCORPION',
    hp: 50,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['weapon_1'],
    attack: function () {
        console.log(name + ' Fight...')
    }
}

const player2 = {
    player: 2,
    name: 'SUB-ZERO',
    hp: 80,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['weapon_2'],
    attack: function () {
        console.log(name + ' Fight...')
    }
}

function createElement(tag, className) {

    const $tag = document.createElement(tag);
    if (className) {
        $tag.classList.add(className);
    }

    return $tag;
}

function createPlayer(character) {

    const $player = createElement('div', 'player' + character.player);
    const $progressbar = createElement('div', 'progressbar');
    const $character = createElement('div', 'character');
    const $life = createElement('div', 'life');
    const $name = createElement('div', 'name');
    const $img = createElement('img');

    $player.appendChild($progressbar);
    $player.appendChild($character);
    $life.style.width = character.hp + `%`;
    $name.innerText = character.name;
    $progressbar.appendChild($life);
    $progressbar.appendChild($name);
    $img.src = character.img;
    $character.appendChild($img);

    return $player;
}



$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));