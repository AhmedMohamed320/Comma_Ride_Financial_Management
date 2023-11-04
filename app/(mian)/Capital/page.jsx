import React from "react";
import classes from "./page.module.css";
import LineChart from "@/components/UI/chart/LineChart";
const page = () => {
    return (
        <section className="mainContainer  py-4 flex flex-col gap-4">
            <p className="text-4xl font-semibold">رأس المال</p>
            <div className={classes.part2}>
                <div>
                    <div className={classes.title}>
                        <p>تحركات رؤوس الأموال</p>
                        <select name="" id="">
                            <option value="">اخر 12 اشهر</option>
                            <option value="">اخر 12 اسبوع</option>
                        </select>
                    </div>
                    <div className={classes.Income}>
                        <table className={classes.table}>
                            <tbody>
                                <tr className={classes.head}>
                                    <td>التوقيت</td>
                                    <td>باسم</td>
                                    <td>القيمه</td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>9/10</p>
                                        <p className="text-xl">11:30</p>
                                    </td>
                                    <td>
                                        <p>محمد على</p>
                                    </td>
                                    <td>
                                        <p>3000</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>9/10</p>
                                        <p className="text-xl">11:30</p>
                                    </td>
                                    <td>
                                        <p>محمد على</p>
                                    </td>
                                    <td>
                                        <p>-3000</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>9/10</p>
                                        <p className="text-xl">11:30</p>
                                    </td>
                                    <td>
                                        <p>محمد على</p>
                                    </td>
                                    <td>
                                        <p>3000</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>9/10</p>
                                        <p className="text-xl">11:30</p>
                                    </td>
                                    <td>
                                        <p>محمد على</p>
                                    </td>
                                    <td>
                                        <p>3000</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>9/10</p>
                                        <p className="text-xl">11:30</p>
                                    </td>
                                    <td>
                                        <p>محمد على</p>
                                    </td>
                                    <td>
                                        <p>3000</p>
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
            <div className={classes.formAdd}>
                <div>
                    <label htmlFor="">ب اسم</label>
                    <input type="text" placeholder="ادخل الاسم " />
                </div>
                <div>
                    <label htmlFor="">القيمه</label>
                    <input type="text" placeholder="ادخل القيمه " />
                </div>
                <button>تاكيد</button>
            </div>
        </section>
    );
};

export default page;
