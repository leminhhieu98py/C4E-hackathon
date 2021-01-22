const urlParams1 = new URLSearchParams(window.location.search);
console.log(window.location.search)
const myParamUsername = urlParams1.get('username')
console.log(myParamUsername)



const url = "https://5f749eab1cf3c900161cd568.mockapi.io/api/champion-data/";
let champion = document.getElementsByClassName("champion");
let topLane = document.getElementById("top-lane");
let midLane = document.getElementById("mid-lane");
let jungleLane = document.getElementById("jungle-lane");
let adLane = document.getElementById("ad-lane");
let spLane = document.getElementById("sp-lane");
let btnlist = document.getElementById("map");
let btntop = document.getElementById("btn-top");
let btnmid = document.getElementById("btn-mid");
let btnjungle = document.getElementById("btn-jungle");
let btnad = document.getElementById("btn-ad");
let btnsp = document.getElementById("btn-sp");
let btnmap = document.getElementById("map123");
let body2 = document.getElementById("body2");
let mapImg = document.getElementById("mapImg");

// Cho ẩn 5 list tiêu đề ban đầu
topLane.style.display = "none";
midLane.style.display = "none";
jungleLane.style.display = "none";
adLane.style.display = "none";
spLane.style.display = "none";
// 5 functions create dưới đây có chức năng: thêm thông tin tướng vào html nhờ fectch(API)
// Đồng thời cho phép hiển thị top 3 tướng đứng đầu và 3 tướng đứng bét
// Cho phép hiển thị các kèo matchup khi bấm vào nút tên
btnmap.style.display = "none";
function map () {
    btnmap.addEventListener("click", () =>{
    midLane.style.display="none";
    jungleLane.style.display="none";
    adLane.style.display="none";
    spLane.style.display = "none";
    topLane.style.display="none";
    btnlist.style.display="block";
    mapImg.style.display="block";
    btnmap.style.display = "none";    
    })
}

async function createTop(){
    let topLaneString = "";
    let res = await fetch(url);
    let data = await res.json();
    for (let i = 0; i < 6; i++) {
        topLaneString = "";
        topLaneString += `
        <tr>
            <td class="info-tuong">${data[i].rank}</td>
            <td class="info-tuong"><img src=${data[i].img} alt="img"> <br> <a href="./match-up.html?id=${data[i].id}&username=${myParamUsername}">${data[i].champion}</a></td>
            <td class="info-tuong">${data[i].role}</td>
            <td class="info-tuong">${data[i].winPercent}</td>
            <td class="info-tuong">${data[i].playPercent}</td>
            <td class="info-tuong">${data[i].banRate}</td>
            <td class="info-tuong">${data[i].kills}</td>
            <td class="info-tuong">${data[i].deadths}</td>
            <td class="info-tuong">${data[i].assists}</td>
        </tr>
        `
        topLane.insertAdjacentHTML("beforeend", topLaneString);
    }
    topLane.style.display = "none";
    btntop.addEventListener("click", () => {
        midLane.style.display = "none";
        jungleLane.style.display = "none";
        adLane.style.display = "none";
        spLane.style.display = "none";
        mapImg.style.display = "none";
        btnlist.style.display = "none";
        btnmap.style.display = "block";
        if (topLane.style.display === "none") {
            topLane.style.display = "block";
        } else {
            topLane.style.display = "none";
        }
        })
}


async function createMid(){
    let midLaneString = "";
    let res = await fetch(url);
    let data = await res.json();
    for (let i = 6; i < 12; i++) {
        midLaneString = "";
        midLaneString += `
        <tr>
            <td class="info-tuong">${data[i].rank}</td>
            <td class="info-tuong"><img src=${data[i].img} alt="img"> <br> <a href="./match-up.html?id=${data[i].id}&username=${myParamUsername}">${data[i].champion}</a></td>
            <td class="info-tuong">${data[i].role}</td>
            <td class="info-tuong">${data[i].winPercent}</td>
            <td class="info-tuong">${data[i].playPercent}</td>
            <td class="info-tuong">${data[i].banRate}</td>
            <td class="info-tuong">${data[i].kills}</td>
            <td class="info-tuong">${data[i].deadths}</td>
            <td class="info-tuong">${data[i].assists}</td>
        </tr>
        `
        midLane.insertAdjacentHTML("beforeend", midLaneString);
    }
    midLane.style.display = "none";
    btnmid.addEventListener("click", () => {
        topLane.style.display = "none";
        jungleLane.style.display = "none";
        adLane.style.display = "none";
        spLane.style.display = "none";
        btnlist.style.display = "none";
        btnmap.style.display = "block"
        if (midLane.style.display === "none") {
            midLane.style.display = "block";
        } else {
            midLane.style.display = "none";
        }
        })

}


