import {
  computed,
  Injectable,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';

enum Role {
  admin = 'admin',
  customer = 'customer',
  employee = 'employee',
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}
  UserRole: WritableSignal<Role> = signal<Role>(Role.admin);
  isWorker: Signal<boolean> = computed(
    () => this.UserRole() === Role.employee || this.UserRole() === Role.admin
  );
}
