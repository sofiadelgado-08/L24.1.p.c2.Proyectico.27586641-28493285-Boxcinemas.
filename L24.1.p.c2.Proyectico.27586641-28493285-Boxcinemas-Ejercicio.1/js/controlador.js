import Cl_mCliente from "./Cliente.js";
import Cl_vCliente from "./vCliente.js";
import Cl_vCine from "./vCine.js";
import Cl_mCine from "./Cine.js";

export default class Cl_controlador {
    constructor() {
        this.mCine = new Cl_mCine();
        this.vCliente = new Cl_vCliente(this);
        this.vCine = new Cl_vCine(this); 
    }
    mostrarVistaCliente() {
        this.vCine.ocultar();
        this.vCliente.mostrar();
    }
    mostrarvistaCine() {
        this.vCliente.ocultar();
        this.vCine.mostrar();
    }
    agregarCliente({familia, personas, dia, precioEntrada}){
        let cliente = new Cl_mCliente ({familia, personas, dia, precioEntrada});
        this.mCine.procesarCliente(cliente);
        this.vCine.reportarCliente({
            familia: cliente.familia,
            personas: cliente.personas,
            dia: cliente.dia,
            precioEntrada: cliente.precioEntrada,
            montoapagar: cliente.montoapagar(),
            familiaquepagomas: this.mCine.pagomayor(),
            prompagodiaslunes: this.mCine.prompagolunes(),
            totalfinal: this.mCine.totalfinal(),
        });
        this.mostrarvistaCine();
    }
} 