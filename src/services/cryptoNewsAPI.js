import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


// const cryptoNewsHeaders = {
//     'x-rapidapi-key': '8321456bd5msh848e8942ded3adcp186895jsn473948a42e41',
//     'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
//     'X-BingApis-SDK': 'true'
// }

const baseUrl = 'https://bing-news-search1.p.rapidapi.com/news';

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({
        baseUrl,
        prepareHeaders: (headers) => {
            headers.set('x-rapidapi-key', '8321456bd5msh848e8942ded3adcp186895jsn473948a42e41');
            headers.set('x-rapidapi-host', 'bing-news-search1.p.rapidapi.com');
            return headers;
        }
    }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({ newsCategory, counter }) => `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${counter}`,
        })
    })
    
});

export const {
    useGetCryptoNewsQuery, 
} = cryptoNewsApi;