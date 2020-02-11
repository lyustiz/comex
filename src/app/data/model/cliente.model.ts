export class Cliente {
  cliRut:	string;       // RUT
  cliNom:	string;       // NOMBRE
  cliDir:	string;       // DIRECCION
  cliDir2: string;      // DIRECCION2
  cliCom:	string;       // COMUNA
  cliCiu:	string;       // CIUDAD
  cliFon:	string;       // FONO
  cliFax:	string;       // FAX
  cliCas:	string;       // CASILLA
  cliEml:	string;       // EMAIL
  cliEml2: string;      // EMAIL2
  cliSrvEml:	string;   // ENVIO EMAIL
  cliSrvFax:	string;   // ENVIO FAX
  cliSrvMai:	string;   // _
  cliCodSuc:	number;   // CODIGO SUCURSAL
  cliRutEjeCta:	string; // RUT EJECUTIVO CE CUENTAS
  cliTipCli:	string;   // FUENTE CLIENTE
  cliRutEjeCmx:	string; // RUT EJE. COMEX
  cliRutEspCmx:	string; // RUT ESP. COMEX
  cliNumCtl:	number;   // SEGMENTO
  cliSex:	string;       // SEXO
  cliNumDiaVno:	number; // DIAS DE VENCIMIENTO

   constructor(
    cliRut:	string,
    cliNom:	string,
    cliDir:	string,
    cliDir2:	string,
    cliCom:	string,
    cliCiu:	string,
    cliFon:	string,
    cliFax:	string,
    cliCas:	string,
    cliEml:	string,
    cliEml2:	string,
    cliSrvEml:	string,
    cliSrvFax:	string,
    cliSrvMai:	string,
    cliCodSuc:	number,
    cliRutEjeCta:	string,
    cliTipCli:	string,
    cliRutEjeCmx:	string,
    cliRutEspCmx:	string,
    cliNumCtl:	number,
    cliSex:	string,
    cliNumDiaVno:	number
   ) {
    this.cliRut = cliRut;
    this.cliNom = cliNom;
    this.cliDir = cliDir;
    this.cliDir2 = cliDir2;
    this.cliCom = cliCom;
    this.cliCiu = cliCiu;
    this.cliFon = cliFon;
    this.cliFax = cliFax;
    this.cliCas = cliCas;
    this.cliEml = cliEml;
    this.cliEml2 = cliEml2;
    this.cliSrvEml = cliSrvEml;
    this.cliSrvFax = cliSrvFax;
    this.cliSrvMai = cliSrvMai;
    this.cliCodSuc = cliCodSuc;
    this.cliRutEjeCta = cliRutEjeCta;
    this.cliTipCli = cliTipCli;
    this.cliRutEjeCmx = cliRutEjeCmx;
    this.cliRutEspCmx = cliRutEspCmx;
    this.cliNumCtl = cliNumCtl;
    this.cliSex = cliSex;
    this.cliNumDiaVno = cliNumDiaVno;
   }
}


