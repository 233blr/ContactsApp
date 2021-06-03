export interface Icontact {
  login: {
    uuid: string,
    username: string,
  },
  picture:{
    medium: string,
    large: string,
  },
  name: {
    first: string,
    last: string,
  },
  email: string,
  phone: string,
}

export interface Idata {
  data: {
    results: Icontact[]
  }
}
