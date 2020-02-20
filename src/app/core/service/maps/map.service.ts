import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import * as mapboxgl from 'mapbox-gl';

@Injectable({
  providedIn: 'root'
})
export class MapService {

 // mapBox = (mapboxgl as typeof mapboxgl);


  style = `mapbox://styles/mapbox/streets-v9`;
  map: mapboxgl.Map;
  latitude = -33.4569397;
  longitude = -70.6482697;
  zoom = 15;


  constructor() {
    mapboxgl.accessToken = 'pk.eyJ1IjoibHl1c3RpeiIsImEiOiJjazZ0aGpzNjUwYW9qM2ZxaWxvY291b2x2In0.W4RUOc_RspaFduFD1XOxjA';
  }

  buildMap() {
    this.map = new mapboxgl.Map({
      container: 'mapHolder',
      style: this.style,
      zoom: this.zoom,
      center: [this.longitude, this.latitude]
    });
  }



}
