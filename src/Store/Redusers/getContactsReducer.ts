import {
  ContactsActions,
  ContactsState,
  ContactsActionTypes,
} from '../../Types/getContactsReduser';

const initialState: ContactsState = {
  contacts: [],
  loading: false,
  error: null,
};

const GetContactsReduser = (
  state = initialState,
  action: ContactsActions,
): ContactsState => {
  switch (action.type) {
    case ContactsActionTypes.FETCH_CONTACTS:
      return {
        ...initialState, contacts: [], loading: true, error: null,
      };
    case ContactsActionTypes.FETCH_CONTACTS_SUCCESS:
      return {
        ...initialState, contacts: action.payload, loading: false, error: null,
      };
    case ContactsActionTypes.FETCH_CONTACTS_ERROR:
      return {
        ...initialState, contacts: [], loading: false, error: action.payload,
      };
    default:
      return state;
  }
};

export default GetContactsReduser;
