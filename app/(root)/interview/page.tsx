import Agent from "@/components/Agent";
import {getCurrentUser} from "@/lib/actions/auth.action";

const Page = async () => {
    const user = await getCurrentUser();

    return (
        <>
            <h3 className="text-purple-300 text-shadow-purple-600">Interview Generation</h3>

            <Agent userName={user?.name} userId={user?.id} type="generate" />
        </>
    )
}
export default Page