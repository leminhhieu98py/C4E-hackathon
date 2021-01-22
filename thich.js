const urlParams1 = new URLSearchParams(window.location.search);
console.log(window.location.search)
const myParamUser = urlParams1.get('username');
console.log(myParamUser)
const myParamId = urlParams1.get('id')
console.log(myParamId)
const url_root = `https://5f771bbcd5c9cb0016236ac1.mockapi.io/api/user`

const url_data = "https://5f7dbae4834b5c0016b06767.mockapi.io/comment"
let userdata
async function getUserByusername(url_api) {
    const res = await fetch(`${url_api}/?username=${myParamUser}`);
    userdata = await res.json();
    console.log(userdata[0])
    let userlike = userdata[0].like.find(x => x.id == myParamId)
    if (userlike == undefined) {
        btnlike.innerHTML = '<img src="./tim/tim trang.png" alt="">'
        let newlike = {
            id: myParamId,
            liked: true
        }
        userdata[0].like.push(newlike)

        addeven(changegreen)
        addeven(putData)
    }
    else if (userlike.liked == false) {
        btnlike.innerHTML = '<img src="./tim/tim trang.png" alt="">'
        userlike.liked = true
        addeven(changegreen)
        addeven(putData)
    }
    else if (userlike.liked == true) {
        btnlike.innerHTML = '<img src="./tim/Untitled.png" alt="">'
        userlike.liked = false
        addeven(changewhite)
        addeven(putData)
    }

    async function putData() {               //Putdata
        console.log("put")
        console.log(userdata[0])
        await fetch(`${url_api}/${userdata[0].id}`, {
            method: `PUT`,
            body: JSON.stringify(userdata[0]),
            headers: {
                'Content-type': 'application/json'
            }
        })
        getUserByusername(url_root)
        removeeven(putData)
    }
    getdatafromdata(url_data).catch(postdata)
    async function postdata() {
        let a = {
            idchamp: myParamId,
            comment: [""]
        }
        console.log("post")
        await fetch(`${url_data}`, {
            method: `POST`,
            body: JSON.stringify(a),
            headers: {
                'Content-type': 'application/json'
            }
        })
        getdatafromdata(url_data)
    }
}
getUserByusername(url_root)

//---------------------nut like--------------------------
let btnlike = document.getElementById("like")

function addeven(func) {
    btnlike.addEventListener(`click`, func)
}
function removeeven(func) {
    btnlike.removeEventListener(`click`, func)
}
function changegreen() {
    btnlike.innerHTML = '<img src="./tim/Untitled.png" alt="">'
    removeeven(changegreen)
    addeven(changewhite)
}
function changewhite() {
    btnlike.innerHTML = '<img src="./tim/tim trang.png" alt="">'
    removeeven(changewhite)
    addeven(changegreen)
}

//---------------------------------Comment-----------------------------------------



async function getdatafromdata(url_api) {
    const res = await fetch(`${url_api}`);//?idchamp=${myParamId}`);
    const data_cmt = await res.json();
    console.log('-------------------')
    let check = data_cmt.map(x => x.idchamp)
    console.log(check)
    console.log(myParamId)
    let index = check.indexOf(myParamId)
    console.log(index)
    if (index == -1) { postdata(url_data) }

    else {
        window.comment = document.getElementById("commentuser")
        let img = userdata[0].avatar
        console.log(img)
        console.log(data_cmt[index])
        comment.innerHTML = `${data_cmt[index].comment[0]}`
        let btn_cmt = document.getElementById("btn_cmt")
        btn_cmt.addEventListener('click', addcmt)
        //-------------------------------------------------------------------
        async function putDatas(url_api) {
            let a = {
                idchamp: myParamId,
                comment: [comment.innerHTML]
            }
            console.log("put")
            await fetch(`${url_api}/${data_cmt[index].id}`, {
                method: `PUT`,
                body: JSON.stringify(a),
                headers: {
                    'Content-type': 'application/json'
                }
            })
        }
        //------------------------------------------------------
        function addcmt() {
            let cmt = document.getElementById("nd")
            comment.innerHTML = `${comment.innerHTML}` + `<p><img style=" font-size: 25pt;height: 50px;width: 50px;" src="${userdata[0].avatar}"><span class="nameco">${userdata[0].username}</span>: ${cmt.value}</p>`
            putDatas(url_data)
            cmt.value = ""
            // console.dir(cmt)
        }
        //-------------------------------------------------------
        check = []
    }
}
//http://127.0.0.1:5500/Du%20an%20cuoi%20khoa/Vinh/thich.html?id=a2&username=username%202



