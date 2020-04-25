var rootStage = new PIXI.Container();
var renderer = PIXI.autoDetectRenderer(512,512, {transparent: true, resolution: 1});
var window = document.getElementById('display');

document.getElementById('display').appendChild(renderer.view);

PIXI.utils.sayHello();

class Line extends PIXI.Graphics {
    constructor(points, lineSize, lineColor) {
        super();
        
        var s = this.lineWidth = lineSize || 5;
        var c = this.lineColor = lineColor || "0xF00F0F";
        
        this.points = points;

        this.lineStyle(s, c)

        this.moveTo(points[0], points[1]);
        this.lineTo(points[2], points[3]);
    }
    
    updatePoints(p) {
        
        var points = this.points = p.map((val, index) => val || this.points[index]);
        
        var s = this.lineWidth, c = this.lineColor;
        
        this.clear();
        this.lineStyle(s, c);
        this.moveTo(points[0], points[1]);
        this.lineTo(points[2], points[3]);
        renderer.render(rootStage);
    }
    showLine() {
        rootStage.addChild(this);
        renderer.render(rootStage)
    }
}

var line = new Line([200, 50, 0, 0]);



window.addEventListener("mousemove", e => line.updatePoints([null, null, e.clientX, e.clientY]), false);
window.addEventListener("pointerdown", e => line.updatePoints([e.clientX, e.clientY, null, null]), false);
window.addEventListener("pointerdown", e => line.showLine(), false);
window.addEventListener("pointerup", e => line =new Line([e.clientX, e.clientY, null, null]), false);

renderer.render(rootStage);




