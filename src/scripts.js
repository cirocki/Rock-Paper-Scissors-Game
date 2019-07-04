document.addEventListener('DOMContentLoaded', function () {

    // variables
    const weaponsArray = ['rock', 'paper', 'scissors'];
    const weaponsButtons = document.querySelectorAll('.btn-weapon');

    const playersWeaponBox = document.querySelector('.player__area .weapon-selected');
    const opponentsWeaponBox = document.querySelector('.opponent__area .weapon-selected');

    const resultTextBox = document.querySelector('.result-text');
    const playerScoreBox = document.querySelector('.player-result');
    const opponentScoreBox = document.querySelector('.opponent-result');

    let playerScore = 0;
    let opponentScore = 0;

    // main function
    weaponsButtons.forEach(weapon => weapon.addEventListener('click', function () {

        // takes weapon name from button id and assigns that name to variable
        let playerWeapon = this.id;

        // simulates the weapon choice of the opponent (assigns random number to weaponsArray item)
        let opponentWeapon = weaponsArray[randomNumber(3)];

        // displays playerWeapon in proper place
        playersWeaponBox.textContent = playerWeapon;

        // displays opponentWeapon in proper place
        opponentsWeaponBox.textContent = opponentWeapon;

        // remove blinking class from welcome text
        resultTextBox.classList.remove('blink');

        // compares playerWeapon and opponentWeapon to resolve who win
        if (playerWeapon === opponentWeapon) {
            // IF DRAW
            resultTextBox.textContent = 'This turn ended with a draw. Try again.'
        } else if (playerWeapon === 'rock' && opponentWeapon === 'scissors' ||
            playerWeapon === 'paper' && opponentWeapon === 'rock' ||
            playerWeapon === 'scissors' && opponentWeapon === 'paper') {
            // IF PLAYER WIN 
            //increments playerScore and displays text and score
            playerScore++;
            resultTextBox.textContent = 'You win. Good job!';
            playerScoreBox.textContent = playerScore;
        } else {
            // IF PLAYER LOSE
            //increments opponentScore and displays text and score
            opponentScore++;
            resultTextBox.textContent = 'You lose this time...';
            opponentScoreBox.textContent = opponentScore;
        }

    }))


    // function returns random number from 0 to maxNumber-1
    const randomNumber = function (maxNumber) {
        return Math.floor(Math.random() * maxNumber);
    }

});