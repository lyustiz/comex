import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef, AfterViewInit, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators as cValidators} from '@shared/utils/validators';

import { ClientesListComponent } from '../clientes-list/clientes-list.component';

@Component({
  selector: 'app-clientes-search',
  templateUrl: './clientes-search.component.html',
  styleUrls: ['./clientes-search.component.scss']
})
export class ClientesSearchComponent implements OnInit, AfterViewInit {
  
  public formGroup: FormGroup;

  public currentComponent = null;

  @ViewChild('ComponentContainer', { read: ViewContainerRef, static: false}) dynamicComponentContainer: ViewContainerRef;
  
  /*@Input() set componentData(data: {component: any, inputs: any}) {
    if (!data) {
      return;
    }

    let inputProviders = [];
    if ( data.inputs ) {
      inputProviders = Object.keys(data.inputs)
      .map((inputName) => {
        return {
          provide: inputName,
          useValue: data.inputs[inputName]
        };
      });
    }



  }*/

  constructor(public formBuilder: FormBuilder,
              public componentFactoryResolver: ComponentFactoryResolver,
              /* */) { }

  ngOnInit() {

    this.formGroup = this.formBuilder.group({
      cliRut:	      [ '', [ Validators.required, cValidators.rut ] ],     // RUT
      cliNom:	      [ '', [ Validators.required] ],                       // NOMBRE
    });


  }

  ngAfterViewInit(): void {
    console.log(this.dynamicComponentContainer);
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ClientesListComponent);
    const viewContainerRef = this.dynamicComponentContainer;
    viewContainerRef.clear();
    viewContainerRef.createComponent(componentFactory);
  }


  formField(field: string) {
    return this.formGroup.get(field);
  }

}
