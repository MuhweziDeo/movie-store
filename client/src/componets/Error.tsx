import React from "react";

interface Props {
    message: string;
}
/**
 * @description handles displaying generic error
 * @param props {message: string}
 * @returns JSX
 */
export const Error: React.FunctionComponent<Props> = (props) => {
    return (<div data-testid="error-wrapper" className="alert alert-danger d-flex align-items-center" role="alert">
        <svg className="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:">
            <use xlinkHref="#exclamation-triangle-fill" /></svg>
        <div>
            {props.message}
        </div>
    </div>)
}