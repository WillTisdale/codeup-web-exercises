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


    // fetch('https://api.github.com/users/WillTisdale/received_events', {headers: {'Authorization': 'token ' + gitHubToken}})
    //     .then(res => res.json())
    //     .then(console.log)
    //     .catch(console.error)

    let listHTML = ""

    const gitHubUser = username => {
        fetch(`https://api.github.com/users/${username}/events/public`, access)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                for(let i = 0; data.length; i++){
                    if(data[i].type === "PushEvent"){
                        let repo = data[i].repo.name;
                        let arr2 = repo.split("/")
                        repo = arr2[1]
                        let time = data[i].created_at;
                        let arr = time.split("T")
                        time = arr[1].slice(0, -4).concat(" GMT")
                        listHTML += `<div class="col-4">`
                        listHTML += `<div class="card my-cards" style="width: 18rem;">`
                        listHTML += `<img src="${data[i].actor.avatar_url}" class="card-img-top" alt="...">`
                        listHTML += `<div class="card-body">`
                        listHTML += `<h5 class="card-title">${username}</h5>`
                        listHTML += `<p class="card-text">Last push event: ${time}.</p>`
                        listHTML += `<p class="card-text">Repo: ${repo}.</p>`
                        listHTML += `</div></div></div>`
                        list.html(listHTML)
                        break;
                    }
                }
            })
            .catch(console.error)
    }









    // gitHubUser('WillTisdale')
    // gitHubUser('christianparker512')
    // gitHubUser('jayaseyyadri')
    // gitHubUser('Mdbaker19')

    let usernames = ['WillTisdale', 'christianparker512', 'jayaseyyadri', 'Mdbaker19']

    const renderHTML = array => {
        for (let ele of array){
            gitHubUser(ele)
        }
        list.html(listHTML)
    }

    renderHTML(usernames)

    // fetch('https://api.github.com/organizations/CodeupClassroom/team/jupiter-students/memberships/WillTisdale', {headers: {'Authorization': 'token ' + gitHubToken}})
    //     .then(res => res.json())
    //     .then(console.log)
    //     .catch(console.error)


