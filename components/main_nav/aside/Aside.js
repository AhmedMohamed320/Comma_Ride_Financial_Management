"use client";
import React from "react";
import classes from "./Aside.module.css";
import { MdChair, MdOutlineClose } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import { ImTree } from "react-icons/im";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaFileInvoiceDollar, FaPeopleGroup } from "react-icons/fa6";
import { GiStrongbox } from "react-icons/gi";

const Aside = (props) => {
    const pathname = usePathname();

    return (
        <section className={classes.section}>
            <aside className={classes.aside}>
                <div className={classes.close} onClick={props.onHideAside}>
                    <MdOutlineClose />
                </div>
                <div className={classes.head}>
                    <Link
                        href="/"
                        className={classes.logo}
                        onClick={props.onHideAside}
                    >
                        <img src="/image/ride_logo_2.png" alt="ride_logo" />
                    </Link>
                </div>
                <ul className="flex gap-8 flex-col">
                    <li className={pathname == "/" ? classes.active : ""}>
                        <span className={classes.border}></span>
                        <Link
                            href={{
                                pathname: "/",
                            }}
                            onClick={props.onHideAside}
                        >
                            <GiStrongbox />
                            الخزنه
                        </Link>
                    </li>
                    <li className={pathname == "/Sales" ? classes.active : ""}>
                        <span className={classes.border}></span>
                        <Link
                            href={{
                                pathname: "/Sales",
                            }}
                            onClick={props.onHideAside}
                        >
                            <FaFileInvoiceDollar />
                            المبيعات
                        </Link>
                    </li>
                    <li
                        className={
                            pathname == "/Expenses" ? classes.active : ""
                        }
                    >
                        <span className={classes.border}></span>
                        <Link
                            href={{
                                pathname: "/Expenses",
                            }}
                            onClick={props.onHideAside}
                        >
                            <ImTree />
                            المصروفات
                        </Link>
                    </li>
                    <li
                        className={
                            pathname == "/Payments" ? classes.active : ""
                        }
                    >
                        <span className={classes.border}></span>
                        <Link
                            href={{
                                pathname: "/Payments",
                            }}
                            onClick={props.onHideAside}
                        >
                            <ImTree />
                            المدفوعات
                        </Link>
                    </li>
                    <li className={pathname == "/Assets" ? classes.active : ""}>
                        <span className={classes.border}></span>
                        <Link
                            href={{
                                pathname: "/Assets",
                            }}
                            onClick={props.onHideAside}
                        >
                            <MdChair />
                            الأصول
                        </Link>
                    </li>
                    <li
                        className={
                            pathname == "/Our_employees" ? classes.active : ""
                        }
                    >
                        <span className={classes.border}></span>
                        <Link
                            href={{
                                pathname: "/Our_employees",
                            }}
                            onClick={props.onHideAside}
                        >
                            <FaPeopleGroup />
                            موظفينا
                        </Link>
                    </li>
                </ul>
                <span className={classes.hr}></span>
                <div className="flex items-center  px-10  gap-4 cursor-pointer font-semibold">
                    <Link href="/sign_in">تسجيل الخروج</Link>
                    <BiLogOut className="text-4xl" />
                </div>
            </aside>
        </section>
    );
};

export default Aside;
