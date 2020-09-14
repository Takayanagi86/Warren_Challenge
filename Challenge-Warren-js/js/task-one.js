const eOne = document.querySelector('.energy-one');
const eTwo = document.querySelector('.energy-two');
const eThree = document.querySelector('.energy-three');
const eFour = document.querySelector('.energy-four');
const eFive = document.querySelector('.energy-five');
const eSix = document.querySelector('.energy-six');

const formOne = document.querySelector('.form-one');
const formTwo = document.querySelector('.form-two');
const formThree = document.querySelector('.form-three');
const formFour = document.querySelector('.form-four');
const formFive = document.querySelector('.form-five');
const formSix = document.querySelector('.form-six');

var reg = [];
var current = [];
var needed = [];
var leaving = [];
var carCounter = 0;




function breakdown() {
    var one = "";
    var two = "";
    var three = "";
    var four = "";
    var five = "";
    var six = "";

    one = reg.shift();
    document.querySelector('.c-r-one').innerHTML = one;
    two = reg.shift();
    document.querySelector('.c-r-two').innerHTML = two;
    three = reg.shift();
    document.querySelector('.c-r-three').innerHTML = three;
    four = reg.shift();
    document.querySelector('.c-r-four').innerHTML = four;
    five = reg.shift();
    document.querySelector('.c-r-five').innerHTML = five;
    six = reg.shift();
    document.querySelector('.c-r-six').innerHTML = six;
    one = current.shift();
    document.querySelector('.c-c-one').innerHTML = one;
    two = current.shift();
    document.querySelector('.c-c-two').innerHTML = two;
    three = current.shift();
    document.querySelector('.c-c-three').innerHTML = three;
    four = current.shift();
    document.querySelector('.c-c-four').innerHTML = four;
    five = current.shift();
    document.querySelector('.c-c-five').innerHTML = five;
    six = current.shift();
    document.querySelector('.c-c-six').innerHTML = six;
    one = needed.shift();
    document.querySelector('.c-n-one').innerHTML = one;
    two = needed.shift();
    document.querySelector('.c-n-two').innerHTML = two;
    three = needed.shift();
    document.querySelector('.c-n-three').innerHTML = three;
    four = needed.shift();
    document.querySelector('.c-n-four').innerHTML = four;
    five = needed.shift();
    document.querySelector('.c-n-five').innerHTML = five;
    six = needed.shift();
    document.querySelector('.c-n-six').innerHTML = six;
    one = leaving.shift();
    document.querySelector('.c-l-one').innerHTML = one;
    two = leaving.shift();
    document.querySelector('.c-l-two').innerHTML = two;
    three = leaving.shift();
    document.querySelector('.c-l-three').innerHTML = three;
    four = leaving.shift();
    document.querySelector('.c-l-four').innerHTML = four;
    five = leaving.shift();
    document.querySelector('.c-l-five').innerHTML = five;
    six = leaving.shift();
    document.querySelector('.c-l-six').innerHTML = six;
}

function calculate(){
    const cOne = Math.round((document.querySelector('.c-c-one').innerHTML/2.5)*3.5);
    const cTwo = Math.round((document.querySelector('.c-c-two').innerHTML/2.5)*3.5);
    const cThree = Math.round((document.querySelector('.c-c-three').innerHTML/2.5)*3.5);
    const cFour = Math.round((document.querySelector('.c-c-four').innerHTML/2.5)*3.5);
    const cFive = Math.round((document.querySelector('.c-c-five').innerHTML/2.5)*3.5);
    const cSix = Math.round((document.querySelector('.c-c-six').innerHTML/2.5)*3.5);

    eOne.style.height = cOne + "px";
    eTwo.style.height = cTwo + "px";
    eThree.style.height = cThree + "px";
    eFour.style.height = cFour + "px";
    eFive.style.height = cFive + "px";
    eSix.style.height = cSix + "px";

    if(document.querySelector('.c-c-one').innerHTML >= document.querySelector('.c-n-one').innerHTML){
        eOne.style.backgroundColor = "green";
    }
    if(document.querySelector('.c-c-two').innerHTML >= document.querySelector('.c-n-two').innerHTML){
        eTwo.style.backgroundColor = "green";
    }
    if(document.querySelector('.c-c-three').innerHTML >= document.querySelector('.c-n-three').innerHTML){
        eThree.style.backgroundColor = "green";
    }
    if(document.querySelector('.c-c-four').innerHTML >= document.querySelector('.c-n-four').innerHTML){
        eFour.style.backgroundColor = "green";
    }
    if(document.querySelector('.c-c-five').innerHTML >= document.querySelector('.c-n-five').innerHTML){
        eFive.style.backgroundColor = "green";
    }
    if(document.querySelector('.c-c-six').innerHTML >= document.querySelector('.c-n-six').innerHTML){
        eSix.style.backgroundColor = "green";
    }
}

