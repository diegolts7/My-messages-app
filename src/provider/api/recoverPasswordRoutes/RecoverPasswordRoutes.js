import axios from "axios";

export class RecoverPasswordRoutes {
  constructor(token) {
    this.baseUrl = import.meta.env.VITE_URL_API;
    this.token = token;
  }

  async sendTokenEmail(email) {
    return await axios.post(`${this.baseUrl}recover/password/token`, {
      email,
    });
  }
}
