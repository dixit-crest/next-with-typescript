import { NextApiHandler } from "next";

const handler: NextApiHandler = (req, res) => {
  res.status(200).json([{ title: "Buy milk", isCompleted: false }]);
};

export default handler;
