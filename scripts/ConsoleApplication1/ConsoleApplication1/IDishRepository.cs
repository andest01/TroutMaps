using System.Collections.Generic;

namespace ConsoleApplication1
{
	public interface IDishRepository
	{
		IEnumerable<Dish> GetDishes();
	}

	public class DishRepository : IDishRepository
	{
		public IEnumerable<Dish> GetDishes()
		{
			yield return new Dish()
			{
				Name = "Nachos Deluxe",
				Ingredients = new Ingredient[]
				                          {
					                          new Ingredient

					                          {
						                          Name = "Chips"
					                          },
					                          new Ingredient

					                          {
						                          Name = "Salsa"
					                          },
					                          new Ingredient

					                          {
						                          Name = "Queso"
					                          }


				                          }
			};

			yield return new Dish()
			{
				Name = "Apples",
				Ingredients = new Ingredient[]
				                          {
					                          new Ingredient

					                          {
						                          Name = "Apple"
					                          },
					                          
				                          }
			};

			yield return new Dish()
			{
				Name = "Marmelade",
				Ingredients = new Ingredient[]
				                          {
					                          new Ingredient

					                          {
						                          Name = "Queso"
					                          },
					                          
				                          }
			};
		}
	}
}