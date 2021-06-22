import {
  FullContactState,
  FullContactActions,
  GetFullContactActionTypes,
} from '../../Types/getFullContactAction';

const initialState: FullContactState = {
  contact: undefined,
  loading: false,
};

const FullContactReducer = (
  state = initialState,
  action: FullContactActions,
): FullContactState => {
  switch (action.type) {
    case GetFullContactActionTypes.GET_FULL_CONTACT:
      return {
        ...initialState,
        contact: undefined,
        loading: true,
      };
    case GetFullContactActionTypes.GET_FULL_CONTACT_SUCCESS:
      return {
        ...initialState,
        contact: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default FullContactReducer;
