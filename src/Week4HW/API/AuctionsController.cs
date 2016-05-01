using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using Microsoft.Data.Entity;
using Week4HW.Models;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Week4HW.API
{
    [Route("api/[controller]")]
    public class AuctionsController : Controller
    {
        ApplicationDbContext _db;

        public AuctionsController(ApplicationDbContext db)
        {
            this._db = db;
        }

        // GET: api/values
        [HttpGet]
        public IEnumerable<Auction> Get()
        {
            var auctions = _db.Auctions.ToList();
            return auctions;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public Auction Get(int id)
        {
            var auction = _db.Auctions.Where(a => a.Id == id).Include(a => a.BetsPlaced).FirstOrDefault();
            return auction;
        }

        // POST api/values
        [HttpPost]
        public IActionResult Post([FromBody]Auction value)
        {
            _db.Auctions.Add(value);
            _db.SaveChanges();
            return Ok();
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
