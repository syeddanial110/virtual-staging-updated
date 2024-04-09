import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";

const QuestionAnswer = ({ question, answer, index }) => {
  return (
    <>
      <Accordion
        sx={{
          marginTop: "14px",
          padding: "0px",
          borderRadius: "20px !important",

          "&::before": {
            backgroundColor: "transparent",
          },
          "&  > .Mui-expanded": {
            backgroundColor: (theme) => theme.palette.primary.main,
            //   height: "100%",
            //   width: "100%",
            borderRadius: "20px",
          },
          "&  > .MuiButtonBase-root": {
            borderRadius: "20px",
            padding: "10px 20px",
          },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{
            "& .Mui-expanded": {
              color: "white",
              margin: "10px 0px !important",
            },
            fontWeight: 600,
            fontSize: 20,
          }}
          className="faqQuestion"
        >
          {question}
        </AccordionSummary>
        <AccordionDetails
          sx={{
            padding: "22px 30px",
            fontSize: 16,
            lineHeight: 1.5,
          }}
          className="faqAnswer"
        >
          {answer}
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default QuestionAnswer;
