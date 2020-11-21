import { Context } from "cash-dom";


export default class drawUtils {
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    w:number;
    h:number;

    constructor(canvasId:string){
        this.canvas = document.getElementById(canvasId) as HTMLCanvasElement;
        this.canvas.width = this.canvas.parentElement.clientWidth;
        this.canvas.height = this.canvas.parentElement.clientHeight;

        this.ctx = this.canvas.getContext("2d");
        this.w = this.canvas.width;
        this.h = this.canvas.height;
    }

    clear(){
        this.ctx.fillStyle = "#eeeeee";
        this.ctx.fillRect(0,0,this.w, this.h);
    }

    circle(x:number, y:number, radius:number) {
        this.ctx.beginPath();
        this.ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
        this.ctx.fillStyle = 'green';
        this.ctx.fill();
        this.ctx.lineWidth = 5;
        this.ctx.strokeStyle = '#003300';
        this.ctx.stroke();
    }

    line(x1: number, y1: number, x2: number, y2: number){
        this.ctx.beginPath();
        this.ctx.moveTo(x1, y1);
        this.ctx.lineTo(x2, y2);
        this.ctx.strokeStyle = "#000000";
        this.ctx.stroke();
    }

}