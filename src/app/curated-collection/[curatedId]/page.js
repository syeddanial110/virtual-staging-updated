"use client";
import { apiGet } from "@/auth/ApiRequest";
import { ApiEndpoints } from "@/auth/apiEndpoints";
import DefaultLayout from "@/layout/default-layout";
import { usePathname } from "next/navigation";
import React from "react";

const CuratedCollectionProducts = () => {
  const id = usePathname();
  console.log("id", id);

    const getCuratedCollectionProducts = () => {
        // apiGet(`${ApiEndpoints.}`)
    }

  return <DefaultLayout></DefaultLayout>;
};

export default CuratedCollectionProducts;
