import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { JobsComponent } from './jobs/jobs.component';
import { ProductsService } from '../products.service';
import { Post } from '../post';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    RouterOutlet,
    JobsComponent,
    ContactComponent
  ],
  providers: [],
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
  posts : Post[] = [];  
  constructor(private _productsService:ProductsService){
    this._productsService.getPost().subscribe({
      next :  (data) => {
        this.posts = data.slice(0,20);
        console.log(data);
      },
      error : (err) => console.error(err),
      complete : () => console.log('Completed')
    });

  }
}
