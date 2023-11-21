import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

import { useGetMealByCategoryQuery } from "../store/recipe/recipe.api"

export const RecipeCategory = () => {
    const {title} = useParams()

    const {data} = useGetMealByCategoryQuery(title)

    return (
        <div className="grid grid-cols-3 gap-4 my-[15px] mx-[10px]">
            {data?.meals?.map((food) => (
                <Link to={`/recipe/${food.strMeal}`}>
                    <div className="bg-[#a38d9c] rounded-md py-[10px] px-[15px]
                    cursor-pointer text-[#fff] h-[100%]">
                        <img className="rounded-md mb-[10px] bg-white w-[100%]"
                        src={food?.strMealThumb} alt="Category Img" />
                        <h1 className="mb-[15px] font-semibold text-[20px]">
                            {food?.strMeal}
                        </h1>
                    </div>
                </Link>
            ))}
        </div>
    )
}