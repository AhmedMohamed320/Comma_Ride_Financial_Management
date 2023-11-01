"use client";
import React from "react";
import Main from "@/components/Expenses/Main";
import Nav from "@/components/Expenses/Nav";

const page = () => {
    return (
        <section className={`mainContainer py-4 `}>
            <Nav />
            <Main />
        </section>
    );
};

export default page;
