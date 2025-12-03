export interface GameOption {
    name: string;
    code: string;
    requiresServer: boolean;
    serverType?: 'text' | 'select';
    servers?: { label: string; value: string }[];
    placeholder?: string;
}

export const GAMES: GameOption[] = [
    { name: "Mobile Legends", code: "mobile-legends", requiresServer: true, serverType: "text", placeholder: "Zone ID" },
    { name: "Free Fire", code: "free-fire", requiresServer: false },
    { name: "PUBG Mobile", code: "pubg-mobile", requiresServer: false },
    { name: "Call of Duty Mobile", code: "call-of-duty-mobile", requiresServer: false },
    { name: "Valorant", code: "valorant", requiresServer: false },
    {
        name: "Genshin Impact",
        code: "genshin-impact",
        requiresServer: true,
        serverType: "select",
        servers: [
            { label: "Asia", value: "os_asia" },
            { label: "America", value: "os_usa" },
            { label: "Europe", value: "os_euro" },
            { label: "TW/HK/MO", value: "os_cht" }
        ]
    },
    { name: "Honor of Kings", code: "honor-of-kings", requiresServer: false },
    { name: "League of Legends: Wild Rift", code: "league-of-legends-wild-rift", requiresServer: false },
    { name: "Arena of Valor", code: "arena-of-valor", requiresServer: false },
    { name: "Point Blank", code: "point-blank", requiresServer: false },
    { name: "Free Fire Max", code: "free-fire-max", requiresServer: false },
    { name: "Whiteout Survival", code: "whiteout-survival", requiresServer: false },
    { name: "Honkai Impact 3", code: "honkai-impact-3", requiresServer: false },
    {
        name: "Honkai: Star Rail",
        code: "honkai-star-rail",
        requiresServer: true,
        serverType: "select",
        servers: [
            { label: "Asia", value: "os_asia" },
            { label: "America", value: "os_usa" },
            { label: "Europe", value: "os_euro" },
            { label: "TW/HK/MO", value: "os_cht" }
        ]
    },
    {
        name: "Eggy Party",
        code: "eggy-party",
        requiresServer: true,
        serverType: "select",
        servers: [
            { label: "Asia (10001)", value: "10001" }
        ]
    },
    { name: "Undawn", code: "undawn", requiresServer: false },
    { name: "Growtopia", code: "growtopia", requiresServer: false },
    { name: "League of Legends PC", code: "league-of-legends-pc", requiresServer: false },
    { name: "FC Mobile", code: "fc-mobile", requiresServer: false },
    { name: "Super Sus", code: "super-sus", requiresServer: false },
    {
        name: "Harry Potter: Magic Awakened",
        code: "harry-potter-magic-awakened",
        requiresServer: true,
        serverType: "select",
        servers: [
            { label: "Ashwinder", value: "Ashwinder" },
            { label: "Erumpent", value: "Erumpent" },
            { label: "Sphinx", value: "Sphinx" },
            { label: "Rougarou", value: "Rougarou" },
            { label: "不死鳥", value: "不死鳥" },
            { label: "ユニコーン", value: "ユニコーン" },
            { label: "니플러", value: "니플러" }
        ]
    },
    { name: "Revelation: Infinite Journey", code: "revelation-infinite-journey", requiresServer: false },
    { name: "MU Origin 3", code: "mu-origin-3", requiresServer: false },
    { name: "Sausage Man", code: "sausage-man", requiresServer: false },
    { name: "Speed Drifters", code: "speed-drifters", requiresServer: false },
    {
        name: "Tom and Jerry: Chase",
        code: "tom-and-jerry-chase",
        requiresServer: true,
        serverType: "select",
        servers: [
            { label: "Asia (10001)", value: "10001" }
        ]
    },
    { name: "Teamfight Tactics Mobile", code: "teamfight-tactics-mobile", requiresServer: false },
    {
        name: "LifeAfter",
        code: "lifeafter",
        requiresServer: true,
        serverType: "select",
        servers: [
            { label: "MiskaTown (500001)", value: "500001" },
            { label: "SandCastle (500002)", value: "500002" },
            { label: "MouthSwamp (500003)", value: "500003" },
            { label: "RedwoodTown (500004)", value: "500004" },
            { label: "Obelisk (500005)", value: "500005" },
            { label: "ChaosOutpost (500007)", value: "500007" },
            { label: "IronStride (500008)", value: "500008" },
            { label: "FallForest (510001)", value: "510001" },
            { label: "MountSnow (510002)", value: "510002" },
            { label: "NancyCity (520001)", value: "520001" },
            { label: "CharlesTown (520002)", value: "520002" },
            { label: "SnowHighlands (520003)", value: "520003" },
            { label: "Santopany (520004)", value: "520004" },
            { label: "LevinCity (520005)", value: "520005" },
            { label: "ChaosCity (520007)", value: "520007" },
            { label: "TwinIslands (520008)", value: "520008" },
            { label: "HopeWall (520009)", value: "520009" },
            { label: "NewLand (500006)", value: "500006" },
            { label: "CrystalthornSea (500009)", value: "500009" },
            { label: "MileStone (520006)", value: "520006" },
            { label: "LabyrinthSea (520010)", value: "520010" },
            { label: "파플래닛 (550001)", value: "550001" },
            { label: "미스카대학 (550002)", value: "550002" },
            { label: "희망의골짜기 (550003)", value: "550003" },
            { label: "다베트설산 (550004)", value: "550004" },
            { label: "가을빛산림 (550005)", value: "550005" },
            { label: "스노우힐 (550006)", value: "550006" },
            { label: "사막의요새 (550007)", value: "550007" },
            { label: "FallForest (560001)", value: "560001" },
            { label: "HopeValley (560002)", value: "560002" },
            { label: "SandCastle (560003)", value: "560003" },
            { label: "MountSnow (560004)", value: "560004" },
            { label: "St.Rona (560005)", value: "560005" },
            { label: "Oasis (560006)", value: "560006" },
            { label: "SilentIsland (560007)", value: "560007" },
            { label: "ArkCity (560008)", value: "560008" },
            { label: "EasySurvival (730001)", value: "730001" },
            { label: "SimpleSurvival (720001)", value: "720001" }
        ]
    },
    { name: "Laplace M", code: "laplace-m", requiresServer: false },
    { name: "Arena Breakout", code: "arena-breakout", requiresServer: false },
    {
        name: "Zenless Zone Zero",
        code: "zenless-zone-zero",
        requiresServer: true,
        serverType: "select",
        servers: [
            { label: "Asia", value: "os_asia" },
            { label: "America", value: "os_usa" },
            { label: "Europe", value: "os_euro" },
            { label: "TW/HK/MO", value: "os_cht" }
        ]
    },
    { name: "AFK Journey", code: "afk-journey", requiresServer: false },
    { name: "Magic Chess Go Go", code: "magic-chess-go-go", requiresServer: true, serverType: "text", placeholder: "Zone ID" },
    { name: "Love and Deepspace", code: "love-and-deepspace", requiresServer: false },
    { name: "Pokemon Unite", code: "pokemon-unite", requiresServer: false },
    { name: "Dragon Raja", code: "dragon-raja", requiresServer: false },
    { name: "Football Master 2", code: "football-master-2", requiresServer: false },
    { name: "Garena Shell", code: "garena-shell", requiresServer: false },
    {
        name: "Goddess of Victory: Nikke",
        code: "goddess-of-victory-nikke",
        requiresServer: true,
        serverType: "select",
        servers: [
            { label: "Global", value: "Global" },
            { label: "Japan", value: "JP" },
            { label: "North America", value: "NA" },
            { label: "Korea", value: "KR" },
            { label: "SEA", value: "SEA" }
        ]
    },
    { name: "Metal Slug: Awakening", code: "metal-slug-awakening", requiresServer: false },
    {
        name: "Ragnarok M: Eternal Love",
        code: "ragnarok-m-eternal-love",
        requiresServer: true,
        serverType: "select",
        servers: [
            { label: "Eternal Love (90001)", value: "90001" },
            { label: "Midnight Party (90002)", value: "90002" },
            { label: "Memory of Faith (90002003)", value: "90002003" },
            { label: "Valhalla Glory (90002004)", value: "90002004" },
            { label: "Port City (90002005)", value: "90002005" }
        ]
    }
];
