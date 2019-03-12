import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AlertComponent } from './_directives';
import { AuthGuard } from './_guards';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MynavComponent } from './mynav/mynav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule, MatSelectModule, MatRadioModule, MatFormFieldModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatDatepickerModule, MatListModule, MatNativeDateModule, MatOptionModule, MatSlideToggleModule, ErrorStateMatcher, ShowOnDirtyErrorStateMatcher, MatCheckboxModule, MatInputModule } from '@angular/material';
import { ParentComponent } from './parent/parent.component';
import { HomeComponent } from './home/home.component';
import { BranchesComponent } from './branches/branches.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ProgramsComponent } from './programs/programs.component';
import { FaqsComponent } from './faqs/faqs.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserService, AuthenticationService, AlertService } from './_services';
import { FpasswordComponent } from './fpassword/fpassword.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { AdmissionComponent } from './admission/admission.component';
import { Enquiry1Component } from './enquiry1/enquiry1.component';

@NgModule({
  declarations: [
    AppComponent,
    MynavComponent,
    AlertComponent,
    ParentComponent,
    HomeComponent,
    BranchesComponent,
    GalleryComponent,
    ProgramsComponent,
    FaqsComponent,
    ContactusComponent,
    LoginComponent,
    RegisterComponent,
    FpasswordComponent,
    AboutusComponent,
    EnquiryComponent,
    AdmissionComponent,
    Enquiry1Component
  ],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatMenuModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatOptionModule,
    MatSlideToggleModule,
    MatIconModule,
    MatListModule,
    MatSelectModule,
    MatRadioModule,
    MatFormFieldModule,
    MatCardModule,
    MatCheckboxModule,
    MatInputModule
  ],
  providers: [
    { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher },
    AlertService,
    AuthenticationService,
    UserService,
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}