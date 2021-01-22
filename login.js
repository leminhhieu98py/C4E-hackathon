const url_root = `https://5f771bbcd5c9cb0016236ac1.mockapi.io/api/user`
let userdata
async function getUserByusername(url_api) {
    const res = await fetch(`${url_api}`);
    userdata = await res.json();
}
getUserByusername(url_root)
let a = [{
    username: "vinh",
    pass: "12"
}]

let btnlogin = document.getElementById("login")

btnlogin.addEventListener('click', loginbtn)
function loginbtn() {
    console.log(userdata)
    let inputuser = document.getElementById("account")
    let inputpass = document.getElementById("password")
    let alert = document.getElementById("alert")
    let check = false
    console.log(inputuser.value.indexOf(' ') == -1)
    for (let i = 0; i < userdata.length; i++) {
        if (inputuser.value === userdata[i].username && inputpass.value === userdata[i].pass) {
            check = true
        }
    }
    if (check && inputuser.value.indexOf(' ') == -1 && inputpass.value.indexOf(' ') == -1) {
        console.log("Dang nhap thanh cong")
        window.location=`./main.html?username=${inputuser.value}`
    }
    else {
        inputuser.value="";
        inputpass.value="";
        alert.innerText = "Tên tài khoản hoặc mật khẩu nhập sai. Vui lòng nhập lại"
    }
}
let btnregis = document.getElementById("regist")
btnregis.addEventListener('click', () => {
    document.getElementsByTagName("body")[0].innerHTML = ` <header class="header">
    <div id="space"></div>
    <div class="img1"><a href=""><img src="https://sso.garena.com/images/img_garena_logo.png" alt="logoGarena"></a>
    </div>
    <div class="language">
        <img id="img2" src="https://sso.garena.com/images/earth.png" alt="earth">
        <p id="text1">Việt Nam - Tiếng Việt</p>
    </div>
</header>
<section class="form">
    <div class="out-the-box">
        <h2>Đăng ký</h2>
        <p></p>
    </div>
    <div class="in-the-box">
        <div class="label">
            <label for="account">Tài khoản</label>
            <input type="text" id="account" placeholder="Tài khoản Garena, Email, số điện thoại">
            <label for="password">Mật khẩu</label>
            <input type="password" id="password" placeholder="Mật khẩu">
            <label for="password2">Nhập lại mật khẩu</label>
            <input type="password" id="password2" placeholder="Nhập lại mật khẩu">
            <label for="avatar">Avatar</label>
            <input type="text" id="avatar" placeholder="Nhập link hình">
        </div>
        <div id="alert">  
        
        </div>
        <div class="signIn">
            <button id="login">Đăng ký</button>
        </div>
    </div>
    <footer class="footer">
        <div class="footer1">
            <p class="copy">Bản quyền thuộc về © Garena Online.</p>
        </div>
    </footer>
</section>`
    window.btnreg = document.getElementById("login")
    btnreg.addEventListener('click', addnewacc)
})

function addnewacc() {
    let inputuser = document.getElementById("account")
    let inputpass = document.getElementById("password")
    let inputpass2 = document.getElementById("password2")
    let ava=document.getElementById("avatar")
    let alert = document.getElementById("alert")
    console.log(inputuser.value.indexOf(' '))
    let check=true
        for(let i=0;i<userdata.length;i++){
            if(inputuser.value==userdata[i].username){
            alert.innerText = "Tên truy cập đã có người sử dụng, vui lòng nhập tên truy cập khác"
            check=false
        }
        }
        
    if (inputpass2.value != inputpass.value&&check) {
        alert.innerText = "Mật khẩu nhập lại không khớp"
    }
    else if ((inputuser.value.indexOf(' ') > -1 || inputpass.value.indexOf(' ') > -1 || inputpass2.value.indexOf(' ') > -1)&&check) {
        alert.innerText = "Tên truy cập và mật khẩu không được chứa kí tự trống"
    }
    else if(inputpass.value==""){alert.innerText = "Tên truy cập và mật khẩu không được bỏ trống "}
    else if(check) {
        alert.innerText = "Đăng ký thành công"
        let datapost = {
            username: `${inputuser.value}`,
            pass: `${inputpass.value}`,
            avatar:`${ava.value}`
        }
        postdata(url_root, datapost)
            window.location=`./main.html?username=${inputuser.value}`
        
    }

}
async function postdata(url_api, data) {
    await fetch(`${url_api}`, {
        method: `POST`,
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json'
        }
    })
    console.log(userdata)
}
