function makeCoffee(sugar, milk)
{
    var instructions = "Boil water, ";
    instructions += "pour into cup, ";
    instructions += "add coffee granules, ";
    instructions += "add " + sugar + "% milk.";
    return instructions;
}

console.log(makeCoffee(2, 20));

var car = {
    make: "volvo",
    speed: 160,
    engine: {
        size: 2.0,
        make: "BMW",
        fuel: "petrol",
        pistons: [{maker: "BMW"}, {maker: "BMW2"}]
    },
    drive: function(){
        return "drive";
    }
};

var array = [
    "string",
    100,
    ["embeded", 200],
    {car: "Ford"},
    function(){
        return "drive";
    };
]