
var image = document.getElementById("image1");
var list = [
    "honning1.png", 
    "birokter1.png",
    "biene.png",
    "birokter2.png",
    "birokter3.png",
    "birokter4.png",
    "honning3.png",
    "honning2.png",
    "honning4.png"];

var buttonList = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine"];

var index = 0;

function picture(num) {

    index = num;

    image.style.backgroundImage = "url(img/" + list[num] + ")";

    document.getElementById(buttonList[num]).style.backgroundColor = "#fcedd8";

    for (let i = 0; i < buttonList.length; i++) {
        if (i != num) {
            document.getElementById(buttonList[i]).style.backgroundColor = "";
        }
        
    }
}



function change(direction) {

    if (direction == 0) {

        if (index == 0) {
            picture(8);
        }
        else {
            picture(index - 1);
        }
        
    }

    else if (direction == 1) {

        if (index == 8) {
            picture(0);
            
        } 
        else {
            picture(index + 1);    
        }

    }

} 