export default class Cl_vCine {
    constructor(controlador) {
        this.vista = document.getElementById("mainForm");
        this.tabla = document.getElementById("mainForm_tabla");
        this.btAgregar = document.getElementById("mainForm_btAgregar");
        this.lblDineroinicial = document.getElementById("mainForm_lblDineroinicial");
        this.lblFamiliaquepagomas = document.getElementById("mainForm_lblFamiliaquepagomas");
        this.lblPrompagodiaslunes = document.getElementById("mainForm_lblPrompagodiaslunes");
        this.lblTotalfinal = document.getElementById("mainForm_lblTotalfinal");
        this.btAgregar.onclick = () => controlador.motrarVistaCliente();
    }
    mostrar() {
        this.vista.hidden = false;
    }
    ocultar(){
        this.vista.hidden = true;
    }
    
    reportarCliente({
        familia,
        personas,
        dia,
        montoapagar,
        dineroinicial,
        acummontopagar,
        pagomayor,
        Prompagolunes,
        totalfinal
    }) {
        this.tabla.innerHTML += `
        <tr>
        <td>${familia}</td>
        <td>${personas}</td>
        <td>${dia}</td>
        <td>${montoapagar}</td>
        </tr>`;
        this.lblFamiliaquepagomas = pagomayor;
        this.lblPrompagodiaslunes = Prompagolunes,
        this.lblDineroinicial = dineroinicial;
        this.lblTotalfinal = totalfinal;
    }
}