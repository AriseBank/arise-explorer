import 'angular';
import 'angular-ui-router';
import 'angular-resource';
import 'angular-animate';
import 'angular-ui-bootstrap';
import 'angular-gettext';
import 'angular-advanced-searchbox'
// import 'babel-polyfill';

// styles
import 'amstock3/amcharts/style.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import 'leaflet/dist/leaflet.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
import 'angular-advanced-searchbox/dist/angular-advanced-searchbox.min.css'
import '../assets/styles/common.css';
import '../assets/styles/flags.css';
import '../assets/styles/tableMobile.css';

// submodules
import '../components/blocks';
import '../components/address';
import '../components/transactions';
import '../components/delegate';
import '../components/delegate-monitor';
import '../components/top-accounts';
import '../components/search';
import '../components/header';
import '../components/footer';
import '../components/currency-selector';
import '../components/activity-graph';
import '../components/home';
import '../components/bread-crumb';
import '../components/market-watcher';
import '../components/network-monitor';

import '../filters';
import '../services';
import '../directives';
import './app-tools.module.js';
import '../shared';

const App = angular.module('arise_explorer',[
    'ngAnimate',
    'ngResource',
    'ui.router',
    'ui.bootstrap',
    'gettext',
    'angular-advanced-searchbox',
    'arise_explorer.breadCrumb',
    'arise_explorer.filters',
    'arise_explorer.services',
    'arise_explorer.header',
    'arise_explorer.footer',
    'arise_explorer.blocks',
    'arise_explorer.transactions',
    'arise_explorer.address',
    'arise_explorer.delegate',
    'arise_explorer.topAccounts',
    'arise_explorer.search',
    'arise_explorer.tools',
    'arise_explorer.currency',
    'arise_explorer.activityGraph',
    'arise_explorer.delegateMonitor',
    'arise_explorer.home',
    'arise_explorer.networkMonitor',
    'arise_explorer.marketWatcher'
]);

export default App;
