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

    const access = {headers: {'Authorization': 'token ' + gitHubTeam}}
    let goodHTML = ""
    let badHTML = ""
    let newDate = new Date()
    let gCount = 0
    let bCount = 0

    const gitHubUser = username => {
        fetch(`https://api.github.com/users/${username}/events/public`, access)
            .then(res => res.json())
            .then(data => {
                for(let i = 0; data.length; i++){
                    if(data[i].type === "PushEvent"){
                        let newDate = new Date()
                        newDate.getDate()
                        let repo = data[i].repo.name;
                        let arr2 = repo.split("/")
                        repo = arr2[1]
                        let originalTime = data[i].created_at;
                        let time = data[i].created_at;
                        let arr = time.split("T")
                        let date = arr[0]
                        let dayCheck = date.split("-")
                        time = arr[1].slice(0, -4).concat(" GMT")
                        if(Number(dayCheck[2]) === newDate.getUTCDate()){
                            gCount += 1
                            goodHTML += `<div class="col-12 col-sm-6 col-lg-4 col-xl-3">
                        <div class="card my-cards" style="width: 18rem;">
                        <img src="${data[i].actor.avatar_url}" class="card-img-top" alt="...">
                        <div class="card-body green">
                        <h5 class="card-title">${username}</h5>
                        <p class="card-text">Last push time: ${time}.</p>
                        <p class="card-text">Last push date: ${date}.</p>
                        <p class="card-text">Repo: ${repo}.</p>
                        </div></div></div>`
                        } else {
                            bCount += 1
                            badHTML += `<div class="col-12 col-sm-6 col-lg-4 col-xl-3">
                        <div class="card my-cards" style="width: 18rem;">
                        <img src="${data[i].actor.avatar_url}" class="card-img-top" alt="...">
                        <div class="card-body red">
                        <h5 class="card-title">${username}</h5>
                        <p class="card-text">Last push time: ${time}.</p>
                        <p class="card-text">Last push date: ${date}.</p>
                        <p class="card-text">Repo: ${repo}.</p>
                        </div></div></div>`
                        }
                        $('.good').html(goodHTML)
                        $('.gHead').html(`${gCount} Have Pushed Today`)
                        $('.bad').html(badHTML)
                        $('.bHead').html(`${bCount} Have NOT Pushed Today`)
                        break;
                    }
                }
            })
            .catch(console.error)
    }

    $('.gHead').click(function(){
        $('.good').toggle('hidden')
    })
    $('.bHead').click(function(){
        $('.bad').toggle('hidden')
    })

    const renderHTML = array => {
        for (let ele of array){
            gitHubUser(ele)
        }
    }

    fetch('https://api.github.com/orgs/CodeupClassroom/teams', access)
        .then(res => res.json())
        .then(data => {
            let teamSlug = data[11].slug
            fetch(`https://api.github.com/orgs/CodeupClassroom/teams/${teamSlug}/members?per_page=100`, access)
                .then(res => res.json())
                .then(data => {
                    let usernames = []
                    for(let ele of data){
                        usernames.push(ele.login)
                    }
                    renderHTML(usernames)
                })
        })
        .catch(console.error)








