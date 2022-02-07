const canvas = document.getElementById("canvas") as HTMLCanvasElement

class PickPercentage {
    _canvas: HTMLCanvasElement
    _ctx: CanvasRenderingContext2D;
    _x: number;
    _y: number;
    _width: number;
    _height: number;

    constructor(canvas: HTMLCanvasElement) {
        this._canvas = canvas
        this._ctx = canvas.getContext("2d")
        this.setAutoSize()
        this.update()
    }

    setAutoSize() {
        addEventListener("resize", () => {
            this.update()
        })
    }

    draw() {
        this._ctx.fillRect(this._x, this._y, this._width, this._height)
    }

    resizeAlpha_clear(anchor: number) {
        this._canvas.width = innerWidth
        this._canvas.height = innerHeight
        this._ctx.clearRect(0, 0, innerWidth, innerHeight)
        this._width = 1000
        this._height = 100
        this._x = innerWidth * anchor - this._width * anchor;
        this._y = innerHeight * anchor - this._height * anchor;
        console.log(this._x, this._y)
    }

    update() {
        this.resizeAlpha_clear(0.5)
        this.draw()
    }
}

let pickPercentage = new PickPercentage(canvas)
pickPercentage.setAutoSize()


