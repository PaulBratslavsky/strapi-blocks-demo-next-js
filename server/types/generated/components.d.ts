import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksCardCarousel extends Struct.ComponentSchema {
  collectionName: 'components_blocks_card_carousels';
  info: {
    displayName: 'Card Carousel';
  };
  attributes: {
    cards: Schema.Attribute.Component<'elements.card', true>;
  };
}

export interface BlocksHeading extends Struct.ComponentSchema {
  collectionName: 'components_blocks_headings';
  info: {
    displayName: 'Heading';
  };
  attributes: {
    heading: Schema.Attribute.String;
    linkId: Schema.Attribute.String;
    subHeading: Schema.Attribute.String;
    text: Schema.Attribute.Text;
  };
}

export interface BlocksHero extends Struct.ComponentSchema {
  collectionName: 'components_blocks_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    links: Schema.Attribute.Component<'elements.link', true>;
    subHeading: Schema.Attribute.String;
    text: Schema.Attribute.Text;
  };
}

export interface ElementsCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_cards';
  info: {
    displayName: 'Card';
  };
  attributes: {
    heading: Schema.Attribute.String;
    icon: Schema.Attribute.Enumeration<['Palette', 'Download', 'Sparkles']>;
    image: Schema.Attribute.Media<'images'>;
    link: Schema.Attribute.Component<'elements.link', false>;
    subHeading: Schema.Attribute.String;
    text: Schema.Attribute.Text;
  };
}

export interface ElementsLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_links';
  info: {
    description: '';
    displayName: 'Link';
  };
  attributes: {
    href: Schema.Attribute.String;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String;
    style: Schema.Attribute.Enumeration<['PRIMARY', 'SECONDARY']>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.card-carousel': BlocksCardCarousel;
      'blocks.heading': BlocksHeading;
      'blocks.hero': BlocksHero;
      'elements.card': ElementsCard;
      'elements.link': ElementsLink;
    }
  }
}
