import axios from "axios";

export class AuthRoutes {
  constructor() {
    this.baseUrl = import.meta.VITE_URL_API;
  }
  async checkAcess(token, setIsLoggedIn) {
    try {
      const response = await axios.get(`${this.url}auth/check-acess`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setIsLoggedIn(response.data.isLoggedIn);
    } catch (error) {
      console.error(error);
    }
  }
}
