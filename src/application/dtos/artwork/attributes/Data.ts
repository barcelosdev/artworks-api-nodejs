type DataProperties = {
    id: string,
    title: string;
    artistTitles: string[],
    categoryTitles: string[],
}

export class Data {
    public properties: DataProperties;

    constructor(properties: DataProperties){
        this.properties = properties;
    }
}