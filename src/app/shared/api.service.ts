import { Injectable } from '@angular/core';
var faker = require('faker');

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor() { }

  getPersons(size) {
    return this.generateRandomPersons(size)
  }

  generateRandomPersons(size){
    let persons = []
    for (let i = 0; i < size; i++) {
      let customer  = {
        name:  faker.name.findName(),
        age: this.getRandomAge(20,35),
        gender: this.getRandomGender(),
        document: "C://fakepath"
      }
      persons.push(customer)  
    }
    return persons
  }

  getRandomGender(){
    const genders = ["Masculino", "Femenino"]
    const random = Math.floor(Math.random() * genders.length);
    return genders[random]
  }

  getRandomAge(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

}
