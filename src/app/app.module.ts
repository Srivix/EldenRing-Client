import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { WeaponModule } from './weapon/weapon.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BuildModule } from './build/build.module';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es'
import { LoginModule } from './login/login.module';
import { CalculatorModule } from './calculator/calculator.module';
import { TokenInterceptor } from './login/interceptors/token.interceptor';
import { AuthInterceptor } from './login/interceptors/auth.interceptor';

registerLocaleData(localeEs,'es');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    WeaponModule,
    HttpClientModule,
    BuildModule,
    LoginModule,
    CalculatorModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true},
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
