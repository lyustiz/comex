import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import * as mapboxgl from 'mapbox-gl';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  mapBox = (mapboxgl as typeof mapboxgl);

  map: mapboxgl.Map;

  style = `mapbox://styles/mapbox/streets-v9`;

  lat = 43.1746;
  lng = -2.4125;
  zoom = 15;


  constructor() {
    this.mapBox.accessToken = environment.mapBox.token;
  }

  buildMap() {
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: this.zoom,
      center: [this.lng, this.lat]
    });
    this.map.addControl(new mapboxgl.NavigationControl());
  }
}
