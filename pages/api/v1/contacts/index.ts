import type { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
import db from "../../../../models";

const handler = nextConnect();

handler.get<NextApiRequest, NextApiResponse>(async ({ query }, res) => {
  const user_id =
    typeof query["filter[user_id]"] === "string"
      ? query["filter[user_id]"]
      : "";

  try {
    const { Contact } = db;
    let contacts;

    if (user_id) {
      contacts = await Contact.findOne({ where: { user_id } });
    } else {
      contacts = await Contact.findAll();
    }

    res.status(200);

    res.json({ contacts });
  } catch (error) {
    console.error(error);

    res.status(500);

    res.json({
      message: "Internal server error",
    });
  }
});

export default handler;
