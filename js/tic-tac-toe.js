$(document).ready(function(){
    'use strict';

    //VARIABLES
    var count = 0;
    var delay = 1200;
    const squares = $('.squares');
    const tl = $('#top-left');
    const tc = $('#top-center');
    const tr = $('#top-right');
    const cl = $('#center-left');
    const cc = $('#center-center');
    const cr = $('#center-right');
    const bl = $('#bottom-left');
    const bc = $('#bottom-center');
    const br = $('#bottom-right');
    const squareArray = [tl,tc,tr,cl,cc,cr,bl,bc,br];
    const oTurn = $('.o-side');
    const xTurn = $('.x-side');
    const reset = $('#reset');
    const twoPlayer = $('#two-player');
    const onePlayer = $('#one-player');
    const xScore = $('.x-points-display');
    const drawScore = $('.draw-points-display');
    const oScore = $('.o-points-display');
    var xPoints = localStorage.getItem('xScore');
    if(typeof xPoints === 'undefined'){
        xPoints = 0;
        localStorage.setItem('xScore', xPoints)
    } else {
        xPoints = localStorage.getItem('xScore')
        xPoints = Number(xPoints)
    }
    console.log(typeof xPoints);
    var drawPoints = 0
    var oPoints = 0

    //^^^^VARIABLES^^^^

    //DEFINED FUNCTIONS
    function squareClickedTwo(){
        if ($(this).html() === '') {
            count += 1
            if (count % 2 !== 0) {
                xTurn.css('visibility', 'hidden');
                oTurn.css('visibility', 'unset');
                $(this).html('X');
                checkForWin()
            } else {
                oTurn.css('visibility', 'hidden');
                xTurn.css('visibility', 'unset');
                $(this).html('O');
                checkForWin()
            }
        }
    }
    function squareClickedOne(){
        count += 1
        if ($(this).html() === '') {
            $(this).html('X');
            oTurn.css('visibility', 'unset')
            xTurn.css('visibility', 'hidden')
            checkForWin()
            aiLogic()
            squares.removeAttr("disabled")
        }
    }
    function aiLogic() {
        count += 1
        if(tl.html() === 'O' && tc.html() === 'O' && tr.html() === ''){
            oPlayer(tr)
        } else if (tl.html() === 'O' && tr.html() === 'O' && tc.html() === ''){
            oPlayer(tc)
        } else if (tc.html() === 'O' && tr.html() === 'O' && tl.html() === ''){
            oPlayer(tl)
        } else if (cl.html() === 'O' && cc.html() === 'O' && cr.html() === ''){
            oPlayer(cr)
        } else if (cl.html() === 'O' && cr.html() === 'O' && cc.html() === ''){
            oPlayer(cc)
        } else if (cc.html() === 'O' && cr.html() === 'O' && cl.html() === ''){
            oPlayer(cl)
        } else if (bl.html() === 'O' && bc.html() === 'O' && br.html() === ''){
            oPlayer(br)
        } else if (bl.html() === 'O' && br.html() === 'O' && bc.html() === ''){
            oPlayer(bc)
        } else if (bc.html() === 'O' && br.html() === 'O' && bl.html() === ''){
            oPlayer(bl)
        } else if (tl.html() === 'O' && cl.html() === 'O' && bl.html() === ''){
            oPlayer(bl)
        } else if (tl.html() === 'O' && bl.html() === 'O' && cl.html() === ''){
            oPlayer(cl)
        } else if (cl.html() === 'O' && bl.html() === 'O' && tl.html() === ''){
            oPlayer(tl)
        } else if (tc.html() === 'O' && cc.html() === 'O' && bc.html() === ''){
            oPlayer(bc)
        } else if (tc.html() === 'O' && bc.html() === 'O' && cc.html() === ''){
            oPlayer(cc)
        } else if (cc.html() === 'O' && bc.html() === 'O' && tc.html() === ''){
            oPlayer(tc)
        } else if (tr.html() === 'O' && cr.html() === 'O' && br.html() === ''){
            oPlayer(br)
        } else if (tr.html() === 'O' && br.html() === 'O' && cr.html() === ''){
            oPlayer(cr)
        } else if (cr.html() === 'O' && br.html() === 'O' && tr.html() === ''){
            oPlayer(tr)
        } else if (tl.html() === 'O' && cc.html() === 'O' && br.html() === ''){
            oPlayer(br)
        } else if (tl.html() === 'O' && br.html() === 'X' && cc.html() === ''){
            oPlayer(cc)
        } else if (cc.html() === 'O' && br.html() === 'O' && tl.html() === ''){
            oPlayer(tl)
        } else if (tr.html() === 'O' && cc.html() === 'O' && bl.html() === ''){
            oPlayer(bl)
        } else if (tr.html() === 'O' && bl.html() === 'O' && cc.html() === ''){
            oPlayer(cc)
        } else if (cc.html() === 'O' && bl.html() === 'O' && tr.html() === ''){
            oPlayer(tr)
        } else if(tl.html() === 'X' && tc.html() === 'X' && tr.html() === ''){
            oPlayer(tr)
        } else if (tl.html() === 'X' && tr.html() === 'X' && tc.html() === ''){
            oPlayer(tc)
        } else if (tc.html() === 'X' && tr.html() === 'X' && tl.html() === ''){
            oPlayer(tl)
        } else if (cl.html() === 'X' && cc.html() === 'X' && cr.html() === ''){
            oPlayer(cr)
        } else if (cl.html() === 'X' && cr.html() === 'X' && cc.html() === ''){
            oPlayer(cc)
        } else if (cc.html() === 'X' && cr.html() === 'X' && cl.html() === ''){
            oPlayer(cl)
        } else if (bl.html() === 'X' && bc.html() === 'X' && br.html() === ''){
            oPlayer(br)
        } else if (bl.html() === 'X' && br.html() === 'X' && bc.html() === ''){
            oPlayer(bc)
        } else if (bc.html() === 'X' && br.html() === 'X' && bl.html() === ''){
            oPlayer(bl)
        } else if (tl.html() === 'X' && cl.html() === 'X' && bl.html() === ''){
            oPlayer(bl)
        } else if (tl.html() === 'X' && bl.html() === 'X' && cl.html() === ''){
            oPlayer(cl)
        } else if (cl.html() === 'X' && bl.html() === 'X' && tl.html() === ''){
            oPlayer(tl)
        } else if (tc.html() === 'X' && cc.html() === 'X' && bc.html() === ''){
            oPlayer(bc)
        } else if (tc.html() === 'X' && bc.html() === 'X' && cc.html() === ''){
            oPlayer(cc)
        } else if (cc.html() === 'X' && bc.html() === 'X' && tc.html() === ''){
            oPlayer(tc)
        } else if (tr.html() === 'X' && cr.html() === 'X' && br.html() === ''){
            oPlayer(br)
        } else if (tr.html() === 'X' && br.html() === 'X' && cr.html() === ''){
            oPlayer(cr)
        } else if (cr.html() === 'X' && br.html() === 'X' && tr.html() === ''){
            oPlayer(tr)
        } else if (tl.html() === 'X' && cc.html() === 'X' && br.html() === ''){
            oPlayer(br)
        } else if (tl.html() === 'X' && br.html() === 'X' && cc.html() === ''){
            oPlayer(cc)
        } else if (cc.html() === 'X' && br.html() === 'X' && tl.html() === ''){
            oPlayer(tl)
        } else if (tr.html() === 'X' && cc.html() === 'X' && bl.html() === ''){
            oPlayer(bl)
        } else if (tr.html() === 'X' && bl.html() === 'X' && cc.html() === ''){
            oPlayer(cc)
        } else if (cc.html() === 'X' && bl.html() === 'X' && tr.html() === ''){
            oPlayer(tr)
        } else if(cc.html() === ''){
            oPlayer(cc)
        } else if(cc.html() === 'X') {
            if (tl.html() === ''){
                oPlayer(tl)
            } else if (tr.html() === ''){
                oPlayer(tr)
            } else if (br.html() === ''){
                oPlayer(br)
            } else if (bl.html() === ''){
                oPlayer(bl)
            }
        } else if (tc.html() === ''){
            oPlayer(tc)
        } else if (cr.html() === ''){
            oPlayer(cr)
        } else if (bc.html() === ''){
            oPlayer(bc)
        } else if (cl.html() === ''){
            oPlayer(cl)
        } else if (tl.html() === ''){
            oPlayer(tl)
        } else if (tr.html() === ''){
            oPlayer(tr)
        } else if (br.html() === ''){
            oPlayer(br)
        } else if (bl.html() === ''){
            oPlayer(bl)
        }
        oTurn.css('visibility', 'hidden')
        xTurn.css('visibility', 'unset')
    }
    function oPlayer(square){
        xTurn.css('visibility', 'unset');
        oTurn.css('visibility', 'hidden');
        square.html('O');
        checkForWin()
    }
    function youWon(a, b, c){
        if (a.html() !== '' && b.html() !== '' && c.html() !== ''){
            if (a.html() === 'X' && b.html() === 'X' && c.html() === 'X'){
                xPoints += 1
                localStorage.setItem('xScore', xPoints)
                xScore.html(xPoints)
                a.css('color', 'yellow')
                a.css('background', 'blue')
                b.css('color', 'yellow')
                b.css('background', 'blue')
                c.css('color', 'yellow')
                c.css('background', 'blue')
                xTurn.html('X PLAYER WON!!!')
                oTurn.html('O PLAYER WON!!!')
                oTurn.css('visibility', 'hidden');
                xTurn.css('visibility', 'unset');
                squareArray.forEach(function(square){
                    if(square.html() === ''){
                        square.html('Z')
                        square.css('color', 'white')
                    }
                })
            } else if (a.html() === 'O' && b.html() === 'O' && c.html() === 'O'){
                oPoints += 1
                oScore.html(oPoints)
                a.css('color', 'yellow')
                a.css('background', 'blue')
                b.css('color', 'yellow')
                b.css('background', 'blue')
                c.css('color', 'yellow')
                c.css('background', 'blue')
                oTurn.html('O PLAYER WON!!!')
                xTurn.html('X PLAYER WON!!!')
                xTurn.css('visibility', 'hidden');
                oTurn.css('visibility', 'unset');
                squareArray.forEach(function(square){
                    if(square.html() === ''){
                        square.html('Z')
                        square.css('color', 'white')
                    }
                })
            }
        }
    }
    function gameDraw(){
        squares.css('color', 'yellow')
        squares.css('background', 'blue')
        oTurn.html("IT'S A DRAW!!")
        xTurn.html("IT'S A DRAW!!")
        oTurn.css('visibility', 'unset');
        xTurn.css('visibility', 'unset');
        drawPoints += 1
        drawScore.html(drawPoints)
    }
    function checkForWin(){
        youWon(tl, tc, tr);
        youWon(cl, cc, cr);
        youWon(bl, bc, br);
        youWon(tl, cl, bl);
        youWon(tc, cc, bc);
        youWon(tr, cr, br);
        youWon(bl, cc, tr);
        youWon(tl, cc, br);
        if(count >= 9 && xTurn.html() !== 'X PLAYER WON!!!'){
            gameDraw()
        }
    }
    function startOver(){
        location.reload()
        // squares.html('');
        // squares.css('color', 'black')
        // squares.css('background', 'white')
        // xTurn.html('X Players Turn')
        // oTurn.html('O Players Turn')
        // oTurn.css('visibility', 'hidden');
        // xTurn.css('visibility', 'unset');
        // count = 0;
    }
    //^^^^DEFINED FUNCTIONS^^^^

    //ONE PLAYER MODE
    onePlayer.click(function() {
        xTurn.css('visibility', 'unset')
        squares.click(squareClickedOne)
        onePlayer.prop('disabled', true)
        reset.click(startOver);
    })
    //^^^^ONE PLAYER^^^^

    //TWO PLAYER MODE
    twoPlayer.click(function(){
        xTurn.css('visibility', 'unset')
        squares.click(squareClickedTwo)
        twoPlayer.prop('disabled', true)
        reset.click(startOver);
    })
    //^^^^TWO PLAYER^^^^

});