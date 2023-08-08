function CurrencyFormatter(amount: number) {
  const f = new Intl.NumberFormat("en-gh", {
    style: "currency",
    currency: "GHS",
  });

  return f.format(amount);
}

export default CurrencyFormatter;
