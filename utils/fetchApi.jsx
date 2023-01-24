import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
      'X-RapidAPI-Key': 'bbe42f0940msha47e3825817bf36p1be487jsnb7b5a77fcc8a' ,
    },
  });
    
  return data;
}