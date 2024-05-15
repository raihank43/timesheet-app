export function getCurrencyFormatNumbersOnly(currencyCode) {
  return {
    style: "currency",
    currency: currencyCode,
    currencyDisplay: "none",
  };
}

// export const format = getCurrencyFormatNumbersOnly("IDR");

export default function formatCurrencyExport(value, lang) {
  const stripSymbols =
    getCurrencyFormatNumbersOnly("IDR").currencyDisplay === "none";
  const localFormat = stripSymbols
    ? { ...getCurrencyFormatNumbersOnly("IDR"), currencyDisplay: "code" }
    : getCurrencyFormatNumbersOnly("IDR");
  let result = Intl.NumberFormat(lang, localFormat).format(value);
  if (stripSymbols) {
    result = result.replace(/[a-z]{3}/i, "").trim();
  }
  return result;
}
