import { neon } from "@neondatabase/serverless";

export async function POST(req: Request, res: Response) {
  try {
    const sql = neon(`${process.env.DATABASE_URL}`);
    const { name, email, clerkId } = await req.json();
    if (!name || !email || !clerkId) {
      return res.json({ error: "Missing required fields" }, { status: 400 });
    }
    const response = await sql`
    INSERT INTO users(name, email, clerk_id) VALUES(${name}, ${email}, ${clerkId})
`;
    return res.json({ data: response }, { status: 201 });
  } catch (error) {
    console.log("error", error);
    return res.json({ error: error }, { status: 500 });
  }
}
