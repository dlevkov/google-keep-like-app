import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule  } from '@angular/forms';

import { MaterialModule, MdInputModule, MdToolbarModule, MdListModule, MdCardModule, MdMenuModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { KeepHeaderComponent } from './keep-header/keep-header.component';
import { KeepFooterComponent } from './keep-footer/keep-footer.component';
import { KeepListComponent } from './content/keep-list/keep-list.component';
import { KeepListItemComponent } from './content/keep-list-item/keep-list-item.component';
import { ApiService } from 'app/content/services/api.service';
import { MockApiService } from 'app/content/services/mock-api.service';
import { KeepService } from 'app/content/services/keep.service';

@NgModule({
  declarations: [
    AppComponent,
    KeepHeaderComponent,
    KeepFooterComponent,
    KeepListComponent,
    KeepListItemComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule ,
    BrowserAnimationsModule,
    MdInputModule, MdListModule, MdCardModule,
     MaterialModule, MdMenuModule, MdToolbarModule
  ],
  providers: [{ provide: ApiService, useClass: MockApiService }, KeepService],
  bootstrap: [AppComponent]
})
export class AppModule { }
