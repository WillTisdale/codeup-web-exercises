    "use strict";



    //HANDLING PROMISES MINI EXERCISE

    const successIfEvenUTCSecond = () => {
        return new Promise((resolve, reject) => {
            setTimeout(function() {
                const second = new Date().getUTCSeconds();
                if (second % 2 === 0) {
                resolve(second);
            } else {
                reject(second);
            }
            }, 2000);
        });
    }

    const aPromise = successIfEvenUTCSecond();

    // TODO: if aPromise resolves, console.log 'VALUE_HERE is an even number!'

    aPromise.then(data => console.log(`${data} is an even number!`));

    // TODO: if aPromise rejects, console.error 'VALUE_HERE is an odd number!'

    aPromise.catch(error => console.error(`${error} is an odd number!`));

    const wait = delay => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(typeof delay === 'number') {
                    if(delay === 1000) {
                        resolve(`You will see this after ${delay / 1000} second.`)
                    } else {
                        resolve(`You will see this after ${delay / 1000} seconds.`)
                    }
                } else {
                    reject(`${delay} is not a number!`)
                }
            }, delay)
        })
            .then(data => console.log(data))
            .catch(error => console.error(error))
    }



    wait(1000)
    wait(3000)
    wait(4000)
    wait("bird")
