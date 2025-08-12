import type { Schema, Struct } from '@strapi/strapi';

export interface AdminApiToken extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_api_tokens';
  info: {
    description: '';
    displayName: 'Api Token';
    name: 'Api Token';
    pluralName: 'api-tokens';
    singularName: 'api-token';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    accessKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<''>;
    encryptedKey: Schema.Attribute.Text &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    expiresAt: Schema.Attribute.DateTime;
    lastUsedAt: Schema.Attribute.DateTime;
    lifespan: Schema.Attribute.BigInteger;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::api-token'> &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'admin::api-token-permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    type: Schema.Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'read-only'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_api_token_permissions';
  info: {
    description: '';
    displayName: 'API Token Permission';
    name: 'API Token Permission';
    pluralName: 'api-token-permissions';
    singularName: 'api-token-permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::api-token-permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    token: Schema.Attribute.Relation<'manyToOne', 'admin::api-token'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminPermission extends Struct.CollectionTypeSchema {
  collectionName: 'admin_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'Permission';
    pluralName: 'permissions';
    singularName: 'permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<{}>;
    conditions: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<[]>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::permission'> &
      Schema.Attribute.Private;
    properties: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<{}>;
    publishedAt: Schema.Attribute.DateTime;
    role: Schema.Attribute.Relation<'manyToOne', 'admin::role'>;
    subject: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminRole extends Struct.CollectionTypeSchema {
  collectionName: 'admin_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'Role';
    pluralName: 'roles';
    singularName: 'role';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    code: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::role'> &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<'oneToMany', 'admin::permission'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    users: Schema.Attribute.Relation<'manyToMany', 'admin::user'>;
  };
}

export interface AdminTransferToken extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_transfer_tokens';
  info: {
    description: '';
    displayName: 'Transfer Token';
    name: 'Transfer Token';
    pluralName: 'transfer-tokens';
    singularName: 'transfer-token';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    accessKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<''>;
    expiresAt: Schema.Attribute.DateTime;
    lastUsedAt: Schema.Attribute.DateTime;
    lifespan: Schema.Attribute.BigInteger;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminTransferTokenPermission
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    description: '';
    displayName: 'Transfer Token Permission';
    name: 'Transfer Token Permission';
    pluralName: 'transfer-token-permissions';
    singularName: 'transfer-token-permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token-permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    token: Schema.Attribute.Relation<'manyToOne', 'admin::transfer-token'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminUser extends Struct.CollectionTypeSchema {
  collectionName: 'admin_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'User';
    pluralName: 'users';
    singularName: 'user';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    blocked: Schema.Attribute.Boolean &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    firstname: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    isActive: Schema.Attribute.Boolean &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<false>;
    lastname: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::user'> &
      Schema.Attribute.Private;
    password: Schema.Attribute.Password &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    preferedLanguage: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    registrationToken: Schema.Attribute.String & Schema.Attribute.Private;
    resetPasswordToken: Schema.Attribute.String & Schema.Attribute.Private;
    roles: Schema.Attribute.Relation<'manyToMany', 'admin::role'> &
      Schema.Attribute.Private;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    username: Schema.Attribute.String;
  };
}

