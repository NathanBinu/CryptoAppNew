import { Card, Col, Row, Typography } from 'antd';
import moment from 'moment';
import React from 'react';
import { Link } from 'react-router-dom';
import {
    useGetRecentNewsQuery,
    useGetTopNewsQuery,
} from '../services/cryptoNewsAPI';

const { Title, Text } = Typography;

const News = ({ variant }) => {
  // 1) Call both hooks unconditionally
  const {
    data: recentData,
    isFetching: isFetchingRecent,
    error: errorRecent,
  } = useGetRecentNewsQuery();

  const {
    data: topData,
    isFetching: isFetchingTop,
    error: errorTop,
  } = useGetTopNewsQuery();

  // 2) Decide which data to use based on the variant
  const data = variant === 'home' ? recentData : topData;
  const isFetching = variant === 'home' ? isFetchingRecent : isFetchingTop;
  const error = variant === 'home' ? errorRecent : errorTop;

  // 3) Handle loading and errors
  if (isFetching) return <div>Loading...</div>;
  if (error) return <div>Error fetching news.</div>;

  // 4) Render the articles
  const articles = data?.articles || [];

  return (
    <div>
      <h1 style={{ marginBottom: '1.5rem' }}>
        {variant === 'home'
          ? 'Latest Cryptocurrency News (Past Week)'
          : 'Top Cryptocurrency News (Past Month)'}
      </h1>
      <Row gutter={[24, 24]} style={{ marginTop: '1rem' }}>
        {articles.map((article, index) => (
          <Col xs={24} sm={12} lg={8} key={index}>
            <Link
              to={{ pathname: article.url }}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <Card hoverable className="news-card" style={{ cursor: 'pointer' }}>
                <div className="news-image-container">
                  <Title className="news-title" level={4}>
                    {article.title}
                  </Title>
                  {article.image && (
                    <img
                      style={{ maxWidth: '100px', maxHeight: '100px' }}
                      src={article.image}
                      alt="news"
                    />
                  )}
                </div>
                <p>
                  {article.description
                    ? article.description.substring(0, 100)
                    : 'No description available.'}
                  ...
                </p>
                <div
                  className="provider-container"
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  <Text className="provider-name">
                    {article.source?.name || 'Unknown'}
                  </Text>
                  <Text>
                    {article.publishedAt
                      ? moment(article.publishedAt).startOf('ss').fromNow()
                      : ''}
                  </Text>
                </div>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default News;













// src/components/News.jsx

// import React from 'react';
// import { Row, Col, Card, Typography } from 'antd';
// import moment from 'moment';

// import { useGetCryptoNewsQuery } from '../services/cryptoNewsAPI';

// const { Title, Text } = Typography;

// const News = ({ simplified }) => {
//   // Example: if "simplified" is true, you might fetch fewer articles.
//   // Adjust or remove 'simplified' logic to fit your needs.
//   const { data: newsData, isFetching } = useGetCryptoNewsQuery({
//     newsCategory: 'cryptocurrency',
//   });

//   // While loading, display a simple message or a spinner
//   if (isFetching) return <div>Loading...</div>;

//   // google-news13 typically returns an array of articles under "articles"
//   const articles = newsData?.articles || [];

//   return (
//     <div>
//       <h2>Latest Cryptocurrency News</h2>
//       <Row gutter={[24, 24]}>
//         {articles.map((article, index) => (
//           <Col xs={24} sm={12} lg={8} key={index}>
//             <Card hoverable className="news-card">
//               <a href={article.link} target="_blank" rel="noreferrer">
//                 <div className="news-image-container">
//                   {/* Title */}
//                   <Title className="news-title" level={4}>
//                     {article.title}
//                   </Title>
//                   {/* Thumbnail image, if available */}
//                   {article.media && (
//                     <img
//                       style={{ maxWidth: '100px', maxHeight: '100px' }}
//                       src={article.media}
//                       alt="news"
//                     />
//                   )}
//                 </div>
//                 {/* Summary snippet */}
//                 <p>
//                   {article.summary
//                     ? article.summary.substring(0, 100)
//                     : 'No description available.'}
//                   ...
//                 </p>
//                 {/* Provider/Author and Time */}
//                 <div
//                   className="provider-container"
//                   style={{ display: 'flex', justifyContent: 'space-between' }}
//                 >
//                   <Text className="provider-name">
//                     {article.author || 'Unknown Author'}
//                   </Text>
//                   <Text>
//                     {article.published_date
//                       ? moment(article.published_date).startOf('ss').fromNow()
//                       : ''}
//                   </Text>
//                 </div>
//               </a>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </div>
//   );
// };

// export default News;










// import { Select, Typography } from 'antd';
// import React from 'react';
// import { useGetCryptoNewsQuery } from '../services/cryptoNewsAPI';

// const { Text, Title } = Typography;
// const { Option } = Select;

// const News = ({ simplified }) => {
//     const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory: 'Cryptocurrency', counter: simplified ? 10 : 100 });

//     console.log(cryptoNews);

//     return (
//         <div>
//             News
//         </div>
//     )

// }

// export default News

// // if(!cryptoNews?.value) return 'Loading...';

// //   return (
// //       <Row gutter={[ 24, 24 ]}>
// //           {cryptoNews.value.map((news, i) => (
// //               <Col xs={24} sm={12} lg={8} key={i}>
// //                   <Card hoverable className="news-card">
// //                       <a href={news.url} target="_blank" rel="noreferrer">
// //                         <div className='news-image-container'>
// //                             <Title className='news-title' level={4}>{news.name}</Title>
// //                         </div>
// //                       </a>
// //                   </Card>
// //               </Col>
// //           ))}
// //       </Row>
// //   )