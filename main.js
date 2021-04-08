const player1 = {
    name: 'SCORPION',
    hp: 50,
    img: '',
    weapon: ['weapon_1'],
    attack: function () {
        console.log(name + ' Fight...')
    }
}

const player2 = {
    name: 'SUB-ZERO',
    hp: 80,
    img: '',
    weapon: ['weapon_2'],
    attack: function () {
        console.log(name + ' Fight...')
    }
}


function createPlayer(player='player1', character) {
    const $arenas = document.getElementById('arenas');

    const $player = document.createElement('div');
    $player.classList.add(player);

    $arenas.appendChild($player);

    const $progressbar = document.createElement('div');
    $progressbar.classList.add('progressbar');

    const $character = document.createElement('div');
    $character.classList.add('character');

    $player.appendChild($progressbar);
    $player.appendChild($character);

    const $life = document.createElement('div');
    $life.classList.add('life');
    $life.style.width = '100%';
    $life.innerText = character.hp;

    const $name = document.createElement('div');
    $name.classList.add('name');
    $name.innerText = character.name;

    $progressbar.appendChild($life);
    $progressbar.appendChild($name);

    const $img = document.createElement('img');
    $img.src ='http://reactmarathon-api.herokuapp.com/assets/scorpion.gif';

    $character.appendChild($img);

    //console.log($player);

}

createPlayer('player1', player1);
createPlayer('player2', player2);