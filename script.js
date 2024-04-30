

document.addEventListener('click', (e) => {
    let x = e.clientX;
    let y = e.clientY;

    let circleRadius = Math.round(Math.random() * (100 - 50) + 50);

    let Circle = document.createElement("div");
    Circle.className = "circle";
    Circle.style.width = circleRadius + "px";
    Circle.style.height = circleRadius+ "px"
    Circle.style.top = y-(circleRadius/2) + "px";
    Circle.style.left = x-(circleRadius/2) + "px";

    document.body.append(Circle);


    // Condition
    let countCircle = document.querySelectorAll(".circle");
    if (countCircle.length > 2) {
        countCircle.forEach(element => {
            document.body.removeChild(element)
        });
    }
})