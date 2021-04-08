const player1 = {
    name: 'SCORPION',
    hp: 100,
    img: '',
    weapon: ['Chain'],
    attack: function () {
        console.log(name + ' Fight...')
    }
}

const player2 = {
    name: 'Raiden',
    hp: 100,
    img: '',
    weapon: ['Thunder'],
    attack: function () {
        console.log(name + ' Fight...')
    }
}

const $arenas = document.createElement('div');
$arenas.classList.add('arenas');

//document.appendChild($arenas);


function createPlayer(player='player1', name='SCORPION', hp=100) {
    const $player = document.createElement('div');
    $player.classList.add(player);

    const $progressbar = document.createElement('div');
    $progressbar.classList.add('progressbar');

    const $character = document.createElement('div');
    $character.classList.add('character');

    $player.appendChild($progressbar);
    $player.appendChild($character);

    const $life = document.createElement('div');
    $life.classList.add('life');
    $life.style.width = '100%';

    const $name = document.createElement('div');
    $name.classList.add('name');
    $name.innerText = name;

    $progressbar.appendChild($life);
    $progressbar.appendChild($name);

    const $img = document.createElement('img');
    $img.src ='http://reactmarathon-api.herokuapp.com/assets/scorpion.gif';

    $character.appendChild($img);

    //console.log($player);
    $arenas.appendChild($player);

}

createPlayer('player1', 'SCORPION', 50)
createPlayer('player2', 'SUB-ZERO',80)