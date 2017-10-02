import AppFilters from './filters.module';

AppFilters.filter('currency', (numberFilter, ariseFilter) => (amount, currency, decimal_places) => {
    const arise = ariseFilter (amount);
    let factor = 1;

    if (currency.tickers && currency.tickers.ACO && currency.tickers.ACO[currency.symbol]) {
      factor = currency.tickers.ACO[currency.symbol];
    } else if (currency.symbol !== 'ACO') {
      // Exchange rate not available for current symbol
      return 'N/A';
    }

    let decimals = (currency.symbol === 'ACO' || currency.symbol === 'BTC') ? decimal_places : 2;
    if (decimals && arise > 0) {
      return numberFilter ((arise * factor), decimals);
    } else {
      return numberFilter ((arise * factor), 8).replace (/\.?0+$/, '');
    }
});
