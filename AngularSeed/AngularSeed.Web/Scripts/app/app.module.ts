import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { DashboardService } from './dashboard/dashboard.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpModule,
    ],
    declarations: [
        AppComponent,
        DashboardComponent,
    ],
    entryComponents: [
    ],
    providers: [
        DashboardService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}