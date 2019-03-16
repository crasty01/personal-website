let lettersOutput = document.querySelectorAll('.keyboard>.key');
let output_span = document.getElementById('output');
let input_span = document.getElementById('input');
let codeBtn = document.getElementById('codeButton');
let codeWrapper = document.getElementById('code');
let codeInput = document.getElementById('codeInput');
let keyIsNotPressed = true;
let codeIsLocked = false;
let otoceni1 = 0,
    otoceni2 = 0,
    otoceni3 = 0;
let currentKey;
let activatedRotorNum1 = [],
    activatedRotorNum2 = [],
    activatedRotorNum3 = [],
    plugArray = [],
    code = [];

let rotors = [
    rotorNum1 = ['J', 'G', 'D', 'Q', 'O', 'X', 'U', 'S', 'C', 'A', 'M', 'I', 'F', 'R', 'V', 'T', 'P', 'N', 'E', 'W', 'K', 'B', 'L', 'Z', 'Y', 'H'],
    rotorNum2 = ['N', 'T', 'Z', 'P', 'S', 'F', 'B', 'O', 'K', 'M', 'W', 'R', 'C', 'J', 'D', 'I', 'V', 'L', 'A', 'E', 'Y', 'U', 'X', 'H', 'G', 'Q'],
    rotorNum3 = ['J', 'V', 'I', 'U', 'B', 'H', 'T', 'C', 'D', 'Y', 'A', 'K', 'E', 'Q', 'Z', 'P', 'O', 'S', 'G', 'X', 'N', 'R', 'M', 'W', 'F', 'L'],
    rotorNum4 = ['Q', 'Y', 'H', 'O', 'G', 'N', 'E', 'C', 'V', 'P', 'U', 'Z', 'T', 'F', 'D', 'J', 'A', 'X', 'W', 'M', 'K', 'I', 'S', 'R', 'B', 'L'],
    rotorNum5 = ['Q', 'W', 'E', 'R', 'T', 'Z', 'U', 'I', 'O', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'P', 'Y', 'X', 'C', 'V', 'B', 'N', 'M', 'L']
];



/*
kod =>

123402512QYHOGNECVPUZTFDJAXWM

123 => 1. rotor + jeho aktualni cislo 
402 => 2. rotor + jeho aktualni cislo 
512 => 3. rotor + jeho aktualni cislo 
QYHOGNECVPUZTFDJAXWM = QY-HO-GN-EC-VP-UZ-TF-DJ-AX-WM = po dvojicích => plugnuté k sobě

*/





codeBtn.onclick = function () {
    if (!codeIsLocked) {
        codeIsLocked = true;
        codeWrapper.classList.add('active');
        codeWrapper.lastElementChild.firstElementChild.innerText = 'deactivate';
        setEverything();
        input_span.innerText = '';
        output_span.innerText = '';
    } else {
        codeIsLocked = false;
        codeWrapper.classList.remove('active');
        codeWrapper.lastElementChild.firstElementChild.innerText = 'activate';
        code = [];
        activatedRotorNum1 = [];
        activatedRotorNum2 = [];
        activatedRotorNum3 = [];
        plugArray = [];
    }
};

function setEverything() {
    let tmp = String(codeInput.value).toLowerCase();
    code = tmp.split("");
    activatedRotorNum1 = rotors[code[0] - 1].slice();
    activatedRotorNum2 = rotors[code[3] - 1].slice();
    activatedRotorNum3 = rotors[code[6] - 1].slice();
    plugArray = code.slice(9);

    for (let i = 0; i < Number(code[1] + code[2]); i++) {
        let tmp1 = activatedRotorNum1.shift();
        activatedRotorNum1.push(tmp1);
        otoceni1++;
    }
    for (let i = 0; i < Number(code[4] + code[5]); i++) {
        let tmp2 = activatedRotorNum2.shift();
        activatedRotorNum2.push(tmp2);
        otoceni2++;
    }
    for (let i = 0; i < Number(code[7] + code[8]); i++) {
        let tmp3 = activatedRotorNum3.shift();
        activatedRotorNum3.push(tmp3);
        otoceni3++;
    }
}







window.onkeypress = function (e) {
    if (keyIsNotPressed == true && e.target != document.getElementById('codeInput')) {
        keyIsNotPressed = false;
        let key = convert(e.key);
        if (key !== undefined && codeIsLocked) {
            console.log(convert(key));
            input_span.innerText += convert(key);
            turnRotors();
            key = plugs(key);
            key = rotory(key);
            key = plugs(key);
            currentKey = key;
            output_span.innerText += convert(key);
            lettersOutput[currentKey].classList.add('active');
        };
    } else {
        return
    }
};
window.onkeyup = function (e) {
    keyIsNotPressed = true;
    let tmp = convert(e.key);
    if (codeIsLocked && tmp != undefined) {
        lettersOutput[currentKey].classList.remove('active');
    };
};







