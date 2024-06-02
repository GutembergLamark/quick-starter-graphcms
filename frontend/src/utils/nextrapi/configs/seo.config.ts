export default {
    seoQuery: `
    seo{
      metaTitle
      metaDescription
      metaImage{
        data{
          attributes{
            url
            width
            height
          }
        }
      }
      metaSocial{
        title
        description
        socialNetwork
        image{
          data{
            attributes{
              url
              width
              height
            }
          }
        }
      }
      keywords
      metaRobots
      structuredData
      metaViewport
      canonicalURL
    }
  `,
}