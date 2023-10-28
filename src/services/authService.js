import { API_BASE_URL } from "../constants/api-constants";

export const requestOtp = async (phoneNumber) => {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ phoneNumber: `+${phoneNumber}` }),
    });

    if (!response.ok) {
      throw new Error("API request failed");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("API call failed:", error);
  }
};

export const sendOtp = async (phoneNumber, requestId, otp) => {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/verify_otp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phoneNumber: `+${phoneNumber}`, requestId, otp }),
      });
  
      if (!response.ok) {
        throw new Error("API request failed");
      }
  
      const data = await response.json();
  
      return data;
    } catch (error) {
      console.error("API call failed:", error);
    }
  };
