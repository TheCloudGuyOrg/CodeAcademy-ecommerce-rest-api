const express = require('express');
const app = express();
const { PORT } = require('./config.js');
const expressMiddleware = require('./controllers/express.js');
const passportMiddleware = require('./controllers/passport.js');
const authRouter = require('./routes/authRouter.js');
const userRouter = require('./routes/userRouter.js');
const productRouter = require('./routes/productRouter.js');
const orderRouter = require('./routes/orderRouter.js');
const cartRouter = require('./routes/cartRouter.js');

async function startServer() {

    app.get('/', (req, res) => {
        res.send('Hello World!')
      })

    // Load Express Middleware
    const expressApp = await expressMiddleware(app);

    // Load Passport Middleware
    const passport = await passportMiddleware(expressApp);

    // Load Routers
    authRouter(app, passport);
    userRouter(app);
    productRouter(app);
    orderRouter(app);
    cartRouter(app);

    // Error Handler
    app.use((error, request, response, next) => {
      const { message, status } = error;
      return response.status(status).send({ message });
    });
    
    // Start Server
    app.listen(PORT, () => {
        console.log(`Server listening on PORT ${PORT}`);
      })
}

startServer();