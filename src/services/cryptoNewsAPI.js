//API_KEY:816bbbcdf85e624aebba6460a7cca8c0

// src/services/cryptoNewsAPI.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://gnews.io/api/v4' }),
  endpoints: (builder) => ({
    // For the Home page: recent news from the past 48 hours (up to 12 articles)
    getRecentNews: builder.query({
      query: () =>
        // Changed from `when=7d` to `when=2d`:
        `/search?q=cryptocurrency&lang=en&country=us&max=12&when=2d&sortBy=publishedAt&apikey=816bbbcdf85e624aebba6460a7cca8c0`,
    }),
    // For the News page: top news from the past month (up to 10 articles)
    getTopNews: builder.query({
      query: () =>
        `/search?q=cryptocurrency&lang=en&country=us&max=10&when=30d&sortBy=relevance&apikey=816bbbcdf85e624aebba6460a7cca8c0`,
    }),
  }),
});

export const { useGetRecentNewsQuery, useGetTopNewsQuery } = cryptoNewsApi;











// export const { useGetCryptoNewsQuery } = cryptoNewsApi;


// // 3. Export the auto-generated hook for the 'getCryptoNews' endpoint
// export const { useGetCryptoNewsQuery } = cryptoNewsApi;

// const cryptoNewsheaders = {
//     'x-rapidapi-key': '8321456bd5msh848e8942ded3adcp186895jsn473948a42e41',
//     'x-rapidapi-host': 'google-news13.p.rapidapi.com'
// }

// const baseUrl = 'https://google-news13.p.rapidapi.com';


// export const cryptoNewsApi = createApi({
//     reducerPath: 'cryptoNewsApi',
//     baseQuery: fetchBaseQuery({
//       baseUrl,
//       prepareHeaders: (headers) => {
//         headers.set('x-rapidapi-key', '8321456bd5msh848e8942ded3adcp186895jsn473948a42e41');
//         headers.set('x-rapidapi-host', 'google-news13.p.rapidapi.com');
//         return headers;
//       },
//     }),
//     endpoints: (builder) => ({
//       getCryptoNews: builder.query({
//         // Example: fetch news with `q={newsCategory}`, 
//         // from the past day (`when=1d`), safe search off, English/US.
//         query: ({ newsCategory }) =>
//           `/search?q=${newsCategory}&when=1d&safe=off&hl=en&gl=US&ceid=US:en`,
//       }),
//     }),
//   });
  
//   export const { useGetCryptoNewsQuery } = cryptoNewsApi;