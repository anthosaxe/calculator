(() => {

    let content = document.getElementById('entry').textContent;

    document.getElementById('0').addEventListener("click", () => {
        document.getElementById('entry').innerHTML += "0";
    })
    document.getElementById('1').addEventListener("click", () => {
        document.getElementById('entry').innerHTML += "1";
    })
    document.getElementById('3').addEventListener("click", () => {
        document.getElementById('entry').innerHTML += "3";
    })
    document.getElementById('2').addEventListener("click", () => {
        document.getElementById('entry').innerHTML += "2";
    })
    document.getElementById('4').addEventListener("click", () => {
        document.getElementById('entry').innerHTML += "4";
    })

    document.getElementById('5').addEventListener("click", () => {
        document.getElementById('entry').innerHTML += "5";
    })

    document.getElementById('6').addEventListener("click", () => {
        document.getElementById('entry').innerHTML += "6";
    })
    document.getElementById('7').addEventListener("click", () => {
        document.getElementById('entry').innerHTML += "7";
    })
    document.getElementById('8').addEventListener("click", () => {
        document.getElementById('entry').innerHTML += "8";
    })
    document.getElementById('9').addEventListener("click", () => {
        document.getElementById('entry').innerHTML += "9";
    })
    document.getElementById('.').addEventListener("click", () => {
        document.getElementById('entry').innerHTML += ".";
    })
    document.getElementById('AC').addEventListener("click", () => {
        document.getElementById('entry').innerHTML = "0";
    })
})();