import Header from "@/components/Header/Header";
import ThemeWrapper from "@/components/ThemeWrapper/ThemeWrapper";
import Footer from "@/containers/Footer/Footer";
import Providers from "@/store/Provider";
import { Grid } from "@mui/material";
import dynamic from "next/dynamic";

const DefaultLayout = ({ children }) => {
  //   const [isLoading, setIsLoading] = useState(true);
  //   const [scrollY, setScrollY] = useState(0);

  //   const handleScroll = () => {
  //     setScrollY(window.scrollY);
  //   };
  //   let token = "dsd";
  //   const router = useRouter();
  //   // useEffect(() => {
  //   //   if (token !== "") {
  //   //     // router.push('/login')
  //   //   }
  //   // }, []);
  //   const inlineStyles = {
  //     width: "100%",
  //     transition: "all .5s linear",
  //     position: "fixed",
  //     top: "0px",
  //     left: "0px",
  //     zIndex: "1000",
  //     fontFamily: "Arial, sans-serif",
  //   };

  //   useEffect(() => {
  //     setInterval(() => {
  //       setIsLoading(false);
  //     }, [2000]);

  //     // Attach the event listener when the component mounts
  //     window.addEventListener("scroll", handleScroll);

  //     // Clean up the event listener when the component unmounts
  //     return () => {
  //       window.removeEventListener("scroll", handleScroll);
  //     };
  //   }, []);

  // const [isLoading, setIsLoading] = useState(true);
  // let x = document.readyState;
  // useEffect(() => {
  //   console.log("document.readyState", document.readyState);
  //   if (
  //     document.readyState == "interactive" ||
  //     document.readyState == "complete"
  //   ) {
  //     setIsLoading(false);
  //   }
  // }, [document.readyState]);

  return (
    <>
      {/* {isLoading && <UILoader />} */}
      <Header />
      <div>{children}</div>
      <Grid container>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </>
  );
};

export default dynamic(() => Promise.resolve(DefaultLayout), { ssr: false });
