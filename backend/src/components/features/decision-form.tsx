import { Button } from '@/components/ui/button'; 
import Link from 'next/link';

// Mock JSON data
const mockThreats = [
  { id: 1, reason: 'High-risk individual' },
  { id: 2, reason: 'Known associate of criminal activities' },
  { id: 3, reason: 'Suspicious financial transactions' },
];

export default function DecisionForm() {
  const handleClick = () => {
    console.log('Visa application declined');
  };

  return (
    <div className="flex flex-col mx-20 mt-8">
      <div className="p-4 mb-4 text-white bg-red-500">
        This user is a threat to the country.
      </div>

      <div className="p-4 mb-4 text-white bg-green-500">
        This applicant is clear and can be permitted to the country.
      </div>

      <div className="p-4 mb-4">
        <h2 className="text-lg font-semibold mb-2">Threat List:</h2>
        {mockThreats.length > 0 ? (
          <ul className="list-disc pl-5">
            {mockThreats.map((threat) => (
              <li key={threat.id} className="mb-2 text-red-600">
                {threat.reason}
              </li>
            ))}
          </ul>
        ) : (
          <p>No threats available.</p>
        )}
      </div>
      
      <div className="flex justify-start space-x-4 mb-4">
        <Link href="/">
            <Button onClick={handleClick}>Decline Visa Application</Button>
        </Link>
      </div>
    </div>
  );
}
