import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';

const _defaultState = {
    modal: null, 
    props: null
}

export default function modalReducer(state = _defaultState, action) {
    debugger; 
    switch (action.type) {
        case OPEN_MODAL:
            return {modal: action.modal, props: action.props}; 
        case CLOSE_MODAL:
            return _defaultState;
        default:
            return state;
    }
}