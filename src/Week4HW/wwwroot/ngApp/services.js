var MyApp;
(function (MyApp) {
    var Services;
    (function (Services) {
        var AuctionsService = (function () {
            function AuctionsService($resource) {
                this.$resource = $resource;
                this.auctionResource = this.$resource("/api/auctions/:id");
            }
            AuctionsService.prototype.getAuctions = function () {
                return this.auctionResource.query();
            };
            AuctionsService.prototype.getAuction = function (id) {
                return this.auctionResource.get({ id: id });
            };
            AuctionsService.prototype.saveAuction = function (auctionToSave) {
                return this.auctionResource.save(auctionToSave).$promise;
            };
            return AuctionsService;
        }());
        Services.AuctionsService = AuctionsService;
        var BetsService = (function () {
            function BetsService($resource) {
                this.$resource = $resource;
                this.betResource = this.$resource('/api/bets/:id');
            }
            BetsService.prototype.saveBet = function (betToSave) {
                return this.betResource.save(betToSave).$promise;
            };
            return BetsService;
        }());
        Services.BetsService = BetsService;
        angular.module("MyApp").service("auctionsService", AuctionsService);
        angular.module("MyApp").service("betsService", BetsService);
    })(Services = MyApp.Services || (MyApp.Services = {}));
})(MyApp || (MyApp = {}));
//# sourceMappingURL=services.js.map