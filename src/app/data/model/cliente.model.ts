export class Cliente {
  // key: string;          // id firebase
  CLI_RUT:	string;       // RUT
  CLI_NOM:	string;       // NOMBRE
  CLI_DIR:	string;       // DIRECCION
  CLI_DIR2: string;      // DIRECCION2
  CLI_COM:	string;       // COMUNA
  CLI_CIU:	string;       // CIUDAD
  CLI_FON:	string;       // FONO
  CLI_FAX:	string;       // FAX
  CLI_CAS:	string;       // CASILLA
  CLI_EML:	string;       // EMAIL
  CLI_EML2: string;      // EMAIL2
  CLI_SRV_EML:	string;   // ENVIO EMAIL
  CLI_SRV_FAX:	string;   // ENVIO FAX
  CLI_SRV_MAI:	string;   // _
  CLI_COD_SUC:	number;   // CODIGO SUCURSAL
  CLI_RUT_EJE_CTA:	string; // RUT EJECUTIVO CE CUENTAS
  CLI_TIP_CLI:	string;   // FUENTE CLIENTE
  CLI_RUT_EJE_CMX:	string; // RUT EJE. COMEX
  CLI_RUT_ESP_CMX:	string; // RUT ESP. COMEX
  CLI_NUM_CTL:	number;   // SEGMENTO
  CLI_SEX:	string;       // SEXO
  CLI_NUM_DIA_VNO:	number; // DIAS DE VENCIMIENTO

   constructor(
    CLI_RUT:	string,
    CLI_NOM:	string,
    CLI_DIR:	string,
    CLI_DIR2:	string,
    CLI_COM:	string,
    CLI_CIU:	string,
    CLI_FON:	string,
    CLI_FAX:	string,
    CLI_CAS:	string,
    CLI_EML:	string,
    CLI_EML2:	string,
    CLI_SRV_EML:	string,
    CLI_SRV_FAX:	string,
    CLI_SRV_MAI:	string,
    CLI_COD_SUC:	number,
    CLI_RUT_EJE_CTA:	string,
    CLI_TIP_CLI:	string,
    CLI_RUT_EJE_CMX:	string,
    CLI_RUT_ESP_CMX:	string,
    CLI_NUM_CTL:	number,
    CLI_SEX:	string,
    CLI_NUM_DIA_VNO:	number
   ) {
    this.CLI_RUT = CLI_RUT;
    this.CLI_NOM = CLI_NOM;
    this.CLI_DIR = CLI_DIR;
    this.CLI_DIR2 = CLI_DIR2;
    this.CLI_COM = CLI_COM;
    this.CLI_CIU = CLI_CIU;
    this.CLI_FON = CLI_FON;
    this.CLI_FAX = CLI_FAX;
    this.CLI_CAS = CLI_CAS;
    this.CLI_EML = CLI_EML;
    this.CLI_EML2 = CLI_EML2;
    this.CLI_SRV_EML = CLI_SRV_EML;
    this.CLI_SRV_FAX = CLI_SRV_FAX;
    this.CLI_SRV_MAI = CLI_SRV_MAI;
    this.CLI_COD_SUC = CLI_COD_SUC;
    this.CLI_RUT_EJE_CTA = CLI_RUT_EJE_CTA;
    this.CLI_TIP_CLI = CLI_TIP_CLI;
    this.CLI_RUT_EJE_CMX = CLI_RUT_EJE_CMX;
    this.CLI_RUT_ESP_CMX = CLI_RUT_ESP_CMX;
    this.CLI_NUM_CTL = CLI_NUM_CTL;
    this.CLI_SEX = CLI_SEX;
    this.CLI_NUM_DIA_VNO = CLI_NUM_DIA_VNO;
   }
}


