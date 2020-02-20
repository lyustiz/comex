import { Component, OnInit } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

import { MapService } from '@core/service/maps/map.service';
import * as mapboxgl from 'mapbox-gl';
import * as data from '@app/data/mock/sucursales.json';


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
  .map-card{
    overflow: hidden;
  }
  .map-container {
    width: 600px;
    height: 290px;
    border: 4px solid white;

  }
  .mapboxgl-canvas{
    width: 100%; height: 100% ;
  }
`]
})
export class DashboardComponent implements OnInit {

  // maps
  style = 'mapbox://styles/lyustiz/ck6u1s5rd0z161ipbu0tpac8w/draft';
  map: mapboxgl.Map;
  latitude = -31.428;
  longitude = -65.403;
  zoom = 4.45;
  sucursales: any = (data  as  any).default;

  //
  title = 'Angular Charts';

  view: any[] = [600, 110];

  // options for the chart
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Pais';
  showYAxisLabel = true;
  yAxisLabel = 'Cartolas';
  timeline = true;
  colorScheme = 'picnic'; /*{
    domain: ['#9370DB', '#87CEFA', '#FA8072', '#FF7F50', '#90EE90', '#9370DB']
  };*/

  // pie
  showLabels = true;

  //
  // data goes here
public single = [
  {
    name: 'China',
    value: 2243772
  },
  {
    name: 'USA',
    value: 1126000
  },
  {
    name: 'Norway',
    value: 296215
  },
  {
    name: 'Japan',
    value: 257363
  },
  {
    name: 'Germany',
    value: 196750
  },
  {
    name: 'France',
    value: 204617
  }
];

public multi = [
  {
    name: 'China',
    series: [
      {
        name: '2018',
        value: 2243772
      },
      {
        name: '2017',
        value: 1227770
      }
    ]
  },

  {
    name: 'USA',
    series: [
      {
        name: '2018',
        value: 1126000
      },
      {
        name: '2017',
        value: 764666
      }
    ]
  },

  {
    name: 'Norway',
    series: [
      {
        name: '2018',
        value: 296215
      },
      {
        name: '2017',
        value: 209122
      }
    ]
  },

  {
    name: 'Japan',
    series: [
      {
        name: '2018',
        value: 257363
      },
      {
        name: '2017',
        value: 205350
      }
    ]
  },

  {
    name: 'Germany',
    series: [
      {
        name: '2018',
        value: 196750
      },
      {
        name: '2017',
        value: 129246
      }
    ]
  },

  {
    name: 'France',
    series: [
      {
        name: '2018',
        value: 204617
      },
      {
        name: '2017',
        value: 149797
      }
    ]
  }
];

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
      style: 'mapbox://styles/mapbox/outdoors-v11',
      center: [ -70.65, -33.438 ],
      zoom: 14,
      bearing: 90

    });

    this.map.addControl(new mapboxgl.NavigationControl());

    this.map.addControl(new mapboxgl.FullscreenControl());

    for (const sucursal of this.sucursales) {
      const mark = new mapboxgl.Marker({color: '#f44336'})
      .setLngLat([sucursal.longitud, sucursal.latitud])
      .setPopup(new mapboxgl.Popup({ offset: 25 })
      .setHTML(
        `<h3>${sucursal.sucursal} </h3>
          <p>${sucursal.direccion}</p>
          <p>${sucursal.telefono}</p>`
      ))
      .addTo(this.map);
    }
  }
}
