const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const useFetch = async (url: string) => {
  try {
    const response = await fetch(`${BASE_URL}${url}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch");
    }
    const data = await response.json();

    return { data, error: false };
  } catch (error) {
    return { data: null, error: true };
  }
};
