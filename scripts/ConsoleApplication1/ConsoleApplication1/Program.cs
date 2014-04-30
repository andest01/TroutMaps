using System;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApplication1
{
	class Program
	{
		static void Main(string[] args)
		{
			var repo = CreateRepository();
			var allDishes = repo.GetDishes();
			var dishesWithQueso = allDishes.Where(dish => dish.Ingredients.Any(i => String.Equals(i.Name, "Queso", StringComparison.OrdinalIgnoreCase)));
			
		}

		private static IDishRepository CreateRepository()
		{
			return new DishRepository();
		}
	}

	public class Dish
	{
		public string Name { get; set; }
		public Ingredient[] Ingredients { get; set; }
	}

	public class Ingredient
	{
		public string Name { get; set; }
	}
}
