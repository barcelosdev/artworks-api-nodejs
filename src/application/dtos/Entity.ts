import crypto from 'crypto'

export abstract class Entity<T> {

    protected _id: string;
    public properties: T;

    constructor(properties: T, id?:string){
        this._id = crypto.randomUUID();
        this.properties = properties;
    }

    get id(){ return this._id; }
    set id(id: string){ this.id = id; }
}