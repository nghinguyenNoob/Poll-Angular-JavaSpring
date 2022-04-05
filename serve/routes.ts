import { Router, Request, Response } from "express";

export function routes(): Router {
  const baseRouter = Router();
  const apiRouter = Router();

  baseRouter.use("/api", apiRouter);

  apiRouter.get("/hello-world", (req: Request, res: Response) => res.json({ status: 200, message: "Goood!!" }).end());

  return baseRouter;
}
