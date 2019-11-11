export default function(p5) {
    // NOTE: Set up is here
    p5.setup = function () {
        let canvas = p5.createCanvas(600, 400);
        canvas.parent('#canvas');// Display p5 canvas on optional position
    }

    // NOTE: Draw is here
    p5.draw = function () {
        p5.background(102);
        p5.ellipse(50, 50, 80, 80);
    }
}