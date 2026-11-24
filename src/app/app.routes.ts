import { Routes } from '@angular/router';

//.. crear rutas de pages..//
export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./pages/home/home').then((m) => m.Home)

    },
        
    {
        path: 'carrito',
        loadComponent: () =>
            import('./pages/carrito/carrito').then((m) => m.Carrito)
                                         
    },
    
    {
        path: 'articulo',
        loadComponent: () =>
            import('./pages/articulo/articulo').then((m) => m.Articulo)

    },

    {
        path: 'buscar',
        loadComponent: () =>
            import('./pages/buscar/buscar').then((m) => m.Buscar)

    },

    {
        path: 'perfil',
        loadComponent: () =>
            import('./pages/perfil/perfil').then((m) => m.Perfil)

    },

    {
        path: 'rubro',
        loadComponent: () =>
            import('./pages/rubro/rubro').then((m) => m.Rubro)

    },

];