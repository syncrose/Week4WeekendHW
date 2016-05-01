namespace MyApp.Services {

    export class AuctionsService {
        private auctionResource;

        constructor(private $resource: ng.resource.IResourceService) {
            this.auctionResource = this.$resource("/api/auctions/:id");
        }

        getAuctions() {
            return this.auctionResource.query();
        }

        getAuction(id) {
            return this.auctionResource.get({ id: id });
        }

        saveAuction(auctionToSave) {
            return this.auctionResource.save(auctionToSave).$promise;
        }

    }


    export class BetsService {

        private betResource;

        constructor(private $resource: ng.resource.IResourceService) {
            this.betResource = this.$resource('/api/bets/:id');
        }


        saveBet(betToSave) {
            return this.betResource.save(betToSave).$promise;
        }
    }

    angular.module("MyApp").service("auctionsService", AuctionsService);
    angular.module("MyApp").service("betsService", BetsService);
}