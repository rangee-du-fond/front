import { apiUrl } from './conf';

export const fetchData = () => {
  return fetch(`${apiUrl}/data`, { method: 'GET' }).then(res => {
    if (!res.ok) throw res;
    return res.json();
  });
};
