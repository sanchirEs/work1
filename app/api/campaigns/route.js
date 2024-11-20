import { prisma } from "@/lib/prisma";

export async function GET(req) {
  const now = new Date();
  const liveCampaigns = await prisma.campaign.findMany({
    where: {
      type: "PLUSH",
      startDate: { lte: now },
      endDate: { gte: now },
      status: "ACTIVE",
    },
    include: { product: true }, // Include the single associated product
  });
  return new Response(JSON.stringify(liveCampaigns), { status: 200 });
}
