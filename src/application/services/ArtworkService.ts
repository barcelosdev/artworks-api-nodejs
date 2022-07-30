import axios from "axios";
import ArtworkDTO from "../dtos/artwork/ArtworkDTO";

const apiUrl: string = "https://api.artic.edu/api/v1/artworks"
const fields: string = "fields=id,title,artist_titles,category_titles"

class ArtworkService {

    async getArtwork(id: string): Promise<ArtworkDTO> {
        return await getUrl(`${apiUrl}/${id}?${fields}`)
    }
    async listWithFilter(keywords: string) {
        return await getUrl(`${apiUrl}/search?q=${keywords}&${fields}`)
    }
}

async function getUrl(url: string) {
    try {
        let response = { pagination: {}, data: {} };

        await axios.get(url).then((res) => { 

            if(res.data['data'] > res.data){
                let pagination = {
                    total: res.data['pagination'].total,
                    limit: res.data['pagination'].limit,
                    totalPages: res.data['pagination'].total_pages,
                    currentPage: res.data['pagination'].current_page,
                }

                let datas = new Array();

                res.data['data'].forEach((element: { id: string; title: any; artist_titles: any; category_titles: any; }) => {
                    datas.push({
                        id: element.id,
                        title: element.title,
                        artistTitles: [element.artist_titles],
                        categoryTitles: [element.category_titles]
                    })
                });

                const artwork: ArtworkDTO = new ArtworkDTO(datas)

                response.pagination = pagination;
                response.data = artwork.data;

            }
            else {
                let datas = {
                    id: res.data['data'].id,
                    title: res.data['data'].title,
                    artitsTitles: res.data['data'].artist_titles,
                    categoryTitles: res.data['data'].category_titles
                }

                response.data = datas;
            }
            
        }).catch(error => {
            return JSON.parse(JSON.stringify("1. catch:"))
        }) 
        return JSON.parse(JSON.stringify(response));
    } catch (error: any) {
        return JSON.parse(JSON.stringify("2. catch:"))
    }
}

export const artworkService = new ArtworkService();