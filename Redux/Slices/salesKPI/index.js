import { createApi,fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const axiosBaseQuery = () => async () => {
    return { data: "" }
}
export const salesKPIAPI = createApi({
    reducerPath: 'salesKPI',
    baseQuery: axiosBaseQuery(),
    baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com/" }),
	endpoints: (build) => ({
		getSalesKPI: build.query({ query: (data) => ({ url: 'users', method: "get", data }) }),
		
	}),
})

export const { useGetSalesKPIQuery } = salesKPIAPI
