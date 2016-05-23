import EmailVerifications from './email-verifications';
import Users from './users';
import PasswordResetForms from './password-reset-forms';

export default class UserClient {
  constructor(host, auth, headers) {
    this.email_verifications = new EmailVerifications(host, auth, headers);
    this.users = new Users(host, auth, headers);
    this.password_reset_forms = new PasswordResetForms(host, auth, headers);
  }
}
