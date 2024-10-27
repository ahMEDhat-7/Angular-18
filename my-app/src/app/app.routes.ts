import { Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {path : '' , redirectTo : 'home', pathMatch : 'full'},
    {path : 'home', component: HomeComponent},
    {path :'blog' , component : BlogComponent},
    {path :'about' , component : AboutComponent},
    {path : '**' , component : NotFoundComponent}

];
