const sanityClient = require('@sanity/client')

const client = sanityClient({
  projectId: process.env.PUBLIC_NEXT_SANITY_PROJECT_ID,
  dataset: process.env.PUBLIC_NEXT_SANITY_DATASET,
  token: process.env.PUBLIC_NEXT_SANITY_TOKEN,
  useCdn: true,
})

export default client;
