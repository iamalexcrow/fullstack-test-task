import type { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
import db from "../../../models";

const handler = nextConnect();

handler.get<NextApiRequest, NextApiResponse>(async (req, res) => {
  try {
    const { User } = db;
    const users = await User.findAll();

    res.status(200);

    res.json({ users });
  } catch (error) {
    console.error(error);

    res.status(500);

    res.json({
      message: "Internal server error",
    });
  }
});

export default handler;
