import React from "react";
import classes from "./Main.module.css";
const Main = () => {
    return (
        <>
            <p className="text-4xl font-semibold pb-4">المدفوعات</p>
            <section className={classes.section}>
                <div>
                    <div className={classes.form}>
                        <p className="text-2xl font-semibold text-center ">
                            مصروفات نثريه ودعائيه
                        </p>
                        <select name="" id="">
                            <option value="">نثريه</option>
                            <option value="">دعائيه</option>
                        </select>
                        <select name="" id="">
                            <option value="">ايجار</option>
                            <option value="">كهرباء</option>
                            <option value="">مطبخ</option>
                        </select>
                        <input
                            type="number"
                            name=""
                            id=""
                            placeholder="ادخل القيمه"
                        />
                        <input type="file" name="" id="" />
                        <textarea
                            name=""
                            id=""
                            placeholder="ادخل اي تفاصيل اخرى"
                        ></textarea>
                        <button>تاكيد</button>
                    </div>
                </div>
                <div>
                    <div className={classes.form}>
                        <p className="text-2xl font-semibold text-center ">
                            العهد
                        </p>
                        <select name="" id="">
                            <option value="">استلام</option>
                            <option value="">تسليم</option>
                        </select>
                        <select name="" id="">
                            <option value="">اختار الطيار</option>
                        </select>
                        <input
                            type="number"
                            name=""
                            id=""
                            placeholder="ادخل القيمه"
                        />
                    </div>
                    <button>تاكيد</button>
                </div>
                <div>
                    <div className={classes.form}>
                        <p className="text-2xl font-semibold text-center ">
                            مرتبات
                        </p>
                        <select name="" id="">
                            <option value="">موظف</option>
                            <option value="">طيار</option>
                        </select>
                        <select name="" id="">
                            <option value="">احمد محمد</option>
                            <option value="">محمد</option>
                            <option value="">محمد</option>
                            <option value="">محمد</option>
                        </select>
                        <p className="text-2xl">
                            مستحق له :{" "}
                            <span className="font-semibold">560 جنيه</span>
                        </p>
                        <input
                            type="number"
                            name=""
                            id=""
                            placeholder="ادخل القيمه المراد صرفها"
                        />
                        <input type="file" name="" id="" />
                    </div>
                    <button>تاكيد</button>
                </div>
            </section>
        </>
    );
};

export default Main;
