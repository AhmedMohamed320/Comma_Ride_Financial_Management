import React from "react";
import classes from "./Profile.module.css";
import Link from "next/link";
const Profile = () => {
    return (
        <section className={classes.section}>
            <div className={classes.info}>
                <div className={classes.img}>
                    <img src="/image/person.jfif" alt="Delivery image" />
                </div>
                <div>
                    <div className={classes.details}>
                        <Link
                            href="/Our_employees/Form/editEmployee"
                            className={classes.edit}
                        >
                            تعديل
                        </Link>
                        <p className="flex">
                            id : <span>1</span>
                        </p>
                        <p>
                            الاسم : <span>محمد على محمد</span>
                        </p>
                        <p>
                            رقم الهاتف : <span>01245788956</span>
                        </p>
                        <p>
                            الرقم القومي : <span>12457845784512 </span>
                        </p>
                        <p>
                            العنوان : <span>حى الزهور</span>
                        </p>
                        <p>
                            بدايه العمل : <span> 1/10/2023</span>
                        </p>
                        <p>
                            فتره العمل : <span> 11:00 - 07:00</span>
                        </p>
                        <p>
                            يعمل بثابت : <span>2500 ج.م</span>
                        </p>
                        <p>
                            قيمه خصم الشهر : <span>0</span>
                        </p>
                        <p>
                            ملاحظات : <span>لا يوجد اي ملاحظات</span>
                        </p>
                    </div>
                    <div className={classes.dues}>
                        <p className="pb-4">
                            
                            المستحقات الشهريه المصروفه
                        </p>
                        <table className={classes.table}>
                            <tbody>
                                <tr className={classes.head}>
                                    <td>التوقيت</td>
                                    <td>الخصم</td>
                                    <td>بعد الخصم</td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>7/10</p>
                                    </td>
                                    <td>50</td>
                                    <td>950</td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>7/10</p>
                                    </td>
                                    <td>50</td>
                                    <td>950</td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>7/10</p>
                                    </td>
                                    <td>50</td>
                                    <td>950</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Profile;
