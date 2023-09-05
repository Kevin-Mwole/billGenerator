export default class Service {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async get(query) {
    try {
      const response = await fetch(`${this.baseUrl}${query}`);
      if (!response.ok) throw new Error("can not get data");
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }
}
