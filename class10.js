class Pi{

    constructor(pi){
        this.pi = pi;
    }

    get piValue(){
        return this.pi;
    }

    set piValue(pi){
        this.pi = pi;
    }

    clearPiValue(){
        this.pi = 0;
    }

    calculateViete(){
        this.pi = (2 ** 4) / (Math.sqrt(2) * Math.sqrt(2 + Math.sqrt(2)) * Math.sqrt(2 + Math.sqrt(2 + Math.sqrt(2))));
    }

    calculateSeries(precision){
        let result = 0;
        for(let k = 0; k <= precision; k++){
            result += (8 / (8 * k + 2) + 4 / (8 * k + 3) + 4 / (8 * k + 4) - 1 / (8 * k + 7)) / 16 ** k;
        }
        this.pi = result / 2; 
    }

    calculateMonteCarlo(precision){
        let innerPointsCount = 0; //кількість точок що потрапила у коло
        for(let i = 0; i < precision; i++){
            let random_x = Math.random(); // кидаємо випадкову точку (задаємо її координати)
            let random_y = Math.random();
            if (Math.sqrt((random_x - 0.5)**2 + (random_y - 0.5)**2) <= 0.5){
                innerPointsCount++; // перевіряємо чи вона потрапила у коло що в квадраті
            }
        }
        this.pi = 4 * innerPointsCount / precision; 
    }
}

const pi = new Pi(0);

pi.calculateViete();
console.log(pi
.piValue / Math.PI * 100);

pi.calculateSeries(100000);
console.log(pi
.piValue / Math.PI * 100);

pi.calculateMonteCarlo(1000000);
console.log(pi
.piValue / Math.PI * 100);

pi.piValue = Math.PI;
console.log(pi
.piValue);