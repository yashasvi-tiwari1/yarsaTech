import {ReactElement} from "react";
import SiteLayout from "@tech/layouts/site-layout";
import TermsOfService from "@tech/pages/termsOfService";

function Team(){
    return(
        <div>
            <div>

            </div>
        </div>
    )
}
Team.getLayout = function getLayout(page: ReactElement) {
    return <SiteLayout>{page}</SiteLayout>;
};
export default Team;
