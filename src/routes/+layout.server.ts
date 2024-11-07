import type { LayoutServerLoad } from './$types';
import { dev } from '$app/environment';

export const load = (async ({ getClientAddress, fetch }) => {
	let ip = getClientAddress();
	if (dev) {
		ip = '196.188.188.169';
	}
	const response = await fetch(`http://ip-api.com/json/${ip}`);
	const ipData = await response.json();
	return { ip, ipData };
}) satisfies LayoutServerLoad;
