export type Maps = {
    type: string,
    version: string,
    data: {
        [key: string]: {
            MapName: string,
            MapId: string,
            image: {
                full: string,
                sprite: string,
                group: string,
                x: number,
                y: number,
                w: number,
                h: number,
            }
        }
    }
}