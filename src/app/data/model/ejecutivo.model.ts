export class Ejecutivo {
    EJE_RUT: string; // RUT
    EJE_COD: number; // CODIGO
    EJE_TIP: number; // TIPO
    EJE_NOM: string; // NOMBRE
    EJE_SUC: string; // SUCURSAL
    EJE_TEL: string; // TELEFONO
    EJE_FAX: string; // FAX
    EJE_EML: string; // EMAIL

    constructor(
        EJE_RUT: string,
        EJE_COD: number,
        EJE_TIP: number,
        EJE_NOM: string,
        EJE_SUC: string,
        EJE_TEL: string,
        EJE_FAX: string,
        EJE_EML: string,
    ) {
        this.EJE_RUT = EJE_RUT;
        this.EJE_COD = EJE_COD;
        this.EJE_TIP = EJE_TIP;
        this.EJE_NOM = EJE_NOM;
        this.EJE_SUC = EJE_SUC;
        this.EJE_TEL = EJE_TEL;
        this.EJE_FAX = EJE_FAX;
        this.EJE_EML = EJE_EML;
    }
}
