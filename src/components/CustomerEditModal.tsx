
import React from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle 
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface Customer {
  id: number;
  name: string;
  email: string;
  phone: string;
  registrationDate: string;
}

interface CustomerEditModalProps {
  customer: Customer;
  isOpen: boolean;
  onClose: () => void;
}

const CustomerEditModal: React.FC<CustomerEditModalProps> = ({ 
  customer, 
  isOpen, 
  onClose 
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    onClose();
  };

  const handleDelete = () => {
    // Handle deletion logic here
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Edit Customer</DialogTitle>
          <DialogDescription>
            Make changes to customer information here.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                defaultValue={customer.name}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-right">
                Email
              </Label>
              <Input
                id="email"
                defaultValue={customer.email}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="phone" className="text-right">
                Phone
              </Label>
              <Input
                id="phone"
                defaultValue={customer.phone}
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter className="flex justify-between sm:justify-between">
            <Button type="button" variant="destructive" onClick={handleDelete}>
              Delete Customer
            </Button>
            <div className="flex gap-2">
              <Button type="button" variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button type="submit">Save Changes</Button>
            </div>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CustomerEditModal;
