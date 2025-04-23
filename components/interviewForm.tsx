"use client";
import React, { useState } from 'react';
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
  const [techstack, setTechstack] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const questionsCount = Math.max(0, parseInt(amount.trim(), 10) || 0);

    const payload = {
      type: interviewType,
      role,
      level,
      techstack,
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
    <div className="card-interviewForm p-4">
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="type" className="block text-sm font-medium text-gray-700">
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
          <label htmlFor="role" className="block text-sm font-medium text-gray-700">
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
          <label htmlFor="level" className="block text-sm font-medium text-gray-700">
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
        <div>
          <label htmlFor="techstack" className="block text-sm font-medium text-gray-700">
            What Techstack would you like to use?
          </label>
          <input
            id="techstack"
            type="text"
            placeholder="Enter techstack"
            value={techstack}
            onChange={(e) => setTechstack(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <div>
          <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
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
  );
};

export default InterviewForm;
