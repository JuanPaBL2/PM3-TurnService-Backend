import { Router} from "express";

import userRoutes from "./userRoutes"
import turnRoutes from "./turnRoutes"

const router = Router();

router.use('/users',  userRoutes)

router.use('/turn', turnRoutes)

export default router;

