import drawUtils from './drawUtils'
export class Node {
    x:number;
    y:number;
    radius:number;
}

export class Link {
    from: Node;
    to: Node;
    weight:number;
}

export class State {
    nodes: Node[];
    links: Link[];
}


export class ModeUtils {
    state: State;
    constructor(state: State){
        this.state = state;
    }
    findNode(x:number, y:number):Node|null{
        for(let n of this.state.nodes){
            if(Math.pow(x - n.x, 2) + Math.pow(y - n.y, 2) < Math.pow(n.radius,2)) {
                return n;
            }
        }
        return null;
    }

}

export interface Mode extends ModeUtils {
    state: State;
    mousePress(x: number, y:number):void;
    mouseRelease(x: number, y:number):void;
    mouseDrag(x: number, y:number):void;
    draw(draw:drawUtils)
}