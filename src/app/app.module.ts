import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { RouteServiceService} from './services/routes/route-service.service';
import {UserServiceService} from './services/user/user-service.service';
import { SharedeventService } from './services/shared/sharedevent.service';
import { AuthService } from './services/authService';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductlistComponent } from './components/productlist/productlist.component';
import { SearchPipe } from './search.pipe';
import { EditComponent } from './components/edit/edit.component';
import { MenuComponent } from './components/menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule } from '@angular/material';
import { AddcartComponent } from './components/addcart/addcart.component';
import { CategoryPipe } from './pipes/category.pipe';
import { SummaryComponent } from './components/summary/summary.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    SignupComponent,
    LoginComponent,
    ProductDetailsComponent,
    AddProductComponent,
    ProductlistComponent,
    SearchPipe,
    EditComponent,
    MenuComponent,
    AddcartComponent,
    CategoryPipe,
    SummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule
  ],
  providers: [UserServiceService, RouteServiceService, SharedeventService , AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
