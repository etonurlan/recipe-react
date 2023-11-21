import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

import { useDebounce } from "../hooks/debounce"
import { useGetMealQuery } from "../store/recipe/recipe.api"

export const Header = () => {
    const [search, setSearch] = useState("")
    const [dropdown, setDropdown] = useState(false)
    const debounced = useDebounce(search)
    const {data} = useGetMealQuery(debounced, {
        skip: debounced.length<2,
    })

    useEffect(() => {
        setDropdown(debounced.length > 2 && data?.meals.length! > 0)
    }, [debounced, data?.meals])

    return (
        <header className="bg-[#a38d9c] py-[15px] px-[20px] shadow-md text-[#fff] flex">
            <Link className="mr-auto" to="/">
                <h1 className="font-semibold text-[25px]">Recipe</h1>
            </Link>
            <input
                className="rounded-md w-[300px] text-[#000] pl-2"
                type="text"
                placeholder="Search meal..."
                value={search}
                onChange={e => setSearch(e.target.value)} 
            />
            {dropdown && <ul className="list-none absolute right-[20px] top-[55px] max-h-[200px] overflow-y-scroll
             shadow-md bg-[#a38d9c] rounded-b-md w-[300px]">
                { data?.meals.map(food => (
                    <Link to={`/recipe/${food.strMeal}`}>
                        <li
                        key={food.idMeal}
                        className="py-2 px-4 hover:bg-gray-500 transition-colors cursor-pointer"
                        >{ food.strMeal }</li>
                    </Link>
                )) }
            </ul>
            }
        </header>
    )
}