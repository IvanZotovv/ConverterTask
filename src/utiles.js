const getRightVal = "RUB";

export const apiForUSD = "USD";
export const apiForEUR = "EUR";
export const lengthData = data => (data.length > 10 ? data.splice(0, 1) : data);

export const getData = currencySign => {
  return fetch(
    ` https://prime.exchangerate-api.com/v5/b9487de27d4106d530ddff86/latest/${currencySign}`
  )
    .then(res => res.json())
    .then(data => filteringArray(data.conversion_rates, currencySign))
    .catch(err => {
      throw new Error(err);
    });
};

const filteringArray = (val, currencySign) =>
  Object.keys(val)
    .filter(key => getRightVal.includes(key))
    .reduce((obj, key) => {
      obj[currencySign] = val[key];
      return obj;
    }, {});

export const combineObj = values => ({
  ...values.pop(),
  ...values.shift(),
  id: new Date().getUTCMilliseconds()
});
