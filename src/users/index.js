import Users from './users';
import PasswordResetForms from './password_reset_forms';

export default class UsersClient {
  constructor(host, auth, headers) {
    this.users = new Users(host, auth, headers);
    this.passwordResetForms = new PasswordResetForms(host, auth, headers);
  }
}
