import { artworkController } from "../controller/ArtworkController";
import express from 'express'

const route = express.Router();

route.get("/artworks/:id", artworkController.getArtwork)
route.get("/artworks/search/:keywords", artworkController.filter)

export default route;