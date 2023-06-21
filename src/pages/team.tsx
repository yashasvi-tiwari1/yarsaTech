import {ReactElement, useCallback, useEffect, useState} from "react";
import SiteLayout from "@tech/layouts/site-layout";
import TermsOfService from "@tech/pages/termsOfService";
import {BASEURL} from "@tech/globalConnect/apiContent";
import axios from "axios";
import Image from "next/image"
function Team(){
    const [employee, setEmployee] = useState([]);
    const fetchEmployee = useCallback(() => {
        axios
            .get(
                `${BASEURL}/items/Employee`
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
            <p className="max-w-2xl mx-auto text-center md:text-xl">
                Yarsa Tech thrives with the contribution of our team. We are grateful towards everyone for their continued support to achieve our vision.
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:p-10 p-5">
                {employee.map((emp:any)=>{
                    return(
                        <div key={emp.name}>
                    <EmployeeCard employee={emp}/>
                        </div>
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
        <div className="text-center   flex flex-col items-center">
            <div className="py-5 items-center">
               <Image
               height={200}
               width={200}
               src={`${BASEURL}/assets/${employee.photo}`}
               className=" w-40 h-40 overflow-hidden  rounded-full object-cover  border-2 4border-spacing-3 border-custom-blue "
               alt="yarsa tech employee"
               />
            </div>
            <div className="font-bold">{employee.name}</div>
            <div className="text-custom-blue dark:text-blue-600 font-semibold">{employee.position}</div>
        </div>
)
}
export default Team;
