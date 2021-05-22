import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatExpansionModule } from '@angular/material/expansion';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PostComponent } from './post/post.component';
import { ProfileComponent } from './profile/profile.component'
import { HeaderComponent } from './header/header.component';
import { PostListComponent } from './post/post-list/post-list.component'
import { UserService } from './services/user.service.spec';
import { EditComponent } from './edit/edit.component';
import { ViewallpostComponent } from './viewallpost/viewallpost.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    PostComponent,
    ProfileComponent,
    HeaderComponent,
    PostListComponent,
    EditComponent,
    ViewallpostComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatExpansionModule,
    UserService
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
