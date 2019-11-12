const wavesColors = require('../constants/wavesColors.json')
let delegate;

module.exports = function (options = {}) {
    return (p5) => {
        delegate = options.delegate;
        let mountains = []

        // NOTE: Set up is here
        p5.setup = function () {
            const canvas = p5.createCanvas(p5.windowWidth, p5.windowHeight);
            canvas.parent('#canvas');// Display p5 canvas on optional position
            growMountains(p5, mountains)
            p5.background(230);
            mountains.forEach(m => m.display(p5))
        }

        // NOTE: Draw is here
        p5.draw = function () {
            p5.background(230)
            mountains.forEach(m => m.display(p5))
            notifyCurrentTime()
        }

        p5.windowResized = function () {
            p5.resizeCanvas(p5.windowWidth, p5.windowHeight)
        }

        p5.myCustomRedrawAccordingToNewPropsHandler = function (newProps) {
            !newProps.isPlaying ? p5.frameRate(0) : p5.frameRate(30)
        }

        p5.keyPressed = function () {
            if (p5.keyCode === 39 || p5.keyCode === 37) {
                // left or right arrow keys
                mountains = []
                growMountains(p5, mountains)
                p5.background(230)
                mountains.forEach(m => m.display(p5))
            }
        }

        function notifyCurrentTime() {
            if (delegate !== undefined) {
                const message = p5.hour() + ":" + p5.minute() + ":" + p5.second();
                delegate(message);
            }
        }
    }
}

class Mountain {
    constructor (color, y, p5) {
        this.c = color
        this.y = y
        this.offset = p5.random(100, 200)
        this.t = 0
    }

    display (p5) {
        let xoff = 0

        p5.noStroke()
        p5.fill(this.c)

        p5.noiseDetail(1.7, 1.3)

        p5.beginShape()
        for (let x = 0; x <= p5.width + 25; x += 25) {
            let yoff = p5.map(
                p5.noise(xoff + this.offset, this.t + this.offset),
                0,
                1,
                0,
                200
            )
            let y = this.y - yoff
            p5.vertex(x, y)

            xoff += 0.08
        }
        p5.vertex(p5.width + 100, p5.height)
        p5.vertex(0, p5.height)
        p5.endShape(p5.CLOSE)

        this.t += 0.005
    }
}

function growMountains (p5, mountains) {
    let colorSelected = p5.random(wavesColors)
    let c = p5.color(colorSelected.hex)

    const colorNameDiv = document.getElementById('color-name')
    if (colorNameDiv) colorNameDiv.innerText = colorSelected.name

    new Array(5).fill(1).map((_, i) => {
        let a = 255 - 50 * i
        c.setAlpha(a)
        let h = p5.height - 50 * i
        let m = new Mountain(c, h, p5)
        mountains.push(m)
    })
}