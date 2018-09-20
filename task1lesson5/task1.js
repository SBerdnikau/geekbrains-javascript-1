function draw() {
    let doc = document;
    let blockMain = doc.querySelector('.wrapper-chess');
    let blockChess;
    let flagDraw = true;
    let len = [1, 2, 3, 4, 5, 6, 7, 8];
    let row = ["A", "B", "C", "D", "E", "F", "G", "H"];
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if (j === 0) {
                flagDraw = !flagDraw;
            }
            blockChess = doc.createElement('div');
            if (flagDraw) {
                blockChess.className = "chess-block block-black";
            } else {
                blockChess.className = "chess-block block-white"
            }


            blockMain.appendChild(blockChess);
            flagDraw = !flagDraw;
        }
    }


}

draw();