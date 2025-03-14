
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
import { Search, Plus, UserPlus } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Skeleton } from '@/components/ui/skeleton';
import { useIsMobile } from '@/hooks/use-mobile';
import { useToast } from '@/hooks/use-toast';

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
  const [isNewCustomerModalOpen, setIsNewCustomerModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const isMobile = useIsMobile();
  const { toast } = useToast();

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

  const handleAddNewCustomer = () => {
    setIsNewCustomerModalOpen(true);
  };

  const handleNewCustomerModalClose = () => {
    setIsNewCustomerModalOpen(false);
  };

  // Simulate loading
  const toggleLoading = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Action completed",
        description: "Customer data has been updated successfully",
      });
    }, 1500);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white">
      <Sidebar />
      
      <div className="flex-1 overflow-y-auto">
        <main className="p-4 md:p-10 max-w-7xl mx-auto animate-fade-in">
          <h1 className="text-2xl md:text-3xl font-semibold mb-4 md:mb-6">Customer List</h1>
          
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
            <Button onClick={handleAddNewCustomer}>
              <UserPlus className="h-4 w-4 mr-2" /> Add New Customer
            </Button>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            {isLoading ? (
              <div className="p-4 space-y-4">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="flex flex-col space-y-3">
                    <Skeleton className="h-10 w-full" />
                  </div>
                ))}
              </div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead className={isMobile ? "hidden md:table-cell" : ""}>Email</TableHead>
                      <TableHead className={isMobile ? "hidden md:table-cell" : ""}>Phone Number</TableHead>
                      <TableHead className={isMobile ? "hidden md:table-cell" : ""}>Registration Date</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredCustomers.map((customer) => (
                      <TableRow key={customer.id}>
                        <TableCell className="font-medium">
                          <div>
                            {customer.name}
                            <div className="md:hidden text-xs text-gray-500">
                              {customer.email}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className={isMobile ? "hidden md:table-cell" : ""}>{customer.email}</TableCell>
                        <TableCell className={isMobile ? "hidden md:table-cell" : ""}>{customer.phone}</TableCell>
                        <TableCell className={isMobile ? "hidden md:table-cell" : ""}>{customer.registrationDate}</TableCell>
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
            )}
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
          onClose={() => {
            handleModalClose();
            toggleLoading();
          }} 
        />
      )}

      {isNewCustomerModalOpen && (
        <CustomerEditModal 
          customer={{ 
            id: 0, 
            name: '', 
            email: '', 
            phone: '', 
            registrationDate: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) 
          }} 
          isOpen={isNewCustomerModalOpen} 
          onClose={() => {
            handleNewCustomerModalClose();
            toggleLoading();
          }} 
          isNewCustomer={true}
        />
      )}
    </div>
  );
};

export default CustomerList;
