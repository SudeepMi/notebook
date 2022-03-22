import { errorHandler, jwtMiddleware } from 'helpers/api';
import Cors from 'cors'

// Initializing the cors middleware
const cors = Cors({
  methods: ['GET', 'HEAD','POST','PUT','DELETE','OPTIONS'],
})



export function apiHandler(handler) {
    console.log("sss");
    return async (req, res) => {
        const method = req.method.toLowerCase();
        // check handler supports HTTP method
        if (!handler[method])
            return res.status(405).end(`Method ${req.method} Not Allowed`);

        try {
            // global middleware
            await jwtMiddleware(req, res,cors);
            // route handler
            await handler[method](req, res,cors);
        } catch (err) {
            // global error handler
            errorHandler(err, res);
        }
    }
}


