import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';


const routes: Routes = [
    { path: 'home', component: AppComponent },
    { path: 'search', component: SearchComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
