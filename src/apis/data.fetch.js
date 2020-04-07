import { apiUrl } from './conf';

export const fetchData = () => {
  return fetch(`${apiUrl}/hello`, { method: 'GET' }).then(res => {
    if (!res.ok) throw res;
    return res.json();
  });
};
