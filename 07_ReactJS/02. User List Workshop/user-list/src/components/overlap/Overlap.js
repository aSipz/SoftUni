import LoadingSpinner from "./LoadingSpinner";
import NoContent from "./NoContent";
import NoUser from "./NoUser";
import OnError from "./OnError";

import { currentStatus } from "../constants/Constants"; 


export default function Overlap({status}) {
    return (
        <div className="loading-shade">

            {/* <!-- Loading spinner  --> */}

            {status === currentStatus.loading ? <LoadingSpinner /> : null}

            {/* <!-- No users added yet  --> */}

            {status === currentStatus["no-user"] ? <NoUser /> : null}
            

            {/* <!-- No content overlap component  --> */}

            {status === currentStatus["no-content"] ? <NoContent /> : null}

            {/* <!-- On error overlap component  --> */}

            {status === currentStatus.error ? <OnError /> : null}
            

        </div>
    );
}