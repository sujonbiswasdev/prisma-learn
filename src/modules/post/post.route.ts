import express, { Router } from 'express';
import { PostController } from './post.controller';

const router = express.Router();

router.post(
    "/",
    // auth(UserRole.USER),
    PostController.createPo
)

export const postRouter: Router = router;