// Make a project in which the random sized circle generated where the cursor click on body but the limit of circle made will ont be more than 2 and also check if the circles are intersecting each other or not//

let circleCoOrdinate = [];

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

    circleCoOrdinate.push(x,y);
    console.log(circleCoOrdinate);


    // Condition
    let countCircle = document.querySelectorAll(".circle");
    if (countCircle.length > 2) {
        countCircle.forEach(element => {
            document.body.removeChild(element)
        });
    }
})