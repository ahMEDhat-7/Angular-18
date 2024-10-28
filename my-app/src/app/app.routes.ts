import { Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { JobsComponent } from './about/jobs/jobs.component';
import { ContactComponent } from './about/contact/contact.component';


export const routes: Routes = [
    {path : '' , redirectTo : 'home', pathMatch : 'full' , title : 'home'},
    {path : 'home', component: HomeComponent , title : 'home'},
    {path :'blog' , component : BlogComponent , title : 'blog'},
    {path :'about' , component : AboutComponent , children:
        [
            // {path : '' , redirectTo : 'jobs', pathMatch : 'full'},
            {path : 'jobs' , component : JobsComponent , title : 'jobs'},
            {path : 'contact' , component : ContactComponent , title : 'contact'},
        ]
    },
    {path : '**' , component : NotFoundComponent , title : 'Not-Found'}
    
];
