import { Component } from '@angular/core';

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

  sayHello(){
    alert("Hello from About Component!");
  }
}
