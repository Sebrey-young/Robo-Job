import { db } from "@/firebase/admin";


export async function getInterviewsByUserId(userId: string): Promise<Interviews[] | null> {
    const interviews = await db
        .collection('interviews')
        .where('userId', '==', userId)
        .orderBy('createdAt', 'desc')
        .get();

    return interviews.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
    })) as Interviews[];
}

export async function getLatestInterviews(params: GetLatestInterviewsParams): Promise<Interviews[] | null> {
    const { userId, limit = 20 } = params;
    
    const interviews = await db
        .collection('interviews')
        .orderBy('createdAt', 'desc')
        .where('finalized', '==', true)
        .where('userId', '!=', userId)
        .limit(limit)
        .get();

    return interviews.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
    })) as Interviews[];

}

export async function getInterviewsById(id: string): Promise<Interviews | null> {
    const interview = await db
        .collection('interviews')
        .doc(id)
        .get();
    return interview.data() as Interviews | null;
}