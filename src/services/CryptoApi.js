import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'https://coinranking1.p.rapidapi.com';

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({
        baseUrl,
        prepareHeaders: (headers) => {
            headers.set('x-rapidapi-key', '8321456bd5msh848e8942ded3adcp186895jsn473948a42e41');
            headers.set('x-rapidapi-host', 'coinranking1.p.rapidapi.com');
            return headers;
        }
    }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (counter) => `/coins?limit=${counter}`,
        })
    })
});

export const {
    useGetCryptosQuery, 
} = cryptoApi;

// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'

// const cryptoApiHeaders = {
//     'x-rapidapi-key': '8321456bd5msh848e8942ded3adcp186895jsn473948a42e41',
//     'x-rapidapi-host': 'coinranking1.p.rapidapi.com'
// }

// const baseUrl = 'https://coinranking1.p.rapidapi.com/stats';  //maybe have to remove "/stats"

// const createRequest = (url) => ({ url, headers: cryptoApiHeaders})

// export const cryptoApi = createApi({
//     reducerPath: 'cryptoApi',
//     baseQuery: fetchBaseQuery({ baseUrl }),
//     endpoints: (builder) => ({
//         getCryptos: builder.query({
//             query: () => ('createRequest/coins')
//         })
//     })
// });

// const options = {
//     method: 'GET',
//     url: 'https://coinranking1.p.rapidapi.com/stats',
//     params: {
//       referenceCurrencyUuid: 'yhjMzLPhuIDl'
//     },
//     headers: {
//       'x-rapidapi-key': '8321456bd5msh848e8942ded3adcp186895jsn473948a42e41',
//       'x-rapidapi-host': 'coinranking1.p.rapidapi.com'
//     }
//   };