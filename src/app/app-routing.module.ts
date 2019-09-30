import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'addfilmeserie', loadChildren: './addfilmeserie/addfilmeserie.module#AddfilmeseriePageModule' },
  { path: 'formulario', loadChildren: './addfilmeserie/formulario/formulario.module#FormularioPageModule' },  { path: 'filme', loadChildren: './addfilmeserie/filme/filme.module#FilmePageModule' },




];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
