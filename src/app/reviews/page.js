"use client";
import UITypography from "@/components/UITypography/UITypography";
import { BannerWrapper } from "@/containers/AboutUs/ui";
import DefaultLayout from "@/layout/default-layout";
import { Box, CircularProgress, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import reviewsBanner from "../../assets/images/reviewsBanner.jpg";
import ReviewsSlider from "@/containers/Reviews/ReviewsSlider";
import UIButton from "@/components/UIButton/UIButton";
import UIModal from "@/components/UIModal/UIModal";
import UISimpleTextField from "@/components/UITextField/UISimpleTextField";
import UIRating from "@/components/UIRating/UIRating";
import UIFileButton from "@/components/UIButton/UIFileButton";
import { apiGet, apiPost, fileUpload } from "@/auth/ApiRequest";
import { ApiEndpoints } from "@/auth/apiEndpoints";
import { toast } from "react-toastify";
import ReviewCustomCard from "@/containers/Reviews/ReviewCustomCard";
import Image from "next/image";
import { staticReviews } from "@/utlils/data";
import { getUserId } from "@/auth/Auth";
import LockAnim from "@/components/UILoader/LockAnim";
import { pathLocations } from "@/utlils/pathLocations";
import { useRouter } from "next/navigation";
import UILoader from "@/components/UILoader/UILoader";

const Reviews = () => {
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [ratingVal, setRatingVal] = useState("");
  const [isImageUploading, setIsImageUploading] = useState(false);
  const [fileDataURL, setFileDataURL] = useState([]);

  const [comment, setComment] = useState();

  const [reviews, setReviews] = useState();

  const handleModalOpen = () => {
    setOpen(true);
  };

  const handleRating = (e, value) => {
    setRatingVal(value);
  };

  const _handleChangeImage = (e) => {
    setIsImageUploading(true);
    if (e.target.files[0]) {
      fileUpload(`${ApiEndpoints.reviewUploadImage}`, e.target.files[0])
        .then((res) => {
          setIsImageUploading(false);
          setFileDataURL([...fileDataURL, res.url]);
          toast.success(res.message);
        })
        .catch((err) => {});
    }
  };

  const handleInputChange = (e) => {
    setComment(e.target.value);
  };

  const getAllReviews = () => {
    apiGet(
      `${ApiEndpoints.reviews}`,
      (res) => {
        setReviews(res);
      },
      (err) => {
        console.log("err", err);
      }
    );
  };

  const userId = getUserId();

  const handleAddReview = () => {
    const dataObj = {
      user_id: userId,
      comment: comment,
      images: fileDataURL,
      rating: ratingVal,
    };
    apiPost(
      `${ApiEndpoints.addReview}`,
      dataObj,
      (res) => {
        toast.success(res.message);
        setOpen(false);
        setComment("");
        setRatingVal();
        setFileDataURL([]);
        getAllReviews();
      },
      (err) => {
        console.log("err", err);
      }
    );
  };

  useEffect(() => {
    getAllReviews();
  }, []);

  

  return (
    <DefaultLayout>
      <Grid container justifyContent="center" spacing={3}>
        <Grid item xs={12}>
          <BannerWrapper bgImg={reviewsBanner} isGradient borderRadius="0px">
            <UITypography
              type="heading"
              title="Reviews"
              sx={{
                color: "white",
                fontSize: "80px",
                mb: "13px",
                ml: { xs: "30px", md: "60px" },
              }}
            />
          </BannerWrapper>
        </Grid>

        {/* <Grid item xs={11}>
          <ReviewsSlider />
        </Grid> */}
        <Grid item xs={10} display="flex" justifyContent="flex-end">
          <UIButton
            variant="contained"
            label="Add Review"
            sx={{ borderRadius: "12px" }}
            onClick={handleModalOpen}
          />
        </Grid>
      </Grid>

      <Grid container justifyContent="center" mt={3} gap={2}>
        {staticReviews?.map((item) => {
          return (
            <Grid item xs={10}>
              <ReviewCustomCard
                userName={item.name}
                userImage={item.image}
                comment={item.comments}
                ratingVal={parseInt(item.rating)}
                reply={null}
                reviewImgArr={[]}
                time={item.created_at}
              />
            </Grid>
          );
        })}
        {reviews?.map((item) => {
          return (
            <Grid item xs={10}>
              <ReviewCustomCard
                userName={item.user.name}
                userTitle={item.user.name[0]}
                comment={item.comments}
                ratingVal={parseInt(item.rating)}
                reply={item?.reply?.reply}
                reviewImgArr={item.images}
                time={item.created_at_formatted}
              />
            </Grid>
          );
        })}
      </Grid>

      <UIModal open={open} setOpen={setOpen} isBlur={false}>
        {userId ? (
          <Grid container p={3} gap={3}>
            <Grid item xs={12}>
              <UITypography type="heading" title="Add Review" />
            </Grid>
            <Grid item xs={12}>
              <UITypography type="" title="Enter your review" />
              <UISimpleTextField
                placeholder="Enter your review"
                multiline
                rows={4}
                fullWidth
                name="comment"
                onChange={(e) => handleInputChange(e)}
              />
            </Grid>
            <Grid item xs={12}>
              <UITypography title="How much do you rate?" />
              <UIRating onChange={handleRating} value={ratingVal} />
            </Grid>
            <Grid item xs={12}>
              <UITypography title="Do you want to upload image?" />
              <UIFileButton
                isWithoutBg
                isFileUpload={false}
                data={{ image: "" }}
                _handleChangeImage={_handleChangeImage}
              />
            </Grid>

            <Grid item xs={12} display="flex" gap={2}>
              {fileDataURL.map((item) => {
                return (
                  <img
                    src={item}
                    alt="image"
                    style={{
                      objectFit: "cover",
                      borderRadius: "8px",
                      width: 110,
                      height: 80,
                    }}
                  />
                );
              })}
              {isImageUploading && <CircularProgress />}
            </Grid>
            <Grid item xs={3.5} md={2}>
              <UIButton
                variant="contained"
                label="Save"
                fullWidth
                sx={{ borderRadius: "12px" }}
                onClick={handleAddReview}
              />
            </Grid>
            <Grid item xs={3.5} md={2}>
              <UIButton
                variant="contained"
                label="Cancel"
                onClick={() => setOpen(false)}
                fullWidth
                sx={{ borderRadius: "12px" }}
              />
            </Grid>
          </Grid>
        ) : (
          <Grid container alignItems="center" justifyContent="center" py={3}>
            <Grid item xs={12}>
              <UITypography
                type="heading"
                title="Sign Up or Login to Add a Review"
                textAlign="center"
              />
            </Grid>
            <Grid item xs={4}>
              <LockAnim />
            </Grid>
            <Grid item xs={12} display="flex" justifyContent="center">
              <UIButton
                variant="contained"
                label="Go to Login"
                onClick={() => router.push(pathLocations.login)}
              />
            </Grid>
          </Grid>
        )}
      </UIModal>
    </DefaultLayout>
  );
};

export default Reviews;
