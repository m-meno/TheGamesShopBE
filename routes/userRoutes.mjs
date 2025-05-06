import express from "express";
import User from "../schemas/userSchema.mjs";
import Cart from "../schemas/cartSchema.mjs";

const router = express.Router();

router.post('/register', async (req, res) => {
    //Destructure the req.body
    const { username, email, password } = req.body;

    //Check user submitted all necessary data, if not return
    if (!username || !email || !password) {
        return res.status(400).json({ msg: 'All fields are required' });
    };

    //Check if the user already exists 
    let user = await User.findOne({ email });
    //If existsm return with error
    if (user) {
        return res.status(400).json({ msg: 'Email already exists' })
    };

    //Create a new user, do not save to DB just yet though!
    user = new User({ username, email, password });

    //Save user to create unique mongoDB _id
    await user.save();

    //Create users cart, pass in userId for user property
    const cart = new Cart({ user: user._id, items: [] });

    //Save cart to DB, to create a unique mongoDB _id for cart
    await cart.save();

    //Update user with cart Id reference
    user.cart = cart._id;
    await user.save();

    res.status(201).json({userId: user._id, cartId: cart._id});
});

export default router;
