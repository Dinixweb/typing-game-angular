import { Component } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  generatedValue = lorem.sentence();
  result = '';
  changeCard = '';
  classChange = '';
  enteredValue = '';

  onChangeEvent(event: any) {
    this.enteredValue = event.target.value;
    this.changeCardFunction();
  }
  
  changeCardFunction() {
    if (this.enteredValue.length == this.generatedValue.length
      && this.enteredValue === this.generatedValue) {
      this.result = 'Congragulations!'
      this.changeCard = 'bgRight'
    } else if(this.enteredValue.length == this.generatedValue.length
      && this.enteredValue != this.generatedValue) {
      this.result = 'SORRY YOU LOST!'
      this.changeCard = 'bgWrong'
    } else {
      this.changeCard = 'bgNormal'
    }
     console.log(this.changeCard)
      
}
  
  compare(randomSentence: string, enterValue: string) {
    
    if (!enterValue) {
      return this.classChange = 'normal';
    }
   
    return randomSentence == enterValue ? 'right' : 'wrong';
    
  }

  
}
