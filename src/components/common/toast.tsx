import toast from 'react-hot-toast';
import { Check, X } from 'react-feather';

const successToast = (message: string) => {
  toast.custom((toast) => (
    <div
      className={`mb-5 flex items-center gap-3 bg-green-600 px-8 py-3 text-sm text-white ${
        toast.visible ? 'animate-enter' : 'animate-leave'
      }`}
    >
      <span>{message}</span>
      <Check size={20} />
    </div>
  ));
};

const errorToast = (message: string) => {
  toast.custom((toast) => (
    <div
      className={`mb-5 flex items-center gap-3 bg-red-500 px-6 py-3 text-sm text-white ${
        toast.visible ? 'animate-enter' : 'animate-leave'
      }`}
    >
      <span>{message}</span>
      <X size={18} />
    </div>
  ));
};

export { successToast, errorToast };
