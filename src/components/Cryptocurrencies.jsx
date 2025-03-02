import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import millify from 'millify';
import { Card, Row, Col, Input } from 'antd';
import { useGetCryptosQuery } from '../services/CryptoApi';

const Cryptocurrencies = ({ simplified }) => {
  const counter = simplified ? 10 : 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(counter);
  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  
  

  useEffect(() => {
      const filteredData = cryptosList?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLowerCase()));
      setCryptos(filteredData);
  }, [cryptosList, searchTerm]);
  
  if(isFetching) return 'Loading';

  return (
    <>
      {/* Whole page is simplified, however not simplified means apply what is inside the !simplified to 
      display whats not on the Homepage i.e: when you click "show more" on the homepage, 
      its no more on the homepage thus the search bar dissapears from homepage
      and shows up when you click "show more" */}
      {!simplified &&(
          <div className="search-crypto">
          <Input placeholder="Search Cryptocurrency" onChange={(e) => setSearchTerm(e.target.value)} />
        </div>
      )}
      <Row gutter={[32,32]} className="crypto-card-container">
          {cryptos?.map((currency) => (
            <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.id}>
              <Link to={`/crypto/${currency.id}`}>
                <Card 
                  title={`${currency.rank}. ${currency.name}`}
                  extra={<img className="crypto-image" src={currency.iconUrl} />}
                  hoverable
                >
                  <p>Price: {millify(currency.price)} </p>
                  <p>Market Cap: {millify(currency.marketCap)} </p>
                  <p>Daily Change: {millify(currency.change)}%</p>

                </Card>
              </Link>
            </Col>
          ))}
      </Row>
    </>
  )
}

export default Cryptocurrencies
