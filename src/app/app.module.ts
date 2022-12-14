import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

// Add flex-layout
import { FlexLayoutModule } from '@angular/flex-layout';

// Add Material
import { MatCardModule } from '@angular/material/card';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { ChildComponentComponent } from './child-component/child-component.component';
import { Child2ComponentComponent } from './child2-component/child2-component.component';
import { SharedService } from './shared.service';
import {
  MatButtonModule,
  MatRadioModule,
  MatExpansionModule,
} from '@angular/material';
import { ExpandChildComponent } from './expand-child/expand-child.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    MatRadioModule,
    MatExpansionModule,
    BrowserAnimationsModule,
  ],
  declarations: [
    AppComponent,
    ParentComponentComponent,
    ChildComponentComponent,
    Child2ComponentComponent,
    ExpandChildComponent,
  ],
  providers: [SharedService],
  bootstrap: [AppComponent],
})
export class AppModule {}
