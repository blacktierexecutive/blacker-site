import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.blacktierexecutive.com";

  const routes = [
    "",
    "/services",
    "/fleet",
    "/contact",
    "/about",
    "/book",

    "/boston-charter-bus",
    "/boston-corporate-shuttle",
    "/boston-minibus-rental",
    "/motorcoach-rental-boston",
    "/sprinter-van-boston",

    "/airport-shuttle-boston",
    "/logan-airport-group-transportation",
    "/boston-airport-car-service",

    "/cambridge-charter-bus",
    "/cambridge-corporate-shuttle",
    "/cambridge-tech-shuttle",

    "/waltham-charter-bus",
    "/waltham-corporate-bus",
    "/waltham-employee-shuttle",

    "/seaport-corporate-shuttle",
    "/kendall-square-corporate-shuttle",
    "/watertown-corporate-shuttle",

    "/corporate-bus-rental-boston",
    "/event-bus-rental-boston",
    "/conference-transportation-boston",
    "/hotel-shuttle-boston",
    "/employee-commuter-shuttle-boston",
    "/wedding-shuttle-boston",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}