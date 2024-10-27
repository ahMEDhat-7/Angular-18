import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FooterComponent} from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { NotFoundComponent } from './not-found/not-found.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    BlogComponent,
    HomeComponent,
    NotFoundComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
