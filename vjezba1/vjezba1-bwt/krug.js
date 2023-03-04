class Krug{
 
    constructor(x,y,precnik){
        this.x=x;
        this.y=y;
        this.precnik = precnik;
    }
  
    get povrsina() {
        return Math.pow(this.precnik/2,2)*Math.PI;
    }
  
    get obim() {
        return this.precnik*Math.PI;
    }
  
    presjek(krug2) {
       return Math.abs(krug2.x-this.x)<(krug2.precnik+this.precnik)
           || Math.abs(krug2.y-this.y)<(krug2.precnik+this.precnik);
    }
    
  
 }
 