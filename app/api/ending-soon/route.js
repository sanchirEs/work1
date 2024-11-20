import { prisma } from "@/lib/prisma";

export async function GET(req) {
  const now = new Date();
  const soonDate = new Date();
  soonDate.setDate(now.getDate() + 90); // Ending within 3 days

  const endingSoonCampaigns = await prisma.campaign.findMany({
    where: {
      endDate: { gte: now, lte: soonDate },
      status: "ACTIVE",
    },
    include: { product: true }, // assuming 'product' is the relation field for a single product
  });

  return new Response(JSON.stringify(endingSoonCampaigns), { status: 200 });
}
