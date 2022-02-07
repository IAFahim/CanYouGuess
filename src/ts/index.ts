const canvas = document.getElementById("canvas") as HTMLCanvasElement
let ctx: CanvasRenderingContext2D = canvas.getContext("2d")

class PickPercentage {
    _ctx: CanvasRenderingContext2D;

    constructor(ctx: CanvasRenderingContext2D) {
        this._ctx = ctx
        this.setAutoSize()
        this.update()
    }

    setAutoSize() {
        addEventListener("resize", () => {
            this.update()
        })
    }

    draw() {
        this._ctx.fillRect(150, 150, 100, 1000)
    }

    update() {
        canvas.width = innerWidth
        canvas.height = innerHeight
        this._ctx.clearRect(0, 0, innerWidth, innerHeight)
        this.draw()
    }
}

let pickPercentage = new PickPercentage(ctx)
pickPercentage.setAutoSize()


