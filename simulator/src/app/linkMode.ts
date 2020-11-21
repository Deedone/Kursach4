
import drawUtils from './drawUtils'
import {Mode, State, Node, ModeUtils, Link  } from "./types";


export default class LinkMode extends ModeUtils implements Mode{
    start: Node|null;
    end: Node|null;
    lastx:number;
    lasty:number;
    mousePress(x: number, y:number):void {
        this.start = this.findNode(x,y);

    }
    mouseRelease(x: number, y:number):void {
        this.end = this.findNode(x,y);
        console.log(this.start, this.end);
        if (this.start && this.end){
            let l = new Link();
            l.from = this.start;
            l.to = this.end;
            l.weight = 1;
            this.state.links.push(l);
        }
        this.end = this.start = null;
    }
    mouseDrag(x: number, y:number):void {
        this.lastx = x;
        this.lasty = y;
        
    }
    draw(draw:drawUtils):void {
        if(this.start){
            draw.line(this.start.x, this.start.y, this.lastx, this.lasty);
        }
    }
}