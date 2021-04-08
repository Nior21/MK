const player1 = {
    name: 'Liu Kang',
    hp: 100,
    img: '',
    weapon: ['Dragon Fire'],
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

function createPlayer() {
    const $player1 = document.createElement('div');
    $player1.classList.add('player1');

    const $progressbar = document.createElement('div');
    $progressbar.classList.add('progressbar');

    const $character = document.createElement('div');
    $character.classList.add('character');

    $player1.appendChild($progressbar);
    $player1.appendChild($character);

    const $life = document.createElement('div');
    $life.classList.add('life')

    const $name = document.createElement('div');
    $name.classList.add('name');
    $name.innerText = 'Liu Kang';

    $progressbar.appendChild($life);
    $progressbar.appendChild($name);

    const $img = document.createElement('img');
    $img.src ='http://reactmarathon-api.herokuapp.com/assets/scorpion.gif';

    $character.appendChild($img);

    console.log($player1)
}