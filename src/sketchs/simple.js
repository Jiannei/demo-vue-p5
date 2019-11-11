let delegate;
let p5;

function notifyCurrentTime() {
    if (delegate !== undefined) {
        const message = p5.hour() + ":" + p5.minute() + ":" + p5.second();

        delegate(message);
    }
}

export  function main(_p5) {
    p5 = _p5
    // NOTE: Set up is here
    p5.setup = function () {
        let canvas = p5.createCanvas(600, 400);
        canvas.parent('#canvas');// Display p5 canvas on optional position
    }

    // NOTE: Draw is here
    p5.draw = function () {
        p5.background(102);
        p5.ellipse(50, 50, 80, 80);

        notifyCurrentTime();
    }
}

export  function setDelegate(_delegate) {
     delegate = _delegate;
}