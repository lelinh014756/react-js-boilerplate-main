import { type ListStyle1Data, type ListStyle1HeadCell } from '../type';

function createData({
  Id,
  User,
  Country,
  Followers,
  Friends,
  Status = 'pending',
}: ListStyle1Data): ListStyle1Data {
  return {
    Id,
    User,
    Country,
    Followers,
    Friends,
    Status,
  };
}

export const headCells: readonly ListStyle1HeadCell[] = [
  {
    id: 'Id',
    numeric: false,
    label: '#',
  },
  {
    id: 'User',
    numeric: false,
    label: 'User Profile',
  },
  {
    id: 'Country',
    numeric: false,
    label: 'Country',
  },
  {
    id: 'Friends',
    numeric: true,
    label: 'Friends',
  },
  {
    id: 'Followers',
    numeric: true,
    label: 'Followers',
  },
  {
    id: 'Status',
    numeric: false,
    label: 'Status',
  },
];

export const rows = [
  createData({
    Id: '01',
    User: {
      Name: 'Curtis ',
      Avatar: 'https://i.ibb.co/R39xc5Y/avatar1.png',
      Certified: true,
      Email: 'wiegand@hotmail.com',
    },
    Country: 'Saucerize',
    Friends: 834,
    Followers: 2348,
    Status: 'activated',
  }),
  createData({
    Id: '02',
    User: {
      Name: 'Curtis ',
      Avatar: 'https://i.ibb.co/Fq88Nd7/avatar2.png',
      Certified: false,
      Email: 'tyrell86@company.com',
    },
    Country: 'South Bradfordstad',
    Friends: 633,
    Followers: 63435,
  }),
  createData({
    Id: '03',
    User: {
      Name: 'Lola',
      Avatar: 'https://i.ibb.co/p28yW60/avatar9.png',
      Certified: false,
      Email: 'aufderhar56@yahoo.com',
    },
    Country: 'Saucerize',
    Friends: 142,
    Followers: 8733,
    Status: 'reject',
  }),
  createData({
    Id: '04',
    User: {
      Name: 'Milton',
      Avatar: 'https://i.ibb.co/Fq88Nd7/avatar2.png',
      Certified: false,
      Email: 'dikinson49@hotmail.com',
    },
    Country: 'North Anika',
    Friends: 633,
    Followers: 9374,
  }),
  createData({
    Id: '05',
    User: {
      Name: 'Lysanne ',
      Avatar: 'https://i.ibb.co/p28yW60/avatar9.png',
      Certified: true,
      Email: 'zack.turner49@company.com',
    },
    Country: 'Betteland',
    Friends: 142,
    Followers: 8733,
  }),
  createData({
    Id: '06',
    User: {
      Name: 'Bonita',
      Avatar: 'https://i.ibb.co/p28yW60/avatar9.png',
      Certified: false,
      Email: 'keebler57@company.com',
    },
    Country: 'Alexburgh',
    Friends: 1782,
    Followers: 2433,
    Status: 'activated',
  }),
  createData({
    Id: '07',
    User: {
      Name: 'Retta ',
      Avatar: 'https://i.ibb.co/Fq88Nd7/avatar2.png',
      Certified: true,
      Email: 'mathew92@yahoo.com',
    },
    Country: 'East Bryceland',
    Friends: 453,
    Followers: 9374,
  }),
  createData({
    Id: '08',
    User: {
      Name: 'Zoie',
      Avatar: 'https://i.ibb.co/p28yW60/avatar9.png',
      Certified: false,
      Email: 'hulda1@hotmail.com',
    },
    Country: 'Beattytown',
    Friends: 1432,
    Followers: 2345,
  }),
  createData({
    Id: '09',
    User: {
      Name: 'Easton ',
      Avatar: 'https://i.ibb.co/Fq88Nd7/avatar2.png',
      Certified: true,
      Email: 'mathew92@yahoo.com',
    },
    Country: 'North Pedromouth',
    Friends: 234,
    Followers: 5475,
    Status: 'reject',
  }),
  createData({
    Id: '10',
    User: {
      Name: 'Brianne ',
      Avatar: 'https://i.ibb.co/p28yW60/avatar9.png',
      Certified: true,
      Email: 'noe45@hotmail.com',
    },
    Country: 'New Alexanderborough',
    Friends: 343,
    Followers: 89223,
  }),
];
