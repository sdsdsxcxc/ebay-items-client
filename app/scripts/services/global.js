'use strict';

angular.module('auctionItemsApp')
  .service('Global', [function() {
    this.pageSize = 40;
    this.baseUrl = "/PersonActions";
    this.settingsUrl = "/settings";
    this.defaultPicture = "/images/ebay_market_182x76.gif";
    this.loginUrl = "";
    this.logoutUrl = "";
    this.is_authenticated = false;
    this.is_current_user_admin = false;
  }]);
