import AppHeader from './header.module';

const HeaderConstrcutor = function ($rootScope) {

    this.updateBlockStatus = res => {
        if (res.success) {
            $rootScope.blockStatus = {
                height:    res.height,
                fee:       res.fee,
                milestone: res.milestone,
                reward:    res.reward,
                supply:    res.supply,
                nethash:   res.nethash
            };
        }
    };

    this.updatePriceTicker = res => {
        if (res.success) {
            $rootScope.currency.tickers = res.tickers;
        }

        // When ticker for user-stored currency is not available - switch to ACO temporarly
        if ($rootScope.currency.symbol !== 'ACO' && (!$rootScope.currency.tickers || !$rootScope.currency.tickers.ACO || !$rootScope.currency.tickers.ACO[$rootScope.currency.symbol])) {
            $rootScope.currency.symbol = 'ACO';
        }
    };

    // @todo shouldn't this be in run inetad of header?
    $rootScope.delegateProposals = {};
    this.updateDelegateProposals = res => {
        $rootScope.delegateProposals = {};
        if (res.success) {
            for (let proposal of res.proposals) {
                $rootScope.delegateProposals[proposal.name.toLowerCase()] = proposal;
            }
        }
    };

    return this;
};

AppHeader.factory('Header',
  ($rootScope, $socket) => HeaderConstrcutor);
