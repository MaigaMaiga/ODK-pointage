import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { LoginComponent } from './login/login.component';
import { ListUsersComponent } from './Utilisateur/list-users/list-users.component';
import { AddUsersComponent } from './Utilisateur/add-users/add-users.component';
import { AddAdminComponent } from './Admin/add-admin/add-admin.component';
import { ListAdminComponent } from './Admin/list-admin/list-admin.component';
import { DetailAdminComponent } from './Admin/detail-admin/detail-admin.component';
import { UpdateAdminComponent } from './Admin/update-admin/update-admin.component';
import { DetailUserComponent } from './listUsers/detail-user/detail-user.component';
import { UpdateUserComponent } from './Utilisateur/update-user/update-user.component';
import { GuardGuard } from './guard.guard';
import { UpdatePromotionComponent } from './promotion/update-promotion/update-promotion.component';
import { LogParUtilisateurComponent } from './log/logUtilisateur/log-par-utilisateur/log-par-utilisateur.component';
import { LogParAdminComponent } from './log/logAdmin/log-par-admin/log-par-admin.component';
import { LogParSuperAdminComponent } from './log/logSuper/log-par-super-admin/log-par-super-admin.component';
import { ListelogComponent } from './log/listelog/listelog.component';
import { UserSpaceComponent } from './user-space/user-space.component';
import { ProfileComponent } from './profile/profile.component';
import { UserPromotionComponent } from './user-promotion/user-promotion.component';
import { GroupeComponent } from './groupe/groupe.component';
import { ListPointageComponent } from './PointageAdministrateur/list-pointage/list-pointage.component';
import { DetailPointageComponent } from './PointageAdministrateur/detail-pointage/detail-pointage.component';
import { ListePromotionComponent } from './promotion/liste-promotion/liste-promotion.component';
import { AddPromotionComponent } from './promotion/add-promotion/add-promotion.component';
import { DetailPromotionComponent } from './promotion/detail-promotion/detail-promotion.component';





const routes: Routes = [
  { path: 'accueil', component: AccueilComponent,canActivate:[GuardGuard]},
  { path: 'login',component: LoginComponent},
  { path: 'listUsers',component:ListUsersComponent,canActivate:[GuardGuard]},
  { path: 'addUsers', component:AddUsersComponent,canActivate:[GuardGuard]},
  { path: 'addAdmin',component:AddAdminComponent,canActivate:[GuardGuard]},
  {path: 'addPromotion',component:AddPromotionComponent,canActivate:[GuardGuard]},
  {path: 'detailPromotion/:id',component:DetailPromotionComponent,canActivate:[GuardGuard]},
  { path: 'listPromotion',component:ListePromotionComponent,canActivate:[GuardGuard]},
  { path: 'updatePromotion/:id',component:UpdatePromotionComponent,canActivate:[GuardGuard]},
  { path: 'detailAdmin/:id',component:DetailAdminComponent,canActivate:[GuardGuard]},
  { path: 'updateAdmin/:id',component:UpdateAdminComponent,canActivate:[GuardGuard]},
  { path: 'detailUser/:id',component:DetailUserComponent,canActivate:[GuardGuard]},
  { path: 'updateUser/:id',component:UpdateUserComponent,canActivate:[GuardGuard]},
  { path: 'listAdmins', component: ListAdminComponent,canActivate:[GuardGuard]},
  { path: 'listPointage', component:ListPointageComponent,canActivate:[GuardGuard]},
  { path: 'detailPointage/:id', component: DetailPointageComponent,canActivate:[GuardGuard]},
  { path: 'listUsers',component:ListUsersComponent,canActivate:[GuardGuard]},
  { path: 'addUsers', component:AddUsersComponent,canActivate:[GuardGuard]},
  { path: 'addAdmin',component:AddAdminComponent,canActivate:[GuardGuard]},
  { path: 'detailAdmin/:id',component:DetailAdminComponent,canActivate:[GuardGuard]},
  { path: 'updateAdmin/:id',component:UpdateAdminComponent,canActivate:[GuardGuard]},
  { path: 'detailUser/:id',component:DetailUserComponent,canActivate:[GuardGuard]},
  { path: 'updateUser/:id',component:UpdateUserComponent,canActivate:[GuardGuard]},
  { path: 'listAdmins', component:ListAdminComponent,canActivate:[GuardGuard]},
  { path: 'logUtilisateur', component:LogParUtilisateurComponent,canActivate:[GuardGuard]},
  { path: 'logAdmin', component:LogParAdminComponent,canActivate:[GuardGuard]},
  { path: 'logSuper', component:LogParSuperAdminComponent,canActivate:[GuardGuard]},
  { path: 'log', component:ListelogComponent,canActivate:[GuardGuard]},
  { path:'userSpace', component:UserSpaceComponent,canActivate:[GuardGuard]},
  { path: 'profile', component:ProfileComponent,canActivate:[GuardGuard]},
  { path: 'userPromotion/:id', component:UserPromotionComponent,canActivate:[GuardGuard]},
  { path: 'groupe', component:GroupeComponent, canActivate:[GuardGuard]},
  { path: '**', redirectTo: '/login', pathMatch:'full'},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
