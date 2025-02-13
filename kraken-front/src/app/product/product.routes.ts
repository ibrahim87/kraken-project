import {Routes} from "@angular/router";

export const productRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('./components/file-upload/file-upload.component').then(module => module.FileUploadComponent),
        canActivate: [],
        providers: [],
    },
];