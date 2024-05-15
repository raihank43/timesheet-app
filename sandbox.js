function getCurrencyFormatNumbersOnly(currencyCode) {
  return {
    style: "currency",
    currency: currencyCode,
    currencyDisplay: "none",
  };
}

function formatCurrency(value, format, lang) {
  const stripSymbols = format.currencyDisplay === "none";
  const localFormat = stripSymbols
    ? { ...format, currencyDisplay: "code" }
    : format;
  let result = Intl.NumberFormat(lang, localFormat).format(value);
  if (stripSymbols) {
    result = result.replace(/[a-z]{3}/i, "").trim();
  }
  return result;
}

const format = getCurrencyFormatNumbersOnly("IDR");
// formatCurrency(12345, format, 'id')
// formatCurrency(123456, format, 'id')
// formatCurrency(1234567, format, 'id')
console.log(formatCurrency(1234567, format, "id"));
