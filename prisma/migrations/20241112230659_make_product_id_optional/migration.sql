-- DropIndex
DROP INDEX "Campaign_productId_key";

-- AlterTable
ALTER TABLE "Campaign" ALTER COLUMN "productId" DROP NOT NULL;
