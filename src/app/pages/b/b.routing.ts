import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from "app/pages/b/content/content.component";


const routes: Routes = [
    { path: '', component: ContentComponent }
];

export const routing = RouterModule.forChild(routes);