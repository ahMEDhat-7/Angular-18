import { Component } from '@angular/core';
import { ParentComponent } from '../parent/parent.component';
import { ProductsService } from '../products.service';
import { CommonModule } from '@angular/common'; 
import { Post } from '../post';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ParentComponent,
    CommonModule
  ],
  providers: [],  // injecting the service in the constructor
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

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
