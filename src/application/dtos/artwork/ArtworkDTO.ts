import { Data } from "./attributes/Data"
import { Pagination } from "./attributes/Pagination"

class ArtworkDTO {
    pagination?: Pagination;
    data: Data[];

    constructor(data: Data[], pagination?: Pagination){
        this.data = data;
        this.pagination = pagination;
    }
}

export default ArtworkDTO;