function Circle(r){
    this.r = r;
    
    this.getArea = function(){
        return this.r * this.r *3.14;
    }
}

var cir1 = new Circle(2);
console.log(cir1.getArea());