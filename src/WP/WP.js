import React from 'react';
import './WP.css';

class Wp extends React.Component {
  state = {
      posts: '',
      isLoaded: false,
      //error: null
  }
  
  componentDidMount(){
    fetch('http://localhost/tiff-test/wp-json/wp/v2/projects')
      .then(res => res.json())
      .then(res => this.setState({ 
          posts: res,
          isLoaded: true
        }))
      .catch(err => alert(err))
  }

  render(){
    const { posts, isLoaded } = this.state;
    
    const renderPostList = () => {
      if(isLoaded) {
          console.log(
              
          )
          return (
            <h3>{posts[posts.length-1].title.rendered}</h3>
          )
      } else {
          return (
              <h3>Loading</h3>
          )
      }
    }
    
    return (
        <div>
            {renderPostList()}
        </div>
    );  
  };
};
  
export default Wp;