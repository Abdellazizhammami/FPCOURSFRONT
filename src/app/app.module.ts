import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/userInterfaces/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './shared/auth.guard';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptorService } from './shared/services/token-interceptor.service';
import { ArtbyautComponent } from './artbyaut/artbyaut.component';
import { DashComponent } from './dash/dash.component';
import { GestionarticleComponent } from './dash/gestionarticle/gestionarticle.component';

import { GestionutilisateurComponent } from './dash/gestionutilisateur/gestionutilisateur.component';
import { ListerarticleComponent } from './dash/gestionarticle/listerarticle/listerarticle.component';
import { CreerArticleComponent } from './dash/gestionarticle/creer-article/creer-article.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    routingComponents,
    HomeComponent,
    ArtbyautComponent,
    DashComponent,
    GestionarticleComponent,
    GestionutilisateurComponent,
    ListerarticleComponent,
    CreerArticleComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    
    AppRoutingModule,
    HttpModule,
    HttpClientModule
    
    
  



  ],
  providers: [AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
