



class Auto {


    constructor(marca, modelo, year) {
        
        this.marca=marca;
        this.modelo=modelo;
        this.year=year;
    }

    mostrarAuto(){
       return `Este Vehiculo es ${(this.marca)} ${(this.modelo)} ${(this.year)}`
        
    }


}


const miCarroToyota = new Auto(`Toyota`, `Corolla`, 2024)

const miCarroHonda = new Auto(`Honda`, `Elenta`, 2024)


console.log(miCarroToyota.mostrarAuto());
console.log(miCarroHonda.mostrarAuto());