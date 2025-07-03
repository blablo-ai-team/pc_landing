/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://blablo.co',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: ['/admin', '/internal'], // nếu có
}
