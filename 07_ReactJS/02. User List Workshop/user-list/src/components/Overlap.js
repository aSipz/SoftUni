import LoadingSpinner from "./LoadingSpinner";
import NoContent from "./NoContent";
import NoUser from "./NoUser";
import OnError from "./OnError";

export default function Overlap(props) {
    return (
        <div className="loading-shade">

            {/* <!-- Loading spinner  --> */}

            {props.status === 'loading' ? <LoadingSpinner /> : null}

            {/* <!-- No users added yet  --> */}

            {props.status === 'no-user' ? <NoUser /> : null}
            

            {/* <!-- No content overlap component  --> */}

            {props.status === 'no-content' ? <NoContent /> : null}

            {/* <!-- On error overlap component  --> */}

            {props.status === 'error' ? <OnError /> : null}
            

        </div>
    );
}