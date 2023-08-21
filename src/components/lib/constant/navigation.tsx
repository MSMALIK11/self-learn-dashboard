import React, { ReactElement } from 'react';
import { DashboardCustomizeOutlined, AddBoxRounded, Settings, AccountCircle } from '@mui/icons-material';


interface linksPros {
    key: number,
    path: string,
    label: string,
    icon: ReactElement<typeof DashboardCustomizeOutlined>
}

export const sidebarLinks: linksPros[] = [
    {
        key: 1,
        path: '/',
        label: 'Dashboard',
        icon: <DashboardCustomizeOutlined />

    },
    {
        key: 2,
        path: '/course',
        label: 'Add New',
        icon: <AddBoxRounded />

    },
    {
        key: 3,
        path: '/test',
        label: 'Test',
        icon: <AddBoxRounded />

    }
];

export const sideBarFooterLinks = [
    {
        key: 1,
        path: '/',
        label: 'Dashboard',
        icon: <Settings />

    },
    {
        key: 2,
        path: '/profile',
        label: 'Profile',
        icon: <AccountCircle />

    }
]