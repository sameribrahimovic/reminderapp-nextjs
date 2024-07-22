"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import CreateCollectionSidebar from "./CreateCollectionSidebar";

function CreateCollectionButton() {
  const [open, setOpen] = useState(false);
  const handleOpenChange = (open: boolean) => setOpen(open);
  return (
    <div>
      <Button
        className="w-full"
        variant={"outline"}
        onClick={() => setOpen(true)}
      >
        Create collection
      </Button>
      <CreateCollectionSidebar open={open} onOpenChange={handleOpenChange} />
    </div>
  );
}

export default CreateCollectionButton;
