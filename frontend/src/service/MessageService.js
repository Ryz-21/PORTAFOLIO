const API_URL = "http://localhost:8080/api/send-email";

export const sendMessage = async (message) => {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(message),
    });
    return response.json();
};