export class Sucursal {
  SUC_COD:	string;           // COD NEM
  SUC_GLS:	string;           // GLOSA
  SUC_DIR:	string;           // DIRECCION
  SUC_DIR_NUM:	number;       // DIRECCION Nº
  SUC_DIR_COM:	string;       // COMUNA
  SUC_TEL_NUM:	string;       // NUMERO TELEFONO
  SUC_COD_NUM:	number;       // COD NUMERO
  SUC_FAX_NUM:	string;       // FAX
  FLG_IDC_BANCO_ORIGN:	string;  // IDC
  NRO_NVO_BANCO:	number;     // COD NVO
  GLS_EML_AGT:	string;       // EMAIL AGENTE

  constructor(
    SUC_COD:	string,
    SUC_GLS:	string,
    SUC_DIR:	string,
    SUC_DIR_NUM:	number,
    SUC_DIR_COM:	string,
    SUC_TEL_NUM:	string,
    SUC_COD_NUM:	number,
    SUC_FAX_NUM:	string,
    FLG_IDC_BANCO_ORIGN:	string,
    NRO_NVO_BANCO:	number,
    GLS_EML_AGT:	string,
  ) {
    this.SUC_COD = SUC_COD;
    this.SUC_GLS = SUC_GLS;
    this.SUC_DIR = SUC_DIR;
    this.SUC_DIR_NUM = SUC_DIR_NUM;
    this.SUC_DIR_COM = SUC_DIR_COM;
    this.SUC_TEL_NUM = SUC_TEL_NUM;
    this.SUC_COD_NUM = SUC_COD_NUM;
    this.SUC_FAX_NUM = SUC_FAX_NUM;
    this.FLG_IDC_BANCO_ORIGN = FLG_IDC_BANCO_ORIGN;
    this.NRO_NVO_BANCO = NRO_NVO_BANCO;
    this.GLS_EML_AGT = GLS_EML_AGT;
  }

}
