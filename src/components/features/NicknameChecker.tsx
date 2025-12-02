import { useState } from "react";
import { checkNickname } from "@/services/api";
import { CheckNicknameResponse } from "@/types/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { toast } from "sonner";

export function NicknameChecker() {
    const [apiKey, setApiKey] = useState("");
    const [userId, setUserId] = useState("");
    const [serverId, setServerId] = useState("");
    const [gameCode, setGameCode] = useState("mobile-legends");
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<CheckNicknameResponse | null>(null);

    const handleCheck = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!apiKey || !userId || !gameCode) {
            toast.error("Mohon lengkapi data yang diperlukan");
            return;
        }

        setLoading(true);
        setResult(null);

        try {
            const response = await checkNickname({
                api_key: apiKey,
                id: userId,
                server: serverId,
                game_code: gameCode,
            });

            setResult(response);

            if (response.status) {
                toast.success("Nickname ditemukan!");
            } else {
                toast.error(response.message || "Gagal mengecek nickname");
            }
        } catch (error) {
            toast.error("Terjadi kesalahan sistem");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-4">
            <Card className="w-full max-w-md border-slate-700 bg-slate-800/50 backdrop-blur-xl text-slate-100 shadow-2xl">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        Cek Nickname Game
                    </CardTitle>
                    <CardDescription className="text-slate-400">
                        Validasi ID game sebelum transaksi
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleCheck} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="api_key">API Key</Label>
                            <Input
                                id="api_key"
                                placeholder="Masukkan API Key"
                                value={apiKey}
                                onChange={(e) => setApiKey(e.target.value)}
                                className="bg-slate-900/50 border-slate-700 focus:ring-blue-500"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="game_code">Game</Label>
                            <Select value={gameCode} onValueChange={setGameCode}>
                                <SelectTrigger className="bg-slate-900/50 border-slate-700">
                                    <SelectValue placeholder="Pilih Game" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="mobile-legends">Mobile Legends</SelectItem>
                                    <SelectItem value="free-fire">Free Fire</SelectItem>
                                    <SelectItem value="pubg-mobile">PUBG Mobile</SelectItem>
                                    <SelectItem value="genshin-impact">Genshin Impact</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2 col-span-2 sm:col-span-1">
                                <Label htmlFor="user_id">User ID</Label>
                                <Input
                                    id="user_id"
                                    placeholder="12345678"
                                    value={userId}
                                    onChange={(e) => setUserId(e.target.value)}
                                    className="bg-slate-900/50 border-slate-700 focus:ring-blue-500"
                                />
                            </div>
                            <div className="space-y-2 col-span-2 sm:col-span-1">
                                <Label htmlFor="server_id">Server ID (Optional)</Label>
                                <Input
                                    id="server_id"
                                    placeholder="1234"
                                    value={serverId}
                                    onChange={(e) => setServerId(e.target.value)}
                                    className="bg-slate-900/50 border-slate-700 focus:ring-blue-500"
                                />
                            </div>
                        </div>

                        <Button
                            type="submit"
                            className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
                            disabled={loading}
                        >
                            {loading ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Memproses...
                                </>
                            ) : (
                                "Cek Nickname"
                            )}
                        </Button>
                    </form>

                    {result && (
                        <div className="mt-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            {result.status ? (
                                <Alert className="bg-green-500/10 border-green-500/50 text-green-400">
                                    <CheckCircle2 className="h-4 w-4" />
                                    <AlertTitle>Berhasil Ditemukan</AlertTitle>
                                    <AlertDescription className="mt-2">
                                        <div className="text-sm text-slate-400">Nickname:</div>
                                        <div className="text-xl font-bold text-white">{result.data?.nickname}</div>
                                    </AlertDescription>
                                </Alert>
                            ) : (
                                <Alert variant="destructive" className="bg-red-500/10 border-red-500/50 text-red-400">
                                    <AlertCircle className="h-4 w-4" />
                                    <AlertTitle>Gagal</AlertTitle>
                                    <AlertDescription>
                                        {result.message}
                                    </AlertDescription>
                                </Alert>
                            )}
                        </div>
                    )}
                </CardContent>
                <CardFooter className="justify-center text-xs text-slate-500">
                    Powered by KokinPay API
                </CardFooter>
            </Card>
        </div>
    );
}
