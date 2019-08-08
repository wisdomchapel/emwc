import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { IndexPageComponent } from "./index-page/index-page.component";
import { CategoryDetailComponent } from "./categories/category-detail/category-detail.component";
import { LoginComponent } from "./login/login.component";
import { RegistrationComponent } from "./registration/registration.component";
import { CategoriesComponent } from "./categories/categories.component";
import { CategoryStartComponent } from "./categories/category-start/category-start.component";
import { AuthGuard } from "./auth-guard.service";
import { PostItemsComponent } from "./post-items/post-items.component";
import { CartComponent } from "./cart/cart.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { AboutComponent } from "./about/about.component";
import { WhoWeAreComponent } from "./who-we-are/who-we-are.component";
import { HistoryComponent } from "./history/history.component";
import { MissionVisionComponent } from "./mission-vision/mission-vision.component";
import { BeliefsComponent } from "./beliefs/beliefs.component";
import { StructureComponent } from "./structure/structure.component";
import { AffiliateOrganizationsComponent } from "./affiliate-organizations/affiliate-organizations.component";
import { BranchesComponent } from "./branches/branches.component";
import { ContactComponent } from "./contact/contact.component";
import { CareersComponent } from "./careers/careers.component";
import { MountainExperienceComponent } from "./mountain-experience.component";
import { ConventionComponent } from './convention.component'
import { TestimonyComponent } from "./testimony.component";
import { GivingComponent } from "./giving.component";
import { WomenConventionComponent } from "./women-convention/women-convention.component";
import { EvangelismComponent } from "./evangelism/evangelism.component";
import { PrayerRequestComponent } from './prayer-request/prayer-request.component';
import { WisdomMediaComponent } from './wisdom-media/wisdom-media.component';

const appRoutes:Routes = [
  // { path:'',component:HeaderComponent},
  //{ path:'',component:HomeComponent},
  { path: '',component:IndexPageComponent,pathMatch:'full'},
  { path: 'shopping-list', component:ShoppingListComponent},
  { path: 'cart',component:CartComponent},
  { path: 'who-we-are', component:WhoWeAreComponent},
  { path: 'history', component:HistoryComponent},
  { path: 'missionvision', component:MissionVisionComponent},
  { path: 'beliefs', component:BeliefsComponent},
  { path: 'structure', component:StructureComponent},
  { path: 'organizations', component:AffiliateOrganizationsComponent},
  { path: 'branches', component:BranchesComponent},
  { path: 'contact', component:ContactComponent},
  { path: 'careers', component:CareersComponent},
  { path: 'mountain-experience', component:MountainExperienceComponent},
  { path: 'convention', component:ConventionComponent},
  { path: 'testimony', component:TestimonyComponent},
  { path: 'women_convention', component:WomenConventionComponent},
  { path: 'evangelism', component:EvangelismComponent},
  { path: 'giving', component:GivingComponent},
  { path: 'home-page', component:HomePageComponent},
  { path: 'prayer-request', component:PrayerRequestComponent},
  { path: 'wisdom-media', component:WisdomMediaComponent},
  { path: 'about', component:AboutComponent},
  { path: 'category-detail/:name/:id', component:CategoryDetailComponent},
  { path: 'login', component:LoginComponent},
  { path: 'registration', component:RegistrationComponent},
  { path: 'products/:name',
   // canActivateChild:[AuthGuard],
    component:CategoriesComponent, children:[
      {path:':id', component:CategoryDetailComponent},

  ]},
  {path:'products',component:CategoryStartComponent, pathMatch:'full'},
  {path:'post-items',component:PostItemsComponent}
  ];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
