type PaginationProperties = {
    total: number,
    limit: number,
    totalPages: number,
    currentPage: number,
}

export class Pagination {
    public properties: PaginationProperties;

    constructor(properties: PaginationProperties){
        this.properties = properties;
    }
}