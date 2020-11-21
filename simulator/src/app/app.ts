console.log("TEst")
import $ from "cash-dom";
import "../templates/style.css";
import drawUtils from "./drawUtils";
import {Node, Link, State, Mode} from "./types";
import AddMode from "./addMode";
import LinkMode from "./linkMode";


enum MODE {
    ADD,
    LINK,
    SEND
}

let draw = new drawUtils("main");
let mode:MODE = MODE.ADD;
let needredraw = true;
const canvas = document.getElementById("main") as HTMLCanvasElement;
let state: State = {
    nodes: [],
    links: []
};

const add = new AddMode(state);
const link = new LinkMode(state);

let modeMap = new Map<MODE, Mode>();
modeMap.set(MODE.ADD, add);
modeMap.set(MODE.LINK, link);
console.log(modeMap, add);

//Main
$(function () {
    setCallbacks();
});

function canvasMouseDown(event:MouseEvent) {
    let x = event.pageX - canvas.offsetLeft - canvas.clientLeft;
    let y = event.pageY - canvas.offsetTop - canvas.clientTop;

    modeMap.get(mode).mousePress(x,y);
    needredraw = true;
}
 
function canvasMouseUp( event:MouseEvent ){
    let x = event.pageX - canvas.offsetLeft - canvas.clientLeft;
    let y = event.pageY - canvas.offsetTop - canvas.clientTop;

    modeMap.get( mode).mouseRelease(x, y);
    needredraw = true;
}
function canvasMouseMove( event:MouseEvent ){
    let x = event.pageX - canvas.offsetLeft - canvas.clientLeft;
    let y = event.pageY - canvas.offsetTop - canvas.clientTop;

    modeMap.get( mode).mouseDrag(x, y);
    needredraw = true;
}

function addModeEvent(event:Event){
    console.log("Add mode");
    mode = MODE.ADD;
}
function linkModeEvent(event:Event){
    console.log("Link mode");
    mode = MODE.LINK;
}

function setCallbacks(){
    $("#addmode").on("click", addModeEvent);
    $("#linkmode").on("click", linkModeEvent);
    $("canvas#main").on("mousedown", canvasMouseDown)
    $("canvas#main").on("mouseup", canvasMouseUp)
    $("canvas#main").on("mousemove", canvasMouseMove)
    requestAnimationFrame(redraw);
}

function redraw(){
    requestAnimationFrame(redraw);
    if(!needredraw){
        return;
    }
    needredraw = false;
    console.log("Redraw");
    draw.clear();
    for(let node of state.nodes){
        draw.circle(node.x,node.y,node.radius);
    }
    for(let link of state.links){
        draw.line(link.from.x, link.from.y, link.to.x, link.to.y);
    }
    modeMap.get( mode).draw(draw);

}