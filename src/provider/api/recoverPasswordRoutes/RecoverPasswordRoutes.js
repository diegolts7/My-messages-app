import axios from "axios";

export class RecoverPasswordRoutes {
  constructor() {
    this.baseUrl = import.meta.env.VITE_URL_API + "recover";
  }

  async sendTokenEmail(email) {
    return await axios.post(`${this.baseUrl}/password/token`, {
      email,
    });
  }

  async changePassword(password, confirmPassword, token) {
    return await axios.patch(`${this.baseUrl}/password?token=${token}`, {
      password,
      confirmPassword,
    });
  }
}
