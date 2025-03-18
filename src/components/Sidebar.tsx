
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { 
  Menu,
  Search, 
  LayoutDashboard, 
  BarChart2, 
  Users, 
  Calendar, 
  XCircle, 
  UserCheck, 
  Building2, 
  UserCog, 
  FileText, 
  Briefcase,
  ChevronLeft,
  ChevronRight,
  X,
  LogOut
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import { useAuth } from '@/hooks/use-auth';
import { useToast } from '@/hooks/use-toast';

const menuItems = [
  { name: 'Overview', icon: LayoutDashboard, href: '#' },
  { name: 'Dashboard', icon: LayoutDashboard, href: '/', active: true },
  { name: 'Analytics', icon: BarChart2, href: '/analytics' },
  { name: 'Customers', icon: Users, href: '/customers', divider: true },
  { name: 'Bookings', icon: Calendar, href: '/bookings' },
  { name: 'Cancellations', icon: XCircle, href: '/cancellations' },
  { name: 'Client List', icon: UserCheck, href: '/client-list', divider: true },
  { name: 'Company', icon: Building2, href: '/company' },
  { name: 'Staff', icon: UserCog, href: '/staff' },
  { name: 'Documents', icon: FileText, href: '/documents' },
  { name: 'Equipments', icon: Briefcase, href: '/equipments' }
];

interface SidebarProps {
  className?: string;
  onClose?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ className, onClose }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const isMobile = useIsMobile();
  const { signOut, user } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const filteredMenuItems = menuItems.filter(item => 
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSignOut = async () => {
    try {
      await signOut();
      toast({
        title: "Signed out successfully",
        description: "You have been signed out of your account",
      });
      navigate('/auth');
    } catch (error) {
      toast({
        title: "Sign out failed",
        description: "There was an error signing out",
        variant: "destructive",
      });
    }
  };

  // Mobile sidebar design
  if (isMobile) {
    return (
      <div className="flex flex-col h-full w-full bg-white">
        <div className="p-4 flex items-center justify-between border-b">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 bg-yellow-400 rounded-full flex items-center justify-center">
              <span className="text-black text-xs font-semibold">S</span>
            </div>
            <div className="font-semibold text-sm">
              SPORT2
            </div>
          </div>
          {onClose && (
            <Button variant="ghost" size="icon" onClick={onClose} className="h-8 w-8">
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>

        <div className="px-3 py-3">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-8 h-9 text-sm bg-gray-100 border-0 focus-visible:ring-1 focus-visible:ring-gray-300"
            />
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto py-2">
          <ul className="space-y-1 px-2">
            {filteredMenuItems.map((item, index) => (
              <React.Fragment key={item.name}>
                <li>
                  <a
                    href={item.href}
                    className={cn(
                      "flex items-center rounded-md px-3 py-2 text-sm transition-colors",
                      item.active 
                        ? "bg-gray-200 text-gray-900 font-medium" 
                        : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                    )}
                  >
                    <item.icon className="h-4 w-4 mr-3" />
                    <span>{item.name}</span>
                  </a>
                </li>
                {item.divider && (
                  <li className="my-2 border-t border-gray-200" />
                )}
              </React.Fragment>
            ))}
          </ul>
        </nav>

        {/* User profile and logout at the bottom */}
        <div className="mt-auto border-t border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="h-8 w-8 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
                <span className="text-gray-700 text-sm font-medium">
                  {user?.user_metadata?.name?.charAt(0) || user?.email?.charAt(0) || 'U'}
                </span>
              </div>
              <div className="ml-2">
                <p className="text-sm font-medium">{user?.user_metadata?.name || 'User'}</p>
                <p className="text-xs text-gray-500 truncate max-w-[150px]">{user?.email}</p>
              </div>
            </div>
            <Button variant="ghost" size="icon" onClick={handleSignOut}>
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Desktop sidebar (collapsible)
  return (
    <div
      className={cn(
        'h-screen bg-sidebar relative transition-all duration-300 ease-in-out border-r border-gray-200 flex flex-col',
        isCollapsed ? 'w-[70px]' : 'w-[250px]',
        className
      )}
    >
      <div className="flex flex-col h-full">
        {/* Sidebar Header */}
        <div className="p-4 flex items-center justify-between">
          <div className={cn('flex items-center gap-2', isCollapsed && 'opacity-0 invisible')}>
            <div className="h-6 w-6 bg-yellow-400 rounded-full flex items-center justify-center">
              <span className="text-black text-xs font-semibold">S</span>
            </div>
            <div className="font-semibold text-sm">
              SPORT2
            </div>
          </div>
          <button 
            onClick={toggleSidebar}
            className="h-6 w-6 flex items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 transition-colors"
          >
            {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
          </button>
        </div>

        {/* Search Bar */}
        <div className={cn('px-3 mb-2', isCollapsed && 'opacity-0 invisible')}>
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-8 h-9 text-sm bg-gray-100 border-0 focus-visible:ring-1 focus-visible:ring-gray-300"
            />
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 overflow-y-auto py-2">
          <ul className="space-y-1 px-2">
            {filteredMenuItems.map((item, index) => (
              <React.Fragment key={item.name}>
                <li>
                  <a
                    href={item.href}
                    className={cn(
                      "flex items-center rounded-md px-3 py-2 text-sm transition-colors",
                      item.active 
                        ? "bg-gray-200 text-gray-900 font-medium" 
                        : "text-gray-600 hover:bg-gray-100 hover:text-gray-900",
                      isCollapsed && "justify-center px-0"
                    )}
                  >
                    <item.icon className={cn("h-4 w-4", isCollapsed ? "mx-0" : "mr-3")} />
                    {!isCollapsed && <span>{item.name}</span>}
                  </a>
                </li>
                {item.divider && !isCollapsed && (
                  <li className="my-2 border-t border-gray-200" />
                )}
              </React.Fragment>
            ))}
          </ul>
        </nav>

        {/* User profile and logout at the bottom */}
        <div className={cn(
          "mt-auto border-t border-gray-200 p-4",
          isCollapsed && "flex justify-center p-2"
        )}>
          {isCollapsed ? (
            <Button variant="ghost" size="icon" onClick={handleSignOut} className="h-8 w-8">
              <LogOut className="h-4 w-4" />
            </Button>
          ) : (
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="h-8 w-8 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
                  <span className="text-gray-700 text-sm font-medium">
                    {user?.user_metadata?.name?.charAt(0) || user?.email?.charAt(0) || 'U'}
                  </span>
                </div>
                <div className="ml-2">
                  <p className="text-sm font-medium">{user?.user_metadata?.name || 'User'}</p>
                  <p className="text-xs text-gray-500 truncate max-w-[150px]">{user?.email}</p>
                </div>
              </div>
              <Button variant="ghost" size="icon" onClick={handleSignOut}>
                <LogOut className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
