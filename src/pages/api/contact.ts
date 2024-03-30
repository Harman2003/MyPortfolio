import EmailTemplate from "@/utils/EmailTemplate";
import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const contact= async (req: NextApiRequest, res: NextApiResponse) => {
  const { name, email, service, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({error:"Incomplete data"});
  }
  const { data, error } = await resend.emails.send({
    from: "My Portfolio <noreply@singhharman.com>",
    to: ["singhharmandhindsa@gmail.com"],
    subject: `New Message from ${name}`,
    html: EmailTemplate(name, email, message),
  });

  if (error) {
    return res.status(400).json(error);
  }

  res.status(200).json(data);
};

export default contact;