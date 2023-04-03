import { Component } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent {
  peso : number = 0;
  altura : number = 0;
  result : number = 0;
  msg : string = " resultado";

  calc(){

      this.result = this.peso / (this.altura * this.altura);
     

      if ( this.result < 18.5){
          this.msg = "Magreza";
      }
      else if ( this.result > 18.5 && this.result < 24.9){
          this.msg = "Normal";
      }
      else if ( this.result > 25 && this.result < 29.9){
          this.msg = "Sobrepeso";
      }
      else if ( this.result > 30 && this.result < 34.9){
          this.msg = "Obesidade grau I";
      }
      else if ( this.result > 35 && this.result < 39.9){
          this.msg = "Obesidade grau II";
      }
      else if ( this.result > 40){
          this.msg = "Obesidade grau III";
      }
  }

  limpar(){
    this.peso = 0;
    this.altura = 0;
    this.result = 0;
    this.msg = " ";
  }
}

