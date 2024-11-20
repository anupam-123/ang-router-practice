import { inject } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from "@angular/router";
import { Observable } from "rxjs";
import { ServersService } from "../servers.service";

interface Server {
  id: number;
  name: string;
  status: string;
}

export class ServerResolverService implements Resolve<Server> {
  serversService = inject(ServersService);
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Server> | Promise<Server> | Server {
    {
      return this.serversService.getServer(+route.params["id"]);
    }
  }
}
