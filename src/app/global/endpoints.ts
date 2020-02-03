import { environment } from '@env/environment';
export class Endpoints {

  public static get URL_SUCURSAL(): string { return environment.api_url + '/sucursal'; }
}

