import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CourseListComponent } from './courses/course-list.component';
import { StarComponent } from './star/star.component';
import { ReplacePipe } from './pipe/replace.pepe';

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { Erro404Component } from './erro404/erro-404.component';
import { CourseInfoComponent } from './courses/course-info.component';
@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    ReplacePipe,
    StarComponent,
    NavBarComponent,
    Erro404Component,
    CourseInfoComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,

    //Definição de rotas
    RouterModule.forRoot([ //Esse forRoot espera um array
      {
        path: 'courses', component: CourseListComponent
      },       
      {
        path: 'courses/info/:id', component: CourseInfoComponent
      },       
      {        
        //Na raiz da aplicação será adicionado o courses, ou seja, após o localhost:4200
        path: '', redirectTo: 'courses', pathMatch: 'full'
      },      
      {//Quando a rota não é encontrada
        path: '**', component: Erro404Component
      }
    ])          
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
