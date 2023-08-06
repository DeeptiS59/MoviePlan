import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { AdminComponent } from './admin/admin.component';
import { GenreComponent } from './genre/genre.component';
import { AddGenreComponent } from './add-genre/add-genre.component';
import { ResetPwdComponent } from './reset-pwd/reset-pwd.component';
import { LogoutComponent } from './logout/logout.component';
import { UserHomepageComponent } from './user-homepage/user-homepage.component';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';
import { OrderSuccessComponent } from './order-success/order-success.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AddMovieComponent,
    MovieListComponent,
    EditMovieComponent,
    AdminComponent,
    GenreComponent,
    AddGenreComponent,
    ResetPwdComponent,
    LogoutComponent,
    UserHomepageComponent,
    CartComponent,
    PaymentComponent,
    OrderSuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
