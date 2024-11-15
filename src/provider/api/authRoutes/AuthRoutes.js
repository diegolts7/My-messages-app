import axios from "axios";

export class AuthRoutes {
  constructor() {
    this.baseUrl = import.meta.env.VITE_URL_API;
  }
  async checkAcess(token, setIsLoggedIn) {
    try {
      await axios.get(`${this.url}auth/check-acess`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setIsLoggedIn(true);
    } catch (error) {
      console.error(error);
    }
  }
  async login(email, password) {
    const response = await axios.post(`${this.baseUrl}auth/login`, {
      email,
      password,
    });
    return response;
  }
}
