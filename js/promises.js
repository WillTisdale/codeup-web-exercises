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

    const access = {headers: {'Authorization': 'token ' + gitHubToken}}

    let list = $('.classmates')

    console.log(list.html());

    let goodHTML = ""
    let badHTML = ""

    let newDate = new Date()
    console.log(newDate.getUTCDate());

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
                            goodHTML += `<div class="col-4">
                        <div class="card my-cards" style="width: 18rem;">
                        <img src="${data[i].actor.avatar_url}" class="card-img-top" alt="...">
                        <div class="card-body green">
                        <h5 class="card-title">${username}</h5>
                        <p class="card-text">Last push time: ${time}.</p>
                        <p class="card-text">Last push date: ${date}.</p>
                        <p class="card-text">Repo: ${repo}.</p>
                        </div></div></div>`
                        } else {
                            badHTML += `<div class="col-4">
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
                        $('.bad').html(badHTML)
                        break;
                    }
                }
            })
            .catch(console.error)
    }

    const renderHTML = array => {
        for (let ele of array){
            gitHubUser(ele)
        }
        list.html(listHTML)
    }

    fetch('https://api.github.com/orgs/CodeupClassroom/teams', {headers: {'Authorization': 'token ' + gitHubTeam}})
        .then(res => res.json())
        .then(data => {
            let teamID = data[11].id
            let teamSlug = data[11].slug
            console.log(data)
            console.log(teamSlug)
            console.log(teamID)
            fetch('https://api.github.com/user/orgs', {headers: {'Authorization': 'token ' + gitHubTeam}})
                .then(res => res.json())
                .then(data => {
                    let orgID = data[0].id
                    console.log(data);
                    fetch(`https://api.github.com/orgs/CodeupClassroom/teams/${teamSlug}/members?per_page=100`,
                        {
                            headers: {'Authorization': 'token ' + gitHubTeam},
                            page: 2
                        })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            let usernames = []
                            for(let ele of data){
                                usernames.push(ele.login)
                            }
                            console.log(usernames);
                            renderHTML(usernames)
                        })
                })
        })
        .catch(console.error)








