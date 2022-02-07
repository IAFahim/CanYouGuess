const canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
class PickPercentage {
    constructor(ctx) {
        this._ctx = ctx;
        this.setAutoSize();
        this.update();
    }
    setAutoSize() {
        addEventListener("resize", () => {
            this.update();
        });
    }
    draw() {
        this._ctx.fillRect(150, 150, 500, 100);
    }
    update() {
        canvas.width = innerWidth;
        canvas.height = innerHeight;
        this._ctx.clearRect(0, 0, innerWidth, innerHeight);
        this.draw();
    }
}
let pickPercentage = new PickPercentage(ctx);
pickPercentage.setAutoSize();
//# sourceMappingURL=index.js.map