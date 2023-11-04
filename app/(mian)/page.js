import React from "react";
import classes from "./Home.module.css";
import { GiTakeMyMoney } from "react-icons/gi";
import { BiCoinStack, BiWallet } from "react-icons/bi";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import LineChart from "@/components/UI/chart/LineChart";
import Link from "next/link";
const page = () => {
    return (
        <section className="mainContainer py-4 flex flex-col gap-4">
            <div
                className={`flex items-center justify-between ${classes.head}`}
            >
                <p className="text-4xl font-semibold">الخزنه</p>
                <Link href="/Capital">رؤوس الاموال</Link>
            </div>
            <div className={classes.static}>
                <div>
                    <div>
                        <div className={classes.icon}>
                            <BiCoinStack />
                        </div>
                        <p className={classes.changeColor}>+500 ج.م اليوم</p>
                    </div>
                    <p className="text-6xl py-4 text-center">
                        91500 <span className="text-4xl">ج.م</span>
                    </p>
                    <p className={`text-center ${classes.changeColor}`}>
                        الخزنه
                    </p>
                </div>
                <div>
                    <div>
                        <div className={classes.icon}>
                            <FaMoneyBillTransfer />
                        </div>
                        <p className={classes.changeColor}>+60 ج.م اليوم</p>
                    </div>
                    <p className="text-6xl py-4 text-center">
                        <span className="text-4xl">+</span>
                        900 <span className="text-4xl">ج.م</span>
                    </p>
                    <p className={`text-center ${classes.changeColor}`}>
                        ميزان الشهر
                    </p>
                </div>
                <div>
                    <div>
                        <div className={classes.icon}>
                            <GiTakeMyMoney />
                        </div>
                        <p className={classes.changeColor}>+500 ج.م اليوم</p>
                    </div>
                    <p className="text-6xl pb-4 text-center">
                        500 <span className="text-4xl">ج.م</span>
                    </p>
                    <p className={`text-center ${classes.changeColor}`}>
                        العهده
                    </p>
                </div>
                <div>
                    <div>
                        <div className={classes.icon}>
                            <BiWallet />
                        </div>
                        <p className={classes.changeColor}>+10 ج.م اليوم</p>
                    </div>
                    <p className="text-6xl py-4 text-center">
                        100 <span className="text-4xl">ج.م</span>
                    </p>
                    <p className={`text-center ${classes.changeColor}`}>
                        المحفظه
                    </p>
                </div>
            </div>
            <div className={classes.part2}>
                <div>
                    <div className={classes.title}>
                        <p>الخارج</p>
                        <select name="" id="">
                            <option value="">اخر 7 ايام</option>
                            <option value="">اخر 12 اسبوع</option>
                        </select>
                    </div>
                    <div className={classes.Income}>
                        <table className={classes.table}>
                            <tbody>
                                <tr className={classes.head}>
                                    <td>التوقيت</td>
                                    <td>الوصف</td>
                                    <td>القيمه</td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>9/10</p>
                                        <p className="text-xl">11:30</p>
                                    </td>
                                    <td>
                                        <p>ايجار</p>
                                    </td>
                                    <td>
                                        <p>-3000</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>9/10</p>
                                        <p className="text-xl">09:30</p>
                                    </td>
                                    <td>
                                        <p>مرتب</p>
                                    </td>
                                    <td>
                                        <p>-2000</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>9/10</p>
                                        <p className="text-xl">09:30</p>
                                    </td>
                                    <td>
                                        <p>مرتب</p>
                                    </td>
                                    <td>
                                        <p>-2000</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>9/10</p>
                                        <p className="text-xl">09:30</p>
                                    </td>
                                    <td>
                                        <p>اعلانات</p>
                                    </td>
                                    <td>
                                        <p>-200</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>9/10</p>
                                        <p className="text-xl">09:30</p>
                                    </td>
                                    <td>
                                        <p>مرتب</p>
                                    </td>
                                    <td>
                                        <p>-2000</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className={classes.chart}>
                            <LineChart />
                        </div>
                    </div>
                </div>
                <div>
                    <div className={classes.title}>
                        <p>الداخل</p>
                        <select name="" id="">
                            <option value="">اخر 7 ايام</option>
                            <option value="">اخر 12 اسبوع</option>
                        </select>
                    </div>
                    <div className={classes.outside}>
                        <table className={classes.table}>
                            <tbody>
                                <tr className={classes.head}>
                                    <td>التوقيت</td>
                                    <td>الوصف</td>
                                    <td>القيمه</td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>9/10</p>
                                        <p className="text-xl">09:30</p>
                                    </td>
                                    <td>
                                        <p>تحصيل</p>
                                    </td>
                                    <td>
                                        <p>+200</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>9/10</p>
                                        <p className="text-xl">09:30</p>
                                    </td>
                                    <td>
                                        <p>تحصيل</p>
                                    </td>
                                    <td>
                                        <p>+200</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>9/10</p>
                                        <p className="text-xl">09:30</p>
                                    </td>
                                    <td>
                                        <p>تحصيل</p>
                                    </td>
                                    <td>
                                        <p>+200</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>9/10</p>
                                        <p className="text-xl">09:30</p>
                                    </td>
                                    <td>
                                        <p>تحصيل</p>
                                    </td>
                                    <td>
                                        <p>+200</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>9/10</p>
                                        <p className="text-xl">09:30</p>
                                    </td>
                                    <td>
                                        <p>تحصيل</p>
                                    </td>
                                    <td>
                                        <p>+200</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className={classes.chart}>
                            <LineChart />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default page;
