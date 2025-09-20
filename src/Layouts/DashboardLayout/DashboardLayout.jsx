import { Button } from "@/components/ui/button";
import { IoMenu } from "react-icons/io5";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { X } from "lucide-react";
import { Outlet } from "react-router";

const DashboardLayout = () => {
  return (
    <div className="lg:flex h-screen">
      {/* Sidebar for large screens */}
      <div className="hidden lg:flex lg:flex-shrink-0">
        <div className="lg:w-96 bg-gray-100 dark:bg-gray-800 h-full p-4">
          <h2 className="text-lg font-bold mb-2">Sidebar</h2>
          <p>Put your dashboard navigation here 🚀</p>
        </div>
      </div>

      {/* Drawer for mobile screens */}
      <div className="lg:hidden lg:p-4">
        <Drawer direction="left">
          <div className="flex gap-2 items-center p-2.5 border shadow">
            <DrawerTrigger asChild>
            <Button variant="none"><IoMenu /></Button>
          </DrawerTrigger>
          <h1 className="text-xl font-bold font-dosis">Dashboard</h1>
          </div>
          <DrawerContent className="max-w-full w-screen">
            {/* Close button top-right */}
            <DrawerClose asChild>
              <Button variant="none" className="absolute top-4 right-4 p-2">
                <X className="w-5 h-5" />
                <span className="sr-only">Close drawer</span>
              </Button>
            </DrawerClose>

            <DrawerHeader>
              <DrawerTitle>Sidebar Drawer</DrawerTitle>
              <DrawerDescription>
                This drawer opens from the left.
              </DrawerDescription>
            </DrawerHeader>

            <div className="p-4">
              <p>Put your dashboard navigation here 🚀</p>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
      {/* Main content */}
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashboardLayout;
