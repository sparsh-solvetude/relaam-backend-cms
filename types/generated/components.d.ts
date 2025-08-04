import type { Schema, Struct } from '@strapi/strapi';

export interface CardsPropertyCard extends Struct.ComponentSchema {
  collectionName: 'components_cards_property_cards';
  info: {
    displayName: 'PropertyCard';
  };
  attributes: {
    Image: Schema.Attribute.Media<'images'>;
    Title: Schema.Attribute.String;
  };
}

export interface FaqQAndA extends Struct.ComponentSchema {
  collectionName: 'components_faq_q_and_as';
  info: {
    displayName: 'Q&A';
  };
  attributes: {
    Answer: Schema.Attribute.Text;
    Question: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'cards.property-card': CardsPropertyCard;
      'faq.q-and-a': FaqQAndA;
    }
  }
}
