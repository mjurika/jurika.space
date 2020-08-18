import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from './material.module';
import { MenuComponent } from './menu/menu.component';
import { ProjectsComponent } from './projects/projects.component';
import { CtaComponent } from './cta/cta.component';
import { BadgesComponent } from './badges/badges.component';

@NgModule({
	declarations: [
		AppComponent,
		MenuComponent,
		HomeComponent,
		ProjectsComponent,
		FooterComponent,
		ContactComponent,
		AboutComponent,
		CtaComponent,
		BadgesComponent
	],
	imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MaterialModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