function rotory(key) {
    if (key < 26) { //pokud to neni tecka (pouze 26 znaku abecedy => indexOf(26) = '.')
        for (let i = 1; i <= 3; i++) {
            key = getThrought(key, i, true);
        };
        key = getThrought(key, 13, 'konec');
        for (let i = 3; i >= 1; i--) {
            key = getThrought(key, i, false);
        };
    };
    return key;
};

function turnRotors() {
    let tmp1 = activatedRotorNum1.shift();
    activatedRotorNum1.push(tmp1);
    //otoceni1++;
    if (activatedRotorNum1.toString() == rotors[code[0] - 1].toString()) {
        let tmp2 = activatedRotorNum2.shift();
        activatedRotorNum2.push(tmp2);
        //otoceni1 = 0;
        //otoceni2++;
        if (activatedRotorNum2.toString() == rotors[code[3] - 1].toString()) {
            let tmp3 = activatedRotorNum3.shift();
            activatedRotorNum3.push(tmp3);
            //otoceni2 = 0;
            //otoceni3++;
        };
    };
};





function plugs(key) {
    tmp = plugArray.indexOf(convert(key));
    if (tmp != -1) {
        if (tmp % 2 == 0) {
            key = plugArray[tmp + 1];
        } else if (tmp % 2 == 1) {
            key = plugArray[tmp - 1];
        }
    } else {
        key = convert(key)
    }
    return convert(key);
}













function getThrought(key, rotor, fw) {
    if (fw === true) {
        let activeRotor = eval('activatedRotorNum' + rotor);
        return convert(String(activeRotor[key]).toLowerCase())
    } else if (fw === false) {
        let activeRotor = eval('activatedRotorNum' + rotor);
        return activeRotor.indexOf(String(convert(key)).toUpperCase());
    } else if (fw === 'konec') {
        if (key >= rotor) {
            return key - 13;
        } else {
            return key + 13;
        }
    }
}

function convert(key) {
    if (typeof (key) == "number") {
        if (key == 0) {
            return "q"
        } else if (key == 1) {
            return "w"
        } else if (key == 2) {
            return "e"
        } else if (key == 3) {
            return "r"
        } else if (key == 4) {
            return "t"
        } else if (key == 5) {
            return "z"
        } else if (key == 6) {
            return "u"
        } else if (key == 7) {
            return "i"
        } else if (key == 8) {
            return "o"
        } else if (key == 9) {
            return "p"
        } else if (key == 10) {
            return "a"
        } else if (key == 11) {
            return "s"
        } else if (key == 12) {
            return "d"
        } else if (key == 13) {
            return "f"
        } else if (key == 14) {
            return "g"
        } else if (key == 15) {
            return "h"
        } else if (key == 16) {
            return "j"
        } else if (key == 17) {
            return "k"
        } else if (key == 18) {
            return "l"
        } else if (key == 19) {
            return "y"
        } else if (key == 20) {
            return "x"
        } else if (key == 21) {
            return "c"
        } else if (key == 22) {
            return "v"
        } else if (key == 23) {
            return "b"
        } else if (key == 24) {
            return "n"
        } else if (key == 25) {
            return "m"
        } else if (key == 26) {
            return "."
        } else {
            return;
        }
    } else {
        if (key == "q") {
            return 0
        } else if (key == "w") {
            return 1
        } else if (key == "e") {
            return 2
        } else if (key == "r") {
            return 3
        } else if (key == "t") {
            return 4
        } else if (key == "z") {
            return 5
        } else if (key == "u") {
            return 6
        } else if (key == "i") {
            return 7
        } else if (key == "o") {
            return 8
        } else if (key == "p") {
            return 9
        } else if (key == "a") {
            return 10
        } else if (key == "s") {
            return 11
        } else if (key == "d") {
            return 12
        } else if (key == "f") {
            return 13
        } else if (key == "g") {
            return 14
        } else if (key == "h") {
            return 15
        } else if (key == "j") {
            return 16
        } else if (key == "k") {
            return 17
        } else if (key == "l") {
            return 18
        } else if (key == "y") {
            return 19
        } else if (key == "x") {
            return 20
        } else if (key == "c") {
            return 21
        } else if (key == "v") {
            return 22
        } else if (key == "b") {
            return 23
        } else if (key == "n") {
            return 24
        } else if (key == "m") {
            return 25
        } else if (key == ".") {
            return 26
        } else {
            return;
        }
    }
};