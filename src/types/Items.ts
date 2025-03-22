export type itemData = {
    [key: string]: {
        name: string;
        description: string;
        colloq: string;
        plaintext: string;
        from?: string[];
        into?: string[];
        depth?: number;
        stacks?: number;
        inStore?: boolean;
        requiredChampion?: string;
        requiredAlly?: string;
        specialRecipe?: number;
        consumed?: boolean;
        consumeOnFull?: boolean;
        image: {
            full: string;
            sprite: string;
            group: string;
            x: number;
            y: number;
            w: number;
            h: number;
        };
        gold: {
            base: number;
            total: number;
            sell: number;
            purchasable: boolean;
        };
        tags: string[];
        maps: {
            [key: string]: boolean;
        };
        stats: {
            [key: string]: number;
        };
    };
};

export type basic = {
    name: string;
    rune: {
        isrune: boolean;
        tier: number;
        type: string;
    };
    gold: {
        base: number;
        total: number;
        sell: number;
        purchasable: boolean;
    };
    group: string;
    description: string;
    colloq: string;
    plaintext: string;
    consumed?: boolean;
    stacks?: number;
    depth?: number;
    consumeOnFull?: boolean;
    from?: string[];
    into?: string[];
    specialRecipe?: number;
    inStore?: boolean;
    requiredChampion?: string;
    requiredAlly?: string;
    stats: {
        [key: string]: number;
    };
    tags: string[];
    maps: {
        [key: string]: boolean;
    };
};

export type singleItem = {
    name: string;
    description: string;
    colloq: string;
    plaintext: string;
    from?: string[];
    into?: string[];
    depth?: number;
    stacks?: number;
    inStore?: boolean;
    requiredChampion?: string;
    requiredAlly?: string;
    specialRecipe?: number;
    consumed?: boolean;
    consumeOnFull?: boolean;
    image: {
        full: string;
        sprite: string;
        group: string;
        x: number;
        y: number;
        w: number;
        h: number;
    };
    gold: {
        base: number;
        total: number;
        sell: number;
        purchasable: boolean;
    };
    tags: string[];
    maps: {
        [key: string]: boolean;
    };
    stats: {
        [key: string]: number;
    };
}

export type Items = {
    type: string;
    version: string;
    basic: basic;
    groups: {
        id: string;
        MaxGroupOwnable: string;
    }[];
    tree: {
        header: string;
        tags: string[];
    }[];
    data: itemData;
};