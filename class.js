class PiCalculator{

    constructor(pi){
        this.pi = pi;
    }

    get piValue(){
        return this.pi;
    }

    set piValue(pi){
        this.pi = pi;
    }

    erasePiValue(){
        this.pi = 0;
    }

    calculatePiValueByViete(){
        this.pi = (2 ** 4) / (Math.sqrt(2) * Math.sqrt(2 + Math.sqrt(2)) * Math.sqrt(2 + Math.sqrt(2 + Math.sqrt(2))));
    }

    calculatePiValueByMultipications(precision){
        let result = 1;
        for(let k = 1; k < precision; k++){
            result *= k*k / (k*k - (1/6)**2);
        }
        this.pi = 3 * result; 
    }

    calculatePiValueByMonteCarlo(precision){
        let innerPointsCount = 0;
        for(let i = 0; i < precision; i++){
            let random_x = Math.random();
            let random_y = Math.random();
            if (Math.sqrt((random_x - 0.5)**2 + (random_y - 0.5)**2) <= 0.5){
                innerPointsCount++;
            }
        }
        this.pi = 4 * innerPointsCount / precision; 
    }
}

const piCalculator = new PiCalculator(-1);

piCalculator.calculatePiValueByViete();
console.log(piCalculator.piValue);

piCalculator.calculatePiValueByMultipications(100000);
console.log(piCalculator.piValue);

piCalculator.calculatePiValueByMonteCarlo(1000000);
console.log(piCalculator.piValue);

piCalculator.erasePiValue();
console.log(piCalculator.piValue);

piCalculator.piValue = 3.14;
console.log(piCalculator.piValue);

