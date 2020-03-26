const MAX = 10;

function PlayerList() {
    this.playerList = new Array(MAX);

    this.initPlayerList = function () {
        for (let i = 0; i < MAX; i++) {
            //let playerID=
            let playerName = document.getElementById('playerName').value;
            let playerBirth = document.getElementById('playerBirth').value;
            let playerLegs = document.getElementsByName('legs').value;
            let playerPosition = document.getElementById('position').value;

            //let arrPosition = [];
            let playerPositionPlus = "";
            for (let i = 0; i < 3; i++) {
                if (document.getElementsByName('positionPlus').checked)
                    playerPositionPlus += document.getElementsByName('positionPlus').value;
            }

            let avatar=document.getElementsByName('avatar').value;
            
        }
    }
}