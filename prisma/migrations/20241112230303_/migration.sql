/*
  Warnings:

  - The values [ENDED] on the enum `CampaignStatus` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `description` on the `Campaign` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Campaign` table. All the data in the column will be lost.
  - You are about to drop the column `campaignId` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the `Petition` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[productId]` on the table `Campaign` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `productId` to the `Campaign` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "CampaignStatus_new" AS ENUM ('ACTIVE', 'INACTIVE', 'COMPLETED');
ALTER TABLE "Campaign" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "Campaign" ALTER COLUMN "status" TYPE "CampaignStatus_new" USING ("status"::text::"CampaignStatus_new");
ALTER TYPE "CampaignStatus" RENAME TO "CampaignStatus_old";
ALTER TYPE "CampaignStatus_new" RENAME TO "CampaignStatus";
DROP TYPE "CampaignStatus_old";
ALTER TABLE "Campaign" ALTER COLUMN "status" SET DEFAULT 'ACTIVE';
COMMIT;

-- AlterEnum
ALTER TYPE "CampaignType" ADD VALUE 'PETITION';

-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_campaignId_fkey";

-- AlterTable
ALTER TABLE "Campaign" DROP COLUMN "description",
DROP COLUMN "title",
ADD COLUMN     "productId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "campaignId";

-- DropTable
DROP TABLE "Petition";

-- DropEnum
DROP TYPE "PetitionStatus";

-- CreateIndex
CREATE UNIQUE INDEX "Campaign_productId_key" ON "Campaign"("productId");

-- AddForeignKey
ALTER TABLE "Campaign" ADD CONSTRAINT "Campaign_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;
