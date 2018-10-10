import React, { Component } from 'react';
import ContentBlock from '../ContentBlock/ContentBlock';
import './GeneralPage.scss';

class GeneralPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contentLoaded: false,
      pageTitle: null,
      pageBody: null
    }
  }

  // function that calls the API based on the effect value and updates the local state
  buildPage = (urlParams) => {

    fetch(`http://localhost:3000/data/${urlParams}.json`)
      .then((response) => response.json())
      .then((data) => this.setState({
        pageTitle: data.pageTitle, 
        pageBody: data.pageBody, 
        contentLoaded: true,
      }))
      .catch((err) => console.log(`Something went wrong ${err}`));
  }

  componentDidMount() {
    const { path } = this.props.match;
    this.buildPage(path);
  }

  componentDidUpdate(prevProps) {
    const { path } = this.props.match;
    if (path !== prevProps.match.path) {
      this.buildPage(path);
    }
  }

  render() {

    let pageContent,
        title;

    const { pageTitle, pageBody, contentLoaded } = this.state;
    
    if (contentLoaded) {
      pageContent = pageBody;
      title = pageTitle;
    } else {
      pageContent = 'Loading';
    }

    return(
      <ContentBlock>
        <div className="container">
          <div className="row my-5">
            <div className="col-md-12">
              <h1>{ title }</h1>
            </div>
          </div>
          <div className="row general-page-wrapper">
            <div className="col-md-10 offset-md-1 pt-5 pb-4 px-0">
              <p>{ pageContent }</p>
            </div>
          </div>
        </div>
      </ContentBlock>
    );

  }
}

export default GeneralPage;