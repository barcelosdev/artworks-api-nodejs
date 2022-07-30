import { Request, Response } from "express";
import { artworkService } from "../services/ArtworkService";

export class ArtworkController {

    async getArtwork(req: Request, res: Response){
        try{
            const artwork = await artworkService.getArtwork(req.params.id)
            artwork ? res.status(200).json(artwork): res.status(404).json({ error: "Artwork doesn't exist" });
        } catch(err) {
            res.status(500).json({ err: "ArtworkController.getArtwork"});
        }
    }
    async filter(req: Request, res: Response){
        try{
            const artwork = await artworkService.listWithFilter(req.params.keywords);
            artwork ? res.status(200).json(artwork): res.status(404).json({ error: "Artwork doesn't exist" });
        } catch(err) {
            res.status(500).json({ err: "ArtworkController.filter"});
        }
    }
}

export const artworkController = new ArtworkController();