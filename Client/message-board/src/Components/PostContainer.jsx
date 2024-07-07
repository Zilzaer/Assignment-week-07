import './PostContainer.css'; // Import the CSS file for styling
import PropTypes from 'prop-types';


const PostContainer = ({ username, category, content }) => {
    return (
      <div >
        <div >
          <div >{username}</div>
          <div >{category}</div>
        </div>
        <div >{content}</div>
      </div>
    );
  }
  
  PostContainer.propTypes = {
    username: PropTypes.string.isRequired, // Validates that username is a required string
    category: PropTypes.string.isRequired, // Assuming category is also a required string
    content: PropTypes.string.isRequired   // Assuming content is a required string
  };

  export default PostContainer