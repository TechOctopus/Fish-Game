export default class BackgroundController{
    constructor(bacground){
        this.bacground = bacground;
    }
    update(){
        this.bacground.x1 -= 1;
        if(this.bacground.x1 < -this.bacground.w) this.bacground.x1 = this.bacground.w - 1;
        this.bacground.x2 -= 1;
        if(this.bacground.x2 < -this.bacground.w) this.bacground.x2 = this.bacground.w - 1;
    }
}