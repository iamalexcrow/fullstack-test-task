import { NextApiRequest, NextApiResponse } from "next";
import { NextFunction } from "express";

const logger = async (
  req: NextApiRequest,
  res: NextApiResponse,
  next: NextFunction
) => {
  const { method, httpVersion, url } = req;

  /* Should be implemented */

  return next();
};

export default logger;
