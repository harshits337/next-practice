import BarChart from "@/app/components/reports/date-wise-comparision/DateWise";
import TotalData from "@/app/components/reports/total-data/TotalData";

export default async function Page() {
    return (
        <div>
            <h1>Hi Harshit</h1>
        <h3>You can check your reports over here</h3>
            <TotalData/>
            <BarChart/>
        </div>
    );
}