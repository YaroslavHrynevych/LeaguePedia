export type ChampionFull = {
    type: string;
    format: string;
    version: string;
    data: {
        [key: string]: ChampionFullData
    };
};

export type ChampionFullStats = {
    hp: number;
    hpperlevel: number;
    mp: number;
    mpperlevel: number;
    movespeed: number;
    armor: number;
    armorperlevel: number;
    spellblock: number;
    spellblockperlevel: number;
    attackrange: number;
    hpregen: number;
    hpregenperlevel: number;
    mpregen: number;
    mpregenperlevel: number;
    crit: number;
    critperlevel: number;
    attackdamage: number;
    attackdamageperlevel: number;
    attackspeedperlevel: number;
    attackspeed: number;
}

export type ChampionFullData = {
    id: string;
    key: string;
    name: string;
    title: string;
    lore: string;
    blurb: string;
    allytips: string[];
    enemytips: string[];
    tags: string[];
    partype: string;
    image: {
        full: string;
        sprite: string;
        group: string;
        x: number;
        y: number;
        w: number;
        h: number;
    };
    skins: {
        id: string;
        num: number;
        name: string;
        chromas: boolean;
    }[];
    info: {
        attack: number;
        defense: number;
        magic: number;
        difficulty: number;
    };

    stats: ChampionFullStats;
    spells: {
        id: string;
        name: string;
        description: string;
        tooltip: string;
        leveltip: {
            label: string[];
            effect: string[];
        };
        maxrank: number;
        cooldown: number[];
        cooldownBurn: string;
        cost: number[];
        costBurn: string;
        datavalues: {};
        effect: (number[] | null)[];
        effectBurn: (string | null)[];
        vars: any[]; // Assume dynamic vars for now.
        key: string;
        summonerLevel: number;
        modes: string[];
        costType: string;
        maxammo: string;
        range: number[];
        rangeBurn: string;
        image: {
            full: string;
            sprite: string;
            group: string;
            x: number;
            y: number;
            w: number;
            h: number;
        };
        resource: string;
    }[];
    passive: {
        name: string;
        description: string;
        image: {
            full: string;
            sprite: string;
            group: string;
            x: number;
            y: number;
            w: number;
            h: number;
        };
    };
    recommended: any[]; // Assume recommended builds are dynamic for now.
}