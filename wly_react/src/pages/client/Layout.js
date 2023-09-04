import React from "react";
import _ from "lodash";

export default function Layout(props) {
    return (<>
        {_.get(props, "children", <></>)}
    </>);
}