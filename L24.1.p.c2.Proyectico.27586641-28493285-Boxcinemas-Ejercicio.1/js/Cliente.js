export default class Cl_mCliente {
    constructor ({familia, personas, dia, precioEntrada}){
        this.familia = familia;
        this.personas = personas;
        this.dia = dia;
        this.precioEntrada = 3; //precio base de la entrada
    }
    set personas (p) {
        this._personas = +p;
    }
    get personas () {
        return this._personas;
    }
    set dia (d) {
        this._dia = +d;
    }
    get dia () {
        return this._dia;
    }
    montoapagar() {
        return this.precioEntrada * this.personas;
    }
}
