import UIRating from "@/components/UIRating/UIRating";
import UITypography from "@/components/UITypography/UITypography";
import { Avatar, Box } from "@mui/material";
import Image from "next/image";
import React from "react";
import reviewImg from "../../assets/images/services/commercialStaging/commercial staging 1 after.jpg";
import avatarImg from "../../assets/images/reviews/Ann Holtz.png";
import ShortcutIcon from "@mui/icons-material/Shortcut";
import adminLogo from "../../assets/images/headerlogoblack.png";

const ReviewCustomCard = ({
  userImage,
  userName,
  userTitle,
  time,
  ratingVal,
  comment,
  reviewImgArr,
  reply,
}) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={2}
      sx={{
        backgroundColor: (theme) => theme.palette.primary.greyShade6,
        borderRadius: "12px",
      }}
      p={2}
    >
      <Box display="flex" justifyContent="space-between">
        <Box display="flex" alignItems="center" gap={2}>
          {userImage ? (
            <Image
              src={userImage}
              alt="avatarImg"
              style={{
                height: 50,
                width: 50,
                borderRadius: "50%",
              }}
            />
          ) : (
            <Avatar>{userTitle}</Avatar>
          )}
          <UITypography type="subheading" title={userName} />
        </Box>
        <UITypography title={time} />
      </Box>
      <UIRating value={ratingVal} readOnly />
      <UITypography
        title={`"${comment}"`}
        sx={{
          backgroundColor: "white",
          padding: "10px",
          minHeight: 50,
          borderRadius: "8px",
        }}
      />
      <Box display="flex" gap={3}>
        {reviewImgArr?.map((elm) => {
          return (
            <img
              src={elm}
              alt="Images"
              style={{
                objectFit: "cover",
                height: 60,
                width: 90,
              }}
            />
          );
        })}
      </Box>

      {reply != null && (
        <>
          <Box display="flex" gap={2}>
            <ShortcutIcon
              sx={{
                color: (theme) => theme.palette.primary.greyShade2,
                transform: "rotateX(180deg)",
                marginLeft: { xs: "5px", md: "20px" },
              }}
            />
            <Image
              src={adminLogo}
              alt="adminLogo"
              style={{
                height: 45,
                width: 45,
              }}
            />
            <Box
              sx={{
                border: "1px solid #adadad",
                width: "80%",
                height: 60,
                p: 2,
                borderRadius: "5px",
                backgroundColor: "#f3f3f3",
              }}
            >
              <UITypography title={reply} />
            </Box>
          </Box>
        </>
      )}
    </Box>
  );
};

export default ReviewCustomCard;
