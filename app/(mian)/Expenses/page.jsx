"use client";
import React from "react";
import classes from "./page.module.css";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Operational from "@/components/Expenses/operational/Operational";
import Sundry from "@/components/Expenses/sundry/Sundry";
import Advertising from "@/components/Expenses/advertising/Advertising";

const page = () => {
    const router = useSearchParams();
    const content = router.get("content") || "operational";
    return (
        <section className={`mainContainer py-4 ${classes.section}`}>
            <div className={classes.nav}>
                <ul>
                    <li
                        className={
                            content == "operational" ? classes.active : ""
                        }
                    >
                        <Link
                            href={{
                                pathname: "/Expenses",
                                query: { content: "operational" },
                            }}
                        >
                            التشغيلية
                        </Link>
                    </li>
                    <li className={content == "sundry" ? classes.active : ""}>
                        <Link
                            href={{
                                pathname: "/Expenses",
                                query: { content: "sundry" },
                            }}
                        >
                            النثريه
                        </Link>
                    </li>
                    <li
                        className={
                            content == "advertising" ? classes.active : ""
                        }
                    >
                        <Link
                            href={{
                                pathname: "/Expenses",
                                query: { content: "advertising" },
                            }}
                        >
                            الدعايه والاعلان
                        </Link>
                    </li>
                </ul>
            </div>
            {content == "operational" && <Operational/>}
            {content == "sundry" && <Sundry/>}
            {content == "advertising" && <Advertising/>}
        </section>
    );
};

export default page;
