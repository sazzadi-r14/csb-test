import React, { Component }  from 'react'
import './news.css';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";


import data from '../../data/news.json';
import arrowbutton from '../../assets/arrow-button.png';
import arrowbuttonmirrored from '../../assets/arrow-button-mirrored.png';


const News = () => {
  class ExternalControlledCarousel extends Component<{}, { currentSlide: number; autoPlay: boolean }> {
    constructor(props) {
        super(props);

        this.state = {
            currentSlide: 0,
            autoPlay: true,
        };
    }

    next = () => {
        this.setState((state) => ({
            currentSlide: state.currentSlide + 1,
        }));
    };

    prev = () => {
        this.setState((state) => ({
            currentSlide: state.currentSlide - 1,
        }));
    };

    updateCurrentSlide = (index) => {
      const { currentSlide } = this.state;

      if (currentSlide !== index) {
          this.setState({
              currentSlide: index,
          });
      }
  };

    render() {

  return (
    
    <div>
      <Carousel
        autoPlay={this.state.autoPlay}
        selectedItem={this.state.currentSlide}
        onChange={this.updateCurrentSlide}
        {...this.props}>
        {
          data.map((news)=>
            <div>
              <div className = 'row'>
                <div className='col-sm-1'></div>

                {/* News Image */}
                <div className='col-sm-6'>
                  <img className = 'news_img' src = {news.image} alt = "A robot"/>
                </div>

                {/* News Content */}
                <div className='col-sm-4 news_body'>

                  <div className = 'row'>
                    <div className='col-sm-7'></div>

                    {/* Prev Button */}
                    <div className='col-sm-2'>
                      <button onClick={this.prev} className="news_btn">
                        <img className = 'oc_button_img' src = {arrowbuttonmirrored} alt = "Arrow Button Left"/>
                      </button>
                    </div>
                    <div className='col-sm-1'></div>

                    {/* Next Button */}
                    <div className='col-sm-2'>
                      <button onClick={this.next} className="news_btn">
                        <img className = 'oc_button_img' src = {arrowbutton} alt = "Arrow Button Right"/>
                      </button>
                    </div>
                  </div>


                  {/* News Heading */}
                  <div className = 'news_heading col-sm-12'>
                    News
                  </div>

                  {/* News Content Title */}
                  <div className = 'news_content_title col-sm-12'>
                    {news.heading}
                  </div>

                  <div className = 'news_heading col-sm-12'>
                    {news.date}
                  </div>

                </div>

                <div className='col-sm-1'></div>
              </div>
            </div>
          )
        }
      </Carousel>
    </div> 
  )
      }
    }
    return <ExternalControlledCarousel />;
}

export default News