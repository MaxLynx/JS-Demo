class PI{

    constructor(pi){
        this.pi = pi;
    }

    resetPI(){
        this.pi = 0;
    }

    get PI(){
        return this.pi;
    }

    set PI(pi){
        this.pi = pi;
    }


    calculatePILeibniz(precision){
        let result = 0;
        for(let k = 0; k <= precision; k++){
            result +=  (0-1)**k / (k * 2 + 1);
        }
        this.pi = result * 4; 
    }

    calculatePIMultipications(precision){
        let result = 1;
        for(let k = 1; k < precision; k++){
            result *= k*k / (k*k - (2/3)**2);
        }
        this.pi = 3 * Math.sqrt(3) * result / 4; 
    }

    calculatePIMonteCarlo(overallPointsCount){
        let circlePointsCount = 0;
        for(let i = 0; i < overallPointsCount; i++){
            let x = Math.random();
            let y = Math.random();
            if (Math.sqrt((x - 0.5)**2 + (y - 0.5)**2) <= 0.5){
                circlePointsCount++;
            }
        }
        this.pi = 4 * circlePointsCount / overallPointsCount; 
    }
}

let pi = new PI(Math.PI);
console.log(pi.PI / Math.PI * 100);

pi.calculatePIMultipications(10000000);
console.log(pi.PI / Math.PI * 100);

pi.calculatePILeibniz(1000000);
console.log(pi.PI / Math.PI * 100);

pi.calculatePIMonteCarlo(1000000);
console.log(pi.PI / Math.PI * 100);

pi.PI = 3.14;
console.log(pi.PI / Math.PI * 100);