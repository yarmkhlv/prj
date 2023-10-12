const dataGroupOfClients = [
  { value: 'VIP', label: 'VIP' },
  { value: 'Проблемные', label: 'Проблемные' },
  { value: 'ДМС', label: 'ДМС' },
  { value: 'ОМС', label: 'ОМС' },
];

const dataTherapists = [
  { value: 'Петров', label: 'Петров' },
  { value: 'Захаров', label: 'Захаров' },
  { value: 'Черниговская', label: 'Черниговская' },
];

const API_DADATA = {
  URL: 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/fio',
  TOKEN: 'f6f8214e9fc4a101ebc1df2c1fb83a397d8b9905',
};

const REGEX = {
  fullName: /^[A-Za-zА-ЯЁа-яё]+ [A-Za-zА-ЯЁа-яё]+ [A-Za-zА-ЯЁа-яё]+$/,
  dateBirth: /^\d{4}-\d{2}-\d{2}$/,
  mobileNumber: /^\+\d{1} \(\d{3}\) \d{3}-\d{2}-\d{2}$/,
};

export { dataGroupOfClients, dataTherapists, API_DADATA, REGEX };
