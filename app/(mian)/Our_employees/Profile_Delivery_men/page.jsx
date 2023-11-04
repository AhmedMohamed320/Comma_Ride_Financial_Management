"use client";
import React from "react";
import classes from "./page.module.css";
import Profile from "@/components/Employees/Delivery/Profile";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Order_statistics from "@/components/Employees/Delivery/orderStatistics/Order_statistics";
import AttendanceAndDeparture from "@/components/Employees/Attendance and Departure/AttendanceAndDeparture";

const page = () => {
    const router = useSearchParams();
    const content = router.get("content") || "personal_information";
    return (
        <section className={`mainContainer py-4`}>
            <div className={classes.nav}>
                <ul>
                    <li
                        className={
                            content == "personal_information"
                                ? classes.active
                                : ""
                        }
                    >
                        <Link
                            href={{
                                pathname: "/Our_employees/Profile_Delivery_men",
                                query: { content: "personal_information" },
                            }}
                        >
                            المعلومات الشخصيه
                        </Link>
                    </li>
                    <li
                        className={
                            content == "Order_statistics" ? classes.active : ""
                        }
                    >
                        <Link
                            href={{
                                pathname: "/Our_employees/Profile_Delivery_men",
                                query: { content: "Order_statistics" },
                            }}
                        >
                            احصائيات الاوردارت
                        </Link>
                    </li>
                    <li
                        className={
                            content == "Attendance_Departure"
                                ? classes.active
                                : ""
                        }
                    >
                        <Link
                            href={{
                                pathname: "/Our_employees/Profile_Delivery_men",
                                query: { content: "Attendance_Departure" },
                            }}
                        >
                            {" "}
                            الحضور و الانصراف
                        </Link>
                    </li>
                </ul>
            </div>
            {content == "personal_information" && <Profile />}
            {content == "Order_statistics" && <Order_statistics />}
            {content == "Attendance_Departure" && <AttendanceAndDeparture />}
        </section>
    );
};

export default page;
