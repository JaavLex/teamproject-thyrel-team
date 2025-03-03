using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using thyrel_api.Models;

namespace test_thyrel_api
{
    public class TestProvider
    {
        protected DbContextOptions<HolyDrawDbContext> Options { get; private set;}
        protected HolyDrawDbContext Context { get; private set; }

        protected async Task SetupTest()
        {
            var options = new DbContextOptionsBuilder<HolyDrawDbContext>()
                .UseInMemoryDatabase("thyrel_db")
                .Options;
            
            Options = options;

            var mock = new MockDatabase(options);
            await mock.AddMockData();
            Context = mock.Context;
        }
    }
}