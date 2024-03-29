import UITypography from "@/components/UITypography/UITypography";
import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import bathroomCollection from "../../assets/images/bathroomCollection.jpg";
import bedroomCollection from "../../assets/images/bedroomCollection.jpg";
import bonusRoomCollection from "../../assets/images/bonusRoomCollection.jpg";
import childrenBedroomsCollection from "../../assets/images/childrenBedroomsCollection.jpg";
import childrensBathCollection from "../../assets/images/childrensBathCollection.jpg";
import childrensClosetCollection from "../../assets/images/childrensClosetCollection.jpg";
import closetCollection from "../../assets/images/closetCollection.jpg";
import diningRoomsCollection from "../../assets/images/diningRoomsCollection.jpg";
import kitchenCollection from "../../assets/images/kitchenCollection.jpg";
import livingRoomCollection from "../../assets/images/livingRoomCollection.jpg";
import officeCollection from "../../assets/images/officeCollection.jpg";
import outdoorCollection from "../../assets/images/outdoorCollection.jpg";
import UIButton from "@/components/UIButton/UIButton";
import LatestCollectionSlider from "./LatestCollectionSlider";
import { apiGet } from "@/auth/ApiRequest";
import { ApiEndpoints } from "@/auth/apiEndpoints";
import { pathLocations } from "@/utlils/pathLocations";
import { useRouter } from "next/navigation";

const LatestCollection = () => {
  const arr = [
    {
      heading: "Living Room Collection",
      img: livingRoomCollection,
    },
    {
      heading: "Dining Rooms Collection",
      img: diningRoomsCollection,
    },
    {
      heading: "Bedroom Collection",
      img: bedroomCollection,
    },
    {
      heading: "Office Collection",
      img: officeCollection,
    },
    {
      heading: "Outdoor Collection",
      img: outdoorCollection,
    },
    {
      heading: "Kitchen Collection",
      img: kitchenCollection,
    },
    {
      heading: "Bonus Room Collection",
      img: bonusRoomCollection,
    },
    {
      heading: "Bathroom Collection",
      img: bathroomCollection,
    },
    {
      heading: "Closet Collection",
      img: closetCollection,
    },
    {
      heading: "Children Bedrooms Collection",
      img: childrenBedroomsCollection,
    },
    {
      heading: "Childrens Bath Collection",
      img: childrensBathCollection,
    },
    {
      heading: "Childrens Closet Collection",
      img: childrensClosetCollection,
    },
  ];

  const router = useRouter();

  const [curatedCollection, setCuratedCollection] = useState([]);

  const getCuratedCollection = () => {
    apiGet(
      `${ApiEndpoints.curatedCollectionPage}`,
      (res) => {
        setCuratedCollection(res);
      },
      (err) => {
        console.log("err", err);
      }
    );
  };

  useEffect(() => {
    getCuratedCollection();
  }, []);

  return (
    <Grid container my={10} gap={6} justifyContent="center">
      <Grid item xs={11}>
        <UITypography type="mainHeading" title="Discover Our Latest" />
        <UITypography type="mainHeading" title="Collections" />
      </Grid>
      <Grid item xs={11}>
        <LatestCollectionSlider arr={curatedCollection} />
      </Grid>
      <Grid item xs={8} sm={4} md={3} display="flex" justifyContent="center">
        <UIButton
          isDark={false}
          label="View all Collections"
          onClick={() => router.push(pathLocations.curatedCollection)}
        />
      </Grid>
    </Grid>
  );
};

export default LatestCollection;
