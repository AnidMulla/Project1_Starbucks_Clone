let x = document.getElementById('first');

function image1(callback) {
    setTimeout(() => {
        document.getElementById("anid").src = "img/zombie4.png";
        document.getElementById("name1").innerHTML = "Anid";
        callback();
    }, 2000);

}

function image2(callback) {
    setTimeout(() => {
        document.getElementById("nitin").src = "img/zombie3.png";
        document.getElementById("name2").innerHTML = "Nitin";
        callback();
    }, 2000);

}

function image3(callback) {
    setTimeout(() => {
        document.getElementById("deb").src = "img/zombie2.png";
        document.getElementById("name3").innerHTML = "Deb";
        callback();
    }, 2000);

}

function image4() {
    setTimeout(() => {
        document.getElementById("nitu").src = "img/zombie1.png";
        document.getElementById("name4").innerHTML = "Nitu";
    }, 2000);

}
image1(() => {
    image2(() => {
        image3(() => {
            image4();
        });
    });
});
