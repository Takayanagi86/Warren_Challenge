const carOneRow = document.querySelectorAll('.car-one-row');
const carTwoRow = document.querySelectorAll('.car-two-row');
const carThreeRow = document.querySelectorAll('.car-three-row');
const carFourRow = document.querySelectorAll('.car-four-row');
const carFiveRow = document.querySelectorAll('.car-five-row');
const carSixRow = document.querySelectorAll('.car-six-row');

const overlay = document.querySelectorAll('.overlay-text');

var leavingOne;
var leavingTwo;
var leavingThree;
var leavingFour;
var leavingFive;
var leavingSix;

var row;
var time;
var leaving;
var reg;
var getCars;

function schedule(index){
    leavingOne = document.querySelector('.c-l-one').innerHTML;
    leavingTwo = document.querySelector('.c-l-two').innerHTML;
    leavingThree = document.querySelector('.c-l-three').innerHTML;
    leavingFour = document.querySelector('.c-l-four').innerHTML;
    leavingFive = document.querySelector('.c-l-five').innerHTML;
    leavingSix = document.querySelector('.c-l-six').innerHTML;

    const carOneTime = document.querySelector('.c-n-one').innerHTML-document.querySelector('.c-c-one').innerHTML;
    const carTwoTime = document.querySelector('.c-n-two').innerHTML-document.querySelector('.c-c-two').innerHTML;
    const carThreeTime = document.querySelector('.c-n-three').innerHTML-document.querySelector('.c-c-three').innerHTML;
    const carFourTime = document.querySelector('.c-n-four').innerHTML-document.querySelector('.c-c-four').innerHTML;
    const carFiveTime = document.querySelector('.c-n-five').innerHTML-document.querySelector('.c-c-five').innerHTML;
    const carSixTime = document.querySelector('.c-n-six').innerHTML-document.querySelector('.c-c-six').innerHTML;
    
    function setOverlay(i, r, t, l){
        if(t > 0){
            t = Math.round(t / 44);
        }
        var string = "";
        string += "Car Registration:" + "<br>" + r;
        string += "<br></br>";
        string += "Leaving time: " + l;
        string += "<br></br>";
        string += "The amount of hours needed to charge: " + t + " (Rough Estimate)";
        overlay[i-1].innerHTML = string;
    }

    if(index == 1){
        time = carOneTime;
        row = carOneRow;
        leaving = leavingOne;
        reg = document.querySelector('.c-r-one').innerHTML;
    }
    if(index == 2){
        time = carTwoTime;
        row = carTwoRow;
        leaving = leavingTwo;
        reg = document.querySelector('.c-r-two').innerHTML;
    }
    if(index == 3){
        time = carThreeTime;
        row = carThreeRow;
        leaving = leavingThree;
        reg = document.querySelector('.c-r-three').innerHTML;
    }
    if(index == 4){
        time = carFourTime;
        row = carFourRow;
        leaving = leavingFour;
        reg = document.querySelector('.c-r-four').innerHTML;
    }
    if(index == 5){
        time = carFiveTime;
        row = carFiveRow;
        leaving = leavingFive;
        reg = document.querySelector('.c-r-five').innerHTML;
    }
    if(index == 6){
        time = carSixTime;
        row = carSixRow;
        leaving = leavingSix;
        reg = document.querySelector('.c-r-six').innerHTML;
    }

    setOverlay(index,reg,time,leaving);

    switch(leaving.substring(0,2)){
        case "08":
            if( time >= 44){
                row[0].style.backgroundColor = "green";
                row[1].style.backgroundColor = "green";
            } else {
                row[0].style.backgroundColor = "green";
            }
            break;
        case "09":
            if( time >= 88){
                row[0].style.backgroundColor = "green";
                row[1].style.backgroundColor = "green";
                row[2].style.backgroundColor = "green";
            }else if( time >= 44){
                row[0].style.backgroundColor = "green";
                row[1].style.backgroundColor = "green";
            } else {
                row[0].style.backgroundColor = "green";
            }
            break;
        case "10":
            if( time >= 132){
                row[0].style.backgroundColor = "green";
                row[1].style.backgroundColor = "green";
                row[2].style.backgroundColor = "green";
                row[3].style.backgroundColor = "green";
            }else if( time >= 88){
                row[1].style.backgroundColor = "green";
                row[2].style.backgroundColor = "green";
                row[3].style.backgroundColor = "green";
            }else if( time >= 44){
                row[2].style.backgroundColor = "green";
                row[3].style.backgroundColor = "green";
            } else {
                row[3].style.backgroundColor = "green";
            }
            break;
        case "11":
            if( time >= 176){
                row[0].style.backgroundColor = "green";
                row[1].style.backgroundColor = "green";
                row[2].style.backgroundColor = "green";
                row[3].style.backgroundColor = "green";
                row[4].style.backgroundColor = "green";
            }else if( time >= 132){
                row[1].style.backgroundColor = "green";
                row[2].style.backgroundColor = "green";
                row[3].style.backgroundColor = "green";
                row[4].style.backgroundColor = "green";
            }else if( time >= 88){
                row[2].style.backgroundColor = "green";
                row[3].style.backgroundColor = "green";
                row[4].style.backgroundColor = "green";
            }else if( time >= 44){
                row[3].style.backgroundColor = "green";
                row[4].style.backgroundColor = "green";
            } else {
                row[3].style.backgroundColor = "green";
            }
            break;
        case "12":
            if( time >= 220){
                row[0].style.backgroundColor = "green";
                row[1].style.backgroundColor = "green";
                row[2].style.backgroundColor = "green";
                row[3].style.backgroundColor = "green";
                row[4].style.backgroundColor = "green";
                row[5].style.backgroundColor = "green";
            }else if( time >= 176){
                row[1].style.backgroundColor = "green";
                row[2].style.backgroundColor = "green";
                row[3].style.backgroundColor = "green";
                row[4].style.backgroundColor = "green";
                row[5].style.backgroundColor = "green";
            }else if( time >= 132){
                row[2].style.backgroundColor = "green";
                row[3].style.backgroundColor = "green";
                row[4].style.backgroundColor = "green";
                row[5].style.backgroundColor = "green";
            }else if( time >= 88){
                row[3].style.backgroundColor = "green";
                row[4].style.backgroundColor = "green";
                row[5].style.backgroundColor = "green";
            }else if( time >= 44){
                row[3].style.backgroundColor = "green";
                row[4].style.backgroundColor = "green";
            } else {
                row[3].style.backgroundColor = "green";
            }
            break;
        case "13":
            if( time >= 220){
                row[1].style.backgroundColor = "green";
                row[2].style.backgroundColor = "green";
                row[3].style.backgroundColor = "green";
                row[4].style.backgroundColor = "green";
                row[5].style.backgroundColor = "green";
                row[6].style.backgroundColor = "green";
            }else if( time >= 176){
                row[2].style.backgroundColor = "green";
                row[3].style.backgroundColor = "green";
                row[4].style.backgroundColor = "green";
                row[5].style.backgroundColor = "green";
                row[6].style.backgroundColor = "green";
            }else if( time >= 132){
                row[3].style.backgroundColor = "green";
                row[4].style.backgroundColor = "green";
                row[5].style.backgroundColor = "green";
                row[6].style.backgroundColor = "green";
            }else if( time >= 88){
                row[3].style.backgroundColor = "green";
                row[4].style.backgroundColor = "green";
                row[5].style.backgroundColor = "green";
            }else if( time >= 44){
                row[3].style.backgroundColor = "green";
                row[4].style.backgroundColor = "green";
            } else {
                row[3].style.backgroundColor = "green";
            }
            break;
        case "14":
            getCars = document.querySelector('.car-counter');
            if((index == 5 || index == 6) && (getCars == 5 || getCars == 6)){
                if( time >= 220){
                    row[1].style.backgroundColor = "green";
                    row[2].style.backgroundColor = "green";
                    row[3].style.backgroundColor = "green";
                    row[4].style.backgroundColor = "green";
                    row[5].style.backgroundColor = "green";
                    row[6].style.backgroundColor = "green";
                }else if( time >= 176){
                    row[1].style.backgroundColor = "green";
                    row[2].style.backgroundColor = "green";
                    row[3].style.backgroundColor = "green";
                    row[4].style.backgroundColor = "green";
                    row[6].style.backgroundColor = "green";
                }else if( time >= 132){
                    row[3].style.backgroundColor = "green";
                    row[4].style.backgroundColor = "green";
                    row[5].style.backgroundColor = "green";
                    row[6].style.backgroundColor = "green";
                }else if( time >= 88){
                    row[3].style.backgroundColor = "green";
                    row[4].style.backgroundColor = "green";
                    row[5].style.backgroundColor = "green";
                }else if( time >= 44){
                    row[3].style.backgroundColor = "green";
                    row[4].style.backgroundColor = "green";
                } else {
                    row[3].style.backgroundColor = "green";
                }
            } else {
                if( time >= 220){
                    row[2].style.backgroundColor = "green";
                    row[3].style.backgroundColor = "green";
                    row[4].style.backgroundColor = "green";
                    row[5].style.backgroundColor = "green";
                    row[6].style.backgroundColor = "green";
                    row[7].style.backgroundColor = "green";
                }else if( time >= 176){
                    row[3].style.backgroundColor = "green";
                    row[4].style.backgroundColor = "green";
                    row[5].style.backgroundColor = "green";
                    row[6].style.backgroundColor = "green";
                    row[7].style.backgroundColor = "green";
                }else if( time >= 132){
                    row[3].style.backgroundColor = "green";
                    row[4].style.backgroundColor = "green";
                    row[5].style.backgroundColor = "green";
                    row[6].style.backgroundColor = "green";
                }else if( time >= 88){
                    row[3].style.backgroundColor = "green";
                    row[4].style.backgroundColor = "green";
                    row[5].style.backgroundColor = "green";
                }else if( time >= 44){
                    row[3].style.backgroundColor = "green";
                    row[4].style.backgroundColor = "green";
                } else {
                    row[3].style.backgroundColor = "green";
                }
            }
            break;
        case "15":
            getCars = document.querySelector('.car-counter');
            if((index == 5 || index == 6) && (getCars == 5 || getCars == 6)){
                if( time >= 220){
                    row[1].style.backgroundColor = "green";
                    row[2].style.backgroundColor = "green";
                    row[3].style.backgroundColor = "green";
                    row[4].style.backgroundColor = "green";
                    row[5].style.backgroundColor = "green";
                    row[6].style.backgroundColor = "green";
                }else if( time >= 176){
                    row[1].style.backgroundColor = "green";
                    row[2].style.backgroundColor = "green";
                    row[3].style.backgroundColor = "green";
                    row[4].style.backgroundColor = "green";
                    row[6].style.backgroundColor = "green";
                }else if( time >= 132){
                    row[3].style.backgroundColor = "green";
                    row[4].style.backgroundColor = "green";
                    row[5].style.backgroundColor = "green";
                    row[6].style.backgroundColor = "green";
                }else if( time >= 88){
                    row[3].style.backgroundColor = "green";
                    row[4].style.backgroundColor = "green";
                    row[5].style.backgroundColor = "green";
                }else if( time >= 44){
                    row[3].style.backgroundColor = "green";
                    row[4].style.backgroundColor = "green";
                } else {
                    row[3].style.backgroundColor = "green";
                }
            } else {
                if( time >= 220){
                    row[3].style.backgroundColor = "green";
                    row[4].style.backgroundColor = "green";
                    row[5].style.backgroundColor = "green";
                    row[6].style.backgroundColor = "green";
                    row[7].style.backgroundColor = "green";
                    row[8].style.backgroundColor = "green";
                }else if( time >= 176){
                    row[3].style.backgroundColor = "green";
                    row[4].style.backgroundColor = "green";
                    row[5].style.backgroundColor = "green";
                    row[6].style.backgroundColor = "green";
                    row[7].style.backgroundColor = "green";
                }else if( time >= 132){
                    row[3].style.backgroundColor = "green";
                    row[4].style.backgroundColor = "green";
                    row[5].style.backgroundColor = "green";
                    row[6].style.backgroundColor = "green";
                }else if( time >= 88){
                    row[3].style.backgroundColor = "green";
                    row[4].style.backgroundColor = "green";
                    row[5].style.backgroundColor = "green";
                }else if( time >= 44){
                    row[3].style.backgroundColor = "green";
                    row[4].style.backgroundColor = "green";
                } else {
                    row[3].style.backgroundColor = "green";
                }
            }
        break;
        case "16":
            getCars = document.querySelector('.car-counter');
            if((index == 5 || index == 6) && (getCars == 5 || getCars == 6)){
                if( time >= 220){
                    row[1].style.backgroundColor = "green";
                    row[2].style.backgroundColor = "green";
                    row[3].style.backgroundColor = "green";
                    row[4].style.backgroundColor = "green";
                    row[5].style.backgroundColor = "green";
                    row[6].style.backgroundColor = "green";
                }else if( time >= 176){
                    row[1].style.backgroundColor = "green";
                    row[2].style.backgroundColor = "green";
                    row[3].style.backgroundColor = "green";
                    row[4].style.backgroundColor = "green";
                    row[6].style.backgroundColor = "green";
                }else if( time >= 132){
                    row[3].style.backgroundColor = "green";
                    row[4].style.backgroundColor = "green";
                    row[5].style.backgroundColor = "green";
                    row[6].style.backgroundColor = "green";
                }else if( time >= 88){
                    row[3].style.backgroundColor = "green";
                    row[4].style.backgroundColor = "green";
                    row[5].style.backgroundColor = "green";
                }else if( time >= 44){
                    row[3].style.backgroundColor = "green";
                    row[4].style.backgroundColor = "green";
                } else {
                    row[3].style.backgroundColor = "green";
                }
            } else {
                if( time >= 220){
                    row[3].style.backgroundColor = "green";
                    row[4].style.backgroundColor = "green";
                    row[5].style.backgroundColor = "green";
                    row[6].style.backgroundColor = "green";
                    row[7].style.backgroundColor = "green";
                    row[8].style.backgroundColor = "green";
                }else if( time >= 176){
                    row[3].style.backgroundColor = "green";
                    row[4].style.backgroundColor = "green";
                    row[5].style.backgroundColor = "green";
                    row[6].style.backgroundColor = "green";
                    row[7].style.backgroundColor = "green";
                }else if( time >= 132){
                    row[3].style.backgroundColor = "green";
                    row[4].style.backgroundColor = "green";
                    row[5].style.backgroundColor = "green";
                    row[6].style.backgroundColor = "green";
                }else if( time >= 88){
                    row[3].style.backgroundColor = "green";
                    row[4].style.backgroundColor = "green";
                    row[5].style.backgroundColor = "green";
                }else if( time >= 44){
                    row[3].style.backgroundColor = "green";
                    row[4].style.backgroundColor = "green";
                } else {
                    row[3].style.backgroundColor = "green";
                }
            }
        break;
        case "17":
            getCars = document.querySelector('.car-counter');
            if((index == 5 || index == 6) && (getCars == 5 || getCars == 6)){
                if( time >= 220){
                    row[1].style.backgroundColor = "green";
                    row[2].style.backgroundColor = "green";
                    row[3].style.backgroundColor = "green";
                    row[4].style.backgroundColor = "green";
                    row[5].style.backgroundColor = "green";
                    row[6].style.backgroundColor = "green";
                }else if( time >= 176){
                    row[1].style.backgroundColor = "green";
                    row[2].style.backgroundColor = "green";
                    row[3].style.backgroundColor = "green";
                    row[4].style.backgroundColor = "green";
                    row[6].style.backgroundColor = "green";
                }else if( time >= 132){
                    row[3].style.backgroundColor = "green";
                    row[4].style.backgroundColor = "green";
                    row[5].style.backgroundColor = "green";
                    row[6].style.backgroundColor = "green";
                }else if( time >= 88){
                    row[3].style.backgroundColor = "green";
                    row[4].style.backgroundColor = "green";
                    row[5].style.backgroundColor = "green";
                }else if( time >= 44){
                    row[3].style.backgroundColor = "green";
                    row[4].style.backgroundColor = "green";
                } else {
                    row[3].style.backgroundColor = "green";
                }
            } else {
                if( time >= 220){
                    row[3].style.backgroundColor = "green";
                    row[4].style.backgroundColor = "green";
                    row[5].style.backgroundColor = "green";
                    row[6].style.backgroundColor = "green";
                    row[7].style.backgroundColor = "green";
                    row[8].style.backgroundColor = "green";
                }else if( time >= 176){
                    row[3].style.backgroundColor = "green";
                    row[4].style.backgroundColor = "green";
                    row[5].style.backgroundColor = "green";
                    row[6].style.backgroundColor = "green";
                    row[7].style.backgroundColor = "green";
                }else if( time >= 132){
                    row[3].style.backgroundColor = "green";
                    row[4].style.backgroundColor = "green";
                    row[5].style.backgroundColor = "green";
                    row[6].style.backgroundColor = "green";
                }else if( time >= 88){
                    row[3].style.backgroundColor = "green";
                    row[4].style.backgroundColor = "green";
                    row[5].style.backgroundColor = "green";
                }else if( time >= 44){
                    row[3].style.backgroundColor = "green";
                    row[4].style.backgroundColor = "green";
                } else {
                    row[3].style.backgroundColor = "green";
                }
            }
        break;
        case "18":
            getCars = document.querySelector('.car-counter');
            if((index == 5 || index == 6) && (getCars == 5 || getCars == 6)){
                if( time >= 220){
                    row[1].style.backgroundColor = "green";
                    row[2].style.backgroundColor = "green";
                    row[3].style.backgroundColor = "green";
                    row[4].style.backgroundColor = "green";
                    row[5].style.backgroundColor = "green";
                    row[6].style.backgroundColor = "green";
                }else if( time >= 176){
                    row[1].style.backgroundColor = "green";
                    row[2].style.backgroundColor = "green";
                    row[3].style.backgroundColor = "green";
                    row[4].style.backgroundColor = "green";
                    row[6].style.backgroundColor = "green";
                }else if( time >= 132){
                    row[3].style.backgroundColor = "green";
                    row[4].style.backgroundColor = "green";
                    row[5].style.backgroundColor = "green";
                    row[6].style.backgroundColor = "green";
                }else if( time >= 88){
                    row[3].style.backgroundColor = "green";
                    row[4].style.backgroundColor = "green";
                    row[5].style.backgroundColor = "green";
                }else if( time >= 44){
                    row[3].style.backgroundColor = "green";
                    row[4].style.backgroundColor = "green";
                } else {
                    row[3].style.backgroundColor = "green";
                }
            } else {
                if( time >= 220){
                    row[3].style.backgroundColor = "green";
                    row[4].style.backgroundColor = "green";
                    row[5].style.backgroundColor = "green";
                    row[6].style.backgroundColor = "green";
                    row[7].style.backgroundColor = "green";
                    row[8].style.backgroundColor = "green";
                }else if( time >= 176){
                    row[3].style.backgroundColor = "green";
                    row[4].style.backgroundColor = "green";
                    row[5].style.backgroundColor = "green";
                    row[6].style.backgroundColor = "green";
                    row[7].style.backgroundColor = "green";
                }else if( time >= 132){
                    row[3].style.backgroundColor = "green";
                    row[4].style.backgroundColor = "green";
                    row[5].style.backgroundColor = "green";
                    row[6].style.backgroundColor = "green";
                }else if( time >= 88){
                    row[3].style.backgroundColor = "green";
                    row[4].style.backgroundColor = "green";
                    row[5].style.backgroundColor = "green";
                }else if( time >= 44){
                    row[3].style.backgroundColor = "green";
                    row[4].style.backgroundColor = "green";
                } else {
                    row[3].style.backgroundColor = "green";
                }
            }
        break;
    }
}

