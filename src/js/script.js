(() => {

    function addToEntry(char) {
        document.getElementById('entry').innerHTML += char;
    }

    function computeResult(str) {
        str = str.replace(/(\d+(\.\d+)?)%/g, "($1/100)");
        return new Function("return " + str)();
    }

    //nombre
    document.getElementById('0').addEventListener("click", () => addToEntry("0"));
    document.getElementById('1').addEventListener("click", () => addToEntry("1"));
    document.getElementById('2').addEventListener("click", () => addToEntry("2"));
    document.getElementById('3').addEventListener("click", () => addToEntry("3"));
    document.getElementById('4').addEventListener("click", () => addToEntry("4"));
    document.getElementById('5').addEventListener("click", () => addToEntry("5"));
    document.getElementById('6').addEventListener("click", () => addToEntry("6"));
    document.getElementById('7').addEventListener("click", () => addToEntry("7"));
    document.getElementById('8').addEventListener("click", () => addToEntry("8"));
    document.getElementById('9').addEventListener("click", () => addToEntry("9"));

    document.getElementById('.').addEventListener("click", () => {
        let entry = document.getElementById('entry').innerHTML;
        if (!entry.includes(".")) {
            addToEntry(".");
        }
    });

    //opération
    document.getElementById('+').addEventListener('click', () => addToEntry("+"));
    document.getElementById('-').addEventListener('click', () => addToEntry("-"));
    document.getElementById('*').addEventListener('click', () => addToEntry("*"));
    document.getElementById('/').addEventListener('click', () => addToEntry("/"));
    
    document.getElementById('(').addEventListener('click', () => {
        let audioElement = document.querySelector('audio');
        audioElement.play();
    });

    document.getElementById(')').addEventListener('click', () => {
        function generateRandomColor() {
            const r = Math.floor(Math.random() * 256); 
            const g = Math.floor(Math.random() * 256); 
            const b = Math.floor(Math.random() * 256); 
        
            const colorHex = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
        
            return colorHex;
        }
        document.querySelector('body').style.background = generateRandomColor();
    });

    document.getElementById('%').addEventListener('click', () => {
        document.getElementById('rick').classList.remove('hidden');
        document.getElementById('rick_stop').classList.remove('hidden');
        
        document.getElementById('rick').play();
        
        document.getElementById('rick_stop').addEventListener('click', () => {
            document.getElementById('rick').pause();
            document.getElementById('rick').currentTime = 0;

            document.getElementById('rick').classList.add('hidden');
            document.getElementById('rick_stop').classList.add('hidden');
        })
    });

    document.getElementById('AC').addEventListener("click", () => {
        document.getElementById('entry').innerHTML = "";
    });

    document.getElementById('=').addEventListener('click', () => {
        let entry = document.getElementById('entry').innerHTML;
        let result = computeResult(entry);
        document.getElementById('res').innerHTML += entry + '=' + result + '<br>';
        document.getElementById('entry').innerHTML = "";
    });

})();
