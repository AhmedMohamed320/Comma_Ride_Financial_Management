import React from "react";
import classes from "./page.module.css";
import Link from "next/link";
const page = () => {
    return (
        <section className={`mainContainer ${classes.section}`}>
            <div className={classes.tables}>
                <div>
                    <div className="flex items-center justify-between">
                        <p className="text-3xl font-semibold">الطيارين</p>
                        <Link href="/Our_employees/Form/addDelivery">
                            اضافه طيار
                        </Link>
                    </div>
                    <table className={classes.table}>
                        <tbody>
                            <tr className={classes.head}>
                                <td>كود</td>
                                <td>الاسم</td>
                                <td>المستحق له</td>
                                <td>يصرف بعد</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>
                                    <Link
                                        href="/Our_employees/Profile_Delivery_men"
                                        className="underline"
                                    >
                                        عمر السيد
                                    </Link>
                                </td>
                                <td>2000</td>
                                <td>
                                    10 <span>يوم</span>
                                </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>
                                    <Link
                                        href="/Our_employees/Profile_Delivery_men"
                                        className="underline"
                                    >
                                        عمر السيد
                                    </Link>
                                </td>
                                <td>2000</td>
                                <td>
                                    10 <span>يوم</span>
                                </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>
                                    <Link
                                        href="/Our_employees/Profile_Delivery_men"
                                        className="underline"
                                    >
                                        عمر السيد
                                    </Link>
                                </td>
                                <td>2000</td>
                                <td>
                                    10 <span>يوم</span>
                                </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>
                                    <Link
                                        href="/Our_employees/Profile_Delivery_men"
                                        className="underline"
                                    >
                                        عمر السيد
                                    </Link>
                                </td>
                                <td>2000</td>
                                <td>
                                    10 <span>يوم</span>
                                </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>
                                    <Link
                                        href="/Our_employees/Profile_Delivery_men"
                                        className="underline"
                                    >
                                        عمر السيد
                                    </Link>
                                </td>
                                <td>2000</td>
                                <td>
                                    10 <span>يوم</span>
                                </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>
                                    <Link
                                        href="/Our_employees/Profile_Delivery_men"
                                        className="underline"
                                    >
                                        عمر السيد
                                    </Link>
                                </td>
                                <td>2000</td>
                                <td>
                                    10 <span>يوم</span>
                                </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>
                                    <Link
                                        href="/Our_employees/Profile_Delivery_men"
                                        className="underline"
                                    >
                                        عمر السيد
                                    </Link>
                                </td>
                                <td>2000</td>
                                <td>
                                    10 <span>يوم</span>
                                </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>
                                    <Link
                                        href="/Our_employees/Profile_Delivery_men"
                                        className="underline"
                                    >
                                        عمر السيد
                                    </Link>
                                </td>
                                <td>2000</td>
                                <td>
                                    10 <span>يوم</span>
                                </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>
                                    <Link
                                        href="/Our_employees/Profile_Delivery_men"
                                        className="underline"
                                    >
                                        عمر السيد
                                    </Link>
                                </td>
                                <td>2000</td>
                                <td>
                                    10 <span>يوم</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <div className="flex items-center justify-between">
                        <p className="text-3xl font-semibold">الموظفين</p>
                        <Link href="/Our_employees/Form/addEmployee">
                            اضافه موظف
                        </Link>
                    </div>
                    <table className={classes.table}>
                        <tbody>
                            <tr className={classes.head}>
                                <td>كود</td>
                                <td>الاسم</td>
                                <td>المستحق له</td>
                                <td>يصرف بعد</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>
                                    <Link
                                        href="/Our_employees/Profile_Employee"
                                        className="underline"
                                    >
                                        عمر السيد
                                    </Link>
                                </td>
                                <td>2000</td>
                                <td>
                                    25<span>يوم</span>
                                </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>
                                    <Link
                                        href="/Our_employees/Profile_Employee"
                                        className="underline"
                                    >
                                        عمر السيد
                                    </Link>
                                </td>
                                <td>2000</td>
                                <td>
                                    25<span>يوم</span>
                                </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>
                                    <Link
                                        href="/Our_employees/Profile_Employee"
                                        className="underline"
                                    >
                                        عمر السيد
                                    </Link>
                                </td>
                                <td>2000</td>
                                <td>
                                    25<span>يوم</span>
                                </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>
                                    <Link
                                        href="/Our_employees/Profile_Employee"
                                        className="underline"
                                    >
                                        عمر السيد
                                    </Link>
                                </td>
                                <td>2000</td>
                                <td>
                                    25<span>يوم</span>
                                </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>
                                    <Link
                                        href="/Our_employees/Profile_Employee"
                                        className="underline"
                                    >
                                        عمر السيد
                                    </Link>
                                </td>
                                <td>2000</td>
                                <td>
                                    25<span>يوم</span>
                                </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>
                                    <Link
                                        href="/Our_employees/Profile_Employee"
                                        className="underline"
                                    >
                                        عمر السيد
                                    </Link>
                                </td>
                                <td>2000</td>
                                <td>
                                    25<span>يوم</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default page;
