export interface CheckNicknameRequest {
    api_key: string;
    id: string;
    server?: string;
    game_code: string;
}

export interface CheckNicknameResponse {
    status: boolean;
    data?: {
        nickname: string;
    };
    message?: string;
}
