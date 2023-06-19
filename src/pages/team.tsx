import {ReactElement, useCallback, useEffect, useState} from "react";
import SiteLayout from "@tech/layouts/site-layout";
import TermsOfService from "@tech/pages/termsOfService";
import {BASEURL} from "@tech/globalConnect/apiContent";
import axios from "axios";

function Team(){
    const [employee, setEmployee] = useState([]);
    const fetchEmployee = useCallback(() => {
        axios
            .get(
                `${BASEURL}/items/employee`
            )
            .then((response) => {
                setEmployee(response.data?.data);
            })
            .catch((error) => {
            });
    }, [BASEURL])

    useEffect(() => {
        fetchEmployee()
    }, [fetchEmployee]);
    return(
        <div className="container p-8 md:px-16 space-y-4">
            <p className="text-custom-blue dark:text-blue-600 text-center text-5xl font-semibold">Team Yarsa Tech</p>
            <p className="max-w-2xl mx-auto md:text-xl">
                Yarsa Tech thrives with the contribution of our team. We are grateful towards everyone for their continued support to achieve our vision.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:p-10 p-5">
                {employee.map((emp)=>{
                    return(
                        <EmployeeCard employee={emp}/>
                    )
                })}
            </div>
        </div>
    )
}
Team.getLayout = function getLayout(page: ReactElement) {
    return <SiteLayout>{page}</SiteLayout>;
};

const EmployeeCard = ({employee}:any) =>{
    return(
        <div>
            <div className="">
               <Image
               height={100}
               width={100}
               src={`${BASEURL}/assets/${employee.image}`}
               className=" w-full h-full object-contain px-2 "
               alt="yarsa tech employee"
               />
            </div>
            <div>{employee.name}</div>
            <div>{employee.position}</div>
        </div>
)
}
export default Team;
