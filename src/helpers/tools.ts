export const randomInt = (max: number, min: number = 0): number => {
    return Math.floor(Math.random() * (max - min)) + min;
}

export const randomFloatTwoDig = (max: number, min: number = 0): number => {
    return Math.round(((Math.random() * (max - min) + min)*100))/100;
}

export const randomDate = (from: Date, to:Date) => {
    const fromTime = from.getTime();
    const toTime = to.getTime();
    return new Date(fromTime + Math.random() * (toTime - fromTime));
}