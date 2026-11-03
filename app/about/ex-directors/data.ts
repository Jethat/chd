export interface Director {
  no: number;
  name: string;
  from: number;
  /** Leave out for the current Director */
  to?: number;
}

export const directors: Director[] = [
  { no: 1, name: "Dr. Vishwanath Prasad", from: 1961, to: 1965 },
  { no: 2, name: "Prof. A. Chandrahasan", from: 1966, to: 1970 },
  { no: 3, name: "Dr. P. Gopal Sharma", from: 1970, to: 1975 },
  { no: 4, name: "Prof. Harvanshlal Sharma", from: 1975, to: 1980 },
  { no: 5, name: "Dr. Ranveer Rangra", from: 1981, to: 1983 },
  { no: 6, name: "Shri. Rajmani Tiwari", from: 1983, to: 1987 },
  { no: 7, name: "Dr. Narendra Vyas", from: 1987, to: 1988 },
  { no: 8, name: "Prof. Sooraj Bhan Singh", from: 1988, to: 1989 },
  { no: 9, name: "Dr. Ganga Prasad Vimal", from: 1989, to: 1997 },
  { no: 10, name: "Shri. Samay Singh", from: 1997, to: 1999 },
  { no: 11, name: "Dr. R. A. K. Shrivastava", from: 1999, to: 2000 },
  { no: 12, name: "Dr. Pushplata Taneja", from: 2000, to: 2007 },
  { no: 13, name: "Prof. K. Bijay Kumar", from: 2007, to: 2011 },
  { no: 14, name: "Shri. Anant Kumar Singh", from: 2011, to: 2012 },
  { no: 15, name: "Prof. Keshari Lal Verma", from: 2012, to: 2015 },
  { no: 16, name: "Dr. Ravi Prakash Tekchandani", from: 2015, to: 2017 },
  { no: 17, name: "Prof. Avanish Kumar", from: 2017, to: 2020 },
  { no: 18, name: "Prof. Ramesh Kumar Pandey", from: 2020, to: 2021 },
  { no: 19, name: "Prof. Nageshwar Rao", from: 2021, to: 2023 },
  { no: 20, name: "Prof. Sunil Baburao Kulkarni Deshgaonkar", from: 2023, to: 2025 },
  { no: 21, name: "Prof. Hitendra Kumar Mishra", from: 2025 },
];