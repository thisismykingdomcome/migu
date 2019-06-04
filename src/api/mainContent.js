import {http} from "../utils/my-http"

export const mainContent = () => http("post",'api/lovev/miguMovie/data/seeFilmData.jsp')