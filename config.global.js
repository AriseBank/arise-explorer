'use strict';

var config = {};
config.arise = {};
config.freegeoip = {};
config.redis = {};
config.proposals = {};
config.log = {};
config.exchangeRates = {exchanges: { ACO: {}, BTC: {}}};
config.marketWatcher = {exchanges: {}, candles: { poloniex: {} }, orders: {}};

module.exports = config;
