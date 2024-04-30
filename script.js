// Make a project in which the random sized circle generated where the cursor click on body but the limit of circle made will ont be more than 2 and also check if the circles are intersecting each other or not//

let circleCoOrdinate = [];

document.addEventListener('click', (e) => {
    let x = e.clientX;
    let y = e.clientY;

    let circleRadius = Math.round(Math.random() * (100 - 50) + 50);

    let Circle = document.createElement("div");
    Circle.className = "circle";
    Circle.style.width = `${circleRadius}px`;
    Circle.style.height = `${circleRadius}px`;
    Circle.style.top = y - (circleRadius / 2) + "px";
    Circle.style.left = x - (circleRadius / 2) + "px";

    document.body.append(Circle);

    circleCoOrdinate.push({ x, y, r: circleRadius } );
    console.log(circleCoOrdinate);


    // Condition
    let countCircle = document.querySelectorAll(".circle");
    if (countCircle.length > 2) {
        countCircle.forEach(element => {
            document.body.removeChild(element)

        });
        FindIfCircleIntersecting()
        circleCoOrdinate = []
    }

    function FindIfCircleIntersecting() {
        for (let i = 0; i < circleCoOrdinate.length; i++) {
            for (let j = i + 1; j < circleCoOrdinate.length; j++) {
                let x1 = circleCoOrdinate[i].x;
                let y1 = circleCoOrdinate[i].y;
                let r1 = circleCoOrdinate[i].r;
                let x2 = circleCoOrdinate[j].x;
                let y2 = circleCoOrdinate[j].y;
                let r2 = circleCoOrdinate[j].r;
                
                let distance = Math.hypot(x1 - x2, y1 - y2);
                
                if (distance < r1 + r2) {
                    alert("Circles intersect!");
                    return;
                }
            }
        }
        alert("No Intersection detected")
    }
})