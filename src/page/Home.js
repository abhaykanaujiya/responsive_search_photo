import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "../components/card/Card";
import { Container } from "../components/Container";
import { GET_PHOTOS_URL } from "../constants";
import { useWindowSize } from "../hooks/useWindow";
import StyledError from '../components/errors/Error'

export const Home = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [isError, setIsError] = useState(false);
  const { height, width } = useWindowSize();

  // considering mobile device if window width lesser equal to 700
  const isMobile = width <= 700;

  // fetching initial data 
  const getInitialData = async () => {
    try {
      setIsLoading(true);
      setIsError(false);
      const response = await axios.get(GET_PHOTOS_URL);
      if (response.status === 200) {
        setSearchResult(response.data);
        setIsError(false);
        setIsLoading(false);
      }
    } catch (e) {
      setIsError(true);
      setIsLoading(false);
    }
  };

  // will run on page mount
  useEffect(() => {
    getInitialData();
  }, []);

  // fetching data from search API
  const getSearchData = async () => {
    try {
      const response = await axios.post(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=e15b8da5952cf915887f3ebe5acb39bd&user_id=66956608%40N06&format=json&nojsoncallback=1&text=${searchText}`
      );
      if (response.status === 200) {
        setSearchResult(response.data);
        setIsError(false);
      }
    } catch (e) {
      setIsError(true);
    }
  };

  // will run only searchText state value will change
  useEffect(() => {
    if (searchText.length >= 3) {
      getSearchData();
    }
  }, [searchText]);

  // handle search input text
  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <Container
      handleChange={handleChange}
      inputText={searchText}
      isMobile={isMobile}
    >
      {isLoading && <div>fetching data...</div>}
      <Card searchResult={searchResult} isMobile={isMobile} width={width} />
      {isError && <StyledError/>}
    </Container>
  );
};
