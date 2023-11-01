"use client";
import React from "react";
import classes from "./Aside.module.css";
import { MdOutlineClose } from "react-icons/md";
import { BsPersonFill } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaFileInvoiceDollar } from "react-icons/fa6";
import { GiExpense } from "react-icons/gi";

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
                    <li className={pathname == "/info" ? classes.active:""}>
                        <span className={classes.border}></span>
                        <Link
                            href={{
                                pathname: "/User_Profile",
                            }}
                            onClick={props.onHideAside}
                        >
                            <BsPersonFill />
                            حسابي
                        </Link>
                    </li>
                    <li className={pathname == "/" ? classes.active:""}>
                        <span className={classes.border}></span>
                        <Link
                            href={{
                                pathname: "/",
                            }}
                            onClick={props.onHideAside}
                        >
                            <FaFileInvoiceDollar />
                            الأصول
                        </Link>
                    </li>
                    <li className={pathname == "/Sales" ? classes.active:""}>
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
                    <li className={pathname == "/Expenses" ? classes.active:""}>
                        <span className={classes.border}></span>
                        <Link
                            href={{
                                pathname: "/Expenses",
                            }}
                            onClick={props.onHideAside}
                        >
                            <GiExpense />
                            المصروفات
                        </Link>
                    </li>
                    <li className={pathname == "/" ? classes.active:""}>
                        <span className={classes.border}></span>
                        <Link
                            href={{
                                pathname: "/",
                            }}
                            onClick={props.onHideAside}
                        >
                            <FaFileInvoiceDollar />
                            المدفوعات
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
