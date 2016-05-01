using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Week4HW.Models
{
    public class Auction
    {
        public int Id { get; set; }
        public string Item { get; set; }
        public decimal Price { get; set; }
        public bool MinBetReached { get; set; }
        public decimal RequiredMinBet { get; set; }
        public ICollection<Bet> BetsPlaced { get; set; }

    }
}
