import Chocolate from "../model/chocolateModel";

const getAllChocolate = async (req, res) => {
    try {
        const chocolates = await Chocolate.find();
        res.json(chocolates);
    } catch (error) {
        res.json(error.message);
    }
};

const postChocolate = async (req, res) => {
    try {
        const newChocolate = await new Chocolate({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            grams: req.body.grams,
            originCountry: req.body.originCountry,
            imageUrl: req.body.imageUrl
        })
        newChocolate.save();
        res.json({
            newChocolate, message: " has been added"
        });
    } catch (error) {
        res.json(error.message);
    }
}


export { getAllChocolate, postChocolate };