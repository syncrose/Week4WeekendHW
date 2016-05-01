namespace MyApp.Controllers {

    export class HomeController {
        public message = 'Hello from the home page!';
    }

    export class AboutController {
        public message = 'Hello from the about page!';
    }


    export class AuctionsController {

        public auctions;

        constructor(private auctionsService: MyApp.Services.AuctionsService) {
            this.auctions = this.auctionsService.getAuctions();
        }
    }


    export class AuctionDetailController {
        public auction;
        public bet;

        constructor(private auctionsService: MyApp.Services.AuctionsService,
            private $stateParams: ng.ui.IStateParamsService,
            private betsService: MyApp.Services.BetsService) {
            this.getAuction();
        }



        getAuction() {
            let auctionId = this.$stateParams['id'];
            this.auction = this.auctionsService.getAuction(auctionId);
        }

        saveBet() {
            this.bet.auctionId = this.auction.id;
            this.betsService.saveBet(this.bet).then(() => {
                this.getAuction();
            });

        }

    }





    export class CreateAuctionController {
        public auctionToCreate;

        constructor(private auctionsService: MyApp.Services.AuctionsService,
            private $state: ng.ui.IStateService) {

        }

        saveNewAuction() {
            this.auctionsService.saveAuction(this.auctionToCreate).then(() => {
                this.$state.go('auctions');
            });
        }


    }

}
