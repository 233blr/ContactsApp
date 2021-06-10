enum ValueTypes {
  rating = 'rating',
  name = 'name',
  login = 'login',
  email = 'email',
  phone = 'phone',
}

type ValuesTypes = ValueTypes.name
  | ValueTypes.email
  | ValueTypes.login
  | ValueTypes.phone
  | ValueTypes.rating;

export default ValuesTypes;
