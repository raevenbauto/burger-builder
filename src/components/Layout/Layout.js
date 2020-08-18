import React, {Fragment} from "react";
const layout = (props) => {
    return (
        <Fragment>
            <div>
                Toolbar, Sidebar, Backdrop
            </div>

            <div>
                {props.children}
            </div>
        </Fragment>
    )
};

export default layout;
