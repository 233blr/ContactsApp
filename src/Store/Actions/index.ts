import * as addRatingAction from './addRatingAction';
import * as deleteContainActions from './deleteContactAtions';
import * as fetchContactsAction from './fetchContactsAction';
import * as getFullContactAction from './getFullContactAction';
import * as getLeadersAction from './getLeadersAction';
import * as sortContactAction from './sortContactAction';

export default {
  ...addRatingAction,
  ...deleteContainActions,
  ...fetchContactsAction,
  ...getFullContactAction,
  ...getLeadersAction,
  ...sortContactAction,
};
