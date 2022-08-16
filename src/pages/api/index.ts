import { NextApiRequest, NextApiResponse } from "next";
import { User } from "../../models/User";

type Response = {
    message: string;
    data?: User.UserData | null;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response>
) {
  const { method } = req;

  if (method === "GET") {
    try {
        User.find({}, (err: any, data: User.UserData) => {
            if (err) {
                res.status(500).json({ message: "Error" });
            } else {
                res.status(200).json({ message: "Success", data: data });
            }
        });
    } catch (error) {
        let errorMessage = "Failed to do something exceptional";
        if (error instanceof Error) {
          errorMessage = error.message;
        }
        res.status(500).json({ message: errorMessage, data: null });
      }
  }
}
