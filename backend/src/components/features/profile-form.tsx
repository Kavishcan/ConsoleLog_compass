import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function DecisionForm() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-20 mt-8">
      <div>
        <Label htmlFor="name" className="block mb-2">Your Name</Label>
        <Input id="name" placeholder="Charlene Reed" />
      </div>
      <div>
        <Label htmlFor="passport" className="block mb-2">Passport Number</Label>
        <Input id="passport" placeholder="*********" />
      </div>
      <div>
        <Label htmlFor="email" className="block mb-2">Email</Label>
        <Input id="email" placeholder="charlenereed@gmail.com" />
      </div>
      <div>
        <Label htmlFor="visa" className="block mb-2">Visa Number</Label>
        <Input id="visa" placeholder="*********" />
      </div>
      <div>
        <Label htmlFor="dob" className="block mb-2">Date of Birth</Label>
        <Input id="dob" placeholder="25 January 1990" />
      </div>
      <div>
        <Label htmlFor="country" className="block mb-2">Visiting Country</Label>
        <Input id="country" placeholder="San Jose, California, USA" />
      </div>
      <div>
        <Label htmlFor="address" className="block mb-2">Permanent Address</Label>
        <Input id="address" placeholder="San Jose, California, USA" />
      </div>
      <div>
        <Label htmlFor="postal" className="block mb-2">Postal Code</Label>
        <Input id="postal" placeholder="45962" />
      </div>
    </div>
  );
}
