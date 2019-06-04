import {http} from "../utils/my-http"

export const mainContent = () => http("post",'/lovev/miguMovie/data/seeFilmData.jsp')