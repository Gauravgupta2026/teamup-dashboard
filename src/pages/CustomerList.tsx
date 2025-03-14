
import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import { Button } from '@/components/ui/button';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import CustomerEditModal from '@/components/CustomerEditModal';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface Customer {
  id: number;
  name: string;
  email: string;
  phone: string;
  registrationDate: string;
}

const CustomerList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [editCustomer, setEditCustomer] = useState<Customer | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Sample data
  const customers: Customer[] = [
    { id: 1, name: 'Aarav Bhandari', email: 'aarav@example.com', phone: '+91 9876543210', registrationDate: '15 Jan 2023' },
    { id: 2, name: 'Sarvagya Singh', email: 'sarvagya@example.com', phone: '+91 9876543211', registrationDate: '20 Jan 2023' },
    { id: 3, name: 'Arjun Patel', email: 'arjun@example.com', phone: '+91 9876543212', registrationDate: '25 Jan 2023' },
    { id: 4, name: 'Kiran Sharma', email: 'kiran@example.com', phone: '+91 9876543213', registrationDate: '30 Jan 2023' },
    { id: 5, name: 'Neha Verma', email: 'neha@example.com', phone: '+91 9876543214', registrationDate: '5 Feb 2023' },
    { id: 6, name: 'Vikram Mehta', email: 'vikram@example.com', phone: '+91 9876543215', registrationDate: '10 Feb 2023' },
    { id: 7, name: 'Priya Gupta', email: 'priya@example.com', phone: '+91 9876543216', registrationDate: '15 Feb 2023' },
    { id: 8, name: 'Rahul Khanna', email: 'rahul@example.com', phone: '+91 9876543217', registrationDate: '20 Feb 2023' },
  ];

  const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    customer.phone.includes(searchQuery)
  );

  const handleEditClick = (customer: Customer) => {
    setEditCustomer(customer);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setEditCustomer(null);
  };

  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar />
      
      <div className="flex-1 overflow-y-auto">
        <main className="p-6 md:p-10 max-w-7xl mx-auto animate-fade-in">
          <h1 className="text-3xl font-semibold mb-6">Customer List</h1>
          
          <div className="mb-6 flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search customers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-8 h-9 text-sm"
              />
            </div>
            <Button>Add New Customer</Button>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Phone Number</TableHead>
                  <TableHead>Registration Date</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredCustomers.map((customer) => (
                  <TableRow key={customer.id}>
                    <TableCell className="font-medium">{customer.name}</TableCell>
                    <TableCell>{customer.email}</TableCell>
                    <TableCell>{customer.phone}</TableCell>
                    <TableCell>{customer.registrationDate}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="outline" size="sm" onClick={() => handleEditClick(customer)}>
                        Edit
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          
          <div className="mt-6">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </main>
      </div>
      
      {isModalOpen && editCustomer && (
        <CustomerEditModal 
          customer={editCustomer} 
          isOpen={isModalOpen} 
          onClose={handleModalClose} 
        />
      )}
    </div>
  );
};

export default CustomerList;
