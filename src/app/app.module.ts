import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { UsersComponent } from "./users/users.component";
import { ServersComponent } from "./servers/servers.component";
import { UserComponent } from "./users/user/user.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { ServerComponent } from "./servers/server/server.component";
import { ServersService } from "./servers/servers.service";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";
import { AppRoutingModule } from "../app.routes";
import { AuthService } from "../auth.service";
import { CanDeactivateGuardService } from "./servers/edit-server/can-deactivate-guard.service";
import { ServerResolverService } from "./servers/server/server-resolver.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent,
    PagenotfoundComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [
    ServersService,
    AuthService,
    CanDeactivateGuardService,
    ServerResolverService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
