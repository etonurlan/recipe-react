import {Routes, Route} from "react-router-dom"

import { Home } from "../pages/Home"
import { RecipeCategory } from "../pages/RecipeCategory"
import { Recipe } from "../pages/Recipe"

export const Body = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/category/:title" element={<RecipeCategory />} />
                <Route path="/recipe/:title" element={<Recipe />} />
            </Routes>
        </div>
    )
}