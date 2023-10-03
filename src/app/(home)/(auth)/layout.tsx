import { FC } from 'react';

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className='bg-slate-200 p-10 rounded-md w-full mx-1 sm:w-7/12 md:min-w-[400px] md:max-w-[400px]'>
      {children}
    </div>
  );
};
export default AuthLayout;
