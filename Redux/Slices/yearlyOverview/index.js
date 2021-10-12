import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import API_CONFIG from '../../Api'

const axiosBaseQuery = () => async () => {
    return { data: "" }
}
export const yearlyOverviewAPI = createApi({
    reducerPath: 'yearlyOverview',
    baseQuery: axiosBaseQuery(),
    baseQuery: fetchBaseQuery({ baseUrl:API_CONFIG && API_CONFIG.API_BASE }),
    endpoints: (build) => ({
        getYearlyOverview: build.query({
            query: (data) => ({
                url: API_CONFIG && API_CONFIG.YEARLY_OVERVIEW,
                headers: {
                    'Content-Type': 'application/json',
                    'AuthToken': "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJVc2VySWQiOiIyIiwiVXNlck5hbWUiOiJUZXN0IE1vYiBBZG1pbiIsIlVzZXJFbWFpbCI6ImluZm9AYXBwdGVzdC5jb20iLCJVc2VyTW9iaWxlIjoiIiwiVXNlckxldmVsIjoiMSIsIlVzZXJQcm9maWxlIjpudWxsLCJVc2VySW1hZ2UiOiJVc2VySW1hZ2VfMTYzMjM3NjQwNy5wbmciLCJVc2VyUGVybWlzc2lvblR5cGUiOiIiLCJVc2VyUGVybWlzc2lvbiI6IiIsIlVzZXJXb3JrcyI6IiIsImlzX0FkbWluIjpudWxsLCJpc19zdXBlckFkbWluIjoiMCIsIm1vZHVsZSI6IjEsMiwzLDQsNSw2LDcsOCw5LDEwLDEzIiwibW9kdWxlX3Blcm1pc3Npb24iOiIxNSwxNSwxNSwxNSwxNSwxNSwxNSwxNSwxNSwxNSwxNSIsIm1lbnUiOiIxMyw5LDUsMywxLDIsMTQsMTUsMTAsMTEsNiw3LDE2LDE3LDE4LDE5LDIwLDIxLDIyLDIzLDI0LDI1LDI2LDI3LDI4IiwibWVudV9wZXJtaXNzaW9uIjoiOCwxNSwxNSwxNSwxNSwxNSwxNSwxNSwxNSwxNSw4LDgsMTUsMTUsMTUsMTUsMTUsMTUsMTUsMTUsMTUsMTUsMTUsOCwxNSIsImRvbWFpbiI6ImFwcHRlc3QuY29tIiwiY29ubmVjdGlvbl9kYiI6ImFwcHRlc3QiLCJiYXNlX3VybCI6IiIsInVwbG9hZHNfZm9sZGVyX25hbWUiOiJodHRwczpcL1wvd3d3LmNybS1hcHAtcG9ydGFsLmNvbVwvY3JtXC9zdGF0aWNcL3VwbG9hZHNcL2FwcHRlc3QuY29tXC8iLCJvcHBvcnR1bml0eV9jbG9zaW5nIjoxLCJvcHBvcnR1bml0eV9jb3N0X2VudHJ5IjoxLCJsb2NhdGlvbl9wZXJtaXNzaW9uIjoiMSIsImJ1c2luZXNzX2NhcmRfcGVybWlzc2lvbiI6IjEiLCJwaG9uZV9jb250YWN0X3Blcm1pc3Npb24iOiIxIiwiQVBJX1RJTUUiOjE2MzI5Nzc2OTB9.g2OmIOgEpESxYNtoT1MayC1joIBfr_PsLrhjB_ElptE",
                },
                method: "post",
                data
            })
        }),

    }),
})

export const { useGetYearlyOverviewQuery } = yearlyOverviewAPI