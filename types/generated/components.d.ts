import type { Schema, Struct } from '@strapi/strapi';

export interface CardsMediaCard extends Struct.ComponentSchema {
  collectionName: 'components_cards_media_cards';
  info: {
    displayName: 'mediaCard';
    icon: 'filter';
  };
  attributes: {
    buttonLink: Schema.Attribute.String;
    buttonText: Schema.Attribute.String;
    descriptionText: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    label: Schema.Attribute.String;
  };
}

export interface CardsOfficeCard extends Struct.ComponentSchema {
  collectionName: 'components_cards_office_cards';
  info: {
    displayName: 'Office Card';
    icon: 'briefcase';
  };
  attributes: {
    addressLine1: Schema.Attribute.String;
    addressLine2: Schema.Attribute.String;
    addressText: Schema.Attribute.String;
    branchName: Schema.Attribute.String;
    buttonLink: Schema.Attribute.String;
    buttonText: Schema.Attribute.String;
    callText: Schema.Attribute.String;
    contactNumber: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    locationName: Schema.Attribute.String;
    note: Schema.Attribute.String;
    workingHours: Schema.Attribute.JSON;
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
    discoverButton: Schema.Attribute.String;
    discoverButtonLink: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    subHeading: Schema.Attribute.String;
    subHeadingLineTwo: Schema.Attribute.String;
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
    carouselLink: Schema.Attribute.String;
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

export interface FeaturesIconFeatureIcon extends Struct.ComponentSchema {
  collectionName: 'components_features_icon_feature_icons';
  info: {
    displayName: 'feature Icon';
  };
  attributes: {
    Icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface FormCareerForm extends Struct.ComponentSchema {
  collectionName: 'components_form_career_forms';
  info: {
    displayName: 'Career Form';
    icon: 'bulletList';
  };
  attributes: {
    name: Schema.Attribute.String;
    options: Schema.Attribute.JSON;
    placeholder: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['text', 'email', 'tel', 'select']>;
  };
}

export interface FullScreenBannerBanner extends Struct.ComponentSchema {
  collectionName: 'components_full_screen_banner_banners';
  info: {
    displayName: 'heroBanner';
  };
  attributes: {
    bannerText: Schema.Attribute.String;
    bannerTextLineTwo: Schema.Attribute.String;
    fullScreenBanner: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface GuideSectionGuides extends Struct.ComponentSchema {
  collectionName: 'components_guide_section_guides';
  info: {
    displayName: 'Guides';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    Icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface MenuItemsMenuItems extends Struct.ComponentSchema {
  collectionName: 'components_menu_items_menu_items';
  info: {
    displayName: 'menu-items';
  };
  attributes: {
    link: Schema.Attribute.String;
    subMenuItem: Schema.Attribute.Component<'menu-items.sub-menu-items', true>;
    title: Schema.Attribute.String;
  };
}

export interface MenuItemsSubMenuItems extends Struct.ComponentSchema {
  collectionName: 'components_menu_items_sub_menu_items';
  info: {
    displayName: 'sub-menu-Items';
  };
  attributes: {
    link: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface RichFaqRichFaq extends Struct.ComponentSchema {
  collectionName: 'components_rich_faq_rich_faqs';
  info: {
    displayName: 'RichFAQ';
  };
  attributes: {
    Answer: Schema.Attribute.Blocks;
    Question: Schema.Attribute.String;
  };
}

export interface SeoSeo extends Struct.ComponentSchema {
  collectionName: 'components_seo_seos';
  info: {
    displayName: 'SEO';
  };
  attributes: {
    canonicalURL: Schema.Attribute.String;
    metaDescription: Schema.Attribute.Text;
    metaTitle: Schema.Attribute.String;
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
      'cards.office-card': CardsOfficeCard;
      'cards.page-banner': CardsPageBanner;
      'cards.plain-text-card': CardsPlainTextCard;
      'cards.property-card': CardsPropertyCard;
      'common.text-block': CommonTextBlock;
      'faq.q-and-a': FaqQAndA;
      'features-icon.feature-icon': FeaturesIconFeatureIcon;
      'form.career-form': FormCareerForm;
      'full-screen-banner.banner': FullScreenBannerBanner;
      'guide-section.guides': GuideSectionGuides;
      'menu-items.menu-items': MenuItemsMenuItems;
      'menu-items.sub-menu-items': MenuItemsSubMenuItems;
      'rich-faq.rich-faq': RichFaqRichFaq;
      'seo.seo': SeoSeo;
      'signatue-table-section.signature-table-section': SignatueTableSectionSignatureTableSection;
      'signature-table-row.signature-table': SignatureTableRowSignatureTable;
      'tabel-section.signature-table-section': TabelSectionSignatureTableSection;
      'table.signature-table': TableSignatureTable;
      'table.table-row': TableTableRow;
    }
  }
}
