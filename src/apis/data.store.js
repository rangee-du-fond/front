import { readable } from 'svelte/store';
import { fetchData } from './data.fetch';

export const datas = readable([], async set => {
  // implementation goes here
  const data = await fetchData();
  console.log('data', data);
  set(data);
  return function stop() {};
});
