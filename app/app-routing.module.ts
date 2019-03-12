import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MynavComponent } from './mynav/mynav.component';
import { ParentComponent } from './parent/parent.component';
import { HomeComponent } from './home/home.component';
import { BranchesComponent } from './branches/branches.component';

import { GalleryComponent } from './gallery/gallery.component';
import { ProgramsComponent } from './programs/programs.component';
import { FaqsComponent } from './faqs/faqs.component';

import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FpasswordComponent } from './fpassword/fpassword.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { AdmissionComponent } from './admission/admission.component';
import { Enquiry1Component } from './enquiry1/enquiry1.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'nav', component:MynavComponent},
  {path: 'parent',component:ParentComponent},

  {path:'branches',component:BranchesComponent},
  {path:'home',component:HomeComponent},
 
  {path:'gallery',component:GalleryComponent},
  {path:'programs',component:ProgramsComponent},
  {path:'faqs', component:FaqsComponent},
  {path:'register', component: RegisterComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'login',component:LoginComponent},
  {path:'fpassword',component:FpasswordComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'enquiry',component:EnquiryComponent},
  
  {path:'admission',component:AdmissionComponent},
{path:'enquiry1',component:Enquiry1Component}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
