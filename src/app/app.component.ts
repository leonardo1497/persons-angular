import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from './shared/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'persons';
  persons:Array<object>
  formPerson: FormGroup

  constructor(
    private apiService: ApiService, 
    private modalService: NgbModal,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.persons =this.apiService.getPersons(5);
    this.formPerson = this.formBuilder.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      gender: ['', Validators.required],
      document: ['', Validators.required],
    })
  }

  openModal(content) {
    this.formPerson.reset()
    this.modalService.open(content, { size: 'lg' })
  }

  addPerson(){
    console.log(this.formPerson.value)
    this.persons.push(this.formPerson.value)
    this.modalService.dismissAll()
  }
}
