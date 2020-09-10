const numberFormat = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
const dateTimeFormat = new Intl.DateTimeFormat('pt-BR', {
  year: 'numeric', month: 'numeric', day: 'numeric',
  hour: 'numeric', minute: 'numeric', second: 'numeric',
  hour12: false,
  timeZone: "America/Sao_Paulo"
});

export { numberFormat, dateTimeFormat }