import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  friends : string[] = ['ahmed','mohammed','Ali','Salma','yara'];
  isActive : boolean = true;
  case : number = 0;
}
