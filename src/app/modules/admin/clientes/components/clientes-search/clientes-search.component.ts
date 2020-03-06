import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef, Input, OnInit, ReflectiveInjector } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators as cValidators} from '@shared/utils/validators';

@Component({
  selector: 'app-clientes-search',
  templateUrl: './clientes-search.component.html',
  styleUrls: ['./clientes-search.component.scss']
})
export class ClientesSearchComponent implements OnInit {

  public formGroup: FormGroup;

  public currentComponent = null;

  @ViewChild('ComponentContainer', {static: true}) componentContainer: ViewContainerRef;
  @Input() compo: any;
  constructor(public viewContainerRef: ViewContainerRef, public formBuilder:FormBuilder ) { }

  ngOnInit() {
    let myComponent;

    this.formGroup  = this.formBuilder.group({
      cliRut: ['', [ Validators.required]],
      cliNom: ['', [Validators.required]]

    });
  }



 /* @ViewChild('dynamicComponentContainer', { read: ViewContainerRef, static: false}) dynamicComponentContainer: ViewContainerRef;
  @Input() set componentData(data: {component: any, inputs: any}) {
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

  formField(field: string) {
    return this.formGroup.get(field);
  }


}
