import qs from "qs";
import { notFound } from "next/navigation";

import { fetchAPI } from "@/lib/fetch-api";
import { getStrapiURL } from "@/lib/utils";
import { blockRenderer } from "@/lib/block-renderer";
import { Block } from "@/types";

const homePageQuery = qs.stringify({
  populate: {
    blocks: {
      on: {
        "blocks.hero": {
          populate: {
            image: {
              fields: ["url", "alternativeText"],
            },
            links: true,
          },
        },
        "blocks.card-carousel": {
          populate: {
            cards: true,
          },
        },
        "blocks.heading": true,
      },
    },
  },
});

async function loader() {
  // const authToken = process.env.STRAPI_API_TOKEN;
  const BASE_URL = getStrapiURL();
  const path = "/api/home-page";
  const url = new URL(path, BASE_URL);

  url.search = homePageQuery;

  const data = await fetchAPI(url.href, {
    method: "GET",
  });

  if (!data.data) notFound();

  const blocks = data?.data?.blocks || [];
  return { blocks };
}

export default async function HomeRoute() {
  const data = await loader();
  const blocks = data.blocks;
  // console.dir(blocks, "blocks");
  return (
    <div>
      {blocks.map((block: Block, index: number) => {
        return blockRenderer(block, index);
      })}
    </div>
  );
}

// const mockData = {
//   heading: {
//     id: 1,
//     documentId: "1",
//     subHeading: "Welcome to Coding After Thirty",
//     heading: "Building LMS with Next.js and Strapi 5",
//     text: "This is a project that I am currently building to use as an example and learn more on how to create Learning Management Systems.",
//   },
//   hero: {
//     id: 1,
//     documentId: "1",
//     subHeading: "Welcome to Coding After Thirty",
//     heading: "Building LMS with Next.js and Strapi 5",
//     text: "This is a project that I am currently building to use as an example and learn more on how to create Learning Management Systems.",
//     links: [
//       {
//         id: 1,
//         label: "Get Started",
//         href: "auth/signup",
//         isExternal: false,
//       },
//       {
//         id: 2,
//         label: "Learn More",
//         href: "/",
//         isExternal: false,
//       },
//     ],
//     image: {
//       src: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//       alt: "A placeholder image",
//       width: 600,
//       height: 400,
//     },
//   },
//   cardCarousel: {
//     id: 1,
//     documentId: "1",
//     cardCarouselItems: [
//       {
//         id: 1,
//         documentId: "1",
//         heading: "Visual Builder",
//         subHeading:
//           "Edit HTML, Tailwind & React components with a visual builder and see your changes in real-time.",
//         icon: "Palette",
//       },
//       {
//         id: 2,
//         documentId: "2",
//         heading: "Interactive Learning",
//         subHeading:
//           "Learn through hands-on exercises and real-world projects with immediate feedback and guidance.",
//         icon: "Download",
//       },
//       {
//         id: 3,
//         documentId: "3",
//         heading: "Progress Tracking",
//         subHeading:
//           "Monitor your learning journey with detailed analytics and achievement milestones.",
//         icon: "Sparkles",
//       },
//     ],
//   },
// };
