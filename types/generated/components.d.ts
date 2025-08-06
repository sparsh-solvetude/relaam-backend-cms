import type { Schema, Struct } from '@strapi/strapi';

export interface CardsMediaCard extends Struct.ComponentSchema {
  collectionName: 'components_cards_media_cards';
  info: {
    displayName: 'mediaCard';
    icon: 'filter';
  };
  attributes: {
    descriptionText: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    label: Schema.Attribute.String;
  };
}

export interface CardsPlainTextCard extends Struct.ComponentSchema {
  collectionName: 'components_cards_plain_text_cards';
  info: {
    displayName: 'PlainTextCard';
  };
  attributes: {
    description: Schema.Attribute.Text;
    descriptionParagraphs: Schema.Attribute.Blocks;
    heading: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

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

export interface CommonTextBlock extends Struct.ComponentSchema {
  collectionName: 'components_common_text_blocks';
  info: {
    displayName: 'TextBlock';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
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

export interface FullScreenBannerBanner extends Struct.ComponentSchema {
  collectionName: 'components_full_screen_banner_banners';
  info: {
    displayName: 'heroBanner';
  };
  attributes: {
    bannerText: Schema.Attribute.String;
    fullScreenBanner: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'cards.media-card': CardsMediaCard;
      'cards.plain-text-card': CardsPlainTextCard;
      'cards.property-card': CardsPropertyCard;
      'common.text-block': CommonTextBlock;
      'faq.q-and-a': FaqQAndA;
      'full-screen-banner.banner': FullScreenBannerBanner;
    }
  }
}
