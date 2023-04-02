class Animal {
    constructor(name) {

        this.name =name;
        

    }
    

}


class Rabbit extends Animal {
    constructor(name){
        super(name)
        // this.name = name;
        this.created = Date.now()
    }
}

let rabbit = new Rabbit("White rabbit");
alert(rabbit);
console.log(rabbit)




class Clock {
    constructor( { template }) {
        this.template = template;
    }
    render() {
        let date = newDate();

        let hours = date.getHours();
        if ( hours < 10) hours = '0' + hours;

        let mins = date.getMinutes()
        if ( mins < 10) mins = '0' + mins;

        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;
        
        let output = this.template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs)
        
        console.log(output);
    }

    stop(){
        clearInterval(this.timer)
    }
    start(){
        this.render();
        this.timer = setInterval(() => this.render(), 1000);
    }
}


class ExtendedClock extends Clock{
    constructor(template){
        super(template);
        this.template = template;
        let accuracy = 1000 + "ms" ;
        this.accuracy = accuracy;
    }
    
}

let clock = new ExtendedClock("clock")
console.log(clock)


class Phanso {
        constructor(tu_so,mau_so){
            this.tu_so = tu_so;
            this.mau_so = mau_so;
            let phan_so = tu_so + "/"+ mau_so 
            this.phan_so = phan_so    
        }
        
        
}


