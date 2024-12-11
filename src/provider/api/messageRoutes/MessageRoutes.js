import axios from "axios";

export class MessageRoutes {
  constructor() {
    this.baseUrl = import.meta.env.VITE_URL_API;
  }

  async getMessagesByUser(id, token) {
    return await axios.get(`${this.baseUrl}message/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  async getAllMessages(token) {
    return await axios.get(`${this.baseUrl}message/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}
