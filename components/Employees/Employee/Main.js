"use client";
import React from "react";
import classes from "./Main.module.css";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import AttendanceAndDeparture from "@/components/Employees/Attendance and Departure/AttendanceAndDeparture";
import Profile from "@/components/Employees/Employee/Profile";

const Main = () => {
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
                                pathname: "/Our_employees/Profile_Employee",
                                query: { content: "personal_information" },
                            }}
                        >
                            المعلومات الشخصيه
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
                                pathname: "/Our_employees/Profile_Employee",
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
            {content == "Attendance_Departure" && <AttendanceAndDeparture />}
        </section>
    );
};

export default Main;
