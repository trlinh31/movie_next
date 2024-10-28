class BaseApi {
  static baseUrl: string = process.env.NEXT_PUBLIC_API_BASE_URL || "";

  constructor() {}

  static async get<T>(url: string): Promise<T | null> {
    try {
      const response = await fetch(`${this.baseUrl}${url}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      console.log(`${this.baseUrl}${url}`);

      const result = await response.json();

      return result;
    } catch (error) {
      console.error("Fetch error:", error);
      return null;
    }
  }
}

export default BaseApi;
