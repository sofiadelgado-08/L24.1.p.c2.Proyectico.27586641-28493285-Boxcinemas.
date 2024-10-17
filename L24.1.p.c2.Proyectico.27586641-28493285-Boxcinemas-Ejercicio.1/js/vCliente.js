export default class Cl_vCliente {
    constructor(controlador) {
        this.vista = document.getElementById("ClienteForm");
        this.inFamilia = document.getElementById("ClienteForm_inFamilia");
        this.inPersonas = document.getElementById("ClienteForm_inPersonas");
        this.inDia = document.getElementById("ClienteForm_inDia");
        this.btAceptar = document.getElementById("ClienteForm_btAceptar");
        this.btAceptar.onclick = () =>
            controlador.agregarCliente({
                familia: this.inFamilia.Value,
                personas: this.inPersonas.Value,
                dia: this.inDia.Value,
            });
            this.ocultar();
    }
    mostrar() {
        this.vista.hidden = false;
    }
    ocultar() {
        this.vista.hidden = true;
    }
}