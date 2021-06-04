import {
  LeadersState,
  LeadersActions,
  LeadersActionTypes,
} from '../../Types/getLeadersAction';

const initialState: LeadersState = {
  leaders: [],
  loading: false,
};

const LeadersReduser = (
  state = initialState,
  action: LeadersActions,
): LeadersState => {
  switch (action.type) {
    case LeadersActionTypes.GET_LEADERS:
      return {
        ...initialState,
        leaders: [],
        loading: true,
      };
    case LeadersActionTypes.GET_LEADERS_SUCCESS:
      return {
        ...initialState,
        leaders: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default LeadersReduser;
