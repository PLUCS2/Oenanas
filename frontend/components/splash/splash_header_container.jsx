import React from 'react';
import { connect } from 'react-redux';
import SplashHeader from './splash_header';
import { openModal } from '../../actions/modal_actions'

const mapDispatchToProps = dispatch => {
    return {
        openModal: modal => dispatch(openModal(modal))
    }
}

export default connect(null, mapDispatchToProps)(SplashHeader)