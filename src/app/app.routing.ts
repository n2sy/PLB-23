import { RouterModule, Routes } from '@angular/router';
import { HomeAccountsComponent } from './accounts/home-accounts/home-accounts.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AddComponent } from './add/add.component';
import { BlockGuard } from './block.guard';
import { CvComponent } from './cv/cv.component';
import { InfosComponent } from './infos/infos.component';
import { LoginGuard } from './login.guard';
import { LoginComponent } from './login/login.component';
import { LogoutGuard } from './logout.guard';
import { ManageServersComponent } from './manage-servers/manage-servers.component';
import { MsWordComponent } from './ms-word/ms-word.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ReactFormComponent } from './react-form/react-form.component';
import { UpdateComponent } from './update/update.component';

const myRoutes: Routes = [
  { path: '', component: AccueilComponent },
  //   {
  //     path: 'cv',
  //     component: CvComponent,
  //     children: [
  //       { path: 'add', component: AddComponent },
  //       {
  //         path: ':id',
  //         children: [
  //           { path: '', component: InfosComponent },
  //           { path: 'edit', component: UpdateComponent },
  //         ],
  //       },
  //     ],
  //   },
  {
    path: 'cv',
    children: [
      { path: '', component: CvComponent },
      { path: 'add', component: AddComponent, canActivate: [LoginGuard] },
      { path: ':id', component: InfosComponent },
      { path: ':id/edit', component: UpdateComponent },
    ],
  },
  { path: 'accounts', component: HomeAccountsComponent },
  { path: 'ms-word', component: MsWordComponent },
  { path: 'react', component: ReactFormComponent },
  { path: 'servers', component: ManageServersComponent },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LogoutGuard],
    canDeactivate: [BlockGuard],
  },
  {
    path: 'show-serv',
    loadChildren: () => import('./sub/sub.module').then((m) => m.SubModule),
  },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' },
];

export const PLB_ROUTING = RouterModule.forRoot(myRoutes);
