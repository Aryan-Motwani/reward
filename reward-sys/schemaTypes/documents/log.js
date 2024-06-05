import {defineArrayMember, defineField, defineType} from 'sanity'
import {PackageIcon} from '@sanity/icons'
import {getExtension} from '@sanity/asset-utils'
import pluralize from 'pluralize-esm'
import CollectionHiddenInput from '../../components/inputs/CollectionHidden'
import ShopifyDocumentStatus from '../../components/media/ShopifyDocumentStatus'
import {GROUPS} from '../../constants'

export const log = defineType({
  name: 'log',
  title: 'Log',
  type: 'document',
  fields: [
    defineField({
      name: 'username',
      title: 'Username',
      type: 'string',
    }),
    defineField({
      name: 'value',
      title: 'Value',
      type: 'string',
    }),
    defineField({
      name: 'provider',
      title: 'Provider',
      type: 'string',
    }),
  ],
})
