import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { OutletComponent } from "./outlet/outlet.component";

const routes: Routes = [
  {
    path: '',
    component: OutletComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LcdRoutingModule {}
