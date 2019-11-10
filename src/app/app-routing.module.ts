import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignupComponent } from './components/signup/signup.component';
import {LoginComponent} from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RouteServiceService} from './services/routes/route-service.service';
import { AuthGuard } from './services/authGuard';
import { ProductDetailsComponent } from '../../product-details/product-details.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ProductlistComponent } from './components/productlist/productlist.component';
import { EditComponent } from './components/edit/edit.component';
import { MenuComponent } from './components/menu/menu.component';
import { AddcartComponent } from './components/addcart/addcart.component';
import { RouterGuard } from './services/routerGuard';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthGuard]},
{path:'signup',component:SignupComponent},
{path:'login',component:LoginComponent},
{path:'productlist',component:ProductlistComponent},
{path:'productdetails/:productID',component:ProductDetailsComponent,canActivate:[RouteServiceService]},
{path:'addproductdetails',component:EditComponent},
{path:'editproduct/:productID',component:EditComponent},
{path:'addcart/:productID',component:AddcartComponent},
{path:'menu',component:MenuComponent},
{ path: '', redirectTo: 'productlist', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers:[ RouteServiceService,AuthGuard,RouterGuard],
  exports: [RouterModule]
})
export class AppRoutingModule { }
