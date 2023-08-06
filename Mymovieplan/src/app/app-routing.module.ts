import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { AdminGuardService } from './admin-guard.service';
import { GenreComponent } from './genre/genre.component';
import { AddGenreComponent } from './add-genre/add-genre.component';
import { ResetPwdComponent } from './reset-pwd/reset-pwd.component';
import { LogoutComponent } from './logout/logout.component';
import { UserHomepageComponent } from './user-homepage/user-homepage.component';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';
import { OrderSuccessComponent } from './order-success/order-success.component';



const routes: Routes = [
  { path:"login",component:LoginComponent},
  { path:"register",component:RegisterComponent},
  { path:"admin",component:AdminComponent,canActivate:[AdminGuardService]},
  { path:"admin/addMovie",component:AddMovieComponent,canActivate:[AdminGuardService]},
  { path:"admin/editMovie/:id",component:EditMovieComponent,canActivate:[AdminGuardService]},
  { path:"admin/movie",component:MovieListComponent,canActivate:[AdminGuardService]},
  { path:"admin/genre",component:GenreComponent,canActivate:[AdminGuardService]},
  { path:"admin/addGenre",component:AddGenreComponent,canActivate:[AdminGuardService]},
  { path:"admin/resetPwd",component:ResetPwdComponent,canActivate:[AdminGuardService]},
  { path:"logout",component:LogoutComponent},
  { path:"homepage",component:UserHomepageComponent},
  { path:"cart",component:CartComponent},
  { path:"payment",component:PaymentComponent},
  { path:"orderSuccess",component:OrderSuccessComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {} 

