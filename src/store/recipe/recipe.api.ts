import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

import { CategoryInterface, ICategory, IFood, IMeal, MealInterface, ServerResponse } from '../../models/models'

export const recipeApi = createApi({
    reducerPath: "recipeApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://www.themealdb.com/api/json/v1/1/" }),
    endpoints: (builder) => ({
        getAllCategory: builder.query<ServerResponse<ICategory>, string>({
            query: () => ({
                url: `categories.php`
            })
        }),
        getMealByCategory: builder.query<CategoryInterface<IMeal>, string>({
            query: (title: string) => ({
                url: `filter.php`,
                params: {
                    c: title,
                }
            })
        }),
        getMeal: builder.query<MealInterface<IFood>, string>({
            query: (title: string) => ({
                url: `search.php`,
                params: {
                    s: title,
                }
            })
        })
    })
})

export const {useGetAllCategoryQuery, useGetMealByCategoryQuery, useGetMealQuery} = recipeApi