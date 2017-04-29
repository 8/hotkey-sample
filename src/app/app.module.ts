import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HotkeyModule } from 'angular2-hotkeys';
import 'rxjs/add/operator/toPromise';

import { CommandService } from './command.service';
import { AppComponent } from './app.component';
import { MainComponent } from './main.component';

@NgModule({
  declarations: [
    AppComponent, MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HotkeyModule.forRoot()
  ],
  providers: [CommandService],
  bootstrap: [AppComponent]
})
export class AppModule { }
