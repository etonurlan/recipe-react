import { useParams } from "react-router-dom"
import { useGetMealQuery } from "../store/recipe/recipe.api"

export const Recipe = () => {
    const { title } = useParams()

    const {data} = useGetMealQuery(title)

    return (
        <div className="my-[15px] mx-[10px]">
            {data?.meals.map((food) => (
                <div className="bg-[#a38d9c] rounded-md py-[10px] px-[15px] text-[#fff]">
                    <div className="flex mb-[30px]">
                        <img className="rounded-md mr-[15px]" src={food.strMealThumb} alt="Food Img" />
                        <div>
                            <h1 className="text-[25px] font-semibold mb-[20px]">{food.strMeal}</h1>
                            <h6 className="text-[20px] font-medium mb-[20px]">Category: {food.strCategory}</h6>
                            {food.strArea ? <h6 className="text-[20px] font-medium mb-[20px]">Area: {food.strArea}</h6> : null}
                            <p className="mb-[20px]">{food.strInstructions}</p>
                            {food.strYoutube ? (
                                <div>
                                    <iframe
                                        src={`https://www.youtube.com/embed/${food.strYoutube.slice(-11)}`}
                                        allowFullScreen 
                                    />
                                </div>
                            ) : null}
                        </div>
                    </div>
                    <table className="border-collapse border-[7px] border-spacing-7
                     border-white w-[100%] rounded-md">
                        <thead>
                            <tr>
                                <th className="border-[5px] border-white">Ingredient</th>
                                <th className="border-[5px] border-white">Measure</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.keys(food).map((key) => {
                                if (key.includes('Ingredient') && food[key]) {
                                    return (
                                        <tr key={key}>
                                            <td className="pl-[10px] border-[3px] border-white">{food[key]}</td>
                                            <td className="pl-[10px] border-[3px] border-white">
                                                {
                                                    food[
                                                        `strMeasure${key.slice(
                                                            13
                                                        )}`
                                                    ]
                                                }
                                            </td>
                                        </tr>
                                    )
                                }
                            })}
                        </tbody>
                    </table>
                </div>
            ))}
        </div>
    )
}