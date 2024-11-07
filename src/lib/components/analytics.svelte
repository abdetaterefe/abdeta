<script lang="ts">
	import { navigating, page } from '$app/stores';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';

	const { website_id } = $props();

	let isTrackingNavigation = false;

	async function sendTrackingData(analyticsId: string) {
		const pageUrl = $page.url.href;
		const origin = $page.url.origin;
		const { ip, ipData: { isp, country, city } = {} } = $page.data;

		await fetch(`https://analytics.abdeta.dev/api/page/track/${website_id}`, {
			method: 'POST',
			body: JSON.stringify({
				pageUrl,
				origin,
				pastorAnalyticsId: analyticsId,
				ip,
				isp,
				country,
				city
			}),
			headers: {
				Accept: '*/*',
				'Content-Type': 'application/json'
			}
		});
	}

	async function trackPageView() {
		if (!browser) return;

		let pastorAnalyticsId = localStorage.getItem('pastorAnalyticsId');
		if (!pastorAnalyticsId) {
			pastorAnalyticsId = crypto.randomUUID();
			localStorage.setItem('pastorAnalyticsId', pastorAnalyticsId);
		}

		await sendTrackingData(pastorAnalyticsId);
	}

	onMount(() => {
		trackPageView();
	});

	$effect(() => {
		if ($navigating) {
			if (!isTrackingNavigation) {
				trackPageView();
				isTrackingNavigation = true;
			}
		} else {
			isTrackingNavigation = false;
		}
	});
</script>
