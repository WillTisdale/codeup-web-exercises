$(document).ready(function(){

    let gameArray = [];
    const one = $('.one')
    const two = $('.two')
    const three = $('.three')
    const four = $('.four')
    const soundOne = document.getElementById('soundOne')
    const soundTwo = document.getElementById('soundTwo')
    const soundThree = document.getElementById('soundThree')
    const soundFour = document.getElementById('soundFour')
    const play = $('#playButton')
    let simpleSimonIndex = 0;
    let input;
    let delay = 200
    let score = $('#score')
    let points = 0
    let requiredInput = gameArray[simpleSimonIndex];


    function theGame() {
        let random = Math.floor(Math.random() * 4)
        if(gameArray.length < 1){
                if(random === 0){
                    activeOne()
                    gameArray.push(1)
                    console.log(gameArray);
                } else if(random === 1){
                    activeTwo()
                    gameArray.push(2)
                    console.log(gameArray);
                } else if(random === 2){
                    activeThree()
                    gameArray.push(3)
                    console.log(gameArray);
                } else if(random === 3){
                    activeFour()
                    gameArray.push(4)
                    console.log(gameArray);
                }
        } else {
            gameArray.forEach(function(semi){
                if(semi === 1){
                    activeOne()
                } else if(semi === 2){
                    activeTwo()
                } else if(semi === 3){
                    activeThree()
                } else if(semi === 4){
                    activeFour()
                }
            })
            if(random === 0){
                activeOne()
                gameArray.push(1)
                console.log(gameArray);
            } else if(random === 1){
                activeTwo()
                gameArray.push(2)
                console.log(gameArray);
            } else if(random === 2){
                activeThree()
                gameArray.push(3)
                console.log(gameArray);
            } else if(random === 3){
                activeFour()
                gameArray.push(4)
                console.log(gameArray);
            }
        }

    }

    play.click(function(){
        theGame()
        one.click(function(){
            input = 1
            activeOne()
        })
        two.click(function(){
            input = 2
            activeTwo()
        })
        three.click(function(){
            input = 3
            activeThree()
        })
        four.click(function(){
            input = 4
            activeFour()
        })

        if (input === requiredInput) {
            simpleSimonIndex++;
            if (simpleSimonIndex === gameArray.length) {
                points += 1
                score.html(points)

            }
        } else {
            points = 0
            score.html(points)
            simpleSimonIndex = 0;
        }
        theGame()
    })

    function activeOne (){
        one.toggleClass('active-one')
        soundOne.play()
        setTimeout(function(){
            one.toggleClass('active-one')
        }, delay)
    }
    function activeTwo (){
        two.toggleClass('active-two')
        soundTwo.play()
        setTimeout(function(){
            two.toggleClass('active-two')
        }, delay)
    }
    function activeThree (){
        three.toggleClass('active-three')
        soundThree.play()
        setTimeout(function(){
            three.toggleClass('active-three')
        }, delay)
    }
    function activeFour (){
        four.toggleClass('active-four')
        soundFour.play()
        setTimeout(function(){
            four.toggleClass('active-four')
        }, delay)
    }















});