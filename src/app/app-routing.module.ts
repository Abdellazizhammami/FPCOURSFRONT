import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './shared/userInterfaces/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './shared/auth.guard';
import { ArtbyautComponent } from './artbyaut/artbyaut.component';
import { DashComponent } from './dash/dash.component';
import { GestionarticleComponent } from './dash/gestionarticle/gestionarticle.component';
import { GestionutilisateurComponent } from './dash/gestionutilisateur/gestionutilisateur.component';
import { CreerArticleComponent } from './dash/gestionarticle/creer-article/creer-article.component';
import { ListerarticleComponent } from './dash/gestionarticle/listerarticle/listerarticle.component';
import { ChapterComponent } from './cours/chapter/chapter.component';
import { ArticleComponent } from './cours/article.component';
import { ValidateCoursComponent } from './dash/gestionarticle/validate-cours/validate-cours.component';
import { LireartComponent } from './dash/gestionarticle/lireart/lireart.component';



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'cours/:id', component: ArticleComponent, canActivate: [AuthGuard],
  children:[
    {path:'chap/:np', component:ChapterComponent,canActivate:[AuthGuard]}
  ] },
  { path: 'artbyaut/:aut', component: ArtbyautComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'nav', component: NavbarComponent },
  { path: 'ajoutCours', component: CreerArticleComponent },
  { path: 'home', component: HomeComponent},
  {
    path: 'dash', component: DashComponent, children: [
      {
        path: 'gart', component: GestionarticleComponent, children: [
          { path: 'creerarticle', component: CreerArticleComponent },
          { path: 'consulterart', component:ListerarticleComponent}
        ]
      },
      { path: 'guser', component: GestionutilisateurComponent },
      { path: 'validateCours', component: ValidateCoursComponent },
      {path:'vCours/:id',component:LireartComponent,canActivate:[AuthGuard],children:[
        {path:'chap/:np', component:ChapterComponent,canActivate:[AuthGuard]}
      ]}
    ]
  },

 

  { path: "**", component: HomeComponent }
  /*{
     path: '', redirectTo: 'home'
  //   //path:'**' , redirectTo: 'register'
  //   path:'', redirectTo: 'login'
   }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{paramsInheritanceStrategy :'always'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ArticleComponent, RegisterComponent, LoginComponent, NavbarComponent]
