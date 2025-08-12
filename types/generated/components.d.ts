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

export interface CardsPageBanner extends Struct.ComponentSchema {
  collectionName: 'components_cards_page_banners';
  info: {
    displayName: 'PageBanner';
  };
  attributes: {
    Banner: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    heading: Schema.Attribute.String;
    subHeading: Schema.Attribute.String;
  };
}

export interface CardsPlainTextCard extends Struct.ComponentSchema {
  collectionName: 'components_cards_plain_text_cards';
  info: {
    displayName: 'PlainTextCard';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface CardsPropertyCard extends Struct.ComponentSchema {
  collectionName: 'components_cards_property_cards';
  info: {
    displayName: 'PropertyCard';
  };
  attributes: {
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
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

export interface SignatueTableSectionSignatureTableSection
  extends Struct.ComponentSchema {
  collectionName: 'components_signatue_table_section_signature_table_sections';
  info: {
    displayName: 'Signature Table Section';
  };
  attributes: {
    tableSection: Schema.Attribute.Component<
      'signature-table-row.signature-table',
      true
    >;
  };
}

export interface SignatureTableRowSignatureTable
  extends Struct.ComponentSchema {
  collectionName: 'components_signature_table_row_signature_tables';
  info: {
    displayName: 'Signature Table';
  };
  attributes: {
    label: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface TabelSectionSignatureTableSection
  extends Struct.ComponentSchema {
  collectionName: 'components_tabel_section_signature_table_sections';
  info: {
    displayName: 'Signature Table Section';
  };
  attributes: {
    tableSection: Schema.Attribute.Component<'table.signature-table', true>;
  };
}

export interface TableSignatureTable extends Struct.ComponentSchema {
  collectionName: 'components_table_signature_tables';
  info: {
    displayName: 'Signature Table Row';
  };
  attributes: {
    label: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface TableTableRow extends Struct.ComponentSchema {
  collectionName: 'components_table_table_rows';
  info: {
    displayName: 'tableRow';
  };
  attributes: {
    keyConditions: Schema.Attribute.String;
    typeOfLease: Schema.Attribute.String;
    typeOfTransfer: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'cards.media-card': CardsMediaCard;
      'cards.page-banner': CardsPageBanner;
      'cards.plain-text-card': CardsPlainTextCard;
      'cards.property-card': CardsPropertyCard;
      'common.text-block': CommonTextBlock;
      'faq.q-and-a': FaqQAndA;
      'full-screen-banner.banner': FullScreenBannerBanner;
      'signatue-table-section.signature-table-section': SignatueTableSectionSignatureTableSection;
      'signature-table-row.signature-table': SignatureTableRowSignatureTable;
      'tabel-section.signature-table-section': TabelSectionSignatureTableSection;
      'table.signature-table': TableSignatureTable;
      'table.table-row': TableTableRow;
    }
  }
}
