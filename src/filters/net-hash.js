import AppFilters from './filters.module';

/**
 * @todo check the possibility of removing hard coded hashes
 */
AppFilters.filter('nethash', () => nethash => {
    if (nethash === 'da3ed6a45429278bac2666961289ca17ad86595d33b31037615d4b8e8f158bba') {
        return 'Testnet';
    } else if (nethash === '6cb2ba846e876f5dc68d95b28b292b81f9c538b99fd9c968eee5d94c3d4dc3a6')  {
        return 'Mainnet';
    } else {
        return 'Local';
    }
});