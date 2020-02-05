import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { StatusComponent } from './status/status.component';
import { EntryComponent } from './entry/entry.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './sidebar/sidebar.component';
const routes: Routes = [
{
	path: 'home',
	component: MainComponent
},
{
	path: '',
	component: LoginComponent
},
{
	path: 'testing',
	component: SidebarComponent
},
{
	path:'',
	component: MainComponent,
	children:[
		 { path: 'status', component: StatusComponent },
		 { path: 'dashboard', component: DashboardComponent },
	]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
