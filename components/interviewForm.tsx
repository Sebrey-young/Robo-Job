"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

// Accepting optional props for user information
interface InterviewFormProps {
  userName?: string;
  userId?: string;
  type?: string;
}

const InterviewForm = ({ userName, userId, type: formType }: InterviewFormProps) => {
  const router = useRouter();
  const [interviewType, setInterviewType] = useState('');
  const [role, setRole] = useState('');
  const [level, setLevel] = useState('');
  const [techstackInputs, setTechstackInputs] = useState<string[]>([""]);
  const [amount, setAmount] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const questionsCount = Math.max(0, parseInt(amount.trim(), 10) || 0);

    const techstackStr = techstackInputs.filter(Boolean).join(', ');

    const payload = {
      type: interviewType,
      role,
      level,
      techstack: techstackStr,
      amount: questionsCount,
      userid: userId || ""
    };

    try {
      const res = await fetch('/api/vapi/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        router.push('/');
      } else {
        console.error('Error creating interview');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex gap-8 items-center py-14 px-10 lg:min-w-[600px]">
      <div className="card-border lg:min-w-[600px]">
        <div className="flex flex-col gap-6 card py-14 px-10">
          <h3 className="text-purple-300 text-shadow-purple-600">Prepare Your Questions for Assesment.</h3>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="type" className="block font-medium text-lg text-white">
                Type of Interview (Behavioral, Technical, or Mixed)
              </label>
              <input
                id="type"
                type="text"
                placeholder="Enter interview type"
                value={interviewType}
                onChange={(e) => setInterviewType(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div>
              <label htmlFor="role" className="block font-medium text-lg text-white">
                What role would you like to practice for?
              </label>
              <input
                id="role"
                type="text"
                placeholder="Enter role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div>
              <label htmlFor="level" className="block font-medium text-lg text-white">
                What Level of Experience do you want to practice for?
              </label>
              <input
                id="level"
                type="text"
                placeholder="Enter level"
                value={level}
                onChange={(e) => setLevel(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <label htmlFor="level" className="block font-medium text-lg text-white">
              What Techstack do you want to practice for?
            </label>
            <div className="flex flex-wrap items-center gap-2">
              {techstackInputs.map((value, idx) => (
                <input
                  key={idx}
                  type="text"
                  placeholder="Techstack"
                  value={value}
                  onChange={e => {
                    const newInputs = [...techstackInputs];
                    newInputs[idx] = e.target.value;
                    setTechstackInputs(newInputs);
                  }}
                  className="mt-1 block border border-gray-300 rounded-md p-2 w-32"
                />
              ))}
              <Button type="button" size="sm" onClick={() => setTechstackInputs([...techstackInputs, ''])}>
                Add
              </Button>
            </div>
            <div>
              <label htmlFor="amount" className="block font-medium text-lg text-white">
                How many questions would you like?
              </label>
              <input
                id="amount"
                type="number"
                min="1"
                step="1"
                placeholder="Enter number of questions"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div className="mt-4">
              <Button type="submit">Generate Interview</Button>
            </div>
          </form>
        </div>
      </div>
      <div className="image-border">
        <div className="flex flex-col items-center justify-center p-4">
          <Image src="/form-bot.png" alt="suit-bot" height={400} width={400} />
        </div>
      </div>
    </div>
  );
};

export default InterviewForm;
