export interface Application {
    id: string;
    company: string;
    role: string;
    date: string;
    status: 'saved' | 'applied' | 'interviewing' | 'offered' | 'rejected' | 'ghosted';
    notes: string;
}