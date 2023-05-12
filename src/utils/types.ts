export type Account = {
	id: number;
	last_login: string | null;
	is_superuser: boolean;
	is_staff: boolean;
	date_joined: string;
	username: string;
	email: string;
	password: string;
	first_name: string | null;
	last_name: string | null;
	avatar: string | null;
	activation_code: string;
	is_active: boolean;
	groups: any[];
	user_permissions: any[];
};
