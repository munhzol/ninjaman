var width = 40;

var ptAll = 0;
var ptSushi = 10;
var ptOnigiri = 5;

var worldRow = 10; 
var worldCol = 10; 

var world = [];

var wordDiction = {
    0: 'blank',
    1: 'wall',
    2: 'sushi',
    3: 'onigiri',
};

var ninjaman = {
    x: 0,
    y: 0
};


document.onkeydown = function (e) {

    switch (e.keyCode) {

        case 37:
            if (ninjaman.x > 0 && world[ninjaman.y][ninjaman.x - 1] != 1) {
                ninjaman.x--;
            }
            break;

        case 38:
            if (ninjaman.y > 0 && world[ninjaman.y - 1][ninjaman.x] != 1) {
                ninjaman.y--;
            }
            break;

        case 39:
            if (ninjaman.x < world[0].length - 1 && world[ninjaman.y][ninjaman.x + 1] != 1) {
                ninjaman.x++;
            }

            break;

        case 40:
            if (ninjaman.y < world.length - 1 && world[ninjaman.y + 1][ninjaman.x] != 1) {
                ninjaman.y++;
            }
            break;
    }
   

    if (world[ninjaman.y][ninjaman.x] == 2) {
        ptAll += ptSushi;
    } else
        if (world[ninjaman.y][ninjaman.x] == 3) { ptAll += ptOnigiri; }
    world[ninjaman.y][ninjaman.x] = 0;
    document.getElementById('points').innerHTML = ptAll;

    drawNinjaman();
    drawWorld();
}


// ------------------------------
// DRAW BOARD NINJA
// ------------------------------
function drawNinjaman() {
    document.getElementById('ninjaman').style.left = (ninjaman.x * width) + 'px';
    document.getElementById('ninjaman').style.top = (ninjaman.y * width) + 'px';
};

function drawWorld() {
    var output = '';

    for (var row = 0; row < world.length; row++) {
        output += '<div class="row">';
        for (var col = 0; col < world[row].length; col++) {
            output += '<div class="' + wordDiction[world[row][col]] + '"></div>';
        }
        output += '</div>';
    }

    document.getElementById('world').innerHTML = output;
};

// keep score of how many sushis ninja eats
// sushi = 10pts, onigiri = 5pts

//-----------------------------------
// advansed challenges: random world
//-----------------------------------

// Random integer between
// min and max included 
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function resetWorld() {

    var row = worldRow; 
    var col = worldCol; 

    world = new Array(row);

    for (var i = 0; i < row; i++) {
        world[i] = new Array(col);
        for (var j = 0; j < col; j++) {
            world[i][j] = randomIntFromInterval(1, 3);
        }
    }


    // world = [[0, 3, 1, 2, 3, 3, 3, 3, 1, 3],
    //         [2, 3, 2, 1, 2, 3, 1, 3, 3, 3],
    //         [3, 1, 1, 2, 3, 2, 1, 2, 3, 2],
    //         [1, 3, 1, 3, 3, 2, 2, 2, 1, 2],
    //         [1, 3, 1, 3, 1, 3, 1, 3, 3, 2],
    //         [2, 2, 3, 2, 3, 1, 1, 1, 2, 2],
    //         [1, 2, 2, 1, 2, 3, 2, 1, 1, 1],
    //         [3, 3, 2, 1, 3, 1, 2, 3, 1, 3],
    //         [2, 1, 3, 2, 3, 2, 3, 2, 2, 2],
    //         [1, 3, 3, 3, 2, 1, 1, 3, 2, 3]];

    world[0][0] = 0;
    
    ninjaman.x = 0;
    ninjaman.y = 0;

    ptAll = 0;
    document.getElementById('points').innerHTML = ptAll;
     
    drawWorld();
    drawNinjaman();
}


function analyzeWorld() {
    for (var i = 0; i < row; i++) {
        world[i] = new Array(col);
        for (var j = 0; j < col; j++) {
            world[i][j] = randomIntFromInterval(1, 3);
        }
    }
}

// hacker challange: create ghosts that chase ninjas


document.getElementById('btnReset').onclick = function () {
    resetWorld();
}

resetWorld();










function clearWorld() {
    console.log(world);
   


}