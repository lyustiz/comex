import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import * as mapboxgl from 'mapbox-gl';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  public map: mapboxgl.Map;

  constructor() { }

  buildMap( mapParams: mapboxgl.MapboxOptions ) {

    mapParams.accessToken = environment.mapBox.token;

    return this.map = new mapboxgl.Map(mapParams);
  }

}
