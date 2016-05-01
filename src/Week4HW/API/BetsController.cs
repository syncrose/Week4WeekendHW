using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using Week4HW.Models;
using Microsoft.Data.Entity;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Week4HW.API
{
    [Route("api/[controller]")]
    public class BetsController : Controller
    {
        ApplicationDbContext _db;

        public BetsController(ApplicationDbContext db)
        {
            this._db = db;
        }


        // POST api/values
        [HttpPost]
        public IActionResult Post([FromBody]BetViewModel value)
        {
            var auctionId = value.AuctionId;
            var betToCreate = new Bet { BetPlaced = value.BetPlaced };
            var auction = _db.Auctions.Where(a => a.Id == auctionId).Include(a => a.BetsPlaced).FirstOrDefault();
            auction.BetsPlaced.Add(betToCreate);
            _db.SaveChanges();
            return Ok();
        }

      

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
