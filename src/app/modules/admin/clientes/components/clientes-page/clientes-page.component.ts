import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef, AfterViewInit, OnInit, ChangeDetectorRef  } from '@angular/core';
import { ClientesListComponent } from '../clientes-list/clientes-list.component';

@Component({
  selector: 'app-clientes-page',
  templateUrl: './clientes-page.component.html',
  styleUrls: ['./clientes-page.component.scss']
})
export class ClientesPageComponent implements OnInit, AfterViewInit {

  @ViewChild('componentContainer', { read: ViewContainerRef, static: false}) hostConstainer: ViewContainerRef;

  constructor( public componentFactoryResolver: ComponentFactoryResolver,
               public changeDetectorRef: ChangeDetectorRef ) { }

  ngOnInit( ) {
  }

  ngAfterViewInit(): void {
    this.loadComponent();
  }

  loadComponent() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ClientesListComponent);
    this.hostConstainer.clear();
    this.hostConstainer.createComponent(componentFactory);
    this.changeDetectorRef.detectChanges();
  }

}
