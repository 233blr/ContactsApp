import {
  ContactActions,
  ContactState,
  ContactsActionTypes,
} from '../../Types/getContactsReduser';

const initialState = {
  contacts: [],
};

const GetContactsReduser = (
  state = initialState,
  action: ContactActions,
): ContactState => {
  switch (action.type) {
    case ContactsActionTypes.GET_CONTACTS:
      return { contacts: action.payload };
    default:
      return state;
  }
};

export default GetContactsReduser;
