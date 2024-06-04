import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from 'react-infinite-scroll-component';
export class News extends Component {
  article = [];
  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  constructor(props) {
    super(props);
    this.state = {
      articles:this.article,
      page: 1,
      totalResults:0
    };
    document.title = `${this.capitalizeFirstLetter(
      this.props.category
    )}-ApnaAkhbar`;
  }
  async updateNews() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=76d6db1341df4d24883442e072880900&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
  }
  async componentDidMount() {
    this.updateNews();
  }
  fetchMoreData=async()=>{
    this.setState({ page: this.state.page + 1 });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=76d6db1341df4d24883442e072880900&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles:this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
    });
  }
  render() {
    return (
      <>
        <h1 className="headline text-center">
          <strong>ApnaAkhbar</strong> - {this.props.headlines}
        </h1>
        {/* {this.state.loading && <Spinner />} */}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={<Spinner/>}
        >
          <div className="container">
          <div className="row">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-3" key={element.url}>
                  <NewsItem
                    imgUrl={
                      element.urlToImage
                        ? element.urlToImage
                        : "https://www.livemint.com/lm-img/img/2024/06/01/1600x900/FPIs_1717261901281.jpg"
                    }
                    title={element.title ? element.title.slice(0, 45) : ""}
                    descripton={
                      element.description
                        ? element.description.slice(0, 45)
                        : ""
                    }
                    newUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
        </InfiniteScroll>
      </>
    );
  }
}

export default News;
