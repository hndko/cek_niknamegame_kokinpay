import type { CheckNicknameRequest, CheckNicknameResponse } from "@/types/api";

const API_URL = import.meta.env.DEV
    ? "/api-proxy/check-nickname"
    : "https://api.kokinpay.com/check-nickname";

export async function checkNickname(params: CheckNicknameRequest): Promise<CheckNicknameResponse> {
    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(params),
        });

        const result = await response.json();
        return result;
    } catch (error) {
        console.error("API Error:", error);
        return {
            status: false,
            message: "Terjadi kesalahan koneksi atau server tidak merespon.",
        };
    }
}
