import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { JobsComponent } from './jobs/jobs.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    RouterOutlet,
    JobsComponent,
    ContactComponent
  ],
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
