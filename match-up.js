const url = "https://5f749eab1cf3c900161cd568.mockapi.io/api/champion-data";
let header = document.getElementById("header3");
let container = document.getElementById("container");
let counter = document.getElementById("counter");
let encounter = document.getElementById("encounter");
let counterEncounter = document.getElementById('counter-encounter');
const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('id');
// console.log(myParam)

// Khởi tạo data cho trang ?id=a1
// Cho phép hiển thị các kèo matchup khi bấm vào nút tên
async function createMatchUp(url,id){
    let res = await fetch(`${url}?id=${id}`);
    let data = await res.json();
    // console.log("data", data)
    createCounter(data);
    counter.insertAdjacentHTML('beforeend', createCounter(data).join(""));
    createEncounter(data);
    encounter.insertAdjacentHTML("beforeend", createEncounter(data).join(""));
    createHeader(data);
    header.insertAdjacentHTML("beforeend", createHeader(data));
}

createMatchUp(url, myParam)


// chỗ này để hình thành Header khi load trang
function createHeader(dataHeader){
    return `
    <div id="firstline">
        <img src="https://champion.gg/img/logo.png" alt="img">
        <nav>
            <p>Patch: 10.16</p> |
            <p> Champions Analyzed: 4,294,780</p> |
            <p> League: Platium+</p>
        </nav>
    </div>
    <div id="secondline">
        <p>Your current champion: </p>
        <img src="${dataHeader[0].img}" alt="img">
    </div>
    `
}

// chỗ này khởi tạo hàm để hiển thị kèo tướng Match up
function createCounter(dataCounter){
    // console.log('1', dataCounter[0].counter)
    // console.log(dataCounter)
    const counterHTML = dataCounter[0].counter.map(item => {
    // console.log(item)
    return `
            <div class="counter-champion">
            <img src="${item.img}" alt="img">
            <p>${item.champion}</p>
            <div class="progress">
            <div class="progress-bar" style="width:${item.winRate}"></div>
            </div>
            <p>${item.winRate}</p>
            </div>
    `
    });
    return counterHTML;
}

function createEncounter(dataEncounter,j){
    const encounterHTML = dataEncounter[0].encounter.map(item =>{
        return `
            <div class="encounter-champion">
                <img src="${item.img}" alt="img">
                <p>${item.champion}</p>
                <div class="progress">
                <div class="progress-bar" style="width:${item.winRate}"></div>
                </div>
                <p>${item.winRate}</p>
            </div>
    `
    });
    // encounter[dataEncounter[0].order].insertAdjacentHTML("beforeend", encounterHTML);
    return encounterHTML;
}
