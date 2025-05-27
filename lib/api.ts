const API_URL = process.env.WORDPRESS_API_URL

async function fetchAPI(query = '', {variables}: Record<string, any> = {}) {
		const headers = {'Content-Type': 'application/json'}

		if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
				headers[
						'Authorization'
						] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`
		}

		// WPGraphQL Plugin must be enabled
		const res = await fetch(API_URL, {
				headers,
				method: 'POST',
				body: JSON.stringify({
						query,
						variables,
				}),
				next: { revalidate: 10 }
		})

		const json = await res.json()
		if (json.errors) {
				console.error(json.errors)
				throw new Error('Failed to fetch API')
		}
		return json.data
}

//Jainil Functions
export async function getHeaderData() {
	const data = await fetchAPI(`
		query NewQuery {
			header {
				headerFields {
					fieldGroupName
					joinButtonText
					joinButtonUrl
					loginButtonText
					loginButtonUrl
					logo {
						node {
							altText
							sourceUrl
						}
					}
					menuItems {
						fieldGroupName
						label
						url
					}
				}
			}
		}
	`)
	return data?.header;
}


export async function getFooterData() {
	const data = await fetchAPI(`
		query NewQuery {
			footer {
				footerFields {
					headingText
					description
					linkText
					linkUrl
					footerLogo {
						node {
							altText
							sourceUrl
						}
					}
					footerMenu {
						fieldGroupName
						label
						url
					}
					logoText
					countryRelatedText
					heading
					newsletterButtonText
					newsletterDescription
					newsletterEmailPlaceholder
					newsletterHeading
					acknowledgementFlag1 {
						node {
							altText
							sourceUrl
						}
					}
					acknowledgementFlag2 {
						node {
							altText
							sourceUrl
						}
					}
					acknowledgementLinkText
					acknowledgementText
					exploreFields {
						exploreAreaLabel
						fieldGroupName
					}
					socialIcons {
						altText
						link
						image {
							node {
								altText
								sourceUrl
							}
						}
						iconHeight
						iconWidth
					}
				}
			}
		}
	`)
	return data?.footer;
}

export async function getHomeData(uri) {
	const data = await fetchAPI(`

		query pagebyslug($uri: String) {
			pageBy(uri: $uri) {
				seo {
					metaDesc
					title
				}
				featuredImage {
					node {
						 sourceUrl
					}
				}
				homeHeroSection {
					sectionDescription
					sectionHeading
					link1Text
					link1Url
					link2Text
					link2Url
					heroImage {
						node {
							altText
							sourceUrl
						}
					}
					imageText
				}
				homeOfTradesServices {
					tradeSectionHeading
					tradeSectionDescription
					servicesSlider {
						serviceName
					}
				}
				clientLogoSection {
					clientLogoSectionHeading
					clientLogoSlider {
						clientLogo {
							node {
								altText
								sourceUrl
							}
						}
					}
				}
				aiJob {
					aiSectionDescription
					aiSectionHeading
					aiSectionImages {
						aiSectionImage {
							node {
								altText
								sourceUrl
							}
						}
					}
					aiSectionPopUpImage {
						node {
							altText
							sourceUrl
						}
					}
					aiJobServiceSlider {
						aiJobServiceName
					}
					aiLinkText
					aiLinkUrl
				}
				tradeEventSection {
					tradeEventHeading
					tradeEventDescription
					tradeEventImages {
						tradeEventImage {
							node {
								altText
								sourceUrl
							}
						}
					}
					tradeEventSlider {
						tradeEventNames
					}
					tradeEventLinkName
					tradeEventLinkUrl
					tradeEventPopUpImage {
						node {
							altText
							sourceUrl
						}
					}
				}
				homeCareerSection {
					careerSectionHeading
					careerSectionDescription
					careerSectionImages {
						careerSectionImage {
							node {
								altText
								sourceUrl
							}
						}
					}
					careerPopUpImage {
						node {
							altText
							sourceUrl
						}
					}
					careerSectionServiceSlider {
						careerSectionServiceName
					}
					careerLinkText
					careerLinkUrl
				}
				communitySection {
					communitySectionHeading
					communitySectionDescription
					communityLinkSectionText
					communityLinkUrl
					communityImage1Heading
					communityImage1 {
						node {
							altText
							sourceUrl
						}
					}
					communityImage2Heading
					communityImage2 {
						node {
							altText
							sourceUrl
						}
					}
					communityImage3Heading
					communityImage3 {
						node {
							altText
							sourceUrl
						}
					}
				}
				testimonialSection {
					testimonialSectionHeading
					testimonialSectionHeading2
					testimonialSectionDescription
					testimonialLinkText
					testimonialLinkUrl
					customerImage {
						node {
							altText
							sourceUrl
						}
					}
					customReview
					customerName
				}
			}
		}
	`,
		{
				variables: {uri}
		}
	)

	return data?.pageBy
}

export async function getJobSeekersData(uri) {
	const data = await fetchAPI(`

		query pagebyslug($uri: String) {
			pageBy(uri: $uri) {
				seo {
					metaDesc
					title
				}
				featuredImage {
					node {
						sourceUrl
					}
				}
				jobSeekersHeroSection {
					heroSectionHeading
					heroSectionDescription
					heroSectionImages {
						heroSectionImage {
							node {
							altText
							sourceUrl
							}
						}
						}
					heroSectionLinkText
					heroSectionLinkUrl
				}
				differenceWeMakeSection {
					differenceSectionHeading
					differenceWeMakeDescription
					differenceWeMakeImages {
						differenceWeMakeImage {
							node {
								altText
								sourceUrl
							}
						}
					}
				}
				howItWorksSection {
					heading
					description
					steps {
						stepId
						stepTitle
						stepDescription
						stepImage {
							node {
								altText
								sourceUrl
							}
						}
					}    
				}
				createProfileSection {
					profileHeading
					profileDescription
					qrImage {
						node {
							altText
							sourceUrl
						}
					}
					gogglePlayImage {
						node {
							altText
							sourceUrl
						}
					}
					appStoreImage {
						node {
							altText
							sourceUrl
						}
					}
				}
				faqsSection {
					faqHeading
					faqSubheading
					faqQa {
						faqQuestions
						faqAnswers
					}
				}
			}
		}
	`,
		{
				variables: {uri}
		}
	)

	return data?.pageBy
}

export async function getEmployersData(uri) {
	const data = await fetchAPI(`

		query pagebyslug($uri: String) {
			pageBy(uri: $uri) {
				seo {
					metaDesc
					title
				}
				featuredImage {
					node {
						sourceUrl
					}
				}
				employerHeroSection {
					title
					description
					heroImage {
						node {
							altText
							sourceUrl
						}
					}
					heroImageText
					heroSectionLinkText
					heroSectionLinkUrl
					heroSectionServiceSlider {
						heroSectionServiceName
					}
				}
				crewSection {
					crewSectionHeading
					crewMembersCard {
						crewId
						crewName
						crewRole
						crewQuote
						crewImage {
							node {
								altText
								sourceUrl
							}
						}
					}
				}
			}
		}
	`,
		{
				variables: {uri}
		}
	)

	return data?.pageBy
}

export async function getCoursesData(uri) {
	const data = await fetchAPI(`

		query pagebyslug($uri: String) {
			pageBy(uri: $uri) {
				seo {
					metaDesc
					title
				}
				featuredImage {
					node {
						sourceUrl
					}
				}
				coursesHeroSection {
					courseHeading
					courseDescription
					courseHeroSectionImage {
						node {
							altText
							sourceUrl
						}
					}
					heroImageText
					courseImagesSlider {
						courseImage {
							node {
								altText
								sourceUrl
							}
						}
					}
					courseHeroLinkText
					courseHeroLinkUrl
				}
			}
		}
	`,
		{
				variables: {uri}
		}
	)

	return data?.pageBy
}

export async function getEventsData(uri) {
	const data = await fetchAPI(`

		query pagebyslug($uri: String) {
			pageBy(uri: $uri) {
				seo {
					metaDesc
					title
				}
				featuredImage {
					node {
						sourceUrl
					}
				}
				eventsHeroSection {
					eventsHeading
					eventDescription
					eventLinkText
					eventLinkUrl
					eventHeroSectionImage {
						node {
							altText
							sourceUrl
						}
					}
					heroSectionImageText
				}
				featuredEvents {
					heading
					eventsGrid {
						eventImage {
							node {
								altText
								sourceUrl
							}
						}
						eventName
					}
					featuredEventsSlider {
						featuredEventName
					}
				}
			}
		}
	`,
		{
				variables: {uri}
		}
	)

	return data?.pageBy
}

export async function getAboutUsData(uri) {
	const data = await fetchAPI(`

		query pagebyslug($uri: String) {
			pageBy(uri: $uri) {
				seo {
					metaDesc
					title
				}
				featuredImage {
					node {
						 sourceUrl
					}
				}
				aboutUsHeroSection {
					aboutSectionHeading
					aboutSectionDescription
					aboutSectionImage {
						node {
							altText
							sourceUrl
						}
					}
				}
				valuesSection {
					storyHeading
					storySubheading
					storyContents {
						storySingleContent
					}
					visionHeading
					visionSubheading
					visionContent {
						visionSingleContent
					}
					missionHeading
					missionSubheading
					missionListItems {
						singleItem
					}
					missionConclusion
				}
				whyAreWeDifferentSection {
					sectionHeading
					sectionDescription
					whyDifferentSlider {
						itemImage {
							node {
								altText
								sourceUrl
							}
						}
						itemTitle
						id
					}
				}
				impactSection {
					impactHeading
					subheading
					impactHighlights {
						reachNumber
						reachText
					}
					impactImage {
						node {
							altText
							sourceUrl
						}
					}
				}
			}
		}
	`,
		{
				variables: {uri}
		}
	)

	return data?.pageBy
}

export async function getAllPostsWithBlogSettings(offset = 0, size = 10) {
	const query = `
		query GetPosts($offset: Int, $size: Int) {
			posts(where: { offsetPagination: { offset: $offset, size: $size } }) {
				total
				edges {
					node {
						id
						title
						slug
						excerpt
						author {
							node {
								name
							}
						}
						dateGmt
						blogSettings {
				        	readTime
				        }
						featuredImage {
							node {
								altText
								sourceUrl
							}
						}
					}
				}
				pageInfo {
					hasNextPage
					hasPreviousPage
				}
			}
		}
	`;
	const variables = { offset, size };

	const data = await fetchAPI(query, { variables });
	return data?.posts || [];
}

export async function getSinglePostBySlug(slug) {
	const query = `
		query GetSinglePostBySlug($slug: ID!) {
			post(id: $slug, idType: SLUG) {
				id
				title
				slug
				content
				dateGmt
				author {
					node {
						name
					}
				}
				blogSettings {
					readTime
				}
				featuredImage {
					node {
						altText
						sourceUrl
					}
				}
			}
		}
	`;

	const variables = { slug };

	const data = await fetchAPI(query, { variables });

	return data?.post;
}



export async function getAllPostsWithSlug() {
		const data = await fetchAPI(`
		{
			posts(first: 10000) {
				edges {
					node {
						slug
					}
				}
			}
		}
	`)
		return data?.posts
}

export async function getAllPagesWithSlug() {
		const data = await fetchAPI(`
		{
			pages(first: 30, where: {parent: "0", notIn: "4"}) {
				edges {
					node {
						slug
						uri
					}
				}
			}
		}
	`)
		return data?.pages
}

/* Get Products Detail Pages */
export async function getProductPagesWithSlug() {
		const data = await fetchAPI(`
		{
			pages(first: 10, where: { parent: "67" } ) {
				edges {
					node {
						slug
						uri
					}
				}
			}
		}
	`)
		return data?.pages
}

/* Get Features Detail Pages */
export async function getFeaturesPagesWithSlug() {
		const data = await fetchAPI(`
		{
			pages(first: 10, where: { parent: "48" } ) {
				edges {
					node {
						slug
						uri
					}
				}
			}
		}
	`)
		return data?.pages
}

/* Get Industry Detail Pages */
export async function getIndustriesPagesWithSlug() {
		const data = await fetchAPI(`
		{
			pages(first: 10, where: { parent: "22" } ) {
				edges {
					node {
						slug
						uri
					}
				}
			}
		}
	`)
		return data?.pages
}

/* Get Integration Detail Pages */
export async function getIntegrationsPagesWithSlug() {
		const data = await fetchAPI(`
		{
			pages(first: 10, where: { parent: "20" } ) {
				edges {
					node {
						slug
						uri
					}
				}
			}
		}
	`)
		return data?.pages
}


export async function getPageWithSlug(uri) {

		const data = await fetchAPI(
				`
		query pagebyslug($uri: String) {
			pageBy(uri: $uri) {
				slug
				content
				featuredImage {
					node {
						sourceUrl
					}
				}
				title
				seo {
					metaDesc
					title
					breadcrumbs {
						text
						url
					}
				}
				product_features {
					productFeatures {
						features {
							content
							image {
								sourceUrl
							}
							title
						}
						mainHeading
						subHeading
					}
				}
				product {
					mainImage {
						sourceUrl
					}
					features {
						icon {
							sourceUrl
						}
						title
						description
					}
					pageHeading
					subHeading
				}
				
			}
		}
		`,
				{
						variables: {uri}
				}
		)

		return data?.pageBy

}

/* Get About Page Data */
export async function getAboutPagewithSlug(uri) {

		const data = await fetchAPI(
				`
		query pagebyslug($uri: String) {
			pageBy(uri: $uri) {
				slug
				content
				featuredImage {
					node {
						sourceUrl
					}
				}
				title
				seo {
					metaDesc
					title
					breadcrumbs {
						text
						url
					}
				}
				aboutPageFields {
					mainHeading
					ourStoryTitle
					ourStoryContent
					aboutImage1 {
						sourceUrl
					}
					aboutImage2 {
						sourceUrl
					}
					aboutStats {
						stat
						label
					}
					whatWeDoTitle
					whatWeDoContent
					missionImage {
						sourceUrl
					}
					missionContent
					missionLogo {
						sourceUrl
					}
					missionQuoteImage {
						sourceUrl
					}
					ourValueTitle
					ourValues {
						icon {
							sourceUrl
						}
						title
					}
				}
			}
		}
		`,
				{
						variables: {uri}
				}
		)

		return data?.pageBy

}

/* Get Contact Page Data */
export async function getContactPagewithSlug(uri) {

		const data = await fetchAPI(
				`
		query pagebyslug($uri: String) {
			pageBy(uri: $uri) {
				slug
				content
				featuredImage {
					node {
						sourceUrl
					}
				}
				title
				seo {
					metaDesc
					title
				}
				contactPageData {
					contactDetails {
						icon {
							sourceUrl
						}
						text
					}
				}
			}
		}
		`,
				{
						variables: {uri}
				}
		)

		return data?.pageBy

}

/* Get Parners Page Data */
export async function getPartnerPagewithSlug(uri) {

		const data = await fetchAPI(
				`
		query pagebyslug($uri: String) {
			pageBy(uri: $uri) {
				slug
				content
				featuredImage {
					node {
						sourceUrl
					}
				}
				title
				seo {
					metaDesc
					title
					breadcrumbs {
						text
						url
					}
				}
				partnerData {
					mainHeading
					whyChooseTitle
					whyChooseText
					whyChooseData {
						icon {
							sourceUrl
						}
						text
					}
					howItWorksTitle
					howItWorksDesc
					howItData {
						icon {
							sourceUrl
						}
						text
					}
					joinUsHeading
					joinUsText
					whyJoinHeading
					whyJoinData{
						text
					}
				}
			}
		}
		`,
				{
						variables: {uri}
				}
		)

		return data?.pageBy

}

/* Get Getting Started Page Data */
export async function getGettingStartedPagewithSlug(uri) {

		const data = await fetchAPI(
				`
		query pagebyslug($uri: String) {
			pageBy(uri: $uri) {
				slug
				content
				featuredImage {
					node {
						sourceUrl
					}
				}
				title
				seo {
					metaDesc
					title
					breadcrumbs {
						text
						url
					}
				}
				gett {
					mainHeading
					whatsNextTitle
					whatsNextText
					whatsNextFields {
						icon {
							sourceUrl
						}
						title
						text
					}
					implementingTitle
					implementingFields {
						icon {
							sourceUrl
						}
						text
					}
					contractBlueText
					contractHeading
					contractButtonText
					contractButtonLink
					contractImage {
						sourceUrl
					}
					contractText
					getStartedHeading
					getStartedFields {
						icon {
							sourceUrl
						}
						title
						text
					}
					trainingSmallText
					styleHeading
					styleText
					styleImage {
						sourceUrl
					}
					trainingFields {
						icon {
							sourceUrl
						}
						title
						text
					}
				}
			}
		}
		`,
				{
						variables: {uri}
				}
		)

		return data?.pageBy

}

/* Get Faq's Page Data */
export async function getFaqsPagewithSlug(uri) {

		const data = await fetchAPI(
				`
		query pagebyslug($uri: String) {
			pageBy(uri: $uri) {
				slug
				content
				featuredImage {
					node {
						sourceUrl
					}
				}
				title
				seo {
					metaDesc
					title
					breadcrumbs {
						text
						url
					}
				}
				faqPageFields {
					mainHeading
					faqFields {
						title
						text
						faqs {
							q
							a
						}
					}
				}
			}
		}
		`,
				{
						variables: {uri}
				}
		)

		return data?.pageBy

}

/* Get Main Product Page Data */
export async function getProductPageWithSlug(uri) {

		const data = await fetchAPI(
				`
		query pagebyslug($uri: String) {
			pageBy(uri: $uri) {
				slug
				content
				featuredImage {
					node {
						sourceUrl
					}
				}
				title
				seo {
					metaDesc
					title
					breadcrumbs {
						text
						url
					}
				}
				mainProductPage {
					mainHeading
					productsData {
						image {
							sourceUrl
						}
						icon {
							sourceUrl
						}
						title
						description
						link
					}
				}
			}
		}
		`,
				{
						variables: {uri}
				}
		)

		return data?.pageBy

}

/* Get Main Integration Page Data */
export async function getIntegrationPageWithSlug(uri) {

		const data = await fetchAPI(
				`
		query pagebyslug($uri: String) {
			pageBy(uri: $uri) {
				slug
				content
				featuredImage {
					node {
						sourceUrl
					}
				}
				title
				seo {
					metaDesc
					title
					breadcrumbs {
						text
						url
					}
				}
				integrationPageFields {
					mainHeading
					subHeading
					ourIntegration {
						title
						integrations {
							icon {
								sourceUrl
							}
							link
						}
					}
					webSolution
					webSolutionDesc
					integrationsData {
						heading
						integrationItems {
							text
							title
							icon {
								sourceUrl
							}
							image {
								sourceUrl
							}
							link
							color
						}
					}
				}
			}
		}
		`,
				{
						variables: {uri}
				}
		)

		return data?.pageBy

}


export async function getXeroPageWithSlug(uri) {
		const data = await fetchAPI(`
		query pagebyslug($uri: String) {
			pageBy(uri: $uri) {
				slug
				content
				featuredImage {
					node {
						sourceUrl
					}
				}
				title
				seo {
					metaDesc
					title
					breadcrumbs {
						text
						url
					}
				}
				integration_detail_page {
					features {
						features {
							content
							image {
								sourceUrl
							}
							title
						}
						mainHeading
						subHeading
					}
					integrationTag
					integrationTitle
					heading {
						mainTitle
						subTitle
					}
					fullSection {
						subTitle
						title
						compare {
							color
							logo {
								sourceUrl
							}
							pointers {
								compareImage {
									sourceUrl
								}
								pinter
							}
						}
						videoImage {
							sourceUrl
						}
						videoLink
					}
					leftSection {
						title
						tag
						content
						image {
							sourceUrl
						}
					}
					rightSection {
						image {
							sourceUrl
						}
						subTitle
						title
						pointers {
							content
							title
						}
					}
				}
				footerSettings {
					demoSection {
						backgroundImage {
							sourceUrl
						}
						primaryButton {
							backgroundColor
							href
							title
						}
						subTitle
						title
						visibleSection
						logo {
							sourceUrl
						}
					}
				}
			}
		}`,
				{
						variables: {uri}
				}
		);
		return data?.pageBy
}

export async function getBursonEzypartsPageWithSlug(uri) {
		const data = await fetchAPI(`
		query pagebyslug($uri: String) {
			pageBy(uri: $uri) {
				slug
				content
				featuredImage {
					node {
						sourceUrl
					}
				}
				title
				seo {
					metaDesc
					title
					breadcrumbs {
						text
						url
					}
				}
				integration_detail_page {
					features {
						features {
							content
							image {
								sourceUrl
							}
							title
						}
						mainHeading
						subHeading
					}
					integrationTag
					integrationTitle
					heading {
						mainTitle
						subTitle
					}
					fullSection {
						subTitle
						title
						videoImage {
							sourceUrl
						}
						videoLink
					}
					leftSection {
						title
						tag
						content
						image {
							sourceUrl
						}
					}
					rightSection {
						image {
							sourceUrl
						}
						subTitle
						title
						pointers {
							content
							title
						}
					}
				}
				footerSettings {
					
					demoSection {
						backgroundImage {
							sourceUrl
						}
						primaryButton {
							backgroundColor
							href
							title
						}
						subTitle
						title
						logo {
							sourceUrl
						}
					}
				}
			}
		}`,
				{
						variables: {uri}
				}
		);
		return data?.pageBy
}

export async function getNavigatorProPageWithSlug(uri) {
	const data = await fetchAPI(`
	query pagebyslug($uri: String) {
		pageBy(uri: $uri) {
			slug
			content
			featuredImage {
				node {
					sourceUrl
				}
			}
			title
			seo {
				metaDesc
				title
				breadcrumbs {
					text
					url
				}
			}
			integration_detail_page {
				features {
					features {
						content
						image {
							sourceUrl
						}
						title
					}
					mainHeading
					subHeading
				}
				integrationTag
				integrationTitle
				heading {
					mainTitle
					subTitle
				}
				fullSection {
					subTitle
					title
					videoImage {
						sourceUrl
					}
					videoLink
				}
				leftSection {
					title
					tag
					content
					image {
						sourceUrl
					}
				}
				rightSection {
					image {
						sourceUrl
					}
					subTitle
					title
					pointers {
						content
						title
					}
				}
			}
			footerSettings {
				
				demoSection {
					backgroundImage {
						sourceUrl
					}
					primaryButton {
						backgroundColor
						href
						title
					}
					subTitle
					title
					logo {
						sourceUrl
					}
				}
			}
		}
	}`,
			{
					variables: {uri}
			}
	);
	return data?.pageBy
}

export async function getStripePageWithSlug(uri) {
	const data = await fetchAPI(`
	query pagebyslug($uri: String) {
		pageBy(uri: $uri) {
			slug
			content
			featuredImage {
				node {
					sourceUrl
				}
			}
			title
			seo {
				metaDesc
				title
				breadcrumbs {
					text
					url
				}
			}
			integration_detail_page {
				features {
					features {
						content
						image {
							sourceUrl
						}
						title
					}
					mainHeading
					subHeading
				}
				integrationTag
				integrationTitle
				heading {
					mainTitle
					subTitle
				}
				fullSection {
					subTitle
					title
					videoImage {
						sourceUrl
					}
					videoLink
				}
				leftSection {
					title
					tag
					content
					image {
						sourceUrl
					}
				}
				rightSection {
					image {
						sourceUrl
					}
					subTitle
					title
					pointers {
						content
						title
					}
				}
			}
			footerSettings {
				
				demoSection {
					backgroundImage {
						sourceUrl
					}
					primaryButton {
						backgroundColor
						href
						title
					}
					subTitle
					title
					logo {
						sourceUrl
					}
				}
			}
		}
	}`,
			{
					variables: {uri}
			}
	);
	return data?.pageBy
}

export async function getMyobPageWithSlug(uri) {
		const data = await fetchAPI(`
		query pagebyslug($uri: String) {
			pageBy(uri: $uri) {
				slug
				content
				featuredImage {
					node {
						sourceUrl
					}
				}
				title
				seo {
					metaDesc
					title
					breadcrumbs {
						text
						url
					}
				}
				integration_detail_page {
					features {
						features {
							content
							image {
								sourceUrl
							}
							title
						}
						mainHeading
						subHeading
					}
					integrationTag
					integrationTitle
					heading {
						mainTitle
						subTitle
					}
					fullSection {
						subTitle
						title
						compare {
							color
							logo {
								sourceUrl
							}
							pointers {
								compareImage {
									sourceUrl
								}
								pinter
							}
						}
					}
					leftSection {
						title
						tag
						content
						image {
							sourceUrl
						}
					}
					rightSection {
						image {
							sourceUrl
						}
						subTitle
						title
						pointers {
							content
							title
						}
					}
				}
				footerSettings {
					demoSection {
						backgroundImage {
							sourceUrl
						}
						primaryButton {
							backgroundColor
							href
							title
						}
						subTitle
						title
						visibleSection
						logo {
							sourceUrl
						}
					}
				}
			}
		}`,
				{
						variables: {uri}
				}
		);
		return data?.pageBy
}

export async function getQuickBooksPageWithSlug(uri) {
		const data = await fetchAPI(`
		query pagebyslug($uri: String) {
			pageBy(uri: $uri) {
				slug
				content
				featuredImage {
					node {
						sourceUrl
					}
				}
				title
				seo {
					metaDesc
					title
					breadcrumbs {
						text
						url
					}
				}
				integration_detail_page {
					features {
						features {
							content
							image {
								sourceUrl
							}
							title
						}
						mainHeading
						subHeading
					}
					integrationTag
					integrationTitle
					heading {
						mainTitle
						subTitle
					}
					fullSection {
						subTitle
						title
						compare {
							color
							logo {
								sourceUrl
							}
							pointers {
								compareImage {
									sourceUrl
								}
								pinter
							}
						}
					}
					leftSection {
						title
						tag
						content
						image {
							sourceUrl
						}
					}
					rightSection {
						image {
							sourceUrl
						}
						subTitle
						title
						pointers {
							content
							title
						}
					}
				}
				footerSettings {
					demoSection {
						backgroundImage {
							sourceUrl
						}
						primaryButton {
							backgroundColor
							href
							title
						}
						subTitle
						title
						visibleSection
						logo {
							sourceUrl
						}
					}
				}
			}
		}`,
				{
						variables: {uri}
				}
		);
		return data?.pageBy
}


/* Get Main Pricing Page Data */
export async function getPricingPageWithSlug(uri) {

		const data = await fetchAPI(
				`
		query pagebyslug($uri: String) {
			pageBy(uri: $uri) {
				slug
				content
				featuredImage {
					node {
						sourceUrl
					}
				}
				title
				seo {
					metaDesc
					title
					breadcrumbs {
						text
						url
					}
				}
				pricingPageData {
					mainHeading
					packages {
						title
						packageFor
						monthlyPrice
						yearlyPrice
						noOfUsers
						whatsIncludedTitle
						packageDetails {
							point
						}
						additionalTitle
						desc
						additionalDetails {
							point
						}
						orderNowLink
						icon {
							sourceUrl
						}
					}
					addonsSection {
						title
						addonsData {
							icon {
								sourceUrl
							}
							title
							text
							link
						}
					}
					gotCoveredSection {
						title
						coveredData {
							icon {
								sourceUrl
							}
							title
							text
						}
					}
					faqSection {
						title
						desc
						qa {
							q
							a
						}
					}
				}
			}
		}
		`,
				{
						variables: {uri}
				}
		)

		return data?.pageBy

}

/* Get Main Feature & Industry Page Data */
export async function getFeaturePageWithSlug(uri) {

		const data = await fetchAPI(
				`
		query pagebyslug($uri: String) {
			pageBy(uri: $uri) {
				slug
				content
				featuredImage {
					node {
						sourceUrl
					}
				}
				title
				seo {
					metaDesc
					title
					breadcrumbs {
						text
						url
					}
				}
				mainFeaturePage {
					mainHeading
					subHeading
					featureData {
						title
						description
						link
						icon {
							sourceUrl
						}
					}
				}
			}
		}
		`,
				{
						variables: {uri}
				}
		)

		return data?.pageBy

}

/* Get Homepage Data */
export async function getHomePageWithSlug(uri) {

		const data = await fetchAPI(
				`
		query pagebyslug($uri: String) {
			pageBy(uri: $uri) {
				slug
				content
				featuredImage {
					node {
						sourceUrl
					}
				}
				title
				seo {
					metaDesc
					title
					breadcrumbs {
						text
						url
					}
				}
				homepage {
					mainHeading
					subHeading
					bannerImage {
						sourceUrl
					}
					stats {
						stat
						label
					}
					solutionFields {
						heading
						description
						solutions {
							title
							heading
							content
							link
							playstoreLink
							iosLink
							image {
								sourceUrl
							}
							barcode {
								sourceUrl
							}
						}
					}
					controlFields {
						heading
						description
						videoImage {
								sourceUrl
						}
						video
					}
					featuresFields {
						heading
						description
						features {
							title
							heading
							content
							link
							image {
								sourceUrl
							}
						}
					}
					pricingFields {
						heading
						description
						packages {
							title
							content
							link
							image {
								sourceUrl
							}
							workshop
							mobilevan
						}
					}
					industryFields {
						heading
						industries {
							title
							link
							image {
								sourceUrl
							}
						}
					}
					howWeDoItText
					howWeDoItImage{
						sourceUrl
					}
					howWeDoItLabel{
						label
					}
				}
			}
		}
		`,
				{
						variables: {uri}
				}
		)

		return data?.pageBy

}

/* Page Header Logo */
export async function getHeaderLogoImage() {
		const data = await fetchAPI(`
		query HeaderLogoSettings {
			themeGeneralSettings {
				themeSettings {
					headerLogo {
						sourceUrl
					}
					headerScrollLogo {
						sourceUrl
					}
				}
			}
		}
	`)
		return data?.themeGeneralSettings.themeSettings
}


/* Page Header Image */
export async function getHeaderBgImage() {
		const data = await fetchAPI(`
		query HeaderSettings {
			themeGeneralSettings {
				themeSettings {
					headerImage {
						sourceUrl
					}
				}
			}
		}
	`)
		return data?.themeGeneralSettings?.themeSettings?.headerImage?.sourceUrl
}

/* Header Menu Items */
export async function getHeaderMenu() {
		const data = await fetchAPI(`
		query MENU_ITEMS {
			menuItems(where: {location: PRIMARY}, first: 50) {
				nodes {
					key: id
					parentId
					title: label
					url
					cssClasses
					uri
				}
			}
		}
	`)

		return flatListToHierarchical(data.menuItems.nodes);
}

const flatListToHierarchical = (
		data = [],
		{idKey = 'key', parentKey = 'parentId', childrenKey = 'children'} = {}
) => {
		const tree = [];
		const childrenOf = {};
		data.forEach((item) => {
				const newItem = {...item};
				newItem.uri = newItem.uri.endsWith('/') ? newItem.uri.slice(0, -1) : newItem.uri;
				const {[idKey]: id, [parentKey]: parentId = 0} = newItem;
				childrenOf[id] = childrenOf[id] || [];
				newItem[childrenKey] = childrenOf[id];
				parentId
						? (
								childrenOf[parentId] = childrenOf[parentId] || []
						).push(newItem)
						: tree.push(newItem);
		});
		return tree;
};

/* Get Footer Settings */
export async function getFooterSettings() {
		const data = await fetchAPI(`
		query footerSettings {
			themeFooterSettings {
				footerSettings {
					copyright
					socialLinks {
						href
						icon
						title
					}
					otherLinks {
						links {
							href
							title
						}
						title
					}
					newsLetter {
						primaryButton {
							backgroundColor
							fieldGroupName
							href
							title
						}
						title
						visibleSection
					}
					globalLinks {
						href
						title
					}
					demoSection {
						backgroundImage {
							sourceUrl
						}
						primaryButton {
							backgroundColor
							href
							title
						}
						secondaryButton {
							backgroundColor
							href
							title
						}
						subTitle
						title
						visibleSection
						logo {
							sourceUrl
						}
					}
					footerLogo {
						sourceUrl
					}
					plans {
						href
						title
					}
					bookDemoGroup {
						bookDemoHeading
						bookDemoBtnText
						bookDemoLink
					}
				}
			}
		}
	`);
		return data?.themeFooterSettings;
}

/* Latest Posts for footer slider */
export async function getLatestPosts(limit: number = 9) {
		const data = await fetchAPI(`
		query latestPosts {
			posts(where: {orderby: {field: DATE, order: DESC}, status: PUBLISH}, first: ${limit}) {
				edges {
					cursor
					node {
						author {
							node {
								avatar {
									url
									default
								}
								name
								slug
							}
						}
						categories {
							edges {
								isPrimary
								node {
									name
									slug
								}
							}
						}
						id
						slug
						title
						status
						date
						featuredImage {
							node {
								sourceUrl
							}
						}
						excerpt
					}
				}
			}
		}
	`);
		return data?.posts?.edges;
}

export async function getOurPartners() {
		const data = await fetchAPI(`
				query ourPartners {
					themeAffiliatePartnersSettings {
						our_affiliate_partners {
							ourAffiliatePartners {
								title
								brandLogo {
									title
									sourceUrl
								}
							}
							ourAffiliatePartnersRight {
								title
								brandLogo {
									title
									sourceUrl
								}
							}
						}
					}
				}
		`);
		return data?.themeAffiliatePartnersSettings?.our_affiliate_partners;
}

export async function getTestimonials() {
		const data = await fetchAPI(`
				query getTestimonials {
						themeTestimonialSettings {
								testimonial {
									subtitle
									title
									testimonialList {
										avatar {
											sourceUrl
										}
										comment
										userName
										userPosition
									}
								}
						}
				}
		`);
		return data?.themeTestimonialSettings?.testimonial;
}

/* Get Single Post Data */
export async function getPostwithSlug(uri) {

		const data = await fetchAPI(
				`
		query postbyslug($uri: String) {
			postBy(slug: $uri) {
				id
				title
				slug
				content
				date
				featuredImage {
					node {
						sourceUrl
					}
				}
				seo {
					breadcrumbs {
						text
						url
					}
					metaDesc
					title
				}
				author {
					node {
						name
					}
				}
			}
		}
		`,
				{
						variables: {uri}
				}
		)

		return data?.postBy
}

/* Partner Form Country Field */
export async function getCountries() {
		const headers = {'Content-Type': 'application/json'}


		// WPGraphQL Plugin must be enabled
		const res = await fetch("https://reactdevapi.fiiviq.com/countries/index.json", {
				headers,
				method: 'POST',
				body: JSON.stringify({get: 'all'})
		})

		const json = await res.json()
		if (json.errors) {
				console.error(json.errors)
				throw new Error('Failed to fetch API')
		}
		return json.data?.Countries
}

/* Partner Form State Field */
export async function getStates(country: number) {
		const headers = {'Content-Type': 'application/json'}


		// WPGraphQL Plugin must be enabled
		const res = await fetch("https://reactdevapi.fiiviq.com/states/index.json", {
				headers,
				method: 'POST',
				body: JSON.stringify({
						"conditions": {"country_id": country},
						get: 'all'
				})
		})

		const json = await res.json()
		if (json.errors) {
				console.error(json.errors)
				throw new Error('Failed to fetch API')
		}
		return json.data?.States
}

/* Get Blog Page Data */
export async function getBlogPage() {
		const data = await fetchAPI(`
				query getPage {
					pages(where: {search: "blog"}) {
						nodes {
							slug
							title
							seo {
								metaDesc
								title
								breadcrumbs {
									text
									url
								}
							}
						}
					}
				}
		`);

		return data?.pages?.nodes;
}

/* Get All Posts */
export async function getAllPosts(post) {
		const data = await fetchAPI(`
		query allPosts {
			posts(
				where: {orderby: {field: DATE, order: DESC}, status: PUBLISH}
				first: 1000
				after: "${post}"
			) {
				edges {
					cursor
					node {
						author {
								node {
									avatar {
										url
										default
									}
									name
									slug
								}
							}
							categories {
								edges {
									isPrimary
									node {
										name
										slug
									}
								}
							}
							slug
							title
							status
							date
							featuredImage {
								node {
									sourceUrl
								}
							}
					}
				}
			}
		}
	`);
		return data?.posts?.edges;
}

export async function getPopUpSetting() {
		const data = await fetchAPI(`
				query popupSetting {
					themePopupSettings {
						popupSetting {
							bookDemoUrl
							popupTitle
							leftImage {
								sourceUrl
							}
						}
					}
				}
		`);
		return data?.themePopupSettings?.popupSetting;
}
