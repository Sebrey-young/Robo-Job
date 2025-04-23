import InterviewForm from '@/components/interviewForm';
import { getCurrentUser } from '@/lib/actions/auth.action';

const Page = async () => {
    const user = await getCurrentUser();

    return (
        <>
            <InterviewForm userName={user?.name} userId={user?.id} type="generate" />
        </>
    )
}

export default Page;

