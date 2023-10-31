import React from "react";
import classes from "./page.module.css";
import Search from "@/components/UI/input/Search";
const page = () => {
    return (
        <>
            <section className="mainContainer flex flex-col gap-4 py-4">
                <div className={classes.head}>
                    <div className="flex items-center gap-2">
                        <p className="font-semibold">المبيعات</p>
                        <input type="date" />
                    </div>
                    <div className="sm:block hidden">
                        <Search placeholder="ابحث عن فاتوره محدده" />
                    </div>
                </div>
                <div className={classes.filter}>
                    <select name="" id="">
                        <option value="">فلتر حسب الطيار</option>
                    </select>
                    <select name="" id="">
                        <option value="">فلتر حسب خدمه العملاء</option>
                    </select>
                </div>
                <div className={classes.Invoices}>
                    <div>
                        <div className={`text-center ${classes.title}`}>
                            <p>
                                فاتوره <span> 14508 </span>
                            </p>
                            <p>
                                بتوقيت : <span>01:00</span>
                            </p>
                        </div>
                        <div className={classes.details}>
                            <div>
                                <p>الطرفين : </p>
                                <div>
                                    <p>
                                        من : <span>احمد محمد على</span>
                                    </p>
                                    <p>
                                        الى : <span>احمد على على</span>
                                    </p>
                                </div>
                            </div>
                            <div>
                                <p>المسؤولين : </p>
                                <div>
                                    <p>
                                        طيار : <span> محمد على</span>
                                    </p>
                                    <p>
                                        خدمه العملاء : <span>خالد محمد</span>
                                    </p>
                                </div>
                            </div>
                            <div>
                                <p>التحصيل : </p>
                                <div>
                                    <p>
                                        التكلفه : <span>30</span>
                                    </p>
                                    <p>
                                        خصم : <span>0</span>
                                    </p>
                                    <p>
                                        المحصل : <span>25</span>
                                    </p>
                                    <p>
                                        التغير على المحفظه : <span>-5</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={`text-center ${classes.title}`}>
                            <p>
                                فاتوره <span> 14508 </span>
                            </p>
                            <p>
                                بتوقيت : <span>01:00</span>
                            </p>
                        </div>
                        <div className={classes.details}>
                            <div>
                                <p>الطرفين : </p>
                                <div>
                                    <p>
                                        من : <span>احمد محمد على</span>
                                    </p>
                                    <p>
                                        الى : <span>احمد على على</span>
                                    </p>
                                </div>
                            </div>
                            <div>
                                <p>المسؤولين : </p>
                                <div>
                                    <p>
                                        طيار : <span> محمد على</span>
                                    </p>
                                    <p>
                                        خدمه العملاء : <span>خالد محمد</span>
                                    </p>
                                </div>
                            </div>
                            <div>
                                <p>التحصيل : </p>
                                <div>
                                    <p>
                                        التكلفه : <span>30</span>
                                    </p>
                                    <p>
                                        خصم : <span>0</span>
                                    </p>
                                    <p>
                                        المحصل : <span>25</span>
                                    </p>
                                    <p>
                                        التغير على المحفظه : <span>-5</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default page;
