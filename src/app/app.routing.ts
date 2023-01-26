import { RouterModule, Routes } from '@angular/router';
import { HomeAccountsComponent } from './accounts/home-accounts/home-accounts.component';
import { AccueilComponent } from './accueil/accueil.component';
import { CvComponent } from './cv/cv.component';
import { InfosComponent } from './infos/infos.component';
import { ManageServersComponent } from './manage-servers/manage-servers.component';
import { MsWordComponent } from './ms-word/ms-word.component';

const myRoutes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'cv', component: CvComponent },
  { path: 'cv/:id', component: InfosComponent },
  { path: 'accounts', component: HomeAccountsComponent },
  { path: 'ms-word', component: MsWordComponent },
  { path: 'servers', component: ManageServersComponent },
];

export const PLB_ROUTING = RouterModule.forRoot(myRoutes);
