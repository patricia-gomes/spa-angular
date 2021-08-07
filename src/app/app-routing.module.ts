import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Importando os componentes que vai ser usado nessa spa
import { SobreComponent } from './sobre/sobre.component';
import { HomeComponent } from './home/home.component';

//Inserindo as rotas dessa spa
const routes: Routes = [
	{ path: 'sobre', component: SobreComponent },
	{ path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
