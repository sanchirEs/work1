/*
  Warnings:

  - Made the column `productId` on table `Campaign` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Campaign" ALTER COLUMN "productId" SET NOT NULL;
