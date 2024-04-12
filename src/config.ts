import { Platform } from "fnbr/dist/enums/Enums";
import { Config } from "./types/config";

const config: Config = {
    prefix: "!",
    ownerIds: process.env.OWNER_IDS?.split(', ') || [],
    status: "In Lobby Server Di RENZO_ITA",
    platform: Platform.PSN,
    outfit: "Renegade Raider",
    backpack: "",
    pickaxe: "Driver",
    emote: "",
    level: 143,
};

export default config;
