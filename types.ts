
import React from 'react';

export interface Member {
  id: string;
  fullName: string;
  shofcoId: string;
  idNumber: string;
  mobile: string;
  email: string;
  status: 'Active' | 'Inactive';
  groupName: string;
  location: string;
}

export interface Dependant {
  id: string;
  relationship: string;
  gender: string;
  dob: string;
  age: number | string;
  birthCertNo: string;
  insertDate: string;
  status: 'Active' | 'Inactive';
  phoneNumber: string;
}

export interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  isActive?: boolean;
  hasSubmenu?: boolean;
  isOpen?: boolean;
}