import { createApi } from '@reduxjs/toolkit/query/react'

const orderApiResponse = ["item", "item1", "item2", "item3", "item4", "item5", "item6", "item", "item1", "item2", "item3", "item4", "item5", "item6"]
const axiosBaseQuery = () => async () => {
	return { data: orderApiResponse  }
}
export const orderAPI = createApi({
	reducerPath: 'order',
	baseQuery: axiosBaseQuery(),
	endpoints: (build) => ({
		getOrder: build.query({
			query: () => `/`,
		}),
	}),
})

export const { useGetOrderQuery } = orderAPI