function displayOne(){
    formOne.style.display = "block";
}
function displayTwo(){
    formTwo.style.display = "block";
}
function displayThree(){
    formThree.style.display = "block";
}
function displayFour(){
    formFour.style.display = "block";
}
function displayFive(){
    formFive.style.display = "block";
}
function displaySix(){
    formSix.style.display = "block";
}


window.addEventListener('load', displayOne());

document.querySelector('.btn-one').addEventListener('click', () => {
    
    if(document.querySelector('#reg-one').value == ""){
        alert("Please insert a registraition");
    } else {
        if (isNaN(document.querySelector('#current-one').value)) {
            alert("Please insert the current miles");
        } else {
            if(document.querySelector('#current-one').value < 1 || document.querySelector('#current-one').value > 250){
                alert("Current miles must be between 0 - 250");
            } else {
                if (isNaN(document.querySelector('#needed-one').value)) {
                    alert("Please insert the needed amount of miles");
                } else {
                    if(document.querySelector('#needed-one').value < 1 || document.querySelector('#needed-one').value > 250){
                        alert("Needed amount of miles must be between 0 - 250");
                    } else {
                        if(document.querySelector('#leaving-one').value == ""){
                            alert("Please insert a time");
                        } else {
                            if((document.querySelector('#leaving-one').value).substring(0,2) == 14 || (document.querySelector('#leaving-one').value).substring(0,2) == 15 || (document.querySelector('#leaving-one').value).substring(0,2) == 16 || (document.querySelector('#leaving-one').value).substring(0,2) == 17) {
                                carCounter += 1;
                            }

                            reg.push(document.querySelector('#reg-one').value);
                            current.push(document.querySelector('#current-one').value);
                            needed.push(document.querySelector('#needed-one').value);
                            leaving.push(document.querySelector('#leaving-one').value);
                            
                            formOne.style.display = "none";
                            displayTwo(); 
                        }
                    }        
                }
            }        
        }
    }
});
document.querySelector('.btn-two').addEventListener('click', () => {
    if(document.querySelector('#reg-two').value == ""){
        alert("Please insert a registraition");
    } else {
        if (isNaN(document.querySelector('#current-two').value)) {
            alert("Please insert the current miles");
        } else {
            if(document.querySelector('#current-two').value < 1 || document.querySelector('#current-two').value > 250){
                alert("Current miles must be between 0 - 250");
            } else {
                if (isNaN(document.querySelector('#needed-two').value)) {
                    alert("Please insert the needed amount of miles");
                } else {
                    if(document.querySelector('#needed-two').value < 1 || document.querySelector('#needed-two').value > 250){
                        alert("Needed amount of miles must be between 0 - 250");
                    } else {
                        if(document.querySelector('#leaving-two').value == ""){
                            alert("Please insert a time");
                        } else {
                            if((document.querySelector('#leaving-two').value).substring(0,2) == 14 || (document.querySelector('#leaving-two').value).substring(0,2) == 15 || (document.querySelector('#leaving-two').value).substring(0,2) == 16 || (document.querySelector('#leaving-two').value).substring(0,2) == 17) {
                                carCounter += 1;
                            }
                            reg.push(document.querySelector('#reg-two').value);
                            current.push(document.querySelector('#current-two').value);
                            needed.push(document.querySelector('#needed-two').value);
                            leaving.push(document.querySelector('#leaving-two').value);
                            
                            formTwo.style.display = "none";
                            displayThree();
                        }
                    }        
                }
            }        
        }
    }

});
document.querySelector('.btn-three').addEventListener('click', () => {
    if(document.querySelector('#reg-three').value == ""){
        alert("Please insert a registraition");
    } else {
        if (isNaN(document.querySelector('#current-three').value)) {
            alert("Please insert the current miles");
        } else {
            if(document.querySelector('#current-three').value < 1 || document.querySelector('#current-three').value > 250){
                alert("Current miles must be between 0 - 250");
            } else {
                if (isNaN(document.querySelector('#needed-three').value)) {
                    alert("Please insert the needed amount of miles");
                } else {
                    if(document.querySelector('#needed-three').value < 1 || document.querySelector('#needed-three').value > 250){
                        alert("Needed amount of miles must be between 0 - 250");
                    } else {
                        if(document.querySelector('#leaving-three').value == ""){
                            alert("Please insert a time");
                        } else {
                            if((document.querySelector('#leaving-three').value).substring(0,2) == 14 || (document.querySelector('#leaving-three').value).substring(0,2) == 15 || (document.querySelector('#leaving-three').value).substring(0,2) == 16 || (document.querySelector('#leaving-three').value).substring(0,2) == 17) {
                                carCounter += 1;
                            }
                            reg.push(document.querySelector('#reg-three').value);
                            current.push(document.querySelector('#current-three').value);
                            needed.push(document.querySelector('#needed-three').value);
                            leaving.push(document.querySelector('#leaving-three').value);
                            
                            formThree.style.display = "none";
                            displayFour();
                        }
                    }        
                }
            }        
        }
    }
});
document.querySelector('.btn-four').addEventListener('click', () => {
    if(document.querySelector('#reg-four').value == ""){
        alert("Please insert a registraition");
    } else {
        if (isNaN(document.querySelector('#current-four').value)) {
            alert("Please insert the current miles");
        } else {
            if(document.querySelector('#current-four').value < 1 || document.querySelector('#current-four').value > 250){
                alert("Current miles must be between 0 - 250");
            } else {
                if (isNaN(document.querySelector('#needed-four').value)) {
                    alert("Please insert the needed amount of miles");
                } else {
                    if(document.querySelector('#needed-four').value < 1 || document.querySelector('#needed-four').value > 250){
                        alert("Needed amount of miles must be between 0 - 250");
                    } else {
                        if(document.querySelector('#leaving-four').value == ""){
                            alert("Please insert a time");
                        } else {
                            if((document.querySelector('#leaving-four').value).substring(0,2) == 14 || (document.querySelector('#leaving-four').value).substring(0,2) == 15 || (document.querySelector('#leaving-four').value).substring(0,2) == 16 || (document.querySelector('#leaving-four').value).substring(0,2) == 17) {
                                carCounter += 1;
                            }
                            reg.push(document.querySelector('#reg-four').value);
                            current.push(document.querySelector('#current-four').value);
                            needed.push(document.querySelector('#needed-four').value);
                            leaving.push(document.querySelector('#leaving-four').value);
                            
                            formFour.style.display = "none";
                            displayFive();
                        }
                    }        
                }
            }        
        }
    }
});
document.querySelector('.btn-five').addEventListener('click', () => {
    if(document.querySelector('#reg-five').value == ""){
        alert("Please insert a registraition");
    } else {
        if (isNaN(document.querySelector('#current-five').value)) {
            alert("Please insert the current miles");
        } else {
            if(document.querySelector('#current-five').value < 1 || document.querySelector('#current-five').value > 250){
                alert("Current miles must be between 0 - 250");
            } else {
                if (isNaN(document.querySelector('#needed-five').value)) {
                    alert("Please insert the needed amount of miles");
                } else {
                    if(document.querySelector('#needed-five').value < 1 || document.querySelector('#needed-five').value > 250){
                        alert("Needed amount of miles must be between 0 - 250");
                    } else {
                        if(document.querySelector('#leaving-five').value == ""){
                            alert("Please insert a time");
                        } else {
                            if((document.querySelector('#leaving-five').value).substring(0,2) == 14 || (document.querySelector('#leaving-five').value).substring(0,2) == 15 || (document.querySelector('#leaving-five').value).substring(0,2) == 16 || (document.querySelector('#leaving-five').value).substring(0,2) == 17) {
                                carCounter += 1;
                            }
                            reg.push(document.querySelector('#reg-five').value);
                            current.push(document.querySelector('#current-five').value);
                            needed.push(document.querySelector('#needed-five').value);
                            leaving.push(document.querySelector('#leaving-five').value);
                            
                            formFive.style.display = "none";
                            displaySix();
                        }
                    }        
                }
            }        
        }
    }
});
document.querySelector('.btn-six').addEventListener('click', () => {
    if(document.querySelector('#reg-six').value == ""){
        alert("Please insert a registraition");
    } else {
        if (isNaN(document.querySelector('#current-six').value)) {
            alert("Please insert the current miles");
        } else {
            if(document.querySelector('#current-six').value < 1 || document.querySelector('#current-six').value > 250){
                alert("Current miles must be between 0 - 250");
            } else {
                if (isNaN(document.querySelector('#needed-six').value)) {
                    alert("Please insert the needed amount of miles");
                } else {
                    if(document.querySelector('#needed-six').value < 1 || document.querySelector('#needed-six').value > 250){
                        alert("Needed amount of miles must be between 0 - 250");
                    } else {
                        if(document.querySelector('#leaving-six').value == ""){
                            alert("Please insert a time");
                        } else {
                            if((document.querySelector('#leaving-six').value).substring(0,2) == 14 || (document.querySelector('#leaving-six').value).substring(0,2) == 15 || (document.querySelector('#leaving-six').value).substring(0,2) == 16 || (document.querySelector('#leaving-six').value).substring(0,2) == 17) {
                                carCounter += 1;
                            }
                            document.querySelector('.car-counter').innerHTML = carCounter;
                            reg.push(document.querySelector('#reg-six').value);
                            current.push(document.querySelector('#current-six').value);
                            needed.push(document.querySelector('#needed-six').value);
                            leaving.push(document.querySelector('#leaving-six').value);
                            
                            formSix.style.display = "none";
                            
                        }
                    }        
                }
            }        
        }
    }
    breakdown();
    calculate();
    var i;
    for (i = 1; i < 7; i++) {
        schedule(i);
    }
});