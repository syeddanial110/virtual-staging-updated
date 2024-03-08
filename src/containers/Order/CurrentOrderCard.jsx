import { Box } from "@mui/material";
import React from "react";
import orderImg from "../../assets/images/bedroom1.jpg";
import UITypography from "@/components/UITypography/UITypography";
import Image from "next/image";
import { pathLocations } from "@/utlils/pathLocations";
import { useRouter } from "next/navigation";

const CurrentOrderCard = () => {
  const router = useRouter();
  return (
    <Box
      sx={{
        display: "flex",
        gap: 3,
        backgroundColor: "white",
        borderRadius: "16px",
        padding: "14px",
      }}
    >
      <Box>
        <Image
          src={orderImg}
          alt="order-img"
          height={150}
          width={150}
          style={{ objectFit: "cover" }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <UITypography title="Virtual Staging" />
          <UITypography title="Contemporary" />
          <UITypography title="$23" />
        </Box>
        <UITypography
          title="View Detail"
          sx={{ textDecoration: "underline", "&:hover": { cursor: "pointer" } }}
          onClick={() => router.push(`${pathLocations.order}/1`)}
        />
      </Box>
    </Box>
  );
};

export default CurrentOrderCard;
