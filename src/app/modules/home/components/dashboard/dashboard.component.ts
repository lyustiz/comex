import { Component, OnInit } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

import { MapService } from '@core/service/maps/map.service';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [`
  .grid-container {
    margin: 20px;
  }
  .dashboard-card {
    position: absolute;
    top: 15px;
    left: 15px;
    right: 15px;
    bottom: 15px;
  }
  .more-button {
    position: absolute;
    top: 5px;
    right: 10px;
  }
  .dashboard-card-content {
    text-align: center;
  }
  .card-number {
    font-size: 4rem;
  }
  .map-container {
    width: 800px; height: 290px ;
    position: absolute;
    border: solid 4px white;
  }
`]
})
export class DashboardComponent implements OnInit {


  style = 'mapbox://styles/lyustiz/ck6u1s5rd0z161ipbu0tpac8w/draft';
  map: mapboxgl.Map;


  latitude = -31.428;
  longitude = -65.403;
  zoom = 4.45;

  sucursales = {
    Freire586: { longitud: -72.3521784, latitud: -35.2984965, dir: 'Freire 526, Constitución, Maule, Chile' }

  /**
   * Banco · Merced 411 -34.9848485,-71.5204178
   * Banco · Arturo Prat 2302 -35.2984965,-72.3521784
   * Banco · Uno Sur 829 -35.2984965,-72.3521784
   * Banco · Av Circunvalación Ote 1055 -35.2984965,-72.3521784
   * Banco · Independencia 336 -35.8460806,-71.878616
   * Banco · Independencia 557 -35.8466638,-71.8750729
   * Banco · Freire 586 -35.2984965,-72.3521784
   * Santander Bank-> Gran Avenida 7070, La Cisterna, Santiago Metropolitan Region 7970000, Chile -33.5227387/-70.6601655
   * Santander Bank-> Gran Avenida 8491, La Cisterna, Santiago Metropolitan Region 7970000, Chile -33.533079/-70.663352
   * Santander Bank-> Gran Avenida 5040, San Miguel, Santiago Metropolitan Region 8900000, Chile
   * Santander Bank-> Bascuñan Guerrero 30, San Ramón, Santiago Metropolitan Region 8860000, Chile -33.541163/-70.643315
   * Santander Bank-> Américo Vespucio 1501 Loc. 114 y 116 - Cerrillos, Cerrillos, Santiago Metropolitan Region 9200000 -33.522114/-70.59935
   */
  };




  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Card 1', cols: 2, rows: 1 },
        { title: 'Card 2', cols: 1, rows: 1 },
        { title: 'Card 3', cols: 1, rows: 2 },
        { title: 'Card 4', cols: 1, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver,
              private mapService: MapService) {}

  ngOnInit() {
    this.buildMap();
    }

  buildMap() {
    this.map = new mapboxgl.Map({
      container: 'mapHolder',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [ -70.59935, -33.522114 ],
      zoom: 10,
      Bearing: 180

    });


    this.map.addControl(new mapboxgl.NavigationControl());

    this.map.addControl(new mapboxgl.FullscreenControl());

    const marker = new mapboxgl.Marker().setLngLat([-70.59935, -33.522114])
    .setPopup(new mapboxgl.Popup({ offset: 25 })
    .setHTML('<h3>' + 'Banco Santander' + '</h3><p>' + 'Américo Vespucio 1501 Loc. 114 y 116' + '</p>'))
    .addTo(this.map);

    const marker2 = new mapboxgl.Marker().setLngLat([-70.643315, -33.541163]).setPopup(new mapboxgl.Popup({ offset: 25 })
    .setHTML('<h3>' + 'Banco Santander' + '</h3><p>' + 'Bascuñan Guerrero 30, San Ramón, Santiago Metropolitan Region' + '</p>'))
    .addTo(this.map);

    const marker3 = new mapboxgl.Marker().setLngLat([-70.6601655, -33.5227387]).setPopup(new mapboxgl.Popup({ offset: 25 })
    .setHTML('<h3>' + 'Banco Santander' + '</h3><p>' + 'Gran Avenida 7070, La Cisterna, Santiago' + '</p>'))
    .addTo(this.map);
  }

}
