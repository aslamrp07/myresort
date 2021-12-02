import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PagesComponent } from './pages/pages.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [AppComponent, PagesComponent],
  imports: [
    HttpClientModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule.forRoot(),
    FlexLayoutModule,
    NgxsStoragePluginModule.forRoot(),
    NgbModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
