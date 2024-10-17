export default class Cl_mCine {
    constructor(dineroinicial) {
        this.dineroinicial = dineroinicial;
        this.acummontoapagar = 0;
        this.mayorpago = 0;
        this.totalfinal = 0;
        this.contdia = 0;
        this.contdialunes = 0;
    }

procesarCliente(cliente) {
    this.acummontoapagar += cliente.montoapagar();
}

pagomayor() {
    return this.acummontoapagar;
}

prompagolunes() {
    if (this.dia === 1) this.contdialunes++;
    this.contdia++;
    return this.acummontoapagar / this.contdialunes;
}

totalfinal(){
    return (this.dineroinicial + this.acummontoapagar);
}
}

