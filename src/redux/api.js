import axios from "axios";
const YOUR_APP_KEY = "ebe17945a2e0b60aa975c07e0829b3ee";
const YOUR_APP_ID = "41fcccf5";


export const getRecipes = async (query)=> {
    const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=9&calories=591-722&health=alcohol-free`

    return await axios.get(url)
}