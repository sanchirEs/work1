import { prisma } from "@/lib/prisma";

export async function GET(req) {
  const now = new Date();
  const livePetitions = await prisma.campaign.findMany({
    where: {
      type: "PETITION",
      startDate: { lte: now },
      endDate: { gte: now },
      status: "ACTIVE",
    },
    include: { product: true }, // Assuming each petition is linked to a single product
  });
  return new Response(JSON.stringify(livePetitions), { status: 200 });
}
