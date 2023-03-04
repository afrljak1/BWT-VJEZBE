class Papir{

    constructor(visina, sirina){//konstruktor
        this.visina=visina;
        this.sirina=sirina;
        this.niz_krugova=[];
    }

    /*get obim(){//formuula za racunanje obima kruga
       return 2*r*Math.PI; 
    }

    get povrsina(){//formula za racunanje povrsine kruga
        return r*r*Math.PI;
    }
*/
get povrsina() {
    return Math.pow(this.precnik/2,2)*Math.PI;
}

get obim() {
    return this.precnik*Math.PI;
}

    dodajKrug(k){
        if(k.visina<this.visina || k.sirina<this.sirina){

           this.niz_krugova.push(k);//dodavanje kruga k u niz krugova
           //this.niz_krugova.unshift(k);//moguce je koristiti i funkciju unshift ili neku drugu srodnu pomocnu funkciju

        }else console.log('Krug sa centrom ${k.visina}, ${k.sirina} i precnikom ${k.precnik} ne moze stati na papir');
        return 0;
       // break;

    }

    ispisisvekrugove(){
        var temp=this.niz_krugova.values();
        for(let elements of temp){
            console.log('Krug (${temp.visina},${temp.sirina}, ${temp.precnik}) sa povrsinmom ${temp.povrsina}');
        };
    }
}

