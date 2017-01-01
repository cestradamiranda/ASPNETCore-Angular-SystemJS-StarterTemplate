import { CanLoadGuard } from './guards/canLoadGuard';
import { CanDeactivateGuard } from './guards/canDeactivateGuard';
import { AuthenticationGuard } from './guards/authenticationGuard';
import { FooterComponent } from './components/footer/footer.component';
import { DataService } from './../../services/dataService';
import { Configuration } from './../../app.constants';
import { NavigationComponent } from './components/navigation/navigation.component';
import { RouterModule } from '@angular/router';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({

    imports: [
        CommonModule,
        RouterModule
    ],

    declarations: [
        NavigationComponent,
        FooterComponent
    ],

    exports: [
        NavigationComponent,
        FooterComponent
    ],
    providers: [
        DataService,
        Configuration,
        AuthenticationGuard,
        CanDeactivateGuard,
        CanLoadGuard
    ]
})

export class SharedModule { }
