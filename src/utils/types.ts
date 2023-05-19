export type Account = {
	id: number;
	last_login: string | null;
	is_superuser: boolean;
	is_staff: boolean;
	date_joined: string;
	username: string;
	email: string;
	password: string;
	category: string;
	first_name: string | null;
	last_name: string | null;
	avatar: string | null;
	activation_code: string;
	is_active: boolean;
	groups: any[];
	user_permissions: any[];
};

export type Comment = {
	id: number;
	owner: string;
	text: string;
	created_at: string;
	updated_at: string;
	restaurant: string;
};

// export type User = {
// 	id: number;
// 	username: string;
// 	favorites: Restaurant[];
// };

export type Restaurant = {
	id: number;
	comment: Comment[];
	title: string;
	image: string;
	price_people: string;
	locate: string;
	working_hours: string;
	features: string;
};

// export type Favorite = {
// 	id: number;
// 	comment: Comment[];
// 	title: string;
// 	image: string;
// 	price_people: string;
// 	locate: string;
// 	working_hours: string;
// 	features: string;
// };
