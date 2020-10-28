import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createApolloFetch } from 'apollo-fetch';
import { FETCH_DATA_QUERY } from '../../query/fetchdata.query';

const Card = ({ location }) => {
  const content = useSelector((state) => state);
  const dispatch = useDispatch();
  const city = location;

  const getData = (location) => (dispatch) => {
    const fetch = createApolloFetch({
      uri: 'http://localhost:4000/graphql',
    });

    fetch({
      query: FETCH_DATA_QUERY,
      variables: { name: location },
    }).then((res) => {
      dispatch({
        type: 'FETCH_DATA',
        data: res.data,
      });
    });
  };

  const onFetchdata = () => {
    dispatch(getData(city));
  };

  return (
    <div>
      <div className='App'>
        <h2>Current Weather Information</h2>
        <div style={{ padding: '100px 0 100px 0'}}>
          {JSON.stringify(content.data.getCityByName)}
        </div>
        <button onClick={onFetchdata}>GET CURRENT WEATHER</button>
      </div>
    </div>
  );
};

export default Card;
