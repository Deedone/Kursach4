import drawUtils from "./drawUtils";
import {Mode, State, Node, ModeUtils} from "./types";


export default class AddMode extends ModeUtils implements Mode{
    held: Node|null;

    mousePress(x: number, y:number):void {
        this.held = this.findNode(x,y);
        if (this.held){
            console.log("Found node: " + this.held);
        }
    }
    mouseRelease(x: number, y:number):void {
        if(this.held){
            this.held = null;
        }else {
            let n = new Node();
            n.x = x;
            n.y = y;
            n.radius = 20;
            this.state.nodes.push(n);

        }
        
    }
    mouseDrag(x: number, y:number):void {
        if(this.held){
            this.held.x = x;
            this.held.y = y;
        }
    }

    draw(draw:drawUtils){

    }
}