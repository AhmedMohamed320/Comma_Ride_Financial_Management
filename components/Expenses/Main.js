import React from "react";
import { useSearchParams } from "next/navigation";
import Operational from "@/components/Expenses/operational/Operational";
import Sundry from "@/components/Expenses/sundry/Sundry";
import Advertising from "@/components/Expenses/advertising/Advertising";
const Main = () => {
    const router = useSearchParams();
    const content = router.get("content") || "operational";
    return (
        <div>
            {content == "operational" && <Operational />}
            {content == "sundry" && <Sundry />}
            {content == "advertising" && <Advertising />}
        </div>
    );
};

export default Main;
