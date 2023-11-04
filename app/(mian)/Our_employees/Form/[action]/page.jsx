import FormAddDelivery from "@/components/UI/Delivery/FormDelivery ";
import React from "react";

const page = (props) => {
    return (
        <section className="mainContainer p-4 ">
            <p className="text-3xl pb-4 font-semibold text-center">
                {props.params.action == "addDelivery"
                    ? "اضافه طيار"
                    : props.params.action == "addEmployee"
                    ? "اضافه موظف"
                    : props.params.action == "editDelivery"
                    ? "تعديل بيانات طيار"
                    : "تعديل بيانات موظف"}
            </p>
            <FormAddDelivery action={props.params.action} />
        </section>
    );
};

export default page;
