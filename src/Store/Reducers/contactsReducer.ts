import {
  ContactsActions,
  ContactsState,
  ContactsActionTypes,
} from '../../Types/contactsReducer';

const initialState: ContactsState = {
  contacts: [],
  loading: false,
  error: null,
  category: null,
};

const ContactsReduser = (
  state = initialState,
  action: ContactsActions,
): ContactsState => {
  switch (action.type) {
    case ContactsActionTypes.FETCH_CONTACTS:
      return {
        ...initialState,
        loading: true,
        error: null,
      };
    case ContactsActionTypes.FETCH_CONTACTS_SUCCESS:
      return {
        ...initialState,
        contacts: action.payload,
        loading: false,
        error: null,
      };
    case ContactsActionTypes.FETCH_CONTACTS_ERROR:
      return {
        ...initialState,
        contacts: [],
        loading: false,
        error: action.payload,
      };
    case ContactsActionTypes.DELETE_CONTACT:
      return {
        ...initialState,
        contacts: action.payload,
        loading: false,
        error: null,
      };
    case ContactsActionTypes.ADD_RATING:
      return {
        ...initialState,
        contacts: action.payload,
        loading: false,
        error: null,
      };
    case ContactsActionTypes.FILTER_CONTACTS:
      return {
        ...initialState,
        loading: true,
        category: action.payload,
      };
    case ContactsActionTypes.FILTER_CONTACTS_SUCCESS:
      return {
        ...initialState,
        contacts: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default ContactsReduser;
