import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

import { MapService } from '@core/service/maps/map.service';
import * as mapboxgl from 'mapbox-gl';
import * as data from '@app/data/mock/sucursales.json';
import { multi, single} from '@app/data/mock/chart';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit {

  sucursales: any = ( data as any ).default;

  maps: mapboxgl.Map;

  mapOptions: mapboxgl.MapboxOptions = {
                style: 'mapbox://styles/mapbox/outdoors-v11',
                center: [ -70.65, -33.438 ],
                container: 'mapHolder',
                zoom : 11.5,
                bearing: 90,
              };

  // datachart
  public single = single;
  public multi = multi;

  // pie
  showLabels = true;

  // options for the chart
  view: any[] = [];
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  legendTitle = 'Leyenda';
  showXAxisLabel = true;
  xAxisLabel = 'Pais';
  showYAxisLabel = true;
  yAxisLabel = 'Cartolas';
  timeline = true;
  colorScheme = {
    domain: ['#9370DB', '#87CEFA', '#FA8072', '#FF7F50', '#90EE90', '#9370DB']
  };

  constructor(private breakpointObserver: BreakpointObserver,
              private mapService: MapService) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.buildMap();
  }

  buildMap() {

    this.maps = this.mapService.buildMap( this.mapOptions );

    this.maps.addControl(new mapboxgl.NavigationControl());

    for (const sucursal of this.sucursales) {
     new mapboxgl.Marker({color: '#f44336'})
      .setLngLat([sucursal.longitud, sucursal.latitud])
      .setPopup(new mapboxgl.Popup({ offset: 25 })
      .setHTML(
        `<h3>${sucursal.sucursal}</h3>
          <p>${sucursal.direccion}</p>
          <p>${sucursal.telefono}</p>`
      ))
      .addTo(this.maps);
    }
  }
}

 /*// cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
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
  );*/
