let chodci=[];
function setup() {
  var canvas = createCanvas(400, 400);
canvas.parent('sketch-holder');
  background( '#55DDE0');
for (var i = 0; i < 20; i++) {
chodci[i]=new Chodec(random(0,400),random(0,400))
}
}
function draw() {
  for (var i = 0; i < chodci.length; i++) {
  chodci[i].nakresliSa();
  chodci[i].update();
  }

}
class Chodec {
  constructor(x,y) {
    this.x=x;
    this.y=y;
  }
  nakresliSa(){
      point(this.x,this.y);
  }
  update(){
    let r=random([1,2,3,4]);
    if (r==1) {
      this.y=this.y-1;
    }
    if (r==3) {
      this.y=this.y+1;
    }
    if (r==4) {
      this.x=this.x-1;
    }
    if (r==1) {
        this.x=this.x+1;
    }
  }
}
