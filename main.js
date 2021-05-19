canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
car_width = 100;
car_height = 90;
car_x = 10;
car_y = 10;
background_image = "racing.jpg";
car_image = "car1.png";

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    car_imgTag = new Image();
    car_imgTag.onload = uploadcar;
    car_imgTag.src = car_image;
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar() {
    ctx.drawImage(car_imgTag, car_x, car_y, car_width, car_height);
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == '38') {
        up();
        console.log("up");
    }
    if (keyPressed == '40') {
        down();
        console.log("down");
    }
    if (keyPressed == '37') {
        left();
        console.log("left");
    }
    if (keyPressed == '39') {
        right();
        console.log("right");
    }
}

function up() {
    if (car_y >= 0) {
        car_y = car_y - 10;
        console.log("when up arrow is pressed, x= " + car_x + " | y=" + car_y);
        uploadBackground();
        uploadcar();
    }
}

function down() {
    if (car_y <= 500) {
        car_y = car_y + 10;
        console.log("when down arrow is pressed, x= " + car_x + " | y=" + car_y);
        uploadBackground();
        uploadcar();
    }
}

function left() {
    if (car_x >= 0) {
        car_x = car_x - 10;
        console.log("when left arrow is pressed, x= " + car_x + " | y=" + car_y);
        uploadBackground();
        uploadcar();
    }
}

function right() {
    if (car_x <= 700) {
        car_x = car_x + 10;
        console.log("when right arrow is pressed, x= " + car_x + " | y=" + car_y);
        uploadBackground();
        uploadcar();
    }
}