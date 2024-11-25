import axios from "axios";

export class UserRoutes {
  constructor() {
    this.baseUrl = import.meta.env.VITE_URL_API;
  }

  async getUserData(id, token) {
    try {
      const response = await axios.get(`${this.baseUrl}user/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
