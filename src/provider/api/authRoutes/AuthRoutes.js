import axios from "axios";

export class AuthRoutes {
  constructor() {
    this.baseUrl = import.meta.env.VITE_URL_API;
  }
  async checkAcess(token) {
    const response = await axios.get(`${this.baseUrl}auth/check-acess`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.user.id;
  }
  async login(email, password) {
    const response = await axios.post(`${this.baseUrl}auth/login`, {
      email,
      password,
    });
    return response;
  }
  async register(name, email, password, confirmPassword) {
    const response = await axios.post(`${this.baseUrl}auth/register`, {
      name,
      email,
      password,
      confirmPassword,
    });
    return response;
  }
}
