import { Box, Stack } from "@mui/material";
import React, { useState } from "react";
import { TestimonialWrapper } from "./ui";
import UITypography from "../UITypography/UITypography";
import UIRating from "../UIRating/UIRating";

const TestimonialCard = ({ heading, authorName, description, ratingVal }) => {
  // const [rating, setRating] = useState(3);
  return (
    <TestimonialWrapper>
      <Stack>
        <UITypography
          type="mainDescription"
          title={heading}
          sx={{
            fontWeight: 700,
            color: (theme) => theme.palette.primary.greyShade3,
          }}
        />
        <UITypography
          variant="h5"
          title={authorName}
          sx={{
            fontSize: "18px",
            color: (theme) => theme.palette.primary.white,
          }}
        />
        <UITypography
          mt={3}
          title={description}
          sx={{
            fontSize: "18px",
            color: (theme) => theme.palette.primary.greyShade3,
          }}
        />
      </Stack>
      <Box mt={4}>
        <UIRating value={ratingVal} />
      </Box>
    </TestimonialWrapper>
  );
};

export default TestimonialCard;
