var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController() {
                this.message = 'Hello from the home page!';
            }
            return HomeController;
        }());
        Controllers.HomeController = HomeController;
        var AboutController = (function () {
            function AboutController() {
                this.message = 'Hello from the about page!';
            }
            return AboutController;
        }());
        Controllers.AboutController = AboutController;
        var AuctionsController = (function () {
            function AuctionsController(auctionsService) {
                this.auctionsService = auctionsService;
                this.auctions = this.auctionsService.getAuctions();
            }
            return AuctionsController;
        }());
        Controllers.AuctionsController = AuctionsController;
        var AuctionDetailController = (function () {
            function AuctionDetailController(auctionsService, $stateParams, betsService) {
                this.auctionsService = auctionsService;
                this.$stateParams = $stateParams;
                this.betsService = betsService;
                this.getAuction();
            }
            AuctionDetailController.prototype.getAuction = function () {
                var auctionId = this.$stateParams['id'];
                this.auction = this.auctionsService.getAuction(auctionId);
            };
            AuctionDetailController.prototype.saveBet = function () {
                var _this = this;
                this.bet.auctionId = this.auction.id;
                this.betsService.saveBet(this.bet).then(function () {
                    _this.getAuction();
                });
            };
            return AuctionDetailController;
        }());
        Controllers.AuctionDetailController = AuctionDetailController;
        var CreateAuctionController = (function () {
            function CreateAuctionController(auctionsService, $state) {
                this.auctionsService = auctionsService;
                this.$state = $state;
            }
            CreateAuctionController.prototype.saveNewAuction = function () {
                var _this = this;
                this.auctionsService.saveAuction(this.auctionToCreate).then(function () {
                    _this.$state.go('auctions');
                });
            };
            return CreateAuctionController;
        }());
        Controllers.CreateAuctionController = CreateAuctionController;
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
//# sourceMappingURL=controllers.js.map