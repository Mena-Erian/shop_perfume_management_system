import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

export const isWorkerGuard: CanActivateFn = (route, state) => {
  if (inject(AuthService).isWorker()) {
    return true;
  }
  inject(Router).navigate(['/pos']);
  return false;
};
