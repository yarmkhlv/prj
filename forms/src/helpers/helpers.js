import { API_DADATA } from '../config/varibales';

function getToday() {
  const today = new Date();

  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');

  const formattedDate = `${year}-${month}-${day}`;

  return formattedDate;
}

function generateUniqueKey(array) {
  let key;
  do {
    key = Math.floor(Math.random() * 1000000); //
  } while (array.some((item) => item.key === key)); //
  return key;
}

async function getFirstAndLastNames(value, callback) {
  if (value.length > 3) {
    try {
      const response = await fetch(API_DADATA.URL, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: 'Token ' + API_DADATA.TOKEN,
        },
        body: JSON.stringify({ query: value }),
      });
      if (response.ok) {
        const json = await response.json();
        await callback(json.suggestions);
      } else {
        new Error('ошибка');
      }
    } catch (error) {
      alert(error.message);
    }
  }
}

export { getToday, generateUniqueKey, getFirstAndLastNames };
