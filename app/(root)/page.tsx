import InterviewCard from '@/components/InterviewCard'
import { Button } from '@/components/ui/button'
import { dummyInterviews } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
      <section className='card-cta'>
        <div className='flex flex-col gap-6 max-w-lg'>
          <h2>Practice your Interview readiness with our AI powered companion R.O.B.</h2>

          <p className='text-lg'>
            Practice on real Interview questions and receive instant feedback on your performance with R.O.B. (Short for Robot).
          </p>

          <Button asChild className='btn-primary max-sm:w-full'>
            <Link href='/interview'>Start an Interview</Link>
          </Button>
        </div>

        <Image src='/robot.png' alt='R.O.B' width={400} height={400} className='max-sm:hidden' />
      </section>

      <section className='flex flex-col gap-6 mt-8'>
        <h2>Past Interviews</h2>

        <div className='interviews-section'>
          {dummyInterviews.map((interview) => (
            <InterviewCard {...interview} key={interview.id} />
          ))}

          {/* <p>You haven&apos;t practiced any Interviews yet</p> */}
        </div>
      </section>

      <section className='flex flex-col gap-6 mt-8'>
        <h2>Start Practicing</h2>

        <div className='interviews-section'>
          {dummyInterviews.map((interview) => (
            <InterviewCard {...interview} key={interview.id} />
          ))}
        </div>
        
      </section>
    </>
  )
}

export default page