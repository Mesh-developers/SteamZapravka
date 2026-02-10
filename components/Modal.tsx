'use client';

import { FC, ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: FC<ModalProps> = ({ open, onClose, children }) => {
  if (!open) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm overflow-hidden h-[100vh]"
      onClick={onClose}
      aria-modal
      role="dialog"
    >
      <div onClick={(e) => e.stopPropagation()}>
        <div className="w-full grid justify-items-end relative top-8 pr-5 cursor-pointer">
            <svg width="19" height="19" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={()=>onClose()}>
            <g clipPath="url(#clip0_1965_4933)">
            <path d="M15.7863 1.21484L1.21484 15.7863M1.21484 1.21484L15.7863 15.7863" stroke="#EEEEEE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            <defs>
            <clipPath id="clip0_1965_4933">
            <rect width="19" height="19" fill="white"/>
            </clipPath>
            </defs>
            </svg>
        </div>
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;