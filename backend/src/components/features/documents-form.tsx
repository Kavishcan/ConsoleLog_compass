import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button"; 
import { Switch } from "@/components/ui/switch"; 

export default function DocumentsForm() {
  return (
    <div className="mx-20 mt-8">
      <div className="flex justify-center gap-8 mb-8"> 
        <Button>View Passport bio page</Button>
        <Button>View Passport size photo</Button>
        <Button>View travel history</Button>
        <Button>View travel history</Button>
      </div>
      <div className="grid grid-cols-1 gap-6 pt-4"> 
        <div>
          <Switch id="toggle1" />
          <Label className="ml-4" htmlFor="toggle1">Send an email to user with the decision</Label>
        </div>
        <div>
          <Switch id="toggle2" />
          <Label className="ml-4" htmlFor="toggle2">All the documents are well reviewed</Label>
        </div>
        <div>
          <Switch id="toggle3" />
          <Label className="ml-4" htmlFor="toggle3">All the details provided are true and I'm responsible for all of it</Label>
        </div>
      </div>
    </div>
  );
}