export interface ApiAboutPageAboutPage extends Struct.SingleTypeSchema {
  collectionName: 'about_pages';
  info: {
    displayName: 'About page';
    pluralName: 'about-pages';
    singularName: 'about-page';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    aboutBanner: Schema.Attribute.Media<'images'> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    aboutBannerTexts: Schema.Attribute.JSON &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    aboutDescription: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    aboutHeading: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    aboutTitle: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::about-page.about-page'
    >;
    metaDescription: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    promiseCardDescription: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    promiseCardImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    > &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    promiseHeading: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    promiseTitle: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    publishedAt: Schema.Attribute.DateTime;
    purposeCardDescription: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    purposeCardImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    > &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    purposeHeading: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    purposeTitle: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    topBanner: Schema.Attribute.Component<'full-screen-banner.banner', false> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    values: Schema.Attribute.Component<'cards.media-card', true> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface ApiCareerPageCareerPage extends Struct.SingleTypeSchema {
  collectionName: 'career_pages';
  info: {
    displayName: 'Career Page';
    pluralName: 'career-pages';
    singularName: 'career-page';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    benefitsHeading: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    benefitsList: Schema.Attribute.Component<'common.text-block', true> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    brandNameForTitle: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    careerDescription: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    careerInfoHeading: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    careerInfoParagraph: Schema.Attribute.Component<'common.text-block', true> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    careerTitle: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    formDescription: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    formTitle: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::career-page.career-page'
    >;
    metaDescription: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    publishedAt: Schema.Attribute.DateTime;
    topBanner: Schema.Attribute.Component<'full-screen-banner.banner', false> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiFacilityManagementPageFacilityManagementPage
  extends Struct.SingleTypeSchema {
  collectionName: 'facility_management_pages';
  info: {
    displayName: 'Facility Management Page';
    pluralName: 'facility-management-pages';
    singularName: 'facility-management-page';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    contactNo: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    contractorDescription: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    contractorTitle: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    facilityDescription: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    facilityManagementTitle: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    FAQChat: Schema.Attribute.Component<'faq.q-and-a', true> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    FMBanner: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    FMCrousel: Schema.Attribute.Component<'cards.property-card', true> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    heading: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    landlordBanner: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    > &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    landlordButton: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    landlordDescription: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    landlordTitle: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::facility-management-page.facility-management-page'
    >;
    publishedAt: Schema.Attribute.DateTime;
    registerTitle: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    registrationForm: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    subHeading: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    tenantsBanner: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    > &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    tenantsButton: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    tenantsDescription: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    tenantsTitle: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    tocBanner: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    > &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    tocButton: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    tocDescription: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    typeOfContractorHeading: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiHomePageHomePage extends Struct.SingleTypeSchema {
  collectionName: 'home_pages';
  info: {
    displayName: 'Home Page';
    pluralName: 'home-pages';
    singularName: 'home-page';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    aboutBanner: Schema.Attribute.Media<'images'> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    aboutHeading: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    aboutSubheading: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    aboutTitle: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    discoverButton: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    FAQChat: Schema.Attribute.Component<'faq.q-and-a', true> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    FAQHeading: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    FAQSubheading: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    FAQTitle: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    FeaturedCarousel: Schema.Attribute.Component<'cards.property-card', true> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    FeaturedHeading: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    FeaturedTitle: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::home-page.home-page'
    >;
    publishedAt: Schema.Attribute.DateTime;
    ServiceCarousel: Schema.Attribute.Component<'cards.property-card', true> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    ServiceDescription: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    ServiceHeading: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    ServiceTitle: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Showcase: Schema.Attribute.Component<'cards.page-banner', true> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    SignatureButton: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    SignatureHeading: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    SignatureImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    > &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    SignatureSubHeading: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    SignatureTitle: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiLegacyPageLegacyPage extends Struct.SingleTypeSchema {
  collectionName: 'legacy_pages';
  info: {
    displayName: 'Legacy Page';
    pluralName: 'legacy-pages';
    singularName: 'legacy-page';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    identityTransition: Schema.Attribute.Component<'cards.media-card', true> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::legacy-page.legacy-page'
    >;
    publishedAt: Schema.Attribute.DateTime;
    rebrandDescription: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    rebrandHeading: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    rebrandStory: Schema.Attribute.Component<'cards.media-card', true> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    rebrandSubDescription: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    rebrandTitle: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    topBanner: Schema.Attribute.Component<'full-screen-banner.banner', false> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiNeighborhoodPageSlugNeighborhoodPageSlug
  extends Struct.CollectionTypeSchema {
  collectionName: 'neighborhood_page_slugs';
  info: {
    displayName: 'Neighborhood Page Slug';
    pluralName: 'neighborhood-page-slugs';
    singularName: 'neighborhood-page-slug';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    banner: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description1: Schema.Attribute.Text;
    description2: Schema.Attribute.Text;
    description3: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::neighborhood-page-slug.neighborhood-page-slug'
    > &
      Schema.Attribute.Private;
    POCrousel: Schema.Attribute.Component<'cards.property-card', true>;
    PSBanner: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    PSButton: Schema.Attribute.String;
    PSDescription: Schema.Attribute.Text;
    PSHeading: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    slug: Schema.Attribute.UID<'url'> & Schema.Attribute.Required;
    slugDescription: Schema.Attribute.Text;
    slugHeading: Schema.Attribute.String;
    slugSubHeading: Schema.Attribute.String;
    title: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    url: Schema.Attribute.String;
  };
}

export interface ApiNeighborhoodPageNeighborhoodPage
  extends Struct.SingleTypeSchema {
  collectionName: 'neighborhood_pages';
  info: {
    displayName: 'Neighborhood Page';
    pluralName: 'neighborhood-pages';
    singularName: 'neighborhood-page';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    ADBanner: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    ADButton: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    ADHeading: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    ADSubHeading: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    ALBanner: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    ALButton: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    ALHeading: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    ALSubHeading: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    heading: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    LAResidenceBanner: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    > &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    LaResidenceButton: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    LAResidenceHeading: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    LAResidenceSubHeading: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::neighborhood-page.neighborhood-page'
    >;
    NBanner: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    NeighborhoodCraousel: Schema.Attribute.Component<
      'cards.property-card',
      true
    > &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    OVDescription: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    overViewHeading: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    overViewSubHeading: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    overviewTitle: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    publishedAt: Schema.Attribute.DateTime;
    SPTitle: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiNeighorhoodMbzPageNeighorhoodMbzPage
  extends Struct.SingleTypeSchema {
  collectionName: 'neighorhood_mbz_pages';
  info: {
    displayName: 'Neighorhood  MBZ Page';
    pluralName: 'neighorhood-mbz-pages';
    singularName: 'neighorhood-mbz-page';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description1: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    description2: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    description3: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    heading: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::neighorhood-mbz-page.neighorhood-mbz-page'
    >;
    mbzBanner: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    > &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    mbzDescription: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    mbzHeading: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    mbzSubHeading: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    mbzTitle: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    POCrousel: Schema.Attribute.Component<'cards.property-card', true> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    PSBanner: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    PSButton: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    PSDescription: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    PSHeading: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiPropertyManagementPagePropertyManagementPage
  extends Struct.SingleTypeSchema {
  collectionName: 'property_management_pages';
  info: {
    displayName: 'Property Management Page';
    pluralName: 'property-management-pages';
    singularName: 'property-management-page';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    FAQChat: Schema.Attribute.Component<'faq.q-and-a', true> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    heading: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::property-management-page.property-management-page'
    >;
    offeringTitle: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    PMBanner: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    pmBanner2: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    > &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    PMCrousel: Schema.Attribute.Component<'cards.property-card', true> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    pmDescription1: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    pmDescription2: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    pmDescription3: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    pmHeading: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    pmSubHeading: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    pmTitle: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    publishedAt: Schema.Attribute.DateTime;
    subHeading: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiRecognitionPageRecognitionPage
  extends Struct.SingleTypeSchema {
  collectionName: 'recognition_pages';
  info: {
    displayName: 'Recognition Page';
    pluralName: 'recognition-pages';
    singularName: 'recognition-page';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    awardsDescription: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    awardsHeading: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::recognition-page.recognition-page'
    >;
    publishedAt: Schema.Attribute.DateTime;
    recognitionCards: Schema.Attribute.Component<
      'cards.plain-text-card',
      true
    > &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    topBanner: Schema.Attribute.Component<'full-screen-banner.banner', false> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiServicesLeasingServicesPageServicesLeasingServicesPage
  extends Struct.SingleTypeSchema {
  collectionName: 'services_leasing_services_pages';
  info: {
    displayName: 'Services leasing Services Page';
    pluralName: 'services-leasing-services-pages';
    singularName: 'services-leasing-services-page';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description1: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    description2: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    description3: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    description4: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    description5: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    leaseTransferDescription: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    leaseTrasferTitle: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    leasingBanner: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    > &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    leasingHeading: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    leasingServicesCrousle: Schema.Attribute.Component<
      'cards.property-card',
      true
    > &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    leasingSubHeading: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    leasingTable: Schema.Attribute.Component<'table.table-row', true> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::services-leasing-services-page.services-leasing-services-page'
    >;
    publishedAt: Schema.Attribute.DateTime;
    servicesHeading: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    servicesTitle: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    termsAndCondition: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiServicesOwnersAssociationServicesOwnersAssociation
  extends Struct.SingleTypeSchema {
  collectionName: 'services_owners_associations';
  info: {
    displayName: 'Services Owners Association';
    pluralName: 'services-owners-associations';
    singularName: 'services-owners-association';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    contractorsBanner: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    > &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    contractorsDescription1: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    contractorsDescription2: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    contractorsHeading: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    contractorsTitle: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    FAQChat: Schema.Attribute.Component<'faq.q-and-a', true> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    heading: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::services-owners-association.services-owners-association'
    >;
    ownerAssociationBanner: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    > &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    ownersAssociationCrousel: Schema.Attribute.Component<
      'cards.property-card',
      true
    > &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    publishedAt: Schema.Attribute.DateTime;
    servicesTitle: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    subHeading: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiServicesPageServicesPage extends Struct.SingleTypeSchema {
  collectionName: 'services_pages';
  info: {
    displayName: 'Services Page';
    pluralName: 'services-pages';
    singularName: 'services-page';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    featuredButton: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    featuredHeading: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    featuredImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    > &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    featuredSubHeading: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    featuredTitle: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    focusHeading: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    focusSubHeading: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    focusTitle: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    heading: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::services-page.services-page'
    >;
    publishedAt: Schema.Attribute.DateTime;
    serviceBanner: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    > &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    ServicePageCarousel: Schema.Attribute.Component<
      'cards.property-card',
      true
    > &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    SignatureButton: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    SignatureHeading: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    SignatureImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    > &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    SignatureSubHeading: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    SignatureTitle: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    subHeading: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiSignatureProjectAdOnePageSignatureProjectAdOnePage
  extends Struct.SingleTypeSchema {
  collectionName: 'signature_project_ad_one_pages';
  info: {
    displayName: 'Signature Project AD One Page';
    pluralName: 'signature-project-ad-one-pages';
    singularName: 'signature-project-ad-one-page';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    adOneBanner: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    > &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    adOneCrousel: Schema.Attribute.Component<'cards.property-card', true> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    adOneHeading: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    adOneSubHeading: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    adOneTable: Schema.Attribute.Component<
      'tabel-section.signature-table-section',
      true
    > &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description1: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    description2: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    detailTitile: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    heading: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::signature-project-ad-one-page.signature-project-ad-one-page'
    >;
    PSBanner: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    PSButton: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    PSDescription: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    psHeading: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiSignatureProjectSlugSignatureProjectSlug
  extends Struct.CollectionTypeSchema {
  collectionName: 'signature_project_slugs';
  info: {
    displayName: 'Signature Project Slug';
    pluralName: 'signature-project-slugs';
    singularName: 'signature-project-slug';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    adOneBanner: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    adOneCrousel: Schema.Attribute.Component<'cards.property-card', true>;
    adOneHeading: Schema.Attribute.String;
    adOneSubHeading: Schema.Attribute.String;
    adOneTable: Schema.Attribute.Component<
      'tabel-section.signature-table-section',
      true
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description1: Schema.Attribute.Text;
    description2: Schema.Attribute.Text;
    detailTitile: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::signature-project-slug.signature-project-slug'
    > &
      Schema.Attribute.Private;
    PSBanner: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    PSButton: Schema.Attribute.String;
    PSDescription: Schema.Attribute.Text;
    psHeading: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    slug: Schema.Attribute.UID<'URL'> & Schema.Attribute.Required;
    title: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    URL: Schema.Attribute.String;
  };
}

export interface ApiSignatureProjectSignatureProject
  extends Struct.SingleTypeSchema {
  collectionName: 'signature_projects';
  info: {
    displayName: 'Signature Project';
    pluralName: 'signature-projects';
    singularName: 'signature-project';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    i18n: {
      localized: true;
    };
  };
  attributes: {
    bannerDescription: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::signature-project.signature-project'
    >;
    metaDescription: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    overviewDescription: Schema.Attribute.Component<'common.text-block', true> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    overviewHeading: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    overviewTitle: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    projectCardButton: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    propertySearchButton: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    propertySearchCard: Schema.Attribute.Component<'cards.media-card', false> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    publishedAt: Schema.Attribute.DateTime;
    signatureProjectCards: Schema.Attribute.Component<
      'cards.media-card',
      true
    > &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    topBanner: Schema.Attribute.Component<'full-screen-banner.banner', false> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginContentReleasesRelease
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_releases';
  info: {
    displayName: 'Release';
    pluralName: 'releases';
    singularName: 'release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    actions: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    releasedAt: Schema.Attribute.DateTime;
    scheduledAt: Schema.Attribute.DateTime;
    status: Schema.Attribute.Enumeration<
      ['ready', 'blocked', 'failed', 'done', 'empty']
    > &
      Schema.Attribute.Required;
    timezone: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_release_actions';
  info: {
    displayName: 'Release Action';
    pluralName: 'release-actions';
    singularName: 'release-action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    contentType: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    entryDocumentId: Schema.Attribute.String;
    isEntryValid: Schema.Attribute.Boolean;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release-action'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    release: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::content-releases.release'
    >;
    type: Schema.Attribute.Enumeration<['publish', 'unpublish']> &
      Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginI18NLocale extends Struct.CollectionTypeSchema {
  collectionName: 'i18n_locale';
  info: {
    collectionName: 'locales';
    description: '';
    displayName: 'Locale';
    pluralName: 'locales';
    singularName: 'locale';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    code: Schema.Attribute.String & Schema.Attribute.Unique;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::i18n.locale'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.SetMinMax<
        {
          max: 50;
          min: 1;
        },
        number
      >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginReviewWorkflowsWorkflow
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_workflows';
  info: {
    description: '';
    displayName: 'Workflow';
    name: 'Workflow';
    pluralName: 'workflows';
    singularName: 'workflow';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    contentTypes: Schema.Attribute.JSON &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'[]'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    publishedAt: Schema.Attribute.DateTime;
    stageRequiredToPublish: Schema.Attribute.Relation<
      'oneToOne',
      'plugin::review-workflows.workflow-stage'
    >;
    stages: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow-stage'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginReviewWorkflowsWorkflowStage
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_workflows_stages';
  info: {
    description: '';
    displayName: 'Stages';
    name: 'Workflow Stage';
    pluralName: 'workflow-stages';
    singularName: 'workflow-stage';
  };
  options: {
    draftAndPublish: false;
    version: '1.1.0';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    color: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#4945FF'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow-stage'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String;
    permissions: Schema.Attribute.Relation<'manyToMany', 'admin::permission'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    workflow: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::review-workflows.workflow'
    >;
  };
}

export interface PluginUploadFile extends Struct.CollectionTypeSchema {
  collectionName: 'files';
  info: {
    description: '';
    displayName: 'File';
    pluralName: 'files';
    singularName: 'file';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    alternativeText: Schema.Attribute.String;
    caption: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    ext: Schema.Attribute.String;
    folder: Schema.Attribute.Relation<'manyToOne', 'plugin::upload.folder'> &
      Schema.Attribute.Private;
    folderPath: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    formats: Schema.Attribute.JSON;
    hash: Schema.Attribute.String & Schema.Attribute.Required;
    height: Schema.Attribute.Integer;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::upload.file'
    > &
      Schema.Attribute.Private;
    mime: Schema.Attribute.String & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    previewUrl: Schema.Attribute.String;
    provider: Schema.Attribute.String & Schema.Attribute.Required;
    provider_metadata: Schema.Attribute.JSON;
    publishedAt: Schema.Attribute.DateTime;
    related: Schema.Attribute.Relation<'morphToMany'>;
    size: Schema.Attribute.Decimal & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    url: Schema.Attribute.String & Schema.Attribute.Required;
    width: Schema.Attribute.Integer;
  };
}

export interface PluginUploadFolder extends Struct.CollectionTypeSchema {
  collectionName: 'upload_folders';
  info: {
    displayName: 'Folder';
    pluralName: 'folders';
    singularName: 'folder';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    children: Schema.Attribute.Relation<'oneToMany', 'plugin::upload.folder'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    files: Schema.Attribute.Relation<'oneToMany', 'plugin::upload.file'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::upload.folder'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    parent: Schema.Attribute.Relation<'manyToOne', 'plugin::upload.folder'>;
    path: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    pathId: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'permission';
    pluralName: 'permissions';
    singularName: 'permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    role: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'role';
    pluralName: 'roles';
    singularName: 'role';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.role'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    type: Schema.Attribute.String & Schema.Attribute.Unique;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    users: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.user'
    >;
  };
}

export interface PluginUsersPermissionsUser
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'user';
    pluralName: 'users';
    singularName: 'user';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    blocked: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    confirmationToken: Schema.Attribute.String & Schema.Attribute.Private;
    confirmed: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.user'
    > &
      Schema.Attribute.Private;
    password: Schema.Attribute.Password &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    resetPasswordToken: Schema.Attribute.String & Schema.Attribute.Private;
    role: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    username: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ContentTypeSchemas {
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::permission': AdminPermission;
      'admin::role': AdminRole;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'admin::user': AdminUser;
      'api::about-page.about-page': ApiAboutPageAboutPage;
      'api::career-page.career-page': ApiCareerPageCareerPage;
      'api::facility-management-page.facility-management-page': ApiFacilityManagementPageFacilityManagementPage;
      'api::home-page.home-page': ApiHomePageHomePage;
      'api::legacy-page.legacy-page': ApiLegacyPageLegacyPage;
      'api::neighborhood-page-slug.neighborhood-page-slug': ApiNeighborhoodPageSlugNeighborhoodPageSlug;
      'api::neighborhood-page.neighborhood-page': ApiNeighborhoodPageNeighborhoodPage;
      'api::neighorhood-mbz-page.neighorhood-mbz-page': ApiNeighorhoodMbzPageNeighorhoodMbzPage;
      'api::property-management-page.property-management-page': ApiPropertyManagementPagePropertyManagementPage;
      'api::recognition-page.recognition-page': ApiRecognitionPageRecognitionPage;
      'api::services-leasing-services-page.services-leasing-services-page': ApiServicesLeasingServicesPageServicesLeasingServicesPage;
      'api::services-owners-association.services-owners-association': ApiServicesOwnersAssociationServicesOwnersAssociation;
      'api::services-page.services-page': ApiServicesPageServicesPage;
      'api::signature-project-ad-one-page.signature-project-ad-one-page': ApiSignatureProjectAdOnePageSignatureProjectAdOnePage;
      'api::signature-project-slug.signature-project-slug': ApiSignatureProjectSlugSignatureProjectSlug;
      'api::signature-project.signature-project': ApiSignatureProjectSignatureProject;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::review-workflows.workflow': PluginReviewWorkflowsWorkflow;
      'plugin::review-workflows.workflow-stage': PluginReviewWorkflowsWorkflowStage;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
    }
  }
}
