import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.blacktierexecutive.com";

  const routes = [
    "",
    "/about",
    "/book",
    "/contact",
    "/fleet",
    "/service-area",
    "/services",

    "/airport-shuttle-boston",
    "/boston-airport-car-service",
    "/boston-airport-group-shuttle",
    "/boston-charter-bus",
    "/boston-convention-shuttle",
    "/boston-corporate-shuttle",
    "/boston-minibus-rental",
    "/cambridge-charter-bus",
    "/cambridge-corporate-shuttle",
    "/cambridge-tech-shuttle",
    "/conference-transportation-boston",
    "/corporate-bus-rental-boston",
    "/employee-commuter-shuttle-boston",
    "/event-bus-rental-boston",
    "/hospital-transportation-boston",
    "/hotel-shuttle-boston",
    "/kendall-square-corporate-shuttle",
    "/logan-airport-group-transportation",
    "/motorcoach-rental-boston",
    "/newton-charter-bus",
    "/seaport-charter-bus",
    "/seaport-corporate-shuttle",
    "/sprinter-van-boston",
    "/waltham-charter-bus",
    "/waltham-corporate-bus",
    "/waltham-employee-shuttle",
    "/watertown-corporate-shuttle",
    "/wedding-shuttle-boston",

    "/blog/boston-airport-car-service",
    "/blog/boston-to-nyc-car-service",
    "/blog/boston-wedding-transportation",
    "/blog/corporate-transportation-boston",
    "/blog/logan-airport-pickup-guide",
    "/blog/sprinter-van-boston",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}