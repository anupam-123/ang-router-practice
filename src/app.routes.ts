import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./app/home/home.component";
import { PagenotfoundComponent } from "./app/pagenotfound/pagenotfound.component";
import { EditServerComponent } from "./app/servers/edit-server/edit-server.component";
import { ServerComponent } from "./app/servers/server/server.component";
import { ServersComponent } from "./app/servers/servers.component";
import { UserComponent } from "./app/users/user/user.component";
import { UsersComponent } from "./app/users/users.component";
import { NgModule } from "@angular/core";
import { authChildGuard, authGuard } from "./auth-service.service";
import { CanDeactivateGuardService } from "./app/servers/edit-server/can-deactivate-guard.service";
import { ServerResolverService } from "./app/servers/server/server-resolver.service";

export const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "users",
    component: UsersComponent,
    children: [{ path: ":id/:name", component: UserComponent }],
  },
  {
    path: "servers",
    component: ServersComponent,
    canActivate: [authGuard],
    canActivateChild: [authChildGuard],
    children: [
      {
        path: ":id",
        component: ServerComponent,
        resolve: { server: ServerResolverService },
      },
      {
        path: ":id/edit",
        component: EditServerComponent,
        canDeactivate: [CanDeactivateGuardService],
      },
    ],
  },
  {
    path: "not-found",
    component: PagenotfoundComponent,
  },
  {
    path: "**",
    redirectTo: "/not-found",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
