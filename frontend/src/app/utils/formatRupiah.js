export default function formatRupiah(number) {
  return number.toLocaleString("id-ID", { style: "currency", currency: "IDR" });
}



// const format = getCurrencyFormatNumbersOnly('IDR')
// // formatCurrency(12345, format, 'id')
// // formatCurrency(123456, format, 'id')
// // formatCurrency(1234567, format, 'id')
// console.log(formatCurrency(12345678, format, 'id'))
