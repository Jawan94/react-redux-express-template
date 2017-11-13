import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {toggleModalAction, toggleSaveUser} from '../actions/index'

class SubmitPost extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <div>
        <h1> hi </h1>
        <input type='text' name='text' placeholder='title of post'/>
        <textarea type='text' placeholder='content of post'/>
        <input type='text' name='text' placeholder='for attachments'/>

        <button
        style={{margin: '10px 10px 10px 0'}}
        >Submit Post
        </button>

        </div>
    );
}
};

SubmitPost.propTypes = {
    name: PropTypes.string,
};


const mapStateToProps = (state) => {
    return {
        isModalOpen: state.isModalOpen,
        username: state.username
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
      toggleModal: () => {dispatch(toggleModalAction())},
      saveUser: (u) => {dispatch(toggleSaveUser(u))}


    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SubmitPost);