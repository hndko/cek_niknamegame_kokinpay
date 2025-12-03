import { useState, useMemo } from "react";
import { checkNickname } from "@/services/api";
import type { CheckNicknameResponse } from "@/types/api";
import { GAMES } from "@/data/games";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Loader2, CheckCircle2, XCircle, Gamepad2, User, Globe, Search } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

export function NicknameChecker() {
    const [apiKey] = useState(import.meta.env.VITE_API_KEY || "");
    const [userId, setUserId] = useState("");
    const [serverId, setServerId] = useState("");
    const [gameCode, setGameCode] = useState("mobile-legends");
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<CheckNicknameResponse | null>(null);

    const selectedGame = useMemo(() => GAMES.find(g => g.code === gameCode), [gameCode]);

    const handleCheck = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!apiKey) {
            toast.error("API Key tidak ditemukan. Pastikan .env sudah dikonfigurasi.");
            return;
        }

        if (!userId) {
            toast.error("Mohon isi User ID");
            return;
        }

        if (selectedGame?.requiresServer && !serverId) {
            toast.error("Mohon isi Server ID / Zone ID");
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

    // Reset server ID when game changes
    const handleGameChange = (value: string) => {
        setGameCode(value);
        setServerId("");
        setResult(null);
    };

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-4 font-sans">
            <Card className="w-full max-w-lg border-slate-800 bg-slate-900/80 backdrop-blur-xl text-slate-100 shadow-2xl ring-1 ring-white/10">
                <CardHeader className="pb-6 border-b border-slate-800/50">
                    <div className="flex items-center gap-4">
                        <div className="p-3 rounded-2xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 border border-blue-500/20 shadow-inner shadow-blue-500/10">
                            <Gamepad2 className="w-8 h-8 text-blue-400" />
                        </div>
                        <div>
                            <CardTitle className="text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-slate-400 bg-clip-text text-transparent">
                                Cek Nickname
                            </CardTitle>
                            <CardDescription className="text-slate-400 text-sm mt-1">
                                Verifikasi identitas pemain game dengan mudah
                            </CardDescription>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="pt-6">
                    <form onSubmit={handleCheck} className="space-y-6">
                        <div className="space-y-2">
                            <Label className="text-slate-300 text-sm font-medium ml-1">Pilih Game</Label>
                            <Select value={gameCode} onValueChange={handleGameChange}>
                                <SelectTrigger className="bg-slate-950/50 border-slate-800 h-12 text-base focus:ring-blue-500/50 focus:border-blue-500 transition-all pl-4">
                                    <div className="flex items-center gap-3">
                                        <Search className="w-4 h-4 text-slate-500" />
                                        <SelectValue placeholder="Pilih Game" />
                                    </div>
                                </SelectTrigger>
                                <SelectContent className="bg-slate-900 border-slate-800 max-h-[300px] text-slate-200">
                                    {GAMES.map((game) => (
                                        <SelectItem key={game.code} value={game.code} className="focus:bg-slate-800 focus:text-white cursor-pointer py-3 pl-10 relative">
                                            {game.name}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className={cn("space-y-2", selectedGame?.requiresServer ? "col-span-1" : "col-span-2")}>
                                <Label htmlFor="user_id" className="text-slate-300 text-sm font-medium ml-1">User ID</Label>
                                <div className="relative">
                                    <User className="absolute left-3.5 top-3.5 w-5 h-5 text-slate-500" />
                                    <Input
                                        id="user_id"
                                        placeholder="Masukkan ID"
                                        value={userId}
                                        onChange={(e) => setUserId(e.target.value)}
                                        className="bg-slate-950/50 border-slate-800 h-12 pl-11 focus:ring-blue-500/50 focus:border-blue-500 transition-all placeholder:text-slate-600"
                                    />
                                </div>
                            </div>

                            {selectedGame?.requiresServer && (
                                <div className="space-y-2 col-span-1">
                                    <Label htmlFor="server_id" className="text-slate-300 text-sm font-medium ml-1">
                                        {selectedGame.placeholder || "Server / Zone"}
                                    </Label>

                                    {selectedGame.serverType === 'select' && selectedGame.servers ? (
                                        <Select value={serverId} onValueChange={setServerId}>
                                            <SelectTrigger className="bg-slate-950/50 border-slate-800 h-12 focus:ring-blue-500/50 focus:border-blue-500 transition-all pl-3">
                                                <div className="flex items-center gap-2 overflow-hidden">
                                                    <Globe className="w-4 h-4 text-slate-500 flex-shrink-0" />
                                                    <SelectValue placeholder="Pilih Server" />
                                                </div>
                                            </SelectTrigger>
                                            <SelectContent className="bg-slate-900 border-slate-800 max-h-[300px] text-slate-200">
                                                {selectedGame.servers.map((srv) => (
                                                    <SelectItem key={srv.value} value={srv.value} className="focus:bg-slate-800 focus:text-white cursor-pointer py-2">
                                                        {srv.label}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    ) : (
                                        <div className="relative">
                                            <Globe className="absolute left-3.5 top-3.5 w-5 h-5 text-slate-500" />
                                            <Input
                                                id="server_id"
                                                placeholder={selectedGame.placeholder || "1234"}
                                                value={serverId}
                                                onChange={(e) => setServerId(e.target.value)}
                                                className="bg-slate-950/50 border-slate-800 h-12 pl-11 focus:ring-blue-500/50 focus:border-blue-500 transition-all placeholder:text-slate-600"
                                            />
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>

                        <Button
                            type="submit"
                            className="w-full h-12 text-base font-medium bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-lg shadow-blue-900/20 transition-all duration-300 mt-2"
                            disabled={loading}
                        >
                            {loading ? (
                                <>
                                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                    Memproses...
                                </>
                            ) : (
                                "Cek Nickname Sekarang"
                            )}
                        </Button>
                    </form>

                    {result && (
                        <div className="mt-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            {result.status ? (
                                <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-emerald-500/10 to-green-500/10 border border-emerald-500/20 p-6 group hover:border-emerald-500/30 transition-all">
                                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                        <CheckCircle2 className="w-24 h-24 text-emerald-500" />
                                    </div>
                                    <div className="flex items-start gap-4 relative z-10">
                                        <div className="p-2 rounded-full bg-emerald-500/20 text-emerald-400 shadow-lg shadow-emerald-900/20">
                                            <CheckCircle2 className="w-6 h-6" />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="text-emerald-400 font-semibold mb-1 text-lg">Berhasil Ditemukan!</h4>
                                            <p className="text-slate-400 text-sm mb-4">Data pemain valid dan ditemukan.</p>
                                            <div className="bg-slate-950/80 rounded-lg p-4 border border-emerald-500/20 backdrop-blur-sm">
                                                <div className="flex flex-col gap-1">
                                                    <span className="text-slate-500 text-xs uppercase tracking-wider font-semibold">Nickname</span>
                                                    <span className="text-2xl font-bold text-white tracking-wide font-mono">{result.data?.nickname}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-red-500/10 to-rose-500/10 border border-red-500/20 p-6">
                                    <div className="flex items-start gap-4">
                                        <div className="p-2 rounded-full bg-red-500/20 text-red-400">
                                            <XCircle className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="text-red-400 font-semibold mb-1 text-lg">Gagal Menemukan</h4>
                                            <p className="text-slate-300 text-sm leading-relaxed">
                                                {result.message || "Pastikan ID dan Server yang dimasukkan sudah benar."}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </CardContent>
                <CardFooter className="justify-center border-t border-slate-800/50 pt-6 pb-6 bg-slate-950/30 rounded-b-xl">
                    <p className="text-xs text-slate-500 flex items-center gap-2">
                        <span className="flex h-2 w-2 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        System Operational • Powered by KokinPay
                    </p>
                </CardFooter>
            </Card>
        </div>
    );
}
