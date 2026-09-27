const seededRandom = (seed) => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

export const fetchAPI = (date) => {
  const slots = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  const seed = date ? new Date(date).getDate() : 1;
  const open = slots.filter((_, i) => seededRandom(seed + i) < 0.75);
  return open.length ? open : ['17:00', '19:00', '21:00'];
};

export const submitAPI = (formData) => {
  return true;
};
