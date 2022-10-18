import {
	faGripVertical,
	faBarcode,
	faFileInvoice,
	faUsers,
	faWrench,
	faXmark,
	faPlus,
} from '@fortawesome/free-solid-svg-icons';

/*##################################################################################|
|																					|
|									viewsListOptions								|
|																					|
####################################################################################*/
export const newTreats = {
	id: 0,
	icon: faXmark,
	path: '#',
	label: 'Cancelar',
};
/*##################################################################################|
|																					|
|									viewsListOptions								|
|																					|
####################################################################################*/
export const viewsListOptions = [
	{
		id: 0,
		icon: faXmark,
		path: '#',
		label: 'Cancelar',
	},
	{
		id: 1,
		icon: faPlus,
		path: '#',
		label: 'Nuevo conejo',
	},
];
/*###################################################################################
|																					|
|									optionsData										|
|																					|
####################################################################################*/
export const optionsData = [
	{
		id: 0,
		icon: faWrench,
		label: 'Configuración',
	},
	{
		id: 1,
		icon: faUsers,
		label: 'Administrar usuarios',
	},
];
export const optionsDataUser = [
	{
		id: 0,
		icon: faWrench,
		label: 'Configuración',
	},
];

export const optionsDataAdmin = [
	{
		id: 0,
		icon: faWrench,
		label: 'Configuración',
	},
	{
		id: 1,
		icon: faUsers,
		label: 'Administrar usuarios',
	},
];
/*###################################################################################
|																					|
|									generalOptions									|
|																					|
####################################################################################*/
export const generalOptions = [
	{
		id: 0,
		icon: faBarcode,
		path: '/dashboard',
		label: 'Estadísticas',
	},
	{
		id: 1,
		icon: faGripVertical,
		path: '/vitaeslist',
		label: 'Hojas de vida',
	},
	{
		id: 2,
		icon: faFileInvoice,
		path: '/reco',
		label: 'Historial',
	},
];
/*###################################################################################
|																					|
|									optionsAud										|
|																					|
####################################################################################*/
export const optionsAud = [
	{
		id: 0,
		icon: faWrench,
		label: 'Configuración',
	},
	{
		id: 1,
		icon: faUsers,
		label: 'Administrar usuarios',
	},
];
