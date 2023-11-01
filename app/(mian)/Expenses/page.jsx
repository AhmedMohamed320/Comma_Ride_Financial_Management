"use client";
import React from "react";
import classes from "./page.module.css";
import Link from "next/link";
import Main from "@/components/Expenses/Main";
import { useSearchParams } from "next/navigation";

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
            <Main />
        </section>
    );
};

export default page;
