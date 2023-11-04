"use client";
import { useState } from "react";
import classes from "./page.module.css";
import { BiSolidEditAlt } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
const page = () => {
    const [showForm, setShowForm] = useState(false);
    const [editForm, setEditForm] = useState(false);
    return (
        <section className="mainContainer  py-4 flex flex-col gap-4">
            <div className="flex justify-between items-center">
                <p className="text-4xl font-semibold">الأصول</p>
                <button
                    onClick={() => {
                        setShowForm(!showForm);
                        setEditForm(false);
                    }}
                    className={classes.addBtn}
                >
                    اضافه اصل
                </button>
            </div>
            <div className={classes.part2}>
                <table className={classes.table}>
                    <tbody>
                        <tr className={classes.head}>
                            <td>كود</td>
                            <td>الأصل</td>
                            <td>القيمه</td>
                            <td>بدا الاستخدام</td>
                            <td>تغير</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>جهاز كومبيوتر (شاشه كيسه كيبورد ماوس)</td>
                            <td>10000</td>
                            <td>1/10/2022</td>
                            <td className={classes.action}>
                                <BiSolidEditAlt
                                    className="cursor-pointer"
                                    onClick={() => {
                                        setShowForm(!showForm);
                                        
                                        setEditForm(!editForm);
                                    }}
                                />
                                <MdDelete className="cursor-pointer" />
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>جهاز كومبيوتر (شاشه كيسه كيبورد ماوس)</td>
                            <td>10000</td>
                            <td>1/10/2022</td>
                            <td className={classes.action}>
                                <BiSolidEditAlt
                                    className="cursor-pointer"
                                    onClick={() => {
                                        setShowForm(!showForm);
                                        setEditForm(!editForm);
                                    }}
                                />
                                <MdDelete className="cursor-pointer" />
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>جهاز كومبيوتر (شاشه كيسه كيبورد ماوس)</td>
                            <td>10000</td>
                            <td>1/10/2022</td>
                            <td className={classes.action}>
                                <BiSolidEditAlt
                                    className="cursor-pointer"
                                    onClick={() => {
                                        setShowForm(!showForm);
                                        setEditForm(!editForm);
                                    }}
                                />
                                <MdDelete className="cursor-pointer" />
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>جهاز كومبيوتر (شاشه كيسه كيبورد ماوس)</td>
                            <td>10000</td>
                            <td>1/10/2022</td>
                            <td className={classes.action}>
                                <BiSolidEditAlt
                                    className="cursor-pointer"
                                    onClick={() => {
                                        setShowForm(!showForm);
                                        setEditForm(!editForm);
                                    }}
                                />
                                <MdDelete className="cursor-pointer" />
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>جهاز كومبيوتر (شاشه كيسه كيبورد ماوس)</td>
                            <td>10000</td>
                            <td>1/10/2022</td>
                            <td className={classes.action}>
                                <BiSolidEditAlt
                                    className="cursor-pointer"
                                    onClick={() => {
                                        setShowForm(!showForm);
                                        setEditForm(!editForm);
                                    }}
                                />
                                <MdDelete className="cursor-pointer" />
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>جهاز كومبيوتر (شاشه كيسه كيبورد ماوس)</td>
                            <td>10000</td>
                            <td>1/10/2022</td>
                            <td className={classes.action}>
                                <BiSolidEditAlt
                                    className="cursor-pointer"
                                    onClick={() => {
                                        setShowForm(!showForm);
                                        setEditForm(!editForm);
                                    }}
                                />
                                <MdDelete className="cursor-pointer" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            {showForm && (
                <>
                    <p className="text-2xl font-semibold">
                        {editForm ? "تعديل بيانات الاصل" : "اضافه أصل"}
                    </p>
                    <div className={classes.formAdd}>
                        <div>
                            <label htmlFor="">الأصل</label>
                            <input
                                type="text"
                                placeholder="ادخل تفاصيل الاصل "
                            />
                        </div>
                        <div>
                            <label htmlFor="">القيمه</label>
                            <input type="text" placeholder="ادخل القيمه " />
                        </div>
                        <button>تاكيد</button>
                    </div>
                </>
            )}
        </section>
    );
};

export default page;
