import React from 'react';
import { ContactType, ContactsState } from '../Types/getContactsReduser';
import useTypedSelector from '../Hooks/useTypedSelector';
import { ContactItemType } from '../Types/contactItem';

const LoadingDelay: React.FC<{
  key: string,
  data:ContactType
}> = (WrappedComponent: any): any => {
  return (props: ContactItemType) => {
    const { loading }: ContactsState = useTypedSelector(
      (store) => { return store.listOfContacts; },
    );

    return (
      loading
        ? <div>Loading...</div>
        : <WrappedComponent {...props as ContactItemType} />
    );
  };
};

export default LoadingDelay;
