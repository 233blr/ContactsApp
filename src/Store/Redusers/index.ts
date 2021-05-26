////////////////////////Finished 8:00

const initialState = {
  contacts: [],
};

enum Types {
  FETCH_CONTACTS = 'FETCH_CONTACTS';
}

interface Contact {
  id: string,
  foto: string,
  name: string,
  login: string,
  phone: string,
  rauting: number
}

interface ContactState {
  contacts: Contact[],
}

const ContactsReduser = (state = initialState, action): ContactState => {
  switch (action.type) {
    case Types.FETCH_CONTACTS:
      return { contacts: action.payload };
    default:
      return state;
  }
};

export default ContactsReduser;
