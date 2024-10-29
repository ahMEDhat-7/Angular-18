import { Component } from '@angular/core';
import { ParentComponent } from '../parent/parent.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ParentComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