async function createJungle(){
    let jungleLaneString = "";
    let res = await fetch(url);
    let data = await res.json();
    for (let i = 24; i < 30; i++) {
        jungleLaneString = "";
        jungleLaneString += `
        <tr>
            <td class="info-tuong">${data[i].rank}</td>
            <td class="info-tuong"><img src=${data[i].img} alt="img"><br> <a href="./match-up.html?id=${data[i].id}&username=${myParamUsername}">${data[i].champion}</a></td>
            <td class="info-tuong">${data[i].role}</td>
            <td class="info-tuong">${data[i].winPercent}</td>
            <td class="info-tuong">${data[i].playPercent}</td>
            <td class="info-tuong">${data[i].banRate}</td>
            <td class="info-tuong">${data[i].kills}</td>
            <td class="info-tuong">${data[i].deadths}</td>
            <td class="info-tuong">${data[i].assists}</td>
        </tr>
        `
        jungleLane.insertAdjacentHTML("beforeend", jungleLaneString);  
    }
    jungleLane.style.display = "none";
    btnjungle.addEventListener("click", () => {
        midLane.style.display = "none";
        topLane.style.display = "none";
        adLane.style.display = "none";
        spLane.style.display = "none";
        btnlist.style.display = "none";
        btnmap.style.display = "block";
        if (jungleLane.style.display === "none") {
            jungleLane.style.display = "block";
        } else {
            jungleLane.style.display = "none";
        }
        })
}


async function createAd(){
    let adLaneString = "";
    let res = await fetch(url);
    let data = await res.json();
    for (let i = 18; i < 24; i++) {
        adLaneString = "";
        adLaneString += `
        <tr>
            <td class="info-tuong">${data[i].rank}</td>
            <td class="info-tuong"><img src=${data[i].img} alt="img"> <br> <a href="./match-up.html?id=${data[i].id}&username=${myParamUsername}">${data[i].champion}</a></td>
            <td class="info-tuong">${data[i].role}</td>
            <td class="info-tuong">${data[i].winPercent}</td>
            <td class="info-tuong">${data[i].playPercent}</td>
            <td class="info-tuong">${data[i].banRate}</td>
            <td class="info-tuong">${data[i].kills}</td>
            <td class="info-tuong">${data[i].deadths}</td>
            <td class="info-tuong">${data[i].assists}</td>
        </tr>
        `
        adLane.insertAdjacentHTML("beforeend", adLaneString);
    }
    adLane.style.display = "none";
    btnad.addEventListener("click", () => {
        midLane.style.display = "none";
        jungleLane.style.display = "none";
        topLane.style.display = "none";
        spLane.style.display = "none";
        btnlist.style.display = "none";
        btnmap.style.display = "block";
        if (adLane.style.display === "none") {
            adLane.style.display = "block";
        } else {
            adLane.style.display = "none";
        }
        })
}


async function createSp(){
    let spLaneString = "";
    let res = await fetch(url);
    let data = await res.json();
    for (let i = 12; i < 18; i++) {
        spLaneString = "";
        spLaneString += `
        <tr>
            <td class="info-tuong">${data[i].rank}</td>
            <td class="info-tuong"><img src=${data[i].img} alt="img"> <br> <a href="./match-up.html?id=${data[i].id}&username=${myParamUsername}">${data[i].champion}</a></td>
            <td class="info-tuong">${data[i].role}</td>
            <td class="info-tuong">${data[i].winPercent}</td>
            <td class="info-tuong">${data[i].playPercent}</td>
            <td class="info-tuong">${data[i].banRate}</td>
            <td class="info-tuong">${data[i].kills}</td>
            <td class="info-tuong">${data[i].deadths}</td>
            <td class="info-tuong">${data[i].assists}</td>
        </tr>
        `
        spLane.insertAdjacentHTML("beforeend", spLaneString);
    }
    spLane.style.display = "none";
    btnsp.addEventListener("click", () => {
        midLane.style.display = "none";
        jungleLane.style.display = "none";
        adLane.style.display = "none";
        topLane.style.display = "none";
        btnlist.style.display = "none";
        btnmap.style.display = "block";
        if (spLane.style.display === "none") {
            spLane.style.display = "block";
        } else {
            spLane.style.display = "none";
        }
        })
}

// chỗ này khởi tạo 5 functions create thôi này
createTop();
createMid();
createJungle();
createAd();
createSp();
map();
// Chỗ này tạo tương tác Login là chuyển trang
// btnlogin.addEventListener("click", )