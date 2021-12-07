import { NextApiRequest, NextApiResponse } from "next";

export default (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    { id: 1, name: "Felipe" },
    { id: 2, name: "Fabricio" },
    { id: 3, name: "Malu" },
    { id: 4, name: "Adolfo" },
  ];

  return response.json(users);
};
