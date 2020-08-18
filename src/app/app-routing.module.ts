import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent
	}
];

const routerOptions: ExtraOptions = {
	anchorScrolling: 'enabled',
	onSameUrlNavigation: 'reload',
	scrollPositionRestoration: 'enabled'
};

@NgModule({
	imports: [RouterModule.forRoot(routes, routerOptions)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
