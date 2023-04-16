import './Seminar TT.css'
import React from "react";
import Button from "@material-ui/core/Button";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import Typography from "@material-ui/core/Typography";
import { useTheme } from "@material-ui/core/styles";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
 
const MyCollection = [
  {
    label: "First Picture",
    imgPath:
"https://img.freepik.com/premium-psd/digital-marketing-corporate-business-agency-instagram-banner-social-media-post-template_182992-166.jpg?size=626&ext=jpg&ga=GA1.2.1188845802.1679626574&semt=ais",
  },
  {
    label: "Second Picture",
    imgPath:
"https://img.freepik.com/free-vector/webinar-flyers-template_52683-51742.jpg?size=626&ext=jpg&ga=GA1.2.1188845802.1679626574&semt=ais",
  },
  {
    label: "Third Picture",
    imgPath:
"https://img.freepik.com/premium-psd/digital-marketing-corporate-business-agency-instagram-banner-social-media-post-template_182992-161.jpg?size=626&ext=jpg&ga=GA1.1.1188845802.1679626574&semt=ais",
  },
  {
   label: "Fourth Picture",
   imgPath:"https://img.freepik.com/premium-psd/digital-marketing-corporate-live-webinar-instagram-banner-social-media-post-template_182992-141.jpg?size=626&ext=jpg&ga=GA1.1.1188845802.1679626574&semt=ais",
 },
 {
  label: "Fifth Picture",
  imgPath:"https://img.freepik.com/free-vector/webinar-flyers-template_23-2148790401.jpg?size=626&ext=jpg&ga=GA1.1.1188845802.1679626574&semt=ais",
},
{
  label: "Sixth Picture",
  imgPath:"https://img.freepik.com/free-vector/modern-technology-conference-template_1361-1206.jpg?size=626&ext=jpg&ga=GA1.1.1188845802.1679626574&semt=ais",
},
];
 
const Stt= () => {
  const CollectionSize = MyCollection.length;
  const theme = useTheme();
  var [index, setActiveStep] = React.useState(0);
 
  const goToNextPicture = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const goToPreviousPicture = () => {
   setActiveStep((prevActiveStep) => prevActiveStep - 1);
 };
 
  return (
    <div>
      <h2 id="ts">Today's Seminar</h2>
      <div id="ssb">
        <Paper id="header">
          <Typography id="shl">{MyCollection[index].label}</Typography>
        </Paper>
        <img id="slsi"
          src={MyCollection[index].imgPath}
          alt={MyCollection[index].label}
        />
        <MobileStepper
          variant="dots"
          activeStep={index}
          id='footer'
          steps={CollectionSize}
          nextButton={
            <><Button id='prevbtn'
                onClick={goToPreviousPicture}
                disabled={index === 0}
                >
                {theme.direction !== "ltr" ? (
                      <KeyboardArrowRight />
                   ) : (
                      <KeyboardArrowLeft />
                   )}
             </Button>
             <Button id='nextbtn'
                onClick={goToNextPicture}
                disabled={index === CollectionSize - 1}
             >
                   {theme.direction !== "rtl" ? (
                      <KeyboardArrowRight />
                   ) : (
                      <KeyboardArrowLeft />
                   )}
                </Button></>
          }
        />
      </div>
    </div>
  );
};
 
export default Stt;