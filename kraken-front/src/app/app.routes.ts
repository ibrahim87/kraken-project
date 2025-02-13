import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'product',
        loadChildren: () => import('./product/product.routes').then(m => m.productRoutes)
    },
    { path: '', redirectTo: '/product', pathMatch: 'full' },
    { path: '**', redirectTo: '/product' }
];
