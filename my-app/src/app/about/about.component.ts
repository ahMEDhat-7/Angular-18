import { Component } from '@angular/core';
import { ExecException } from 'node:child_process';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  componentName : string = "About";
  num : number = 120;
  imgPath : string = './/..//..//..//public/images/ValvI.png';
  flag : boolean = false;

  readonly atSymbol : string = '@';
  sayHello(){
    alert("Hello from About Component!"); 
  }
  printInConsole(e : KeyboardEvent){
    const input = (e.target as HTMLInputElement).value;
    console.log(input);
  }
}
