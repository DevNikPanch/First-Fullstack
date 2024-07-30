export interface MenuItem {
    name: string;
    link: string;
    counter: boolean;
    count?: number;
}

export type SidebarItems = MenuItem[];
