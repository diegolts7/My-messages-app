import axios from "axios";

export class MessageRoutes {
  constructor(token) {
    this.baseUrl = import.meta.env.VITE_URL_API;
    this.token = token;
  }

  async getMessagesByUser(id) {
    return await axios.get(`${this.baseUrl}message/${id}`, {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    });
  }

  async getAllMessages() {
    return await axios.get(`${this.baseUrl}message/`, {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    });
  }

  async createOneMessage(content) {
    return await axios.post(
      `${this.baseUrl}message/`,
      {
        content,
      },
      {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      }
    );
  }
}
