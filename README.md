# Readme.tw
This project uses GatsbyJS to build a ReactJS static site. 
The data layer is handled via GraphQL and calls to a Strapi site. Details
for the location can be changed [here](gatsby-config.js).

## Getting Started

`git clone git@github.com:gcko/readme_tw.git`

This project uses docker for development and production.

### Development

`docker-compose up`

### Production

`docker-compose -f docker-compose-prod.yml up`
