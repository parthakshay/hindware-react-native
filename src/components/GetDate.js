import React from "react";

const GetDate = () => {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();

    return date + '-' + month + '-' + year;
}
export default GetDate;