The GamesShop BackEnd

Brief description:
Server built to serve data from mongoDB to our frontend. 

Schemas:
-Users
    -name
    -pwd 
    -email
    -admin: boolean
-Games
    -name
    -category
    -price
    -numOfPlayers
    -desc
    -qty
-Cart
    -items 
    -total price
    -userId

Routes:
-Users 
    -post user
    -read user
    -edit user
    -delete user

-Game
    -get all
    -get one game by Id
    - admin update 
    -admin delete


-Cart
    -add to cart
    -remove to cart
    -"checkout"

Tecnologies:
    -Mongoose
    -Express
    -dotenv
    
