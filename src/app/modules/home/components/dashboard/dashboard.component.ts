import { Component, OnInit } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

import { MapService } from '@core/service/maps/map.service';


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
    width: 100%;height: 100%;position: absolute;
  }
`]
})
export class DashboardComponent implements OnInit {

  latitude = -33.4569397;
  longitude = -70.6482697;
  mapType = 'roadmap';

  sucursales = {
    santiago: { latitud: -33.4569397, longitud: -70.6482697 }
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
    this.mapService.buildMap();
  }

}
