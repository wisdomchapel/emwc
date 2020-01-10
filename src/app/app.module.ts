import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { HttpClientModule } from "@angular/common/http";
import * as $ from 'jquery';
import { AppRoutingModule } from './app-routing.module';
// import {DataTableModule} from 'primeng/components/datatable/datatable';
import {DataViewModule} from 'primeng/dataview';
import {DialogModule} from 'primeng/components/dialog/dialog';
import {DragDropModule} from 'primeng/components/dragdrop/dragdrop';
import {DropdownModule} from 'primeng/components/dropdown/dropdown';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/components/button/button'
import {RadioButtonModule} from 'primeng/components/radiobutton/radiobutton';
import {TabViewModule} from 'primeng/tabview';
import {PanelModule} from 'primeng/panel';
import { CarouselModule} from 'ngx-bootstrap/carousel';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NguiInviewModule, NguiListModule, NguiUtilsModule } from '@ngui/common';
import { TextareaAutosizeModule } from 'ngx-textarea-autosize';
import { AngularRaveModule} from 'angular-rave';
import {  } from 'rxjs';



import { AppComponent } from './app.component';
import {AuthService} from './auth.service'
import {AuthGuard} from './auth-guard.service'
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { IndexPageComponent } from './index-page/index-page.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryDetailComponent } from './categories/category-detail/category-detail.component';
import { CategoryItemComponent } from './categories/category-list/category-item/category-item.component';
import { CategoryListComponent } from './categories/category-list/category-list.component';
import { CategoryStartComponent } from './categories/category-start/category-start.component';
import { PostItemsComponent } from './post-items/post-items.component';
import { CartComponent } from './cart/cart.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutComponent } from './about/about.component';
import { WhoWeAreComponent } from './who-we-are/who-we-are.component';
import { HistoryComponent } from './history/history.component';
import { MissionVisionComponent } from './mission-vision/mission-vision.component';
import { BeliefsComponent } from './beliefs/beliefs.component';
import { StructureComponent } from './structure/structure.component';
import { AffiliateOrganizationsComponent } from './affiliate-organizations/affiliate-organizations.component';
import { BranchesComponent } from './branches/branches.component';
import { ContactComponent } from './contact/contact.component';
import { CareersComponent } from './careers/careers.component';
import { WomenConventionComponent } from './Programs/women-convention/women-convention.component';
import { EvangelismComponent } from './Programs/evangelism/evangelism.component';
import { PrayerRequestComponent } from './prayer-request/prayer-request.component';
import { MountainExperienceComponent } from './mountain-experience.component';
import { ConventionComponent } from './Programs/convention/convention.component';
import { TestimonyComponent } from './testimony.component';
import { GivingComponent } from './giving.component';
import { ShoppingListService } from './shopping-list/ShoppingList.service';
import { CartService } from './cart/cart.service';
import { CategoryService } from './categories/category.service';
import { TestimonyService} from './testimony-list/testimony.service'
import { TestimonyListComponent } from './testimony-list/testimony-list.component';
import { TestimonyItemComponent } from './testimony-list/testimony-item/testimony-item.component';
import { WisdomMediaComponent } from './wisdom-media/wisdom-media.component';
import { ProgramsComponent } from './Programs/programs.component';
import { ShareTestimonyComponent } from './share-testimony/share-testimony.component';
import { ViewTestimoniesComponent } from './view-testimonies/view-testimonies.component';
import { MountainComponent } from './Programs/mountain/mountain.component';
import { PraiseNightComponent } from './Programs/praise-night/praise-night.component';
import { FeetWashComponent } from './Programs/feet-wash/feet-wash.component';
import { BusinessForumComponent } from './Programs/business-forum/business-forum.component';
import { CarolComponent } from './Programs/carol/carol.component';
import { CoupleDinnerComponent } from './Programs/couple-dinner/couple-dinner.component';
import { DepartmentsComponent } from './departments/departments.component';

@NgModule({
  declarations: [
    AppComponent,

    HeaderComponent,
    ShoppingListComponent,
    HomeComponent,
    LoginComponent,
    RegistrationComponent,
    IndexPageComponent,
    CategoriesComponent,
    CategoryDetailComponent,
    CategoryItemComponent,
    CategoryListComponent,
    CategoryStartComponent,
    PostItemsComponent,
    CartComponent,
    HomePageComponent,
    AboutComponent,
    WhoWeAreComponent,
    HistoryComponent,
    MissionVisionComponent,
    BeliefsComponent,
    StructureComponent,
    AffiliateOrganizationsComponent,
    BranchesComponent,
    ContactComponent,
    CareersComponent,
    MountainExperienceComponent,
    ConventionComponent,
    TestimonyComponent,
    GivingComponent,
    WomenConventionComponent,
    EvangelismComponent,
    PrayerRequestComponent,
    TestimonyListComponent,
    TestimonyItemComponent,
    WisdomMediaComponent,
    ProgramsComponent,
    ShareTestimonyComponent,
    ViewTestimoniesComponent,
    MountainComponent,
    PraiseNightComponent,
    FeetWashComponent,
    BusinessForumComponent,
    CarolComponent,
    CoupleDinnerComponent,
    DepartmentsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // DataTableModule,
    DialogModule,
    DataViewModule,
    DragDropModule,
    DropdownModule,
    BrowserAnimationsModule,
    ButtonModule,
    RadioButtonModule,
    TabViewModule,
    PanelModule,
    NgbModule,
    NguiInviewModule,
    NguiListModule,
    NguiUtilsModule,
    TextareaAutosizeModule,
    AngularRaveModule,

    CarouselModule.forRoot(),
  ],
  providers: [ShoppingListService,CategoryService,AuthService,
    AuthGuard,CartService,TestimonyService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(catService:CategoryService) {
    catService.getPreviousUrl();

  }
 }
