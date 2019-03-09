function makeCoffee(sugar, milk)
{
    var instructions = "Boil water, ";
    instructions += "pour into cup, ";
    instructions += "add coffee granules, ";
    instructions += "add " + sugar + "% milk.";
    return instructions;
}

console.log(makeCoffee(2, 20));