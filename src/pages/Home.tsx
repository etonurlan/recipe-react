import { Link } from "react-router-dom"

import { useGetAllCategoryQuery } from "../store/recipe/recipe.api"

export const Home = () => {
    const {data} = useGetAllCategoryQuery("")

    return (
        <div className="grid grid-cols-3 gap-4 my-[15px] mx-[10px]">
            {data?.categories?.map((category) => (
                <Link key={category.idCategory} to={`/category/${category.strCategory}`}>
                    <div className="bg-[#a38d9c] rounded-md py-[10px] px-[15px]
                    cursor-pointer text-[#fff] h-[100%]">
                        <img className="rounded-md mb-[10px] bg-white w-[100%]"
                        src={category?.strCategoryThumb} alt="Category Img" />
                        <h1 className="mb-[15px] font-semibold text-[20px]">
                            {category.strCategory}
                        </h1>
                        <p>{category.strCategoryDescription}</p>
                    </div>
                </Link>
            ))}
        </div>
    )
}