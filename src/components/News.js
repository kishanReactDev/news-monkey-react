import React, { useEffect, useState } from 'react';
import Newsitem from './Newsitem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

const News = ({ country = 'in', pageSize = 8, category = 'general', apikey, setProgress }) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const updateNews = async () => {
        setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apikey}&page=${page}&pageSize=${pageSize}`;
        setLoading(true);
        let data = await fetch(url);
        setProgress(30);
        let parsedData = await data.json();
        setProgress(70);

        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoading(false);
        setProgress(100);
    }

    useEffect(() => {
        document.title = `${capitalizeFirstLetter(category)}- NewsMonkey`
        updateNews();
        // eslint-disable-next-line 
    }, [country, category, pageSize]);

  
    
    const [isFetching, setIsFetching] = useState(false);

    const fetchMoreData = async () => {
        if (isFetching) return; // Exit if a fetch is already in progress
        setIsFetching(true); // Set the flag to indicate a fetch is in progress

        const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apikey}&page=${page + 1}&pageSize=${pageSize}`;
        setPage(page + 1);

        try {
            const data = await fetch(url);
            const parsedData = await data.json();
            setArticles((prevArticles) => prevArticles.concat(parsedData.articles));
            setTotalResults(parsedData.totalResults);
        } finally {
            setIsFetching(false); // Reset the flag when the fetch is complete
        }
    };


    return (
        <>
            <h1 className="text-center" style={{ margin: '30px 0px', marginTop: '90px' }}>NewsMonkey - Top {capitalizeFirstLetter(category)} Headlines</h1>
            {loading && <Spinner />}

            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
            >
                <div className="container">
                    <div className="row">
                        {articles.map((element, index) => (
                            <div className="col-md-4 my-3" key={`${element.url}-${index}`}>
                                <Newsitem
                                    title={element.title ? element.title : ""}
                                    description={element.description ? element.description : ""}
                                    imageUrl={element.urlToImage}
                                    newsurl={element.url}
                                    author={element.author}
                                    date={element.publishedAt}
                                    source={element.source.name}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </InfiniteScroll>
        </>
    )
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    apikey: PropTypes.string.isRequired,
    setProgress: PropTypes.func.isRequired
};

export default News;
