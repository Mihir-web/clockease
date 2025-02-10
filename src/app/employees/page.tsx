import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { InvoiceTable } from "@/components/Tables/invoice-table";
import { Employees } from "@/components/Tables/top-channels";
import { TopChannelsSkeleton } from "@/components/Tables/top-channels/skeleton";
import { TopProducts } from "@/components/Tables/top-products";
import { TopProductsSkeleton } from "@/components/Tables/top-products/skeleton";

import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Emploees",
};

const TablesPage = () => {
  return (
    <>
      <Breadcrumb pageName="Employess" />

      <div className="space-y-10">
        <Suspense fallback={<TopChannelsSkeleton />}>
          <Employees />
        </Suspense>
        
        

       
      </div>
    </>
  );
};

export default TablesPage;
