import { inject } from "@angular/core";
import { Router, UrlTree } from "@angular/router";
import { AuthService } from "./auth.service";
import { CanActivateFn, CanActivateChildFn } from "@angular/router";

export const authGuard: CanActivateFn = async (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const authenticated = await authService.isAuthenticated();
  if (authenticated) {
    return true;
  } else {
    router.navigate(["/"]);
    return false;
  }
};

export const authChildGuard: CanActivateChildFn = (childRoute, state) => {
  return authGuard(childRoute, state);
};
