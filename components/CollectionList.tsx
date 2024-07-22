import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { Frown } from "lucide-react";
import CreateCollectionButton from "./CreateCollectionButton";

async function CollectionList() {
  const user = await currentUser();
  const collections = await prisma.collection.findMany({
    where: { userId: user?.id },
  });

  if (collections.length === 0) {
    return (
      <div className="flex flex-col gap-5">
        <Alert>
          <Frown />
          <AlertTitle>There are no collections created yet!</AlertTitle>
          <AlertDescription>
            Create a collection to get started!
          </AlertDescription>
        </Alert>
        <CreateCollectionButton />
      </div>
    );
  }
}

export default CollectionList;
