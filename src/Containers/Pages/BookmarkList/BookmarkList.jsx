
import React, { useState } from "react";
import Card from "@material-tailwind/react/Card";
import CardImage from "@material-tailwind/react/CardImage";
import CardBody from "@material-tailwind/react/CardBody";
import CardFooter from "@material-tailwind/react/CardFooter";
import H6 from "@material-tailwind/react/Heading6";
import Paragraph from "@material-tailwind/react/Paragraph";
import Button from "@material-tailwind/react/Button";

import {useSelector} from "react-redux";
// import Articles from '../../../Components/Articles';
import MainSection from '../../../Components/MainSection';
const BookmarkList = () => {
    const [list,setList] = useState(localStorage.getItem('bookmark'));
    return (
        <Card>
            <CardImage
            className="w-full h-96 bg-contain bg-center z-0"
                src="https://www.pngitem.com/pimgs/m/207-2073545_download-transparent-work-in-progress-clipart-work-parallel.png"
                alt="Card Image"
            />

            <CardBody>
                <H6 color="gray">{list}</H6>
                <Paragraph color="gray">
                    ON progress ....
                </Paragraph>
            </CardBody>

            <CardFooter>
                <Button color="lightBlue" size="lg" ripple="light">
                    Read More
                </Button>
            </CardFooter>
        </Card>
    );
}


export default BookmarkList
