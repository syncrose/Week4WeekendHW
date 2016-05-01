using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;

namespace Week4HW.Models
{
    public class SampleData
    {

        public static void Initialize(IServiceProvider sp)
        {
            var db = sp.GetService<ApplicationDbContext>();

            if (!db.Auctions.Any())
            {
                var Auctions = new Auction[]
                {
                    new Auction {Item = "Aston Martin Vanquish S", Price = 0, MinBetReached = false, RequiredMinBet = 80000m, BetsPlaced = new List<Bet> {
                        new Bet { BetPlaced = 30000m },
                        new Bet { BetPlaced = 38000m },
                        new Bet {BetPlaced = 48000m }
                    } },

                    new Auction {Item = "Picasso Painting", Price = 0, MinBetReached = false, RequiredMinBet = 800000m, BetsPlaced = new List<Bet>
                    {
                        new Bet {BetPlaced = 200000m },
                        new Bet {BetPlaced = 250000m }, 
                        new Bet {BetPlaced = 350000m }
                    } },

                    new Auction {Item = "Tropical Island House", Price = 0, MinBetReached = false, RequiredMinBet = 5000000m, BetsPlaced = new List<Bet>
                    {
                        new Bet {BetPlaced = 900000m },
                        new Bet {BetPlaced = 1500000m }, 
                        new Bet {BetPlaced = 2000000m }
                    } }
                };

                db.Auctions.AddRange(Auctions);
                db.SaveChanges();
            }
        }
    }
}
