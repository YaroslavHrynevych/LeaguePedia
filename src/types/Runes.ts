export type RuneTree = {
    id: number;
    key: string;
    icon: string;
    name: string;
    slots: RuneSlot[];
};

export type RuneSlot = {
    runes: Rune[];
};

export type Rune = {
    id: number;
    key: string;
    icon: string;
    name: string;
    shortDesc: string;
    longDesc: string;
};